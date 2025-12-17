# Page Layouts and Structures

- [Sidebar with Main Layout (responsive)](#sidebar-with-main-layout-responsive)
- [Holly Grail](#holly-grail)
- [Split Screen](#split-screen)
- [Magazine](#magazine)


## Sidebar with Main Layout (responsive)

A simple flexbox layout with a fixed-width sidebar and a flexible main content area.
Suitable as a base shell for dashboards or admin screens.

```html +code +preview +collapse
<div class="resizable-container bx bdr-gray-300">
    <div class="container flex bg-gray-300">
        <!-- Sidebar -->
        <aside class="hidden cq-lg:block w-16 lg:w-48 bg-slate-900 pxy-1">
            <div class="space-y">
                <div class="h-4 bg-slate-700 rounded"></div>
                <div class="h-16 bg-slate-700 rounded"></div>
                <div class="h-10 bg-slate-700 rounded"></div>
            </div>
        </aside>
        <!-- Main content -->
        <main class="flex-1 pxy-2 overflow-auto">
            <div class="container-lg">
                <div class="bx h-10"></div>
                <div class="bx h-24"></div>
            </div>
        </main>
    </div>
</div>
```

## Holly Grail

```html +code +preview +collapse
<div class="min-h-screen">
    <div class="flex flex-col h-screen">
        <header class="h-4 bg-gray-800 text-white"></header>
        <div class="flex flex-1 overflow-hidden">
            <aside class="w-12 bg-gray-200">
                <div class="space-y-1 pxy-1">
                    <div class="h-2 bg-gray-300 rounded"></div>
                    <div class="h-2 bg-gray-300 rounded"></div>
                    <div class="h-2 bg-gray-300 rounded"></div>
                </div>
            </aside>
            <main class="flex-1 bg-white pxy-2 overflow-auto">
                <div class="h-96 bg-gray-100 rounded"></div>
            </main>
            <aside class="w-12 bg-gray-200">
                <div class="space-y-1 pxy-1">
                    <div class="h-2 bg-gray-300 rounded"></div>
                    <div class="h-2 bg-gray-300 rounded"></div>
                    <div class="h-2 bg-gray-300 rounded"></div>
                </div>
            </aside>
        </div>
        <footer class="h-4 bg-gray-800"></footer>
    </div>
</div>
```

## Split Screen
```html +code +preview +collapse class="bdr bdr-gray-300"
<div class="min-h-screen">
    <div class="grid lg:cols-2 h-screen">
        <div class="bg-blue-600"></div>
        <div class="flex-centered">
            <div class="w-full max-w-sm space-y-1 px-5">
                <div class="h-2.5 bg-gray-200 rounded"></div>
                <div class="h-2.5 bg-gray-200 rounded"></div>
                <div class="h-2.5 bg-gray-200 rounded"></div>
                <div class="h-2.5 bg-blue-600 rounded"></div>
            </div>
        </div>
    </div>
</div>
```

## Magazine
```html +code +preview +collapse
<div class="min-h-screen">
    <div class="container space-y">
        <div class="bx h-12"></div>
        <div class="grid cols-1 md:cols-3">
            <div class="bx md:col-span-2"></div>
            <div>
                <div class="h-6 bx"></div>
                <div class="h-6 bx"></div>
            </div>
        </div>
        <div class="grid md:cols-4">
            <div class="h-6 bx"></div>
            <div class="h-6 bx"></div>
            <div class="h-6 bx"></div>
            <div class="h-6 bx"></div>
        </div>
    </div>
</div>
```
