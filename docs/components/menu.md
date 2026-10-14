# Menu

<p class="lead">A vertical navigation list that styles its links and buttons automatically. Inside a <a href="/docs/jtb/components/navbar">navbar</a> it lays out as a row.</p>

## Basic Usage

- `menu` goes on the `<ul>`. The `<nav>` is only a wrapper
- Links and buttons inside are styled automatically, so items need no classes
- Icons inside links and buttons are sized and spaced automatically
- `active` marks the current item
- A parent is a `<button>` followed by a nested `<ul>`
- The toggle uses Alpine.js

```html +demo-folded class="bx example-jtb"
<nav>
    <ul class="menu">
        <li>
            <a href="#">
                <svg class="svg-icon-pink"></svg>
                Item
            </a>
        </li>
        <li>
            <a href="#" class="active">
                <svg class="svg-icon-pink"></svg>
                Active
            </a>
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
            </ul>
        </li>
    </ul>
</nav>
```

## Quick Reference

### Item With Icon

Icons work automatically. Add them inside links or buttons, and the `.menu`
class handles spacing and alignment.

```html +demo-folded class="bx example-jtb"
<nav>
    <ul class="menu">
        <li>
            <a href="#">
                <svg class="svg-icon-pink"></svg>
                Item
            </a>
        </li>
    </ul>
</nav>
```

### Collapsible Parent

```html +demo-folded class="bx example-jtb"
<nav>
    <ul class="menu">
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
            </ul>
        </li>
    </ul>
</nav>
```

### Dropdown Parent

```html +demo-folded class="bx example-jtb"
<nav>
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

## Examples

### Section Titles (`.menu-title`)

Use `.menu-title` for non-clickable labels that group menu items. Place it
inside the same `<ul class="menu">` as a sibling to `<li>` elements.

```html +code
<ul class="menu">
    <li class="menu-title">Section</li>
    <li><a href="#">Item</a></li>
</ul>
```

### Underline Variant (`.link-underline`)

Add `.link-underline` to the menu element to replace the hover background with
a sliding left-to-right underline on links and buttons.

```html +code
<ul class="menu link-underline">
    <li><a href="#">Item</a></li>
</ul>
```

### Chevron Rotation (`.chevron`)

Add `.chevron` to a toggle icon. Toggle `.open` on it when the submenu is open
to rotate the icon 180°.

```html +code
<svg class="chevron" :class="{ open: open }">...</svg>
```

## SCSS Variables (review)

| Variable                      | Default                                    | Description                  |
| ----------------------------- | ------------------------------------------ | ---------------------------- |
| `$menu-padding-x`             | `0.75rem`                                  | Horizontal item padding      |
| `$menu-padding-y`             | `0.5rem`                                   | Vertical item padding        |
| `$menu-icon-size`             | `1.25rem`                                  | Icon width and height        |
| `$menu-hover-bg`              | `gray-100`                                 | Item hover background        |
| `$menu-link-hover-color`      | `$primary`                                 | Item hover and active colour |
| `$menu-link-underline-color`  | `$primary`                                 | Underline variant colour     |

See [Variable System](/docs/jtb/variable-system) for override instructions.

## Utility Examples

```html +demo-folded class="bx example-utils"
<nav>
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
            </ul>
        </li>
    </ul>
</nav>
```
