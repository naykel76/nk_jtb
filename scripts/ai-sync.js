#!/usr/bin/env node

/**
 * ai-sync.js
 *
 * Single source of truth: .ai/
 *
 * .ai/guidelines/  → compiled into each agent's root instruction file
 * .ai/skills/      → copied to each agent's expected skills directory
 * .ai/agents/      → copied to each agent's expected agents directory
 *
 * Nothing outside .ai/ and scripts/ is committed to the repo.
 * All generated files are gitignored.
 *
 * Usage:
 *   node scripts/ai-sync.js
 *   npm run ai:sync
 *
 * To add a new agent, add an entry to the AGENTS array below.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const AI_DIR = path.join(ROOT, ".ai");
const GUIDELINES = path.join(AI_DIR, "guidelines");
const SKILLS_SRC = path.join(AI_DIR, "skills");
const AGENTS_SRC = path.join(AI_DIR, "agents");

// ---------------------------------------------------------------------------
// Agent config
//
// Each agent defines:
//   name        display name for logging
//   output      root instruction file path (relative to project root)
//   header      prepended to the compiled guidelines content
//               set to null if this agent shares an output file already written
//   skills      where to copy .ai/skills/ (null = not supported)
//   agents      where to copy .ai/agents/ (null = not supported)
// ---------------------------------------------------------------------------

const AGENTS = [
    {
        name: "Claude Code",
        output: "CLAUDE.md",
        header: "# CLAUDE.md\n\nThis file provides guidance to Claude Code when working with code in this repository.\n",
        skills: ".claude/skills",
        agents: ".claude/agents",
    },
    {
        name: "Codex",
        output: "AGENTS.md",
        header: null,
        skills: ".agents/skills",
        agents: ".agents/agents",
    },
    // {
    //     name: "OpenCode",
    //     output: "AGENTS.md",
    //     header: "# AGENTS.md\n\nThis file provides guidance to OpenCode when working with code in this repository.\n",
    //     skills: ".opencode/skills",
    //     agents: ".opencode/agents",
    // },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyDirSync(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function wipeAndCopy(src, relDest, label) {
    if (!fs.existsSync(src)) {
        console.log(`     ⚠  ${label} source not found — skipping`);
        return;
    }
    const dest = path.join(ROOT, relDest);
    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true });
    copyDirSync(src, dest);
    console.log(`     ${label.padEnd(10)} → ${relDest}`);
}

function compileGuidelines() {
    if (!fs.existsSync(GUIDELINES)) {
        console.error(`❌  .ai/guidelines/ not found`);
        process.exit(1);
    }

    const files = fs
        .readdirSync(GUIDELINES)
        .filter((f) => f.endsWith(".md"))
        .sort(); // prefix files with 01-, 02- etc. to control order

    if (files.length === 0) {
        console.warn(`⚠️  No .md files found in .ai/guidelines/`);
        return "";
    }

    return files
        .map((file) => {
            const content = fs.readFileSync(path.join(GUIDELINES, file), "utf-8");
            const label = `=== ${path.basename(file, ".md")} ===`;
            return `${label}\n\n${content.trim()}`;
        })
        .join("\n\n---\n\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("\n🔄  ai-sync\n");
console.log("  Source: .ai/guidelines/  .ai/skills/  .ai/agents/\n");

const compiled = compileGuidelines();
const notice = `<!-- ⚠️  GENERATED — do not edit directly. Source: .ai/ | Script: scripts/ai-sync.js -->\n\n`;
const written = new Set();

for (const agent of AGENTS) {
    console.log(`  ${agent.name}`);

    // Root instruction file
    if (agent.header && !written.has(agent.output)) {
        const content = `${notice}${agent.header}\n${compiled}\n`;
        const outPath = path.join(ROOT, agent.output);
        ensureDir(outPath);
        fs.writeFileSync(outPath, content, "utf-8");
        written.add(agent.output);
        console.log(`     rules      → ${agent.output}`);
    } else if (agent.header && written.has(agent.output)) {
        console.log(`     rules      → ${agent.output} (shared, already written)`);
    } else {
        console.log(`     rules      → ${agent.output} (shared with previous agent)`);
    }

    // Skills
    if (agent.skills) wipeAndCopy(SKILLS_SRC, agent.skills, "skills");

    // Agents/subagents
    if (agent.agents) wipeAndCopy(AGENTS_SRC, agent.agents, "agents");
}

console.log(`
✅  Done.

Add to .gitignore:
  CLAUDE.md
  AGENTS.md
  .claude/
  .opencode/
  .agents/
`);
