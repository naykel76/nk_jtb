# build-classes()

## Signature

```scss +code
@mixin build-classes(
    $properties-map,
    $responsive: false,
    $with-state: false,
    $debug: false
)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$properties-map` | Map | — | CSS property config with `prefix`, `values`, `unit`, `positions`, `omit-axis-keys` |
| `$responsive` | Boolean | `false` | Generate responsive variants (`md:`, `lg:`, etc.) |
| `$with-state` | Boolean | `false` | Generate state variants (`:hover`, `:focus`, `:active`) |
| `$debug` | Boolean | `false` | Output debug info during compilation |

### `$properties-map` Configuration

```scss +code
$border-properties-map: (
    border-width: (
        prefix: 'bdr-',              // Class prefix (optional)
        values: $border-width-map,   // Values to generate (required)
        positions: $logical-position-map,  // For directional properties (t, b, l, r)
        omit-axis-keys: (xy),        // Exclude x/y combinations
        unit: 'px'                   // CSS unit
    ),
    border-color: (
        prefix: 'bdr-',
        values: $colors-map
    )
);

@include build-classes($border-properties-map);
```

## Examples

### Basic Usage

```scss +code
@include build-classes((
    margin: (
        prefix: 'm-',
        values: (1, 2, 3, 4),
        unit: 'rem'
    )
));
// Output: .m-1, .m-2, .m-3, .m-4
```

### With Positions

```scss +code
@include build-classes((
    margin: (
        prefix: 'm-',
        values: (1, 2, 3),
        positions: (t: margin-top, b: margin-bottom, l: margin-left, r: margin-right),
        unit: 'rem'
    )
));
// Output: .m-1, .mt-1, .mb-1, .ml-1, .mr-1
```

### With Responsive Variants

```scss +code
@include build-classes((
    display: (prefix: 'd-', values: (flex, grid, block, hidden))
), $responsive: true);
// Output: .d-flex, .md:d-flex, .lg:d-flex, etc.
```

### With State Variants

```scss +code
@include build-classes((
    opacity: (prefix: 'op-', values: (0.5, 0.75, 1))
), $with-state: true);
// Output: .op-0.5, .op-0.5:hover, .op-0.5:focus, etc.
```

### Omitting Axis Combinations

```scss +code
@include build-classes((
    border-width: (
        prefix: 'bdr-',
        values: (1, 2, 3),
        positions: $logical-position-map,
        omit-axis-keys: (xy),  // Exclude x/y combinations
        unit: 'px'
    )
));
```

## Output Structure

Pattern: `{breakpoint}:{property}-{value}{state}`

Examples: `m-1`, `md:m-1`, `m-1:hover`, `md:m-1:hover`
