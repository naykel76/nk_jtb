# Lists

JTB provides base list styles and list variants for common structured content
patterns.

## Base Lists

JTB sets consistent defaults for `ul` and `ol` — markers sit outside the text
flow, items space themselves automatically, and nesting is handled without extra
classes.

| Variable             | Default    | Controls                        |
| -------------------- | ---------- | ------------------------------- |
| `$base-list-spacing` | `0.25em`   | Spacing between list items      |

```html +demo-folded class="bx"
<ul>
    <li>Unordered item</li>
    <li>Unordered item
        <ul>
            <li>Nested item</li>
            <li>Nested item</li>
        </ul>
    </li>
    <li>Unordered item</li>
</ul>
```

```html +demo-folded class="bx"
<ol>
    <li>Ordered item</li>
    <li>Ordered item
        <ol>
            <li>Nested item</li>
            <li>Nested item</li>
        </ol>
    </li>
    <li>Ordered item</li>
</ol>
```

## Variants

### Checklist

A `ul` variant that renders a circle-and-checkmark icon against each item. No
SVG in the markup — the icon is generated from the component variables at
compile time.

`.checklist` can be placed directly on a `ul`, or on a wrapper element when the
`ul` is generated and the markup is not directly accessible.

```html +code
<ul class="checklist">
    <li>List item</li>
</ul>
```

```html +code
<div class="checklist">
    <!-- ul rendered by CMS or template -->
</div>
```

```html +demo-folded class="bx"
<ul class="checklist">
    <li>12 months access from enrolment</li>
    <li>Downloadable resources included</li>
    <li>Certificate on completion</li>
</ul>
```

### SCSS Variables

| Variable                | Default      | Controls           |
| ----------------------- | ------------ | ------------------ |
| `$checklist-icon-size`  | `1.125rem`   | Icon display size  |
| `$checklist-icon-bg`    | `$secondary` | Circle fill color  |
| `$checklist-icon-color` | `$primary`   | Check stroke color |

Icon colors are baked into the SVG at compile time. See [Variable
System](/docs/jtb/variable-system) for how to override SCSS variables in your
project.

## Utility Examples

```html +demo-folded class="bx"
<ul class="space-y-05 txt-sm">
    <li class="flex gap-05">
        <svg class="wh-1.25 rounded-full bg-orange-100 txt-primary pxy-025" fill="none" viewBox="0 0 10 8" stroke="currentColor" stroke-width="1.5">
            <path d="M1 4l2.5 2.5L9 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        12 months access from enrolment
    </li>
    <li class="flex gap-05">
        <svg class="wh-1.25 rounded-full bg-orange-100 txt-primary pxy-025" fill="none" viewBox="0 0 10 8" stroke="currentColor" stroke-width="1.5">
            <path d="M1 4l2.5 2.5L9 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Downloadable resources included
    </li>
    <li class="flex gap-05">
        <svg class="wh-1.25 rounded-full bg-orange-100 txt-primary pxy-025" fill="none" viewBox="0 0 10 8" stroke="currentColor" stroke-width="1.5">
            <path d="M1 4l2.5 2.5L9 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Certificate on completion
    </li>
</ul>
```
