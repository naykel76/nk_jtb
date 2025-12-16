# Mixin Architecture & Naming Conventions

JTB uses a clear three-tier hierarchy for class generation:

## Architecture Levels

### 1. **Makers** (in `_make-classes.scss`)
Generate CSS for **ONE class** at a time. These are the atomic building blocks.

```scss
// Signature pattern: ($property, $class, $value, [layer-params], $options: ())

make-base-class($property, $class, $value, $options: ())
make-responsive-class($property, $class, $value, $breakpoints, $options: ())
make-state-class($property, $class, $value, $states, $options: ())
make-responsive-state-class($property, $class, $value, $breakpoints, $states, $options: ())
```

**Example:**
```scss
@include make-base-class('display', 'block', 'block');
// Generates: .block { display: block; }

@include make-responsive-class('display', 'block', 'block', (md, lg));
// Generates:
//   .md:block { @media (min-width: 768px) { display: block; } }
//   .lg:block { @media (min-width: 1024px) { display: block; } }
```

---

### 2. **Builders** (in `_build-classes.scss`)
Loop through **ALL values** and call makers for each. These orchestrate layer generation.

```scss
build-base-layer($config)
build-responsive-layer($config)
build-state-layer($config)
build-responsive-state-layer($config)
```

**Example:**
```scss
$config: (
    property: 'display',
    items: (
        'block': (value: 'block'),
        'flex': (value: 'flex'),
        'grid': (value: 'grid')
    )
);

@include build-base-layer($config);
// Calls make-base-class for: block, flex, grid
// Generates: .block, .flex, .grid
```

---

### 3. **Controller** (in `_build-classes.scss`)
Orchestrates the **entire generation process** by calling all layer builders in the correct cascade order.

```scss
build-classes-new($properties-map, $responsive, $with-state, $debug)
```

**Example:**
```scss
$properties: (
    display: (
        values: (block, flex, grid)
    )
);

@include build-classes-new($properties, $responsive: true);
// Calls:
//   1. build-base-layer → .block, .flex, .grid
//   2. build-responsive-layer → .md:block, .lg:block, etc.
```

---

## Data Flow

```
User Config (property map)
        ↓
build-classes-new (normalize config)
        ↓
build-base-layer (loop through values)
        ↓
make-base-class (generate CSS for one class)
        ↓
Final CSS Output
```

---

## Naming Logic

| Level | Prefix | Scope | Example |
|-------|--------|-------|---------|
| **Maker** | `make-` | Single class | `make-base-class` |
| **Builder** | `build-` + `-layer` | All classes in one layer | `build-base-layer` |
| **Controller** | `build-` + `-new` | Entire framework | `build-classes-new` |

---

## Layer Order (Cascade Priority)

1. **Base Layer** → Lowest priority, establishes defaults
2. **Responsive Layer** → Overrides base at screen sizes
3. **State Layer** → Interactive states (hover, focus)
4. **Responsive+State Layer** → Highest priority, combined variants

---

## Options Map Pattern

All makers use a consistent `$options` map for optional parameters:

```scss
$options: (
    child-selector: true,
    // Future: container-queries, custom-prefix, etc.
);

@include make-base-class($property, $class, $value, $options);
```

**Why options map?**
- Keeps required vs optional parameters clear
- Easy to extend without breaking signatures
- Consistent across all layer mixins

---

## Position-Based Classes

For properties like `margin`, `padding`, `border`, etc., special position mixins handle multiple class generation:

```scss
// TODO: To be implemented
make-base-position-class(...)
make-responsive-position-class(...)
make-state-position-class(...)
make-responsive-state-position-class(...)
```

These generate classes like:
- `.mx-1`, `.my-1`, `.mt-1`, `.mr-1`, `.mb-1`, `.ml-1`

From a single value.

---

## Quick Reference

```scss
// MAKER (one class)
make-base-class('display', 'block', 'block')
→ .block { display: block; }

// BUILDER (all classes in layer)
build-base-layer($config)
→ .block, .flex, .grid, .inline, etc.

// CONTROLLER (everything)
build-classes-new($properties-map, $responsive: true)
→ All base classes + all responsive classes + all state classes
```
