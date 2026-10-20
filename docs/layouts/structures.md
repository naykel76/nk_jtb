# Structures

<p class="lead">Reusable arrangements that sit inside any layout. Find the shape you need, copy it, and fill it in.</p>

## Two-Thirds + One-Third

Built with grid: `cols-3`, with `col-span-2` on the larger column.

```html +demo-folded class="bx example-utils"
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

### How do I stack it on small screens?

Add a breakpoint prefix to `cols-3` and `col-span-2`, such as `lg:`. The
columns sit side by side from that breakpoint up, and stack into one column
below it. Drag the demo narrower to see it.

```html +demo-folded class="resizable-container with-docs-only-overrides example-utils"
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

## Header + Body + Footer

A header and footer with a body between them. Built with `flex-col`, with
`flex-1` on the body, so the body takes any spare height and the footer stays at
the bottom.

- The container needs a height for that to show. Set whatever suits (the demo
  uses `h-20`), or remove it when a layout gives it one, like the sidebar in
  [Sidebar + Main](/docs/jtb/layouts/sidebar-main)

```html +demo-folded class="bx example-utils"
<div class="flex-col gap-05 h-20">
    <header class="pxy-075 bg-slate-400 rounded">Header</header>
    <div class="flex-1 pxy-075 bg-slate-200 rounded">Body</div>
    <footer class="pxy-075 bg-slate-400 rounded">Footer</footer>
</div>
```

### How do I make the body scroll on its own?

Give the container a fixed height and let the body scroll, so the header and
footer stay in place. Useful for a long menu in a sidebar.

- Give the container a fixed height: `h-screen` for a full-height sidebar, or
  `h-full` inside a parent that has a height (the demo uses `h-20`)
- Add `overflow-y-auto` to the body
- The body clips anything that hangs over its edge, so keep things like a
  sidebar's collapse button outside the body

```html +demo-folded class="bx example-utils"
<div class="flex-col gap-05 h-20">
    <header class="pxy-075 bg-slate-400 rounded">Header</header>
    <div class="flex-1 overflow-y-auto pxy-075 space-y bg-slate-200 rounded">
        <div class="h-4 bg-slate-300 rounded"></div>
        <div class="h-4 bg-slate-300 rounded"></div>
        <div class="h-4 bg-slate-300 rounded"></div>
        <div class="h-4 bg-slate-300 rounded"></div>
        <div class="h-4 bg-slate-300 rounded"></div>
    </div>
    <footer class="pxy-075 bg-slate-400 rounded">Footer</footer>
</div>
```
