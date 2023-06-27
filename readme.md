<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Yet another utility based framework based on flex-box and grid.

> Because without reinventing the wheel we wouldn’t have fast cars.
> -- Nathan Watts





## Naming conventions

- Use dash-separated for scss files and variable names
- Use camelCase for function files and function names
- Use camelCase for mixin files and mixin names

## Get item from Config

    @use "../config" as *;
    @use "../functions/get" as *;

    get('shades.step', $config)
