Review the `[component]` component.

Invoke the `jtb-documentation` skill before starting. Read
`docs/conventions-and-architecture-rules.md` in full.

## Scope

Review only the named target and its directly related docs and examples.

## Review Questions

1. Is the documentation correct and complete?
2. Does the code follow JTB rules and conventions?
3. Does it match the JTB philosophy and architecture rules?
4. Are there any mismatches between docs and code?
5. Are there any prohibited patterns in this target?
6. Are there target-level bugs or regressions visible?

## Priority Definitions

- `critical` — violates a documented rule or produces incorrect behavior. Must fix.
- `high` — likely causes confusion, inconsistency, or future breakage. Should fix.
- `low` — style, preference, or minor improvement. Fix if you want.

## Output Requirements

- Be direct and critical.
- Do not praise unnecessarily.
- Separate strengths and weaknesses clearly.
- Suggest improvements with trade-offs.
- If something is unclear or inconsistent, call it out explicitly.

Write results to `review-[component].md` in the project root.

Use these sections in order:

- **Confirmed Issues**
- **Docs-Code Mismatches**
- **Findings**
- **Pass** — if no confirmed issues: `No blocking issues found.`

For every issue use this format:

**Issue title** · `critical/high/low`
`file:line`
Rule: brief quote
Fix: one line
