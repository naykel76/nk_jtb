# make-from-breakpoint() (review)

Generate classes that apply from a specific breakpoint upward.

## Signature (review)

```scss +code
@mixin make-from-breakpoint(
    $properties,
    $class,
    $breakpoints
)
```

## Parameters (review)

| Parameter           | Type    | Default | Description                                                    |
| ------------------- | ------- | ------- | -------------------------------------------------------------- |
| `$props`            | Map     | —       | CSS properties and values (e.g., `(display: flex, gap: 1rem)`) |
| `$identifier`       | String  | —       | Class name identifier (e.g., `flex-row`, `grid-2col`)          |
| `$breakpoints`      | List    | —       | Breakpoints (e.g., `(md, lg, xl)`)                             |
| `$child-selector` | Boolean | `false` | Generate child selector variant                                |

## Examples (review)

### Basic Usage (review)

```scss +code
@include make-from-breakpoint(
    (display: flex, flex-direction: row),
    'flex-row',
    (md, lg)
);
// Output: .md:flex-row, .lg:flex-row
```

### Single Breakpoint (review)

```scss +code
@include make-from-breakpoint(
    (display: grid, grid-template-columns: repeat(3, 1fr)),
    'grid-3',
    (lg)
);
// Output: .lg:grid-3
```

## Output Structure (review)

- `.{breakpoint}:{class-name}` — Applies from that breakpoint upward

Use case: Responsive layouts that change at specific screen sizes.

