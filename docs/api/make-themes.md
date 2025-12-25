## make-basic-theme()

Signature:

```scss +code
@mixin make-basic-theme($base, $border-color: border-contrast($base), $font-color: text-color($base))
```

Pass single color to intelligently set border-color and font-color based on background
color, or override with custom colors.


```scss +code
.basic-theme {
    @include make-basic-theme($base-color: #3b82f6);
}
```