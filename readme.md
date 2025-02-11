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



## SASS Updates

Sass 3.10, Sass introduced a new approach for working with maps, which is now considered
the preferred syntax for fetching map values.

You now use dot notation (map.get()) to access map values:

```scss
@use 'sass:map';

$colors: (
  primary: #3498db,
  secondary: #2ecc71,
);

map-get($map, $key, $keys...) // OLD SASS 3.9 and below
map.get($map, $key, $keys...) // NEW SASS 3.10 and above

.primary-color {
    color: map.get($colors, primary);
}
```
