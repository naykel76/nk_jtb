# make-on-breakpoint() (review)

Generate classes that apply only on a specific breakpoint.

## Signature (review)

```scss +code
@mixin make-on-breakpoint(
    $properties,
    $class,
    $breakpoints
)
```

## Parameters (review)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$props` | Map | — | CSS properties and values (e.g., `(display: grid)`) |
| `$identifier` | String | — | Class name identifier (e.g., `tablet-grid`, `desktop-only`) |
| `$breakpoints` | List | — | Breakpoints (e.g., `(md, lg, xl)`) |

## Examples (review)

### Basic Usage (review)

```scss +code
@include make-on-breakpoint(
    (display: grid, grid-template-columns: repeat(2, 1fr)),
    'grid-2',
    (md)
);
// Output: .on-md:grid-2
// Applies only on medium screens
```

### Multiple Breakpoints (review)

```scss +code
@include make-on-breakpoint(
    (font-size: 0.875rem),
    'text-sm',
    (sm, md)
);
// Output: .on-sm:text-sm, .on-md:text-sm
```

## Output Structure (review)

- `.on-{breakpoint}:{class-name}` — Applies only on that breakpoint

Use case: Breakpoint-specific styling that doesn't cascade.

