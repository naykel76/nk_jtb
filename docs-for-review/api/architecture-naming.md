# Mixin Architecture & Naming Conventions



## Architecture Levels

## The 4 Layers

**Layer 1: Base**
Foundation classes without breakpoints or states. Lowest priority in cascade.

**Layer 2: Responsive**
Media query variants that override base at different breakpoints (md:, lg:, etc).

**Layer 3: State**
Interaction state variants (hover:, focus:, active:) that override responsive.

**Layer 4: Responsive + State**
Combined breakpoint and state variants (md:hover:, lg:focus:, etc). Highest priority.














Based on the pattern, here's my recommendation:

## Naming Convention: **class** vs **variant**

- **`make-base-class()`** — Generates THE class (foundation, layer 1 only)
- **`make-responsive-variant()`** — Generates variants OF that class (layer 2)
- **`make-state-variant()`** — Generates variants OF that class (layer 3)
- **`make-responsive-state-variant()`** — Generates variants OF that class (layer 4)

And for position-based:
- **`make-responsive-position-variant()`** — Responsive variants (layer 2)
- **`make-state-position-variant()`** — State variants (layer 3)
- **`make-responsive-state-position-variant()`** — Both (layer 4)



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




## Layer Order (Cascade Priority)

1. **Base Layer** → Lowest priority, establishes defaults
2. **Responsive Layer** → Overrides base at screen sizes
3. **State Layer** → Interactive states (hover, focus)
4. **Responsive+State Layer** → Highest priority, combined variants







