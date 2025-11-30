# Menu

<p class="lead">Vertical navigation lists for sidebars, dropdowns, and nested 
navigation. Context-aware—adapts layout based on where it's used.</p>

> **New to JTB navigation?** See the [Navigation Overview](overview.md) to
> understand the semantic structure and context-aware concepts that make menus
> work.

## Introduction

The `.menu` class creates vertical navigation lists with automatic styling for
links, buttons, icons, and states. No item classes required—just add links to
the list.

## Menu Structure

Apply `.menu` to a `<ul>` element. The `<nav>` is just a container, the menu
itself is the list.

```html +code
<nav>
    <ul class="menu">
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```

> **This structure is important:** Keeping the container (`<nav>`) separate from
> the component (`<ul class="menu">`) gives you flexibility to switch between
> vertical and horizontal layouts, nest menus, and use the menu component
> anywhere—sidebars, dropdowns, or navbars.

Links and buttons inside `.menu` are styled automatically. No item classes required.

> **Examples:** Pink borders indicate JTB component classes, blue borders indicate utility classes.

```html +code +preview +collapse class="example-jtb w-24"
<nav class="bx">
    <ul class="menu">
        <li> 
            <a href="#"> <svg class="svg-icon-pink"></svg> Item </a> 
        </li>
        <li> 
            <a href="#" class="active"> <svg class="svg-icon-pink"></svg> Active </a> 
        </li>
        <li x-data="{ open: true }">
            <button x-on:click="open = !open">
                <span>  
                    <svg class="svg-icon-pink"></svg>
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

```html +code +preview +collapse class="example-utils w-24"
<nav class="bx">
    <ul class="txt-sm">
        <li>
            <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <svg class="wh-1.25 svg-icon-blue"></svg>
                Item
            </a>
        </li>
        <li>
            <a href="#" class="bg-gray-200 flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600">
                <svg class="wh-1.25 svg-icon-blue"></svg>
                Active
            </a>
        </li>         
        <li x-data="{ open: true }">
            <button x-on:click="open = ! open" class="flex items-center justify-between w-full px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <span class="flex items-center gap-075">
                    <svg class="wh-1.25 svg-icon-blue"></svg>
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


## Customising Menu Items

### Adding Icons

Icons work automatically, just add them inside links or buttons. Spacing and
alignment are handled by the `.menu` class.

```html +code +preview +collapse class="example-jtb w-20"
<nav class="bg-white">
    <ul class="menu">
        <li>
            <a href="#">Item</a>
        </li>
        <li>
            <a href="#"> 
                <svg class="svg-icon-pink"></svg> 
                Item 
            </a>
        </li>
    </ul>
</nav>
```

```html +code +preview +collapse class="example-utils w-20"
<nav class="bg-white">
    <ul class="txt-sm">
        <li>
            <a href="#" class="flex items-center gap-075 px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                <svg class="wh-1.25 svg-icon-blue"></svg>
                Item
            </a>
        </li>
    </ul>
</nav>
```

## Parent Items

Parent items use buttons to toggle child menus. Works for nested navigation or
dropdowns. Uses Alpine.js for toggle behavior.

<!-- should we mention alpine -->

```html +code +preview +collapse class="example-jtb"
<nav class="bg-white">
    <ul class="menu">
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
            <button x-on:click="open = ! open">
                <span>
                    <svg class="svg-icon-pink"></svg>
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
                    <svg class="wh-1.25 svg-icon-blue"></svg>
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
                        <a href="#" class="flex items-center gap-075 px-075 py-05 txt-gray-700 hover:bg-gray-100"> Child Item </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center gap-075 px-075 py-05 txt-gray-700 hover:bg-gray-100"> Child Item </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

