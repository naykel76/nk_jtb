# Tasks

Running backlog for the JTB framework. Updated by Claude during sessions;
Nathan may add directly. When something comes up that isn't being done right
now, it goes here before the topic changes.

## Planned

- **Review `jtb-layout` skill** — nearly all headings carry `(review)` tags: Scope, Decision Order, Rules, Common Alternatives, Output Expectations
- **Review `jtb-conversion` skill** — Conversion Order, Rules, and Review Checklist all carry `(review)` tags
- **Review `scss-engineer` skill** — minimal content, needs assessment

- **Consuming-project skill + prompt** — a skill for building UI in projects
  that consume JTB (not framework internals). Similar trigger pattern to
  `frontend-design`. Needs a dedicated session.

## Parked

## Context

### create-component.md

- **Utility-first by default** — the prompt builds with utilities. Converting to a component class is a separate request, made after the design is complete.
- **`jtb-layout` removed from default invocations** — components sit in layouts, they don't define them.
- **Variants not a concern** — not part of this prompt.
- **Still to resolve:** how layout context is captured (where the component sits, column count etc), how responsive design enters the conversation, and how target markup is handled.

### jtb-layouts-and-structures skill

- **Section rhythm values need confirming** — `py-4-3-2` / `py-5-3-2` currently in skill but Nathan believes they may have changed.

### jtb-layout skill

- **Rename to `jtb-layouts-and-structures`** — current name implies page-level only; rename makes clear it covers internal component structure too.
- Update all prompts that invoke `jtb-layout` by name after the rename.
