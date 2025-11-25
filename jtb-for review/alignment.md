# Alignment Utilities

| Property           | Flexbox | Grid | Description                                                                 |
|--------------------|---------|------|-----------------------------------------------------------------------------|
| `justify-content`  | ✅      | ✅   | Aligns items along the **main axis** (horizontal by default)               |
| `justify-items`    | ❌      | ✅   | Aligns items within their grid areas along the **inline axis** (horizontal)|
| `justify-self`     | ❌      | ✅   | Aligns a single grid item along the **inline axis** (horizontal)           |
| `align-content`    | ✅      | ✅   | Aligns wrapped rows or content on the **cross axis** (vertical by default) |
| `align-items`      | ✅      | ✅   | Aligns items within their container on the **cross axis** (vertical)       |
| `align-self`       | ✅      | ✅   | Aligns a single item on the **cross axis** (vertical)                      |
| `place-content`    | ❌      | ✅   | Shorthand for `align-content` and `justify-content`                        |
| `place-items`      | ❌      | ✅   | Shorthand for `align-items` and `justify-items`                            |
| `place-self`       | ❌      | ✅   | Shorthand for `align-self` and `justify-self`                              |




## Flexbox & Grid

### place-items

Utilities for controlling how items are justified and aligned at the same time.

<div class="bx">
    <!-- place-items-center aligns the items in the center of the grid container -->
    <div class="grid cols-3 place-items-center">
        <!-- flex-centered aligns the items in the center of the flex container -->
        <div class="bg-stripes-pink flex-centered wh-6">01</div>
        <div class="bg-stripes-pink flex-centered wh-6">02</div>
        <div class="bg-stripes-pink flex-centered wh-6">03</div>
        <div class="bg-stripes-pink flex-centered wh-6">04</div>
        <div class="bg-stripes-pink flex-centered wh-6">05</div>
        <div class="bg-stripes-pink flex-centered wh-6">06</div>
    </div>
</div>

