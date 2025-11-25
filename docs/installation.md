<div class="toc" data-toc>

- [Install via npm](#install-via-npm)
- [Basic Setup](#basic-setup)
- [Configuration](#configuration)

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
