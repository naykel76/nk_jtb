---
name: jtb-documentation
description: >-
  Use this skill whenever creating or updating NK JTB framework documentation.
  Do not wait for an explicit request — if documentation is being created or
  updated, this skill applies.
---

Extends `nk-documentation-best-practices` — apply both, this skill takes
precedence where they conflict.

## Migration System

Every doc lives in one of two places:

- `docs-staging/` — not yet migrated
- `docs/` — migrated

A file in `docs/` is **accurate, not necessarily complete**. Nothing in it is
wrong; sections may still be missing.

### Review Tags

`(review)` after a heading means that heading's own content is unconfirmed. It
says nothing about the sections below it, and nothing about whether the page is
finished.

- On the title, it covers the title and lead. Remove it once the lead states the
  right scope — not once the page is complete, or it could never come off.
- On a `##` or `###`, it covers that section only.
- Add tags freely. **Never remove one.** If something looks confirmed, ask
  Nathan and let him decide.

A file with no tags left is confirmed, not complete. Missing sections are
signalled by their absence and by `docs/jtb-status.md` — never by a tag.

### Migrating a File

1. `git mv` it from `docs-staging/` to `docs/`.
2. Fix what is wrong, confirmed against source or compiled CSS — never assumed.
3. Add a plain entry to `scripts/jtb-nav.json`. No `(wip)` suffix in the label;
   review state lives in the doc.
4. Add or update its row in `docs/jtb-status.md`.
5. Document any fact the fix depended on, in the same pass.

### Scope of a Pass

Document only the part in use, never the whole family. Confirming `fs0` while
migrating a layout means documenting flex-shrink — not all of flexbox.

Framework-wide conventions (class name structure, prefixes, hyphenation) belong
in `conventions-and-architecture-rules.md`. Do not restate them in a utility doc.

### `docs/jtb-status.md`

The at-a-glance page. Keep it scannable:

- Rows are **properties**, not individual classes.
- `✅` confirmed against source, `review` documented but unconfirmed.

## Nav & Links

Nav lives in `scripts/jtb-nav.json`. Docs are served from a Laravel app, so
always use app-rooted paths — never relative ones. Both the route name and the
link path derive from the file path:

| File                       | Route name                   | Link                       |
| -------------------------- | ---------------------------- | -------------------------- |
| `docs/variable-system.md`  | `docs.jtb.variable-system`   | `/docs/jtb/variable-system` |
| `docs/components/list.md`  | `docs.jtb.components.list`   | `/docs/jtb/components/list` |

New documentation is created directly in `docs/`.

## Quick Reference

Read the relevant rule file before writing. Summaries below are for navigation
only — the rule files take precedence.

### Component docs → `rules/component-docs.md`

- Fixed section order, every section conditional
- `example-jtb` for component class examples, `example-utils` for utility ones
- `## SCSS Variables` sits directly before `## Utility Examples`

### Utility docs → `rules/utility-docs.md`

- One `##` per property, one table each — `Class`, `CSS`, `Description`
- Describe every row; no prose under the table, no one-liner under the heading
- Large value scales give the pattern once, not a row per class

### Code blocks and showcase files → `rules/code-blocks.md`

- `+demo` / `+demo-folded`, `class=`, `preview-class=`
- When something belongs in `showcase-ui.md` or `showcase-typography.md`
