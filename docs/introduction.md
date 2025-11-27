# JTB – Just the Basics

## Introduction

JTB is a Sass framework focused on sensible defaults without over-styling. It
provides a solid foundation for web projects through thoughtful base styles,
minimal components, and a robust utility system—all designed to be easily
customised or overridden.

The framework emphasises clarity and maintainability through composable classes
that separate structure from styling. Rather than fighting against opinionated
frameworks or drowning in utility classes, JTB gives you just enough to build
quickly while staying out of your way.

## Philosophy

* **Defaults only where it matters** – Base styles provide a functional
  foundation without styling decisions getting in your way.
* **Utilities first** – Core utilities cover the majority of layout and design
  needs.
* **Override-friendly** – Everything is modular, scoped, and written with
  customisation in mind.
* **No unnecessary abstractions** – Maps, mixins, and variables are structured
  to be readable and maintainable.
* **Build-time logic only** – No runtime styling or complex theme engines.

## Structure & Override Priority

JTB is split into four key areas with clear override hierarchy:

1. **Base styles** – Reset and base HTML element styles. Provides functional
   foundation.
2. **Component styles** – Optional, minimal UI patterns (buttons, forms, menus).
   Handle structure and layout, not decoration.
3. **Utility classes** – Granular control over specific properties. Override
   both base and component styles.
4. **Maps & Mixins** – Build-time tools for utility generation and custom
   configurations.

Override order: Base → Components → Utilities (highest priority)

## What makes JTB different?

Unlike Bootstrap which comes with heavy component styling and theme bloat, or
Tailwind which can result in unreadable utility soup, JTB offers a balanced
middle ground that prioritises developer experience and maintainability.

JTB uses context-aware modifiers that adapt to whatever component they're
attached to. Classes like `.primary`, `.xs`, or `.rounded` work universally—no
need for `.btn-primary`, `.input-xs`, or `.card-rounded`. This keeps your CSS
lean and eliminates duplication.

### Predictable Naming

JTB uses `rem` as its base unit, with class numbers mapping directly to `rem`
values:

* `m-1` = 1rem margin
* `p-2` = 2rem padding
* `gap-05` = 0.5rem gap
* `w-1.5` = 1.5rem width

This keeps class names clean and easy to read. Values below 1rem drop the
leading zero (`05` = 0.5rem), while values above 1rem use standard decimal
notation (`1.5` = 1.5rem).

### Consistent Theming

JTB uses a unified theming system that applies consistently across all
components.

Apply `.primary` to any element—button, box, or badge—and it automatically
adapts to that component’s style while keeping a consistent colour scheme.

<div class="grid cols-2">
    <div class="bx primary">
        This is a primary themed box.
    </div>
    <div class="bx teal">
        This is a teal themed box.
    </div>
</div>

```html +code
<div class="bx primary">
    This is a primary themed box.
</div>
<div class="bx teal">
    This is a teal themed box.
</div>
```

<button class="btn primary">Primary Button</button> <button class="btn
teal">Teal Button</button>

```html +code
<button class="btn primary">Primary Button</button>
<button class="btn teal">Teal Button</button>
```

There’s no need for duplicates like `.btn-primary`, `.card-primary`, or
`.alert-primary`. A single `.primary` class handles theming for all components,
keeping your interface consistent and simple.

## Comparing Approaches

Consider this Tailwind button:

```html +code
<button class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-blue-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-700 dark:active:bg-gray-700 dark:active:text-gray-300" type="button">
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

## No Runtime Dependencies

JTB emphasises compile-time generation over runtime complexity:

- **Powerful mixins** for generating custom utilities and responsive variants
- **No JavaScript dependencies** for styling or theming
- **Customisable maps** let you define your own color palettes, spacing scales,
  and breakpoints
- **Modular imports** so you only include what you need

## Getting Started

```scss +code
// Import only what you need
@import 'jtb/base';
@import 'jtb/utilities';
@import 'jtb/components/buttons';

// Or import everything
@import 'jtb';
```

JTB gives you the foundation to build fast, maintainable interfaces without the
overhead of larger frameworks or the verbosity of pure utility approaches.