<div class="toc" data-toc>

- [Dropdown Menus](#dropdown-menus)
- [Vertical Menus](#vertical-menus)
    - [JTB Menu Class](#jtb-menu-class)
    - [Utility Classes Only](#utility-classes-only)
- [Navbar Style Menus](#navbar-style-menus)
    - [JTB Menu Class](#jtb-menu-class-1)
    - [Utility Classes Only](#utility-classes-only-1)

</div>

# Menu Component

* Think of the `nav` as the container for the menu, and the `ul` as the actual
  menu itself. This will give you more flexibility in styling and layout and
  make it easier to switch between vertical and horizontal menus.

---

## Dropdown Menus



```html +collapse +preview +code class="r"
<nav class="bx pxy-1 bdr-2 bdr-pink">
    <ul class="menu flex-row">
        <li class="relative" x-data="{ open: false }" x-on:click.away="open = false">
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

```html +collapse +preview +code
<nav class="bx pxy-1 bdr-2 bdr-purple mt">
    <ul class="flex gap-05 txt-sm">
        <li class="relative" x-data="{ open: false }" x-on:click.away="open = false">
            <button x-on:click="open = ! open" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-700 hover:bg-gray-100">
                <span class="flex items-center gap-075">
                    <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
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

---

## Vertical Menus

### JTB Menu Class

> Apply the `menu` class to the `ul` element rather than the `nav` for better
> flexibility. This allows you to easily switch between vertical and horizontal
> layouts by adding `flex-row gap-05` to the `ul`.

```html +collapse +preview +code
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

### Utility Classes Only

```html +collapse +preview +code
<nav class="bx pxy-1 bdr bdr-purple w-18">
    <ul class="txt-sm">
        <li>
            <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
                Item
            </a>
        </li>
        <li>
            <a href="#" class="bg-gray-200 flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600">
                <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
                Active
            </a>
        </li>         
        <li x-data="{ open: true }">
            <button x-on:click="open = ! open" class="flex items-center justify-between w-full px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <span class="flex items-center gap-075">
                    <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
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

---

## Navbar Style Menus

### JTB Menu Class

- Simply add the `navbar` class to the `nav` element and update parent items to
  dropdowns to create a navbar-style menu.p
- <span class="txt-red">The dropdown is still using utility classes!</span>

```html +collapse +preview +code
<nav class="navbar pink">
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
        <li class="relative" x-data="{ open: false }" x-on:click.away="open = false">
            <button x-on:click="open = ! open">
                <span>
                    <svg class="bdr bdr-pink bg-stripes-pink"></svg>
                    Parent (Click Away)
                </span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" d="m6 15 6-6 6 6" />
                    <path x-show="!open" d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div x-show="open" x-collapse class="absolute mt-05 flex w-10 z-100">
                <ul class="bx pxy-0 w-full flex-col gap-0">
                    <li>
                        <a href="#"> Child Item </a>
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

> Apply the `menu` class to the `ul` element rather than the `nav` for better
> flexibility. This allows you to easily switch between vertical and horizontal
> layouts by adding `flex-row gap-05` to the `ul`.

### Utility Classes Only

```html +collapse +preview +code
<nav class="bx pxy-1 bdr bdr-purple mt">
    <ul class="flex gap-05 txt-sm">
        <li>
            <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-700 hover:bg-gray-100">
                <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
                Item
            </a>
        </li>
        <li>
            <a href="#" class="bg-gray-200 flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-700">
                <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
                Active
            </a>
        </li>
        <li class="relative" x-data="{ open: false }" x-on:click.away="open = false">
            <button x-on:click="open = ! open" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-700 hover:bg-gray-100">
                <span class="flex items-center gap-075">
                    <svg class="wh-1.25 bdr bdr-purple bg-stripes-purple"></svg>
                    Parent (Click Away)
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

---