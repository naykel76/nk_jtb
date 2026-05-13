# Loaders and Spinners

Page loaders and spinners to communicate in-progress and waiting states.

## Spinners

The `.spinner` class provides a CSS-only animated border spinner.

### Border Spinner

Apply the `.spinner` class to a `div` for an animated loading indicator.

#### Basic Usage

```html +demo-folded class="bx example-jtb" preview-class="flex-centered"
<div class="spinner"></div>
```

#### Size

Add `.sm` or `.lg` to resize.

```html +demo-folded class="bx example-jtb" preview-class="flex-centered gap"
<div class="spinner sm"></div>
<div class="spinner"></div>
<div class="spinner lg"></div>
```

#### Thickness

Add `.thick` to increase the border width. Combine with size modifiers.

```html +demo-folded class="bx example-jtb" preview-class="flex-centered gap"
<div class="spinner sm thick"></div>
<div class="spinner thick"></div>
<div class="spinner lg thick"></div>
```

### Utility Examples

#### SVG Arc

```html +demo-folded class="bx example-utils" preview-class="flex-centered gap"
<svg class="animate-spin wh-5" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
```

Use text color utilities to control the spinner color.

```html +demo-folded class="bx example-utils" preview-class="flex-centered gap"
<svg class="animate-spin wh-5 txt-blue" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-5 txt-blue-900" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
<svg class="animate-spin wh-5 txt-orange-400" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="butt" stroke-dasharray="22 66" />
</svg>
```

## Loader Container (review)

`.loader-container` centers a spinner and loading text as a column. For a
composed example see [UI Examples](/docs/jtb/examples/showcase-ui).

## CSS Custom Properties (review)

| Property      | Default  | Controls                             |
| ------------- | -------- | ------------------------------------ |
| `--size`      | `2.5rem` | Spinner diameter                     |
| `--thickness` | `0.08`   | Border width as a proportion of size |

Override on the element directly or scoped to a parent:

```html +code
<div class="spinner" style="--size: 4rem; --thickness: 0.12;"></div>
```

See [Variable System](/docs/jtb/variable-system) for override instructions.
