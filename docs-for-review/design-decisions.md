# Design Decisions

This document explains the *why* behind choices that may look like gaps or
oversights to someone reviewing the codebase cold. If an automated tool or AI
reviewer flags something covered here, this is the reference to point to.

## Responsive Prefix Scope

JTB provides three responsive prefix types: `{breakpoint}:`, `on-{breakpoint}:`,
and `to-{breakpoint}:`. Only the base mobile-first `{breakpoint}:` prefix is
generated across all utility properties. The `on-` and `to-` variants are
intentionally limited to `display` and `visibility`.

**Why:** Generating all three prefix types for every property creates
combinatorial explosion — the same problem that makes large Tailwind bundles
unwieldy even with tree shaking. `on-` and `to-` cover a narrow use case
(showing/hiding things at specific breakpoints) that does not generalise well to
spacing, typography, or colour. For custom responsive behaviour beyond
show/hide, the correct tool is the mixin layer:

```scss
@include from-md {
    .my-component { font-size: 1.25rem; }
}
```

This is a deliberate constraint, not an incomplete feature.

## No `to-xxl` Breakpoint

`to-{breakpoint}` means "apply below this breakpoint". `to-xxl` would mean
"apply below the largest breakpoint" — which is effectively every screen size.
It is logically redundant and is intentionally omitted.

## `on-` and `to-` Are Not in the Main Build Controller

The `make-on-breakpoint()` and `make-to-breakpoint()` mixins exist in
`_breakpoint-utilities.scss` and are called directly in
`_display-visibility.scss`. They are not wired into `build-classes()` in the
main controller.

**Why:** The controller is designed for the mobile-first `{breakpoint}:`
pattern. Routing `on-` and `to-` through the same controller would require
adding flags that add complexity for a feature used in exactly one utility file.
The direct call pattern is the right tradeoff here.

## Physical Position Utilities

`_layout.scss` generates `top`, `bottom`, `left`, and `right` utilities despite
the framework's logical-properties-first approach.

**Why:** Logical equivalents (`inset-block-start` etc.) are correct for margin,
padding, and border — properties that follow document flow. Positioned elements
(`position: absolute/fixed`) using `top/left` are a different context. Logical
inset properties (`inset-block-start`) have slightly lower browser support and
the physical versions are unambiguous in a positioned context. This is a
pragmatic exception to the logical-properties rule, not an oversight. The rule
holds for all flow-based spacing properties.

## `@extend` in Components

`%control`, `%menu-link`, and `%box` use Sass `@extend` / placeholder selectors
rather than mixins. Automated tools sometimes flag `@extend` as an anti-pattern.

**Why:** For shared structural rules that apply across multiple selectors
(buttons, inputs, selects, textareas all sharing `%control`), `@extend` produces
a grouped selector in the CSS output rather than duplicated declarations. This
is the correct use case for `@extend`. It would only be a problem if used across
module boundaries or inside media queries — neither of which applies here.

## Color Scale in Utility Output

The full `$oklch-colors` map (~500 values) is used for `bg-`, `txt-`, and `bdr-`
color utilities. This looks alarming in a raw CSS audit.

**Why:** JTB is designed to be used with tree shaking / PurgeCSS in production.
The full scale exists so developers are never blocked by a missing step. In a
production build only the classes actually referenced in templates are kept. See
the installation guide for recommended PurgeCSS configuration.

## Layer 4 (Responsive + State) Is Always Generated

When both `breakpoints` and `states` are defined for a property, all four layers
are generated including responsive+state combinations (`hover:md:txt-blue-500`
etc.).

**Why:** This is the intended behaviour for properties where it matters (e.g.
`color` with hover states that need to change at a breakpoint). Again, tree
shaking removes unused combinations in production. If this becomes a problem in
a non-tree-shaken context, a `with-responsive-state: false` flag can be added to
the per-property config — but this is not currently a priority.

## `$split-properties` Must Be Maintained Manually

Properties that use the `border-{position}-{end}` naming pattern (rather than
`{property}-{position}`) must be listed in `$split-properties` in
`_config.scss`. There is no automatic detection.

**Why:** Automatic detection would require parsing property name strings with
enough heuristics to be unreliable. The manual list is small, changes rarely,
and is the safer choice. If you add a new property and positional class names
come out wrong, check `$split-properties` first.

## `choices.scss` in `extras/`

`src/extras/choices.scss` is an adapted version of the Choices.js library styles
integrated with JTB's variable system. It is not part of the main build.

**Why:** It exists as a convenience for projects using Choices.js so they do not
need to maintain a separate override file. It is imported optionally. It is not
a dependency — projects not using Choices.js can ignore it entirely.

## No `to-xxl` in `to-breakpoint()` Mixin

```scss
// Note: No "to-xxl" since that would be redundant (xxl is the largest breakpoint)
@mixin to-breakpoint($bp) { ... }
```

This is intentional and the comment in the source is the full explanation.
Automated reviewers sometimes flag the missing `xxl` case as an oversight. It is
not.

## `$text-color-map` in `_typography.scss`

This map is defined but not currently consumed by any build call. It remains
because it may be used in a future typography theming feature. It is not dead
code — it is reserved infrastructure. The inline `CHECK:` comment will be
removed in a future cleanup pass.

## Semantic z-index Tokens

`$z-index-map` uses named tokens (`above`, `high`, `higher`, `highest`) rather
than numeric values. The steps are non-linear (10, 100, 200, 999) by design.

**Why:** Large gaps between values allow third-party components and
project-level overrides to slot in without touching the framework. The semantic
names map to UI layers as follows:

| Token     | Value | Intended use                          |
| --------- | ----- | ------------------------------------- |
| `above`   | 10    | Floating labels, sticky headers       |
| `high`    | 100   | Dropdowns, tooltips                   |
| `higher`  | 200   | Modals, drawers                       |
| `highest` | 999   | Alerts, toasts, full-screen overlays  |

---

## No Generated Class Reference

There is no auto-generated list of all available utility classes. This is a
known documentation gap being addressed separately. In the meantime, the source
maps in `src/maps_and_variables/` are the authoritative reference for what
values exist for each property.
