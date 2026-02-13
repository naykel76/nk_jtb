# NK JTB SCSS Framework

NEVER RECOMMEND USING !important

## Project Overview

SCSS framework with modular architecture using modern `@use`/`@forward` imports. Located in `src/` directory.

## Import Order (build.scss)

```scss
@use './base';

@forward './components';  // Components BEFORE utilities
@forward './forms';

@forward './utilities/*';  // Utilities last (highest cascade priority)
```

## Core Philosophy

- **Structure without decoration** - Components provide structure, utilities add styling
- **Context-aware modifiers** - `.primary` adapts to whatever component it's applied to
- **Predictable naming** - Numbers map directly to rem values: `m-1` = 1rem
- **Override-friendly** - Utilities override components override base styles

## Override Priority

Base → Components → Utilities (highest priority)

## Prohibited Patterns

- `@import` (use `@use`)
- Component-specific modifier classes (`.btn-primary`) - use `<button class="btn primary">`
- Hardcoded values (use variables)
- Deep nesting (>3 levels)

## Directory Structure

```bash
src/
    base/              # Reset and element styles
    components/        # Minimal components (structure only)
    forms/             # Form controls
    utilities/         # Utility classes (highest priority)
    mixins/            # Builder/maker mixins
    functions/         # Helper functions
    maps_and_variables/ # Configuration
```

## Documentation

### Source of Truth

**`docs-updated/`** (symlink to external repository) is the source of truth for ALL documentation. This includes:

- `installation.md`
- `components/*.md`
- `utilities/*.md`
- Any other documentation files

**`docs/`** contains old documentation being reviewed. When creating new documentation (not reviewing existing docs), always use `docs-updated/`.

### Workflow

1. **New documentation** → Create in `docs-updated/` (symlink location)
2. **Reviewing old docs** → Edit files in `docs/`, then move to `docs-updated/` when ready

When updating documentation, edit files in `docs-updated/` - these are synced to the external repository.

## Migration Notes

Reference `JTB_TO_TAILWIND_CROSSREFERENCE.md` for class mappings.

## Documentation Conventions

See `.opencode/skills/markdown-formatting/SKILL.md` for all documentation formatting conventions.

**Default Flag:** Use `+demo-folded` for component examples. Adjust as needed based on context.
