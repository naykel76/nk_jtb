# Component Documentation

## Document Sections

This is the usual shape of a component doc, generally in this order. Some
components have more or fewer sections, and that's decided per component.
Don't add or remove sections on your own.

1. Title and lead
2. `## Basic Usage` — the typical use as one example. Include behaviour like
   responsiveness when it belongs to the component, not to the layout around it
3. `## Quick Reference` — pieces someone would come back to look up and copy,
   like a parent item with its Alpine toggle
4. `## Examples` — only for class variations that need their own explanation
5. `## SCSS Variables`
6. `## Utility Examples`

## Other Sections

Sections that sometimes appear. They're decided per component, so don't question
them for not being in the list above.

- `How It Works` — the technical side, so readers don't have to read the SCSS

## Rules

- A new topic gets its own `##` (e.g. `## SCSS Variables`). Variations of one
  thing nest as `###` — never sibling `##` sections.
- Demo boxes and tags follow `code-blocks.md`.
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
