<!-- markdownlint-disable MD060-->
# JTB Status

Tracks the state of all utilities, documentation files, and skills. Update when
a doc is confirmed accurate or a utility is completed.

## Status Key

| Symbol / Label | Meaning                                               |
| -------------- | ----------------------------------------------------- |
| `✅`            | Complete and confirmed                                |
| `review`       | Exists but not checked against current code           |
| `partial`      | Has known gaps or explicit TODOs                      |
| `stub`         | Minimal content, needs writing                        |
| `audit`        | Needs checking against source before review can begin |
| `❌`            | Not available / not done                              |

---

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
| `align-content`   | review    | ❌    |                              |
| `align-items`     | review    | ❌    |                              |
| `align-self`      | review    | ❌    |                              |
| `justify-content` | review    | ❌    |                              |
| `justify-items`   | review    | ❌    |                              |
| `justify-self`    | review    | ❌    |                              |
| `place-content`   | review    | ❌    |                              |
| `place-items`     | review    | ❌    |                              |
| `place-self`      | review    | ❌    |                              |
| `ha-*`            | review    | ❌    | Custom align-content aliases |
| `va-*`            | review    | ❌    | Custom align-items aliases   |

### Animation (review)

| Utility     | Framework | Docs   | Notes                 |
| ----------- | --------- | ------ | --------------------- |
| `animation` | review    | Review | `animate-*` utilities |

### Backgrounds (review)

| Utility            | Framework | Docs | Notes              |
| ------------------ | --------- | ---- | ------------------ |
| `background-color` | review    | ❌    | `bg-*` colors      |
| `background-image` | review    | ❌    | Stripe backgrounds |

### Container (review)

| Utility           | Framework | Docs | Notes                         |
| ----------------- | --------- | ---- | ----------------------------- |
| `container-width` | review    | ❌    | `container-*` width utilities |

### Display and Visibility (review)

| Utility           | Framework | Docs   | Notes                                                    |
| ----------------- | --------- | ------ | -------------------------------------------------------- |
| `display`         | review    | Review | Includes `hidden`, `block`, `flex`, `inline-*`, `table*` |
| `visibility`      | review    | Review | `visible`, `invisible`, `collapse`                       |
| `on-{breakpoint}` | review    | Review | Exact breakpoint visibility/display                      |
| `to-{breakpoint}` | review    | Review | Up-to breakpoint visibility/display                      |

### Effects (review)

| Utility      | Framework | Docs   | Notes      |
| ------------ | --------- | ------ | ---------- |
| `opacity`    | review    | Review |            |
| `box-shadow` | review    | Review | `shadow-*` |

### Flexbox (review)

| Utility              | Framework | Docs | Notes                                   |
| -------------------- | --------- | ---- | --------------------------------------- |
| `flex`               | review    | ❌    | `flex-*` values                         |
| `flex-direction`     | review    | ❌    | `flex-col`, `flex-row`, reverse values  |
| `flex-grow`          | review    | ❌    | `fg*` prefix                            |
| `flex-shrink`        | review    | ❌    | `fs*` prefix                            |
| `flex-wrap`          | review    | ❌    |                                         |
| `order`              | review    | ❌    |                                         |
| `flexbox-composites` | review    | ❌    | `flex-centered`, `flex-vac`, `flex-hac` |

### Gradients (review)

| Utility               | Framework | Docs | Notes            |
| --------------------- | --------- | ---- | ---------------- |
| `gradient-direction`  | review    | ❌    | `bg-linear-to-*` |
| `gradient-from-color` | review    | ❌    | `from-*`         |
| `gradient-to-color`   | review    | ❌    | `to-*`           |

### Grid (review)

| Utility                 | Framework | Docs | Notes              |
| ----------------------- | --------- | ---- | ------------------ |
| `display-grid`          | review    | ❌    | `.grid` base class |
| `gap`                   | review    | ❌    |                    |
| `grid-template-columns` | review    | ❌    | `cols-*`           |
| `grid-column`           | review    | ❌    | `col-span-*`       |

### Interactivity (review)

| Utility  | Framework | Docs | Notes      |
| -------- | --------- | ---- | ---------- |
| `cursor` | review    | ❌    | `cursor-*` |

### Layout (review)

| Utility      | Framework | Docs   | Notes            |
| ------------ | --------- | ------ | ---------------- |
| `float`      | review    | ❌      |                  |
| `overflow`   | review    | ❌      |                  |
| `overflow-x` | review    | ❌      |                  |
| `overflow-y` | review    | ❌      |                  |
| `position`   | review    | Review |                  |
| `z-index`    | review    | Review |                  |
| `top`        | review    | Review | Offset utilities |
| `bottom`     | review    | Review | Offset utilities |
| `left`       | review    | Review | Offset utilities |
| `right`      | review    | Review | Offset utilities |
| `inset`      | review    | Review |                  |

### Magic Classes (review)

| Utility              | Framework | Docs | Notes                        |
| -------------------- | --------- | ---- | ---------------------------- |
| `magic-padding-y`    | review    | ❌    | Responsive `py-*` patterns   |
| `magic-margin-y`     | review    | ❌    | Responsive `my-*` patterns   |
| `magic-gap`          | review    | ❌    | Responsive `gap-*` patterns  |
| `magic-grid-columns` | review    | ❌    | Responsive `cols-*` patterns |

### Misc (review)

| Utility             | Framework | Docs   | Notes                         |
| ------------------- | --------- | ------ | ----------------------------- |
| `ends:rounded-lg`   | review    | ❌      | Child edge rounding helper    |
| `zebra`             | review    | ❌      | Alternating child backgrounds |
| `child-padding-y`   | review    | ❌      | `c-py-*` utilities            |
| `aspect-ratio`      | review    | ❌      | `aspect-*` utilities          |
| `divide-y`          | ✅         | ✅    | Child divider utility         |
| `divide-x`          | ✅         | ✅    | Column divider utility        |
| `divide-y-gradient` | ✅         | Review | Gradient divider variant      |
| `sticky`            | review    | ❌      | Sticky helper class           |
| `close`             | review    | ❌      | Close-action helper           |

### Sizing (review)

| Utility            | Framework | Docs | Notes      |
| ------------------ | --------- | ---- | ---------- |
| `height`           | review    | ❌    | `h-*`      |
| `min-height`       | review    | ❌    | `min-h-*`  |
| `max-height`       | review    | ❌    | `max-h-*`  |
| `width`            | review    | ❌    | `w-*`      |
| `min-width`        | review    | ❌    | `min-w-*`  |
| `max-width`        | review    | ❌    | `max-w-*`  |
| `width-height`     | review    | ❌    | `wh-*`     |
| `min-width-height` | review    | ❌    | `min-wh-*` |

### Spacing (review)

| Utility                    | Framework | Docs | Notes                       |
| -------------------------- | --------- | ---- | --------------------------- |
| `margin`                   | review    | ❌    | Logical position variants   |
| `padding`                  | review    | ❌    | Logical position variants   |
| `space-x`                  | review    | ❌    | Child combinator spacing    |
| `space-y`                  | review    | ❌    | Child combinator spacing    |
| `compound-control-padding` | review    | ❌    | `p-ctrl*` composites        |
| `negative-space`           | review    | ❌    | `-space-*` child combinator |

### State (review)

| Utility       | Framework | Docs | Notes                         |
| ------------- | --------- | ---- | ----------------------------- |
| `state-color` | review    | ❌    | `state-*` interaction helpers |

### Themes (review)

| Utility         | Framework | Docs | Notes                      |
| --------------- | --------- | ---- | -------------------------- |
| `theme`         | review    | ❌    | Base and advanced themes   |
| `outline-theme` | review    | ❌    | `*-outline` theme variants |

### Transforms (review)

| Utility     | Framework | Docs   | Notes                            |
| ----------- | --------- | ------ | -------------------------------- |
| `translate` | review    | Review | Combined x/y translate now works |
| `rotate`    | review    | Review |                                  |

### Transitions (review)

| Utility                      | Framework | Docs   | Notes                 |
| ---------------------------- | --------- | ------ | --------------------- |
| `transition-property`        | review    | Review | Property presets only |
| `transition-duration`        | ❌         | ❌      | Not available         |
| `transition-timing-function` | ❌         | ❌      | Not available         |
| `transition-delay`           | ❌         | ❌      | Not available         |

### Typography (review)

| Utility           | Framework | Docs   | Notes                            |
| ----------------- | --------- | ------ | -------------------------------- |
| `color`           | review    | Review | `txt-*` colors                   |
| `font-family`     | review    | Review | `font-*`                         |
| `font-size`       | review    | Review | `txt-*` sizes                    |
| `font-style`      | review    | Review |                                  |
| `font-weight`     | review    | Review |                                  |
| `line-height`     | review    | Review | `lh-*`                           |
| `letter-spacing`  | review    | Review |                                  |
| `list-style-type` | review    | Review | `list-*`                         |
| `text-align`      | review    | Review |                                  |
| `text-decoration` | review    | Review |                                  |
| `text-transform`  | review    | Review |                                  |
| `text-wrap`       | review    | Review |                                  |
| `white-space`     | review    | Review |                                  |
| `text-composites` | review    | Review | `txt-xs`, `txt-sm`, `lead`, etc. |

---

## Documentation Files

### Root Docs

| File                                       | Status  | Notes                                                                                  |
| ------------------------------------------ | ------- | -------------------------------------------------------------------------------------- |
| `introduction.md`                          | review  |                                                                                        |
| `installation.md`                          | review  |                                                                                        |
| `layouts-and-structures.md`                | ✅       |                                                                                        |
| `responsive-design-patterns.md`            | review  |                                                                                        |
| `responsive-design.md`                     | review  |                                                                                        |
| `automatic-spacing.md`                     | review  |                                                                                        |
| `conventions-and-architecture-rules.md`    | review  |                                                                                        |
| `magic-classes.md`                         | ✅       |                                                                                        |
| `themes.md`                                | review  |                                                                                        |
| `state-management.md`                      | review  |                                                                                        |
| `variable-system.md`                       | ✅       |                                                                                        |

### Review

Files parked in `docs/review/` — purpose or audience unclear.

| File                                       | Status | Notes |
| ------------------------------------------ | ------ | ----- |
| `review/animation.md`                              | review |                               |
| `review/aria.md`                                   | review |                               |
| `review/core-architecture.md`                      | review |                               |
| `review/design-decisions.md`                       | review |                               |
| `review/developer-responsive-class-generation.md`  | review |                               |
| `review/display-and-visibility.md`                 | review |                               |
| `review/layer-system.md`                           | review |                               |
| `review/margin-padding-spacing.md`                 | partial | TODOs: Spacing Sizes, Negative Values |
| `review/resolvers.md`                              | review |                               |
| `review/responsive-testing.md`                     | review |                               |

### API

| File                                | Status | Notes                                 |
| ----------------------------------- | ------ | ------------------------------------- |
| `api/makers.md`                     | stub   | 16 lines, one example only            |
| `api/architecture-naming.md`        | stub   | Skeleton, naming section empty        |
| `api/workflow.md`                   | audit  | TODO notes something is "not correct" |
| `api/build-classes.md`              | audit  |                                       |
| `api/make-from-breakpoint.md`       | audit  |                                       |
| `api/make-on-breakpoint.md`         | audit  |                                       |
| `api/make-to-breakpoint.md`         | audit  |                                       |
| `api/make-position-based-class.md`  | audit  |                                       |
| `api/make-single-property-class.md` | audit  |                                       |
| `api/make-themes.md`                | audit  |                                       |
| `api/variables.md`                  | ✅     |                                       |

### Components

| File                                | Status  | Notes                                            |
| ----------------------------------- | ------- | ------------------------------------------------ |
| `components/overview.md`            | review  |                                                  |
| `components/button.md`              | review  |                                                  |
| `components/box.md`                 | partial | CSS Custom Properties section needs locking down |
| `components/list.md`                | ✅       |                                                  |
| `components/accordion.md`           | review  |                                                  |
| `components/forms.md`               | review  |                                                  |
| `components/menu.md`                | review  |                                                  |
| `components/navbar.md`              | review  |                                                  |
| `components/table.md`               | review  |                                                  |
| `components/example-navigations.md` | stub    | Bare HTML, no explanation                        |

### Utilities

| File                                  | Status | Notes                                               |
| ------------------------------------- | ------ | --------------------------------------------------- |
| `utilities/border.md`                 | review | Border, outline, and divider utilities              |
| `utilities/typography.md`             | review | New — needs review pass                             |
| `utilities/animation.md`              | review |                                                     |
| `utilities/display-and-visibility.md` | review |                                                     |
| `utilities/effects.md`                | review |                                                     |
| `utilities/position.md`               | review |                                                     |
| `utilities/transforms.md`             | review |                                                     |

### Examples

| File                                     | Status | Notes |
| ---------------------------------------- | ------ | ----- |
| `examples/layout-dashboard.md`           | ✅      |       |
| `examples/form-examples.md`              | review |       |
| `examples/ui-elements.md`                | review |       |
| `examples/showcase-typography.md`        | ✅      |       |
| `examples/showcase-ui.md`               | review |       |

---

## Skills

| File                         | Area                   | Status | Notes                              |
| ---------------------------- | ---------------------- | ------ | ---------------------------------- |
| `markdown-formatting`        | Markdown formatting    | review |                                    |
| `jtb-documentation`          | Documentation workflow | review | Still contains `(review)` headings |
| `jtb-layouts-and-structures` | Layout strategy        | ✅      | Renamed from `jtb-layout`          |
| `jtb-conversion`             | Conversion workflow    | review | Still contains `(review)` headings |
| `scss-engineer`              | SCSS engineering       | review | Utility workflow added             |

## Prompts

| File                                   | Status  | Notes                                                |
| -------------------------------------- | ------- | ---------------------------------------------------- |
| `create-component.md`                  | ✅       | Utility-first, framework development only            |
| `create-utility.md`                    | ✅       | Framework utility authoring prompt                   |
| `create-documentation.md`              | review  |                                                      |
| `jtb-code-review.md`                   | review  |                                                      |
| `jtb-review-component.md`              | review  |                                                      |
| `jtb-review-documentation.md`          | review  |                                                      |
| `create-component` (consuming project) | planned | Skill + prompt for building UI in consuming projects |

## Feature Requests

| Feature | Notes |
| ------- | ----- |
