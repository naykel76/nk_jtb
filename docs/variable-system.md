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

Select components expose CSS custom properties alongside their SCSS variables.
This is a deliberate design decision — not every component needs it, only those
with a high likelihood of needing per-context variation.

Where SCSS variables set the global default at build time, CSS custom properties
provide a surface for overriding individual instances directly in markup or
scoped CSS — without touching the build.

```html +code
<div class="bx" style="--box-border-color: var(--primary); --box-title-font-size: 1.25rem;">
    ...
</div>
```

Not all variables are exposed this way. Structural values used in SCSS
calculations remain SCSS-only. Each component doc lists which CSS custom
properties are available.
