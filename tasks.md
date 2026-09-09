# Tasks

## Planned

- **Update remaining component docs to the agreed section order** — the order
  and heading rules live in `jtb-documentation`; `navbar.md` is the reference
  implementation. Known issues from surveying: `box.md` and `button.md` use
  sibling `##` variants (`## With Header`, `## Button Themes`) instead of `###`
  under a grouping; `list.md` has `### SCSS Variables` nested under
  `## Variants` at the wrong level. `accordion.md`, `menu.md` and `table.md`
  look close but were not checked in detail. `forms.md` and `overview.md` may
  not follow component-doc rules at all.
- **CSS-only accordion is not keyboard operable** — `_accordion.scss` hides the
  toggle input with `display: none`, which removes it from the accessibility
  tree, so the CSS version cannot be reached or operated by keyboard. Found
  while reviewing `accordion.md`, which had claimed the input stayed focusable.
  The doc claim is fixed; the underlying behaviour is not. A visually-hidden
  pattern (clipped, not `display: none`) would restore it.

## Parked

- **Burger menu + sidebar** — decided the burger is not a navbar variant. It is
  a disclosure control whose target is usually a sidebar, and both are their own
  components. `navbar.md` documents the hand-off (`## Responsive`, menu hides
  below md), not the mechanism. No `.burger`/`.hamburger` and no sidebar
  component exist in `src/components/`, and no toggle mechanism has been chosen
  (checkbox, `<details>`, or inert markup the consumer wires up). Sidebar is the
  prerequisite — the burger has nothing to open without it. When revisited,
  `navbar.md` `## Responsive` needs a line pointing at the burger so the demo
  does not read as "the nav disappears below md".
- **Cross-link embedded components from `navbar.md`** — when an element like a
  burger menu, dropdown or sidebar appears inside a navbar example, link out to
  that component's own doc so the reader can find the real markup and detail.
  The navbar page should not duplicate them.
- **Should `.navbar` follow the button convention?** — `$btn-bg: transparent` /
  `$btn-color: inherit`, so `.btn` ships no colour and gets it from a theme
  class (`<button class="btn primary">`). `.navbar` ships `$navbar-bg: $primary`
  instead. Decided against changing it for now because it breaks existing bars,
  and fixed the actual bug instead (`.navbar` now derives its text colour). The
  open question is whether a generalised container should carry a brand colour
  at all. `.box` is not a precedent — it needs a surface to be a box.
