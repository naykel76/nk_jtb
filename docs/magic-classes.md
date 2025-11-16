# Magic Classes

- [Overview](#overview)
- [How they work](#how-they-work)
- [Syntax](#syntax)
    - [Shorthand Behaviour](#shorthand-behaviour)
    - [Examples](#examples)
- [Creating Magic Classes](#creating-magic-classes)
    - [Mixin Signature](#mixin-signature)
    - [Parameters](#parameters)
    - [Examples](#examples-1)


## Overview

Magic classes define multiple responsive values in a single class. They reduce
repetition, improve clarity, and offer a consistent, compressible pattern for
responsive utility values like padding, margin, grid columns, font size, and
more.

Instead of writing:

```css +code
lg:py-5 md:py-4 sm:py-3 py-2
```

You can use:

```css +code
py-5-4-3-2
```

---

## How they work

Magic classes use a sequence of values to represent styles at different
breakpoints, from largest to smallest screen size. This approach lets you write
one class instead of repeating similar classes for each breakpoint.

## Syntax

```css +code
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

```css +code
py-5-4-3-2
→ lg:py-5 md:py-4 sm:py-3 py-2

cols-3-2-1
→ md:cols-3 sm:cols-2 cols-1

fs-4-3-2-1
→ lg:fs-4 md:fs-3 sm:fs-2 fs-1
```

---

## Creating Magic Classes

Use the `build-magic-classes` mixin to generate magic classes for your utilities.

### Mixin Signature

```scss +code
@include build-magic-classes(
    $property,           // CSS property to apply (e.g., padding, margin, gap)
    $values-list,        // List of value sequences for different patterns
    $identifier,         // Class identifier (e.g., py, fs, cols)
    $unit: 'rem',        // Unit to append to values
    $position-or-axis: '',  // Optional axis (x, y) for directional properties
    $is-parent: false    // Whether to apply to child elements
)
```

### Parameters

- **`$property`** - The CSS property the magic class will control
- **`$values-list`** - A list of value sequences. Each sequence creates one magic class pattern
- **`$identifier`** - The prefix for the generated class names
- **`$unit`** - Unit appended to values (default: `'rem'`)
- **`$position-or-axis`** - Use `'x'` or `'y'` for directional properties like padding/margin
- **`$is-parent`** - When `true`, generates parent classes that apply to children (e.g., `c-gap-*`)

### Examples

**Padding Y-axis:**

```scss +code
$padding-magic-y: (
    (4, 3, 2, 1),    // Generates: py-1-2-3-4
    (3, 2, 1),       // Generates: py-1-2-3
    (2, 1)           // Generates: py-1-2
);

@include build-magic-classes('padding', $padding-magic-y, 'py', $position-or-axis: y);
```

**Grid Gap:**

```scss +code
$magic-gap-patterns: (
    (3, 2, 1),
    (2, 1)
);

@include build-magic-classes('gap', $magic-gap-patterns, 'gap');
```

**Result:**

```css +code
/* py-1-2-3-4 outputs: */
.py-1-2-3-4 { padding-block: 1rem; }
@media (min-width: 576px) { .py-1-2-3-4 { padding-block: 2rem; } }
@media (min-width: 768px) { .py-1-2-3-4 { padding-block: 3rem; } }
@media (min-width: 992px) { .py-1-2-3-4 { padding-block: 4rem; } }
```