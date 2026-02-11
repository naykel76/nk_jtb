# SCSS Guidelines

## Core Philosophy

JTB is not Tailwind or Bootstrap. It provides:

- **Components** for structure (`.bx`, `.btn`, `.menu`)
- **Modifiers** that adapt components (`.primary`, `.xs`, `.rounded`)
- **Utilities** for granular control (`.m-1`, `.flex`, `.hidden`)

## SCSS Module System

- Use `@use` for importing (creates namespace)
- Use `@forward` for re-exporting in index files
- NEVER use deprecated `@import`

```scss
@use '../maps_and_variables/components' as *;
@use '../functions/color-functions' as *;
```

## Three-Map Variable Pattern

```scss
$property-values: (0, 1, 2, 3, 4) !default;           // Numeric scales
$property-variants: (base: 1rem, auto: auto) !default; // Semantic names
$property-map: smart-merge($property-variants, $property-values);
```

**CRITICAL:** Merge order - variants FIRST, values LAST:

```scss
// ✅ CORRECT
$spacing-map: smart-merge($spacing-variants, $spacing-values);

// ❌ WRONG
$spacing-map: smart-merge($spacing-values, $spacing-variants);
```

## Class Naming Structure

```
{breakpoint}:{property}-{variant/value}
```

### Property Prefixes

| Prefix | Controls |
| ------ | -------- |
| `m`    | margin   |
| `p`    | padding  |
| `gap`  | gap      |
| `txt`  | text     |
| `w`    | width    |
| `h`    | height   |

### Value Types

| Type    | Example  | Meaning                    |
| ------- | -------- | -------------------------- |
| Base    | `mxy`    | margin x/y with base value |
| Variant | `mxy-sm` | 'sm' variant               |
| Direct  | `mxy-3`  | value 3                    |

### Examples

```scss
.mxy       // margin x/y base
.mxy-sm    // margin x/y with 'sm' variant
.mxy-3     // margin x/y with value 3
.md:mxy    // responsive at medium breakpoint
.hover:mxy // hover state
```

## Spacing Scale (Direct rem Mapping)

| Class | REM    | Pixels |
| ----- | ------ | ------ |
| m-1   | 1rem   | 16px   |
| m-2   | 2rem   | 32px   |
| m-0.5 | 0.5rem | 8px    |

Values below 1rem drop leading zero: `0.5` → `05`

## Responsive Modes

```scss
.md:flex    // from md (mobile first)
.on-md:hidden   // only at md
.to-md:flex     // up to md
```

Breakpoints: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px)

## Component Pattern

```scss
@use '../maps_and_variables/components' as *;

%box {
    background: $bx-bg;
    padding: $bx-padding;
}

.bx {
    @extend %box;

    &-title {
        font-size: var(--box-title-font-size);
    }
}
```

## Context-Aware Modifiers

Modifiers work WITH components:

```html
<!-- ✅ CORRECT -->
<div class="bx primary">...</div>
<button class="btn primary">...</button>

<!-- ❌ WRONG - modifiers are not standalone utilities -->
<div class="primary">...</div>
```

## Logical Properties (RTL Support)

```scss
ms-  → margin-inline-start
me-  → margin-inline-end
bs-  → block-start
be-  → block-end
ps-  → padding-inline-start
pe-  → padding-inline-end
```

## Builder/Maker System

**Builders** - Generate utility sets from maps:

```scss
@include build-classes((
    margin: (
        prefix: 'm-',
        values: (1, 2, 3),
        unit: 'rem'
    )
));
```

**Makers** - Generate individual classes:

```scss
@include make-single-property-class(
    'display',
    'hidden',
    'none',
    $breakpoints: (md, lg)
);
```

## Nesting Limit

Max 3 levels. Use `&` for modifiers:

```scss
.parent {
    &__element { }
    &--modifier { }
}
```

## File Organization

- Partial files: `_filename.scss` (leading underscore)
- One component per file
- Index files for directories

## Documentation

### Component Documentation

**Source of Truth:** `docs_updated/` (symlink)

- `installation.md` - Installation and setup
- `components/accordion.md` - Accordion patterns
- `components/button.md` - Button component
- `components/forms.md` - Form controls
- `components/navbar.md` - Navigation bar
- `components/table.md` - Table styles

Edit files in `docs_updated/` - these sync to external repository.

### API Documentation

**Location:** `docs/api/`

- `build-classes.md` - Builder mixin
- `makers.md` - Maker mixins overview
- `make-single-property-class.md` - Single property utility
- `make-position-based-class.md` - Position-based utilities
- `make-themes.md` - Theme generation

### Reference Documentation

**Location:** `docs/`

- `introduction.md` - Framework philosophy
- `conventions.md` - Naming conventions
- `core-architecture.md` - Builder/Maker system
