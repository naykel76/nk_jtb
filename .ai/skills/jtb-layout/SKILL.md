---
name: jtb-layout
description: >-
  Use this skill whenever making layout decisions, choosing between grid and
  flex, building or converting page structure, or finding documented JTB
  alternatives to Tailwind layout patterns. Do not wait for an explicit
  request — if layout decisions are being made, this skill applies.
---

For layout or responsive work, read:

- `docs/responsive-design.md`
- `docs/conventions-and-architecture-rules.md`
- `docs/layer-system.md`
- `docs/layouts-and-structures.md`

## Scope (review)

Use this skill for structural layout decisions:

- page shells
- layout patterns
- reusable internal structures
- split layouts
- grid vs flex choices
- container and width strategy
- responsive visibility strategy
- alternatives to arbitrary grid-template columns

Do not use this skill for general documentation or for framework-internals work.

## Decision Order (review)

1. Recreate layout intent, not literal Tailwind syntax.
2. Try documented JTB primitives first:
   - `grid` with `cols-*`
   - `flex`, `flex-col`, `flex-1`, width utilities
   - `container-*`
   - spacing, alignment, and visibility utilities
3. Classify the problem correctly before choosing classes:
   - sidebar + main
   - reusable structures such as `thirds-2-1`
4. Prefer established layout patterns and structures over ad hoc reproduction:
   - stacked mobile, split desktop
   - fixed-width aside + flexible content using flex or width utilities
   - proportional grid splits when the relationship is clearer as columns
5. If a Tailwind layout uses arbitrary grid templates, first ask whether the same result can be achieved by restructuring with documented JTB classes.
6. Only treat it as a framework gap when the documented primitives cannot express the layout cleanly.

## Rules (review)

- Do not preserve Tailwind arbitrary grid-template syntax by default.
- Do not create new classes just to reproduce one layout literally.
- Prefer mobile-first base layouts with responsive enhancement.
- Treat `container-*` as a layout primitive with built-in inline gutter. Do not add extra horizontal padding on the same element unless there is a clear reason.
- For standard page sections, prefer `container` as the default wrapper.
- Use `container-*` variants only when the page type or reading width clearly calls for them, such as narrower documentation/content pages.
- Let the section or component own its internal padding. Use the container for width and placement, not as the main holder of reusable section spacing.
- Default section rhythm:
  - `py-4-3-2` for standard sections
  - `py-5-3-2` for more prominent sections
- Distinguish between page-level layouts and reusable structures before deciding on implementation.
- For `thirds-2-1`, prefer a simple documented grid split such as `lg:cols-3` with `lg:col-span-2` / `lg:col-span-1` before considering custom templates.
- When solving dropdown or overlay layering, put z-index on the positioned overlay element before trying to solve it on inner children.
- Use `{bp}:` for progressive layout changes.
- Use `to-` and `on-` primarily for visibility windows, not general layout progression.
- Keep visibility logic consistent within the same layout shell.
- Record unresolved layout gaps in `jtb-conversion-notes.md`.

## Common Alternatives (review)

- Instead of custom two-column templates like `1fr 240px`, try:
  - `flex` + fixed-width aside + `flex-1`
  - `grid` with documented `cols-*` plus child width constraints
  - stacked mobile layout with a desktop split at `lg:`

- Instead of inventing a new page layout name for a proportional split:
  - keep the page layout and the reusable structure separate
  - document the structure directly when the example is really about the split

- Instead of reproducing exact sidebar widths from Tailwind:
  - use the nearest documented width token first
  - only escalate when the difference materially breaks the layout

- Instead of mixing unrelated visibility strategies in one shell:
  - choose one documented pattern and apply it consistently

## Output Expectations (review)

- Explain the chosen layout strategy in terms of JTB primitives.
- Call out when a layout was intentionally restructured instead of literally copied.
- If no clean documented approach exists, document the gap in `jtb-conversion-notes.md` rather than inventing a one-off layout API.
