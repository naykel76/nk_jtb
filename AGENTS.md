# NK JTB SCSS Framework

**NEVER RECOMMEND USING !important**

## What to Use

- **scss-engineer** - SCSS code and architecture
- **jtb-documentation** - Writing documentation
- **markdown-formatting** - Formatting conventions
  
## When Given a Task

- **Ask first, execute second** - Don't spend 10 steps "understanding context" when a single question would clarify
- **Start with the obvious** - If the task is straightforward, just do it. Don't overthink.

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

**If symlink is missing, STOP and prompt user to create it:**

```powershell
New-Item -Path "docs-updated" -ItemType SymbolicLink -Value "C:\Users\natha\sites\naykel\resources\views\docs\jtb"
```

Do NOT write to `docs/` - that's old documentation under review only.

**Workflow:**

- New/updated docs → Edit in `docs-updated/`
- Old docs under review → Edit in `docs/`, move to `docs-updated/` when ready

**Formatting:** See `.opencode/skills/markdown-formatting/SKILL.md`  
**Default flag:** Use `+demo-folded` for component examples

## References

- `JTB_TO_TAILWIND_CROSSREFERENCE.md` - Class mappings for migration
