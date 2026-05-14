# JTB Conversion Notes

Actionable gaps found during conversion of `loaders_and_spinners.html`.

## Missing Keyframes / Animation Utilities

| Gap                                 | Detail                                                                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `@keyframes dash`                   | SVG arc morphing — stroke-dasharray animates between values. No JTB equivalent. Candidate for `_animation.scss`. |
| `@keyframes grow`                   | Vertical scale pulse for bar equalizer. No JTB equivalent.                                                       |
| `@keyframes skeleton`               | Gradient sweep shimmer. Very commonly needed. Strong candidate for `_animation.scss`.                            |
| `@keyframes progress-indeterminate` | Horizontal bar sweep for indeterminate progress. No JTB equivalent.                                              |
| `@keyframes ripple`                 | Scale from 0 → 2.5 with fade. `animate-ping` starts from scale 1 — not a match.                                  |

## Missing Utilities

| Gap                     | Detail                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Positional border-color | `bdr-t-{color}` not generated — `border-color` config has no `positions` key. Needed for spinner accent colour and the spin demo example. |
| `flex-shrink: 0`        | No `fs-0` or equivalent confirmed. Used on skeleton avatar.                                                                               |
| Percentage widths       | `55%`, `65%`, `80%` width values not in JTB sizing scale. Needed for skeleton text blocks.                                                |

## Component Gaps

| Gap                    | Detail                                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Spinner colour theming | `.spinner` hardcodes `#f3f3f3` and `#3498db` — no CSS custom properties for colour. Accent and button-context spinners require local overrides. |
| Icon-only button       | `.btn` has no square/icon variant. A `btn-icon` or `btn xs` pattern would cover `width = height, padding: 0`.                                   |
