# NK JTB Framework

NK JTB (NayKel Just the Basics) is a utility-based SCSS/CSS framework — a
lightweight Tailwind-like alternative. Components provide structure; utilities
add styling.

> JTB follows similar principles to Tailwind but has different naming
> conventions and uses logical properties. Always refer to JTB documentation for
> correct scales, breakpoints, and class names. Tailwind values are intent
> references only — never direct mappings.

## Naming Conventions

- **Numbers = rem** — `m-1` = 1rem, `p-2` = 2rem, `gap-05` = 0.5rem (sub-1
  values drop the leading zero and decimal)
- **Property = class name** — use `relative`, `sticky`, `flex` directly. Never
  `position-relative` or `display-flex`
- **Axis modifiers** — `-t`, `-b`, `-l`, `-r`, `-x`, `-y` map to logical
  properties internally (e.g. `-t` → `block-start`, `-l` → `inline-start`)
- **Context-aware modifiers** — `.primary`, `.xs`, `.rounded` adapt to their
  component. Use `<button class="btn primary">` not `.btn-primary`
- **Logical properties by default** — use logical properties
  (`margin-inline-start`) not physical (`margin-left`). Physical properties only
  in explicitly positioned contexts

## Responsive Prefixes

Three distinct prefix types — do not substitute one for another:

- **`{bp}:`** (e.g. `md:flex`) — applies from breakpoint upward. Primary pattern
  for progressive layout and styling
- **`to-{bp}:`** (e.g. `to-md:hidden`) — applies below breakpoint. Use for
  visibility windows
- **`on-{bp}:`** (e.g. `on-md:hidden`) — applies only within that breakpoint
  range, non-cascading. Use for exact-range targeting

`on-` and `to-` are only generated for `display` and `visibility` utilities —
this is intentional. Use mixins for custom responsive behavior on other
properties.

## Auto Spacing

The framework automatically adds `margin-block-start` between content elements.
Do not manually add top margins between standard content elements — the spacing
system handles it. Elements inside flex or grid containers have margins reset;
use `gap` instead.

## Prohibited Patterns

- `@import` — use `@use` / `@forward`
- Component-specific modifiers like `.btn-primary` — use `<button class="btn
  primary">`
- Hardcoded values — use variables
- Deep nesting — maximum 3 levels
- `!important` — never use

## Common Pitfalls

- Use JTB class names only.
- Positional spacing utilities use `pxy` / `mxy`, not `p` / `m`.
- If a class name is not confirmed in JTB docs or source, stop and check
  before using it.
