# JTB Mixin Workflow: Building from the Ground Up

This guide explains how JTB's mixin system works together, from the foundation level up to
complete utility class generation.

What are $props? A map of key value pairs representing CSS properties and their values. For example:

```scss +code
$props: (
    display: flex,
    gap: 1rem,
    align-items: center
);
```

-------------------------------------------------------------------

**Make a single property:**

```scss +code
@mixin make-property($property, $value)
```

Then
Loops through a map of CSS properties and values, generating the corresponding CSS rules.

```scss +code
@mixin make-properties($props) {
    @each $property, $value in $props {
        @include make-property($property, $value);
    }
}
```





## The Foundation: Core Property Functions

Everything starts with **core property handling**:

### 1. `make-properties()`

**Purpose**: Apply a map of CSS properties and values to a selector.

```scss +code
@include make-properties((
    display: flex,
    gap: 1rem,
    align-items: center
));
// Output: display: flex; gap: 1rem; align-items: center;
```

**Role**: This is the lowest level — it just outputs CSS. Every other mixin uses this internally to apply the actual styles.

---

## Level 2: Single Classes

### 2. `make-single-property-class()`

**Purpose**: Create a single utility class with one property-value pair, optionally with responsive and state variants.

```scss +code
@include make-single-property-class(
    'display',
    'flex',
    'flex',
    $breakpoints: (md, lg),
    $states: (hover)
);
// Output:
// .flex { display: flex; }
// .md:flex { display: flex; }
// .lg:flex { display: flex; }
// .flex:hover { display: flex; }
```

**When to use**: When you need a specific, hand-crafted class with exact property-value pairs.

**Real example** from codebase:
```scss +code
@include make-single-property-class(
    'display',
    'block',
    'block'
);
@include make-single-property-class(
    'display',
    'flex',
    'flex'
);
```

---

## Level 3: Directional/Positional Classes

### 3. `make-position-based-class()`

**Purpose**: Create utility classes for properties that apply to multiple positions (e.g., margin top/bottom/left/right).

```scss +code
@include make-position-based-class(
    'margin',           // CSS property
    '1rem',            // CSS value
    (t: margin-top, b: margin-bottom, l: margin-left, r: margin-right),  // Position map
    'm',               // Class prefix (e.g., .m-base, .m-t-base)
    'base',            // Variant name
    (md, lg)           // Breakpoints
);
// Output:
// .m-base { margin: 1rem; }
// .m-t-base { margin-top: 1rem; }
// .m-b-base { margin-bottom: 1rem; }
// .md:m-base, .md:m-t-base, etc.
```

**When to use**: For spacing, borders, or any property where you need directional variants (top, bottom, left, right, x-axis, y-axis).

---

## Level 4: Responsive Wrappers

These mixins generate responsive variants (`.md:class-name`, `.lg:class-name`, etc.) for classes you've already created.

### 4a. `make-from-breakpoint()`

**Purpose**: Create responsive variants that apply **from a breakpoint upward** (mobile-first approach).

```scss +code
@include make-from-breakpoint(
    (display: flex),
    'flex',
    (md, lg, xl)
);
// Output:
// .md:flex { @media (min-width: md) { display: flex; } }
// .lg:flex { @media (min-width: lg) { display: flex; } }
// .xl:flex { @media (min-width: xl) { display: flex; } }
```

**Pattern**: `.{breakpoint}:{class-name}`

**Use case**: "Show this only on medium screens and up"

---

### 4b. `make-on-breakpoint()`

**Purpose**: Create responsive variants that apply **only at a specific breakpoint** (exact range).

```scss +code
@include make-on-breakpoint(
    (display: flex),
    'flex',
    (md, lg)
);
// Output:
// .on-md:flex { @media (min-width: md) and (max-width: lg) { display: flex; } }
// .on-lg:flex { @media (min-width: lg) and (max-width: xl) { display: flex; } }
```

**Pattern**: `.on-{breakpoint}:{class-name}`

**Use case**: "Show this only on tablets, not phones or desktops"

---

### 4c. `make-to-breakpoint()`

**Purpose**: Create responsive variants that apply **up to a breakpoint** (desktop-first approach).

```scss +code
@include make-to-breakpoint(
    (display: none),
    'hidden',
    (md, lg)
);
// Output:
// .to-md:hidden { @media (max-width: md) { display: none; } }
// .to-lg:hidden { @media (max-width: lg) { display: none; } }
```

**Pattern**: `.to-{breakpoint}:{class-name}`

**Use case**: "Hide this below medium screens"

---

## Level 5: The Master Builder

### 5. `build-classes()`

**Purpose**: Generate an entire set of utility classes from a configuration map. This is the **workhorse** that combines everything above.

```scss +code
@include build-classes((
    display: (
        prefix: 'd-',
        values: (flex, grid, block, hidden)
    ),
    margin: (
        prefix: 'm-',
        values: (1, 2, 3, 4),
        positions: $logical-position-map,
        unit: 'rem'
    )
), $responsive: true);
// Output:
// .d-flex, .d-grid, .d-block, .d-hidden
// .m-1, .m-2, .m-3, .m-4
// .m-t-1, .m-b-2, .m-l-3, etc. (all positions)
// .md:d-flex, .md:m-1, etc. (all responsive variants)
```

**Configuration options**:

| Key | Purpose |
|-----|---------|
| `prefix` | Class name prefix (e.g., `m-`, `d-`) |
| `values` | Map or list of values to generate (e.g., `(1, 2, 3)` or `$color-map`) |
| `positions` | For directional properties (margin, padding, border). Enables `.m-t`, `.m-b`, etc. |
| `unit` | CSS unit (`rem`, `px`, etc.). Omitted from class names by default. |
| `omit-axis-keys` | Exclude combinations (e.g., `(xy)` removes `.m-xy` classes) |

**Parameters**:

| Parameter | Default | Purpose |
|-----------|---------|---------|
| `$properties-map` | — | Configuration map |
| `$responsive` | `false` | Generate all responsive prefixes (`.md:`, `.on-md:`, `.to-md:`) |
| `$with-state` | `false` | Generate state variants (`.class:hover`, etc.) |
| `$debug` | `false` | Log debug info during compilation |

---

## Real-World Example: How Display Utilities Are Built

Here's how `_display-visibility.scss` puts it all together:

```scss +code
// Step 1: Configure what to build
$display-visibility-properties-map: (
    display: ( prefix: false, values: $display ),  // flex, grid, block, etc.
    visibility: ( prefix: false, values: $visibility )  // visible, hidden
);

// Step 2: Build BASE classes (no responsive prefixes yet)
// Output: .flex, .grid, .block, .hidden, etc.
@include build-classes($display-visibility-properties-map, $responsive: false);

// Step 3: Create responsive variants using FROM breakpoint
// Output: .md:flex, .md:grid, .lg:flex, etc.
@include make-from-breakpoint((display: block), "block", $responsive-variants);
@include make-from-breakpoint((display: flex), "flex", $responsive-variants);

// Step 4: Create responsive variants using ON breakpoint (specific ranges)
// Output: .on-md:flex, .on-lg:flex, etc.
@include make-on-breakpoint((display: flex), "flex", $responsive-variants);

// Step 5: Create responsive variants using TO breakpoint
// Output: .to-md:hidden, .to-lg:hidden, etc.
@include make-to-breakpoint((display: hidden), "hidden", $responsive-variants);
```

---

## Decision Tree: Which Mixin Should I Use?

```
Do you have a configuration map of CSS properties and values?
├─ YES → Use build-classes()
│        (Let it generate all variants automatically)
└─ NO
   └─ Do you need position variants (top, bottom, left, right)?
      ├─ YES → Use make-position-based-class()
      └─ NO
         └─ Do you need responsive variants?
            ├─ YES → Choose one:
            │        • make-from-breakpoint() = mobile-first (.md:class)
            │        • make-on-breakpoint() = exact range (.on-md:class)
            │        • make-to-breakpoint() = desktop-first (.to-md:class)
            └─ NO → Use make-single-property-class()
                     (Simple, hand-crafted class)
```

---

## Key Principles

### 1. **Cascade Ordering**
Base classes must be generated before responsive variants. This ensures cascading works correctly:
```scss +code
.flex { display: flex; }        // Base (generated first)
.md:flex { display: flex; }     // Responsive (overrides base at md and up)
```

### 2. **Configuration Over Code**
`build-classes()` is preferred because:
- Configuration maps live in one place (`src/maps_and_variables/`)
- Consistent naming and patterns
- Less code repetition

### 3. **Semantic Class Names**
- Use meaningful prefixes: `m-` (margin), `p-` (padding), `d-` (display)
- Use semantic values: `flex`, `grid`, `hidden` instead of `1`, `2`, `3`
- Abbreviate only when clear: `md:`, `lg:`, `t:`, `b:` (top, bottom)

---

## Common Patterns

### Pattern 1: Build from Configuration (Most Common)
```scss +code
$my-config: (
    margin: (
        prefix: 'm-',
        values: $margin-map,
        positions: $logical-position-map,
        unit: 'rem'
    )
);

@include build-classes($my-config, $responsive: true);
```

### Pattern 2: Hand-Craft Specific Classes
```scss +code
@include make-single-property-class('display', 'flex', 'flex');
@include make-single-property-class('display', 'grid', 'grid');
@include make-single-property-class('display', 'hidden', 'none');
```

### Pattern 3: Add Responsive to Hand-Crafted
```scss +code
// Create base
@include make-single-property-class('display', 'flex', 'flex');

// Then add responsive variants
@include make-from-breakpoint((display: flex), 'flex', (md, lg));
```

---

## Performance Note

`build-classes()` is more efficient because:
1. One configuration defines all classes
2. Smart merging of values/variants in correct order
3. Fewer mixin calls = smaller CSS file

Hand-crafted classes with individual mixins are better for:
1. Precise control over specific values
2. Custom naming conventions
3. Complex property combinations (multiple properties per class)

