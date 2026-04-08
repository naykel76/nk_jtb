# Border and Outline Utilities

<p class="lead">Border and outline utilities control width, style, color, radius, and offset.</p>

## Border

### Width

Border widths use pixel values for consistent rendering across screen sizes.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-3 tac"
<div class="bdr">
    <code>bdr</code><br> Default border (1px)
</div>
<div class="bdr-2">
    <code>bdr-2</code><br> 2px border
</div>
<div class="bdr-3">
    <code>bdr-3</code><br> 3px border
</div>
```

### Positional Widths

Apply different widths to specific sides.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-3 tac c-pxy-1"
<div class="bdr bdr-t-5">
    <code>bdr-t-5</code><br> Top border only
</div>
<div class="bdr bdr-b-5">
    <code>bdr-b-5</code><br> Bottom border only
</div>
<div class="bdr bdr-l-5">
    <code>bdr-l-5</code><br> Left border only
</div>
<div class="bdr bdr-r-5">
    <code>bdr-r-5</code><br> Right border only
</div>
<div class="bdr bdr-x-5">
    <code>bdr-x-5</code><br> Horizontal borders
</div>
<div class="bdr bdr-y-5">
    <code>bdr-y-5</code><br> Vertical borders
</div>
```

### Color

Border color is set with explicit border color utilities.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-3 tac c-pxy-1"
<div class="bdr-3 bdr-red">
    <code>bdr-3 bdr-red</code><br> Explicit red
</div>
<div class="bdr-3 bdr-green">
    <code>bdr-3 bdr-green</code><br> Explicit green
</div>
<div class="bdr-3 bdr-blue">
    <code>bdr-3 bdr-blue</code><br> Explicit blue
</div>
```

### Style

Change the border style for all sides.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-2 tac c-pxy-1"
<div class="bdr-3 bdr-solid">
    <code>bdr-solid</code><br> Solid border
</div>
<div class="bdr-3 bdr-dashed">
    <code>bdr-dashed</code><br> Dashed border
</div>
<div class="bdr-3 bdr-dotted">
    <code>bdr-dotted</code><br> Dotted border
</div>
<div class="bdr-3 bdr-double">
    <code>bdr-double</code><br> Double border
</div>
```

### Positional Styles

Apply different styles to specific sides.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-2 tac c-pxy-1"
<div class="bdr-t-3 bdr-t-dashed bdr-x-3 bdr-x-double">
    <code>bdr-t-dashed bdr-x-double</code><br> Dashed top, double sides
</div>
<div class="bdr-b-3 bdr-b-dotted bdr-y-3 bdr-y-solid">
    <code>bdr-b-dotted bdr-y-solid</code><br> Dotted bottom, solid verticals
</div>
```

### Dividers (review)

Divider utilities add borders between direct children without placing classes on
each child. They use the framework border color by default.

```html +demo-folded class="bx"
<div class="divide-y">
    <div class="p-1">First item</div>
    <div class="p-1">Second item</div>
    <div class="p-1">Third item</div>
</div>
```

```html +demo-folded class="bx" preview-class="flex"
<div class="divide-x flex">
    <div class="px-2">Column one</div>
    <div class="px-2">Column two</div>
    <div class="px-2">Column three</div>
</div>
```

```html +demo-folded class="bx"
<div class="grid md:cols-3 md:divide-x tac" style="--border-color: var(--primary);">
    <div class="p-1">North</div>
    <div class="p-1">Central</div>
    <div class="p-1">South</div>
</div>
```

### Gradient Divider (review)

`divide-y-gradient` is a styled variant of `divide-y` with a gradient border effect.

```html +demo-folded class="bx"
<div class="divide-y-gradient">
    <div class="p-1">First item</div>
    <div class="p-1">Second item</div>
    <div class="p-1">Third item</div>
</div>
```

### Radius

Control the roundness of element corners.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-3 tac c-pxy-1"
<div class="bdr-2 rounded">
    <code>rounded</code><br> Default (0.375rem)
</div>
<div class="bdr-2 rounded-lg">
    <code>rounded-lg</code><br> Large (0.5rem)
</div>
<div class="bdr-2 rounded-full">
    <code>rounded-full</code><br> Fully rounded
</div>
```

### Positional Radius

Round specific sides or corners.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-3 tac c-pxy-1"
<div class="bdr-2 rounded-t">
    <code>rounded-t</code><br> Top rounded
</div>
<div class="bdr-2 rounded-l">
    <code>rounded-l</code><br> Left rounded
</div>
<div class="bdr-2 rounded-tl rounded-br">
    <code>rounded-tl rounded-br</code><br> Diagonal corners
</div>
```

## Outline

### Style

Outlines sit outside the border box.

```html +demo-folded class="bx" preview-class="grid gap md:cols-2 tac c-pxy-1"
<div class="outline-3 outline-solid">
    <code>outline-3 outline-solid</code><br> Solid outline
</div>
<div class="outline-3 outline-dashed">
    <code>outline-3 outline-dashed</code><br> Dashed outline
</div>
<div class="outline-3 outline-dotted">
    <code>outline-3 outline-dotted</code><br> Dotted outline
</div>
<div class="outline-3 outline-double">
    <code>outline-3 outline-double</code><br> Double outline
</div>
```

### Offset

Outline offset controls the space between the element and its outline.

```html +demo-folded class="bx" preview-class="grid gap-2 md:cols-2 tac c-pxy-1"
<div class="bx outline-offset-5 outline-3 outline-solid">
    <code>outline-3 outline-solid</code><br> Solid outline
</div>
<div class="bx outline-offset-5 outline-3 outline-dashed">
    <code>outline-3 outline-dashed</code><br> Dashed outline
</div>
<div class="bx outline-offset-5 outline-3 outline-dotted">
    <code>outline-3 outline-dotted</code><br> Dotted outline
</div>
<div class="bx outline-offset-5 outline-3 outline-double">
    <code>outline-3 outline-double</code><br> Double outline
</div>
```

### Color

Use outline color utilities to set outline color explicitly.

```html +demo-folded class="bx" preview-class="grid gap lg:cols-3 tac c-pxy-1"
<div class="bx outline outline-3 outline-red">
    <code>outline-red</code><br> Explicit red
</div>
<div class="bx outline outline-3 outline-green">
    <code>outline-green</code><br> Explicit green
</div>
<div class="bx outline outline-3 outline-blue">
    <code>outline-blue</code><br> Explicit blue
</div>
```
