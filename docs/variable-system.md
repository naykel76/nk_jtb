# Variable System

<p class="lead">JTB's variable system is the single source of truth for all tokens — colors, spacing, breakpoints, typography, and component defaults. Everything is override-friendly by design.</p>

## Structure

> Core tokens — colors, spacing, breakpoints, typography — live in base files.
> Domain-specific variables live in their respective files.

```bash +code
src/maps_and_variables/
├── _base.scss          # Foundation tokens (colors, spacing, breakpoints)
├── _colors.scss        # Theme/base colors, OKLCH, Tailwind refs
├── _value-maps.scss    # Numeric & semantic utility maps (spacing, sizing, grid)
├── _typography.scss    # Font sizes, weights, line heights, text color maps
├── _config.scss        # Build system config, prefixes, logical prop maps
├── _forms.scss         # Form control variables (input/select/textarea)
├── _components.scss    # Component variables (btn, bx, badge, checklist etc.)
└── index.scss          # Forwarder — single entry point
```

## Global Overrides

To change a default project-wide, forward the framework with your values before
the build runs. All variables use `!default`, so yours take precedence.

```scss +code
@forward 'jtb/src/maps_and_variables/index' with (
    $primary: #c0392b,
    $radius-base: 0.5rem
);
```

This can live in any file — what matters is that it is used before
`jtb/src/build`.

See [Variables](/docs/jtb/api/variables) for how the variable and map system
works.

## CSS Custom Properties

JTB uses CSS custom properties in two different ways:

- selected component-level overrides such as `--box-border-color`
- semantic runtime theme tokens for `primary`, `secondary`, and `accent`

SCSS variables still set the framework defaults at build time. CSS custom
properties provide the runtime override surface when you need to test or swap a
theme without recompiling.

```html +code
<div class="bx" style="--box-border-color: var(--primary); --box-title-font-size: 1.25rem;">
    ...
</div>
```

Semantic theme classes and utilities for `primary`, `secondary`, and `accent`
now read from CSS custom properties. That includes:

- `primary` and `primary-outline`
- `bg-primary`, `txt-primary`, `bdr-primary`, and `outline-primary`
- the matching `secondary` and `accent` variants

By default, JTB defines runtime tokens such as `--primary`, `--primary-hover`,
`--primary-active`, `--primary-border`, and `--on-primary` in `:root`. Hover
and active defaults are derived from the base token with `color-mix()`. Text
and border contrast tokens still need explicit overrides when you change the
base color significantly.

```scss +code
[data-theme='layout-b'] {
    --primary: oklch(62% 0.19 275deg);
    --primary-border: rgb(255 255 255 / 0.2);
    --on-primary: white;
}
```

```html +code
<section data-theme="layout-b">
    <button class="btn primary">Primary action</button>
    <div class="bx primary">Primary surface</div>
    <p class="txt-primary">Semantic text utility</p>
</section>
```

Not all variables are exposed this way. Structural values used in SCSS
calculations remain SCSS-only, and hue-scale classes such as `bg-blue-500` or
`teal` remain compile-time values. Each component doc lists which component
custom properties are available.
