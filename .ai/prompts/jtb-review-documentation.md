Review the documentation for the JTB framework.

Invoke the `jtb-documentation` skill before starting. Read these in full first — they define what is correct:

- `introduction.md`
- `docs/conventions-and-architecture-rules.md`

## Goals

1. Validate what exists — correct, consistent, and rule-compliant?
2. Identify what's missing — absent but expected?

## Process

Three passes:

1. **Identify** — surface contradictions and gaps. Flag incompleteness without treating it as failure.
2. **Triage** — decide what's worth pursuing before any work happens.
3. **Sweep** — act only on approved items.

## Scope

Review only:

- `docs/` — all foundational documentation
- `src/maps_and_variables/` — all variable and configuration files

Do not review:

- `src/mixins/`, `src/functions/`, `src/base/` — build system internals and output layer

## Review Questions

### Validation

1. Do variable files in `src/maps_and_variables/` match what the conventions doc describes?
2. Do all final maps follow the `-map` suffix rule?
3. Is the three-map pattern applied consistently?
4. Is `smart-merge` order correct — variants first, values second?
5. Are `!default` flags present where required?
6. Do breakpoint values in `_base.scss` match `responsive-design.md`?
7. Does `index.scss` forward all expected files?

### Gaps

1. Are there variable files with no corresponding documentation?
2. Are there conventions with no implementation in `src/maps_and_variables/`?

## Priorities

- `critical` — contradicts a source of truth. Must fix.
- `high` — likely causes confusion or future breakage. Should fix.
- `low` — minor improvement. Fix if you want.
- `missing` — expected content that isn't there.

## Output

Be direct. Do not praise. Call out anything unclear or inconsistent.

Write results to `review-docs.md` in the project root using these sections:

**Confirmed Issues** — rule violations, bugs, mismatches
**Issue title** · `critical/high/low`
`file:line`
Rule: brief quote
Fix: on
