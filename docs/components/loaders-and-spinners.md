# Loaders and Spinners

Page loaders and spinners to communicate in-progress and waiting states.

## Spinners

### SVG Arc

Apply `animate-spin` to an SVG with a dashed stroke to create a spinner.

Use `wh-*` utilities to control size.

```html +demo-folded class="bx example-utils" preview-class="flex-centered vac gap-2"
<svg class="animate-spin wh-2" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-3" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-4" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
```

Use `txt-*` utilities to control colour.

```html +demo-folded class="bx example-utils" preview-class="flex-centered gap"
<svg class="animate-spin wh-2 txt-blue" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-2 txt-blue-900" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-2 txt-orange-400" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
```

## Loader Container (review)

`.loader-container` centers a spinner and loading text as a column. For a
composed example see [UI Examples](/docs/jtb/examples/showcase-ui).
