<!-- markdownlint-disable MD060-->
# Framework Status

## Utilities

### Border

| Utility          | Framework | Docs | Notes |
| ---------------- | --------- | ---- | ----- |
| `border-width`   | ✅         | ✅    |       |
| `border-color`   | ✅         | ✅    |       |
| `border-radius`  | ✅         | ✅    |       |
| `border-style`   | ✅         | ✅    |       |
| `outline-width`  | ✅         | ✅    |       |
| `outline-color`  | ✅         | ✅    |       |
| `outline-offset` | ✅         | ✅    |       |
| `outline-style`  | ✅         | ✅    |       |

### Alignment (review)

| Utility           | Framework | Docs | Notes                        |
| ----------------- | --------- | ---- | ---------------------------- |
| `align-content`   | Review    | ❌    |                              |
| `align-items`     | Review    | ❌    |                              |
| `align-self`      | Review    | ❌    |                              |
| `justify-content` | Review    | ❌    |                              |
| `justify-items`   | Review    | ❌    |                              |
| `justify-self`    | Review    | ❌    |                              |
| `place-content`   | Review    | ❌    |                              |
| `place-items`     | Review    | ❌    |                              |
| `place-self`      | Review    | ❌    |                              |
| `ha-*`            | Review    | ❌    | Custom align-content aliases |
| `va-*`            | Review    | ❌    | Custom align-items aliases   |

### Animation (review)

| Utility     | Framework | Docs   | Notes                 |
| ----------- | --------- | ------ | --------------------- |
| `animation` | Review    | Review | `animate-*` utilities |

### Backgrounds (review)

| Utility            | Framework | Docs | Notes              |
| ------------------ | --------- | ---- | ------------------ |
| `background-color` | Review    | ❌    | `bg-*` colors      |
| `background-image` | Review    | ❌    | Stripe backgrounds |

### Container (review)

| Utility           | Framework | Docs | Notes                         |
| ----------------- | --------- | ---- | ----------------------------- |
| `container-width` | Review    | ❌    | `container-*` width utilities |

### Display and Visibility (review)

| Utility           | Framework | Docs   | Notes                                                    |
| ----------------- | --------- | ------ | -------------------------------------------------------- |
| `display`         | Review    | Review | Includes `hidden`, `block`, `flex`, `inline-*`, `table*` |
| `visibility`      | Review    | Review | `visible`, `invisible`, `collapse`                       |
| `on-{breakpoint}` | Review    | Review | Exact breakpoint visibility/display                      |
| `to-{breakpoint}` | Review    | Review | Up-to breakpoint visibility/display                      |

### Effects (review)

| Utility      | Framework | Docs   | Notes      |
| ------------ | --------- | ------ | ---------- |
| `opacity`    | Review    | Review |            |
| `box-shadow` | Review    | Review | `shadow-*` |

### Flexbox (review)

| Utility              | Framework | Docs | Notes                                   |
| -------------------- | --------- | ---- | --------------------------------------- |
| `flex`               | Review    | ❌    | `flex-*` values                         |
| `flex-direction`     | Review    | ❌    | `flex-col`, `flex-row`, reverse values  |
| `flex-grow`          | Review    | ❌    | `fg*` prefix                            |
| `flex-shrink`        | Review    | ❌    | `fs*` prefix                            |
| `flex-wrap`          | Review    | ❌    |                                         |
| `order`              | Review    | ❌    |                                         |
| `flexbox-composites` | Review    | ❌    | `flex-centered`, `flex-vac`, `flex-hac` |

### Gradients (review)

| Utility               | Framework | Docs | Notes            |
| --------------------- | --------- | ---- | ---------------- |
| `gradient-direction`  | Review    | ❌    | `bg-linear-to-*` |
| `gradient-from-color` | Review    | ❌    | `from-*`         |
| `gradient-to-color`   | Review    | ❌    | `to-*`           |

### Grid (review)

| Utility                 | Framework | Docs | Notes              |
| ----------------------- | --------- | ---- | ------------------ |
| `display-grid`          | Review    | ❌    | `.grid` base class |
| `gap`                   | Review    | ❌    |                    |
| `grid-template-columns` | Review    | ❌    | `cols-*`           |
| `grid-column`           | Review    | ❌    | `col-span-*`       |

### Interactivity (review)

| Utility  | Framework | Docs | Notes      |
| -------- | --------- | ---- | ---------- |
| `cursor` | Review    | ❌    | `cursor-*` |

### Layout (review)

| Utility      | Framework | Docs   | Notes            |
| ------------ | --------- | ------ | ---------------- |
| `float`      | Review    | ❌      |                  |
| `overflow`   | Review    | ❌      |                  |
| `overflow-x` | Review    | ❌      |                  |
| `overflow-y` | Review    | ❌      |                  |
| `position`   | Review    | Review |                  |
| `z-index`    | Review    | Review |                  |
| `top`        | Review    | Review | Offset utilities |
| `bottom`     | Review    | Review | Offset utilities |
| `left`       | Review    | Review | Offset utilities |
| `right`      | Review    | Review | Offset utilities |
| `inset`      | Review    | Review |                  |

### Magic Classes (review)

| Utility              | Framework | Docs | Notes                        |
| -------------------- | --------- | ---- | ---------------------------- |
| `magic-padding-y`    | Review    | ❌    | Responsive `py-*` patterns   |
| `magic-margin-y`     | Review    | ❌    | Responsive `my-*` patterns   |
| `magic-gap`          | Review    | ❌    | Responsive `gap-*` patterns  |
| `magic-grid-columns` | Review    | ❌    | Responsive `cols-*` patterns |

### Misc (review)

| Utility             | Framework | Docs | Notes                         |
| ------------------- | --------- | ---- | ----------------------------- |
| `ends:rounded-lg`   | Review    | ❌    | Child edge rounding helper    |
| `zebra`             | Review    | ❌    | Alternating child backgrounds |
| `child-padding-y`   | Review    | ❌    | `c-py-*` utilities            |
| `aspect-ratio`      | Review    | ❌    | `aspect-*` utilities          |
| `divide-y`          | Review    | ❌    | Child divider utility         |
| `divide-y-gradient` | Review    | ❌    | Gradient divider variant      |
| `sticky`            | Review    | ❌    | Sticky helper class           |
| `close`             | Review    | ❌    | Close-action helper           |

### Sizing (review)

| Utility            | Framework | Docs | Notes      |
| ------------------ | --------- | ---- | ---------- |
| `height`           | Review    | ❌    | `h-*`      |
| `min-height`       | Review    | ❌    | `min-h-*`  |
| `max-height`       | Review    | ❌    | `max-h-*`  |
| `width`            | Review    | ❌    | `w-*`      |
| `min-width`        | Review    | ❌    | `min-w-*`  |
| `max-width`        | Review    | ❌    | `max-w-*`  |
| `width-height`     | Review    | ❌    | `wh-*`     |
| `min-width-height` | Review    | ❌    | `min-wh-*` |

### Spacing (review)

| Utility                    | Framework | Docs | Notes                       |
| -------------------------- | --------- | ---- | --------------------------- |
| `margin`                   | Review    | ❌    | Logical position variants   |
| `padding`                  | Review    | ❌    | Logical position variants   |
| `space-x`                  | Review    | ❌    | Child combinator spacing    |
| `space-y`                  | Review    | ❌    | Child combinator spacing    |
| `compound-control-padding` | Review    | ❌    | `p-ctrl*` composites        |
| `negative-space`           | Review    | ❌    | `-space-*` child combinator |

### State (review)

| Utility       | Framework | Docs | Notes                         |
| ------------- | --------- | ---- | ----------------------------- |
| `state-color` | Review    | ❌    | `state-*` interaction helpers |

### Themes (review)

| Utility         | Framework | Docs | Notes                      |
| --------------- | --------- | ---- | -------------------------- |
| `theme`         | Review    | ❌    | Base and advanced themes   |
| `outline-theme` | Review    | ❌    | `*-outline` theme variants |

### Transforms (review)

| Utility     | Framework | Docs   | Notes                            |
| ----------- | --------- | ------ | -------------------------------- |
| `translate` | Review    | Review | Combined x/y translate now works |
| `rotate`    | Review    | Review |                                  |

### Transitions (review)

| Utility                      | Framework | Docs   | Notes                 |
| ---------------------------- | --------- | ------ | --------------------- |
| `transition-property`        | Review    | Review | Property presets only |
| `transition-duration`        | ❌         | ❌      | Not available         |
| `transition-timing-function` | ❌         | ❌      | Not available         |
| `transition-delay`           | ❌         | ❌      | Not available         |

### Typography (review)

| Utility           | Framework | Docs | Notes                            |
| ----------------- | --------- | ---- | -------------------------------- |
| `color`           | Review    | ❌    | `txt-*` colors                   |
| `font-family`     | Review    | ❌    | `font-*`                         |
| `font-size`       | Review    | ❌    | `txt-*` sizes                    |
| `font-style`      | Review    | ❌    |                                  |
| `font-weight`     | Review    | ❌    |                                  |
| `line-height`     | Review    | ❌    | `lh-*`                           |
| `letter-spacing`  | Review    | ❌    |                                  |
| `list-style-type` | Review    | ❌    | `list-*`                         |
| `text-align`      | Review    | ❌    |                                  |
| `text-decoration` | Review    | ❌    |                                  |
| `text-transform`  | Review    | ❌    |                                  |
| `text-wrap`       | Review    | ❌    |                                  |
| `white-space`     | Review    | ❌    |                                  |
| `text-composites` | Review    | ❌    | `txt-xs`, `txt-sm`, `lead`, etc. |

## Skills

| File                | Area                   | Status | Notes                              |
| ------------------- | ---------------------- | ------ | ---------------------------------- |
| `jtb-documentation` | Documentation workflow | Review | Still contains `(review)` headings |
| `jtb-layout`        | Layout strategy        | Review | Still contains `(review)` headings |
| `tailwind-to-jtb`   | Conversion workflow    | Review | Still contains `(review)` headings |
