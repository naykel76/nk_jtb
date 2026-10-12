# Sidebar + Main

<p class="lead">A two-column layout with a persistent sidebar and a main content area. Start with the base and layer characteristics on top as needed.</p>

## Base (review)

A minimal shell: fixed-width sidebar, flex-fill main area.

- `fs0` prevents the sidebar from shrinking
- `flex-1` on main fills the remaining space

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex min-h-screen">
    <aside class="w-16 fs0 flex-col bg-slate-900">
    </aside>

    <main class="flex-1 bg-gray-200">
    </main>
</div>
```

## Characteristics

### Independent Scrolling

Each region scrolls on its own. The outer container needs a fixed height, not
`min-h-screen`.

- Add `overflow-hidden` to the outer container and use a fixed height, not `min-h-screen`
- Use `h-screen` for a full app shell, or `h-full` inside another container
- Add `overflow-y-auto` to the sidebar
- Add `overflow-y-auto` to main

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex h-20 overflow-hidden">
    <aside class="w-16 fs0 flex-col bg-slate-900 overflow-y-auto">
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

### Sticky Sidebar Header and Footer

Scrolling moves from the `aside` to the content between the header and footer.

- Remove `overflow-y-auto` from the `aside`
- Add a `<header>` and `<footer>` as direct children of the `aside`
- Wrap the scrollable content in a `div` with `flex-1 overflow-y-auto`

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex h-20 overflow-hidden">
    <aside class="w-16 fs0 flex-col bg-slate-900">
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
