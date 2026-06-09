# Sidebar + Main Layout (review)

A two-column layout with a persistent sidebar and a main content area. Start with the base structure and layer characteristics on top as needed.

## Base Structure

A minimal shell: fixed-width sidebar, flex-fill main area.

- `fs-0` prevents the sidebar from shrinking
- `flex-1` on main fills the remaining space

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex min-h-screen">
    <aside class="w-16 fs-0 flex-col bg-slate-900">
    </aside>

    <main class="flex-1 bg-gray-200">
    </main>
</div>
```

## Characteristics (review)

### Independent Scrolling

Each region scrolls independently within its own bounds. The outer container needs a fixed height — not a min-height — so both regions know where they end. The specific height depends on context (`h-screen` for a full app shell, `h-full` inside another container).

- Add `overflow-hidden` to the outer container and use a fixed height, not `min-h-screen`
- Add `overflow-y-auto` to the sidebar
- Add `overflow-y-auto` to main

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex h-20 overflow-hidden">
    <aside class="w-16 fs-0 flex-col bg-slate-900 overflow-y-auto">
        <div class="pxy-075 space-y">
            <div class="h-6 bg-slate-700 rounded"></div>
            <div class="h-12 bg-slate-700 rounded"></div>
        </div>
    </aside>

    <main class="flex-1 bg-gray-200 overflow-y-auto">
        <div class="container-md py space-y">
            <div class="bx h-8"></div>
            <div class="bx h-10"></div>
        </div>
    </main>
</div>
```

### Sticky Sidebar Header and Footer (review)

When the sidebar needs a persistent header or footer, `overflow-y-auto` moves from the `aside` to an inner content region. The aside itself becomes the fixed frame; only the content between the header and footer scrolls.

- Remove `overflow-y-auto` from the `aside`
- Add a `<header>` and `<footer>` as direct children of the `aside`
- Wrap the scrollable content in a `div` with `flex-1 overflow-y-auto`

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex h-20 overflow-hidden">
    <aside class="w-16 fs-0 flex-col bg-slate-900">
        <header class="pxy-075 bdr-b bdr-slate-700">
            <div class="h-2 bg-slate-600 rounded"></div>
        </header>

        <div class="flex-1 overflow-y-auto pxy-075 space-y">
            <div class="h-6 bg-slate-700 rounded"></div>
            <div class="h-12 bg-slate-700 rounded"></div>
            <div class="h-6 bg-slate-700 rounded"></div>
            <div class="h-6 bg-slate-700 rounded"></div>
        </div>

        <footer class="pxy-075 bdr-t bdr-slate-700">
            <div class="h-2 bg-slate-600 rounded"></div>
        </footer>
    </aside>

    <main class="flex-1 bg-gray-200 overflow-y-auto">
        <div class="container-md py space-y">
            <div class="bx h-8"></div>
            <div class="bx h-10"></div>
        </div>
    </main>
</div>
```
