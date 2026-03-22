---
name: tailwind-to-jtb
description: Convert Tailwind-oriented HTML and class usage to NK JTB framework classes and documented patterns. Use when updating markup that currently uses Tailwind classes, arbitrary values, or Tailwind-style responsive/layout conventions and the goal is to express the same intent with JTB.
---

Read `AGENTS.md` first. For responsive or layout conversion, read:

- `docs/responsive-design.md`
- `docs/conventions-and-architecture-rules.md`
- `docs/layer-system.md`

## Conversion Order (review)

1. Replace Tailwind classes with documented JTB utilities or components.
2. When the source uses arbitrary/custom values, snap to the closest existing
   JTB token or utility instead of preserving the exact Tailwind value.
3. Do not create new classes as a conversion shortcut.
4. If something appears to need a class, consider whether it should become a
   real framework component, utility, or documented pattern.
5. Record any imperfect token match or missing framework support in a root-level
   notes file for review.
6. Only add local CSS when JTB cannot express the requirement.

## Rules (review)

- Treat Tailwind classes as intent references, not direct mappings.
- Prefer documented JTB scales, breakpoints, and logical-property utilities.
- When replacing `max-w-* mx-auto px-*` wrappers, check whether a `container-*`
  utility already expresses the same intent without extra horizontal padding.
- For normal page sections, prefer `container` first.
- Only step up to a `container-*` variant when the page type or reading width
  clearly calls for it.
- Keep padding ownership on the section or component where possible. Use the
  container for width, not as the default home for reusable section spacing.
- Prefer framework components when the structure already matches what they
  provide. Common examples include `navbar`, `bx`, `bx-header`, `bx-content`,
  `bx-footer`, and `divide-y`.
- Before finalizing a conversion, check whether repeated card-like shells such
  as `bg-white` + border + radius combinations should be expressed as `bx`
  instead.
- Check whether small badge-like UI should use existing `badge` variants before
  rebuilding the same shape with low-level utilities.
- Check whether button-like controls should use the `btn` component before
  rebuilding pill/button shells with low-level utilities.
- Remove no-op or default classes that do not materially change the layout or
  styling.
- Prefer semantic utility tokens such as `txt-muted` when they match the intent,
  instead of repeatedly assembling the same low-level token combination.
- If JTB cannot express a requirement, prefer a small reusable local helper
  class over repeating the same inline styles across multiple elements.
- When Tailwind transition syntax depends on unsupported `duration-*`, easing,
  or delay utilities, simplify to the closest supported JTB transition pattern
  and record the missing utility coverage.
- Keep Alpine `x-data` scoped to the element that directly owns or uses the
  state. Do not move it to a broader parent unless multiple descendants
  genuinely share the same state.
- Use `{bp}:` for progressive changes.
- Use `to-` / `on-` for visibility windows.
- Keep visibility logic consistent within the same layout shell.
- Do not create new classes just to make a single conversion easier.

## Review Checklist (review)

- Remove Tailwind-only syntax such as arbitrary value classes where a JTB
  utility exists.
- Check whether an existing component expresses the structure more cleanly than
  rebuilding it with low-level utilities.
- Check whether button-like controls are better expressed with `btn` plus theme
  or utility overrides.
- Check whether repeated inline styles should be turned into a small reusable
  local helper instead.
- Remove classes that only restate the default behavior.
- Check whether a nearby JTB token is acceptable before creating custom CSS.
- Document missing utilities or unsupported patterns in a root-level notes file.
- Flag framework gaps that should become docs or utilities later.

