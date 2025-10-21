# Class Builder Mixins

A collection of Sass mixins for generating CSS utility classes from
configuration maps. These mixins provide flexible, responsive utility class
generation with smart value handling and position-based properties.


- [Introduction](#introduction)
- [Maker and Builder Mixins](#maker-and-builder-mixins)
    - [Makers](#makers)
    - [Builders](#builders)
    - [How They Work Together](#how-they-work-together)
- [`build-property-classes`](#build-property-classes)
    - [Parameters](#parameters)
- [`build-composite-classes`](#build-composite-classes)
    - [Parameters](#parameters-1)
- [Data Structures](#data-structures)
    - [Property Map](#property-map)
    - [Composite Map](#composite-map)
    - [Prefix Handling](#prefix-handling)
    - [Variants](#variants)
        - [Responsive Variants](#responsive-variants)
        - [State Variants](#state-variants)

## Introduction

This document outlines the mixins available for generating both utility and
custom CSS classes. Whether you need single-use utilities or multi-property
composites, these tools provide a consistent way to build classes quickly and
maintainably.

## Maker and Builder Mixins

This system provides two types of mixins: **Makers** and **Builders**.

### Makers

Utility mixins that generate **a single class at a time**, based on specific
properties, values, and positions.  Best for responsive variants or individual
property utilities.

### Builders

Mixins that generate **multiple classes at once** using a configuration map.
Best for creating sets of related utilities efficiently.

### How They Work Together

* **Builders** call **Makers** internally to generate individual classes.
* **Makers** can also be used independently when only a single class is needed.

## `build-property-classes`

Generates **utility classes for individual CSS properties**. Each class targets
one property with one value, allowing precise control and easy overrides.

```scss +torchlight-scss
@@include build-property-classes($properties-map, $responsive: false, $withState: false)
```

### Parameters

* **`$properties-map`** – Map of CSS properties and configuration (see [Property
  Map](#property-map)).
* **`$responsive`** – Boolean to generate responsive classes with default
  breakpoints.
* **`$withState`** – Boolean to generate state classes (`hover`, `focus`, etc.)
  with default states.

## `build-composite-classes`

Generates **classes that combine multiple CSS properties** into a single
utility. Useful for reusable style units (e.g. flexbox or grid layouts).

```scss +torchlight-scss
@@include build-composite-classes($composite-map, $responsive: false, $withState: false)
```

### Parameters

* **`$composite-map`** – Map where each key is a class name and each value
  defines properties (see [Composite Map](#composite-map)).
* **`$responsive`** – Boolean to generate responsive classes with default
  breakpoints.
* **`$withState`** – Boolean to generate state classes with default states.


## Data Structures

### Property Map

Defines how utilities are generated from a property. Supports values, prefixes,
units, breakpoints, states, and positional variants.

```scss +torchlight-scss
$properties-map: (
    property-name: (
        prefix: 'prefix-',           // Optional: Custom prefix for class names
        omit-prefix: false,          // Optional: Remove prefix entirely  
        values: (                    // Required: Map or list of values
            'value',                 // Simple value
            (key: 'value')           // Key-value pair: key becomes class name
        ),
        unit: 'px',                  // Optional: Unit to  append to values (e.g., 'px', 'rem')
        positions: $position-map,    // Optional: For directional properties (margin, padding)
        breakpoints: ('sm', 'md'),   // Optional: Custom breakpoints (override defaults)
        states: ('hover', 'focus')   // Optional: State variants (override defaults)
    )
);
```

### Composite Map

Defines classes that apply multiple properties at once.

```scss +torchlight-scss
$composite-map: (
    class-name: (
        props: (                    // Required: Map of CSS properties
            display: flex,
            flex-direction: column
        ),
        breakpoints: ('sm', 'md'),   // Optional: Custom breakpoints (override defaults)
        states: ('hover', 'focus')   // Optional: State variants (override defaults)
    )
);
```

### Prefix Handling

The system provides flexible prefix handling for class names:

1. **Default prefix** – Uses property name:
```scss +torchlight-scss
$properties-map: (
    color: (
        values: ( red, ( primary: blue ) )
    )
);
// Generates: .color-red, .color-primary
```

2. **Custom prefix** – Set explicitly:
```scss +torchlight-scss
$properties-map: (
    color: (
        prefix: 'txt-',
        values: ( red, ( primary: blue ) )
    )
);
// Generates: .txt-red, .txt-primary
```

3. **No prefix** – Set `omit-prefix: true`:
```scss +torchlight-scss
$properties-map: (
    color: (
        omit-prefix: true,
        values: ( red, ( primary: blue ) )
    )
);
// Generates: .red, .primary
```

### Variants

Both mixins support generating additional variants for responsiveness and
state-based styling. Variants can be enabled globally with mixin parameters or
overridden per property/class in configuration maps.

#### Responsive Variants

* Enabled with `$responsive: true`.
* Creates breakpoint-prefixed classes that apply at specific screen sizes.
* Custom breakpoints can be set with a `breakpoints` key in a property or
  composite map.
* A `breakpoints` key always **overrides** the mixin parameter.

#### State Variants

* Enabled with `$withState: true`.
* Creates state-prefixed classes for pseudo-classes like `:hover`, `:focus`,
  etc.
* Custom states can be set with a `states` key in a property or composite map.
* A `states` key always **overrides** the mixin parameter.


<!-- 
### Positions Map

A **Positions Map** defines directional variants for properties like margin, padding,
border, etc. Each key represents a suffix that will be added to the class name, and the
value is a list of CSS property sides to apply.

```scss
$positions-map: (
    '': (top, right, bottom, left),  // No suffix: applies to all sides
    't': (top),                      // -t suffix: applies to top only
    'r': (right),                    // -r suffix: applies to right only  
    'b': (bottom),                   // -b suffix: applies to bottom only
    'l': (left),                     // -l suffix: applies to left only
    'x': (left, right),              // -x suffix: applies to horizontal sides
    'y': (top, bottom)               // -y suffix: applies to vertical sides
);
```

## Advanced Features



### Position-Based Classes

Position-based classes are automatically generated when a `positions` map is provided in
the property configuration. This is commonly used for spacing utilities (margin, padding)
and border utilities.

**Example: Margin Classes**
```scss
$margin-positions: (
    '': (top, right, bottom, left),  // m-4: margin on all sides
    't': (top),                      // mt-4: margin-top only
    'x': (left, right),              // mx-4: margin-left and margin-right
    'y': (top, bottom)               // my-4: margin-top and margin-bottom
);
```

This generates classes like:
```css
.m-4 { margin: 1rem; }
.mt-4 { margin-top: 1rem; }
.mx-4 { margin-left: 1rem; margin-right: 1rem; }
.my-4 { margin-top: 1rem; margin-bottom: 1rem; }
``` -->
