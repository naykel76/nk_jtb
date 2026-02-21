# NK JTB SCSS Framework

> **Important:** JTB is a Tailwind-like framework. The core principles are the
> same, but there are subtle differences, mainly around naming conventions and
> logical properties. Always refer to the JTB documentation for proper scales,
> breakpoints, and logical properties before mapping anything. Tailwind values
> are references for intent only, not direct mappings.

**Read the Introduction and Conventions & Architecture Rules before using.**

## What to Use

- **scss-engineer** - SCSS code and architecture
- **jtb-documentation** - Writing documentation
- **markdown-formatting** - Formatting conventions
  
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
- **Context-aware modifiers** - `.primary` adapts to whatever component it's
  applied to
- **Predictable naming** - Numbers map directly to rem values: `m-1` = 1rem
- **Override-friendly** - Base → Components → Utilities (highest priority)

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

**Use jtb-documentation skill for all documentation work.**

**Directories:**

- `docs/` - Finalized documentation
- `docs-for-review/` - Work in progress

**Workflow:**

- Draft/work → `docs-for-review/`
- Finalized → move to `docs/`
