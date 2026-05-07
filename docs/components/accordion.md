# Accordion

The accordion component shows and hides content sections. It works with
Alpine.js for JS-driven behaviour or as a pure CSS implementation using hidden
inputs.

## Basic Usage (review)

Apply the `.accordion` class to the wrapper and add `data-accordion-toggle` to
the input. This attribute hides the input and uses a CSS sibling selector to
wire up the open/close transitions. Because each checkbox is independent,
multiple accordions can be open at the same time — use the radio method to
restrict this.

```html +demo-folded class="bx example-jtb"
<div class="accordion">
    <input type="checkbox" id="acc-1" data-accordion-toggle>
    <label class="accordion-title" for="acc-1">
        Accordion Title
        <svg class="wh-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </label>
    <div class="accordion-content">
        <p>Accordion content</p>
    </div>
</div>
```

### Group (review)

The radio method limits the group to one open accordion at a time. Use a shared
`name` attribute across all inputs in the group.

```html +demo-folded class="bx example-jtb"
<div class="accordion">
    <input type="radio" id="acc-radio-1" name="acc-radio-group" data-accordion-toggle>
    <label class="accordion-title" for="acc-radio-1">
        Accordion Title #1
        <svg class="wh-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </label>
    <div class="accordion-content">
        Accordion content...
    </div>
</div>
<div class="accordion">
    <input type="radio" id="acc-radio-2" name="acc-radio-group" data-accordion-toggle>
    <label class="accordion-title" for="acc-radio-2">
        Accordion Title #2
        <svg class="wh-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </label>
    <div class="accordion-content">
        Accordion content...
    </div>
</div>
```

## Alpine Accordion (review)

Use Alpine.js for JS-driven behaviour. The `.accordion` class provides all
structural styles; Alpine manages open/closed state. Examples use `x-collapse`,
which requires the [Alpine Collapse plugin](https://alpinejs.dev/plugins/collapse).

### Single (review)

```html +demo-folded class="bx example-jtb"
<div x-data="{ open: false }" class="accordion">
    <button x-on:click="open = !open">
        <span>Single Accordion</span>
        <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </button>
    <div x-show="open" x-collapse class="accordion-content">
        Accordion content...
    </div>
</div>
```

### Multiple Open (review)

Each accordion manages its own state independently.

```html +demo-folded class="bx example-jtb"
<div class="space-y-05">
    <div x-data="{ open: false }" class="accordion">
        <button x-on:click="open = !open">
            <span>Accordion One</span>
            <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="open" x-collapse class="accordion-content">
            Accordion content...
        </div>
    </div>
    <div x-data="{ open: false }" class="accordion">
        <button x-on:click="open = !open">
            <span>Accordion Two</span>
            <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="open" x-collapse class="accordion-content">
            Accordion content...
        </div>
    </div>
</div>
```

### One Open at a Time (review)

Wrap all accordions in a shared `x-data` scope using `activeItem`.

```html +demo-folded class="bx example-jtb"
<div class="space-y-05" x-data="{ activeItem: null }">
    <div class="accordion">
        <button x-on:click="activeItem = activeItem === 1 ? null : 1">
            <span>Accordion One</span>
            <svg class="wh-1" :class="{ 'rotate-180': activeItem === 1 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="activeItem === 1" x-collapse class="accordion-content">
            Accordion content...
        </div>
    </div>
    <div class="accordion">
        <button x-on:click="activeItem = activeItem === 2 ? null : 2">
            <span>Accordion Two</span>
            <svg class="wh-1" :class="{ 'rotate-180': activeItem === 2 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="activeItem === 2" x-collapse class="accordion-content">
            Accordion content...
        </div>
    </div>
</div>
```

## SCSS Variables (review)

| Variable                 | Default                                              | Description                 |
| ------------------------ | ---------------------------------------------------- | --------------------------- |
| `$accordion-bg`          | `white`                                              | Accordion background colour |
| `$accordion-border`      | `$border`                                            | Accordion border            |
| `$accordion-font-size`   | `$font-size`                                         | Trigger font size           |
| `$accordion-font-weight` | `600`                                                | Trigger font weight         |
| `$accordion-padding`     | `1rem`                                               | Header and content padding  |
| `$accordion-title-bg`    | `rgb(245 245 245)`                                   | Trigger background colour   |
| `$accordion-title-color` | `$text-color`                                        | Trigger text colour         |
| `$accordion-hover-bg`    | `color.adjust($accordion-title-bg, $lightness: -5%)` | Trigger hover background    |

See [Variable System](/docs/jtb/variable-system) for override instructions.

## Utility Examples (review)

Build an accordion from utility classes when you need a custom look without the
`.accordion` component styles.

### Single (review)

```html +demo-folded class="bx example-utils"
<div x-data="{ open: false }" class="bx">
    <button x-on:click="open = !open" class="w-full flex items-center justify-between hover:bg-gray-50">
        <span class="fw-semibold">Single Accordion</span>
        <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </button>
    <div x-show="open" x-collapse class="mxy-0 txt-gray-600">
        Accordion content...
    </div>
</div>
```

### Multiple Open (review)

```html +demo-folded class="bx example-utils"
<div class="space-y-05">
    <div x-data="{ open: false }" class="bx">
        <button x-on:click="open = !open" class="w-full flex items-center justify-between hover:bg-gray-50">
            <span class="fw-semibold">Accordion One</span>
            <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="open" x-collapse class="mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
    <div x-data="{ open: false }" class="bx">
        <button x-on:click="open = !open" class="w-full flex items-center justify-between hover:bg-gray-50">
            <span class="fw-semibold">Accordion Two</span>
            <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="open" x-collapse class="mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
</div>
```

### One Open at a Time (review)

```html +demo-folded class="bx example-utils"
<div class="space-y-05" x-data="{ activeItem: null }">
    <div class="bx">
        <button x-on:click="activeItem = activeItem === 1 ? null : 1" class="w-full flex items-center justify-between hover:bg-gray-50">
            <span class="fw-semibold">Accordion One</span>
            <svg class="wh-1" :class="{ 'rotate-180': activeItem === 1 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="activeItem === 1" x-collapse class="mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
    <div class="bx">
        <button x-on:click="activeItem = activeItem === 2 ? null : 2" class="w-full flex items-center justify-between hover:bg-gray-50">
            <span class="fw-semibold">Accordion Two</span>
            <svg class="wh-1" :class="{ 'rotate-180': activeItem === 2 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="activeItem === 2" x-collapse class="mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
</div>
```
