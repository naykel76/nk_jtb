# Layer System

The layer system organizes and structures CSS styles for easier maintenance and
scalability. It solves the problem of specificity and conflicts by creating a
hierarchy that can be overridden in a controlled manner.

## The Problem

CSS cascade matters. Without layers:

```css
.flex { display: flex; }
.md\:flex { display: flex; }
```

Which one wins? The second - because it appears later and has higher
specificity.

## The Solution

Generate classes in order so more specific overrides less specific:

| Layer                 | Generated        | Example           | Priority |
| --------------------- | ---------------- | ----------------- | -------- |
| 1. Base               | `.flex`          | Default value     | Lowest   |
| 2. Responsive         | `.md:flex`       | Medium breakpoint | Medium   |
| 3. State              | `.hover:flex`    | On hover          | Medium   |
| 4. Responsive + State | `.md:hover:flex` | Medium + hover    | Highest  |

## Layer Breakdown

### Layer 1: Base

Just the property, no modifiers.

```css
.flex { display: flex; }
.block { display: block; }
```

### Layer 2: Responsive

Adds breakpoint modifiers (mobile-first, from breakpoint).

```css
@media (min-width: 768px) {
    .md\:flex { display: flex; }
}
```

### Layer 3: State

Adds pseudo-classes.

```css
.hover\:flex:hover { display: flex; }
.focus\:block:focus { display: block; }
```

### Layer 4: Responsive + State

Both together - highest priority.

```css
@media (min-width: 768px) {
    .md\:hover\:flex:hover { display: flex; }
}
```

## Why This Matters

Users can stack modifiers naturally:

```html
<div class="md:hover:flex">
    <input class="focus:border-blue">
```

The system generates all combinations in the right order, avoiding specificity
conflicts.

## Configuration

Each utility defines which layers it needs:

```scss
$properties-map: (
    display: (
        prefix: false,
        values: (flex, block, none)
    )
);

@include build-classes($properties-map, $responsive: true);
```

Setting `$responsive: true` generates layers 1, 2, and 4. States are added
per-utility when needed.
