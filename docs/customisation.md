# Customisation (review)

<p class="lead">JTB has two customisation paths. Use SCSS variables to control
what gets generated. Use CSS custom properties to tweak values without touching
the build.</p>

## How It Works (review)

### Override SCSS Variables (review)

Every variable uses `!default` — override before the build runs and JTB picks
them up everywhere.

`@forward` passes your overrides through to the build, but doesn't make
variables available in the current file. To use them in your own styles, `@use`
the module directly as well.

```scss +code
@forward 'nk_jtb/src/maps_and_variables/base' with (
    $primary:   #7c0442,
    $secondary: #fff4e5
);

@use 'nk_jtb/src/build' as *;
@use 'nk_jtb/src/maps_and_variables/base' as *;

.my-component {
    background-color: $primary;
}
```

### CSS Custom Properties (review)

A subset of tokens are exposed as custom properties in `:root` for lightweight
overrides.

```css +code
:root {
    --primary:    #7c0442;
    --text-color: #1a1a1a;
    --bg-body:    #ffffff;
}
```

