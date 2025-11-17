<div class="toc" data-toc>

- [Utility Class Builds](#utility-class-builds)
    - [Single Accordion](#single-accordion)
    - [Multiple Open Accordion](#multiple-open-accordion)
    - [One Open at a Time Accordion](#one-open-at-a-time-accordion)
- [JTB Accordion Class](#jtb-accordion-class)
    - [Single Accordion](#single-accordion-1)
- [CSS Accordion](#css-accordion)
    - [Standalone Accordion (Checkbox Method)](#standalone-accordion-checkbox-method)
    - [Accordion Group (Radio Button Method)](#accordion-group-radio-button-method)
- [Accordion Structure](#accordion-structure)

</div>

# Alpine Accordion

- **Single** Each accordion operates independently with its own state.
- **Multiple Open** Multiple accordions can be open at the same time.
- **One Open at a Time** Only one accordion can be open at a time; opening one
  closes the others.


## Utility Class Builds

### Single Accordion

```html +code-blade +collapse +preview
<div x-data="{ open: false }" class="bg-white rounded-lg shadow-sm bdr bdr-gray-200">
    <button x-on:click="open = !open" class="w-full px-1.5 py-1 flex items-center justify-between hover:bg-gray-50">
        <span class="font-semibold txt-gray-900">Single Accordion</span>
        <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </button>
    <div x-show="open" x-collapse class="px-1.5 py-1 mxy-0 txt-gray-600">
        Accordion content...
    </div>
</div>
```

### Multiple Open Accordion
```html +code-blade +collapse +preview
<div class="space-y-05">
    <div x-data="{ open: false }" class="bg-white rounded-lg shadow-sm bdr bdr-gray-200">
        <button x-on:click="open = !open" class="w-full px-1.5 py-1 flex items-center justify-between hover:bg-gray-50">
            <span class="font-semibold txt-gray-900">Accordion One</span>
            <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="open" x-collapse class="px-1.5 py-1 mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
    <div x-data="{ open: false }" class="bg-white rounded-lg shadow-sm bdr bdr-gray-200">
        <button x-on:click="open = !open" class="w-full px-1.5 py-1 flex items-center justify-between hover:bg-gray-50">
            <span class="font-semibold txt-gray-900">Accordion Two</span>
            <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="open" x-collapse class="px-1.5 py-1 mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
</div>
```

### One Open at a Time Accordion

```html +code-blade +collapse +preview
<div class="space-y-05" x-data="{ activeItem: null }">
    <div class="bg-white rounded-lg shadow-sm bdr bdr-gray-200">
        <button x-on:click="activeItem = activeItem === 1 ? null : 1"
            class="w-full px-1.5 py-1 flex items-center justify-between hover:bg-gray-50">
            <span class="font-semibold txt-gray-900">Accordion One</span>
            <svg class="wh-1" :class="{ 'rotate-180': activeItem === 1 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="activeItem === 1" x-collapse class="px-1.5 py-1 mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
    <div class="bg-white rounded-lg shadow-sm bdr bdr-gray-200">
        <button x-on:click="activeItem = activeItem === 2 ? null : 2"
            class="w-full px-1.5 py-1 flex items-center justify-between hover:bg-gray-50">
            <span class="font-semibold txt-gray-900">Accordion Two</span>
            <svg class="wh-1" :class="{ 'rotate-180': activeItem === 2 }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div x-show="activeItem === 2" x-collapse class="px-1.5 py-1 mxy-0 txt-gray-600">
            Accordion content...
        </div>
    </div>
</div>
```

## JTB Accordion Class

### Single Accordion

```html +code-blade +collapse +preview
<div x-data="{ open: false }" class="accordion">
    <button x-on:click="open = !open" >
        <span>Single Accordion</span>
        <svg class="wh-1" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </button>
    <div x-show="open" x-collapse class="px-1.5 py-1 mxy-0 txt-gray-600">
        Accordion content...
    </div>
</div>
```
## CSS Accordion

### Standalone Accordion (Checkbox Method)

The checkbox method uses hidden checkbox inputs and labels for each tab. Selecting a tab
checks the corresponding checkbox, allowing multiple tabs to be open simultaneously.

The `accordion` class provides the basic styles and functionality. Additional styling can
be applied using utility classes.

use `data-accordion-toggle` attribute on the checkbox input to enable accordion behavior.

```html +code +collapse +preview
<div class="accordion">
    <input type="checkbox" id="abc" data-accordion-toggle>
    <label class="accordion-title" for="abc">
        Standalone Accordion Title (CSS Checkbox)
        <svg class="wh-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </label>
    <div class="accordion-content">
        <p>Accordion content</p>
    </div>
</div>
```

### Accordion Group (Radio Button Method)

The radio button method uses hidden radio inputs and labels for each tab.
Selecting a tab checks the corresponding radio button, allowing only one tab to
be open at a time.

```html +code +collapse +preview
<div class="accordion">
    <input type="radio" id="accordion-1" name="accordion-radio-group" data-accordion-toggle>
    <label class="accordion-title" for="accordion-1">
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
    <input type="radio" id="accordion-2" name="accordion-radio-group" data-accordion-toggle>
    <label class="accordion-title" for="accordion-2">
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

## Accordion Structure

```html +code +collapse +preview
<div class="bdr-2 bdr-pink rounded-05 pxy-05 bg-white">
    <!-- Header -->
    <div class="flex justify-between bdr bdr-gray-300 pxy-05 rounded-025 bg-stripes-blue">
        <span class="w-10 h-1.5 bdr-2 bdr-blue bg-stripes-blue"></span>
        <svg class="wh-1.5 bdr-2 bdr-blue bg-stripes-blue"></svg>
    </div>
    <!-- Content -->
    <div class="mt-05 bdr-2 bdr-dashed bdr-gray-400 pxy-05 rounded-025">
        <div class="w-full h-4 bg-stripes-gray"></div>
    </div>
</div>

<div class="bx mt">
    <div class="space-y-05 txt-sm">
        <div class="flex items-center gap-05">
            <div class="wh-1 bdr-2 bdr-pink"></div>
            <span>Pink = Accordion wrapper (x-data)</span>
        </div>
        <div class="flex items-center gap-05">
            <div class="wh-1 bg-stripes-blue"></div>
            <span>Blue stripes = Button (clickable)</span>
        </div>
        <div class="flex items-center gap-05">
            <div class="wh-1 bdr-2 bdr-blue"></div>
            <span>Blue border = Button label and icon</span>
        </div>
        <div class="flex items-center gap-05">
            <div class="wh-1 bdr bdr-dashed bdr-gray-400 bg-stripes-gray"></div>
            <span>Gray = Content area (collapsed state)</span>
        </div>
    </div>
</div>
```