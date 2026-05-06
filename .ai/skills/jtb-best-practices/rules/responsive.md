# Responsive

## Ask First

Before writing any grid, flex layout, or visibility utility, ask:

> Does this need to be responsive?

If the task or design does not specify responsive behaviour, ask before assuming.
Do not add or omit responsive prefixes without knowing the answer.

## Prefix Types

Three distinct prefix types — do not substitute one for another:

| Prefix      | Example         | Applies when                          |
| ----------- | --------------- | ------------------------------------- |
| `{bp}:`     | `md:flex`       | From breakpoint upward (min-width)    |
| `to-{bp}:`  | `to-md:hidden`  | Below breakpoint (max-width)          |
| `on-{bp}:`  | `on-md:hidden`  | Exactly at that breakpoint range only |

`on-` and `to-` are only generated for `display` and `visibility` utilities.
Do not use them for layout, spacing, or other properties — use mixins for
custom responsive behaviour on other properties.

## Mobile-First

Build the base layout for the smallest viewport. Add `{bp}:` prefixes to
progressively enhance upward. Do not start from desktop and work down.

## Common Breakpoints

`sm`, `md`, `lg`, `xl`, `xxl` — always confirm against the JTB breakpoint map
before using a breakpoint that is not already present in the codebase.
