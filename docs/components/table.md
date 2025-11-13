<div class="toc" data-toc>

- [Base table](#base-table)
- [Customization](#customization)
- [Configuration Variables](#configuration-variables)
- [Tips and Tricks](#tips-and-tricks)
</div>

# Tables

<p class="lead">Tables provide structure for displaying tabular data with sensible defaults.</p>

## Base table

Standard HTML table with no additional classes required.

```html + code +render +collapse
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

## Customization

Tables work with all standard utilities and themes - no special table-specific classes needed.

**Everything you'd expect works:**

Apply utilities to `<table>`, `<tr>`, `<th>`, or `<td>` - context handles the rest.

```html + code +render +collapse
<table>
    <thead>
        <tr>
            <th>Status</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Price</th>
        </tr>
    </thead>
    <tbody>
        <tr class="success-light">
            <td>In Stock</td>
            <td class="text-right">12</td>
            <td class="text-right">$799</td>
        </tr>
        <tr class="warning-light">
            <td>Low Stock</td>
            <td class="text-right">3</td>
            <td class="text-right">$249</td>
        </tr>
        <tr class="danger-light">
            <td>Out of Stock</td>
            <td class="text-right">0</td>
            <td class="text-right">$189</td>
        </tr>
    </tbody>
</table>
```

```html + code +render +collapse
<table>
    <thead class="bg-blue-500 txt-white">
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
            <td class="bdr-red bdr-3">Studio Headphones</td>
            <td>Audio Gear</td>
            <td>$249</td>
        </tr>
        <tr>
            <td>MIDI Keyboard</td>
            <td  class="bg-blue-200">Controllers</td>
            <td>$189</td>
        </tr>
    </tbody>
</table>
```
## Configuration Variables

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

## Tips and Tricks

```scss +code
// Remove all borders
$table-border-color: transparent;

// Borders match text color
$table-border-color: currentColor;
```


