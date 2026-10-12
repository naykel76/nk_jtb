# Component Documentation

## Section Order

Every section is optional. When present, they appear in this order:

1. Title and lead
2. `## Basic Usage` — minimum working example
3. An explainer section, named for what it covers
4. `## Responsive`
5. `## Examples` — class examples, one `###` each
6. `## SCSS Variables`
7. `## Utility Examples`

## Rules

- A new topic gets its own `##` (e.g. `## Responsive`). Variations of one thing
  nest as `###` — never sibling `##` sections.
- Tag each example: `class="bx example-jtb"` for class examples,
  `class="bx example-utils"` for utility examples.
- A component may have class examples, utility examples, or both. Utility
  examples usually come first; a class may follow later. Never create one just
  to pair the other.
- In utility examples, rebuild only what the component is for. Other components
  inside it keep their own classes — a navbar rebuilds its menu but keeps `.btn`.
- Link to `/docs/jtb/variable-system` for overrides rather than explaining
  inline.
