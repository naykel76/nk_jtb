---
name: jtb-best-practices
description: >-
  Use this skill whenever writing, reviewing, or auditing HTML and CSS that
  uses the NK JTB framework — including component composition, utility
  application, and layout work. Do not wait for an explicit request — if JTB
  classes or components are being written or reviewed, this skill applies.
---

# NK JTB Best Practices

## Verify Before Using

Never use a class without confirming it exists in JTB source or documentation.
Pattern-matching from one scale to another is the most common source of invalid
classes in JTB — each scale is generated independently.

If a class cannot be confirmed in the SCSS source or docs, stop and check before using it.

## Quick Reference

Read the relevant rule file before writing markup. Summaries below are for
navigation only — the rule files take precedence.

### Units & Naming → `rules/units-and-naming.md`

- `m-1` = 1rem, `gap-05` = 0.5rem — sub-1 values drop the leading zero and decimal
- Values ≥ 1 with decimals use the literal decimal in HTML: `gap-1.5`, not `gap-15`
- All-sides shorthand is `pxy` / `mxy`, not `p` / `m`
- Context-aware modifiers on the component: `<button class="btn primary">`, not `.btn-primary`
- Logical properties by default — `margin-inline-start` not `margin-left`

### Responsive → `rules/responsive.md`

- Ask whether responsive behaviour is needed before writing any grid, flex, or visibility utility
- `{bp}:` for progressive layout, `to-{bp}:` for visibility windows, `on-{bp}:` for exact-range only
- `on-` and `to-` are only generated for `display` and `visibility`
- Build mobile-first — base styles first, breakpoint prefixes upward

### Components & Tokens → `rules/components.md`

- Use `bx` for bordered/padded containers — not `bg-white bdr rounded shadow`
- Use `btn` for all button-like controls
- Use `badge` for small label/tag UI before building from scratch
- Use `txt-muted`, `txt-primary` before reaching for palette utilities
- Use a local helper class when JTB cannot express a requirement — never inline styles

### Conversion → `rules/conversion.md`

- Only for converting existing non-JTB code to JTB — not for design-to-code work or building new components from scratch
- Treat source classes as intent references, not direct mappings
- Snap arbitrary values to the closest JTB token — do not preserve exact values
- Record actionable gaps in `jtb-conversion-notes.md` — missing utilities, token mismatches
- Do not create new classes just to make a single conversion easier

### Layouts & Structures → `rules/layouts.md`

- `grid` with `cols-*` for column-based structures, `flex` for single-axis arrangements
- Build mobile-first — add `{bp}:` utilities only when no higher-level pattern fits
- Fewest structural elements that cleanly express the layout
- Default section rhythm: `py-4-3-2` standard, `py-5-3-2` prominent
