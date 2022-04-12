# NAYKEL JTB

Yet another utility based framework based on flex-box.

> Because without reinventing the wheel we wouldn’t have race cars.
> -- Nathan Watts




``` scss
$utilities-map: (
    "margin": (
        "className": "mxy",
        "values-map": (
            1: 1rem,
            2: 2rem,
        ),
    )
);

@each $property, $map in $utilities-map {
    $className: map-get($map, "className");
    $valuesMap: map-get($map, "values-map");

    // if the 'value' key exists, create base/default class
    @if map-has-key($map, "value") {
        .#{$className} {
            #{$property}: map-get($map, "value");
        }
    }

    @each $key, $v in $valuesMap {
        .#{$className}#{$key} {
            #{$property}: $v;
        }
    }
}
```
