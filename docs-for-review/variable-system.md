# JTB Framework Variable System

<p class="lead">
The JTB SCSS Framework variable system centralizes all foundational tokens, scales, and property maps. It enables systematic, override-friendly configuration for utilities and components, ensuring maintainability and extensibility. Developers and maintainers use variables and maps as the single source-of-truth for branding, spacing, breakpoints, sizing, and more.
</p>

## Structure

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
├── _property-maps.scss # CSS property enums (display, border, typography)
├── _typography.scss    # Font sizes, weights, line heights, text color maps
├── _config.scss        # Build system config, prefixes, logical prop maps
├── _forms.scss         # Form control variables (input/select/textarea)
├── _components.scss    # Structure-only component variables
└── index.scss          # Forwarder for category imports
```

> All variables use `!default` so any value can be overridden via user config.

## Basic Usage

Use variables/maps via SCSS import:

```scss +code
@use 'src/maps_and_variables/index' as *;
// Now $primary, $breakpoints, $border-width-map, etc. are available.
```

### Most common workflows

- **Add new utility value:**
  - Extend numeric/semantic map in `_value-maps.scss` (eg. add a new gap size)
  - Merge via `smart-merge()`; keep semantic before numeric for CSS cascade
  - Reference in utility builder functions

- **Update base tokens (color, spacing, breakpoints):**
  - Modify only in `_base.scss` to maintain consistency
  - Avoid duplicating values in component/utility files

- **Change class prefixes or logical mapping:**
  - Update in `_config.scss` (utility/component prefixes, logical property maps)

## Example: Adding a New Spacing Utility Value

```scss +code
// In _value-maps.scss:
$spacing-values: ( ... , 6 ) !default;   // Add '6' rem
$margin-map: smart-merge($margin-variants, $spacing-values) !default;
```

## Advanced: Logical Property Maps

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

## Responsive Breakpoints

- Defined in `_base.scss` as `$breakpoints`.
- Use `map.get($breakpoints, sm)` for responsive utility generation.
- Default responsive variants via `$responsive-variants: map.keys($breakpoints)
  !default;`

## Theming & Color Maps

- Centralized in `_colors.scss`—theme tokens, OKLCH system, Tailwind refs
- `map.merge()` creates `$color-map` for unified access

## Dangerous Patterns

- Never hardcode values in component or utility files
- Never mutate variable/map keys (breaks systematic class gen)
- Always use `!default` for override safety
- Changing merge order in maps disrupts CSS cascade
- Changing prefixes or logical maps requires build tool updates and
  documentation

## For Maintainers

- Enforce variable usage and cascade order via review
- Keep mapping up-to-date for i18n and browser compatibility
- Announce and document any prefix/class map changes

## For Developers

- Always import from `maps_and_variables`—don't copy tokens elsewhere
- Override in your project config, not in vendor files
- Extend maps, don't replace

## Reference

- See each category file for detailed variable lists and comments
- Follow add/modify examples to maintain override-friendly, scalable config.
