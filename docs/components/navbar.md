# Navbar

<p class="lead">Horizontal navigation container with layout for navigation menus. Works with the <a href="/docs/jtb/components/menu">menu component</a> to create navigation bars.</p>

## Basic Usage

Apply the `navbar` class to a `<nav>` or wrapping element to create a horizontal
navigation bar.

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

## How It Works

`.navbar` spaces its direct children apart with `space-between`, so how many
children it has changes the layout.

- Two children sit at each edge
- Three push the middle one to the centre

```html +demo-folded class="bx example-jtb"
<nav class="navbar">
    <div class="bx w-8"></div>
    <div class="bx w-8"></div>
</nav>
```

```html +demo-folded class="bx example-jtb"
<nav class="navbar">
    <div class="bx w-8"></div>
    <div class="bx w-8"></div>
    <div class="bx w-8"></div>
</nav>
```

## Responsive

Hide the menu below `md` with `to-md:hidden`. The utility applies the same way
whether the navbar is built with the component class or with utilities.

```html +demo-folded class="resizable-container with-docs-only-overrides example-jtb"
<nav class="navbar">
    <div class="font-bold">MyBrand</div>
    <ul class="menu to-md:hidden">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## Examples

### With Brand and Actions

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

## SCSS Variables

| Variable            | Default    | Description        |
| ------------------- | ---------- | ------------------ |
| `$navbar-bg`        | `$primary` | Navbar background  |
| `$navbar-padding-x` | `1rem`     | Horizontal padding |
| `$navbar-padding-y` | `0.75em`   | Vertical padding   |

See [Variable System](/docs/jtb/variable-system) for override instructions.

## Utility Examples

### Basic

```html +demo-folded class="bx example-utils"
<nav class="flex items-center justify-between px-1 py-075 bg-primary">
    <ul class="flex gap">
        <li><a href="#" class="txt-white hover:txt-sky-300">Home</a></li>
        <li><a href="#" class="txt-white hover:txt-sky-300">About</a></li>
        <li><a href="#" class="txt-white hover:txt-sky-300">Services</a></li>
        <li><a href="#" class="txt-white hover:txt-sky-300">Contact</a></li>
    </ul>
</nav>
```

### With Brand and Actions

```html +demo-folded class="bx example-utils"
<nav class="flex items-center justify-between px-1 py-075 bg-primary">
    <div class="font-bold txt-white">MyBrand</div>
    <ul class="flex gap">
        <li><a href="#" class="txt-white hover:txt-sky-300">Home</a></li>
        <li><a href="#" class="txt-white hover:txt-sky-300">About</a></li>
        <li><a href="#" class="txt-white hover:txt-sky-300">Contact</a></li>
    </ul>
    <button class="btn sm primary">Sign In</button>
</nav>
```
