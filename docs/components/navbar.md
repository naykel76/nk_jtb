# Navbar

<p class="lead">Horizontal navigation container with layout for navigation menus. Works with the <a href="/docs/jtb/components/menu">menu component</a> to create navigation bars.</p>

## Basic Usage

Apply the `navbar` class to a `<nav>`. Brand, menu and actions spread across
the bar; below the breakpoint the menu hides. Drag the demo narrower to see it.

<!-- toggle to reopen the menu not built yet -->

- A `menu` inside a navbar lays out as a row instead of a column
- `to-md:hidden` hides the menu below `md`

```html +demo-folded class="resizable-container with-docs-only-overrides example-jtb"
<nav class="navbar">
    <div class="font-bold">MyBrand</div>
    <ul class="menu to-md:hidden">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <button class="btn sm primary">Sign In</button>
</nav>
```

### How It Works

- Children spread out with `space-between`. Two sit at each edge, three
  spread evenly
- A middle item is only centred when the outer two are the same width

## SCSS Variables (review)

| Variable            | Default    | Description        |
| ------------------- | ---------- | ------------------ |
| `$navbar-bg`        | `$primary` | Navbar background  |
| `$navbar-padding-x` | `1rem`     | Horizontal padding |
| `$navbar-padding-y` | `0.75rem`  | Vertical padding   |

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
