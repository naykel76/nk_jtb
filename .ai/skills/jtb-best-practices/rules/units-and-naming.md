# Units & Naming

## Scale

All numeric class values are rem. `m-1` = 1rem, `p-2` = 2rem, `gap-05` = 0.5rem.

Before using any numeric utility, confirm the value exists in the relevant map
in `src/maps_and_variables/`. Each utility (spacing, gap, sizing, border-radius)
has its own independent scale — do not assume a value is valid because it exists
in a different scale.

## Decimal Class Names

The class name format depends on whether the value is below or above 1:

| Value | Class name          | Example            |
| ----- | ------------------- | ------------------ |
| `0.5` | Drop `0.` prefix    | `gap-05`, `p-025`  |
| `1.5` | Use literal decimal | `gap-1.5`, `p-1.5` |

Sub-1 values (starting with `0.`) strip the leading zero and decimal point.
Values ≥ 1 with decimals are escaped in CSS (`.gap-1\.5`) but written with the
literal decimal in HTML. Do not apply the sub-1 rule to values ≥ 1 — `gap-15`
is not a valid class for 1.5rem.

## Shorthand

- All-sides padding and margin use `pxy` and `mxy`, not `p` or `m`
- Directional variants: `px`, `py`, `pt`, `pb`, `pl`, `pr` (and `mx`, `my`, etc.)

## Property = Class Name

Use the CSS property value directly as the class name. Do not prefix with the property name:

- `flex` not `display-flex`
- `relative` not `position-relative`
- `hidden` not `display-none`

## Axis Modifiers & Logical Properties

Axis modifiers map to logical properties internally:

| Modifier | Logical property              |
| -------- | ----------------------------- |
| `-t`     | `block-start`                 |
| `-b`     | `block-end`                   |
| `-l`     | `inline-start`                |
| `-r`     | `inline-end`                  |
| `-x`     | `inline-start` + `inline-end` |
| `-y`     | `block-start` + `block-end`   |

Use logical properties in SCSS (`margin-inline-start`, not `margin-left`).
Physical properties are only appropriate in explicitly positioned contexts.

## Context-Aware Modifiers

Theme and size modifiers are applied directly to the component, not as
hyphenated suffixes:

```html +code
<!-- correct -->
<button class="btn primary">Submit</button>
<button class="btn sm">Cancel</button>

<!-- wrong -->
<button class="btn-primary">Submit</button>
<button class="btn-sm">Cancel</button>
```
