# Theme Makers and Builders

## make-basic-theme()

**Signature:**

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

**Output:**

```css +code
.basic-theme {
    background-color: #3b82f6;
    background-color: #2b7fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
}
```

or, with custom border and font colors:

```scss +code
.basic-theme {
    @include make-basic-theme(
        background-color: #2b7fff,
        border: 1px solid #8ec5ff,
        color: #1c398e
    );
}
```

**Output:**

```css +code
.basic-theme {
    background-color: #2b7fff;
    border: 1px solid #8ec5ff;
    color: #1c398e;
}
---



-------------------------------------------------------------------------------