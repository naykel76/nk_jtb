---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
  Do not wait for an explicit request — if documentation is being created or
  updated, this skill applies.
---

Apply both this skill and `nk-documentation-best-practices`. This skill takes
precedence where they conflict.

## Documentation Types

### Component Documentation

Use for named structural classes such as `navbar`, `menu`, `bx`, or form controls.

**Structure:**

1. One-line lead
2. `## Basic Usage` — minimum working markup
3. Additional examples — simple to fuller usage
4. `## SCSS Variables` — if the component exposes overridable variables
5. `## Utility Examples` — if a utility-based approach is viable, always last

**Rules:**

- The lead describes purpose, not implementation. Do not mention specific CSS properties.
- Open `## Basic Usage` with `Apply the [component class] to...` — directive, not descriptive.
- Component class examples use `class="bx example-jtb"`.
- Utility examples use `class="bx example-utils"`.
- Place the SCSS Variables table directly after the class examples, before `## Utility Examples`.
- Link to `/docs/jtb/variable-system` for override instructions rather than explaining inline.
- `## Utility Examples` is always last. Lives in the component doc — not a separate file.

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

For layout/responsive docs, use:

```md
+demo-folded class="resizable-container with-docs-only-overrides"
```

## Examples Files

Quick visual references — not comprehensive docs. Two files:

- `docs/examples/showcase-typography.md` — font sizes, weights, families, text utilities
- `docs/examples/showcase-ui.md` — components and UI elements: buttons, badges, checklist, box etc.

Two reasons something belongs in an examples file:

1. **Syntax reminder** — enough variations exist that you forget the class names
2. **Existence reminder** — a single component worth flagging so it doesn't get overlooked

Format depends on content type:

- **UI components** (`showcase-ui.md`) — use `+demo-folded class="bx"` so markup is visible and copyable
- **Typography/syntax** (`showcase-typography.md`) — raw HTML pairing `<code>` class names with output

Group by component family under `##` headings. Variants sit under `###` within that group.

Do not create a new examples file for a single component. If it does not fit the two above, discuss with the user.

When a section of a component or utility doc is complete, ask:

> Do you want this added to an examples file?

Do not ask this for skill, reference, or API docs.

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

## Formatting Rules

- **No `<hr>` in demo markup** — never use horizontal rules in examples
