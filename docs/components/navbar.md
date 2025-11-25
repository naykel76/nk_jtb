# Navbar

Container with layout for horizontal menus.

- [Overview](#overview)
- [Base Structure](#base-structure)
- [Styling](#styling)
    - [`nav-item`](#nav-item)
    - [Alpine Hover](#alpine-hover)
    - [Alpine Click](#alpine-click)

## Overview


## Base Structure

```html +code +preview +collapse 
<nav class="bdr bdr-blue">
    <ul class="flex va-c gap pxy">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## Styling

### `nav-item`

Add the `nav-item` class for opinionated styles on navigation items.

```html +preview +collapse
<div class="navbar">
    <nav>
        <ul>
            <li><a class="nav-item" href="#">Home</a></li>
            <li><a class="nav-item" href="#">Services</a></li>
            <li><a class="nav-item" href="#">About</a></li>
            <li><a class="nav-item" href="#">Contact</a></li>
        </ul>
    </nav>
</div>
```


### Alpine Hover

```html +preview +collapse
<li class="relative" x-data="{showChildren:false}"
    x-on:mouseenter="showChildren=true" x-on:mouseleave="showChildren=false">
    <a href="#">
        Parent
        <svg class="icon sm"><use xlink:href="/svg/naykel-ui.svg#caret-down"></use></svg>
    </a>
    <div class="absolute mt-05 flex w-10 z-100" x-show="showChildren" x-transition.duration style="display: none;">
        <ul class="menu bx pxy-0 w-full">
            <li><a href="#">Child</a></li>
            <li><a href="#">Child</a></li>
            <li><a href="#">Child</a></li>
        </ul>
    </div>
</li>
```

### Alpine Click

```html +preview +collapse
<li class="relative" x-data="{showChildren:false}" x-on:click.outside="showChildren=false">
    <a href="#" x-on:click.prevent="showChildren=!showChildren">
        Parent
        <svg class="icon sm"><use xlink:href="/svg/naykel-ui.svg#caret-down"></use></svg>
    </a>
    <div class="absolute mt-05 flex w-10 z-100" x-show="showChildren" x-transition.duration style="display: none;">
        <ul class="menu bx pxy-0 w-full">
            <li><a href="#">Child</a></li>
            <li><a href="#">Child</a></li>
            <li><a href="#">Child</a></li>
        </ul>
    </div>
</li>
```