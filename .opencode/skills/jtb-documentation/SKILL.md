---
name: jtb-documentation
description: Documentation patterns for the NK JTB SCSS framework.
---

**Activate this skill when:** Asked to create or update framework documentation.

## Documentation Locations

- **Utilities** → `docs-for-review/utilities/`
- **API/Functions** → `docs-for-review/api/`
- **Components** → `docs-for-review/components/`

Finalized docs move to `docs/`.

## Component Documentation

### Structure

```markdown
# Component Name

<p class="lead">One sentence. Introduces the component class and what it does.</p>

## Structure
(Always second. +code block, always visible. One line of prose before the code explaining the container vs component separation. Follow with a blockquote explaining why the separation matters.)

## Basic Usage
(First live demo. No prose unless something is non-obvious.)

## [Further sections as needed]
```

### Rules

- **Lead paragraph is the introduction** — no separate `## Introduction` section
  ever, except for conceptual overview documents that introduce foundational
  framework concepts
- **Lead introduces the class** — not just a vague description. Name the class,
  say what it does.
- **Structure section always comes before Basic Usage** — shows the minimal
  markup with `+code` (always visible)
- **Progressive complexity** — basic → features → complete examples
- **Never invent examples** — only document what exists in the SCSS

### Prose vs Code

Default to code-first. Add prose only when:

- **Context-aware behaviour** needs explanation
- **Non-obvious structure** requires a note
- **Foundational patterns** apply across multiple examples

### Optional Content

Include as needed, case-by-case:

- CSS variables reference
- Responsive patterns
- Theming examples

## Utility Documentation

### Demo Blocks

Use `+demo-folded class="bx"` for interactive examples:

```html +demo-folded class="bx"
<div class="example">Demo content</div>
```

### Structure

1. Title and brief description
2. Visual demo + code example
3. Available values/variants at end

## API/Function Documentation

### File Convention

**One API document per source file.**

Documentation mirrors the source file structure:

- `src/functions/_normalise-config.scss` →
  `docs-for-review/api/normalise-config.md`
- `src/functions/_helpers.scss` → `docs-for-review/api/helpers.md`

Document all functions contained in that source file.

### Structure

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

### Code Blocks

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

## Formatting Rules

- **No horizontal rules (`---`)** - Ever. Use headings and spacing
- **Concise** - Get to the point
- **Show code** - Examples over explanation
- **Document the non-obvious** - Skip what's clear from context

## Reference

Components: `docs/components/navbar.md`, `docs/components/menu.md`
Utilities: `border.md`, `position.md`, `sizing.md`
API: Check existing files in `docs-for-review/api/`
