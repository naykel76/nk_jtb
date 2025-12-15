# make-from-breakpoint()

Generate classes that apply from a specific breakpoint upward.

## Signature

```scss +code
@mixin make-from-breakpoint(
    $properties,
    $class-name,
    $breakpoints
)
```

## Parameters

| Parameter           | Type    | Default | Description                                                    |
| ------------------- | ------- | ------- | -------------------------------------------------------------- |
| `$props`            | Map     | —       | CSS properties and values (e.g., `(display: flex, gap: 1rem)`) |
| `$identifier`       | String  | —       | Class name identifier (e.g., `flex-row`, `grid-2col`)          |
| `$breakpoints`      | List    | —       | Breakpoints (e.g., `(md, lg, xl)`)                             |
| `$child-combinator` | Boolean | `false` | Generate child selector variant                                |

## Examples

### Basic Usage

```scss +code
@include make-from-breakpoint(
    (display: flex, flex-direction: row),
    'flex-row',
    (md, lg)
);
// Output: .md:flex-row, .lg:flex-row
```

### Single Breakpoint

```scss +code
@include make-from-breakpoint(
    (display: grid, grid-template-columns: repeat(3, 1fr)),
    'grid-3',
    (lg)
);
// Output: .lg:grid-3
```

## Output Structure

- `.{breakpoint}:{class-name}` — Applies from that breakpoint upward

Use case: Responsive layouts that change at specific screen sizes.
