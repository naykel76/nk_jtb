---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
---

## Documentation Locations

- **All documentation** → `docs/`

## Workflow

- Create new documentation directly in `docs/`.
- Mark active headings with `(review)` until the content is confirmed.
- Remove `(review)` from a heading as soon as that specific section is confirmed.
- Leave `(review)` on any headings that are still unresolved.
- After working on any section that still carries `(review)`, explicitly check whether it is now final before moving on.
- Only mark a document complete in `framework-status.md` when its remaining review tags are gone.
- When a document reaches that point, update `framework-status.md` in the same pass.

## Documentation Types

Choose the document shape based on what is being documented.

### Utility Documentation

Use for class-based APIs such as spacing, sizing, border, position, transforms, and typography helpers.

Default structure:

1. Title
2. One-line lead
3. Major utility groups as `##` headings when the page covers more than one family
4. Example groups within those sections as `###` headings when needed
5. Optional compact table of available properties or value groups
6. Available values at the end, when useful

Rules:

- Let the examples do most of the work.
- Keep prose short.
- Use `##` for major utility families such as `Border` and `Outline` when the page covers multiple related groups.
- Use `###` for example groups within those families such as `Width`, `Color`, `Style`, or `Offset`.
- Keep utility heading levels parallel. Do not mix levels unevenly when the groups are peers.
- Use a compact table near the top when it helps scan the utility API quickly.
- Only add notes when behaviour is non-obvious.
- Keep review notes, implementation commentary, and TODOs out of the main doc.
- Group examples by usage, not by SCSS implementation detail.
- Use `+demo-folded class="bx"` for interactive examples.
- Use `preview-class="..."` for preview-only layout or styling so copied code stays clean.
- Use `class="..."` for the outer demo wrapper when the preview needs a container such as `bx`.

### Component Documentation (review)

Use for named structural classes such as `navbar`, `menu`, `bx`, or form controls.

Default structure:

1. Title
2. One-line lead
3. `## Structure`
4. `## Basic Usage`
5. Additional sections as needed

Rules:

- Lead paragraph is the introduction. Do not add a separate `## Introduction` section unless the doc is a conceptual overview.
- Name the component clearly in the lead.
- Show the minimum working structure early with `+code`.
- Use prose where structure or context-aware behaviour needs explanation.
- Move from simple usage to fuller examples.

### Concept Documentation (review)

Use for framework ideas such as layouts, responsive behaviour, layering, conventions, or naming rules.

Default structure:

1. Title
2. One-line lead
3. Short explanation sections
4. Examples where useful

Rules:

- Explain the idea plainly.
- Use examples to support the explanation, not replace it.
- Write docs as JTB-first guidance.
- Avoid Tailwind references in general framework docs. Only mention Tailwind in explicit conversion or comparison documents.
- Do not include local filesystem paths in framework docs.
- Avoid process notes written for a specific review conversation.
- For layout or responsive examples, prefer `class="resizable-container with-docs-only-overrides"` when the preview needs docs-only wrapper behavior.

### API Documentation (review)

Use for SCSS functions, mixins, and other code-level references.

Default structure:

1. Title
2. Brief description
3. Signature
4. Example usage
5. Notes only if needed

Rules:

- Keep them reference-first.
- Do not explain what the signature or example already makes obvious.
- Add parameter or return detail only when the API needs it.
- Keep function signatures on one line, even if long.

**One API document per source file.** Documentation mirrors the source file structure:

- `src/functions/_normalise-config.scss` → `docs/api/normalise-config.md`
- `src/functions/_helpers.scss` → `docs/api/helpers.md`

## Prose vs Code

Default to code-first. Add prose only when:

- Context-aware behaviour needs explanation
- Non-obvious structure requires a note
- Foundational patterns apply across multiple examples

## Code Block Attributes

- `class="..."` → outer demo wrapper class
- `preview-class="..."` → class applied to the preview container
- `+demo` / `+demo-folded` → render preview and code together

Prefer `preview-class` when the layout is only for the preview. That keeps the example code cleaner when copied.

For layout/responsive docs, use `class="resizable-container with-docs-only-overrides"` so the example preview can respond inside the docs without changing the copied markup.

## Formatting Rules

- **No horizontal rules (`---`)** — ever. Use headings and spacing
- **Concise** — get to the point
- **Show code** — examples over explanation
- **Document the non-obvious** — skip what's clear from context
- **Call out outstanding review tags** — when closing documentation work, say which headings or docs still carry `(review)` tags
