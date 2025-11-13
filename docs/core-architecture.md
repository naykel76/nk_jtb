<div class="toc" data-toc>

- [Class Generation System](#class-generation-system)
- [Builders vs Makers](#builders-vs-makers)
    - [Builders: Generate Utility Sets](#builders-generate-utility-sets)
    - [Makers: Generate Individual Classes](#makers-generate-individual-classes)
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

Makers create individual classes with full manual control. They're what builders
use internally.

<!-- this is not correct!!! -->
```scss +code
@include make-single-property-class(
    'z-index',
    'z-modal',
    9999,
    $breakpoints: (md, lg),
    $states: (hover)
);
```