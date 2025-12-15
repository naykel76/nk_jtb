# make-position-based-class()

Generate classes for directional properties (margin, padding, border, etc.) with position variants.

## Signature

```scss +code
@mixin make-position-based-class(
    $property,
    $value,
    $positions-map,
    $identifier,
    $variant,
    $breakpoints,
    $states: (),
    $omit-axis-keys: (),
    $child-selector: false
)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$property` | String | — | CSS property name (e.g., `margin`, `padding`, `border-width`) |
| `$value` | String | — | CSS value (e.g., `1rem`, `2px`) |
| `$positions-map` | Map | — | Position keys to CSS properties (e.g., `(t: margin-top, b: margin-bottom)`) |
| `$identifier` | String | — | Class name identifier (e.g., `m`, `p`, `bdr`) |
| `$variant` | String | — | Variant suffix (e.g., `lg`, `sm`, `base`) |
| `$breakpoints` | List | — | Breakpoints for responsive variants (e.g., `(md, lg)`) |
| `$states` | List | `()` | Pseudo-classes for state variants (e.g., `(hover, focus)`) |
| `$omit-axis-keys` | List | `()` | Exclude axis combinations (e.g., `(xy)`) |
| `$child-selector` | Boolean | `false` | Generate child selector variant |

## Examples

### Basic Positional Classes

```scss +code
@include make-position-based-class(
    'margin',
    '1rem',
    (t: margin-top, b: margin-bottom, l: margin-left, r: margin-right),
    'm',
    'base',
    ()
);
// Output: .m-base, .m-t-base, .m-b-base, .m-l-base, .m-r-base
```

### With Variant Name

```scss +code
@include make-position-based-class(
    'padding',
    '1.5rem',
    (t: padding-top, b: padding-bottom, x: (padding-left, padding-right)),
    'p',
    'lg',
    ()
);
// Output: .p-lg, .p-t-lg, .p-b-lg, .p-x-lg
```

### With Responsive Variants

```scss +code
@include make-position-based-class(
    'margin',
    '2rem',
    $logical-position-map,
    'm',
    'base',
    (md, lg)
);
// Output: .m-base, .md:m-base, .lg:m-base, .m-t-base, .md:m-t-base, etc.
```

## Output Structure

- All positions: `.{id}`, `.{id}-t`, `.{id}-b`, `.{id}-l`, `.{id}-r`, `.{id}-x`, `.{id}-y`
- With variant: `.{id}-{variant}`, `.{id}-t-{variant}`, etc.
- With breakpoints: `.{bp}:{id}`, `.{bp}:{id}-t`, etc.
