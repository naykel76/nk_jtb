# JTB Framework Variable System (review)

<p class="lead">
The JTB SCSS Framework variable system centralizes all foundational tokens, scales, and property maps. It enables systematic, override-friendly configuration for utilities and components, ensuring maintainability and extensibility. Developers and maintainers use variables and maps as the single source-of-truth for branding, spacing, breakpoints, sizing, and more.
</p>

## Structure (review)

All variables and maps are organized in `src/maps_and_variables/` with category
files for base, colors, value maps, property maps, typography, config, forms,
and components.

> <strong>Component separation:</strong> Variables are never hardcoded or
> scattered; all core tokens (colors, spacing, breakpoints, etc.) live in base
> files, domain-specific variables (eg. forms, components) live in their
> respective files.

```bash +code
src/maps_and_variables/
├── _base.scss          # Foundation tokens (colors, spacing, breakpoints)
├── _colors.scss        # Theme/base colors, OKLCH, Tailwind refs
├── _value-maps.scss    # Numeric & semantic utility maps (spacing, sizing, grid, etc)
├── _typography.scss    # Font sizes, weights, line heights, text color maps
├── _config.scss        # Build system config, prefixes, logical prop maps
├── _forms.scss         # Form control variables (input/select/textarea)
├── _components.scss    # Structure-only component variables
└── index.scss          # Forwarder for category imports
```

> All variables use `!default` so any value can be overridden via user config.

## Basic Usage (review)

Use variables/maps via SCSS import:

```scss +code
@use 'src/maps_and_variables/index' as *;
// Now $primary, $breakpoints, $border-width-map, etc. are available.
```

### Most common workflows (review)

- **Add new utility value:**
  - Extend numeric/semantic map in `_value-maps.scss` (eg. add a new gap size)
  - Merge via `smart-merge()`; keep semantic before numeric for CSS cascade
  - Reference in utility builder functions

- **Update base tokens (color, spacing, breakpoints):**
  - Modify only in `_base.scss` to maintain consistency
  - Avoid duplicating values in component/utility files

- **Change class prefixes or logical mapping:**
  - Update in `_config.scss` (utility/component prefixes, logical property maps)

## Example: Adding a New Spacing Utility Value (review)

```scss +code
// In _value-maps.scss:
$spacing-values: ( ... , 6 ) !default;   // Add '6' rem
$margin-map: smart-merge($margin-variants, $spacing-values) !default;
```

## Advanced: Logical Property Maps (review)

<p class="lead">JTB uses logical property mapping for internationalization and consistent directionality.</p>

- `$logical-position-map`: Keys (x, y, t, l, etc) → block/inline logical CSS
  props
- `$logical-edges-map`: Edges only, removes composite axes
- `$border-radius-corners-map`, `$border-radius-corners-map-logical`: Maps for
  border-radius corners

Example override:

```scss +code
// Add a new logical direction in _config.scss
$logical-position-map: (
    ...,
    start: block-start,
    end: block-end
) !default;
```

## Responsive Breakpoints (review)

- Defined in `_base.scss` as `$breakpoints`.
- Use `map.get($breakpoints, sm)` for responsive utility generation.
- Default responsive variants via `$responsive-variants: map.keys($breakpoints)
  !default;`

## SCSS Variables vs CSS Custom Properties (review)

Use SCSS variables for structural values that are needed at compile time —
spacing used in calculations, negative margins, anything a mixin depends on.
These cannot be CSS custom properties because they are resolved before the
browser sees them.

Use CSS custom properties for anything that needs to be overridable at runtime
— colours, border radius, typography. These are defined in `:root` and can be
overridden by modifiers, utilities, or developer stylesheets without a rebuild.

A value should not exist as both — pick one based on whether it needs to be
overridable at runtime.

## CSS Custom Properties (review)

JTB compiles SCSS variables into CSS custom properties at `:root`. This is a
convenience layer — it does not replace the SCSS variable system, but it enables
runtime overrides without a rebuild.

What gets emitted as CSS vars:

- All base and OKLCH colors (`--primary`, `--gray-200`, etc.)
- Brand tokens (`--primary`, `--secondary`, `--accent`)
- Base tokens (`--text-color`, `--link-color`, `--bg-body`)

The SCSS variables remain the primary configuration path. CSS custom properties
are generated from them automatically. To change a value at compile time, update
the SCSS variable. To override at runtime (e.g. via JS or a user stylesheet),
override the CSS custom property.

```css +code
/* Runtime override — no rebuild needed */
:root {
    --primary: oklch(55% 0.2 250);
}
```

## Theming & Color Maps (review)

- Centralized in `_colors.scss`—theme tokens, OKLCH system, Tailwind refs
- Utilities that need both roles and hues (for example, themed buttons) locally call `map.merge($theme-colors, $base-colors)` instead of using a global `$color-map`.

## Dangerous Patterns (review)

- Never hardcode values in component or utility files
- Never mutate variable/map keys (breaks systematic class gen)
- Always use `!default` for override safety
- Changing merge order in maps disrupts CSS cascade
- Changing prefixes or logical maps requires build tool updates and
  documentation

## For Maintainers (review)

- Enforce variable usage and cascade order via review
- Keep mapping up-to-date for i18n and browser compatibility
- Announce and document any prefix/class map changes

## For Developers (review)

- Always import from `maps_and_variables`—don't copy tokens elsewhere
- Override in your project config, not in vendor files
- Extend maps, don't replace

## Reference (review)

- See each category file for detailed variable lists and comments
- Follow add/modify examples to maintain override-friendly, scalable config.
