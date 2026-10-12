# Structures

<p class="lead">Reusable arrangements that sit inside any layout. Find the shape you need, copy it, and fill it in.</p>

Common use cases:

- Uneven columns, such as two-thirds + one-third
- A grid of equal boxes
- Content next to a summary or call to action

## Two-Thirds + One-Third

Built with grid: `cols-3`, with `col-span-2` on the larger column.

```html +demo-folded
<div class="grid gap cols-3">
    <div class="col-span-2 space-y">
        <div class="bx h-6"></div>
        <div class="bx h-10"></div>
    </div>

    <div>
        <div class="bx h-12"></div>
    </div>
</div>
```

### Responsive

Prefix `cols-3` and `col-span-2` with `lg:`. Below `lg` it stacks to a single
column.

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="grid gap lg:cols-3">
    <div class="lg:col-span-2 space-y">
        <div class="bx h-6"></div>
        <div class="bx h-10"></div>
    </div>

    <div>
        <div class="bx h-12"></div>
    </div>
</div>
```
