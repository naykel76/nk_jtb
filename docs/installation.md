<div class="toc" data-toc>

- [Install via npm](#install-via-npm)
- [Basic Setup](#basic-setup)
- [Configuration](#configuration)
- [Using CDN](#using-cdn)
- [Verify Installation](#verify-installation)
- [Next Steps](#next-steps)

</div>

# Installation

<p class="lead">Get started with JTB by installing it via npm or using a CDN for quick prototyping.</p>

## Install via npm

The recommended way to install JTB is through npm:

```bash +code
npm install nk_jtb
```

## Basic Setup

**Import everything:**

```scss +code
@use 'nk_jtb/src/build';
```

**Or import selectively:**

```scss +code
@use 'nk_jtb/src/base';
@use 'nk_jtb/src/components';
@use 'nk_jtb/src/utilities/spacing';
@use 'nk_jtb/src/utilities/flexbox';
// ... add what you need
```

## Configuration

Override variables before importing:

```scss +code
@use 'nk_jtb/src/maps_and_variables/colors' with (
    $primary: #7c0442,
    $secondary: #fff4e5
);

@use 'nk_jtb/src/build';
```

**Available modules:** colors, spacing, typography, breakpoints, borders

**Vite config (if needed):**

```js +code
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "nk_jtb/src/build" as *;`
            }
        }
    }
});
```

## Using CDN

For quick prototyping without a build process:

> **Note:** CDN usage is not recommended for production as you cannot customize variables or tree-shake unused styles.

```html +code
<link rel="stylesheet" href="https://unpkg.com/nk_jtb@latest/dist/css/build.css">
```

## Verify Installation

Test it works:

```html +code
<div class="flex jcc aic">
    <div class="bx primary p-3">
        <h1 class="txt-white">JTB is working!</h1>
    </div>
</div>
```

## Next Steps

- [Introduction](introduction.md) - JTB philosophy
- [Naming Conventions](conventions.md) - Understanding class names  
- [Responsive Design](responsive-design.md) - Breakpoint patterns

