<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Why!

> Because without reinventing the wheel we wouldn’t have fast cars.
> -- Nathan Watts

## Create documentation

```bash
npm install sassdoc -g
```

```bash
sassdoc ./src --dest ./docs
```

Use the Sass built-in `meta.function-exists()` to check if a function is available in the current scope.

Example usage in your SCSS file:

```scss
@use 'sass:meta';

@debug meta.function-exists('get-variant-value'); // Outputs 'true' if accessible, 'false' otherwise
@debug meta.function-exists('non-existent-function'); // Outputs 'false'
```


{
    "extends": "stylelint-config-standard-scss",
    "rules": {
        "max-nesting-depth": 3,
        "selector-max-compound-selectors": 3,
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-empty": true,
        "block-no-empty": true,
        "selector-max-id": 0,
        "selector-max-type": 2,
        "selector-no-qualifying-type": [true, { "ignore": ["attribute"] }],
        "no-duplicate-selectors": true,
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "unit-no-unknown": true,
        "comment-no-empty": true,
        "scss/dollar-variable-pattern": "^[a-z0-9-]+$",
        "scss/percent-placeholder-pattern": "^[a-z0-9-]+$",
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/no-duplicate-mixins": true,
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension-blacklist": ["scss"],
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/double-slash-comment-empty-line-before": ["always", { "except": ["first-nested"] }],
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-function-pattern": "^[a-z0-9-]+$",
        "scss/at-mixin-pattern": "^[a-z0-9-]+$"
    }
}