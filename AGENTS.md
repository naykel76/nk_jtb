# NK JTB SCSS Framework

> **Important:** JTB is a Tailwind-like framework. The core principles are the
> same, but there are subtle differences, mainly around naming conventions and
> logical properties. Always refer to the JTB documentation for proper scales,
> breakpoints, and logical properties before mapping anything. Tailwind values
> are references for intent only, not direct mappings.

**Read the Introduction and Conventions & Architecture Rules before using.**
**For any responsive/layout conversion, read `docs/responsive-design.md` and
`docs/layer-system.md` first.**

## Source of Truth

- **`AGENTS.md` is the primary source of truth for framework usage in this
  repo.**
- Rules in this file are mandatory and apply to all tasks.
- `scss-engineer` is for **building/extending framework internals** (utilities,
  maps, mixins, architecture) and must not conflict with this file.
- If there is ever a conflict, follow `AGENTS.md`.

## What to Use

- **scss-engineer** - SCSS code and architecture
- **jtb-documentation** - Writing documentation
- **jtb-layout** - Layout strategy using documented JTB layout primitives and patterns
- **markdown-formatting** - Formatting conventions
- **tailwind-to-jtb** - Converting Tailwind-oriented markup to documented JTB
  classes
  
## When Given a Task

- **Ask first, execute second** - Don't spend 10 steps "understanding context"
  when a single question would clarify
- **Start with the obvious** - If the task is straightforward, just do it. Don't
  overthink.
- **Create reference files proactively** - When I ask for reports, analysis, or
  similar documents, create the file in the root directory automatically without
  being asked

## Core Philosophy

- **Structure without decoration** - Components provide structure, utilities add
  styling
- **Ownership matters** - Containers control width and placement; components
  and sections should own their internal padding
- **Context-aware modifiers** - `.primary` adapts to whatever component it's
  applied to
- **Predictable naming** - Numbers map directly to rem values: `m-1` = 1rem
- **Override-friendly** - Base → Components → Utilities (highest priority)

## Responsive and Conversion Rules

- Follow framework docs as source of truth:
  - `docs/responsive-design.md`
  - `docs/conventions-and-architecture-rules.md`
  - `docs/layer-system.md`
- Do not infer behavior from Tailwind when docs differ.
- Use the `tailwind-to-jtb` skill for Tailwind-to-JTB conversion work.
- Use the `jtb-layout` skill for layout restructuring, grid/flex decisions, and
  alternatives to custom grid-template reproduction.
- Use `{bp}:` primarily for progressive styling/layout changes.
- Use `to-` / `on-` primarily for visibility windows (show/hide behavior).
- Prefer visibility patterns in this order:
  1. Hide Pattern
  2. Hide/Hide Pattern
  3. Hide/Display Pattern
- In the same layout shell, keep visibility logic consistent (avoid mixing
  conflicting patterns unless clearly required).
- For layout replications, match visual intent using documented JTB classes.
- Record unsupported/missing utilities in a root-level notes file.

## Import Order (build.scss)

```scss
@use './base';

@forward './components';  // Components BEFORE utilities
@forward './forms';

@forward './utilities/*';  // Utilities last (highest cascade priority)
```

## Directory Structure

```bash
src/
├── base/                # Reset and element styles
├── components/          # Minimal components (structure only)
├── forms/               # Form controls
├── utilities/           # Utility classes (highest priority)
├── mixins/              # Builder/maker mixins
├── functions/           # Helper functions
└── maps_and_variables/  # Configuration
```

## Prohibited Patterns

- `@import` (use `@use`/`@forward`)
- Component-specific modifiers like `.btn-primary` (use `<button class="btn
  primary">`)
- Hardcoded values (use variables)
- Deep nesting (>3 levels)

## Documentation

- Use the `jtb-documentation` skill for all documentation work.
- Use `docs/` as the single documentation location.
- Track in-progress documentation with `(review)` headings until the content is
  confirmed and cleaned up.
