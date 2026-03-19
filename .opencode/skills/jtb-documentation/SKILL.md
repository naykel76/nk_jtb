---
name: jtb-documentation
description: Documentation patterns for the NK JTB SCSS framework.
---

**Activate this skill when:** Asked to create or update framework documentation.

## Documentation Locations (review)

- **All documentation** → `docs/`

## Workflow (review)

- Create new documentation directly in `docs/`.
- Keep in-progress documentation in `docs/` and mark active headings with
  `(review)` until the content is confirmed.

## Documentation Types (review)

Choose the document shape based on what is being documented.

### Utility Documentation (review)

Use for class-based APIs such as spacing, sizing, border, position, transforms,
and typography helpers.

Default structure:

1. Title
2. One-line lead
3. Demo sections grouped by behaviour
4. Available values at the end

Rules:

- Let the examples do most of the work.
- Keep prose short.
- Only add notes when behaviour is non-obvious.
- Keep review notes, implementation commentary, and TODOs out of the main doc.
- Group examples by usage, not by SCSS implementation detail.
- Use `+demo-folded class="bx"` for interactive examples.
- Add `(review)` to new headings by default when creating new documentation or
  repo-local skills, or when migrating/reworking documents from an older review
  state into the current documentation set.
- Keep the tag until the user confirms that the heading, section, or file is
  final.
- Remove confirmed `(review)` tags as part of the cleanup pass.

### Component Documentation (review)

Use for named structural classes such as `navbar`, `menu`, `bx`, or form
controls.

Default structure:

1. Title
2. One-line lead
3. `## Structure`
4. `## Basic Usage`
5. Additional sections as needed

Rules:

- Lead paragraph is the introduction. Do not add a separate `## Introduction`
  section unless the doc is a conceptual overview.
- Name the component clearly in the lead.
- Show the minimum working structure early with `+code`.
- Use prose where structure or context-aware behaviour needs explanation.
- Move from simple usage to fuller examples.
- Add `(review)` to new headings by default when creating new documentation or
  repo-local skills, or when migrating/reworking documents from an older review
  state into the current documentation set.
- Keep the tag until the user confirms that the heading, section, or file is
  final.
- Remove confirmed `(review)` tags as part of the cleanup pass.

### Concept Documentation (review)

Use for framework ideas such as layouts, responsive behaviour, layering,
conventions, or naming rules.

Default structure:

1. Title
2. One-line lead
3. Short explanation sections
4. Examples where useful

Rules:

- Explain the idea plainly.
- Use examples to support the explanation, not replace it.
- Write docs as JTB-first guidance.
- Avoid Tailwind references in general framework docs. Only mention Tailwind in
  explicit conversion or comparison documents.
- Avoid process notes written for a specific review conversation.
- Add `(review)` to new headings by default when creating new documentation or
  repo-local skills, or when migrating/reworking documents from an older review
  state into the current documentation set.
- Keep the tag until the user confirms that the heading, section, or file is
  final.
- Remove confirmed `(review)` tags as part of the cleanup pass.

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
- Add `(review)` to new headings by default when creating new documentation or
  repo-local skills, or when migrating/reworking documents from an older review
  state into the current documentation set.
- Keep the tag until the user confirms that the heading, section, or file is
  final.
- Remove confirmed `(review)` tags as part of the cleanup pass.

## Prose vs Code (review)

Default to code-first. Add prose only when:

- Context-aware behaviour needs explanation
- Non-obvious structure requires a note
- Foundational patterns apply across multiple examples

## Optional Content (review)

Include as needed, case-by-case:

- CSS variables reference
- Responsive patterns
- Theming examples

## API/Function Documentation (review)

### File Convention (review)

**One API document per source file.**

Documentation mirrors the source file structure:

- `src/functions/_normalise-config.scss` →
  `docs/api/normalise-config.md`
- `src/functions/_helpers.scss` → `docs/api/helpers.md`

Document all functions contained in that source file.

### Structure (review)

Scale detail to complexity:

**Simple functions:**

1. Name & one-line description
2. Signature with inline parameter notes
3. Example usage

**Complex functions:**

1. Name & brief description
2. Signature
3. Parameters table (if 2+ params or needs explanation)
4. What it returns (brief or structured if complex)
5. Example usage
6. Notes (only if there are gotchas or important context)

### Code Blocks (review)

Use `+code` flag for SCSS examples:

```scss +code
@function example($param) {
    @return $param;
}
```

**Function signatures:** Keep on a single line, even if long.

```scss +code
@function normalise-config($property, $config, $responsive, $with-state)
```

## Formatting Rules (review)

- **No horizontal rules (`---`)** - Ever. Use headings and spacing
- **Concise** - Get to the point
- **Show code** - Examples over explanation
- **Document the non-obvious** - Skip what's clear from context
- **Call out outstanding review tags** - When closing documentation work, say
  which headings, docs, or repo-local skills still carry `(review)` tags

## Reference (review)

Components: `docs/components/navbar.md`, `docs/components/menu.md`
Utilities: `border.md`, `position.md`, `sizing.md`
API: Check existing files in `docs/api/`
