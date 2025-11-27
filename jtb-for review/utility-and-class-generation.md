<div class="toc" data-toc>

- [Building Utility Classes](#building-utility-classes)
    - [`build-classes()`](#build-classes)
- [Building Composite Classes](#building-composite-classes)
    - [`build-composite-classes()`](#build-composite-classes)
- [Property Map Structure](#property-map-structure)
    - [Configuration Options](#configuration-options)
        - [`values: (Map | List)`](#values-map--list)
        - [`prefix: (string | false | null)`](#prefix-string--false--null)
        - [`unit (string)`](#unit-string)
        - [`positions (map)`](#positions-map)
        - [`omit-axis-keys (list)`](#omit-axis-keys-list)
        - [`child-combinator (?)`](#child-combinator-)
        - [`breakpoints (list)`](#breakpoints-list)
        - [`states (list)`](#states-list)
- [Position-Based Classes](#position-based-classes)
    - [Logical Positioning](#logical-positioning)
    - [Omitting Axis Keys](#omitting-axis-keys)
    - [Property Resolution Patterns](#property-resolution-patterns)
- [Child Combinator Classes](#child-combinator-classes)
- [Value Processing](#value-processing)
    - [Automatic Unit Handling](#automatic-unit-handling)
    - [Class Name Sanitization](#class-name-sanitization)
    - [Variant Formats](#variant-formats)
- [Responsive and State Variants](#responsive-and-state-variants)
    - [Default Override Hierarchy](#default-override-hierarchy)
    - [Responsive Variants](#responsive-variants)
    - [State Variants](#state-variants)
- [Magic Classes (Responsive Patterns)](#magic-classes-responsive-patterns)
    - [Magic Property Classes](#magic-property-classes)
    - [Magic Grid Classes](#magic-grid-classes)
- [Manual Class Generation](#manual-class-generation)
    - [Single Property Classes](#single-property-classes)
    - [Position-Based Classes](#position-based-classes-1)
    - [Responsive Helpers](#responsive-helpers)
    - [State Variants](#state-variants-1)
- [Property Makers (Low-Level)](#property-makers-low-level)
    - [Single Property](#single-property)
    - [Multiple Properties](#multiple-properties)
    - [Directional Properties](#directional-properties)
- [Transition System](#transition-system)
- [Helper Functions](#helper-functions)
    - [Class Name Utilities](#class-name-utilities)
    - [Value Processing](#value-processing-1)
    - [Map Utilities](#map-utilities)
    - [String Utilities](#string-utilities)
- [Debugging](#debugging)
- [Best Practices](#best-practices)
    - [Use Builders for Sets](#use-builders-for-sets)
    - [Enable Responsive for Layout Utilities](#enable-responsive-for-layout-utilities)
    - [Leverage Position Maps](#leverage-position-maps)
    - [Omit Redundant Axis Keys](#omit-redundant-axis-keys)
    - [Use Composite Classes for Patterns](#use-composite-classes-for-patterns)
    - [Keep Prefixes Short but Clear](#keep-prefixes-short-but-clear)
    - [Use Child Combinators Sparingly](#use-child-combinators-sparingly)
    - [Prefer Magic Classes for Complex Responsive](#prefer-magic-classes-for-complex-responsive)
</div>

# Utility Generation Guide

JTB uses a sophisticated mixin-based system to generate utility classes from
SCSS. This system is designed to be flexible, allowing for both high-level bulk
generation of utility sets as well as low-level, fine-grained control over
individual classes.

## Building Utility Classes

### `build-classes()`

Generates single-property utility classes. Each class maps one CSS property to one value.

```scss +code
@include build-classes($properties-map);
```

**Basic Example:**

```scss +code
$spacing: (
    margin: (
        prefix: 'm-',
        values: (1, 2, 3, auto),
        unit: 'rem'
    )
);

@include build-classes($spacing);
```

**Generates:**
```css +code
.m-1 { margin: 1rem; }
.m-2 { margin: 2rem; }
.m-3 { margin: 3rem; }
.m-auto { margin: auto; }
```

**Inline Usage:**

You can also define the map directly in the mixin call:

```scss +code
@include build-classes((
    margin: (
        prefix: 'm-',
        values: (1, 2, 3, auto),
        unit: 'rem'
    )
));
```

This is useful for one-off utility generation or when you don't need to reuse the configuration.

## Building Composite Classes

### `build-composite-classes()`

Generates classes that combine multiple CSS properties into a single utility.

```scss +code
@include build-composite-classes($composite-map);
```

**Basic Example:**

```scss +code
$layout: (
    flex-centered: (
        props: (
            display: flex,
            align-items: center,
            justify-content: center
        )
    )
);

@include build-composite-classes($layout);
```

**Generates:**
```css +code
.flex-centered {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

**Inline Usage:**

```scss +code
@include build-composite-classes((
    flex-centered: (
        props: (display: flex, align-items: center, justify-content: center)
    )
));
```

**Working with Multiple Utilities:**

Both `build-classes()` and `build-composite-classes()` can process multiple entries in a single map:

```scss +code
$utilities: (
    margin: (prefix: 'm-', values: (1, 2, 3), unit: 'rem'),
    padding: (prefix: 'p-', values: (1, 2, 3), unit: 'rem'),
    width: (prefix: 'w-', values: (25%, 50%, 75%, 100%))
);

@include build-classes($utilities);
// Generates .m-1, .m-2, .m-3, .p-1, .p-2, .p-3, .w-25%, .w-50%, etc.
```

```scss +code
$layout: (
    flex-centered: (props: (display: flex, align-items: center, justify-content: center)),
    flex-col: (props: (display: flex, flex-direction: column)),
    flex-row: (props: (display: flex, flex-direction: row))
);

@include build-composite-classes($layout);
// Generates .flex-centered, .flex-col, .flex-row
```

The Property Map Structure section provides detailed configuration options for each property.

## Property Map Structure

Property maps define how utilities are generated from CSS properties. Each
property entry can include options to control class naming, values, directional
variants, and more.

```scss +code
$properties-map: (
    property-name: (
        // Naming
        prefix: 'custom-',         // Class prefix (default: property name + '-')
        
        // Values
        values: (...),             // REQUIRED: Values to generate classes for
        unit: 'rem',               // Unit for numeric values
        
        // Directional variants
        positions: $map,           // Generate directional variants (top, left, etc.)
        omit-axis-keys: (xy),      // Skip axis keys in class names
        
        // Behaviour
        child-combinator: true,    // Apply styles to child elements
        
        // Variant overrides
        breakpoints: (sm, md),     // Override responsive breakpoints
        states: (hover, focus)     // Override state variants
    )
);
```

**Note:** Only `values` is required. All other options are optional and have
sensible defaults.

### Configuration Options

#### `values: (Map | List)`

Defines the values used to generate utility classes. This option is required.

```scss +code
color: (
    values: (red, blue, green)
)
```

**Generates:**

```css +code
.color-red { color: red; }
.color-blue { color: blue; }
.color-green { color: green; }
```

Values can be defined as a list or a map. Maps allow you to define custom keys
for use in class names:

```scss +code
values: (1, 2, 3)                // → .m-1, .m-2, .m-3
values: (sm: 1rem, lg: 3rem)     // → .text-sm, .text-lg
```

> You can also combine maps and lists with helper functions like `smart-merge()`
> to extend existing sets of values:

```scss +code
$font-weight-values: (100, 200, 300, 400);
$font-weight-variants: (normal: 400, bold: 700);
$font-weights: smart-merge($font-weight-values, $font-weight-variants);
// → (100: 100, 200: 200, 300: 300, 400: 400, normal: 400, bold: 700)
```

#### `prefix: (string | false | null)`

Controls the class name prefix.

* Custom string → use as prefix
* false → no prefix (just the value)
* Default → property name + "-"

```scss +code
color: (prefix: 'txt-', values: (red))     // → .txt-red
color: (prefix: false, values: (red))      // → .red
color: (values: (red))                     // → .color-red
```

<!-- AI DONT REMOVE. THESE SETTING HAVE A LOT MORE GOING ON AND 
I THINK THEY NEED MORE CONTEXT -->

#### `unit (string)`

**`unit`** (String)

Unit appended to numeric values.


- Omitted for: `auto`, `%`, `0`, `fit-content`, `max-content`, `min-content`

#### `positions (map)`

<!-- explain $logical map and axis map -->
- Position map for directional properties (margin, padding, border)
- See [Position-Based Classes](#position-based-classes)
  
#### `omit-axis-keys (list)`

- Axis keys to exclude from class names
- Example: `omit-axis-keys: (xy)` generates `.m-1` instead of `.m-xy-1`
  
#### `child-combinator (?)`

- `true` = Apply to children with default combinator `> *:not(:first-child)`
- String = Custom combinator selector
- Used for utilities like `space-x`, `space-y`

#### `breakpoints (list)`

- Custom breakpoints for this property only
- Overrides mixin `$responsive` parameter
- Example: `breakpoints: (md, lg)`

#### `states (list)`

- Custom states for this property only
- Overrides mixin `$with-state` parameter
- Example: `states: (hover, active)`



















## Position-Based Classes

### Logical Positioning

Use `$logical-position-map` for internationalization-friendly directional utilities:

```scss +code
$logical-position-map: (
    xy: (block-start, block-end, inline-start, inline-end),
    x: (inline-start, inline-end),
    y: (block-start, block-end),
    t: block-start,
    b: block-end,
    l: inline-start,
    r: inline-end
);

$spacing-properties: (
    margin: (
        prefix: 'm-',
        values: (1, 2, 3),
        unit: 'rem',
        positions: $logical-position-map
    )
);

@include build-classes($spacing-properties);
```

**Generates:**
```css +code
.m-xy-1 {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}
.m-x-1 {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}
.m-y-1 {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
}
.m-t-1 { margin-block-start: 1rem; }
.m-b-1 { margin-block-end: 1rem; }
.m-l-1 { margin-inline-start: 1rem; }
.m-r-1 { margin-inline-end: 1rem; }
```

### Omitting Axis Keys

Remove redundant axis indicators for cleaner class names:

```scss +code
$border-properties: (
    border-width: (
        prefix: 'bdr-',
        values: (1, 2, 3),
        positions: $logical-position-map,
        omit-axis-keys: (xy)  // .bdr-1 instead of .bdr-xy-1
    )
);
```

**Generates:**
```css +code
.bdr-1 { /* All sides - xy omitted */ }
.bdr-x-1 { /* Horizontal */ }
.bdr-y-1 { /* Vertical */ }
.bdr-t-1 { /* Top */ }
```

### Property Resolution Patterns

The system automatically handles two naming patterns:

**Split Pattern** (border sub-properties):
```scss +code
border-width + top → border-top-width
border-style + left → border-left-style
border-radius + top-left → border-top-left-radius
```

**Suffix Pattern** (standard directional):
```scss +code
margin + top → margin-top
padding + left → padding-left
```

Split properties: `border-width`, `border-style`, `border-color`, `border-radius`


## Child Combinator Classes

Apply styles to children elements (e.g., `space-x`, `space-y`):

```scss +code
$spacing-properties: (
    margin: (
        prefix: 'space-',
        values: (1, 2, 3),
        unit: 'rem',
        positions: (
            x: (inline-start),
            y: (block-start)
        ),
        child-combinator: true
    )
);

@include build-classes($spacing-properties);
```

**Generates:**
```css +code
:where(.space-x-1 > *:not(:first-child)) {
    margin-inline-start: 1rem;
}
:where(.space-y-1 > *:not(:first-child)) {
    margin-block-start: 1rem;
}
```

**Custom combinator:**
```scss +code
child-combinator: '> li'  // Target specific children
```


## Value Processing

### Automatic Unit Handling

The system intelligently handles units:

```scss +code
values: (
    1,          // → 1rem (unit applied)
    0,          // → 0 (no unit)
    auto,       // → auto (no unit)
    100%,       // → 100% (keeps existing unit)
    fit-content // → fit-content (no unit)
)
```

**Excluded from unit suffixing:** `auto`, `%`, `0`, `fit-content`, `max-content`, `min-content`

### Class Name Sanitization

Decimal values are escaped for valid CSS selectors:

```scss +code
values: (
    0.5,    // → .m-05 (removes leading zero)
    1.5,    // → .m-1\.5 (escaped decimal)
    20.5rem // → .m-20\.5 (strips 'rem', escapes decimal)
)
```

### Variant Formats

Three ways to define values:

```scss +code
// 1. Simple list (key = value)
values: (1, 2, 3)
// → .m-1 { margin: 1rem; }

// 2. Map with custom labels
values: (
    sm: 0.875rem,
    base: 1rem,
    lg: 1.25rem
)
// → .txt-sm { font-size: 0.875rem; }

// 3. List of [label, value] pairs
values: (
    ('tight', 1.25),
    ('normal', 1.5)
)
// → .lh-tight { line-height: 1.25; }
```


## Responsive and State Variants

### Default Override Hierarchy

Configuration follows this precedence (highest to lowest):

1. **Property/Class-level** configuration
2. **Mixin parameter**
3. **System defaults**

```scss +code
// Property-level overrides mixin parameter
@include build-classes((
    margin: (
        values: (1, 2),
        breakpoints: (sm)  // ONLY sm, ignores mixin param
    )
), $responsive: true);  // Would use (sm, md, lg, xl) if not overridden
```

### Responsive Variants

Enable with `$responsive: true` or per-property `breakpoints` key:

```scss +code
// Global responsive
@include build-classes($map, $responsive: true);

// Per-property override
margin: (
    values: (1, 2),
    breakpoints: (md, lg)  // Only these breakpoints
)
```

**Default breakpoints:** `sm`, `md`, `lg`, `xl`, `xxl`

### State Variants

Enable with `$with-state: true` or per-property `states` key:

```scss +code
// Global states
@include build-classes($map, $with-state: true);

// Per-property override
color: (
    values: (red, blue),
    states: (hover, focus)  // Only these states
)
```

**Default states:** `hover`, `focus`, `active`

**Generates:**
```css +code
.hover\:txt-red:hover { color: red; }
.focus\:txt-red:focus { color: red; }
```


## Magic Classes (Responsive Patterns)

Generate classes with values that change across breakpoints:

### Magic Property Classes

```scss +code
// Values: [base, sm, md, lg]
$magic-patterns: ((5, 3, 2), (4, 2, 1));

@include build-magic-classes(
    'padding',           // Property
    $magic-patterns,     // Value lists
    'py',                // Identifier
    'rem',               // Unit
    'y'                  // Axis (optional)
);
```

**Generates:**
```css +code
.py-2-3-5 {
    padding-block: 2rem;
}
@media (width >= 576px) {
    .py-2-3-5 { padding-block: 3rem; }
}
@media (width >= 768px) {
    .py-2-3-5 { padding-block: 5rem; }
}
```

### Magic Grid Classes

```scss +code
$grid-patterns: ((4, 3, 2, 1), (3, 2, 1));

@include build-magic-grid($grid-patterns);
```

**Generates:**
```css +code
.cols-1-2-3-4 {
    grid-template-columns: repeat(1, 1fr);
}
@media (width >= 576px) {
    .cols-1-2-3-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (width >= 768px) {
    .cols-1-2-3-4 { grid-template-columns: repeat(3, 1fr); }
}
@media (width >= 992px) {
    .cols-1-2-3-4 { grid-template-columns: repeat(4, 1fr); }
}
```


## Manual Class Generation

### Single Property Classes

Use Makers for individual utilities:

```scss +code
@include make-single-property-class(
    'margin',           // Property
    'm-custom',         // Class name
    '2rem',             // Value
    (sm, md),           // Breakpoints (optional)
    (hover, focus),     // States (optional)
    false               // Child combinator
);
```

### Position-Based Classes

```scss +code
@include make-position-based-class(
    'padding',          // Property
    '1rem',             // Value
    $positions-map,     // Position configuration
    'p-',               // Prefix
    'custom',           // Variant
    (sm, md),           // Breakpoints
    (hover),            // States
    (xy),               // Omit axis keys
    false               // Child combinator
);
```

### Responsive Helpers

**From breakpoint (mobile-first):**
```scss +code
@include make-from-breakpoint(
    (display: flex),    // Properties
    'flex-row',         // Class name
    (sm, md, lg)        // Breakpoints
);
```

**To breakpoint (max-width):**
```scss +code
@include make-to-breakpoint(
    (display: block),
    'block',
    (sm, md)
);
```

**On breakpoint (specific range):**
```scss +code
@include make-on-breakpoint(
    (display: none),
    'hidden',
    (md)
);
```

### State Variants

```scss +code
@include make-state-based-class(
    (opacity: 0.5),     // Properties
    'opacity-50',       // Class name
    (hover, focus)      // States
);
```

**Generates:**
```css +code
.hover\:opacity-50:hover { opacity: 0.5; }
.focus\:opacity-50:focus { opacity: 0.5; }
```


## Property Makers (Low-Level)

Direct CSS generation without class wrappers:

### Single Property

```scss +code
@include make-property('margin', '1rem');
// → margin: 1rem;
```

### Multiple Properties

```scss +code
@include make-properties((
    margin: 1rem,
    padding: 2rem,
    color: red
));
// → margin: 1rem; padding: 2rem; color: red;
```

### Directional Properties

```scss +code
@include create-position-properties(
    'margin',                       // Property
    2,                              // Value
    (block-start, block-end),       // Positions
    'rem'                           // Unit
);
// → margin-block-start: 2rem; margin-block-end: 2rem;
```


## Transition System

Smart transitions with automatic durations based on property type:

```scss +code
@include transition();                    // All properties, 300ms
@include transition(color);               // Auto: 200ms (fast)
@include transition(opacity);             // Auto: 300ms (smooth)
@include transition((background, color)); // Multiple properties
@include transition(width, 400ms);        // Custom duration
@include transition(transform, 250ms, ease-in-out, 100ms); // Full control
```

**Auto durations by property:**
- `color`, `fill`, `stroke`, `background*`, `text*`: **200ms** (fast feedback)
- `border*`, `outline*`, `box-shadow`, `transform*`: **250ms** (subtle effects)
- `opacity`, `visibility`: **300ms** (smooth fades)
- `width`, `height`, `flex*`, `max-*`, `min-*`: **400ms** (layout changes)
- Default: **300ms**


## Helper Functions

### Class Name Utilities

```scss +code
sanitize-class-name(0.5)            // → '05'
sanitize-class-name(1.5rem)         // → '1\.5'
strip-class-suffixes('m-xy-1')      // → 'm-1' (if xy excluded)
build-selector('m-1', false)        // → '.m-1'
build-selector('space-x-1', true)   // → ':where(.space-x-1 > *:not(:first-child))'
```

### Value Processing

```scss +code
handle-class-value(1, 'rem')        // → '1rem'
handle-class-value(auto, 'rem')     // → 'auto' (no unit)
handle-class-unit('rem')            // → '' (rem is default)
handle-class-unit('px')             // → 'px'
normalise-variant-value(1, null)    // → ('1', 1)
normalise-variant-value(('sm', 2))  // → ('sm', 2)
```

### Map Utilities

```scss +code
list-to-map((1, 2, 3))              // → (1: 1, 2: 2, 3: 3)
smart-merge($map1, $list, $map2)    // Auto-converts lists to maps
flatten-map($nested)                // Nested map to flat keys
map-deep-get($map, 'key1', 'key2')  // Nested access
map-get-dot('colors.primary', $map) // Dot notation access
```

### String Utilities

```scss +code
str-replace('10.5rem', '.', '-')    // → '10-5rem'
str-explode('a-b-c', '-')           // → ('a', 'b', 'c')
to-string(10px)                     // → "10px"
strip-rem('1.5rem')                 // → '1.5'
value-has-unit(1rem)                // → true
escape-decimal(1.5)                 // → '1\.5'
```


## Debugging

Output detailed information about property configurations:

```scss +code
@include debug-property-classes(
    $properties-map,
    $responsive: true,
    $with-state: false,
    $show-classes: true
);
```

**Output:**
```css +code
DEBUG margin {
    --responsive: true;
    --with-state: false;
    --property-name: margin;
    --values-count: 10;
    --resolved-prefix: m-;
    --resolved-breakpoints: sm, md, lg, xl;
    --resolved-states: NONE;
    --class: m-1;
    --class: m-2;
    --class: m-auto;
}
```


## Best Practices

### Use Builders for Sets
```scss +code
// ✅ Good: Generate entire utility set
@include build-classes((
    margin: (values: (0, 1, 2, 3, auto))
));

// ❌ Avoid: Manual iteration
@each $value in (0, 1, 2, 3, auto) {
    @include make-single-property-class(...);
}
```

### Enable Responsive for Layout Utilities
```scss +code
// Spacing, sizing, display, flexbox, grid
@include build-classes($map, $responsive: true);

// Colors, borders (usually static)
@include build-classes($map, $responsive: false);
```

### Leverage Position Maps
```scss +code
// ✅ Good: Automatic directional classes
margin: (
    positions: $logical-position-map,
    values: (1, 2, 3)
)
// → .m-xy-1, .m-x-1, .m-y-1, .m-t-1, etc.

// ❌ Avoid: Manual direction classes
margin-top: (values: (1, 2, 3)),
margin-right: (values: (1, 2, 3)),
// ... repetitive
```

### Omit Redundant Axis Keys
```scss +code
// ✅ Good: Clean class names
border-width: (
    omit-axis-keys: (xy),
    positions: $logical-position-map
)
// → .bdr-1 (primary use), .bdr-x-1, .bdr-y-1

// ❌ Avoid: Verbose primary class
// → .bdr-xy-1 (redundant for all-sides)
```

### Use Composite Classes for Patterns
```scss +code
// ✅ Good: Single utility for common pattern
flex-centered: (
    props: (display: flex, align-items: center, justify-content: center)
)
// HTML: <div class="flex-centered">

// ❌ Avoid: Multiple classes in HTML
// HTML: <div class="flex items-center justify-center">
```

### Keep Prefixes Short but Clear
```scss +code
// ✅ Good: Short, unambiguous
margin: (prefix: 'm-')
text-align: (prefix: 'ta-')

// ❌ Avoid: Too verbose
margin: (prefix: 'margin-')
text-align: (prefix: 'text-align-')

// ❌ Avoid: Too cryptic
margin: (prefix: 'mg-')
```

### Use Child Combinators Sparingly
```scss +code
// ✅ Good: Justified use (flex/grid gaps in older browsers)
space-x-1, space-y-1

// ⚠️ Careful: Performance cost for deep trees
.card > *:not(:first-child) // Evaluated for every element
```

### Prefer Magic Classes for Complex Responsive
```scss +code
// ✅ Good: Single class, clear intent
@include build-magic-classes('padding', ((5, 3, 2)));
// → .py-2-3-5

// ❌ Avoid: Multiple responsive classes
// HTML: <div class="py-2 sm:py-3 md:py-5">
```
