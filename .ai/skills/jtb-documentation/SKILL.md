---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
  Do not wait for an explicit request — if documentation is being created or
  updated, this skill applies.
---

Extends `nk-documentation-best-practices` — apply both, this skill takes
precedence where they conflict.

`docs-staging/` holds docs not yet migrated — do not trust their content.

## Nav & Links

Nav lives in `scripts/jtb-nav.json`. Docs are served from a Laravel app, so
always use app-rooted paths — never relative ones. Both the route name and the
link path derive from the file path:

| File                      | Route name                 | Link                        |
| ------------------------- | -------------------------- | --------------------------- |
| `docs/variable-system.md` | `docs.jtb.variable-system` | `/docs/jtb/variable-system` |
| `docs/components/list.md` | `docs.jtb.components.list` | `/docs/jtb/components/list` |

## Rule Files

Read the relevant rule file before writing. Summaries below are for navigation
only — the rule files take precedence.

### Component docs → `rules/component-docs.md`

- Section order, and `example-jtb` / `example-utils` tagging

### Layout docs → `rules/layout-docs.md`

- Behaviour first — one responsive default, variations as goals

### Utility docs → `rules/utility-docs.md`

- One `##` per property, one `Class` / `CSS` / `Description` table each

### Code blocks and showcase files → `rules/code-blocks.md`

- Demo block attributes, and what belongs in a showcase file
