---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
  Do not wait for an explicit request — if documentation is being created or
  updated, this skill applies.
---

Extends `nk-documentation-best-practices` — apply both, this skill takes
precedence where they conflict.

## Nav Management

Nav lives in `scripts/jtb-nav.json`. Route names follow `docs.jtb.{path}`:

- `docs/components/list.md` → `docs.jtb.components.list`
- `docs/variable-system.md` → `docs.jtb.variable-system`

Add a new entry to the appropriate group when a doc is confirmed complete.

## Completion Follow-Through

- Add confirmed doc to `scripts/jtb-nav.json`.
- Update the relevant row in `docs/jtb-status.md`.

## Documentation Locations

- **All documentation** → `docs/`

## Workflow

- Create new documentation directly in `docs/`.
- On section confirmation: if the section is in a component or utility doc (not
  a skill, reference doc, or api doc), ask: "Do you want this added to a
  showcase?"
- If yes, add it to the appropriate showcase file before moving on.

## Showcases

Showcases are quick visual references — not comprehensive docs. Three files:

- `docs/showcase-typography.md` — font sizes, weights, families, text utilities
- `docs/showcase-ui.md` — components and UI elements: buttons, badges, checklist, box etc.
- `docs/showcase-layouts.md` — grid, flex patterns, page structures

Two reasons something belongs in a showcase:

1. **Syntax reminder** — enough variations exist that you forget the class names
2. **Existence reminder** — a single component worth flagging so it doesn't get overlooked

Format depends on content type:

- **UI components** (`showcase-ui.md`) — use `+demo-folded` so markup is visible and copyable
- **Typography/syntax** (`showcase-typography.md`) — raw HTML pairing `<code>` class names with output
- **Layouts** (`showcase-layouts.md`) — case by case

Group by component family under `##` headings. Variants sit under `###` within that group.

Do not create a new showcase file for a single component — if it doesn't fit the three above, discuss with the user.

## Documentation Types

### Utility Documentation

Use for class-based APIs such as spacing, sizing, border, position, transforms, and typography helpers.

Structure:

1. Major utility groups as `##` headings when the page covers more than one family
2. Example groups within those sections as `###` headings when needed
3. Optional compact table of available properties or value groups
4. Available values at the end, when useful

Rules:

- Keep utility heading levels parallel.
- Use a compact table near the top when it helps scan the utility API quickly.
- Only add notes when behaviour is non-obvious.
- Group examples by usage, not by SCSS implementation detail.
- Use `+demo-folded class="bx"` for interactive examples.
- Use `preview-class="..."` for preview-only layout so copied code stays clean.
- Use `class="..."` for the outer demo wrapper when the preview needs a container such as `bx`.

### Component Documentation

Use for named structural classes such as `navbar`, `menu`, `bx`, or form controls.

Every component doc must cover:

1. What it is — one-line lead
2. Minimum working markup — shown early with `+code`
3. Examples — simple to fuller usage
4. Customisation — variables, modifiers, or overrides

Rules:

- The lead describes purpose, not implementation. Do not mention specific CSS properties.
- Wrap all interactive examples in `class="bx"`.
- Include an SCSS Variables table when the component exposes overridable variables. Link to `/docs/jtb/variable-system` for override instructions rather than explaining inline.
- Include a `## Utility Examples` section when a utility-based approach is viable. Lives in the component doc — not a separate file.

## Code Block Attributes

- `class="..."` → outer demo wrapper class
- `preview-class="..."` → class applied to the preview container
- `+demo` / `+demo-folded` → render preview and code together

For layout/responsive docs, use `class="resizable-container with-docs-only-overrides"`.

## Links

Docs are served from a Laravel app. Always use app-rooted paths:

- `/docs/jtb/variable-system` ✅
- `../variable-system.md` ❌

Base path is `/docs/jtb/` + directory and filename without extension:

- `docs/components/list.md` → `/docs/jtb/components/list`
- `docs/variable-system.md` → `/docs/jtb/variable-system`

## Formatting Rules

- **No `<hr>` in demo markup** — never use horizontal rules in examples
