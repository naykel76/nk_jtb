# SCSS Engineer Agent

Specializes in JTB framework development, component architecture, and utility generation.

## Key Conventions

- **Numbers = rem values:** `m-1` = 1rem, `m-05` = 0.5rem (leading zero dropped)
- **Property = class name:** `relative`, `sticky` (NOT `position-relative`)
- **Axis modifiers:** `-xy`, `-x`, `-y`, `-t`, `-b`, `-l`, `-r`
- **Pattern:** `{breakpoint}:{property}-{variant/value}`
- **NOT Tailwind:** No `position-`, no `-x`/`-y` suffixes for everything

## Expertise

- JTB modular architecture
- Builder/Maker class generation system
- Three-map variable pattern
- Context-aware modifier system
- Logical properties (RTL support)
- Stylelint configuration

## Component Workflow

### 1. Add Variables

In `src/maps_and_variables/_components.scss`:

```scss
$card-padding: 1rem !default;
$card-bg: #fff !default;
$card-radius: 0.5rem !default;
```

### 2. Create Component

In `src/components/_card.scss`:

```scss
@use '../maps_and_variables/components' as *;

%card {
    background: $card-bg;
    border-radius: $card-radius;
    padding: $card-padding;
}

.#{$card-prefix} {
    @extend %card;

    &-header { }
    &-body { }
    &-footer { }
}
```

### 3. Export

In `src/components/index.scss`:

```scss
@forward '_card';
```

## Utility Generation

### Using build-classes()

```scss
$margin-map: smart-merge($margin-variants, $margin-values);

$props: (
    margin: (
        prefix: 'm',
        values: $margin-map,
        unit: 'rem',
        positions: $logical-position-map
    ),
);

@include build-classes($props, $responsive: true);
```

### Using make-single-property-class()

```scss
@include make-single-property-class(
    'display',
    'flex',
    'flex',
    $breakpoints: (md, lg)
);
```

### Using make-position-based-class()

```scss
@include make-position-based-class(
    'padding',
    1rem,
    $logical-position-map,
    'p',
    null,
    (md, lg)
);
```

## Three-Map Pattern

```scss
$property-values: (0, 1, 2, 3) !default;
$property-variants: (auto: auto, base: 1rem) !default;
$property-map: smart-merge($property-variants, $property-values);
```

## Documentation

See `jtb-documentation` skill for detailed documentation patterns.

**Key principles:**

- **Only document what exists** (verify in SCSS first)
- **Utilities:** Progressive complexity with `+demo-folded` and grid layouts
- **Minimal prose:** Show code, don't explain

## Context-Aware Modifiers

Modifiers require component context:

```html
<!-- ✅ CORRECT -->
<div class="bx primary">Themed box</div>
<button class="btn xs">Small button</button>

<!-- ❌ WRONG -->
<div class="primary">No component context</div>
```

## File References

| Purpose           | File                      |
| ----------------- | ------------------------- |
| Work in progress  | `docs-for-review/**/*.md` |
| Finalized docs    | `docs/**/*.md`            |
| Builder/Maker API | `docs-for-review/api/*.md`|
| Import order      | `src/build.scss`          |

## Common Tasks

| Task                   | Location                              |
| ---------------------- | ------------------------------------- |
| Add spacing utilities  | `src/utilities/_spacing.scss`         |
| Add component          | `src/components/_name.scss`           |
| Add theme color        | `src/maps_and_variables/_colors.scss` |
| Add typography utility | `src/utilities/_typography.scss`      |
| Configure breakpoints  | `src/maps_and_variables/_config.scss` |

## Linting

```bash
npm run lint
```
