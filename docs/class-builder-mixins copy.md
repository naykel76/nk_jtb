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
    - [Responsive Classes](#responsive-classes)
    - [State Classes](#state-classes)

## Introduction

This document outlines the tools and mixins available for generating both utility and
custom CSS classes. Whether you're creating single-use utility classes or more complex,
multi-property classes, these tools provide flexible solutions to streamline your
workflow.

## Maker and Builder Mixins

This system provides two types of mixins: **Makers** and **Builders**.

### Makers

**Makers** are utility mixins designed to create **a single property or class at a time**,
based on specific properties, values, and positions.

They are ideal for generating individual utility classes, responsive variants, or
position-based classes.

### Builders

**Builders** are mixins that generate **multiple classes** automatically, using a map of
properties, values, and options.  

They are best suited for efficiently creating a large set of related utility classes.

### How They Work Together

- **Builders** rely on **Makers** internally to generate individual classes.
- **Makers** can also be used independently when only a single class is required.

## `build-property-classes`

Generates **utility classes for individual CSS properties**. Use this mixin when you want
to create a separate class for each property and value, allowing fine-grained control over
your styles. Each class targets a single property with a specific value, making it easy to
apply or override styles as needed.

```scss +torchlight-scss
@@include build-property-classes($properties-map, $responsive: false, $withState: false)
```

### Parameters

- **`$properties-map`** - A map where each key is a CSS property and each value is a
  configuration map (see [Property Map](#property-map) structure below)
- **`$responsive`** - Boolean to automatically generate responsive classes with default
  breakpoints
- **`$withState`** - Boolean to automatically generate state classes (hover, focus, etc.)
  with default states


## `build-composite-classes`

Generates **utility classes that combine multiple CSS properties** into a single class.
Use this mixin to define classes that apply several related properties at once, creating
reusable style units for common patterns (such as flexbox layouts or grid configurations).
Each class is built from a group of properties specified in the configuration map.

```scss +torchlight-scss
@@include build-composite-classes($properties-map, $responsive: false, $withState: false)
```

### Parameters

- **`$properties-map`** - A map where each key represents a **class name** and the value
  is a configuration map (see [Composite Map](#composite-map) structure below)
- **`$responsive`** - Boolean to automatically generate responsive classes with default
  breakpoints
- **`$withState`** - Boolean to automatically generate state classes (hover, focus, etc.)
  with default states

## Data Structures

### Property Map

A **Property Map** defines how utility classes are generated from CSS properties. Each
entry includes the CSS property name, a list of values, and optional settings such as a
class prefix, breakpoints, or positional variants.

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

A **Composite Map** defines classes that combine multiple CSS properties into a single
utility class.

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

1. **Default Prefix** - When no prefix is specified, uses property name + dash:
```scss +torchlight-scss
$properties-map: (
    color: (
        values: ( red, ( primary: blue ) )
    )
);
// Generates: .color-red, .color-primary
```

2. **Custom Prefix** - Explicitly set a custom prefix:
```scss +torchlight-scss
$properties-map: (
    color: (
        prefix: 'txt-',
        values: ( red, ( primary: blue ) )
    )
);
// Generates: .txt-red, .txt-primary
```

3. **No Prefix** - Set `omit-prefix: true` to remove all prefixes:
```scss +torchlight-scss
$properties-map: (
    color: (
        omit-prefix: true,
        values: ( red, ( primary: blue ) )
    )
);
// Generates: .red, .primary
```

### Responsive Classes

When `$responsive: true` is passed to either mixin, responsive variants are
automatically generated using breakpoints. These create classes with breakpoint
prefixes that only apply at specific screen sizes.

**Custom Breakpoints:** You can override breakpoints for a specific property or
class, by including a `breakpoints` key in the configuration map.

> **NOTE**: This overrides the global `$responsive` parameter passed to the
> mixin so it will always generate responsive classes for that property or class
> regardless of the mixin parameter value.

### State Classes

When `$withState: true` is passed to either mixin, state variants are
automatically generated for pseudo-classes like `:hover`, `:focus`, etc.

**Custom States** You

> **NOTE**: This overrides the global `$withStates` parameter passed to the
> mixin so it will always generate pseudo classes for that property or class
> regardless of the mixin parameter value.


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
