# NK JTB Framework

NK JTB (NayKel Just the Basics) is a utility-based SCSS/CSS framework — a
lightweight Tailwind-like alternative. Components provide structure; utilities
add styling.

> JTB follows similar principles to Tailwind but has different naming
> conventions and uses logical properties. Always refer to JTB documentation for
> correct scales, breakpoints, and class names. Tailwind values are intent
> references only — never direct mappings.

## Prohibited Patterns

- `@import` — use `@use` / `@forward`
- Component-specific modifiers like `.btn-primary` — use `<button class="btn
  primary">`
- Hardcoded values — use variables
- Deep nesting — maximum 3 levels
