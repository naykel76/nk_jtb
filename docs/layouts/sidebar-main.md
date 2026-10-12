# Sidebar + Main

<p class="lead">A sidebar beside a main content area, with options for a responsive sidebar.</p>

## Responsive with Hidden Sidebar

Below the breakpoint the sidebar hides and main takes the full width. Usually
paired with a toggle to reopen it. Drag the demo narrower to see it.

- `fs0` prevents the sidebar from shrinking
- `flex-1` on main fills the remaining space
- `to-md:hidden` hides the sidebar below `md` — change `md` to pick the breakpoint

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex min-h-screen">
    <aside class="w-16 fs0 bg-slate-900 to-md:hidden">
    </aside>

    <main class="flex-1 bg-gray-200">
    </main>
</div>
```

## Characteristics (review)

### Independent Scrolling (review)

Each region scrolls on its own, instead of the whole page scrolling together.

- Replace `min-h-screen` with a fixed height and add `overflow-hidden` to the
  outer container — `h-screen` for a full app shell, `h-full` inside another
  container (the demo uses `h-20` to fit the page)
- Add `overflow-y-auto` to the sidebar and to main

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex h-20 overflow-hidden">
    <aside class="w-16 fs0 flex-col bg-slate-900 overflow-y-auto to-md:hidden">
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
