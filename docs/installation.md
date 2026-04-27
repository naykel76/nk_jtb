# Installation (review)

<p class="lead">Get started with JTB in minutes.</p>

## Install (review)

```bash +code
npm install nk_jtb
```

## Import (review)

```scss +code
@use 'nk_jtb/src/build' as *;
```

## Configure (review)

Override variables before importing. See [Variable System](/docs/jtb/variable-system) for
details.

```scss +code
@forward 'nk_jtb/src/maps_and_variables/base' with (
    $primary:   #7c0442,
    $secondary: #fff4e5
);

@use 'nk_jtb/src/build' as *;
```

## Selective Import (review)

Import only the layers you need:

```scss +code
@use 'nk_jtb/src/base' as *;
@use 'nk_jtb/src/utilities/spacing' as *;
@use 'nk_jtb/src/utilities/flexbox' as *;
```

