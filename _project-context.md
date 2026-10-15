# Project Context

## Parked

- **High priority:** Sidebar Panel structure (header, body, footer) as a
  copy-paste piece, probably in `structures.md` or a Sidebar element doc. Make
  it without `overflow-y-auto` (that only scrolls with a fixed height, and it
  clips anything hanging over the edge); scrolling stays a separate recipe.
  Currently only in the `(review)` Sticky Header and Footer variation.
- Rail labels: how users identify icons in the collapsed sidebar. Options:
  `title` attribute, a new styled tooltip component, or nothing. Important,
  undecided.
- Sidebar collapsed state isn't remembered across page loads. Needs Alpine
  `persist` (not installed) or `localStorage`. Left out for now.
- Cross-file cascade conflicts: classes that set the same property but are
  built in separate calls or files can still let a base class beat a
  breakpoint class (about 456k pairs, almost all `color`: text colours vs
  theme classes). The in-call order was fixed; this part needs its own design.
  Also: `flex-col`/`flex-row`/`flex-centered` set `display: flex` and come after
  the `to-`/`on-` display classes, so `flex-col to-md:hidden` never hides.
  Workaround: `hidden md:flex-col`.
- Responsive previews: the drag box can't switch off real `md:`/`lg:` classes,
  so breakpoints are tested by resizing the window. Resizable iframes (one
  HTML file per example) would make dragging work with no overrides.
- Feature table at the top of layout docs, for at-a-glance comparison of
  variations (e.g. responsive, hides on phones, collapsible, burger, scrolls
  independently). Columns to decide; keep consistent across layout docs.
- Workflow write-up notes (from the collapsible sidebar build):
    - Name skeleton regions after what they become in the Blade template
      (brand, nav, footer, main), so placeholders swap for slots/components
    - Something that hangs over an element's edge can't sit inside a scrolling
      (`overflow`) element, or it gets clipped
    - `items-center` only centres an element's own children
    - Drag-box overrides must reset each `md:` class to its fallback, then
      re-apply it from the box's `md` width
    - Commit as a checkpoint whenever a stage works on its own
- `fs-0` typo (should be `fs0`; `fs-0` has never been a JTB class) in the
  factsoflife app: layouts `admin`/`auth`, cart components, `course-viewer`,
  `section-exam-cram`, and gotime's `markdown` component. Pages still look
  fine, so check why (likely nothing squeezes those elements) before fixing.
- Turn the dashboard grilling into a reusable layout brief, possibly a form
  Nathan fills in. Questions asked, in order: top bar span, what scrolls,
  collapsed style, parent click in rail, toggle placement, brand in rail,
  behaviour per breakpoint, how overlays close, rail labels, remembered state,
  menu grouping, sidebar footer, animation, content scope.
- Discuss how layout examples are managed: where they're stored, what we do
  with them, and how they're described. So far: index is the workbench.
  Layout and skeleton mean the same thing (as `layouts.md` says), so
  structural shells go in `docs/layouts/`. `docs/examples/` is for full pages
  with real content. Still open: how a layout doc is formatted, and whether
  showcases are a separate category.
- Discuss where examples and showcases fit — docs keep one default per
  component; many variants (e.g. several navbars) may belong in a showcase
  instead.
- Document how the `resizable-container` demo overrides work — each responsive
  class in a demo needs its own override in `src/extras/_demo-overrides.scss`.
- Structures may be built more than one way (grid, flex, magic classes).
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
