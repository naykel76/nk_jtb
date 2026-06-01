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

JTB exposes two categories of CSS custom properties at runtime:

- **Brand theme tokens** — `primary`, `secondary`, and `accent` colors and their derived values
- **Component tokens** — per-component overrides such as `--box-border-color`

SCSS variables set the framework defaults at build time. CSS custom properties
provide the override surface when you need to swap a brand color without
recompiling.

```html +code
<div class="bx" style="--box-border-color: var(--primary); --box-title-font-size: 1.25rem;">
    ...
</div>
```

### Brand Theme Tokens

JTB generates three CSS custom properties per brand color in `:root`:

| Token              | Description                         |
| ------------------ | ----------------------------------- |
| `--primary`        | Background color                    |
| `--primary-border` | Border color, derived at build time |
| `--on-primary`     | Text color, derived at build time   |

The same set is generated for `--secondary` and `--accent`.

These tokens drive all brand theme classes and utilities:

- `.primary` and `.primary-outline`
- `.bg-primary`, `.txt-primary`, `.bdr-primary`, `.outline-primary`
- the matching `secondary` and `accent` variants

### Overriding at Runtime

To swap a brand color without recompiling, override the tokens in `:root`:

```scss +code
:root {
    --primary: oklch(62% 0.19 275deg);
    --primary-border: oklch(50% 0.19 275deg);
    --on-primary: #fff;
}
```

`--primary-border` and `--on-primary` are computed from the original `$primary`
value at build time and will not update automatically when `--primary` changes.
If your new color is in a similar lightness range, the original derived values
may still be acceptable. If you change the color significantly, override all
three.

### What Does Not Respond to Runtime Override

Hue-scale classes (`bg-blue-500`, `teal`), semantic theme classes (`danger`,
`success`), and structural values used in SCSS calculations are compiled to
fixed values and cannot be changed at runtime.
