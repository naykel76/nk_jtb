# Border and Outline Utilities

<!-- 

Examples
<div class="bdr">Default $border-color</div> (already have this)
<div class="bdr-r">Default $border-color</div>
<div class="bdr-1">Inherited or browser default color</div>
<div class="bdr bdr-red">Override default with red border</div>
<div class="bdr-r bdr-red">Override default with red border</div>

 -->

TODO: Need to update to correct border color.

## Border Width

Border widths use pixel values for consistent rendering across all screen sizes.

```html +demo-folded
<div class="grid gap lg:cols-3 tac">
    <div class="bdr">
        <code>bdr</code><br> Default border (1px)
    </div>
    <div class="bdr-2">
        <code>bdr-2</code><br> 2px border
    </div>
    <div class="bdr-3">
        <code>bdr-3</code><br> 3px border
    </div>
</div>
```

### Positional Border Widths

Apply different widths to specific sides:

```html +demo-folded
<div class="grid gap lg:cols-3 tac c-pxy-1">
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
</div>
```

## Border Color

By default, the border color automatically inherits the text color of the
element.

```html +demo-folded
<div class="grid gap lg:cols-3 tac c-pxy-1">
    <div class="bdr-3 txt-red">
        <code>bdr-3 txt-red</code><br> Inherits red from text
    </div>
    <div class="bdr-3 txt-green">
        <code>bdr-3 txt-green</code><br> Inherits green from text
    </div>
    <div class="bdr-3 txt-blue">
        <code>bdr-3 txt-blue</code><br> Inherits blue from text
    </div>
</div>
```

Override this by applying explicit border-color classes:

```html +demo-folded
<div class="grid gap lg:cols-3 tac c-pxy-1">
    <div class="bdr-3 bdr-red">
        <code>bdr-3 bdr-red</code><br> Explicit red
    </div>
    <div class="bdr-3 bdr-green">
        <code>bdr-3 bdr-green</code><br> Explicit green
    </div>
    <div class="bdr-3 bdr-blue">
        <code>bdr-3 bdr-blue</code><br> Explicit blue
    </div>
</div>
```

Border colors apply to all sides that have a width set.

## Border Style

Change the border style for all sides or specific positions:

```html +demo-folded
<div class="grid gap lg:cols-2 tac c-pxy-1">
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
</div>
```

### Positional Border Styles

Apply different styles to specific sides for dividers or mixed borders:

```html +demo-folded
<div class="grid gap lg:cols-2 tac c-pxy-1">
    <div class="bdr-t-3 bdr-t-dashed bdr-x-3 bdr-x-double">
        <code>bdr-t-dashed bdr-x-double</code><br> Dashed top, double sides
    </div>
    <div class="bdr-b-3 bdr-b-dotted bdr-y-3 bdr-y-solid">
        <code>bdr-b-dotted bdr-y-solid</code><br> Dotted bottom, solid verticals
    </div>
</div>
```

## Border Radius

Control the roundness of element corners. Supports all sides, individual sides,
and specific corners.

```html +demo-folded
<div class="grid gap lg:cols-3 tac c-pxy-1">
    <div class="bdr-2 rounded">
        <code>rounded</code><br> Default (0.375rem)
    </div>
    <div class="bdr-2 rounded-lg">
        <code>rounded-lg</code><br> Large (0.5rem)
    </div>
    <div class="bdr-2 rounded-full">
        <code>rounded-full</code><br> Fully rounded
    </div>
</div>
```

### Positional Radius

Round specific sides for tabs, modals, or connected elements:

```html +demo-folded
<div class="grid gap lg:cols-3 tac c-pxy-1">
    <div class="bdr-2 rounded-t">
        <code>rounded-t</code><br> Top rounded
    </div>
    <div class="bdr-2 rounded-l">
        <code>rounded-l</code><br> Left rounded
    </div>
    <div class="bdr-2 rounded-tl rounded-br">
        <code>rounded-tl rounded-br</code><br> Diagonal corners
    </div>
</div>
```
