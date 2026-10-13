# Component Documentation

## Section Order

Every section is optional. When present, they appear in this order:

1. Title and lead
2. `## Basic Usage` — one default example, responsive. Bullets explain each
   class that makes it work. Add `### How It Works` when the underlying
   mechanics aren't obvious from the example
3. `## Examples` — only for class variations that need their own explanation
4. `## SCSS Variables`
5. `## Utility Examples`

## Rules

- A new topic gets its own `##` (e.g. `## SCSS Variables`). Variations of one
  thing nest as `###` — never sibling `##` sections.
- Tag each example: `class="bx example-jtb"` for class examples,
  `class="bx example-utils"` for utility examples. Responsive demos replace
  `bx` with `resizable-container with-docs-only-overrides` and keep the tag.
- A component may have class examples, utility examples, or both. Utility
  examples usually come first; a class may follow later. Until a class exists,
  the Basic Usage example is a utility example. Never create one just to pair
  the other.
- Utility examples are blueprints, built separately from the class examples.
  They don't have to match Basic Usage in content or responsiveness, so don't
  flag the differences or change one to match the other.
- In utility examples, rebuild only what the component is for. Other components
  inside it keep their own classes. A navbar rebuilds its menu but keeps `.btn`.
- Link to `/docs/jtb/variable-system` for overrides rather than explaining
  inline.
