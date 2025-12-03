# Navbar

Container with layout for horizontal menus.

- [Overview](#overview)
- [Base Structure](#base-structure)
    - [Alpine Hover](#alpine-hover)
    - [Alpine Click](#alpine-click)

## Overview


## Base Structure

```html +code +preview +collapse class="example-jtb"
<nav class="navbar">
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```html +code +preview +collapse class="example-utils"
<nav class="bg-white bdr bdr-blue">
    <ul class="flex va-c gap pxy">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```html +code +preview +collapse class="example-jtb"
<nav class="navbar">
    <div class="font-bold txt-white">MyBrand</div>
    <ul class="menu">
        <li>
            <a href="#"> <svg class="svg-icon-pink"></svg> Item </a>
        </li>
        <li>
            <a href="#" class="active"> <svg class="svg-icon-pink"></svg> Active </a>
        </li>
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
            <button x-on:click="open = ! open">
                <span> Toggle 1 </span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" x-transition d="m6 15 6-6 6 6" />
                    <path x-show="!open" x-transition d="m6 9 6 6 6-6" />
                </svg>
            </button>
        </li>
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
            <button x-on:click="open = ! open">
                <span> Toggle 2</span>
                <svg :class="{ open: open }" class="icon xs chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </li>

        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
            <button x-on:click="open = !open">
                <span>Products</span>
                <svg :class="{ open: open }" class="icon xs chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
            <div x-show="open" x-transition class="dropdown">
                <ul class="mxy-0">
                    <li><a href="#" class="menu-item">Electronics</a></li>
                    <li><a href="#" class="menu-item">Clothing</a></li>
                    <li><a href="#" class="menu-item">Books</a></li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
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