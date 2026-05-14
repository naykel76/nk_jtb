# Animation Utilities

Utility classes for applying CSS animations.

| Class                | Animation               |
| -------------------- | ----------------------- |
| `animate-spin`       | Continuous rotation     |
| `animate-bounce`     | Vertical bounce         |
| `animate-pulse`      | Opacity fade            |
| `animate-pulse-ring` | Expanding ring          |
| `animate-ping`       | Scale and fade out      |
| `animate-dash`       | SVG stroke arc morphing |
| `animate-dots`       | Animated ellipsis       |
| `animate-checkmark`  | SVG stroke draw-in      |
| `animate-circle`     | SVG stroke draw-in      |
| `animate-none`       | Removes animation       |

## Spin (review)

Rotates an element continuously. Commonly used for loading indicators.

```html +demo-folded class="bx"
<div class="animate-spin wh-3 bdr-4 bdr-gray-200 bdr-t-blue-500 rounded-full"></div>
```

## Bounce (review)

Applies a vertical bounce. Stagger `animation-delay` across sibling elements for
a sequential effect.

```html +demo-folded class="bx" preview-class="flex-centered gap-05"
<div class="wh-1 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
<div class="wh-1 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
<div class="wh-1 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
```

## Pulse (review)

Fades an element's opacity in and out. Use for skeleton loaders or ambient
status indicators.

```html +demo-folded class="bx"
<div class="wh-4 bg-teal-500 rounded-full animate-pulse"></div>
```

## Pulse Ring (review)

Scales and fades an element outward to create an expanding ring effect. Use
`relative` positioning with overlapping siblings for layered rings.

```html +demo-folded class="bx"
<div class="relative">
    <div class="wh-4 bg-emerald-500 rounded-full"></div>
    <div class="absolute top-0 left-0 wh-4 bg-emerald-400 rounded-full animate-pulse-ring"></div>
    <div class="absolute top-0 left-0 wh-4 bg-emerald-400 rounded-full animate-pulse-ring" style="animation-delay: 0.5s;"></div>
</div>
```

## Ping (review)

Scales an element to twice its size while fading it out — a one-shot burst
effect. Commonly used as a notification indicator layered over a badge or dot.

```html +demo-folded class="bx"
<div class="relative">
    <div class="wh-2 bg-red-500 rounded-full"></div>
    <div class="absolute top-0 left-0 wh-2 bg-red-400 rounded-full animate-ping"></div>
</div>
```

## Dots (review)

Animates a `::after` pseudo-element to cycle through an ellipsis sequence.
Commonly used alongside loading text.

```html +demo-folded class="bx" preview-class="flex-centered"
<span>Loading<span class="animate-dots"></span></span>
```

## SVG Animations (review)

### Dash (review)

Rotates an SVG and morphs its child circle's `stroke-dasharray` for a breathing
arc spinner. A single class handles both effects.

```html +demo-folded class="bx" preview-class="flex-centered"
<svg class="animate-dash wh-4 txt-blue-500" viewBox="0 0 44 44">
    <circle cx="22" cy="22" r="16" stroke="currentColor" />
</svg>
```

### Draw-in (review)

`animate-circle` draws a circular stroke in from nothing to full.
`animate-checkmark` does the same for a path. Both set `stroke-dasharray`
and animate `stroke-dashoffset`. The SVG path or circle length must be no greater
than the class's `stroke-dasharray` value (166 for circle, 100 for checkmark).

```html +demo-folded class="bx" preview-class="flex-centered"
<svg viewBox="0 0 52 52" class="wh-4 txt-green-600" fill="none">
    <circle cx="26" cy="26" r="25" stroke="currentColor" stroke-width="2" class="animate-circle" />
    <path d="M14 27l8 8 16-16" stroke="currentColor" stroke-width="2" class="animate-checkmark" />
</svg>
```
