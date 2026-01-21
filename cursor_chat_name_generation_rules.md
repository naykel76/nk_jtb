## Architecture & File Structure

i need help to prioritize these tasks.

i want them organised into clear actionable steps

i want to work step by step and review as we got, i dont want to handle multiple  complex tasks at the same time.

play.scss is exactly that a place where we can isolate builds

**Core Module Organization:**

- `base/` - Foundation layer: typography, tables, lists, auto-spacing, root
  variables
- `components/` - Minimal UI patterns: buttons, accordions, menus, navbars,
  tabs, forms
- `utilities/` - 15+ granular utility modules (alignment, backgrounds, border,
  display, effects, flexbox, grid, layout, sizing, spacing, themes, transforms,
  transitions, typography, interactivity)
- `functions/` - Helper functions split by concern: classes, color, strings,
  map/list helpers, resolvers, normalizers
- `mixins/` - Build system: `build-classes`, `make-classes`,
  `build-magic-classes`, media queries, state, themes
- `maps_and_variables/` - Centralized configuration: base, colors, typography,
  forms, components, property-maps, value-maps, config

**Build Entry Point:** `build.scss` loads base → components → forms → utilities
in cascade order

**Strengths:**

- Clear separation between generation logic (mixins/functions) and data
  (maps_and_variables)
- Modular utility organization allows selective imports
- Component layer is appropriately minimal

**Weaknesses:**

- `common-tools.scss` acts as monolithic import barrel - hides dependencies
- `mixins/_make-classes-old.scss` exists but is deprecated (still imported in
  multiple files)
- Functions module has granular files but some overlap (e.g., `resolvers` vs
  `helpers`)

## Naming Conventions & Patterns

**Class Name Structure:**

```
{breakpoint}:{property}-{variant/value}
```

**Prefix System:**

- Properties: `m-` (margin), `p-` (padding), `bdr-` (border), `txt-` (text),
  `gap-`, `fw` (font-weight)
- Components: `btn`, `dd` (dropdown), `icon`, `lst-` (list), `tbl-` (table)
- Configurable via `$border-prefix`, `$button-prefix`, etc.

**Value Conventions:**

- Direct numeric: `m-1` = 1rem, `p-2` = 2rem
- Decimal notation: `gap-1.5` = 1.5rem
- Sub-1 values drop leading zero: `gap-05` = 0.5rem
- Base variant (no suffix): `mxy`, `gap` use configured defaults
- Semantic variants: `gap-sm`, `mxy-lg`

**Unit Handling:**

- `rem` is default unit, stripped from class names
- `px` used for borders/outlines, also stripped (configurable via
  `$unit-omitted-from-class`)
- Other units preserved in class names

**Position Keys:**

- Logical properties used throughout: `block-start`, `inline-end`, etc.
- Axis shortcuts: `x` (inline), `y` (block), `xy` (all), `t/b/l/r` (edges)
- `$xy-axis-exclusions` allows omitting axis keys (e.g., `bdr` instead of
  `bdr-xy`)

**Inconsistencies:**

- Mix of prefix patterns: `fw` (no dash) vs `txt-` (with dash) vs `false` (no
  prefix)
- Some components use kebab-case (`flex-centered`) while others use abbreviated
  prefixes (`btn`)
- Position-based classes inconsistently omit axis keys

## Class Generation Approach

**Three-Stage Pipeline:**

1. **Normalization** (`functions/_normalise-config.scss`):
   - Accepts raw property config (prefix, values, unit, positions, breakpoints,
     states)
   - Resolves prefix (false → '', null → property name)
   - Processes each value: normalizes key-value pairs, handles units, generates
     suffix
   - Outputs standardized structure with `variants` map: `class-name → (value,
     suffix)`

2. **Makers** (`mixins/_make-classes.scss`):
   - `make-base-class()` - Layer 1: base classes (no media queries)
   - `make-responsive-class()` - Layer 2: breakpoint variants
   - `make-state-class()` - Layer 3: hover/focus/active states
   - `make-responsive-state-class()` - Layer 4: combined responsive + states
   - Hardcoded breakpoint handling (sm/md/lg/xl/xxl) - not DRY

3. **Builders** (`mixins/_build-classes.scss`):
   - `build-classes()` - Main controller, loops through properties map
   - `build-base-layer()` / `build-responsive-layer()` - Layer orchestration
   - `build-composite-classes()` - Multi-property shortcuts (e.g.,
     `flex-centered`)
   - `build-magic-classes()` - Responsive patterns (e.g., `gap-2-3-5`)

**Special Case: Magic Classes**

- Pattern-based responsive utilities: `cols-3-2-1`, `gap-5-3-2`, `py-5-3-2`
- Values read right-to-left: last value = base, second-to-last = sm, etc.
- Generates cascading responsive styles in single class

**Position-Based Generation:**

- Split pattern properties: `border-{position}-width` (border-top-width)
- Suffix pattern properties: `margin-{position}` (margin-block-start)
- `$split-properties` list defines which pattern to use
- `build-property-map()` applies values to each position using function
  reference

**Strengths:**

- Clear separation of concerns across three stages
- Normalizer eliminates boilerplate in builders
- Position-based system handles logical properties elegantly

**Weaknesses:**

- Two builder systems exist: `build-classes()` (old) and `build-classes-new()`
  (both in use)
- Makers have hardcoded breakpoint checks (repeated if/else blocks for
  sm/md/lg/xl/xxl)
- No abstraction for breakpoint media query generation - DRY violation
- State layer (Layer 3/4) is commented out in `build-classes-new()`
- Magic classes use separate pipeline (`build-magic-classes`,
  `build-magic-grid`)

## Available Utility Classes

**Spacing:**

- Margin/padding: all positions (xy, x, y, t, b, l, r), values 0-5 + variants
  (auto, base)
- Gap: 0-5, variants (sm, base, lg)
- Space-x/space-y: child combinator utilities
- Magic: `my-5-3-2`, `py-3-2-1` (responsive patterns)

**Layout:**

- Display: block, flex, inline, inline-block, inline-flex, table, hidden
- Position: static, absolute, fixed, relative, sticky
- Inset: top/right/bottom/left, variants (auto, full) + numeric (0-4)
- Z-index: 0, 1, 50, 100, bottom (-1), top (999)
- Visibility: visible, invisible, collapse

**Flexbox:**

- Direction: column, row, column-reverse, row-reverse
- Wrap: wrap, nowrap, wrap-reverse
- Grow/shrink: 0, 1
- Order: 1-8
- Composite: `flex-col`, `flex-row`, `flex-centered`, `flex-vac`, `flex-hac`

**Grid:**

- Template columns: 1-12 (`cols-1` through `cols-12`)
- Column span: 1-12 (`col-span-1` through `col-span-12`)
- Gap: shared with spacing
- Magic: `cols-4-3-2-1`, `cols-3-2-1` (responsive grid patterns)

**Sizing:**

- Width/height: auto, full, fit, max, min, screen (vh), breakpoints (xs-xxl),
  rem (0-24), px (200-600)

**Border:**

- Width: 1-16px, base (1px) - all positions including corners
- Radius: 0-2, variants (xs, sm, base, lg, xl, full) - corners supported
- Style: solid, dashed, dotted, double, hidden, none
- Color: all theme colors + OKLCH scales (50-950 for each hue)

**Outline:**

- Width: same as border-width
- Style: same as border-style
- Color: same as border-color
- Offset: same as border-width values
- Auto-applies `outline-style: solid` to `.outline` and `[class^='outline-']`

**Colors/Themes:**

- Context-aware theme classes: `primary`, `secondary`, `accent`, `danger`,
  `info`, `success`, `warning`
- Base colors: 22 hues (red, orange, amber, yellow, lime, green, emerald, teal,
  cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray,
  zinc, neutral, stone)
- OKLCH scales: 50-950 for each hue (e.g., `red-500`, `blue-200`)
- Outline variants: `{color}-outline` (transparent bg, colored border/text,
  fills on hover)
- Advanced themes: `danger-light`, `info-light`, `warning-light`,
  `success-light`

**Effects:**

- Opacity: 0-100 (increments of 10), variants (invisible, semi, visible)
- Shadow: none, xs, sm, md, lg, xl, xxl, inner

**Typography:**

- Font family: serif, sans, mono
- Font weight: `fw` prefix (values not shown in reviewed files)
- Font style: italic, normal
- Text align: `ta` prefix - l, r, c, j (left, right, center, justify)
- Text decoration: strike, underline, overline, underline-overline
- Text transform: upper, lower, capitalize, normal-case
- Text wrap: wrap, balance, nowrap, pretty
- White space: normal, nowrap, pre, pre-line, pre-wrap
- Line height: `lh-` prefix (values not shown)

**Interactivity:**

- (Not detailed in reviewed files)

**Transforms:**

- (Not detailed in reviewed files)

**Transitions:**

- (Referenced but not detailed)

**Missing vs Tailwind:**

- Animation utilities (spin, pulse, bounce)
- Aspect ratio
- Backdrop filters (blur, brightness, contrast, etc.)
- Background patterns/textures
- Break (inside/before/after)
- Columns (multi-column layout)
- Content utilities
- Divide utilities
- Filter effects
- Float
- Object fit/position
- Overflow utilities (incomplete if present)
- Overscroll behavior
- Placeholder styling
- Pointer events
- Ring utilities (focus rings)
- Screen reader utilities
- Scroll behavior/snap
- SVG fill/stroke
- Table layout
- Touch action
- User select
- Vertical align (incomplete if present)
- Will-change

## Configuration System

**Three-Map Pattern** (for properties with scales + semantics):

```scss
$property-values: ()     // Numeric scale
$property-variants: ()   // Named semantics  
$property-map: smart-merge($property-variants, $property-values)
```

Example:

```scss
$margin-variants: (base: $base-gap, auto: auto)
$margin-map: smart-merge($margin-variants, $spacing-values)
```

**Single Map Pattern** (one type only):

```scss
$z-index-map: (0, 1, 50, 100, (bottom: -1), (top: 999))
```

**Critical: Merge Order Affects Cascade**

- `smart-merge($variants, $values)` ← correct (variants first = lower cascade
  priority)
- `smart-merge($values, $variants)` ← wrong (base class comes last, can't be
  overridden)

**Value Map Structure:**

```scss
$property-map: (
    prefix: 'class-prefix-',
    values: $merged-values-map,
    unit: 'rem',
    positions: $logical-position-map,  // optional
    breakpoints: (sm, md, lg),         // optional
    states: (hover, focus),            // optional
    omit-axis-keys: (xy),              // optional
    child-combinator: true             // optional
)
```

**Default Overridability:**

- All maps use `!default` flag
- Users can override before import

**Configuration Locations:**

- Foundation tokens: `_base.scss` (brand colors, fonts, spacing, breakpoints)
- Color system: `_colors.scss` (theme colors, base colors, OKLCH scales)
- Typography: `_typography.scss` (sizes, weights, line heights)
- Forms: `_forms.scss` (control padding, sizing)
- Components: `_components.scss` (button, navbar, table settings)
- Property enumerations: `_property-maps.scss` (display, position,
  border-styles)
- Utility value maps: `_value-maps.scss` (spacing, sizing, borders, effects)
- System config: `_config.scss` (prefixes, position maps, exclusions)

**Breakpoints:**

```scss
$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1600px
)
```

**Responsive Variants:**

- `{breakpoint}:` - from breakpoint up (mobile-first)
- `on-{breakpoint}:` - only at breakpoint (non-cascading)
- `to-{breakpoint}:` - up to breakpoint (desktop-first)
- Container query variants: `cq-{breakpoint}:`

## Build Process

**Scripts** (from package.json):

```bash
npm run build    # Vite production build
npm run dev      # Vite dev server + Sass watch
npm run watch    # Sass watch only (build.scss → build.css)
npm run play     # Experimental playground
```

**Sass Compilation:**

- Dart Sass 1.86.3 (modern Sass with module system)
- Watch mode compiles `src/build.scss` to `dist/css/build.css`
- No source maps in production

**PostCSS Pipeline:**

- Autoprefixer 10.4.21 configured
- Vite handles PostCSS processing in build

**Vite Configuration:**

- Opens `/dev.html` by default
- Chunk size warning at 1000kb
- Separates highlight.js and vendor chunks

**Stylelint:**

- Standard SCSS config
- Order plugin for property sorting
- Lint tasks for full codebase or base/ folder only

**No Build-Time Optimization:**

- No PurgeCSS or CSS tree-shaking
- All utilities compiled regardless of usage
- Full color scale (OKLCH 50-950 for all hues) always included

## Missing Features vs Tailwind

**Major Gaps:**

Utilities:

- Animation (spin, pulse, bounce, ping)
- Aspect ratio
- Backdrop filters (blur, brightness, saturate, etc.)
- Break properties (break-inside, break-before, break-after)
- Columns (CSS multi-column layout)
- Container queries (partial - only display utilities)
- Divide utilities (borders between children)
- Filter effects (blur, brightness, contrast, grayscale, etc.)
- Float (left, right, none)
- Mix-blend-mode / isolation
- Object fit/position
- Overflow (x, y, scroll, auto, hidden, clip)
- Overscroll behavior
- Placeholder color/opacity
- Pointer events (none, auto)
- Ring utilities (focus rings with offset)
- Screen reader utilities (sr-only)
- Scroll behavior/margin/padding/snap
- SVG stroke/fill
- Table layout (auto, fixed)
- Touch action
- User select
- Vertical alignment
- Will-change
- Writing mode

Component/Pattern Features:

- Gradient utilities (referenced but minimal implementation)
- Arbitrary values (e.g., `w-[137px]`)
- Arbitrary properties (e.g., `[mask-type:luminance]`)
- Arbitrary variants (e.g., `[&:nth-child(3)]:`)
- Modifiers for variants (e.g., `hover:bg-sky-700/50` for opacity)
- Important modifier (e.g., `!font-medium`)
- Group/peer state variants
- Dark mode variants (referenced but not implemented)
- Print media variants
- Motion preference variants (prefers-reduced-motion)
- Contrast variants (prefers-contrast)
- RTL/LTR variants

Build Features:

- JIT (Just-In-Time) compilation
- Content scanning for used classes
- CSS purging
- Class detection in JS/HTML
- Custom variants registration
- Plugin system

## Inconsistencies & Technical Debt

**Dual Build Systems:**

- `build-classes()` (old implementation in use)
- `build-classes-new()` (new implementation, used for display/visibility)
- Both exist, creating confusion about which to use

**Deprecated Code:**

- `mixins/_make-classes-old.scss` marked as old but still imported in multiple
  files
- Commented-out state layer code in `build-classes.scss` (Layer 3 & 4)

**Hardcoded Breakpoints:**

- Media query mixins manually check `sm`, `md`, `lg`, `xl`, `xxl` with if/else
- No loop or abstraction - repeated 5 times in multiple files
- Adds new breakpoint requires editing multiple files

**Naming Inconsistency:**

- Prefix patterns: `fw` vs `txt-` vs `false` vs `$property-`
- Component prefixes: `btn` (abbrev) vs `dropdown` (full word in older code)
- Position keys: `t/b/l/r` vs full words inconsistent across configs

**Configuration Confusion:**

- `$xy-axis-exclusions` only contains `('bdr-')` but pattern could apply to
  others
- `$unit-omitted-from-class` controls global behavior but not documented in
  config
- Merge order critical (`smart-merge($variants, $values)`) but only mentioned in
  comments

**Position Property Handling:**

- Split vs suffix pattern determined by `$split-properties` list
- List is small (border-width, border-style, border-color, border-radius)
- Adding new split-pattern property requires editing hardcoded list

**Magic Classes Separation:**

- Magic classes use entirely different pipeline (`build-magic-classes`,
  `build-magic-grid`)
- Can't leverage same responsive infrastructure as regular utilities
- Code duplication for breakpoint handling

**Import Structure:**

- `common-tools.scss` is barrel import - hides actual dependencies
- Makes refactoring difficult, unclear what each file actually needs

**State Utilities:**

- State layer (hover/focus/active variants) commented out in new builder
- Only basic hover/focus work, no `hover:bg-red-500` pattern
- Not consistently available across utilities

**Responsive Variants:**

- Regular classes: `{bp}:`, `on-{bp}:`, `to-{bp}:`
- Container queries: `cq-{bp}:` (only for display utilities)
- Inconsistent availability across utility categories

**Documentation vs Implementation:**

- Docs reference features not implemented (state variants, full container query
  support)
- Some utility files reference mixins that don't exist or are commented out
- `workflow.md` describes 4-layer system but Layer 3/4 are disabled

## Performance Considerations

**CSS Size:**

- No tree-shaking or purging - all utilities always compiled
- Full OKLCH color scale (22 hues × 11 shades = 242 colors) × multiple
  properties
- Responsive variants multiply class count by 5 (base + 4 breakpoints minimum)
- Container query variants add another multiplier
- Estimated compiled CSS: 500KB+ (uncompressed)

**Build Performance:**

- Dart Sass compilation reasonably fast
- Vite dev server with HMR
- No slowdowns reported, but large property maps (colors especially) could
  impact

**Runtime Performance:**

- Build-time only, no JavaScript
- No runtime theme switching or CSS-in-JS overhead
- Logical properties (`block-start`, `inline-end`) have excellent browser
  support

**Optimization Opportunities:**

- Add PurgeCSS or similar for production
- Split utilities into separate files for selective import
- Generate color utilities on-demand vs all upfront
- Use CSS custom properties for frequently-changed values (themes, spacing)

**Browser Support:**

- Uses modern CSS: logical properties, `:where()`, container queries
- No fallbacks for older browsers
- Autoprefixer handles vendor prefixes
- OKLCH color space requires recent browsers (2023+)

## Documentation Gaps

**Missing API Docs:**

- No complete property reference (which properties support positions?
  breakpoints? states?)
- Incomplete prefix list (docs say "not comprehensive")
- State variant system documented but not implemented
- Magic class patterns not explained in conventions doc

**Function/Mixin Signatures:**

- Most functions have good inline comments
- Builder mixins lack complete parameter documentation
- No centralized API reference

**Configuration Guide:**

- Three-map pattern explained but not all maps use it
- Merge order critical but buried in comments
- No migration guide for config changes

**Architecture Decisions:**

- Why two builder systems exist not documented
- Split vs suffix property pattern not explained in docs
- Position map (logical vs physical) usage unclear

**Examples:**

- Limited real-world component examples
- Magic classes documented minimally
- Responsive patterns well-documented but edge cases missing

**Build/Integration:**

- No framework integration guides (Next.js, Vite, Laravel, etc.)
- No CDN usage instructions
- No versioning/changelog strategy documented

---

**Overall Assessment:**

JTB is a well-architected utility framework with a sophisticated class
generation system. Its three-stage pipeline (normalize → make → build) is
cleaner than many competitors. The position-based system elegantly handles
logical properties for internationalization.

Core strengths: minimal components, context-aware theming (single `.primary`
class works everywhere), readable class names (numbers = rem values), logical
property support.

Major technical debt: dual builder systems, hardcoded breakpoint handling,
disabled state variants, massive color scales compiled unconditionally,
deprecated code still imported.

To reach production maturity: consolidate builders, implement proper state
variants, add CSS purging, document the complete API, resolve naming
inconsistencies, and abstract breakpoint handling.

```plaintext
{breakpoint}:{property}-{variant/value}
```

```scss
$property-values: ()     // Numeric scale
$property-variants: ()   // Named semantics  
$property-map: smart-merge($property-variants, $property-values)
```

```scss
$margin-variants: (base: $base-gap, auto: auto)
$margin-map: smart-merge($margin-variants, $spacing-values)
```

```scss
$z-index-map: (0, 1, 50, 100, (bottom: -1), (top: 999))
```

```scss
$property-map: (
    prefix: 'class-prefix-',
    values: $merged-values-map,
    unit: 'rem',
    positions: $logical-position-map,  // optional
    breakpoints: (sm, md, lg),         // optional
    states: (hover, focus),            // optional
    omit-axis-keys: (xy),              // optional
    child-combinator: true             // optional
)
```

```scss
$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1600px
)
```

```shellscript
npm run build    # Vite production build
npm run dev      # Vite dev server + Sass watch
npm run watch    # Sass watch only (build.scss → build.css)
npm run play     # Experimental playground
```
