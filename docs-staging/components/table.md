# Tables (review)

<p class="lead">Tables provide structure for displaying tabular data with sensible defaults.</p>

## Basic Usage (review)

Standard HTML table with no additional classes required.

```html +demo-folded class="bx example-jtb"
<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Acoustic Guitar</td>
            <td>Instruments</td>
            <td>$799</td>
        </tr>
        <tr>
            <td>Studio Headphones</td>
            <td>Audio Gear</td>
            <td>$249</td>
        </tr>
        <tr>
            <td>MIDI Keyboard</td>
            <td>Controllers</td>
            <td>$189</td>
        </tr>
    </tbody>
</table>
```

## SCSS Variables (review)

```scss +code
// Border styling
$table-border-color: $border-color !default;  // transparent, currentColor, or any color
$table-border-width: 1px !default;

// Font and Header styling
$table-font-size: 0.875rem !default;
$table-header-bg: rgb(0 0 0 / 2%) !default;
$table-header-font-weight: 500 !default;
$table-header-letter-spacing: 0.05em !default;
$table-header-text-transform: uppercase !default;

// Spacing
$table-padding-x: 0.75rem !default;
$table-padding-y: 0.75rem !default;
```
