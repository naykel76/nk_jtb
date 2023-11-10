<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Why!

> Because without reinventing the wheel we wouldn’t have fast cars.
> -- Nathan Watts

@mixin generateFromMapOfProperties($properties-map) {
    @each $property, $map in $properties-map {
        $values: map-get($map, "values");
        $identifier: map-get($map, "prefix");
        $unit: map-get($map, "unit"); // 1.
        $positions-map: map-get($map, "positions"); // 1.
        $breakpoints: map-get($map, "breakpoints"); // 1.

        @include createClasses($property, $values, $identifier, $unit, $positions-map, $breakpoints);
    }
}

@mixin createClasses($property, $values, $identifier, $unit, $positions-map, $breakpoints) {

    @each $key, $value in $values { // 1.

        $variant: escapeInvalid($key); // 2.
        $value: if($value, $value, $key); // 3.

        @if (type-of($key) == list) { // 4.
            $variant: nth($key, 1);
            $value: nth($key, 2);
        }

        $derived-unit: if(value-has-unit($value), null, ($unit)); // 5.

        $class: #{$identifier}#{$variant}#{handleClassUnit($derived-unit)};

        @if $positions-map {
            @include createPositionClass($property, $value, $positions-map, $derived-unit, $identifier, $variant);
        } @else{
            @include createSinglePropertyClass(#{$class}, $property, #{handleClassValue($value, $derived-unit)});
        }

    }
}

## Class Generator Mixin

The `generateFromMapOfProperties` mixin serves as the entry point for the class generator. It
takes a map of property-maps, iterating through each property and setting variables to be passed
into the `createClasses` mixin.

**Parameters:**

`$properties-map`: A map containing property-specific maps.

**Usage**

```scss
@include generateFromMapOfProperties($myPropertiesMap);
```

The `createClasses` mixin directs the flow of the class generator based on values passed in by the
`generateFromMapOfProperties` mixin. It iterates through each value, formatting the `variant` and
`value` to be used in the appropriate class builder.

#### Parameters:

- `$property`: The CSS property name.
- `$values`: A map of variants and their corresponding values.
- `$identifier`: A prefix for the generated class.
- `$unit`: The unit for the property values.
- `$positions-map`: A map specifying positions for the property.
- `$breakpoints`: Breakpoints for responsive design.

#### Usage:

```scss
@include createClasses($property, $values, $identifier, $unit, $positions-map, $breakpoints);
```

Note, some values passed in may be null and will be handled by the appropriate mixin or function
when required.
