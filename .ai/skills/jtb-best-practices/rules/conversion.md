# Conversion

Only for converting existing non-JTB code to JTB. Do not use for
design-to-code work from screenshots/mockups or building new components from scratch.

If the output file is not specified, ask before proceeding.

## Conversion Order

1. Replace source classes with documented JTB utilities or components.
2. When the source uses arbitrary/custom values, snap to the closest existing
   JTB token or utility instead of preserving the exact value.
3. Do not create new classes as a conversion shortcut.
4. If something appears to need a class, consider whether it should become a
   real framework component, utility, or documented pattern.
5. Record only actionable gaps in `jtb-conversion-notes.md` — missing
   utilities, unsupported patterns, or token mismatches that need a follow-up
   decision. Do not record resolved matches, clean conversions, or decisions
   made.
6. Only add local CSS when JTB cannot express the requirement.

## Rules

- Treat source classes as intent references, not direct mappings.
- For color, reach for the closest JTB palette utility first (`bg-stone-50`,
  `txt-stone-900` etc.). If the brand color maps to a semantic role, override
  the JTB token via `:root` (e.g. `--primary`). If no palette utility or
  semantic token is a reasonable match, record it in `jtb-conversion-notes.md`
  and leave the decision to the developer — do not create a custom color class.
- Remove no-op or default classes that do not materially change the layout or
  styling.
- When Tailwind transition syntax depends on unsupported `duration-*`, easing,
  or delay utilities, simplify to the closest supported JTB transition pattern
  and record the missing utility coverage.
- Keep Alpine `x-data` scoped to the element that directly owns or uses the
  state. Do not move it to a broader parent unless multiple descendants
  genuinely share the same state.

## Review Checklist

- Remove source-only syntax such as arbitrary value classes where a JTB utility exists.
- Remove classes that only restate the default behavior.
- Document missing utilities or unsupported patterns in `jtb-conversion-notes.md`.
