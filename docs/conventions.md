
# Naming Conventions

- [Overview](#overview)
- [Naming Conventions](#naming-conventions-1)
    - [Shorthand Utilities](#shorthand-utilities)
    - [Prefix](#prefix)
    - [variant](#variant)
    - [value](#value)

## Overview

This document defines the naming conventions used throughout the JTB framework.
It ensures consistent naming for variables, maps, mixins, functions, and
generated class names.

## Naming Conventions

```scss +torchlight-scss
{breakpoint}:{prefix/property}-{value}
{breakpoint}:{prefix/property}-{variant}
```

Examples:

```scss +torchlight-scss
md:gap-lg
md:gap-3
```

In this system, **`prefix` and `property` are interchangeable** — both refer to the
utility identifier used in the class name, which typically maps to a CSS property or
shorthand group.

This is the same for **`value` and `variant`** — both refer to the specific value or
variant applied by the utility.

---

### Shorthand Utilities

Some classes omit the prefix when the value clearly implies the property:

```scss +torchlight-scss
{breakpoint}:{value}
```

Example:

```scss +torchlight-scss
md:flex // shorthand for md:display-flex
```

In this case, `flex` serves as both the value and the implied property. If written explicitly, it would be:

```scss +torchlight-scss
md:display-flex
```



---

### Prefix 

An **prefix** is the main label in a class name that indicates the property
or utility being controlled (e.g., `gap-`, `bdr-`, `txt-`). It acts as a prefix,
making class names clear and consistent.

```scss +torchlight-scss
gap-md
```

Here, `gap-` is the **prefix** `md` is the **variant** (or could be a
value)..

---

### variant


A **variant** is a string used as a suffix in a class name that represents a specific
value from a configuration map. It can be a semantic keyword (like `sm` or `lg`) or a
number (like `05` or `1`). Variants help distinguish between different utility classes by
linking class names to their corresponding values, making the code easier to read and
maintain.

Examples:

Semantic variants:

```scss +torchlight-scss
$variants: ( sm: 0.75, base: 1.25, lg: 1.5 );
```

The variant `sm` maps to `0.75rem`, so a class like `gap-sm` applies a gap of 0.75rem.

Numeric variants:

This is kind of redundant since we can use values directly, but it can be useful for
creating classes that are more readable or when you want to use a specific unit.

```scss +torchlight-scss
$variants: ( 05: 0.5rem, 1: 1rem, 1: 2rem );
```
---

### value

A **value** is the concrete setting assigned to a property—such as a size,
color, keyword, or number. Values can be used directly in class names when no
variant is needed, providing precise control.

For example, given this map of values:

```scss +torchlight-scss
$values: (0, 1, 1.5, 2);
```

A class like:

```css +torchlight-css
.gap-1.5 {
    gap: 1.5rem;
}
```

uses the value `1.5` directly to specify a gap of 1.5rem.

<!-- REVIEW -->
<!-- REVIEW -->
<!-- REVIEW -->
<!-- REVIEW -->
<!-- REVIEW -->

---


**`$props`** A list or map of CSS properties to apply. Used in utility
generation to define what the class controls. Example: For spacing utilities:
`margin`, `padding` For layout utilities: `display`, `flex-direction`

---

**`$class-name`** The full name of the generated CSS class, constructed using
prefixes, properties, and possibly breakpoints. Example: `md:margin-lg`,
`flex-row`, `bg-primary`

---

**`$property`** The actual CSS property the class sets. This is injected into
the rule body. Example: `margin`, `padding`, `gap`, `color`

---

**`$breakpoints`** A map of responsive breakpoints used to scope classes
conditionally. Example:

```scss +torchlight-scss
$breakpoints: ( sm: 640px, md: 768px, lg: 1024px )
```

---






```scss +torchlight-scss
.#{$class-name} {
    #{$property}: $value;
}
```
