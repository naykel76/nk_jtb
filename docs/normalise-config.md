# normalise-property-config

Normalizes property configuration for the NK JTB framework. Pre-processes
values, prefixes, breakpoints, and states for layer builders.

## Signature

```scss +code
@function normalise-property-config($property, $config, $responsive, $with-state)
```

## Parameters

| Name          | Type     | Description                                    |
|---------------|----------|------------------------------------------------|
| `$property`   | String   | CSS property name (e.g., 'margin', 'gap')      |
| `$config`     | Map      | Config with `values`, `unit`, `prefix`, etc.   |
| `$responsive` | List/Map | Responsive breakpoints                         |
| `$with-state` | List/Map | States to include (hover, focus, etc.)         |

## Returns

```scss +code
(
  property: 'margin',
  prefix: 'm-',
  breakpoints: (...),
  states: (...),
  positions: (...),
  omit-axis-keys: (...),
  child-combinator: (...),
  variants: (
    'm-0': (value: 0, suffix: '0'),
    'm-1': (value: 0.25rem, suffix: '1'),
    'm-2': (value: 0.5rem, suffix: '2')
  )
)
```

## Example

```scss +code
$margin-config: (
  values: (0: 0, 1: 0.25, 2: 0.5, 3: 1, 4: 1.5, 5: 3),
  unit: rem,
  prefix: 'm-'
);

$normalised: normalise-property-config('margin', $margin-config, (), ());
```

## Notes

Used internally by framework layer builders. Handles all config preprocessing
including units, responsive variants, and states.
