# Customisation

<p class="lead">Override any variable before importing to adapt JTB to your
project. No config files, no theme engines — just SCSS variables.</p>

## How It Works

JTB provides two ways to customise the framework depending on when you need the
change to take effect.

### Compile-time — SCSS Variables

Every variable in JTB uses `!default`. This means the value is only applied if
the variable hasn't already been defined. Override variables before the build
runs and the framework picks them up everywhere — utilities, components, and
base styles.

Because `src/build.scss` already `@use`s the base tokens internally, use
`@forward` with `with` to pass your overrides. This SCSS override path is the
primary, fully supported way to customise JTB.

```scss +code
@forward 'nk_jtb/src/maps_and_variables/base' with (
    $primary:   #7c0442,
    $secondary: #fff4e5
);

@use 'nk_jtb/src/build' as *;
```

### Runtime — CSS Custom Properties

A small set of semantic tokens are exposed as CSS custom properties in `:root`.
These can be overridden in your own CSS without recompiling.

```css +code
:root {
    --primary:    #7c0442;
    --text-color: #1a1a1a;
    --bg-body:    #ffffff;
}
```

This is intentionally limited — only tokens a consumer is likely to change at
runtime are exposed. For full control, use the SCSS variable approach above.

## Override Order

Configure **before** importing `build`. The build file compiles all utilities
and components when it runs — overrides after that point have no effect.

```scss +code
// Correct
@forward 'nk_jtb/src/maps_and_variables/base' with (
    $primary: #c0392b
);
@use 'nk_jtb/src/build' as *;

// Wrong — too late, already compiled
@use 'nk_jtb/src/build' as *;
@forward 'nk_jtb/src/maps_and_variables/base' with (
    $primary: #c0392b
);
```

-------------------------------------------------------------------------------

## FAQ's

Here are 5 consumer‑facing FAQs to anchor the variable/customisation docs:

1. **How do I change JTB’s brand colors (primary/secondary/accent) for my
   project?**  
2. **Where do I override global basics like fonts, base font size, spacing, and
   breakpoints?**  
3. **How do I safely extend a scale (e.g. add more spacing or container sizes)
   without breaking utilities?**  
4. **What’s the recommended way to keep all my JTB overrides in one place
   (config file pattern)?**  
5. **Can I use JTB without pulling in *everything*? How do overrides work with
   selective imports?**

Tell me which one you want to tackle first (1–5), and I’ll draft a tight Q&A +
code snippet for it.
