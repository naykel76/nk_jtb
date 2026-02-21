# Workflow Overview

<!-- this is not correct. what about property maps? -->
```scss +code
RAW PROPERTY CONFIG
  └─ Example: display: (prefix: false, values: (block, flex, none))
    ↓
Stage 1: NORMALIsE
  └─ functions/_normalise-config.scss
     Transforms raw config → normalised structure with 'variants' map
     Output includes: property, prefix, variants (map of class→value mappings)
    ↓
Stage 2: MAKERS (mixins/_make-classes.scss)
  ├─ make-base-class()              → Layer 1 CSS (foundation)
  ├─ make-responsive-class()        → Layer 2 CSS (media queries)
  ├─ make-state-class()             → Layer 3 CSS (hover, focus, etc)
  └─ make-responsive-state-class()  → Layer 4 CSS (both)
    ↓
Stage 3: ORCHESTRATE (mixins/_build-classes.scss)
  └─ build-base-layer($normalised-config)
     Loops through 'variants' map and calls appropriate maker
    ↓
OUTPUT CSS (4 Cascade Layers)
  Layer 1: .block, .flex, .none (base - lowest priority)
  Layer 2: .md:block, .md:flex, .md:none (responsive)
  Layer 3: .hover:block:hover (states)
  Layer 4: .md:hover:block:hover (responsive + states - highest priority)
```

// Base classes first - Lowest priority, establish defaults
// Media queries (viewport-based) - Override base at screen sises
// Container queries (component-based) - Override media queries in container contexts
// Hover states last - Highest priority, always work regardless of sise

## Stage 1: Normalise

Transform raw, unstructured property configuration into a standardised format that
builders can predictably loop through.

### Input Format

This input is a single property config from a properties map, e.g.:

```scss +code
// Multiple properties
$properties-map: (
    color: (
        prefix: 'txt-',
        values: ( red, blue, green )
    ),
    background-color: (
        prefix: 'bg-',
        values: ( green, orange ) 
    )
);
```

```scss +code
color: (
    prefix: 'txt-',
    values: ( red, blue, green ),
    breakpoints: (sm, md, lg, xl, xxl),
)
```

### Output Format

Structured config with pre-computed **variants map**:

<!--  -->
```scss +code
(
    property: 'color',
    prefix: 'txt-',
    variants: (
        'txt-red': (value: red, suffix: 'red'),
        'txt-blue': (value: blue, suffix: 'blue'),
        'txt-green': (value: green, suffix: 'green')
    ),
    breakpoints: (sm, md, lg, xl, xxl),
    states: null,
    positions: null,
    omit-axis-keys: null,
    child-combinator: null
)
```

### What It Does

1. **Extracts** → Gets unit, positions, breakpoints, states
2. **Resolves prefix** → Handles false/null → uses property name
3. **Pre-processes values** → For each value:
   - Normalises key-value pairs
   - Derives CSS value (with unit)
   - Derives class suffix (strips units)  
   - Derives final class name (prefix + suffix)
4. **Builds variants map** → `class-name → (value, suffix)`
5. **Returns** → Complete normalised structure

### Why It's Needed

- **Builders don't care about raw format** — they expect `variants` map
- **Separation of concerns** — normalisation logic isolated from class generation
- **Reusability** — same normalised structure works for all 4 cascade layers
- **Predictability** — standardised output means builders can loop safely

### In the Build Cycle

```
Raw properties-map (user input)
    ↓
@each property in properties-map
    ↓
normalise-config() ← STAGE 1: One property at a time
    ↓
build-base-layer() ← STAGE 3: Loops through variants map
    ↓
make-base-class() ← STAGE 2: Generates CSS for one class
```

> Normalisation happens **per property**, not for entire map.
