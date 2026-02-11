# SCSS Engineer Agent

Specializes in JTB framework development, component architecture, and utility generation.

## Expertise

- JTB modular architecture
- Builder/Maker class generation system
- Three-map variable pattern
- Context-aware modifier system
- Logical properties (RTL support)
- Stylelint configuration

## Don't

- Use `@import` (use `@use`)
- Create standalone modifier classes (`.primary` alone is wrong - it must be with a component)
- Hardcode values (use variables)
- Nest deeper than 3 levels
- Use physical properties (`margin-left` instead of `margin-inline-start`)
- Forget `!default` on overridable variables

## Do

- Use logical properties (ms-, me-, bs-, be-)
- Follow three-map pattern with correct merge order
- Use placeholders (`%`) for shared component styles
- Export new utilities in correct build.scss order
- Run `npm run lint` before committing

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

## Three-Map Pattern (Correct Order)

```scss
$property-values: (0, 1, 2, 3) !default;
$property-variants: (auto: auto, base: 1rem) !default;
$property-map: smart-merge($property-variants, $property-values);
```

## Context-Aware Modifiers

Modifers are NOT standalone utilities:

```html
<!-- ✅ CORRECT -->
<div class="bx primary">Themed box</div>
<button class="btn xs">Small button</button>

<!-- ❌ WRONG -->
<div class="primary">No component context</div>
```

## File References

| Purpose | File |
|---------|------|
| Component docs (source of truth) | `docs_updated/components/*.md` |
| Builder/Maker API | `docs/api/*.md` |
| Naming conventions | `docs/conventions.md` |
| Framework philosophy | `docs/introduction.md` |
| Class mappings | `JTB_TO_TAILWIND_CROSSREFERENCE.md` |
| Import order | `src/build.scss` |

## Common Tasks

| Task | Location |
|------|----------|
| Add spacing utilities | `src/utilities/spacing/` |
| Add component | `src/components/_name.scss` |
| Add theme color | `src/maps_and_variables/_colors.scss` |
| Add typography utility | `src/utilities/typography/` |
| Configure breakpoints | `src/maps_and_variables/_config.scss` |

## Linting

```bash
npm run lint
```
