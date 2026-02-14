# NK JTB SCSS Framework

**NEVER RECOMMEND USING !important**

## What to Use

- **scss-engineer** - SCSS code and architecture
- **documenting-utilities** - Writing documentation
- **markdown-formatting** - Formatting conventions
  
## Core Philosophy

- **Structure without decoration** - Components provide structure, utilities add styling
- **Context-aware modifiers** - `.primary` adapts to whatever component it's applied to
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
- Component-specific modifiers like `.btn-primary` (use `<button class="btn primary">`)
- Hardcoded values (use variables)
- Deep nesting (>3 levels)

## Documentation

Documentation lives in **`docs-updated/`** (symlink to external repository).

**Setup (if symlink missing):**

```powershell
New-Item -Path "docs-updated" -ItemType SymbolicLink -Value "C:\Users\natha\sites\naykel\resources\views\docs\jtb"
```

**Workflow:**

- New/updated docs → Edit in `docs-updated/`
- Old docs under review → Edit in `docs/`, move to `docs-updated/` when ready

**Formatting:** See `.opencode/skills/markdown-formatting/SKILL.md`  
**Default flag:** Use `+demo-folded` for component examples

## References

- `JTB_TO_TAILWIND_CROSSREFERENCE.md` - Class mappings for migration
