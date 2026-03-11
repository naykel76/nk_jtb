# JTB Documentation Review

Review the documentation for the JTB framework.

Load and read these in full first. These define what is correct:

- `introduction.md`
- `docs/conventions-and-architecture-rules.md`

Also load:

- `AGENTS.md` — intended source of truth, but flag any contradictions with the
  above.

## Goals

1. Validate what exists — is documentation correct, consistent, and
   rule-compliant?
2. Identify what's missing — what is absent but expected?

## Process

This review runs in three passes:

1. **Identify** — surface contradictions and gaps. Incomplete docs are expected;
   flag them without treating incompleteness as a failure.
2. **Triage** — decide what's worth pursuing before any work happens.
3. **Sweep** — act only on approved items.

---

## Scope

Review only:

- `docs/` — all foundational documentation
- `src/maps_and_variables/` — all variable and configuration files

Do not review:

- `src/mixins/` — build system internals
- `src/functions/` — build system internals
- `src/base/` — output layer

---

## Review Questions

### Validation

1. Do the variable files in `src/maps_and_variables/` match what the
   conventions doc describes?
2. Do all final maps follow the `-map` suffix rule?
3. Is the three-map pattern applied consistently across all variable files?
4. Is `smart-merge` order correct — variants first, values second?
5. Are `!default` flags present where the conventions require them?
6. Do the breakpoint values in `_base.scss` match what `responsive-design.md`
   describes?
7. Does `index.scss` forward all expected files?

### Gap Identification

1. Are there variable files with no corresponding documentation?
2. Are there conventions described in the docs with no implementation in
   `src/maps_and_variables/`?

---

## Priority Definitions

> Priorities are tentative in early passes — they guide triage, not final
> decisions.

- `critical` — contradicts a source of truth or produces incorrect guidance.
  Must fix.
- `high` — likely causes confusion, inconsistency, or future breakage. Should
  fix.
- `low` — style, preference, or minor improvement. Fix if you want.
- `missing` — expected content that isn't there.

---

## Output Requirements

- Be direct and critical.
- Do not praise unnecessarily.
- Separate findings by type clearly.
- Suggest improvements with trade-offs.
- If something is unclear or inconsistent, call it out explicitly.

Write results to `review-docs-run1.md` in the project root.

Use these sections in order:

- **Confirmed Issues** — rule violations, bugs, mismatches
- **Gaps** — missing docs, tests, examples, or conventions
- **Findings** — observations that don't rise to issues
- **Pass** — if no confirmed issues: `No blocking issues found.`

For every confirmed issue use this format:

**Issue title** · `critical/high/low`
`file:line`
Rule: brief quote
Fix: one line

For every gap use this format:

**Gap title** · `missing`
What's absent and where it's expected.
