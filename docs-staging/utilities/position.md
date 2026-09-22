# Position Utilities (review)

## Position Values (review)

```html +demo-folded class="bx"
<div class="grid gap lg:cols-3 tac">
    <div class="bdr pxy-1">
        <code>static</code><br> Normal flow
    </div>
    <div class="bdr pxy-1 relative">
        <code>relative</code><br> Positioned normally
    </div>
    <div class="bdr pxy-1 sticky top-0">
        <code>sticky</code><br> Sticks on scroll
    </div>
</div>
```

```html +demo-folded class="bx"
<div class="grid gap lg:cols-2 tac">
    <div class="bdr pxy-1 relative" style="height: 80px;">
        <div class="absolute top-0 right-0 bdr pxy-1">
            <code>absolute</code><br> Fixed to parent
        </div>
    </div>
    <div class="bdr pxy-1 fixed" style="left: 50%; transform: translateX(-50%);">
        <code>fixed</code><br> Fixed to viewport
    </div>
</div>
```

## Z-Index (review)

```html +demo-folded class="bx"
<div class="grid gap lg:cols-4 tac">
    <div class="bdr pxy-1 z-0">
        <code>z-0</code>
    </div>
    <div class="bdr pxy-1 z-above">
        <code>z-above</code>
    </div>
    <div class="bdr pxy-1 z-high">
        <code>z-high</code>
    </div>
    <div class="bdr pxy-1 z-highest">
        <code>z-highest</code>
    </div>
</div>
```

| Class | Value |
| ----- | ----- |
| `z-0` | 0 |
| `z-above` | 10 |
| `z-high` | 100 |
| `z-higher` | 200 |
| `z-highest` | 999 |
| `z-auto` | auto |

## Offset (review)

Control distance from edges. Offset utilities set logical properties internally — `top-*` sets `inset-block-start`, `left-*` sets `inset-inline-start`, and so on.

```html +demo-folded class="bx"
<div class="grid gap lg:cols-4 tac">
    <div class="bdr pxy-1 relative" style="height: 60px;">
        <div class="absolute top-0 bdr pxy-1">
            <code>top-0</code>
        </div>
    </div>
    <div class="bdr pxy-1 relative" style="height: 60px;">
        <div class="absolute bottom-0 bdr pxy-1">
            <code>bottom-0</code>
        </div>
    </div>
    <div class="bdr pxy-1 relative" style="height: 60px;">
        <div class="absolute left-0 bdr pxy-1">
            <code>left-0</code>
        </div>
    </div>
    <div class="bdr pxy-1 relative" style="height: 60px;">
        <div class="absolute right-0 bdr pxy-1">
            <code>right-0</code>
        </div>
    </div>
</div>
```

### Inset Shorthand (review)

```html +demo-folded class="bx"
<div class="bdr pxy-1 relative" style="height: 100px;">
    <div class="absolute inset-0 bdr pxy-1">
        <code>inset-0</code><br> Fills parent
    </div>
</div>
```

### Values (review)

| Class | Value |
| ----- | ----- |
| `*-0` | 0 |
| `*-025` | 0.25rem |
| `*-05` | 0.5rem |
| `*-1` | 1rem |
| `*-1.5` | 1.5rem |
| `*-2` | 2rem |
| `*-3` | 3rem |
| `*-4` | 4rem |
| `*-auto` | auto |
| `*-full` | 100% |

## Negative Offset (review)

Prefix any offset utility with `-` to pull an element outside its containing boundary. Useful for decorative elements that bleed off a card or panel edge.

```html +demo-folded class="bx"
<div class="relative overflow-hidden bdr" style="height: 80px;">
    <div class="absolute -top-1 -right-1 wh-4 bg-primary opacity-20 rounded-full"></div>
    <p class="pxy-1">Card with bleed decoration</p>
</div>
```

### Values (review)

| Class | Value |
| ----- | ----- |
| `*-0.25` | -0.25rem |
| `*-0.5` | -0.5rem |
| `*-1` | -1rem |
| `*-1.5` | -1.5rem |
| `*-2` | -2rem |
| `*-3` | -3rem |
| `*-4` | -4rem |

## Responsive (review)

```html +demo-folded class="bx"
<div class="bdr pxy-1">
    <code>md:fixed lg:top-0</code><br>
    Fixed on medium, top on large
</div>
```

