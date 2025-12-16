## Level 1 - make-base-class = Makes ONE class

## Make Base
```scss +code
$property: 'background-color';
$class: 'bg-red';
$value: red;
$breakpoints: (sm, md, lg);
$options: (
    child-selector: true
);

@include make-base-class($property, $class, $value, $options);
@include make-responsive-class($property, $class, $value, $breakpoints);
```

### Make Base Position

Syntax:

```scss +code
@include make-base-position-class($property, $value, $positions, $prefix, $variant, $options);
```


```scss +code
$property: 'margin';
$prefix: 'm-';
$variant: 'wtf';
$value: 1rem;

$positions: (
    x: ( inline-start, inline-end ),
    y: ( block-start, block-end )
);

$options: (
    omit-axis-keys: false,
    child-selector: false
);
```

## build-base-layer = Builds ENTIRE layer by looping
## build-classes-new = Builds ENTIRE framework by calling all layers