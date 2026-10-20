# Variable System

<p class="lead">Configure JTB's Sass variables and use CSS custom properties for runtime styling.</p>

## Structure

Foundation tokens live in `_base.scss`. Domain-specific variables and maps live
in their respective files.

```bash +code
src/maps_and_variables/
├── _base.scss          # Foundation tokens (colors, spacing, breakpoints)
├── _colors.scss        # Brand, semantic and palette maps
├── _value-maps.scss    # Numeric & semantic utility maps (spacing, sizing, grid)
├── _typography.scss    # Font sizes, weights, line heights, text color maps
├── _config.scss        # Build system config, prefixes, logical prop maps
├── _forms.scss         # Form control variables (input/select/textarea)
├── _components.scss    # Component variables (btn, bx, badge, checklist)
└── index.scss          # Forwarder — single entry point
```

## Global Overrides

Configure public Sass variables declared with `!default` before loading the
framework. Forward the variables with your values, then load the build in the
same Sass entry point:

```scss +code
@forward 'nk_jtb/src/maps_and_variables/index' with (
    $primary: #c0392b,
    $radius-base: 0.5rem
);

@use 'nk_jtb/src/build';
```

Sass modules load once. Configuration must happen before any other import loads
the module being configured.

See [Variables](/docs/jtb/api/variables) for how the variable and map system
works.

## CSS Custom Properties

JTB exposes CSS custom properties for brand colors and component overrides:

- **Brand helper tokens** for `primary`, `secondary`, and `accent` colors and their derived values
- **Component tokens** for per-component overrides such as `--box-border-color`

SCSS variables provide the brand values used by generated framework classes.
CSS custom properties are a separate runtime layer for custom CSS, component
overrides, and development previews.

Scope component overrides to a local class:

```scss +code
.featured-box {
    --box-border-color: var(--brand-primary);
    --box-title-font-size: 1.25rem;
}
```

```html +code
<div class="bx featured-box">
    ...
</div>
```

### Brand Tokens

JTB exposes namespaced brand CSS custom properties in `:root`:

| Token                            | Description                        |
| -------------------------------- | ---------------------------------- |
| `--brand-primary`                | Base brand color                   |
| `--brand-primary-border`         | Border color, derived from base    |
| `--brand-primary-on`             | Text color for use on base         |
| `--brand-primary-dark`           | Very dark tint                     |
| `--brand-primary-light`          | Light tint                         |
| `--brand-primary-surface`        | Soft brand surface                 |
| `--brand-primary-surface-border` | Border color for the soft surface  |
| `--brand-primary-on-surface`     | Text color for use on soft surface |

The same pattern is available for `secondary` and `accent`.

The shorter `--primary`, `--primary-surface`, and `--on-primary` aliases remain
available for existing custom CSS, but new custom composition should prefer the
`--brand-*` tokens.

Brand classes and utilities are generated from Sass maps:

- `.primary` and `.primary-outline`
- `.bg-primary`, `.txt-primary`, `.bdr-primary`, `.outline-primary`
- the matching `secondary` and `accent` variants

### Overriding Brand Colors

To change the default brand colors, override the Sass variables before build:

```scss +code
@forward 'nk_jtb/src/maps_and_variables/index' with (
    $primary: oklch(62% 0.19 275deg)
);

@use 'nk_jtb/src/build';
```

For custom CSS or development previews, override the CSS variables:

```scss +code
:root {
    --brand-primary: #7c0442;
    --brand-primary-on: #fff;
}
```

Runtime overrides affect only CSS that reads those variables directly. They do
not change generated utility or theme classes.

The border and tint tokens derive from `--brand-primary` at runtime. The
`--brand-primary-on` text color is chosen at build time, so check it when changing
the base color and override it alongside the base when needed.

### What Does Not Respond to Runtime Override

Hue-scale classes (`bg-blue-500`, `teal`), semantic theme classes (`danger`,
`success`), brand theme classes (`primary`), and structural values used in SCSS
calculations are compiled to fixed values and cannot be changed at runtime.
