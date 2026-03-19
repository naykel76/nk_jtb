---
name: jtb-layout
description: Layout strategy for the NK JTB framework. Use when building or converting page structure, choosing between grid and flex, replacing Tailwind layout patterns, evaluating custom grid-template requests, or finding documented JTB alternatives for responsive layouts.
---

Read `AGENTS.md` first. For layout or responsive work, read:

- `docs/responsive-design.md`
- `docs/conventions-and-architecture-rules.md`
- `docs/layer-system.md`
- `docs/examples/layouts-and-structures.md`
- `docs/layouts-and-structures.md`

## Scope (review)

Use this skill for structural layout decisions:

- page shells
- sidebar/content layouts
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
3. Prefer established layout patterns over custom structure:
   - sidebar + main
   - stacked mobile, split desktop
   - fixed-width aside + flexible content using flex or width utilities
4. If a Tailwind layout uses arbitrary grid templates, first ask whether the
   same result can be achieved by restructuring with documented JTB classes.
5. Only treat it as a framework gap when the documented primitives cannot
   express the layout cleanly.

## Rules (review)

- Do not preserve Tailwind arbitrary grid-template syntax by default.
- Do not create new classes just to reproduce one layout literally.
- Prefer mobile-first base layouts with responsive enhancement.
- Treat `container-*` as a layout primitive with built-in inline gutter. Do not
  add extra horizontal padding on the same element unless there is a clear
  reason.
- For `thirds-2-1` style structures, prefer documented grid spans or flex
  relationships before considering custom templates.
- When solving dropdown or overlay layering, put z-index on the positioned
  overlay element before trying to solve it on inner children.
- Use `{bp}:` for progressive layout changes.
- Use `to-` and `on-` primarily for visibility windows, not general layout
  progression.
- Keep visibility logic consistent within the same layout shell.
- Record unresolved layout gaps in a root-level notes file.

## Common Alternatives (review)

- Instead of custom two-column templates like `1fr 240px`, try:
  - `flex` + fixed-width aside + `flex-1`
  - `grid` with documented `cols-*` plus child width constraints
  - stacked mobile layout with a desktop split at `lg:`

- Instead of reproducing exact sidebar widths from Tailwind:
  - use the nearest documented width token first
  - only escalate when the difference materially breaks the layout

- Instead of mixing unrelated visibility strategies in one shell:
  - choose one documented pattern and apply it consistently

## Output Expectations (review)

- Explain the chosen layout strategy in terms of JTB primitives.
- Call out when a layout was intentionally restructured instead of literally
  copied.
- If no clean documented approach exists, document the gap for review rather
  than inventing a one-off layout API.

