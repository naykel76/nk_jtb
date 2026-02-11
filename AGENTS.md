# NK JTB SCSS Framework

## Project Overview

SCSS framework with modular architecture using modern `@use`/`@forward` imports. Located in `src/` directory.

## Setup Commands

- Install deps: `npm install`
- Build: `npm run build`
- Dev server: `npm run dev`
- Lint: `npm run lint`

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

**Component documentation:** `docs_updated/` (symlink to external repository)

- installation.md
- components/accordion.md
- components/button.md
- components/forms.md
- components/navbar.md
- components/table.md

**Additional documentation:** `docs/`

- Core architecture and philosophy
- API reference (builders/makers)
- Naming conventions
- Examples and patterns
- Migration guides

When updating component documentation, edit files in `docs_updated/` - these are synced to the external repository.

## Migration Notes

Reference `JTB_TO_TAILWIND_CROSSREFERENCE.md` for class mappings.
