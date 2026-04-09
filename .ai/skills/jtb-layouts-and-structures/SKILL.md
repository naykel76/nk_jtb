---
name: jtb-layouts-and-structures
description: >-
  Use this skill whenever making layout or structural decisions — choosing
  between grid and flex, building page shells, or structuring internal
  component layouts. Do not wait for an explicit request — if layout or
  structural decisions are being made, this skill applies.
---

For layout or responsive work, read:

- `docs/responsive-design.md`
- `docs/layouts-and-structures.md`
- `docs/magic-classes.md`

## Scope

Use this skill for structural layout decisions:

- page shells
- layout patterns
- reusable internal structures
- split layouts
- grid vs flex choices
- container and width strategy
- responsive visibility strategy

Do not use this skill for general documentation or for framework-internals work.

## Decision Order

1. Classify the problem first — page-level layout or internal component
   structure?
2. Choose the right primitive:
   - `grid` with `cols-*` for column-based structures
   - `flex` for linear, single-axis arrangements
   - `container-*` for width and placement
3. Check whether JTB already provides an approved magic or composite class that
   reduces responsive noise for the pattern you need.
4. Build mobile-first. Add explicit `{bp}:` responsive utilities only when no
   documented higher-level pattern expresses the layout cleanly.
5. Only escalate to custom solutions when documented primitives cannot express
   the need cleanly.

## Markup

- Do not add `data-*` attributes unless explicitly requested.

## Rules

- Prefer mobile-first base layouts with responsive enhancement.
- Default to the fewest structural elements that cleanly express the layout.
- Combine width, rhythm, and internal layout on the same element when they do
  not need isolation.
- Do not split `container`, padding, and grid/flex across extra wrappers unless
  one of those concerns genuinely needs its own box.
- Put shared layout/presentation utilities on the highest valid parent. Only
  repeat them on children when a child genuinely needs a different value.
- Treat `container-*` as a layout primitive with built-in inline gutter. Do not
  add extra horizontal padding on the same element.
- Let the component own its internal padding. Use the container for width and
  placement only.
- Default section rhythm:
  - `py-4-3-2` for standard sections
  - `py-5-3-2` for more prominent sections
- Prefer approved magic/composite classes when they express an established
  responsive pattern more clearly than explicit breakpoint chains. Common
  examples include `py-*`, `gap-*`, and `cols-*` patterns.
- Use `{bp}:` for progressive layout changes.
- Use `to-` and `on-` primarily for visibility windows, not layout progression.
