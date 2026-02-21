# Navbar

<p class="lead">Horizontal navigation container that provides layout for navigation menus. Works with the <a href="menu.md">menu component</a> to create responsive navigation bars.</p>

## Using Component Classes

### Basic Navbar

- Make sure the `navbar` class is on the parent element. Why? The `navbar` class
  sets the background color, padding, and flex layout for the entire navigation
  bar. The `menu` class is just for the list of links.

<!-- i am just putting a fex example to work out what i want, then some will be removed -->
```html +preview
<nav class="navbar">
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```html +preview
<div class="navbar">
    <div class="container-sm">
        <nav>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
</div>
```

### With Brand

```html +demo-folded class="example-jtb"
<nav class="navbar">
    <div class="font-bold">MyBrand</div>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### With Brand and Actions

```html +demo-folded class="example-jtb"
<nav class="navbar">
    <div class="font-bold">MyBrand</div>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <button class="btn sm primary">Sign In</button>
</nav>
```

### With Dropdown Menu

```html +demo-folded class="example-jtb"
<nav class="navbar">
    <div class="font-bold">MyBrand</div>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false">
            <button x-on:click="open = !open">
                <span>Products</span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" x-transition d="m6 15 6-6 6 6" />
                    <path x-show="!open" x-transition d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div x-show="open" x-transition class="dropdown">
                <ul class="menu">
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Books</a></li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

## Using Utility Classes

### Basic Navbar

```html +demo-folded class="example-utils"
<nav class="flex items-center justify-between pxy">
    <ul class="flex gap-05">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### With Brand

```html +demo-folded class="example-utils"
<nav class="flex items-center justify-between pxy">
    <div class="font-bold">MyBrand</div>
    <ul class="flex gap-05">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### With Brand and Actions

```html +demo-folded class="example-utils"
<nav class="flex items-center justify-between pxy">
    <div class="font-bold">MyBrand</div>
    <ul class="flex gap-05">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <button class="btn sm primary">Sign In</button>
</nav>
```

### With Dropdown Menu

```html +demo-folded class="example-utils"
<nav class="flex items-center justify-between pxy">
    <div class="font-bold">MyBrand</div>
    <ul class="flex gap-05">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li class="relative" x-data="{ open: false }" x-on:click.outside="open = false">
            <button x-on:click="open = !open" class="flex items-center gap-025">
                <span>Products</span>
                <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path x-show="open" x-transition d="m6 15 6-6 6 6" />
                    <path x-show="!open" x-transition d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div x-show="open" x-transition class="dropdown">
                <ul class="flex flex-col gap-0">
                    <li><a href="#" class="block px-075 py-05 hover:bg-gray-100">Electronics</a></li>
                    <li><a href="#" class="block px-075 py-05 hover:bg-gray-100">Clothing</a></li>
                    <li><a href="#" class="block px-075 py-05 hover:bg-gray-100">Books</a></li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```
