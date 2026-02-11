# Box Component

The box component (`.bx`) provides a container with consistent padding, borders,
and optional header/footer sections. It uses CSS custom properties for easy
theming and works with context-aware modifiers.

-------------------------------------------------------------------------------

## Basic Box

A simple box with content:

```html +demo-folded
<div class="bx">
    <p>This is a basic box with default styling. It includes padding, a subtle border, and a light shadow.</p>
</div>
```

-------------------------------------------------------------------------------

## Box with Header

Add a header section that extends to the edges:

```html +demo-folded
<div class="bx">
    <div class="bx-header">
        <h3 class="bx-title">Box Title</h3>
    </div>
    <div class="bx-content">
        <p>The header extends to the box edges with a bottom border. The negative margin pulls it to the edges while maintaining consistent padding.</p>
    </div>
</div>
```

-------------------------------------------------------------------------------

## Box with Footer

Add a footer section for actions or metadata:

```html +demo-folded
<div class="bx">
    <div class="bx-content">
        <p>Content goes here. The footer appears at the bottom with a top border separator.</p>
    </div>
    <div class="bx-footer flex justify-between items-center">
        <span class="txt-muted txt-sm">Last updated: Today</span>
        <div class="flex gap-1">
            <button class="btn">Cancel</button>
            <button class="btn primary">Save</button>
        </div>
    </div>
</div>
```

-------------------------------------------------------------------------------

## Complete Box with Header and Footer

Combine all sections for a complete card-like component:

```html +demo-folded
<div class="bx">
    <div class="bx-header flex justify-between items-center">
        <h3 class="bx-title">User Profile</h3>
        <button class="btn xs icon-only">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
    </div>
    <div class="bx-content">
        <div class="flex gap-2 items-center mb-2">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center txt-white txt-lg">JD</div>
            <div>
                <h4 class="fw-600">John Doe</h4>
                <p class="txt-muted txt-sm">Software Engineer</p>
            </div>
        </div>
        <p class="txt-sm">Experienced developer with a passion for clean code and modern frameworks. Specializes in frontend architecture.</p>
    </div>
    <div class="bx-footer">
        <div class="flex gap-1 justify-end">
            <button class="btn sm">Message</button>
            <button class="btn sm primary">View Profile</button>
        </div>
    </div>
</div>
```

-------------------------------------------------------------------------------

## Themed Boxes

Apply context-aware modifiers for different visual styles:

```html +demo-folded
<div class="grid gap-2 cols-2">
    <div class="bx primary">
        <div class="bx-header">
            <h4 class="bx-title">Primary Theme</h4>
        </div>
        <div class="bx-content">
            <p class="txt-sm">Uses the primary color for borders and accents. Works across all components.</p>
        </div>
    </div>
    
    <div class="bx teal">
        <div class="bx-header">
            <h4 class="bx-title">Teal Theme</h4>
        </div>
        <div class="bx-content">
            <p class="txt-sm">Context-aware theming adapts to any color in the framework palette.</p>
        </div>
    </div>
    
    <div class="bx danger-light">
        <div class="bx-header">
            <h4 class="bx-title">Danger Light</h4>
        </div>
        <div class="bx-content">
            <p class="txt-sm">Advanced themes include background, text, and border color combinations.</p>
        </div>
    </div>
    
    <div class="bx success-light">
        <div class="bx-header">
            <h4 class="bx-title">Success Light</h4>
        </div>
        <div class="bx-content">
            <p class="txt-sm">Light variants provide subtle backgrounds with appropriate contrast.</p>
        </div>
    </div>
</div>
```

-------------------------------------------------------------------------------

## Responsive Behavior

Boxes work responsively with utility classes:

```html +demo-folded
<div class="bx md:p-2 p-1">
    <div class="bx-header">
        <h3 class="bx-title txt-base md:txt-lg">Responsive Padding</h3>
    </div>
    <div class="bx-content">
        <p>This box uses responsive utility classes for padding. On mobile: 1rem, on medium+: 2rem.</p>
        <p class="txt-muted txt-sm mt-1">Resize your browser to see the padding change.</p>
    </div>
</div>
```

-------------------------------------------------------------------------------

## Nested Boxes

Boxes can be nested for complex layouts:

```html +demo-folded
<div class="bx">
    <div class="bx-header">
        <h3 class="bx-title">Parent Container</h3>
    </div>
    <div class="bx-content">
        <p class="mb-2">This outer box contains nested boxes:</p>
        
        <div class="grid gap-1 cols-2">
            <div class="bx sm p-1">
                <h4 class="fw-600 txt-sm">Nested Box 1</h4>
                <p class="txt-muted txt-xs">Child container with smaller padding.</p>
            </div>
            
            <div class="bx sm p-1">
                <h4 class="fw-600 txt-sm">Nested Box 2</h4>
                <p class="txt-muted txt-xs">Consistent spacing is maintained.</p>
            </div>
        </div>
    </div>
</div>
```

-------------------------------------------------------------------------------

## CSS Custom Properties

The box component uses these CSS custom properties for theming:

```scss +code
:root {
    --box-border-color: #{$border-color};
    --box-border-radius: 0.375rem;
    --box-title-font-size: 1.125rem;
    --box-title-font-weight: 600;
    --box-title-line-height: 1.25;
    --box-padding: 1.25rem;
}
```

Override these variables to customize all boxes:

```scss +code
// Custom box styling
.my-custom-boxes {
    --box-border-radius: 1rem;
    --box-border-color: #ddd;
    --box-padding: 2rem;
}
```

-------------------------------------------------------------------------------

## Auto-Spacing Integration

The box component works with the framework's auto-spacing system. Content
elements inside boxes automatically receive consistent vertical spacing:

```html +demo-folded
<div class="bx">
    <h3>No Extra Classes Needed</h3>
    <p>Paragraphs, lists, and other content elements automatically space themselves.</p>
    <ul>
        <li>Automatic spacing</li>
        <li>Consistent gaps</li>
        <li>Works with the cascade</li>
    </ul>
    <p>The auto-spacing system handles margins, so you don't need utility classes for basic content flow.</p>
</div>
```

-------------------------------------------------------------------------------

## Accessibility Considerations

- Use semantic HTML inside boxes (`<header>`, `<main>`, `<footer>` if
  appropriate)
- Ensure sufficient color contrast with themed boxes
- The `.bx-title` class provides appropriate heading hierarchy
- Keyboard navigation works naturally with focusable elements inside boxes

-------------------------------------------------------------------------------

## Best Practices

1. **Structure**: Use `.bx-header`, `.bx-content`, and `.bx-footer` for clear
   organization
2. **Spacing**: Let the auto-spacing system handle content gaps, use utilities
   for specific needs
3. **Theming**: Apply theme classes (`.primary`, `.teal`, etc.) to the `.bx`
   element, not children
4. **Responsiveness**: Combine with utility classes for responsive behavior
5. **Nesting**: Keep nesting shallow - avoid boxes inside boxes inside boxes

-------------------------------------------------------------------------------

## Related Components

- **Cards**: Similar to boxes but with more opinionated styling
- **Panels**: For collapsible content sections
- **Modals**: Overlays that often use box styling internally
