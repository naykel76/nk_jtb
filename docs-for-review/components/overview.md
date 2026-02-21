# Navigation Overview

Navigation in JTB follows semantic HTML structure with context-aware styling
that adapts automatically based on where and how it's used.

## Basic Structure

All navigation patterns start with this semantic foundation:

```html +code
<nav>
    <ul>
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```

This structure works for all navigation patterns including sidebars, menus,
navbars, and more.

## Context-Aware Navigation

Context-aware styling is a fundamental concept in JTB. Components automatically
adapt their behavior based on where they're placed and what other classes are
used with them.

The `.menu` class makes navigation context-aware. Apply it to a `<ul>` and it
adapts automatically—vertical in a sidebar, horizontal in a navbar, without
changing the markup.

Take a look at these two examples using the same menu structure:

```html +demo-folded class="bx my"
<nav>
    <ul class="menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Settings</a></li>
    </ul>
</nav>
```

Now add `.navbar` to the `<nav>` element:

```html +demo-folded class="bx my"
<nav class="navbar">
    <ul class="menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Settings</a></li>
    </ul>
</nav>
```

The `.menu` class detects when it's inside a `.navbar` container and adapts from
vertical to horizontal automatically.

## Styling Approach

JTB navigation can be built with the `.menu` component class or utility
classes—the choice is yours.

### Component Class Approach

```html +demo-folded class="example-jtb w-20"
<nav class="bx">
    <ul class="menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
    </ul>
</nav>
```

Minimal classes. Automatic styling for links, buttons, icons, and states.

### Utility Class Approach

```html +demo-folded class="example-utils w-20"
<nav class="bx">
    <ul class="flex-col txt-sm">
        <li>
            <a href="#" class="flex items-center px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                Dashboard
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center px-075 py-05 rounded-lg txt-gray-600 hover:bg-gray-100">
                Projects
            </a>
        </li>
    </ul>
</nav>
```

Full control over every detail. Explicit styling on each element.

Both create the same result. Choose based on your needs.

## Next Steps

- **[Menu](/jtb/navigation/menu)** - Vertical navigation lists for sidebars and dropdowns
- **[Navbar](/jtb/navigation/navbar)** - Horizontal navigation bars for top-level navigation
