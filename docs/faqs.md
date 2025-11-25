# Frequently Asked Questions

## How do I Override Variables in JTB Framework?

Override variables by loading the module directly with new values:

```scss +code
@use 'nk_jtb/src/v1/maps_and_variables/colors' with (
  $primary: #7c0442,
  $secondary: #fff4e5
);
```

Ensure your main framework is loaded *after* overrides:

```scss +code
@use 'nk_jtb/src/jtb';
```

Access overridden variables through their module namespace:

```scss +code
.primary-bg {
    background-color: colors.$primary;
}
```

## How do I center content when using flexbox and grid?

**Flexbox - Center both axes:**
```html +code
<div class="flex jcc aic">Centered content</div>
```

**Flexbox - Center horizontally only:**
```html +code
<div class="flex jcc">Horizontally centered</div>
```

**Flexbox - Center vertically only:**
```html +code
<div class="flex aic">Vertically centered</div>
```

**Grid - Center both axes:**
```html +code
<div class="grid place-center">Centered content</div>
```

## What's the difference between `hidden` and `invisible`?

- **`hidden`** - Removes element from layout (`display: none`)
- **`invisible`** - Hides visually but maintains space (`visibility: hidden`)

Use `hidden` when you don't want the element to take up space. Use `invisible` when you want to preserve layout.

## How do I create responsive layouts without writing media queries?

Use JTB's responsive prefixes:

```html +code
<!-- Mobile: stacked, Desktop: side-by-side -->
<div class="flex-col lg:flex-row gap">
    <div>Column 1</div>
    <div>Column 2</div>
</div>

<!-- Different grid columns per screen size -->
<div class="grid cols-1 md:cols-2 lg:cols-3">
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
</div>
```

Or use magic classes for even shorter syntax:

```html +code
<div class="py-5-4-3-2">
    <!-- py-2 on mobile, py-3 on sm, py-4 on md, py-5 on lg -->
</div>
```

## Can I use JTB with other CSS frameworks?

Yes, but there may be conflicts. JTB uses standard utility naming, so conflicts are possible with frameworks like Tailwind. Best practice:

1. Use JTB alone for new projects
2. Namespace JTB classes if integrating with existing frameworks
3. Load JTB after other frameworks to override their styles

## How do I customize spacing values?

Override the spacing maps before importing JTB:

```scss +code
@use 'nk_jtb/src/maps_and_variables/spacing' with (
  $base-gap: 1.5rem,
  $spacing-values: (0, 0.25, 0.5, 1, 2, 3, 4, 6, 8)
);

@use 'nk_jtb/src/jtb';
```

## What's the difference between `mxy`, `mx`, and `my`?

- **`mxy`** - Applies margin to both x and y axes (all sides)
- **`mx`** - Applies margin to x-axis only (left and right)
- **`my`** - Applies margin to y-axis only (top and bottom)

Same pattern applies to padding: `pxy`, `px`, `py`

## How do I disable auto-spacing between elements?

Use the `no-space` class on the parent container:

```html +code
<div class="no-space">
    <p>No automatic spacing applied here</p>
    <p>Elements are tight together</p>
</div>
```

## Can I generate custom utility classes?

Yes! Use the `build-classes` mixin:

```scss +code
@include build-classes((
    opacity: (
        prefix: 'opacity-',
        values: (0, 25, 50, 75, 100),
        unit: '%'
    )
));
```

This generates: `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75`, `.opacity-100`

## How do I apply styles to child elements?

Use the child combinator option in your utility maps:

```scss +code
@include build-classes((
    margin: (
        prefix: 'space-y-',
        values: (1, 2, 3),
        positions: (y: (block-start)),
        child-combinator: true
    )
));
```

Generates: `.space-y-1 > *`, `.space-y-2 > *`, etc.