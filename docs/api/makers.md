




```scss +code
   @mixin make-state-based-class($props, $class-name, $states) {
    @each $state in $states {
        .#{$state}\:#{$class-name}:#{$state} {
            @include make-properties($props);
        }
    }
}
```




```scss +code

```

```scss +code

```

```scss +code

```

```scss +code

```
