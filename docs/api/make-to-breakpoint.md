# make-to-breakpoint()

Generate classes that apply up to a specific breakpoint.

## Signature

```scss +code
@mixin make-to-breakpoint(
    $properties,
    $class-name,
    $breakpoints
)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$props` | Map | — | CSS properties and values (e.g., `(display: none, visibility: hidden)`) |
| `$identifier` | String | — | Class name identifier (e.g., `hide-mobile`, `flex-sm`) |
| `$breakpoints` | List | — | Breakpoints (e.g., `(sm, md, lg, xl)`) |

## Examples

### Basic Usage

```scss +code
@include make-to-breakpoint(
    (display: none),
    'hide-mobile',
    (md)
);
// Output: .to-md:hide-mobile
// Applies on screens smaller than md
```

### Multiple Breakpoints

```scss +code
@include make-to-breakpoint(
    (display: block, width: 100%),
    'mobile-full',
    (sm, md, lg)
);
// Output: .to-sm:mobile-full, .to-md:mobile-full, .to-lg:mobile-full
```

## Output Structure

- `.to-{breakpoint}:{class-name}` — Applies up to that breakpoint

Use case: Hiding elements on small screens or applying mobile-specific styles.
