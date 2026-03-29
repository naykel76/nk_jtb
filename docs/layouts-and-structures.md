# JTB Layouts and Structures

<p class="lead">Named layout patterns for page-level structure, with a clear distinction between layouts and reusable internal structures.</p>

> Example previews may use docs-only wrapper overrides so they display cleanly
> inside the documentation. The example code itself remains the correct
> implementation to copy and use.

## Layouts

Layouts describe the overall shape of a page or major page region.

### Defaults

- use `container` for standard page sections
- let the section or component own its internal padding
- use `py-4-3-2` as a standard section rhythm
- use `py-5-3-2` for more prominent sections

### Sidebar + Main

A layout with a persistent sidebar for navigation and a main area for the
primary workspace. The sidebar width is deliberate and usually stays consistent.

Typical use cases:

- admin dashboards
- account areas

#### Flexbox Example (preferred)

Typical implementation:

- `flex` container
- fixed-width sidebar using width utilities
- `flex-1` main area

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-16 fs-0 to-md:hidden flex-col bg-slate-900 ">
        <header class="pxy-075 bdr-b bdr-gray-200">
            <div class="h-2 bg-slate-700 rounded"></div>
        </header>

        <div class="flex-1 pxy-075 space-y">
            <div class="h-full bg-slate-700 rounded"></div>
        </div>

        <footer class="pxy-075 bdr-t bdr-gray-200">
            <div class="h-2 bg-slate-700 rounded"></div>
        </footer>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 bg-gray-200">
        <div class="container-md py">
            <div class="bx h-4"></div>
            <div class="bx h-14"></div>
        </div>
    </main>
</div>
```

## Structures

Structures are reusable internal arrangements that can appear inside different
layouts.

Common use cases:

- layouts with a dominant content region and a smaller supporting panel
- pages that pair primary content with summary, context, or actions
- sections that need a proportional split without equal visual weight

### thirds-2-1

A proportional structure with a larger primary region and a smaller supporting
region in a two-thirds / one-third split.

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="grid gap lg:cols-3">
    <div class="lg:col-span-2 space-y">
        <div class="bx h-6"></div>
        <div class="bx h-10"></div>
    </div>

    <aside class="lg:col-span-1">
        <div class="bx h-12"></div>
    </aside>
</div>
```
