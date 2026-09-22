# Variables

<p class="lead">How JTB utility maps are structured and how they feed the build system.</p>

## The Three-Map Pattern

Most utility properties use three maps:

- **variants** — semantic names mapping to base tokens (`sm`, `base`, `lg`)
- **values** — a numeric scale (`0, 0.25, 0.5 ...`)
- **merged map** — the final map the build system iterates to generate classes

```scss +code
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

The build system iterates `$border-radius-map` — not the individual variants or
values. The merge order matters: variants go first so semantic class names
(`.rounded-base`) appear before numeric ones (`.rounded-05`) in the CSS output,
which controls cascade precedence.
