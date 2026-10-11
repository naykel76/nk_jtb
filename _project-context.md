# Project Context

## Open

- Does every JTB component become a Blade component? Two paths exist with no
  rule: JTB ships a class and Blade wraps it (box, button, accordion, navbar,
  menu, list), or JTB ships nothing and Blade composes utilities (alert, toast,
  tooltip, modal, toolbar, spinner). Gotime ships no CSS at all.
- Component docs don't follow the agreed section order. `box.md` and
  `button.md` use sibling `##` variants; `list.md` has `### SCSS Variables`
  under `## Variants`. `navbar.md` is the reference implementation.
- CSS-only accordion is not keyboard operable — `_accordion.scss` uses
  `display: none` on the toggle input.
- `+demo` and `preview-class` render only on the Laravel side, not in
  `scripts/markdown-renderer.js`. Six files in `docs-staging/` use
  `preview-class`.
- Prefix hyphenation is written down nowhere — prefixes carry their own
  separator in `maps_and_variables/_config.scss`, giving `fs0`, `tac` but
  `bdr-1`, `lh-tight`. Belongs in `conventions-and-architecture-rules.md`.
- `sync-jtb` runs without `-Delete`, so deletions never propagate and a file
  present only on the naykel side gets copied back.
- No `.burger`/`.hamburger` or sidebar component exists in `src/components/`,
  and no toggle mechanism has been chosen. `navbar.md` `## Responsive` needs a
  line pointing at the burger once one exists.

## Decided

- The burger is not a navbar variant — it's a disclosure control whose target
  is usually a sidebar. Both are their own components. Sidebar is the
  prerequisite.
- `.navbar` keeps `$navbar-bg: $primary` rather than following the `.btn`
  convention of shipping no colour. Changing it breaks existing bars. Open
  question is whether a generalised container should carry a brand colour.
- Embedded components in `navbar.md` examples should link out to their own
  doc rather than duplicating the markup.
