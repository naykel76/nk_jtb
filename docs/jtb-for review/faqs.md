# Frequently Asked Questions

## How do I Override Variables in JTB Framework

Override variables by loading the module directly with new values:

```scss +torchlight-scss
@use 'nk_jtb/src/v1/maps_and_variables/colors' with (
  $primary: #7c0442,
  $secondary: #fff4e5
);
```

Ensure your main framework is loaded *after* overrides:

```scss +torchlight-scss
@use 'nk_jtb/src/jtb';
```

Access overridden variables through their module namespace:

```scss +torchlight-scss
.primary-bg {
    background-color: colors.$primary;
}
```


<question>How do I center content when using flexbox and grid?</question>