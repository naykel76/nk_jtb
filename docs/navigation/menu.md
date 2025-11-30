# Menu

Navigation list component for sidebars, dropdowns, and navbars.

## Introduction

Use the `.menu` class or utility classes to build menus. Adding `.menu` makes
the menu context-aware, so it adjusts automatically based on where it's placed
and what other classes are used. It handles link and button styling on its own.
Put the same `.menu` inside something like a `.navbar` and it switches layout
without extra classes.

Utility classes give you full control when you need custom styling.

## Menu Structure
...


 more context before we get into it
<p class="lead">Core navigation component. Context-aware—adapts to vertical or
horizontal layouts based on where it's used.</p>


# Menu Component

<p class="lead">Navigation menu pattern. Build with the `.menu` class for automatic styling, or use utilities for full control.</p>

## Menu Structure

Apply `.menu` to a `<ul>` element. The `<nav>` is just a container, the menu
itself is the list.


<!-- should we keep this? -->
```html +code
<nav class="">
    <ul class="">
        <li><a href="#"></a></li>
    </ul>
</nav>
```


> **This structure is important:** Keeping the container (`<nav>`) separate from
> the component (`<ul class="menu">`) gives you flexibility to switch between
> vertical and horizontal layouts, nest menus, and use the menu component
> anywhere—sidebars, dropdowns, or navbars.

Links and buttons inside `.menu` are styled automatically. No item classes
required.


```html +code +preview +collapse class="example-jtb w-20"
<nav class="bx pxy-1 bdr bdr-pink w-18">
    <ul class="menu">
        <li>
            <a href="#">
                <svg class="bdr bdr-pink bg-stripes-pink"></svg>
                Item
            </a>
        </li>
        <li>
            <a href="#" class="active">
                <svg class="bdr bdr-pink bg-stripes-pink"></svg>
                Active
            </a>
        </li>
        <li x-data="{ open: true }">
            <button x-on:click="open = !open">
                <span>
                    <svg class="bdr bdr-pink bg-stripes-pink"></svg>
                    Parent <span x-text="open ? '(opened)' : '(closed)'"></span>
                </span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" d="m6 15 6-6 6 6" />
                    <path x-show="!open" d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <ul x-show="open" x-collapse>
                <li>
                    <a href="#">Child Item</a>
                </li>
                <li>
                    <a href="#">Child Item</a>
                </li>
            </ul>
        </li>        
    </ul>
</nav>
```

```html +code +preview +collapse class="example-utils w-20"
<nav class="bx">
    <ul class="txt-sm">
        <li>
            <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <svg class="wh-1.25 bdr bdr-blue bg-stripes-blue"></svg>
                Item
            </a>
        </li>
        <li>
            <a href="#" class="bg-gray-200 flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600">
                <svg class="wh-1.25 bdr bdr-blue bg-stripes-blue"></svg>
                Active
            </a>
        </li>         
        <li x-data="{ open: true }">
            <button x-on:click="open = ! open" class="flex items-center justify-between w-full px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <span class="flex items-center gap-075">
                    <svg class="wh-1.25 bdr bdr-blue bg-stripes-blue"></svg>
                    Parent <span x-text="open ? '(opened)' : '(closed)'"></span>
                </span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" d="m6 15 6-6 6 6" />
                    <path x-show="!open" d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <ul x-show="open" x-collapse class="pl-2">
                <li>
                    <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                        Child Item
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                        Child Item
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```

## Menu Items

<!-- with the menu class you littery just add icon -->
```html +code +preview +collapse class="example-jtb w-20"
<nav class="bg-white">
    <ul class="menu">
        <li><a href="#">Item</a></li>
        <li><a href="#"> <svg class="bdr bdr-pink bg-stripes-pink"></svg> Item </a></li>
    </ul>
</nav>

```

<!-- utility example -->
```html +code +preview +collapse class="example-utils w-20"
<nav class="bg-white">
    <ul class="txt-sm">
        <li> <a href="#" class="flex items-center p-ctrl rounded-lg txt-gray-600 hover:bg-gray-100"> Item </a> </li>
        <li>
            <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <svg class="wh-1.25 bdr bdr-blue bg-stripes-blue"></svg>
                Item
            </a>
        </li>
    </ul>
</nav>
```

## Parent Items

```html +code +preview +collapse class="example-jtb"
<nav class="bg-white">
    <ul class="menu flex-row">
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
            <button x-on:click="open = ! open">
                <span>
                    <svg class="bdr bdr-pink bg-stripes-pink"></svg>
                    Parent Dropdown (JTB Component Classes)
                </span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" d="m6 15 6-6 6 6" />
                    <path x-show="!open" d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div x-show="open" x-collapse class="absolute mt-05 flex z-100">
                <ul class="bx pxy-0 w-full flex-col gap-0">
                    <li>
                        <a href="#"> Child Item With Much Longer Title</a>
                    </li>
                    <li>
                        <a href="#"> Child Item </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

```html +code +preview +collapse class="example-utils"
<nav class="bg-white">
    <ul class="flex gap-05 txt-sm">
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
            <button x-on:click="open = ! open" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-700 hover:bg-gray-100">
                <span class="flex items-center gap-075">
                    <svg class="wh-1.25 bdr bdr-blue bg-stripes-blue"></svg>
                    Parent Dropdown (Utility Classes Only)
                </span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" d="m6 15 6-6 6 6" />
                    <path x-show="!open" d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div x-show="open" x-collapse class="absolute mt-05 flex w-10 z-100">
                <ul class="bx pxy-0 w-full flex-col gap-0">
                    <li>
                        <a href="#" class="flex items-center gap-075 px-075 py-05 txt-gray-700 hover:bg-gray-100">
                            Child Item
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center gap-075 px-075 py-05 txt-gray-700 hover:bg-gray-100">
                            Child Item
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```



<!-- I think this need to go somewhere to explain where to add the menu class -->

### JTB Menu Class

> Apply the `menu` class to the `ul` element rather than the `nav` for better
> flexibility. This allows you to easily switch between vertical and horizontal
> layouts by adding `flex-row gap-05` to the `ul`.

