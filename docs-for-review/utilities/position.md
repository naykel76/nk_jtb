# Position Utilities

## Position Values

```html +demo-folded class="bx"
<div class="grid gap lg:cols-3 tac">
    <div class="bdr p-1">
        <code>static</code><br> Normal flow
    </div>
    <div class="bdr p-1 relative">
        <code>relative</code><br> Positioned normally
    </div>
    <div class="bdr p-1 sticky" style="top: 0;">
        <code>sticky</code><br> Sticks on scroll
    </div>
</div>
```

```html +demo-folded class="bx"
<div class="grid gap lg:cols-2 tac">
    <div class="bdr p-1 relative" style="height: 80px;">
        <div class="absolute top-0 right-0 bdr p-1">
            <code>absolute</code><br> Fixed to parent
        </div>
    </div>
    <div class="bdr p-1 fixed" style="left: 50%; transform: translateX(-50%);">
        <code>fixed</code><br> Fixed to viewport
    </div>
</div>
```

## Z-Index

```html +demo-folded class="bx"
<div class="grid gap lg:cols-3 tac">
    <div class="bdr p-1 z-0">
        <code>z-0</code><br> Base layer
    </div>
    <div class="bdr p-1 z-1">
        <code>z-1</code><br> Above base
    </div>
    <div class="bdr p-1 z-50">
        <code>z-50</code><br> High layer
    </div>
</div>
```

## Offset

Control distance from edges:

```html +demo-folded class="bx"
<div class="grid gap lg:cols-4 tac">
    <div class="bdr p-1 relative" style="height: 60px;">
        <div class="absolute top-0 bdr p-1">
            <code>top-0</code>
        </div>
    </div>
    <div class="bdr p-1 relative" style="height: 60px;">
        <div class="absolute bottom-0 bdr p-1">
            <code>bottom-0</code>
        </div>
    </div>
    <div class="bdr p-1 relative" style="height: 60px;">
        <div class="absolute left-0 bdr p-1">
            <code>left-0</code>
        </div>
    </div>
    <div class="bdr p-1 relative" style="height: 60px;">
        <div class="absolute right-0 bdr p-1">
            <code>right-0</code>
        </div>
    </div>
</div>
```

### Inset Shorthand

```html +demo-folded class="bx"
<div class="bdr p-1 relative" style="height: 100px;">
    <div class="absolute inset-0 bdr p-1">
        <code>inset-0</code><br> Fills parent
    </div>
</div>
```

### Values

| Class | Value |
| ----- | ----- |
| `*-0` | 0rem |
| `*-0.5` | 0.5rem |
| `*-1` | 1rem |
| `*-2` | 2rem |
| `*-auto` | auto |

## Responsive

```html +demo-folded class="bx"
<div class="bdr p-1">
    <code>md:fixed lg:top-0</code><br>
    Fixed on medium, top on large
</div>
```
