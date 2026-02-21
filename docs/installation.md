# Installation

<p class="lead">Get started with JTB in minutes.</p>

## Install

```bash +code
npm install nk_jtb
```

## Import

```scss +code
@use 'nk_jtb/src/build';
```

## Configure

Override variables before importing:

```scss +code
@use 'nk_jtb/src/maps_and_variables/colors' with (
    $primary: #7c0442,
    $secondary: #fff4e5
);

@use 'nk_jtb/src/build';
```

## Selective Import

Import only what you need:

```scss +code
@use 'nk_jtb/src/base';
@use 'nk_jtb/src/components';
@use 'nk_jtb/src/utilities/spacing';
@use 'nk_jtb/src/utilities/flexbox';
```

See [Naming Conventions](conventions.md) for available modules.
