<div class="toc" data-toc>

- [Class Generation System](#class-generation-system)
- [Builders vs Makers](#builders-vs-makers)
    - [Builders: Generate Utility Sets](#builders-generate-utility-sets)
    - [Makers: Generate Individual Classes](#makers-generate-individual-classes)
    - [When to Use What](#when-to-use-what)
</div>

# JTB Core Architecture

<p class="lead">This document explains the build tools used in the JTB framework and how utility classes are compiled from SCSS.</p>

<!-- not sure if this title really fits. is this just the intro?? -->
## Class Generation System

JTB uses a sophisticated mixin-based system to generate utility classes from
configuration maps. The main components are:

- **Property Maps**: SCSS maps that define the properties, values, and naming
  conventions for utility classes to be generated.
- **Builder Mixins**: Mixins that take property maps and generate the actual CSS
  classes based on defined properties and values.
- **Maker Mixins**: Mixins that generate individual classes with full manual
  control over each aspect.
- **Helper Functions**: Functions that assist in generating class names,
  sanitizing values, and handling special cases.

## Builders vs Makers

The system provides two approaches to class generation, each serving different needs:

### Builders: Generate Utility Sets

Builders generate complete utility sets from configuration maps. They're the
backbone of JTB's utility system and call makers internally to generate each
class. Most of the time you'll use builders; makers are available when you need
precision control.

```scss +code
@include build-classes((
    margin: (
        prefix: 'm-',
        values: (1, 2, 3),
        unit: 'rem'
    )
));
// Generates: .m-1, .m-2, .m-3
```

### Makers: Generate Individual Classes

Makers create individual classes with full manual control. Use these when you need
precise control over a single class rather than generating a whole set.

**Single Property Class:**

```scss +code
@include make-single-property-class(
    'display',           // CSS property
    'hidden',            // class name
    'none',              // value
    $breakpoints: (md, lg),
    $states: (hover)
);
```

Generates:
```css +code
.hidden { display: none; }
.md:hidden { /* media query */ display: none; }
.lg:hidden { /* media query */ display: none; }
.hover:hidden:hover { display: none; }
```

**Position-Based Class:**

```scss +code
@include make-position-based-class(
    'margin',            // property
    2,                   // value
    $logical-position-map,  // positions (x, y, etc.)
    'm',                 // identifier
    'lg',                // variant name
    (md, lg)             // breakpoints
);
```

Generates: `.m-lg`, `.mx-lg`, `.my-lg`, `.md:m-lg`, `.md:mx-lg`, etc.

**Responsive Variants:**

```scss +code
// From breakpoint up
@include make-from-breakpoint(
    (display: flex),
    'flex',
    (md, lg)
);

// Up to breakpoint
@include make-to-breakpoint(
    (display: none),
    'hidden',
    (md, lg)
);

// Only on specific breakpoint
@include make-on-breakpoint(
    (display: grid),
    'grid',
    (md)
);
```

### When to Use What

| Use Case | Tool | Example |
|----------|------|---------|
| Generate complete utility set | Builder | `build-classes()` for all margin utilities |
| Create single utility with responsive variants | Maker | `make-single-property-class()` for custom utility |
| Generate magic classes | Builder | `build-magic-classes()` for responsive patterns |
| Full manual control | Maker | `make-from-breakpoint()` for specific responsive class |