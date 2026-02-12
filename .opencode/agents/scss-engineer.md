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
@include build-classes((
    margin: (
        prefix: 'm-',
        values: (1, 2, 3),
        unit: 'rem',
        positions: $logical-position-map
    )
));
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

## Documentation Style

Use existing docs as templates (border.md, display-and-visibility.md):

- **Format:** `+demo-folded` with visual examples
- **Progressive complexity:** Base → variants → values
- **Minimal prose:** Show, don't explain
- **Grid layouts** for comparing variants
- **Only document what exists** (verify in SCSS first)

```html +demo-folded
<div class="grid gap lg:cols-3 tac">
    <div class="bdr">
        <code>bdr</code><br> Default
    </div>
    <div class="bdr-2">
        <code>bdr-2</code><br> 2px
    </div>
</div>
```

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

| Purpose                          | File                                |
| -------------------------------- | ----------------------------------- |
| All documentation                | `docs_updated/**/*.md`              |
| Builder/Maker API                | `docs_updated/api/*.md`            |
| Import order                     | `src/build.scss`                    |

## Common Tasks

| Task                   | Location                              |
| ---------------------- | ------------------------------------- |
| Add spacing utilities  | `src/utilities/spacing/`              |
| Add component          | `src/components/_name.scss`           |
| Add theme color        | `src/maps_and_variables/_colors.scss` |
| Add typography utility | `src/utilities/typography/`           |
| Configure breakpoints  | `src/maps_and_variables/_config.scss` |

## Linting

```bash
npm run lint
```
