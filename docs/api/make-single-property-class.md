# make-single-property-class()

Generate a single utility class with optional responsive and state variants.

## Signature

```scss +code
@mixin make-single-property-class(
    $property,
    $class-name,
    $value,
    $breakpoints: (),
    $states: ()
)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$property` | String | — | CSS property name (e.g., `display`, `color`, `opacity`) |
| `$class-name` | String | — | Class name to generate (e.g., `hidden`, `flex`, `inline`) |
| `$value` | String | — | CSS value for the property (e.g., `flex`, `inline`, `none`) |
| `$breakpoints` | List | `()` | Breakpoints for responsive variants (e.g., `(md, lg)`) |
| `$states` | List | `()` | Pseudo-classes for state variants (e.g., `(hover, focus, active)`) |
| `$child-combinator` | Boolean | `false` | Generate child selector variant |

## Examples

### Basic Class

```scss +code
@include make-single-property-class('display', 'hidden', 'none');
// Output: .hidden { display: none; }
```

### With Responsive Variants

```scss +code
@include make-single-property-class(
    'display',
    'flex',
    'flex',
    $breakpoints: (md, lg)
);
// Output: .flex, .md:flex, .lg:flex
```

### With State Variants

```scss +code
@include make-single-property-class(
    'opacity',
    'fade',
    '0.5',
    $states: (hover, focus)
);
// Output: .fade, .fade:hover, .fade:focus
```

### With Both Responsive and State

```scss +code
@include make-single-property-class(
    'color',
    'highlight',
    '#ffff00',
    $breakpoints: (md, lg),
    $states: (hover, focus)
);
// Output: .highlight, .md:highlight, .lg:highlight, .highlight:hover, etc.
```

## Output Structure

- Base: `.{class-name}`
- Responsive: `.{breakpoint}:{class-name}`
- State: `.{class-name}:{state}`
- Combined: `.{breakpoint}:{class-name}:{state}`
