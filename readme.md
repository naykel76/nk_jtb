<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Yet another utility based framework based on flex-box and grid.

> Because without reinventing the wheel we wouldn’t have fast cars.
> -- Nathan Watts





## Naming conventions

- Use dash-separated for scss files and variable names
- Use camelCase for function files and function names
- Use camelCase for mixin files and mixin names
- Do not prefix helper mixins, for example `basicColorScheme` NOT `createColorScheme`

## Get item from Config

    @use "../config" as *;
    @use "../functions/get" as *;

    get('shades.step', $config)

## Mixing Rules and Standards

When creating mixins, where ever possible the mixin arguments should use the following order.

`($property, $map, $identifier: "")`

<code-first-col></code-first-col>
| Argument    | Description                                      |
| ----------- | ------------------------------------------------ |
| $property   | CSS property. `color`, `border`, `font-size` ... |
| $map        | SCSS map used in loop                            |
| $identifier | Used as all or part of the class name.           |


- do not include a dash '-' in the identifier name, this is handled by the mixin of function when
  creating the class.
- Leave the `$identifier` blank to use map `$key` as the class name. This is useful when you are creating base classes. For example `mxy` or `bdr`

basicColorSchemeProperties??

###### How can I tell what mixin is creating properties vs a mixin that creates a class?

helper vs creator

leave helpers un-prefixed??
