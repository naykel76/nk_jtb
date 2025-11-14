# Magic Classes

- [Overview](#overview)
- [How they work](#how-they-work)
- [Syntax](#syntax)
    - [Shorthand Behaviour](#shorthand-behaviour)
    - [Examples](#examples)
- [Creating Magic Classes (REVIEW)](#creating-magic-classes-review)


## Overview

Magic classes define multiple responsive values in a single class. They reduce
repetition, improve clarity, and offer a consistent, compressible pattern for
responsive utility values like padding, margin, grid columns, font size, and
more.

Instead of writing:

```css +torchlight-css
lg:py-5 md:py-4 sm:py-3 py-2
```

You can use:

```css +torchlight-css
py-5-4-3-2
```

---

## How they work

Magic classes use a sequence of values to represent styles at different
breakpoints, from largest to smallest screen size. This approach lets you write
one class instead of repeating similar classes for each breakpoint.

## Syntax

```css +torchlight-css
{identifier}-{lg}-{md}-{sm}-{base}
```

Where:

* `{identifier}` is the utility type (e.g. `py`, `fs`, `cols`)
* Each number corresponds to a breakpoint:

  * `lg` - large screens
  * `md` - medium screens
  * `sm` - small screens
  * `base` - default (mobile-first)

### Shorthand Behaviour

* `py-2` - sets padding-y to 2 at all breakpoints
* `py-4-2` - 2 for base, 4 for md and up
* `py-5-4-3-2` - 2 for base, 3 for sm, 4 for md, 5 for lg

### Examples

```css +torchlight-css
py-5-4-3-2
→ lg:py-5 md:py-4 sm:py-3 py-2

cols-3-2-1
→ md:cols-3 sm:cols-2 cols-1

fs-4-3-2-1
→ lg:fs-4 md:fs-3 sm:fs-2 fs-1
```

---

## Creating Magic Classes (REVIEW)

Use the `build-magic-classes` mixin to create magic classes. 

```scss +torchlight-scss
@@include build-magic-classes(
    $property,      // The CSS property to apply (e.g., padding, margin, font-size)
    $values-list,   // A list of values for different breakpoints
    $identifier,    // The identifier for the magic class (e.g., py, fs, cols) 
    $unit: 'rem', 
    $position-or-axis: '', 
    $is-parent: false
)
```

```scss +torchlight-scss
$py: ((4, 3, 2, 1), (3, 2, 1)) !default;
@@include build-magic-classes(padding, $py, "py", $position-or-axis: y, $is-parent: true);
```