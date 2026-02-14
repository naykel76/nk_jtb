---
name: markdown-formatting
description: >-
  Ensures markdown files follow project conventions including Torchlight code tags
  and markdown-lint rules. Activates when creating or editing markdown files.
---

# Markdown Formatting

**Activate this skill when:**

Activate when writing or editing any markdown files.

## General Guidelines

- Do not include table of contents unless specifically requested.

## Code Blocks

All code blocks must include a language tag and a flag for syntax highlighting
and preview features.

| Flag           | Description                           |
| -------------- | ------------------------------------- |
| `+code`        | Source code only (syntax highlighted) |
| `+demo`        | Preview + code (always visible)       |
| `+demo-folded` | Preview + code + collapsible          |

Other Flags: `+preview`, `+collapse` and `output` exist but are less common and
only to be used when requested.

### Demo-Folded Wrapper Class

When using `+demo-folded`, add `class="bx"` to wrap the example in a box component:

```markdown
```html +demo-folded class="bx"
<div class="example">Content here</div>
```

### Language Tags

Use the tag that matches the content, unless specified otherwise:

| Use For                         | Example                 |
| ------------------------------- | ----------------------- |
| Directory trees, shell commands | ` ```bash +code `       |
| Blade templates                 | ` ```html +code-blade ` |

## Horizontal

Use 80 hyphens `-------------------------------------------------------------------------------` for horizontal rules.

## Lists

- Use hyphens `-` for unordered lists
- Use numbers `1.` `2.` for ordered steps
- Consistent indentation (4 spaces)

## Tables

Standard GitHub Flavored Markdown:

| Column | Type         | Nullable | Default |
| ------ | ------------ | -------- | ------- |
| id     | bigint       | No       | AUTO    |
| name   | varchar(255) | No       | -       |

- Keep separators aligned

## Linting

- Blank line before and after
