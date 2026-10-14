# Project Context

## Parked

- Discuss where examples and showcases fit — docs keep one default per
  component; many variants (e.g. several navbars) may belong in a showcase
  instead.
- Document how the `resizable-container` demo overrides work — each responsive
  class in a demo needs its own override in `src/extras/_demo-overrides.scss`.
- Structures may be built more than one way (grid, flex, magic classes).
- Add a "collapse to a rail" version to `sidebar-main.md` once the Sidebar and
  Sidebar Toggle elements exist.
- `sidebar-main.md`: split scrolling into goal-based recipes (scrollable
  sidebar, app shell). Scrollable sidebar needs an `h-screen` docs-only
  override in `src/extras/_demo-overrides.scss`.
- Reference page (`index.html`): consider a standard page layout for `main`
  (currently `container py`) — may need its own layout doc.
- `scss-engineer` skill references files that don't match the repo:
  `docs/conventions-and-architecture-rules.md` (only in `docs-staging/`) and
  `framework-status.md` (tracker is `jtb-status.md`).
- Shared `nk-documentation-best-practices/rules/component-docs.md` contradicts
  JTB `component-docs.md` (Basic Usage "minimum working example" vs "typical
  use"; "add sections when…" vs "don't add or remove sections on your own").
  Consider trimming section structure out of the shared rule.
- Demo-block guidance is repeated in `markdown-formatting`, JTB
  `code-blocks.md` and the tagging line in `component-docs.md`. Make
  `code-blocks.md` the one place for JTB demo attributes.
- JTB `code-blocks.md` names `docs/examples/showcase-*.md` files that don't
  exist, and where showcases fit is still undecided.

## Decided
