---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
  Do not wait for an explicit request — if documentation is being created or
  updated, this skill applies.
---

## Documentation Locations

- **All documentation** → `docs/`

## Workflow

- Create new documentation directly in `docs/`.
- Mark every new heading with `(review)` until its content is confirmed.
- When you update a section carrying `(review)`, ask: "[Section name] has been
  updated. Is this section complete?"
- On confirmation: remove the `(review)` tag. If the confirmed section is in a
  component or utility doc (not a skill, reference doc, or api doc), ask: "Do
  you want this added to a showcase?"
- If yes, add it to the appropriate showcase file before moving on.
- Leave `(review)` on any headings that are still unresolved.

## Showcases

Showcases are quick visual references — not comprehensive docs. There are three
showcase files:

- `docs/showcase-typography.md` — font sizes, weights, families, text utilities
- `docs/showcase-ui.md` — components and UI elements: buttons, badges,
  checklist, box etc.
- `docs/showcase-layouts.md` — grid, flex patterns, page structures

Two reasons something belongs in a showcase:

1. **Syntax reminder** — enough variations exist that you forget the class names
   (border, typography)
2. **Existence reminder** — a single component worth flagging so it doesn't get
   overlooked (checklist)

Showcase entries have no explanation — just enough to jog memory. Format depends
on content type:

- **UI components** (`showcase-ui.md`) — use `+demo-folded` so markup is visible
  and copyable
- **Typography/syntax** (`showcase-typography.md`) — use raw HTML pairing
  `<code>` class names with output
- **Layouts** (`showcase-layouts.md`) — case by case

Group entries by component family under `##` headings (e.g. `## Lists`, `##
Buttons`). Individual variants sit under `###` within that group.

Do not create a new showcase file for a single component — if it doesn't fit the
three above, discuss with the user.

## Documentation Types

Choose the document shape based on what is being documented.

### Utility Documentation

Use for class-based APIs such as spacing, sizing, border, position, transforms,
and typography helpers.

Default structure:

1. Title
2. One-line lead
3. Major utility groups as `##` headings when the page covers more than one
   family
4. Example groups within those sections as `###` headings when needed
5. Optional compact table of available properties or value groups
6. Available values at the end, when useful

Rules:

- Let the examples do most of the work.
- Keep prose short.
- Use `##` for major utility families such as `Border` and `Outline` when the
  page covers multiple related groups.
- Use `###` for example groups within those families such as `Width`, `Color`,
  `Style`, or `Offset`.
- Keep utility heading levels parallel. Do not mix levels unevenly when the
  groups are peers.
- Use a compact table near the top when it helps scan the utility API quickly.
- Only add notes when behaviour is non-obvious.
- Keep review notes, implementation commentary, and TODOs out of the main doc.
- Group examples by usage, not by SCSS implementation detail.
- Use `+demo-folded class="bx"` for interactive examples.
- Use `preview-class="..."` for preview-only layout or styling so copied code
  stays clean.
- Use `class="..."` for the outer demo wrapper when the preview needs a
  container such as `bx`.

### Component Documentation

Use for named structural classes such as `navbar`, `menu`, `bx`, or form
controls.

Every component doc must communicate four things — heading names can flex to
suit the content:

1. **What it is** — a one-line lead describing purpose, not implementation
2. **How to use it** — minimum working markup shown early with `+code`
3. **What it looks like** — examples moving from simple to fuller usage
4. **How to customise it** — variables, modifiers, or overrides

Rules:

- Do not add a separate `## Introduction` heading — the lead is the
  introduction.
- The lead describes what the component is and does — not implementation
  details. Do not mention specific CSS properties. Those may change; the
  component's purpose does not.
- Heading names should match the content. A single component might use `##
  Structure` and `## Basic Usage`. A page covering base styles and variants
  might use `## Base` and `## Variants`. Use whatever is clearest.
- Show the minimum working structure early with `+code`.
- Use prose where structure or context-aware behaviour needs explanation.
- Move from simple usage to fuller examples.
- Wrap all interactive examples in `class="bx"` on the demo block so they are
  visually presented in context.
- Include an SCSS Variables table when the component exposes overridable
  variables. Link to `/docs/jtb/variable-system` for override instructions
  rather than explaining inline.

## Prose vs Code

Default to code-first. Add prose only when:

- Context-aware behaviour needs explanation
- Non-obvious structure requires a note
- Foundational patterns apply across multiple examples

## Code Block Attributes

- `class="..."` → outer demo wrapper class
- `preview-class="..."` → class applied to the preview container
- `+demo` / `+demo-folded` → render preview and code together

Prefer `preview-class` when the layout is only for the preview. That keeps the
example code cleaner when copied.

For layout/responsive docs, use `class="resizable-container
with-docs-only-overrides"` so the example preview can respond inside the docs
without changing the copied markup.

## Links

Docs are served from a Laravel app. Always use app-rooted paths — never relative
file paths:

- `/docs/jtb/variable-system` ✅
- `../variable-system.md` ❌

The base path is `/docs/jtb/` followed by the directory and filename without
extension — mirroring the `docs/` folder structure:

- `docs/components/list.md` → `/docs/jtb/components/list`
- `docs/api/helpers.md` → `/docs/jtb/api/helpers`
- `docs/variable-system.md` → `/docs/jtb/variable-system`

## Formatting Rules

- **No horizontal rules (`---`)** — ever. Use headings and spacing
- **Concise** — get to the point
- **Show code** — examples over explanation
- **Document the non-obvious** — skip what's clear from context
- **Call out outstanding review tags** — when closing documentation work, say
  which headings or docs still carry `(review)` tags
