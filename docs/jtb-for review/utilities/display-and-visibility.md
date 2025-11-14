# JTB Display and Visibility

<p class="lead">Utilities for controlling the display type and visibility of elements.</p>

- [Introduction](#introduction)
- [Targeting Specific Screen Sizes with `on-{device}:`](#targeting-specific-screen-sizes-with-on-device)
    - [Hide 'on' specific screen sizes `on-{device}:hidden`](#hide-on-specific-screen-sizes-on-devicehidden)
    - [Display 'on' specific screen sizes `on-{device}:<display>`](#display-on-specific-screen-sizes-on-devicedisplay)
- [Screen Readers](#screen-readers)

## Introduction

JTB provides utilities to control how elements are displayed and their
visibility across different screen sizes. Display utilities control the CSS
`display` property, while visibility utilities control whether elements are
visible or hidden.

Display and visibility utilities include extra responsive classes covered in
[JTB Responsive System](./responsive-design.md). For visibility this is a
quality of life thing to eliminate the need for utility soup.
## Targeting Specific Screen Sizes with `on-{device}:`

### Hide 'on' specific screen sizes `on-{device}:hidden`

The pink box will be hidden at your current screen size. This is achieved by
applying the appropriate `on-{device}:hidden` class for that breakpoint.

<div class="grid cols-5 tac my">
    <div>
        <div class="py px-025 pink on-sm:hidden"><code class="txt-sm txt-white">on-sm:hidden</code></div>
    </div>
    <div>
        <div class="py px-025 pink on-md:hidden"><code class="txt-sm txt-white">on-md:hidden</code></div>
    </div>
    <div>
        <div class="py px-025 pink on-lg:hidden"><code class="txt-sm txt-white">on-lg:hidden</code></div>
    </div>
    <div>
        <div class="py px-025 pink on-xl:hidden"><code class="txt-sm txt-white">on-xl:hidden</code></div>
    </div>
    <div>
        <div class="py px-025 pink on-xxl:hidden"><code class="txt-sm txt-white">on-xxl:hidden</code></div>
    </div>
</div>

### Display 'on' specific screen sizes `on-{device}:<display>`

The blue box will be displayed at your current screen size. This is achieved by
applying the appropriate `on-{device}:block` class for that breakpoint. Note
that the element needs to be hidden by default using the `hidden` class.

<div class="grid cols-5 tac my">
    <div>
        <div class="py px-025 blue hidden on-sm:block"><code class="txt-sm txt-white">on-sm:block</code></div>
    </div>
    <div>
        <div class="py px-025 blue hidden on-md:block"><code class="txt-sm txt-white">on-md:block</code></div>
    </div>
    <div>
        <div class="py px-025 blue hidden on-lg:block"><code class="txt-sm txt-white">on-lg:block</code></div>
    </div>
    <div>
        <div class="py px-025 blue hidden on-xl:block"><code class="txt-sm txt-white">on-xl:block</code></div>
    </div>
    <div>
        <div class="py px-025 blue hidden on-xxl:block"><code class="txt-sm txt-white">on-xxl:block</code></div>
    </div>
</div>

## Screen Readers

Use `sr-only` to hide an element visually without hiding it from screen readers:

This class is commonly used to:
- Provide additional context for screen readers
- Create accessible form labels for custom styled inputs
- Add skip navigation links for keyboard users
- Include descriptive text that enhances accessibility without cluttering the
  visual design
  
Example Usage: This class could be sued to move the checkbox offscreen to create
a custom toggle switch or file selector.