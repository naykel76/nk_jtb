# JTB Conventions & Architecture Rules

This document defines naming conventions and architectural patterns for JTB
utility classes and SCSS variables. Understanding these patterns helps predict
class names and use the framework effectively.

## Class Name Structure

All utility classes follow this pattern:

```scss +code
{prefix}:{property}-{variant/value}
```

* **`prefix`** (optional):

  * **Responsive breakpoint**: `sm:`, `md:`, `lg:`
  * **State/pseudo-class**: `hover:`, `focus:`, `active:`
  * **Combined**: `hover:md:` → hover state on medium screens
* **`property`**: Class prefix controlling a CSS property/group (`m`, `p`,
  `gap`, etc.)
* **`variant/value`**: Named variant from config or direct numeric/keyword value

**Base variant (no suffix - uses default value)**

```scss +code
mxy           // margin x/y with base spacing
gap           // gap with base spacing
```

**Named variants**

```scss +code
mxy-sm        // margin x/y with 'sm' variant
gap-lg        // gap with 'lg' variant
```

**Direct values**

```scss +code
mxy-3         // margin x/y with value 3
gap-1.5       // gap with value 1.5
```

### With prefixes

```scss +code
md:mxy-sm           // medium screens: margin x/y small variant
hover:gap-3         // hover state: gap 3
hover:md:mxy-1.5    // hover state on medium screens: margin x/y 1.5
```

For more on responsive breakpoints and pseudo-class prefixes, see [Responsive
Design](responsive-design.md).

## Property (Prefix)

```scss +code
gap      // gap property
bg       // background
txt      // text properties
```

## Value and Variant

**Variant** - semantic keyword:

```scss +code
gap-sm   // 0.75rem
gap-lg   // 1.5rem
```

**Value** - direct numeric or keyword:

```scss +code
gap-0    // 0
gap-1.5  // 1.5rem
hidden   // keyword
```

## Directional Conventions

Suffixes map to logical properties internally. Familiar abbreviations like `ml-`
or `mt-` can be used.

| Suffix | Maps To                   | Meaning    |
| ------ | ------------------------- | ---------- |
| t      | block-start               | top        |
| b      | block-end                 | bottom     |
| l      | inline-start              | left       |
| r      | inline-end                | right      |
| x      | inline-start + inline-end | horizontal |
| y      | block-start + block-end   | vertical   |
| (none) | all sides                 | shorthand  |

```scss +code
ml-2        // margin-left → margin-inline-start
px-1.5      // horizontal padding → padding-inline
rounded-t-1 // top corners
```

## Logical Properties Implementation

* JTB uses **logical properties exclusively**.
* Physical properties (`top`, `left`, `margin-left`) are never used.

| Physical    | Logical             |
| ----------- | ------------------- |
| margin-left | margin-inline-start |
| padding-top | padding-block-start |
| top         | inset-block-start   |

## Unit Convention

* Default: `rem` units
* Borders/outlines: `px` for whole-pixel consistency

```scss +code
bdr-1   // 1px
bdr-2   // 2px
```

## SCSS Variable Conventions

### File Structure

Organized in `src/maps_and_variables/`:

* **Index:** `index.scss` forwards all partials
* **Foundation:** `_base.scss`, `_colors.scss`
* **Domain:** `_typography.scss`, `_forms.scss`, `_components.scss`
* **System:** `_config.scss`, `_property-maps.scss`, `_value-maps.scss`

### Naming Convention

**Three-map pattern** (scales + semantic variants):

```scss +code
$property-values: ()     // numeric scale
$property-variants: ()   // named variants
$property-map: ()        // final map (-map suffix)
```

**Example**

```scss +code
$margin-values: (0, 0.25, 0.5, 1, 2);
$margin-variants: (auto: auto, base: $base-gap);
$margin-map: smart-merge($margin-variants, $margin-values);
```

**Single-map** (one type):

```scss +code
$z-index-map: (0, 1, 50, 100, (bottom: -1), (top: 999));
```

**Rules**

* All final maps end in `-map`.
* Use `!default` for overridability:

```scss +code
$spacing-values: (0, 0.25, 0.5, 1) !default;
$margin-variants: (auto: auto) !default;
```

### Map Merging Order

Merge **variants first, values second** for correct CSS cascade:

```scss +code
$border-width-map: smart-merge($border-width-variants, $border-width-values);
```

* Base/semantic variants generate first (lower priority)
* Numeric/specific values generate last (higher priority)
