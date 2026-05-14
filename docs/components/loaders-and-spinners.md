# Loaders and Spinners

Page loaders and spinners to communicate in-progress and waiting states.

## Spinners

### SVG Border

A static arc on a faint circular track. Apply `animate-spin` to the SVG.

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
<svg class="animate-spin wh-3 txt-blue" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-3 txt-blue-900" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-3 txt-orange-400" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
```

### SVG Arc

Apply `animate-dash` to an SVG element. A single class handles both rotation and
stroke morphing. Use `wh-*` to control size and `txt-*` to control colour.

```html +demo-folded class="bx example-utils" preview-class="flex-centered vac gap-2"
<svg class="animate-dash wh-2 txt-primary" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
<svg class="animate-dash wh-3 txt-primary" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
<svg class="animate-dash wh-4 txt-primary" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
```

Use `txt-*` utilities to control colour.

```html +demo-folded class="bx example-utils" preview-class="flex-centered gap"
<svg class="animate-dash wh-3 txt-blue" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
<svg class="animate-dash wh-3 txt-blue-900" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
<svg class="animate-dash wh-3 txt-orange-400" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
```

## Page Loader

Compose a page loader with utilities. Use `flex flex-col flex-centered` to
centre the spinner and text as a column. Add `animate-dots` for an animated
ellipsis alongside the loading label.

```html +demo-folded class="bx example-utils" preview-class="flex-centered"
<div class="flex flex-col flex-centered gap-1">
    <svg class="animate-dash wh-4 txt-primary" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="16" stroke="currentColor" />
    </svg>
    <span>Loading<span class="animate-dots"></span></span>
</div>
```
