This is a pure analysis/documentation task — no file creation tools needed.
Here's the full breakdown:

---

## SCSS Utility Framework — Class Reference

### Spacing

| Class Pattern                 | CSS Property          | Example Classes                     | Notes                                                 |
| ----------------------------- | --------------------- | ----------------------------------- | ----------------------------------------------------- |
| `m{axis}-{value}`             | margin (logical)      | `mx-1`, `my-2`, `mt-0.5`, `mb-auto` | Uses logical props: `block-start`, `inline-end`, etc. |
| `p{axis}-{value}`             | padding (logical)     | `px-1`, `py-2`, `p-base`            | Same axis system as margin                            |
| `space-x-{value}`             | `margin-inline-start` | `space-x-1`, `space-x-base`         | Child combinator (`: where(.space-x-1 > *)`)          |
| `space-y-{value}`             | `margin-block-start`  | `space-y-1`, `space-y-base`         | Child combinator                                      |
| `-space-x-px` / `-space-y-px` | negative margin       | `-space-x-px`                       | Only `-1px` variant exists                            |
| `p-ctrl-sm/base/lg`           | padding shorthand     | `p-ctrl`, `p-ctrl-lg`               | Composite: block + inline padding                     |
| `py-{n}-{n}-{n}`              | padding-y magic       | `py-5-3-2`, `py-3-2-1`              | Responsive magic classes                              |
| `my-{n}-{n}`                  | margin-y magic        | `my-5-3`, `my-3-2-1`                | Responsive magic classes                              |

---

### Sizing

| Class Pattern    | CSS Property               | Example Classes              | Notes                           |
| ---------------- | -------------------------- | ---------------------------- | ------------------------------- |
| `h-{value}`      | `height`                   | `h-10`, `h-full`, `h-screen` | rem + px variants               |
| `w-{value}`      | `width`                    | `w-20`, `w-full`, `w-sm`     | Includes breakpoint named sizes |
| `min-h-{value}`  | `min-height`               | `min-h-0`, `min-h-screen`    | —                               |
| `max-h-{value}`  | `max-height`               | `max-h-full`                 | —                               |
| `min-w-{value}`  | `min-width`                | `min-w-sm`, `min-w-0`        | —                               |
| `max-w-{value}`  | `max-width`                | `max-w-xl`, `max-w-full`     | —                               |
| `wh-{value}`     | `width` + `height`         | `wh-4`, `wh-10`              | Square shorthand (rem only)     |
| `min-wh-{value}` | `min-width` + `min-height` | `min-wh-4`                   | Square min shorthand            |

---

### Layout & Position

| Class Pattern                           | CSS Property       | Example Classes                    | Notes                     |
| --------------------------------------- | ------------------ | ---------------------------------- | ------------------------- |
| `static/absolute/fixed/relative/sticky` | `position`         | `absolute`, `sticky`               | No prefix                 |
| `top/bottom/left/right-{value}`         | positioning        | `top-0`, `left-1`                  | rem + auto/full           |
| `inset-{value}`                         | `inset`            | `inset-0`, `inset-auto`            | —                         |
| `z-{value}`                             | `z-index`          | `z-above`, `z-high`, `z-0`         | Named semantic values     |
| `overflow-{value}`                      | `overflow`         | `overflow-hidden`, `overflow-auto` | Also x/y variants         |
| `float-{value}`                         | `float`            | `float-left`, `float-right`        | —                         |
| `container{-variant}`                   | `width` + `margin` | `container`, `container-lg`        | Uses `Min(95%, size)`     |
| `sticky`                                | position + top + z | `.sticky`                          | Hardcoded in `_misc.scss` |

---

### Display & Visibility

| Class Pattern                                    | CSS Property             | Example Classes        | Notes                            |
| ------------------------------------------------ | ------------------------ | ---------------------- | -------------------------------- |
| `block/flex/inline/inline-flex/table/table-cell` | `display`                | `flex`, `inline-block` | `hidden` maps to `display: none` |
| `invisible/visible/collapse`                     | `visibility`             | `invisible`, `visible` | —                                |
| `{bp}:block`, `{bp}:flex`, `{bp}:hidden`         | responsive display       | `md:flex`, `lg:hidden` | Mobile-first                     |
| `on-{bp}:hidden`, `on-{bp}:flex`                 | display at exact range   | `on-sm:hidden`         | Single breakpoint only           |
| `to-{bp}:hidden`, `to-{bp}:flex`                 | display up to breakpoint | `to-md:hidden`         | Max-width / desktop-first        |

---

### Flexbox

| Class Pattern                     | CSS Property                     | Example Classes       | Notes                             |
| --------------------------------- | -------------------------------- | --------------------- | --------------------------------- |
| `flex-{1/2/auto/initial/none}`    | `flex` shorthand                 | `flex-1`, `flex-none` | —                                 |
| `flex-col` / `flex-row`           | `display` + `flex-direction`     | —                     | Composite class                   |
| `flex-centered`                   | flex + align + justify center    | —                     | Composite                         |
| `flex-vac`                        | flex + `align-items: center`     | —                     | Vertical axis center              |
| `flex-hac`                        | flex + `justify-content: center` | —                     | Horizontal axis center            |
| `flex-wrap/nowrap/wrap-reverse`   | `flex-wrap`                      | `flex-wrap`           | —                                 |
| `flex-column-reverse/row-reverse` | `flex-direction`                 | —                     | Note: not `flex-col-reverse`      |
| `fg0/fg1`                         | `flex-grow`                      | —                     | Prefix from `$flex-grow-prefix`   |
| `fs0/fs1`                         | `flex-shrink`                    | —                     | Prefix from `$flex-shrink-prefix` |
| `order-{1–8}`                     | `order`                          | `order-2`             | —                                 |

---

### Grid

| Class Pattern      | CSS Property                  | Example Classes               | Notes                        |
| ------------------ | ----------------------------- | ----------------------------- | ---------------------------- |
| `.grid`            | `display: grid` + default gap | —                             | Base class with gap baked in |
| `cols-{n}`         | `grid-template-columns`       | `cols-3`, `cols-12`           | 1–12 columns                 |
| `col-span-{n}`     | `grid-column`                 | `col-span-4`                  | 1–12 span                    |
| `gap-{value}`      | `gap`                         | `gap-1`, `gap-base`, `gap-sm` | rem + named variants         |
| `cols-{n}-{n}-{n}` | responsive grid magic         | `cols-4-2-1`                  | Responsive magic             |
| `gap-{n}-{n}`      | responsive gap magic          | `gap-5-3`, `gap-4-2`          | Responsive magic             |

---

### Alignment

| Class Pattern                      | CSS Property              | Example Classes                     | Notes                   |
| ---------------------------------- | ------------------------- | ----------------------------------- | ----------------------- |
| `content-{value}`                  | `align-content`           | `content-center`, `content-between` | —                       |
| `items-{value}`                    | `align-items`             | `items-center`, `items-start`       | —                       |
| `self-{value}`                     | `align-self`              | `self-center`, `self-stretch`       | —                       |
| `justify-{value}`                  | `justify-content`         | `justify-center`, `justify-between` | —                       |
| `justify-items-{value}`            | `justify-items`           | —                                   | No custom prefix        |
| `justify-self-{value}`             | `justify-self`            | —                                   | —                       |
| `place-content/items/self-{value}` | place-* shorthands        | `place-content-center`              | —                       |
| `ha-c/ha-l/ha-r`                   | `align-content` shortcuts | `ha-c`                              | Horizontal align custom |
| `va-b/va-c/va-t`                   | `align-items` shortcuts   | `va-c`                              | Vertical align custom   |

---

### Typography

| Class Pattern                             | CSS Property                       | Example Classes                          | Notes                     |
| ----------------------------------------- | ---------------------------------- | ---------------------------------------- | ------------------------- |
| `txt-{color}`                             | `color`                            | `txt-blue`, `txt-primary`, `txt-red-500` | Full oklch + theme colors |
| `hover:txt-{color}` / `focus:txt-{color}` | color on state                     | `hover:txt-primary`                      | —                         |
| `font-{family}`                           | `font-family`                      | `font-sans`, `font-mono`, `font-serif`   | —                         |
| `font-{weight}`                           | `font-weight`                      | `font-bold`, `font-semibold`             | Named weights             |
| `txt-{size}rem`                           | `font-size`                        | `txt-1`, `txt-1.5`                       | Numeric rem values        |
| `txt-xs/sm/base/lg/xl/2xl`                | font-size + line-height            | `txt-sm`, `txt-xl`                       | Composite classes         |
| `lead`                                    | `font-size: 1.125rem` + relaxed lh | `lead`                                   | Intro/lead text           |
| `txt-italic/normal`                       | `font-style`                       | `txt-italic`                             | —                         |
| `lh-{value}`                              | `line-height`                      | `lh-tight`, `lh-normal`, `lh-loose`      | —                         |
| `list-{type}`                             | `list-style-type`                  | `list-disc`, `list-none`                 | —                         |
| `tal/tac/tar/taj`                         | `text-align`                       | `tac` (center), `tal` (left)             | Short aliases             |
| `txt-strike/underline/overline`           | `text-decoration`                  | `txt-underline`                          | With hover/focus states   |
| `txt-upper/lower/capitalize/normal-case`  | `text-transform`                   | `txt-upper`                              | —                         |
| `txt-wrap/balance/nowrap/pretty`          | `text-wrap`                        | `txt-balance`                            | —                         |
| `whitespace-{value}`                      | `white-space`                      | `whitespace-nowrap`                      | —                         |

---

### Color & Backgrounds

| Class Pattern                                                 | CSS Property                      | Example Classes                       | Notes                               |
| ------------------------------------------------------------- | --------------------------------- | ------------------------------------- | ----------------------------------- |
| `bg-{color}`                                                  | `background-color`                | `bg-blue`, `bg-primary`, `bg-red-500` | base + oklch colors; state variants |
| `hover:bg-{color}` / `focus:bg-{color}` / `active:bg-{color}` | bg on state                       | `hover:bg-primary`                    | —                                   |
| `bg-stripes-{color}`                                          | `background` (repeating gradient) | `bg-stripes-blue`                     | 3px diagonal stripes                |
| `bg-stripes-wide-{color}`                                     | `background` (repeating gradient) | `bg-stripes-wide-red`                 | 15px wide stripes                   |
| `bg-linear-to-{dir}`                                          | `background-image` (gradient)     | `bg-linear-to-r`, `bg-linear-to-br`   | Uses CSS vars `--from`/`--to`       |
| `from-{color}`                                                | `--from` CSS variable             | `from-blue`, `from-primary`           | Used with `bg-linear-to-*`          |
| `to-{color}`                                                  | `--to` CSS variable               | `to-red-500`                          | Used with `bg-linear-to-*`          |

---

### Theming

| Class Pattern                                         | Description                                         | Example Classes                     | Notes                                      |
| ----------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ------------------------------------------ |
| `{color-name}`                                        | Full theme: bg + border + text color                | `primary`, `danger`, `blue`         | Uses `text-color()` for automatic contrast |
| `{color-name}-outline`                                | Transparent bg, colored border/text, fills on hover | `primary-outline`, `danger-outline` | —                                          |
| `danger-light/info-light/warning-light/success-light` | Semantic alert themes                               | `danger-light`                      | Light bg, dark text, colored border        |

---

### Borders

| Class Pattern              | CSS Property               | Example Classes                           | Notes                           |
| -------------------------- | -------------------------- | ----------------------------------------- | ------------------------------- |
| `bdr-{value}`              | `border-width` (all sides) | `bdr-1`, `bdr-base`                       | px; no unit in class name       |
| `bdr-{axis}-{value}`       | directional border-width   | `bdr-x-2`, `bdr-t-1`                      | Logical props                   |
| `bdr-{color}`              | `border-color`             | `bdr-primary`, `bdr-red-500`              | —                               |
| `bdr-{style}`              | `border-style`             | `bdr-solid`, `bdr-dashed`                 | —                               |
| `rounded-{value}`          | `border-radius`            | `rounded-sm`, `rounded-full`, `rounded-1` | rem values                      |
| `rounded-{corner}-{value}` | per-corner radius          | `rounded-tl-sm`, `rounded-br-full`        | Logical corners                 |
| `rounded-t/b/l/r-{value}`  | per-edge radius            | `rounded-t-lg`                            | Logical edges                   |
| `outline-{value}`          | `outline-width`            | `outline-1`, `outline-2`                  | px; auto `outline-style: solid` |
| `outline-{color}`          | `outline-color`            | `outline-primary`                         | —                               |
| `outline-offset-{value}`   | `outline-offset`           | `outline-offset-2`                        | —                               |
| `outline-{style}`          | `outline-style`            | `outline-dashed`                          | —                               |
| `ends:rounded-lg`          | first/last child radius    | —                                         | Group pill shape pattern        |

---

### Effects

| Class Pattern     | CSS Property | Example Classes                                         | Notes                 |
| ----------------- | ------------ | ------------------------------------------------------- | --------------------- |
| `opacity-{value}` | `opacity`    | `opacity-50`, `opacity-invisible`, `opacity-semi`       | 0–100 numeric + named |
| `shadow-{value}`  | `box-shadow` | `shadow-sm`, `shadow-lg`, `shadow-inner`, `shadow-none` | —                     |

---

### Transforms & Transitions

| Class Pattern                         | CSS Property                              | Example Classes                         | Notes                  |
| ------------------------------------- | ----------------------------------------- | --------------------------------------- | ---------------------- |
| `translate-{value}`                   | `transform`                               | `translate-x-full`, `translate-y-1-2`   | Named transform values |
| `-translate-{value}`                  | `transform` (negative)                    | `-translate-x-full`                     | —                      |
| `rotate-{deg}`                        | `rotate`                                  | `rotate-90`, `rotate-180`, `rotate--90` | —                      |
| `transition`                          | `transition-property` + duration + timing | —                                       | Common properties      |
| `transition-colors`                   | color-related props                       | —                                       | —                      |
| `transition-all`                      | `all`                                     | —                                       | Avoid in production    |
| `transition-opacity/shadow/transform` | targeted transitions                      | —                                       | —                      |
| `transition-none`                     | `none`                                    | —                                       | —                      |

---

### Animations

| Class                | Description          |
| -------------------- | -------------------- |
| `animate-bounce`     | Vertical bounce loop |
| `animate-pulse`      | Opacity pulse        |
| `animate-pulse-ring` | Scale + fade ring    |
| `animate-spin`       | Continuous rotation  |
| `animate-ping`       | Ping/ripple          |
| `animate-checkmark`  | SVG stroke draw      |
| `animate-circle`     | SVG circle draw      |
| `animate-none`       | Removes animation    |

---

### Interactivity & Misc

| Class Pattern                    | CSS Property                         | Example Classes                                       | Notes                         |
| -------------------------------- | ------------------------------------ | ----------------------------------------------------- | ----------------------------- |
| `cursor-{value}`                 | `cursor`                             | `cursor-pointer`, `cursor-grab`, `cursor-not-allowed` | —                             |
| `aspect-square/video/photo/auto` | `aspect-ratio`                       | —                                                     | 1:1, 16:9, 4:3, auto          |
| `divide-y`                       | `border-block-end-width` on children | —                                                     | 1px divider                   |
| `divide-y-gradient`              | gradient border bottom               | —                                                     | Red gradient variant          |
| `zebra`                          | nth-child alternating bg             | —                                                     | Skips `.primary`/`.secondary` |
| `close`                          | cursor + color states                | —                                                     | Hardcoded red active state    |
| `state-gray/blue/red/green`      | hover/active/focus using CSS vars    | —                                                     | —                             |

---

### Responsive Prefixes (apply to most utility classes)

| Prefix        | Behaviour                             | Example                |
| ------------- | ------------------------------------- | ---------------------- |
| `{bp}:`       | From breakpoint upward (mobile-first) | `md:flex`, `lg:hidden` |
| `on-{bp}:`    | At exact breakpoint range only        | `on-sm:hidden`         |
| `to-{bp}:`    | Up to breakpoint (desktop-first)      | `to-md:block`          |
| `cq-{bp}:`    | Container query from                  | `cq-md:flex`           |
| `cq-on-{bp}:` | Container query at range              | —                      |
| `cq-to-{bp}:` | Container query up to                 | —                      |

Breakpoints: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px), `xxl`
(1600px)

---

## ⚠️ Issues & Actionable Tasks

**Naming Inconsistencies**

- [ ] `flex-col` and `flex-row` exist as composites, but `flex-column-reverse`
  and `flex-row-reverse` use the full unshortened word — standardise to
  `flex-col-reverse` / `flex-row-reverse` for consistency
- [ ] `fg0/fg1` (flex-grow) and `fs0/fs1` (flex-shrink) are extremely terse and
  non-intuitive — consider renaming to `grow-0/grow-1` and `shrink-0/shrink-1`
  or at minimum documenting the prefixes prominently
- [ ] Text align uses `tal/tac/tar/taj` but this doesn't follow any pattern used
  elsewhere — consider `ta-l/ta-c/ta-r/ta-j` for consistency with the
  `$text-align-prefix: 'ta'` config
- [ ] `ha-c/ha-l/ha-r` and `va-t/va-c/va-b` are aliases for
  `align-content`/`align-items` but map to `flex-start`/`flex-end` which breaks
  in non-flex contexts — document scope or rename with a `flex-` prefix

**Structural / Architecture**

- [ ] `_misc.scss` contains hardcoded utility classes (`c-py-025`, `c-py-2`,
  `c-py-3`, `.sticky`, `.close`, `.zebra`) — these should be migrated into the
  build system or at least into more appropriate partials
- [ ] `.sticky` is defined twice — once in `_layout.scss` via the build system
  (`position: sticky`) and once hardcoded in `_misc.scss` (with `top: 0;
  z-index: 1000`) — the duplicate will cause a conflict; consolidate into a
  composite class in the build system
- [ ] `$axis-position-map` in `_build-magic-classes.scss` is marked `DEPRECATED`
  but still in active use — either remove the deprecation comment or complete
  the migration and delete it
- [ ] The `smart-adjust` function is called in `_state.scss` (`hover-state`
  mixin) but is not defined anywhere in the shared files — this will cause a
  build error; locate or implement it
- [ ] `$text-color-variants`, `$text-color-values`, and `$text-color-map` in
  `_typography.scss` have a comment noting they may not be used — verify and
  remove dead code

**Missing / Incomplete Features**

- [ ] Blur and backdrop-blur maps in `_value-maps.scss` are fully commented out
  — if intentional, remove them; if planned, track them as a TODO with rationale
- [ ] `transition-all` exists but the inline comment says "Avoid in production"
  — consider removing it from the default build entirely or adding a deprecation
  warning in docs
- [ ] The gradient system uses CSS custom properties (`--from`/`--to`) but there
  is no `via-{color}` support for three-stop gradients — this is a common need
  worth adding

**State & Interactivity**

- [ ] `state-gray/blue/red/green` classes in `_state.scss` cover only 4 colours
  — either extend to all theme colours via the build system or clarify these are
  intentionally limited
- [ ] The `hover-state` / `active-state` / `focus-state` mixins in `_state.scss`
  call `smart-adjust()` which appears undefined — verify this resolves correctly
  (possibly from a Sass `color` module alias)
- [ ] `active:bg-{color}` state classes are generated but focus state is missing
  from background utilities — add `focus` to the `with-state` config for
  backgrounds if needed

**Documentation / DX**

- [ ] The `$xy-axis-exclusions`, `$unit-omitted-from-class`, `$split-properties`
  config vars in `_config.scss` are powerful but have no usage examples pointing
  back to their real-world output — add inline examples showing before/after
  class names
- [ ] Magic class naming (`cols-4-2-1`, `py-5-3-2`) is clever but completely
  non-obvious to new users — these need explicit documentation explaining the
  breakpoint-to-value mapping order