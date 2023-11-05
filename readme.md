<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Yet another utility based framework.

> Because without reinventing the wheel we wouldn’t have fast cars.
> -- Nathan Watts

---

- values can be a mix of single values and key-value pairs (maps)
  as long at the map is wrapped in parentheses
- map key is the css property
- if the item prefix is omitted the key is used as the prefix

```scss
$examples-map: (
    color: (
        prefix: "#{$text-identifier}",
        values: (green, (blue: blue))
    ),
    font-size: (
        prefix: "#{$text-identifier}",
        values: $text-size-variants
    ),
    font-style: (
        prefix: "#{$text-identifier}",
        values: ( italic, normal )
    )
);

@include generateFromMapOfProperties($examples-map);
```

```scss
$grid-classes-map: (
    // identifier: (
    //     props: (property: value, property: value),
    //     breakpoints: ("sm", "md", "lg", "xl"),
    //     values: (value, (key: value))
    // ),
    gap: (
        props: (gap: $gap),
        breakpoints: ("sm", "md", "lg", "xl")
    ),
    grid: (
        props: (display: grid, gap: $gap),
        breakpoints: ("sm", "md", "lg", "xl")
    ),
);
```


<code-first-col></code-first-col>
|                    |  Property Map   |         Class Map          |
| :----------------- | :-------------: | :------------------------: |
| Key                | Is the property | Is the class or identifier |
| Responsive Classes |       No        |            Yes             |
|                    |                 |                            |
|                    |                 |                            |
|                    |                 |                            |
|                    |                 |                            |

```scss
$classes-map: (
    class: (
        props: (property: value, property: value),
        breakpoints: ("sm", "md", "lg", "xl")
    ),
);
```
```scss
$property-map: (
    property: (
        values: (value, (key: value))
    ),
);
```
