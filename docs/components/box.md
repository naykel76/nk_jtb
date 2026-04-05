# Box
The `.bx` component is a structured content container. Add `.bx-header` and `.bx-footer` for sections that bleed to the box edges.

## Structure
```html +code class="bx"
<div class="bx">
    <div class="bx-header">
        <h3 class="bx-title">Title</h3>
    </div>
    <div class="bx-content">
        <!-- content -->
    </div>
    <div class="bx-footer">
        <!-- footer -->
    </div>
</div>
```

The header and footer are optional. Use `.bx-content` when pairing content with a `.bx-header` — the `:where(.bx-header + .bx-content)` selector applies edge-to-edge layout to that pairing automatically.

## Basic Usage
```html +demo-folded class="bx"
<div class="bx">
    <p>A basic box with default padding, border, and shadow.</p>
</div>
```

## With Header
`.bx-header` bleeds to the box edges using negative inline margins. Use `.bx-title` inside for the styled title text.

```html +demo-folded class="bx"
<div class="bx">
    <div class="bx-header">
        <h3 class="bx-title">Section Title</h3>
    </div>
    <div class="bx-content">
        <p>Content below the header.</p>
    </div>
</div>
```

## With Footer
`.bx-footer` follows the same edge-bleed pattern as the header.

```html +demo-folded class="bx"
<div class="bx">
    <p>Box content with a footer below.</p>
    <div class="bx-footer flex justify-end gap-1">
        <button class="btn sm">Cancel</button>
        <button class="btn sm primary">Save</button>
    </div>
</div>
```

## Header and Footer
```html +demo-folded class="bx"
<div class="bx">
    <div class="bx-header flex justify-between items-center">
        <h3 class="bx-title">Card Title</h3>
        <button class="btn xs">Edit</button>
    </div>
    <div class="bx-content">
        <p>Main content sits between the header and footer.</p>
    </div>
    <div class="bx-footer flex justify-end gap-1">
        <button class="btn sm">Cancel</button>
        <button class="btn sm primary">Save</button>
    </div>
</div>
```

## Themes
Apply context-aware theme modifiers directly to `.bx`:

```html +demo-folded class="bx" preview-class="grid cols-2 gap-2"
<div class="bx primary">
    <div class="bx-header"><h4 class="bx-title">Primary</h4></div>
    <div class="bx-content"><p class="txt-sm">Primary-themed box.</p></div>
</div>
<div class="bx teal">
    <div class="bx-header"><h4 class="bx-title">Teal</h4></div>
    <div class="bx-content"><p class="txt-sm">Teal-themed box.</p></div>
</div>
<div class="bx danger-light">
    <div class="bx-header"><h4 class="bx-title">Danger Light</h4></div>
    <div class="bx-content"><p class="txt-sm">Danger light variant.</p></div>
</div>
<div class="bx success-light">
    <div class="bx-header"><h4 class="bx-title">Success Light</h4></div>
    <div class="bx-content"><p class="txt-sm">Success light variant.</p></div>
</div>
```

## Auto Spacing
Content inside `.bx` follows the auto-spacing system. The first direct child (excluding `.bx-header` and `.bx-footer`) has its `margin-block-start` reset to prevent a double gap at the top.

```html +demo-folded class="bx"
<div class="bx">
    <h3>No Manual Spacing Needed</h3>
    <p>Paragraphs and content elements space themselves automatically.</p>
    <ul>
        <li>Consistent vertical rhythm</li>
        <li>No utility classes required for basic content flow</li>
    </ul>
</div>
```

## CSS Custom Properties (review)
| Property                    | Controls                |
| --------------------------- | ----------------------- |
| `--box-border-color`        | Border color            |
| `--box-border-radius`       | Corner rounding         |
| `--box-title-font-size`     | `.bx-title` font size   |
| `--box-title-font-weight`   | `.bx-title` font weight |
| `--box-title-line-height`   | `.bx-title` line height |

Override scoped to a parent element to customise a specific group of boxes:

```scss +code class="bx"
.my-section {
    --box-border-radius: 1rem;
    --box-border-color: #ddd;
}
```
