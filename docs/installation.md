# Installation

<p class="lead">Get started with JTB in minutes.</p>

## Install

```bash +code
npm install nk_jtb
```

## Import

```scss +code
@use 'nk_jtb/src/build' as *;
```

## Configure

Override variables before importing. See [Customisation](customisation.md) for
details.

```scss +code
@forward 'nk_jtb/src/maps_and_variables/base' with (
    $primary:   #7c0442,
    $secondary: #fff4e5
);

@use 'nk_jtb/src/build' as *;
```

## Selective Import

Import only the layers you need:

```scss +code
@use 'nk_jtb/src/base' as *;
@use 'nk_jtb/src/utilities/spacing' as *;
@use 'nk_jtb/src/utilities/flexbox' as *;
```
