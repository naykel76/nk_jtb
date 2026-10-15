# Sidebar + Main

<p class="lead">A sidebar beside a main content area, with options for a responsive sidebar.</p>

## Responsive with Hidden Sidebar (review)

Below the breakpoint the sidebar hides and main takes the full width. A burger
reopens it over the content. Drag the demo narrower to see it.

- `fs0` prevents the sidebar from shrinking
- `flex-1` on the main column fills the remaining space
- Below `md` the sidebar is `absolute` and off-screen. `md:relative
  md:translate-x-0` puts it back in the layout
- The burger bar (`md:hidden`) sets `drawerOpen`. The backdrop and Escape close it
- `overflow-hidden` keeps the off-screen sidebar from showing outside the layout

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div x-data="{ drawerOpen: false }" x-on:keydown.escape.window="drawerOpen = false" class="relative flex min-h-screen overflow-hidden">
    <div x-show="drawerOpen" x-on:click="drawerOpen = false" class="overlay md:hidden"></div>

    <aside :class="drawerOpen ? 'translate-x-0' : '-translate-x-full'" class="absolute top-0 bottom-0 left-0 z-highest w-16 fs0 bg-slate-900 transition-all md:relative md:translate-x-0">
    </aside>

    <div class="flex-1 flex-col">
        <div class="flex items-center pxy-05 bdr-b bg-white md:hidden">
            <button x-on:click="drawerOpen = true" class="wh-2 flex items-center justify-center">
                <svg class="wh-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>

        <main class="flex-1 bg-gray-200">
        </main>
    </div>
</div>
```

### Collapsible Sidebar (review)

Adds an icon rail on larger screens. Phones work the same as above.

- `sidebarCollapsed` joins `drawerOpen` in the Alpine state
- The edge button toggles `sidebarCollapsed`, switching the sidebar between `md:w-16`
  and `md:w-4`
- `to-md:hidden` hides the edge button on phones, where the burger takes over

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div x-data="{ sidebarCollapsed: false, drawerOpen: false }" x-on:keydown.escape.window="drawerOpen = false" class="relative flex min-h-screen overflow-hidden">
    <div x-show="drawerOpen" x-on:click="drawerOpen = false" class="overlay md:hidden"></div>

    <aside :class="[drawerOpen ? 'translate-x-0' : '-translate-x-full', sidebarCollapsed ? 'md:w-4' : 'md:w-16']" class="absolute top-0 bottom-0 left-0 z-highest w-16 fs0 flex-col bg-white bdr-r transition-all md:relative md:translate-x-0">
        <button x-on:click="sidebarCollapsed = !sidebarCollapsed" class="absolute top-1 -right-1 wh-2 flex items-center justify-center rounded-full primary to-md:hidden">
            <svg :class="sidebarCollapsed && 'rotate-180'" class="wh-1 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
        </button>
    </aside>

    <div class="flex-1 flex-col">
        <div class="flex items-center pxy-05 bdr-b bg-white md:hidden">
            <button x-on:click="drawerOpen = true" class="wh-2 flex items-center justify-center">
                <svg class="wh-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>

        <main class="flex-1 bg-gray-200">
            <div class="container-md py space-y">
                <div class="bx h-8"></div>
                <div class="bx h-10"></div>
            </div>
        </main>
    </div>
</div>
```

## Characteristics (review)

### Independent Scrolling (review)

Each region scrolls on its own, instead of the whole page scrolling together.

- Replace `min-h-screen` with a fixed height and add `overflow-hidden` to the
  outer container. Use `h-screen` for a full app shell, `h-full` inside another
  container
- Add `overflow-y-auto` to the sidebar and to main

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex h-screen overflow-hidden">
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
<div class="flex h-screen overflow-hidden">
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
