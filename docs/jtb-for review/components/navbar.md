# Navbar

<p class="lead">Container with layout for horizontal menus.</p>

- [Overview](#overview)
- [Base structure](#base-structure)
- [Styling](#styling)
    - [`nav-item`](#nav-item)
- [Parent Items](#parent-items)
    - [CSS Only](#css-only)
    - [Alpine Hover](#alpine-hover)
    - [Alpine click](#alpine-click)


## Overview

The `navbar` class applies base styles for horizontal menus. It reduces the need for
excessive utility classes and keeps code cleaner.

Things to keep in mind:

- Make sure to use `<nav>` -> `<ul>` for semantic markup.

## Base structure

Use semantic markup for SEO and accessibility.

```html +parse
<nav class="navbar">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```html
<div class="navbar">
    <nav>
        <ul>
            <li> <a href=""> </a> </li>
        </ul>
    </nav>
</div>
```

## Styling
<!-- fix this comment, it is not completly accurate -->
The `navbar` class provides a base style for horizontal menus. You are free to use utility
classes to style the navbar as you see fit. Alternatively, you can use the `nav-item`
class to apply more opinionated styles to the navigation items.

There are no special 

### `nav-item`

For more opinionated styles on the navigation items you can add the `nav-item` class.

<div class="navbar dark">
    <nav>
        <ul>
            <li><a class="nav-item" href="#">Home</a></li>
            <li><a class="nav-item" href="#">Services</a></li>
            <li><a class="nav-item" href="#">About</a></li>
            <li><a class="nav-item" href="#">Contact</a></li>
        </ul>
    </nav>
</div>

```html
<div class="navbar">
    <nav>
        <ul>
            <li><a class="nav-item" href="#"></a></li>
        </ul>
    </nav>
</div>
```

---
---
---
---
---
---
---
---
## Parent Items

<div class="bx purple flex">
    <svg class="icon wh-4 fs0 mr-2"><use xlink:href="/svg/naykel-ui.svg#search"></use></svg>
    <div>
    <div class="bx-title">NEED TO REVIEW</div>
    Currently, You may need apply a theme class to the menu to switch between light and dark themes. In the future consider adding the functionality to switch automatically or override.
    </div>
</div>

### CSS Only

To create a CSS dropdown, use the `dd` dropdown class on the nav item and include the `dd-content` wrapper.

<div class="navbar ha-l dark">
    <nav>
        <ul>
            <li class="nav-item dd">
                <a href="#">
                    Parent (css)
                    <svg class="icon sm"> <use xlink:href="/svg/naykel-ui.svg#caret-down"></use> </svg>
                </a>
                <div class="dd-content mt-05">
                    <ul class="menu dark bx pxy-0">
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Child</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</div>

```html
<li class="nav-item dd">
    <a href="#">
        Parent (css)
        <svg class="icon sm"> <use xlink:href="/svg/naykel-ui.svg#caret-down"></use> </svg>
    </a>
    <div class="dd-content mt-05">
        <ul class="menu bx pxy-0">
            <li><a href="#"></a></li>
        </ul>
    </div>
</li>
```

### Alpine Hover

<div class="navbar ha-l dark">
    <nav>
        <ul>
            <li class="relative" x-data="{showChildren:false}"
                x-on:mouseenter="showChildren=true" x-on:mouseleave="showChildren=false">
                <a href="#">
                    Parent (alpine hover)
                    <svg class="icon sm"> <use xlink:href="/svg/naykel-ui.svg#caret-down"></use> </svg>
                </a>
                <div class="absolute mt-05 flex w-10 z-100" x-show="showChildren" x-transition.duration style="display: none;">
                    <ul class="menu stone bx pxy-0 w-full">
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Child</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</div>

```html
<li class="relative" x-data="{showChildren:false}"
    x-on:mouseenter="showChildren=true" x-on:mouseleave="showChildren=false">
    <a href="#">
        Parent (alpine hover)
        <svg class="icon sm"> <use xlink:href="/svg/naykel-ui.svg#caret-down"></use> </svg>
    </a>
    <div class="absolute mt-05 flex w-10 z-100" x-show="showChildren" x-transition.duration style="display: none;">
        <ul class="menu bx pxy-0 w-full">
            <li><a href="#"></a></li>
        </ul>
    </div>
</li>
```

### Alpine click

<div class="navbar ha-l dark">
    <nav>
        <ul>
            <li class="relative" x-data="{showChildren:false}" x-on:click.away="showChildren=false">
                <a href="#" x-on:click.prevent="showChildren=!showChildren">
                    Parent (alpine click)
                    <svg class="icon sm"> <use xlink:href="/svg/naykel-ui.svg#caret-down"></use> </svg>
                </a>
                <div class="absolute mt-05 flex w-10 z-100" x-show="showChildren" x-transition.duration style="display: none;">
                    <ul class="menu rose bx pxy-0 w-full">
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Child</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</div>


```html
<li class="relative" x-data="{showChildren:false}" x-on:click.away="showChildren=false">
    <a href="#" x-on:click.prevent="showChildren=!showChildren">
        Parent (alpine click)
        <svg class="icon sm"> <use xlink:href="/svg/naykel-ui.svg#caret-down"></use> </svg>
    </a>
    <div class="absolute mt-05 flex w-10 z-100" x-show="showChildren" x-transition.duration style="display: none;">
        <ul class="menu bx pxy-0 w-full">
            <li><a href="#"> </a></li>
        </ul>
    </div>
</li>
```
