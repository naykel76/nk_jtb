# NK JTB SCSS Framework

**NEVER RECOMMEND USING !important**

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

Documentation lives in `docs-updated/` (symlink to external repository).

**If symlink missing:**

```powershell
New-Item -Path "docs-updated" -ItemType SymbolicLink -Value "C:\Users\natha\sites\naykel\resources\views\docs\jtb"
```

**Workflow:**

- New/updated docs → `docs-updated/`
- Reviewing old docs → Edit in `docs/`, move to `docs-updated/` when finalized

## References

- `JTB_TO_TAILWIND_CROSSREFERENCE.md` - Class mappings for migration
