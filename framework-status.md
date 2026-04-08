<!-- markdownlint-disable MD060-->
# Framework Status

Tracks the state of all utilities, documentation files, and skills. Update when
a doc is confirmed accurate or a utility is completed.

## Status Key

| Symbol / Label | Meaning                                               |
| -------------- | ----------------------------------------------------- |
| `✅`            | Complete and confirmed                                |
| `Review`       | Exists but not checked against current code           |
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

| Utility             | Framework | Docs   | Notes                         |
| ------------------- | --------- | ------ | ----------------------------- |
| `ends:rounded-lg`   | Review    | ❌      | Child edge rounding helper    |
| `zebra`             | Review    | ❌      | Alternating child backgrounds |
| `child-padding-y`   | Review    | ❌      | `c-py-*` utilities            |
| `aspect-ratio`      | Review    | ❌      | `aspect-*` utilities          |
| `divide-y`          | ✅         | ✅    | Child divider utility         |
| `divide-x`          | ✅         | ✅    | Column divider utility        |
| `divide-y-gradient` | ✅         | Review | Gradient divider variant      |
| `sticky`            | Review    | ❌      | Sticky helper class           |
| `close`             | Review    | ❌      | Close-action helper           |

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

| Utility           | Framework | Docs   | Notes                            |
| ----------------- | --------- | ------ | -------------------------------- |
| `color`           | Review    | Review | `txt-*` colors                   |
| `font-family`     | Review    | Review | `font-*`                         |
| `font-size`       | Review    | Review | `txt-*` sizes                    |
| `font-style`      | Review    | Review |                                  |
| `font-weight`     | Review    | Review |                                  |
| `line-height`     | Review    | Review | `lh-*`                           |
| `letter-spacing`  | Review    | Review |                                  |
| `list-style-type` | Review    | Review | `list-*`                         |
| `text-align`      | Review    | Review |                                  |
| `text-decoration` | Review    | Review |                                  |
| `text-transform`  | Review    | Review |                                  |
| `text-wrap`       | Review    | Review |                                  |
| `white-space`     | Review    | Review |                                  |
| `text-composites` | Review    | Review | `txt-xs`, `txt-sm`, `lead`, etc. |

---

## Documentation Files

### Root Docs

| File                                       | Status  | Notes                                                                                  |
| ------------------------------------------ | ------- | -------------------------------------------------------------------------------------- |
| `introduction.md`                          | review  |                                                                                        |
| `installation.md`                          | review  |                                                                                        |
| `conventions-and-architecture-rules.md`    | review  |                                                                                        |
| `core-architecture.md`                     | review  |                                                                                        |
| `layer-system.md`                          | review  |                                                                                        |
| `design-decisions.md`                      | review  |                                                                                        |
| `responsive-design.md`                     | review  |                                                                                        |
| `developer-responsive-class-generation.md` | review  |                                                                                        |
| `magic-classes.md`                         | ✅       |                                                                                        |
| `display-and-visibility.md`                | review  |                                                                                        |
| `automatic-spacing.md`                     | review  |                                                                                        |
| `layouts-and-structures.md`                | ✅       |                                                                                        |
| `margin-padding-spacing.md`                | partial | TODOs: Spacing Sizes, Negative Values                                                  |
| `variable-system.md`                       | partial | CSS custom properties section needs updating — vars are a runtime fallback convenience |
| `customisation.md`                         | review  |                                                                                        |
| `themes.md`                                | review  |                                                                                        |
| `state-management.md`                      | review  |                                                                                        |
| `resolvers.md`                             | review  |                                                                                        |
| `animation.md`                             | review  |                                                                                        |
| `aria.md`                                  | review  |                                                                                        |
| `responsive-testing.md`                    | review  |                                                                                        |
| `showcase-typography.md`                   | ✅       |                                                                                        |

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
| `api/variables.md`                  | review |                                       |

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
| `components/pagination.md`          | review  |                                                  |
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
| `examples/responsive-design-patterns.md` | review |       |
| `examples/ui-elements.md`                | review |       |

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
