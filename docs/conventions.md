<div class="toc" data-toc>

- [Class Name Conventions](#class-name-conventions)
    - [Overview](#overview)
    - [Class Name Structure](#class-name-structure)
        - [Base variant (no suffix - uses default value)](#base-variant-no-suffix---uses-default-value)
        - [Named variants](#named-variants)
        - [Direct values](#direct-values)
        - [With breakpoints](#with-breakpoints)
    - [Property (Prefix)](#property-prefix)
    - [Value and Variant](#value-and-variant)
        - [TL;DR](#tldr)
- [SCSS Variable Conventions](#scss-variable-conventions)
    - [File Structure](#file-structure)
    - [Naming Convention](#naming-convention)
        - [Three-Map Pattern (for properties with both scales and semantics)](#three-map-pattern-for-properties-with-both-scales-and-semantics)
        - [Single List (for properties with one type only)](#single-list-for-properties-with-one-type-only)
    - [Why This Structure](#why-this-structure)
    - [Overridability](#overridability)
- [Unit Convention Exception](#unit-convention-exception)
</div>

# Naming Conventions

## Class Name Conventions

### Overview

This document defines the naming conventions for JTB utility classes. Understanding these
patterns will help you predict class names and use the framework effectively.

### Class Name Structure

All utility classes follow this pattern:

```scss +code
{breakpoint}:{property}-{variant/value}
```

The suffix (`variant` or `value`) can be:

1. **Base variant** (no suffix) - Uses the property's default/base value
2. **Named variant** - A semantic keyword from the configuration (e.g., `sm`, `lg`)
3. **Direct value** - A numeric or explicit value (e.g., `0`, `3`, `1.5`)

#### Base variant (no suffix - uses default value)
```scss +code
mxy           // margin x/y with base spacing
gap           // gap with base spacing
```

#### Named variants
```scss +code
mxy-sm        // margin x/y with 'sm' variant
gap-lg        // gap with 'lg' variant
```

#### Direct values
```scss +code
mxy-3         // margin x/y with value 3
gap-1.5       // gap with value 1.5
```

#### With breakpoints
```scss +code
md:mxy-sm     // medium screens: margin x/y small variant
lg:gap-3      // large screens: gap with value 3
```

For responsive breakpoint prefixes (`md:`, `on-md:`, `to-md:`), see [Responsive Design](responsive-design.md).

### Property (Prefix)

The property is the first part of the class name, identifying which CSS property or property group is being controlled:

```scss +code
gap      // controls gap property
m        // controls margin property
bg       // controls background properties
txt      // controls text properties
```

### Value and Variant

**Variant** - A semantic keyword mapped in configuration:

```scss +code
gap-sm    // 'sm' variant → 0.75rem
gap-lg    // 'lg' variant → 1.5rem
```

**Value** - A direct numeric or keyword value:

```scss +code
gap-0      // direct value → 0
gap-1.5    // direct value → 1.5rem
hidden     // keyword value
```

#### TL;DR

```scss +code
{breakpoint}:{property}-{variant/value}
```

- **Base** (no suffix): `mxy`, `gap`
- **Variant** (semantic): `mxy-sm`, `gap-lg`
- **Value** (direct): `mxy-3`, `gap-1.5`
- **Responsive**: `md:mxy-sm`, `lg:gap-3`

## SCSS Variable Conventions

### File Structure

Variable files are organized by purpose in `src/maps_and_variables/`:

- **`_base.scss`** - Foundation tokens (brand colors, fonts, spacing scale, breakpoints)
- **`_colors.scss`** - Color system (theme colors, base colors, OKLCH scales)
- **`_typography.scss`** - Typography system (font sizes, weights, line heights, letter spacing)
- **`_forms.scss`** - Form control styling (inputs, selects, textareas)
- **`_components.scss`** - Component-specific variables (navbar, tables, boxes, buttons, menus)
- **`_config.scss`** - Configuration maps (prefixes, position maps)
- **`_property-maps.scss`** - CSS property enumerations (display, position, visibility, border-styles)
- **`_value-maps.scss`** - Utility value maps for builders (borders, spacing, layout, sizing)

### Naming Convention

#### Three-Map Pattern (for properties with both scales and semantics)

```scss
$property-values: ()     // Numeric/systematic scales
$property-variants: ()   // Named semantic values  
$property-map: ()        // Merged final map (always use -map suffix)
```

**Example:**
```scss
$margin-values: (0, 0.25, 0.5, 1, 2);
$margin-variants: (auto: auto, base: $base-gap);
$margin-map: smart-merge($margin-values, $margin-variants);
```

#### Single Map (for properties with one type only)

```scss
$property-map: ()  // Final map (always use -map suffix)
```

**Example:**
```scss
$z-index-map: (0, 1, 50, 100, (bottom: -1), (top: 999));
$order-map: (1, 2, 3, 4, 5, 6, 7, 8);
```

**Key Rule:** All final maps used by builders end in `-map` regardless of whether they use the three-map pattern or not. This provides consistency and predictability.

### Why This Structure

**File Organization:**
- Foundation files (`_base.scss`, `_colors.scss`) contain design tokens used across the framework
- Domain files (`_typography.scss`, `_forms.scss`, `_components.scss`) contain category-specific variables
- System files (`_config.scss`, `_property-maps.scss`, `_value-maps.scss`) contain builder configurations

**Variable Naming:**
- **`-values`**: Systematic scales (numbers, calculations) - raw data
- **`-variants`**: Semantic names (auto, base, tight, etc.) - named values
- **`-map`**: Final merged map used by builders - always present for builder inputs
- **Property enumerations**: Simple lists in `_property-maps.scss` (no `-map` suffix needed as they're not used in three-map pattern)

### Overridability

All lists use `!default` flag:
```scss
$spacing-values: (0, 0.25, 0.5, 1) !default;
$margin-variants: (auto: auto) !default;
```

Users can override values, variants, or both before importing.


<!-- this is out of place -->
## Unit Convention Exception

JTB uses `rem` units by default for consistency and scalability. However, **border and
outline widths use `px`** because:

- Borders work best at whole-pixel values (sub-pixel rendering issues)
- Borders shouldn't scale with font-size (unlike spacing/typography)
- Browser rendering is more consistent with px borders

```scss
bdr-1   // 1px border
bdr-2   // 2px border
```