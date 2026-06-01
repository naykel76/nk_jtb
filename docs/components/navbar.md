# Navbar (review)

<p class="lead">Horizontal navigation container with layout for navigation menus. Works with the <a href="/docs/jtb/components/menu">menu component</a> to create navigation bars.</p>

## Basic Usage

Apply the `navbar` class to a `<nav>` or wrapping element to create a horizontal navigation bar.

```html +demo-folded class="bx example-jtb"
<nav class="navbar">
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## With Brand

```html +demo-folded class="bx example-jtb"
<nav class="navbar">
    <div class="font-bold">MyBrand</div>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## With Brand and Actions

```html +demo-folded class="bx example-jtb"
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

## With Dropdown

```html +demo-folded class="bx example-jtb"
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

## SCSS Variables

| Variable            | Default    | Controls         |
| ------------------- | ---------- | ---------------- |
| `$navbar-bg`        | `$primary` | Background color |
| `$navbar-padding-x` | `1rem`     | Horizontal padding |
| `$navbar-padding-y` | `0.75em`   | Vertical padding |

See [Variable System](/docs/jtb/variable-system) for override instructions.

## Utility Examples

### Basic

```html +demo-folded class="bx example-utils"
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

```html +demo-folded class="bx example-utils"
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

```html +demo-folded class="bx example-utils"
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

### With Dropdown

```html +demo-folded class="bx example-utils"
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
