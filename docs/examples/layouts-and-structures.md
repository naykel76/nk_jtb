# Page Layouts and Structures (review)

Note: These examples are using a container query class to make it easy to
demonstrate responsive layouts without needing to add multiple classes for
different breakpoints. In production you simply remove the `cq-` prefix and use
the appropriate breakpoint classes as needed.

## Sidebar with Main Layout (Dashboard) (review)

```html +demo-folded class="resizable-container"
<div class="flex">
    <!-- Sidebar -->
    <aside class="w-16 fs-0 cq-to-md:hidden flex-col bg-slate-900 ">
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
    <main class="w-full bg-gray-200">
        <div class="container-md py">
            <div class="bx h-4"></div>
            <div class="bx h-14"></div>
        </div>
    </main>
</div>
```

    <div class="resizable-container">
        <div class="container-xl bdr bdr-gray-200">
            <div class="flex">
                <!-- Sidebar -->
                <aside class="w-16 fs-0 cq-to-md:hidden flex-column bg-slate-900 ">
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
                <main class="w-full bg-gray-200">
                    <div class="container-md py">
                        <div class="bx h-4"></div>
                        <div class="bx h-14"></div>
                    </div>
                </main>
            </div>
        </div>
    </div>

## Holly Grail (review)

```html +demo-folded
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

## Split Screen (review)

```html +demo-folded class="bdr bdr-gray-300"
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

