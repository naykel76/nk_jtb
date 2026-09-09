---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
  Do not wait for an explicit request — if documentation is being created or
  updated, this skill applies.
---

Extends `nk-documentation-best-practices` — apply both, this skill takes
precedence where they conflict.

## Documentation Types

### Component Documentation

Follow the shared component-doc rules in `nk-documentation-best-practices` first.
Then apply these JTB-specific additions.

**Section Order:**

Every section is conditional — include only the ones the component needs. When
present, they appear in this order:

1. Title and lead
2. `## Basic Usage` — minimum working example using the component class
3. One section for whatever must be understood before use — named case by case
4. `## Responsive` — behaviour across viewports
5. `## Examples` — component class recipes, one `###` each
6. `## SCSS Variables`
7. `## Utility Examples` — the same component built from utilities

Slot three has no fixed heading. It carries whatever the reader has to
understand before using the component — a required HTML shape in `menu.md`
(`## Structure`, where the `<nav>` is only a container), or how the component
treats its children in `navbar.md` (`## How It Works`, where the number of
children drives the layout). Name it for what it actually covers, and omit it
when there is nothing to explain. This is a case-by-case call, not a section
every doc needs.

A `##` answers a different question about the component; a `###` is a variation
within one of those answers. `### With Brand and Actions` is a variation of the
navbar above it, so it nests. `## Responsive` asks how the component behaves
across viewports — a different question, so its own `##`. Never use sibling
`##` sections for variations of one another.

`## Examples` and `## Utility Examples` are not mirrors. Utility examples come
first in a component's life and are maintained while the class matures, so the
two sets overlap only where they happen to. Do not add a class example purely to
pair one that exists in utilities.

Tag examples individually, not by section: `class="bx example-jtb"` for
component class examples, `class="bx example-utils"` for utility examples. See
`components/loaders-and-spinners.md` — every variant is `example-utils` except
`Dots`, which uses `example-jtb` because `.spinner-dots` is a real class.

**Rules:**

- The lead describes purpose, not implementation. Do not mention specific CSS properties.
- Open Basic Usage with `Apply the [component class] to...` — directive, not descriptive.
- Component class examples use `class="bx example-jtb"`.
- Utility examples use `class="bx example-utils"`.
- Place `## SCSS Variables` directly before `## Utility Examples`.
- Link to `/docs/jtb/variable-system` for override instructions rather than explaining inline.
- The component class is the primary API; utility examples are a convenience and go last.
- In `## Utility Examples`, rebuild the component and the content central to its
  purpose. Components that are incidental to the example keep their own classes —
  a navbar example rebuilds the menu, since navigation is the navbar's purpose,
  but leaves the `.btn` action alone.

### Utility Documentation

Use for class-based APIs such as spacing, sizing, border, position, transforms,
and typography helpers.

**Structure:**

1. Major utility groups as `##` headings when the page covers more than one family
2. Example groups within those sections as `###` headings when needed
3. Optional compact table of available properties or value groups
4. Available values at the end, when useful

**Rules:**

- Keep utility heading levels parallel.
- Use a compact table near the top when it helps scan the utility API quickly.
- Only add notes when behaviour is non-obvious.
- Group examples by usage, not by SCSS implementation detail.
- Use `+demo-folded class="bx"` for interactive examples.

## Code Block Attributes

- `class="..."` → outer demo wrapper class
- `preview-class="..."` → class applied to the preview container only, keeps copied code clean
- `+demo` / `+demo-folded` → render preview and code together

Use raw HTML (no demo attribute) when the block is purely visual demonstration and the markup is scaffold — showing the code would add noise rather than value.

For layout/responsive docs, use:

```md
+demo-folded class="resizable-container with-docs-only-overrides"
```

## Examples

### In Component Docs

Component docs that have a dedicated page carry a `## Examples` section. This
replaces what would otherwise go in `showcase-ui.md` for that component.

- Use `class="bx example-jtb"` for component class examples.
- Use `class="bx example-utils"` for utility examples.

### Showcase Files

Quick visual references for components without a dedicated doc page, or
utilities that span multiple docs (e.g. typography).

**Default files:**

- `docs/examples/showcase-typography.md` — font sizes, weights, families, text utilities
- `docs/examples/showcase-ui.md` — components and UI elements without their own doc page

Two reasons something belongs in a showcase file:

1. **Syntax reminder** — enough variations exist that you forget the class names
2. **Existence reminder** — a single component worth flagging so it doesn't get overlooked

Format depends on content type:

- **UI components** (`showcase-ui.md`) — use `+demo-folded class="bx"` so markup is visible and copyable
- **Typography/syntax** (`showcase-typography.md`) — raw HTML pairing `<code>` class names with output

Group by component family under `##` headings. Variants sit under `###` within that group.

Do not ask whether to add something to a showcase file for skill, reference, or API docs.

## Nav & Completion

Nav lives in `scripts/jtb-nav.json`. Route names follow `docs.jtb.{path}`:

- `docs/components/list.md` → `docs.jtb.components.list`
- `docs/variable-system.md` → `docs.jtb.variable-system`

All documentation lives in `docs/`. Create new documentation directly in `docs/`.

When a doc is confirmed complete:

- Add it to `scripts/jtb-nav.json`.
- Update the relevant row in `docs/jtb-status.md`.

## Links

Docs are served from a Laravel app. Always use app-rooted paths:

- `/docs/jtb/variable-system` ✅
- `../variable-system.md` ❌

Base path is `/docs/jtb/` + directory and filename without extension:

- `docs/components/list.md` → `/docs/jtb/components/list`
- `docs/variable-system.md` → `/docs/jtb/variable-system`
