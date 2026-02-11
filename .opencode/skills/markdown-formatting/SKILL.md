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

Never use plain fences. Always add a language tag and `+code` flag.

Other Flags: `+preview`, `+demo`, `+demo-folded`, `+collapse`

- ❌ ` ```php ` - Invalid, missing tag
- ✅ ` ```php +code ` - Correct

### Language Tags

Use the tag that matches the content:

| Tag    | Use For                         | Example           |
| ------ | ------------------------------- | ----------------- |
| `scss` | SCSS/CSS code                   | ` ```scss +code ` |
| `json` | JSON files                      | ` ```json +code ` |
| `yaml` | YAML files                      | ` ```yaml +code ` |
| `bash` | Directory trees, shell commands | ` ```bash +code ` |

## Code Block Flags

The markdown extension supports several flags for code blocks:

| Flag           | Description                           |
| -------------- | ------------------------------------- |
| `+code`        | Source code only (syntax highlighted) |
| `+preview`     | Rendered Blade component preview      |
| `+demo`        | Preview + code (always visible)       |
| `+demo-folded` | Preview + code + collapsible          |
| `+collapse`    | Makes content collapsible             |

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
