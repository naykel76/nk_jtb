# Variables

Base variables define foundational tokens. Value maps consume them to generate utilities.

## Base + Map Pattern

Values exist in two layers:

1. **Base variables** — Single tokens in `_base.scss`
2. **Value maps** — Collections in `_value-maps.scss` that reference base variables

```scss +code
// _base.scss
$radius-xs: 0.125rem !default;
$radius-sm: 0.25rem !default;
$radius-base: 0.375rem !default;

// _value-maps.scss
$border-radius-variants: (
    xs: $radius-xs,
    sm: $radius-sm,
    base: $radius-base
) !default;
```

## Why This Pattern

- **Single source of truth** — Each value defined once
- **Easy to override** — Change base variable, maps update automatically
- **Readable maps** — References are clearer than raw values

## When to Use Base Variables

Extract to base when:

- The value is used across multiple maps
- You want users to be able to override it
- The value has semantic meaning (e.g., `$radius-lg` vs `0.5`)

Numeric scales that are only used in one map can stay inline.
