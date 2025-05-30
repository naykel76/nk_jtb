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