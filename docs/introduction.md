# JTB – Just the Basics

JTB is a Sass framework focused on sensible defaults without over-styling. It
provides a solid foundation through base styles, minimal components, and a
utility system—all designed to be easily overridden.

## Philosophy

* **Defaults only where it matters** – Base styles provide a functional
  foundation.
* **Utilities override base and components** – Granular control that beats
  component styles.
* **Override-friendly** – Everything is modular and scoped.
* **No unnecessary abstractions** – Maps, mixins, and variables are readable.
* **Build-time logic only** – No runtime styling or complex theme engines.

## Structure & Override Priority

JTB is split into three areas with clear override hierarchy:

1. **Base** – Reset and base HTML element styles.
2. **Components** – Minimal UI patterns (buttons, forms, menus). Structure and
   interaction, not decoration.
3. **Utilities** – Granular control. Override both base and components.

**Override order:** Base → Components → Utilities (highest priority)

**Configuration:**

- **Maps & Variables** – Colors, spacing, breakpoints, component settings.
- **Mixins** – Build-time generators for utility classes from maps.

## Context-Aware Modifiers

Classes like `.primary`, `.xs`, or `.rounded` work on any component. No need for
`.btn-primary`, `.input-xs`, or `.card-rounded`.

These modifiers automatically adapt their styling to the component they're
applied to.

### Predictable Naming

Values and modifiers in JTB are meaningful—they’re not arbitrary. You can
usually guess the class you need without checking a reference. For example:

* `m-1` = 1rem (not some random number)
* `mt-2` = top margin 2rem (`t` = top, intuitive)
* `gap-05` = 0.5rem
* `w-1.5` = 1.5rem

Directional letters like `t`, `b`, `l`, `r`, `x`, `y` indicate sides or axes.
You don’t need to think about internal logical properties—they’re handled under
the hood.

### Theming

Theming is SCSS-driven at build time. No runtime theming engine.

```html +preview class="bx"
<div class="bx primary">
    This is a primary themed box.
</div>
<div class="bx teal">
    This is a teal themed box.
</div>
```

```html +preview class="bx"
<button class="btn primary">Primary Button</button>
<button class="btn teal">Teal Button</button>
```

A single `.primary` class handles theming for all components.

## Comparing Approaches

Consider this Tailwind button:

```html +code
<button class="relative inline-flex items-center
    px-4 py-2
    text-sm font-medium leading-5
    border border-gray-300 rounded-md
    text-gray-700 bg-white
    hover:text-gray-500
    focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300
    active:bg-gray-100 active:text-gray-700
    dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300
    dark:focus:border-blue-700
    dark:active:bg-gray-700 dark:active:text-gray-300
    transition ease-in-out duration-150" 
type="button"> 
    Button 
</button>
```

These classes break down into:

- **Layout** - `relative`, `inline-flex`, `items-center`
- **Spacing** - `px-4`, `py-2`
- **Typography** - `text-sm`, `font-medium`, `leading-5`
- **Border** - `border`, `border-gray-300`, `rounded-md`
- **Colors (Light mode)** - `text-gray-700`, `bg-white`
- **States (Light mode)** - `hover:text-gray-500`, `focus:outline-none`,
  `focus:ring`, `focus:ring-blue-300`, `focus:border-blue-300`,
  `active:bg-gray-100`, `active:text-gray-700`
- **Colors (Dark mode)** - `dark:bg-gray-800`, `dark:border-gray-600`,
  `dark:text-gray-300`
- **States (Dark mode)** - `dark:focus:border-blue-700`,
  `dark:active:bg-gray-700`, `dark:active:text-gray-300`
- **Transitions** - `transition`, `ease-in-out`, `duration-150`

**The JTB approach:**

```html +code
<!-- Basic button with theme -->
<button class="btn primary">Button</button>

<!-- Customised with utilities when needed -->
<button class="btn primary rounded-full px-2">Custom Button</button>
```

The `.btn` class handles structure, padding, transitions, and states. The
`.primary` theme handles colors for all states and dark mode. Add utilities only
when you need to override the defaults.

See [Installation](installation.md) to get started.
