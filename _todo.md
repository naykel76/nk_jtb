# TODO

- Review the JTB skills
  - `jtb-best-practices`
    - `rules/components.md`
    - `rules/conversion.md`
    - `rules/layouts.md`
    - `rules/responsive.md`
    - `rules/units-and-naming.md`
  - `scss-engineer`: clarify conventions source and separate framework-status
    tracker (parked)
- Local docs viewer: replace the missing `wip.md` default
- `sidebar-main.md`: split scrolling into goal-based recipes (scrollable
  sidebar, app shell)
- Document how the demo overrides work
- Feature table for layout docs
- Structures built more than one way (grid, flex, magic classes)
- Standard `main` layout for pages
- Resizable iframes for responsive previews
- Remembered sidebar collapsed state (Alpine `persist`)
- factsoflife: fix `fs-0` typo (check why it still looks fine first)
- Rail labels: tooltip, `title`, or nothing
- Write up the page-building workflow (doc or skill)
  - Steps: brief (settle the behaviour), skeleton (bare-bones structure from
    documented layouts), behaviour (one at a time, check each works), content
    (documented elements), polish (real icons and labels), store (permanent
    page, feed gaps back into the docs)
  - Lessons from the collapsible sidebar build:
    - Name skeleton regions after what they become in the Blade template
      (brand, nav, footer, main), so placeholders swap for slots/components
    - Something that hangs over an element's edge can't sit inside a scrolling
      (`overflow`) element, or it gets clipped
    - `items-center` only centres an element's own children
    - Drag-box overrides must reset each `md:` class to its fallback, then
      re-apply it from the box's `md` width
    - Commit as a checkpoint whenever a stage works on its own
    - Build from confirmed sections; treat `(review)` content as a draft
  - Layout brief: turn the dashboard grilling into a reusable brief, possibly a
    form to fill in. Questions, in order: top bar span, what scrolls, collapsed
    style, parent click in rail, toggle placement, brand in rail, behaviour per
    breakpoint, how overlays close, rail labels, remembered state, menu
    grouping, sidebar footer, animation, content scope
