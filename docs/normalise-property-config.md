# `@function normalise-property-config`

Normalises a property configuration map, preparing it for SCSS layer/utility builders.
Takes care of prefix, responsive breakpoints, states, axis keys, child selectors, and variant value processing. Used internally to convert user/config input into a consistent shape for class/utility generation.

-------------------------------------------------------------------------------

## Signature

```scss +code
default @function normalise-property-config($property, $config, $responsive, $with-state)
```

-------------------------------------------------------------------------------

## Parameters

| Name           | Type      | Required | Description                                                                 |
| -------------- | --------- | -------- | --------------------------------------------------------------------------- |
| `$property`    | String    | Yes      | Name of the property/class being normalised (e.g. `margin`, `p`, etc).      |
| `$config`      | Map       | Yes      | Property configuration object. Must include at least a `values` map.        |
| `$responsive`  | List/Map  | Yes      | Responsive breakpoint configuration (see `resolve-breakpoints`).            |
| `$with-state`  | List/Map  | Yes      | State configuration map, or `null` if states not used.                      |

-------------------------------------------------------------------------------

## Returns

A map with the following keys:

- `property`: The property/class this config is for
- `prefix`: Class prefix (string, may be empty)
- `breakpoints`: Responsive breakpoints (map)
- `states`: States map (processed)
- `positions`: Positions array, if present
- `omit-axis-keys`: Omitted axis keys, if present
- `child-combinator`: Child selector/combinator, if present
- `variants`: A map of class variants. Keys are classnames, values are objects like `{ value, suffix }`

-------------------------------------------------------------------------------

## Example Usage

```scss +code
$config: (
  unit: 'rem',
  prefix: 'm-',
  breakpoints: (sm: 640px, md: 768px),
  values: (
    0: 0,
    1: 0.25,
    2: 0.5,
    3: 1,
  )
);

$normalised: normalise-property-config('margin', $config, (sm, md), null);
// $normalised is a map containing processed variants, prefix, breakpoints, etc.
```

-------------------------------------------------------------------------------

## Notes

- Used by utility and builder mixins to preprocess configuration for all utilities.
- Handles unit-inference, variant label/keys, prefix computation, and more.
- See related helpers in the same folder for variant and value processing.
