# OpenCode Directory Types

## Project Structure

```bash +code
project/
├── AGENTS.md                 ← Special file (root, no .opencode/)
├── opencode.json             ← Config file (root)
└── .opencode/
    ├── context/             ← Auto-loaded guidelines
    ├── skills/              ← On-demand skills
    └── agents/              ← Custom subagents
```

## Where Config Lives

| File            | Purpose       | How Used                                     |
| --------------- | ------------- | -------------------------------------------- |
| `opencode.json` | Main config   | Must be named exactly, references everything |
| `AGENTS.md`     | Project agent | OpenCode auto-discovers in root              |

## Directory Types

```bash +code
.opencode/
├── context/      ← Auto-loaded
├── skills/      ← On-demand
└── agents/      ← On-demand
```

## Context vs Skills vs Agents

|            | Auto-loaded | On-demand | Use When                     |
| ---------- | ----------- | --------- | ---------------------------- |
| `context/` | ✓           |           | Guidelines that always apply |
| `skills/`  |             | ✓         | Task-specific instructions   |
| `agents/`  |             | ✓         | Specialized workers          |

---

## Context/

General guidelines loaded automatically.

```bash +code
.opencode/context/
└── *.md            # Referenced in opencode.json
```

**When to add:**

- Working preferences (e.g., `working-with-nathan.md`)
- SCSS conventions (e.g., `scss-guidelines.md`)
- Team coding standards
- Framework philosophy

**Example:**

```json +code
// opencode.json
{
  "instructions": [
    ".opencode/context/scss-guidelines.md",
    ".opencode/context/working-with-nathan.md"
  ]
}
```

---

## Skills/

Reusable task-specific modules loaded on-demand.

```bash +code
.opencode/skills/
└── <name>/
    └── SKILL.md    # Frontmatter required
```

**When to add:**

- Language-specific formatting (e.g., `markdown-formatting/`)
- Tool-specific workflows (e.g., `git-commit/`)
- Framework patterns (e.g., `laravel-php/`)

**Example SKILL.md:**

```yaml +code
---
name: markdown-formatting
description: Applies markdown conventions with Torchlight tags
---
## When to use
Writing or editing markdown files with Torchlight code blocks.
```

---

## Agents/

Custom subagents invoked for specialized tasks.

```bash +code
.opencode/agents/
└── <name>.md
```

**When to add:**

- SCSS Engineer (framework-specific work)
- API Specialist (backend work)
- Test Writer (test patterns)

**Example:**

```bash +code
skill({ name: "scss-engineer" })  ← Agent invoked for SCSS tasks
```

---

## Quick Reference

| Need                        | Place           |
| --------------------------- | --------------- |
| Guidelines that always load | `context/`      |
| Task-specific instructions  | `skills/`       |
| Specialized worker          | `agents/`       |
| Main config                 | `opencode.json` |
| Project agent               | `AGENTS.md`     |

---
