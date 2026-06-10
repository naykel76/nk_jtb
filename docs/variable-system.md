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

JTB exposes CSS custom properties for brand colors and component overrides:

- **Brand helper tokens** — `primary`, `secondary`, and `accent` colors and their derived values
- **Component tokens** — per-component overrides such as `--box-border-color`

SCSS variables provide the brand values used by generated framework classes.
CSS custom properties are a separate runtime layer for custom CSS, component
overrides, and development previews.

```html +code
<div class="bx" style="--box-border-color: var(--primary); --box-title-font-size: 1.25rem;">
    ...
</div>
```

### Brand Helper Tokens

JTB exposes brand CSS custom properties in `:root`:

| Token              | Description                         |
| ------------------ | ----------------------------------- |
| `--primary`        | Background color                    |
| `--primary-border` | Border color, derived from `--primary` |
| `--on-primary`     | Text color, derived at build time   |

The same pattern is available for `--secondary` and `--accent`, with additional
derived helpers such as `--primary-surface` for custom CSS.

Brand classes and utilities are generated from Sass maps:

- `.primary` and `.primary-outline`
- `.bg-primary`, `.txt-primary`, `.bdr-primary`, `.outline-primary`
- the matching `secondary` and `accent` variants

### Overriding Brand Colors

To change the default brand colors, override the Sass variables before build:

```scss +code
@forward 'jtb/src/maps_and_variables/index' with (
    $primary: oklch(62% 0.19 275deg)
);
```

For custom CSS or development previews, override the CSS variables:

```scss +code
:root {
    --primary: #7c0442;
    --on-primary: #fff;
}
```

Runtime overrides affect only CSS that reads those variables directly. They do
not change generated utility or theme classes unless those classes are designed
to use the variables.

### What Does Not Respond to Runtime Override

Hue-scale classes (`bg-blue-500`, `teal`), semantic theme classes (`danger`,
`success`), brand theme classes (`primary`), and structural values used in SCSS
calculations are compiled to fixed values and cannot be changed at runtime.
