# Variables

<p class="lead">How JTB utility maps are structured and how they feed the build system.</p>

## The Three-Map Pattern

Properties that combine named variants and numeric values use three maps:

- **variants** map semantic names to base tokens (`sm`, `base`, `lg`)
- **values** define a numeric scale (`0, 0.25, 0.5 ...`)
- **merged map** is the final map the build system iterates to generate classes

This shortened border-radius example shows how the pieces fit together:

```scss +code
@use 'nk_jtb/src/functions/map-and-list-helpers' as *;

// _base.scss
$radius-sm: 0.25rem !default;
$radius-base: 0.375rem !default;
$radius-lg: 0.5rem !default;

// _value-maps.scss
$border-radius-variants: (
    sm: $radius-sm,
    base: $radius-base,
    lg: $radius-lg,
) !default;

$border-radius-values: (0, 0.25, 0.5, 0.75, 1) !default;

$border-radius-map: smart-merge($border-radius-variants, $border-radius-values) !default;
```

The build system iterates `$border-radius-map`. The merge order matters:
variants go first so semantic classes such as `.rounded` appear before numeric
ones such as `.rounded-05` within the same build. The `base` key produces the
unsuffixed `.rounded` class. Where the selectors have equal specificity, later
declarations win for the same property.
