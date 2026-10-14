# Current Task

Goal: create a dashboard with a collapsible sidebar.

## Steps

1. Brief: settle the behaviour (done)
2. Skeleton: bare-bones structure only, built from documented layouts where
   they exist (done)
3. Behaviour: add one behaviour at a time, and check it works before the next
4. Content: put documented elements in (menu, and so on)
5. Polish: real icons and labels instead of placeholders
6. Store: move it to its permanent page, and feed gaps back into the docs

## Brief

- Sidebar runs the full height beside main, each scrolls on its own. No top
  bar for now
- `md` and up: starts full. A round double-chevron button on the sidebar's
  edge, level with the top row, collapses it to an icon rail. Animated
- No brand in the sidebar. Where the brand lives is open
- Clicking a parent in the rail expands the sidebar with it open
- Below `md`: hidden, opens over the content (trigger to decide). Closes on
  backdrop click, Escape, or choosing a link
- Menu groups separated by lines. No sidebar footer
