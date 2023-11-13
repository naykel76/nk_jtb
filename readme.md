<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Why!

> Because without reinventing the wheel we wouldn’t have fast cars.
> -- Nathan Watts


Generate classes with a single property from a map of values.
    - Optionally generate responsive classes from a map of breakpoints.
    - Optionally generate classes for each position from a map of positions.

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
