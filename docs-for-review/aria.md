# ARIA Attributes Cheat Sheet
**No!** That's the whole point of "ARIA first" - you **replace** classes with ARIA attributes.

## Don't Do Both

```html
<!-- ❌ BAD: Redundant -->
<button class="active" aria-pressed="true">Toggle</button>
<button class="disabled" aria-disabled="true">Submit</button>

<!-- ✅ GOOD: ARIA only -->
<button aria-pressed="true">Toggle</button>
<button aria-disabled="true">Submit</button>
```

## Style Directly from ARIA

```scss
// ❌ OLD WAY: Style classes
.active { background: blue; }
.disabled { opacity: 0.5; }

// ✅ NEW WAY: Style ARIA
[aria-pressed="true"] { background: blue; }
[aria-disabled="true"] { opacity: 0.5; }
```

## When You Might Still Use Classes

**Only for non-interactive, purely visual states:**

```html
<!-- Visual variants (not state) -->
<button class="btn-primary">Save</button>
<button class="btn-danger">Delete</button>

<!-- Layout/size -->
<div class="card-large">...</div>

<!-- Themes -->
<body class="dark-mode">...</body>
```

## Summary

| Type                                                          | Use             |
| ------------------------------------------------------------- | --------------- |
| **Interactive state** (pressed, expanded, selected, disabled) | ARIA attributes |
| **Visual variants** (primary, danger, large, small)           | Classes         |
| **Layout/structure**                                          | Classes         |
| **Themes**                                                    | Classes         |

**State = ARIA**  
**Style = Classes**

No more `.active`, `.pressed`, `.expanded`, `.disabled` classes!

## Interactive States
```html
<!-- Toggle buttons (on/off state) -->
<button aria-pressed="true|false">Mute</button>

<!-- Expandable content (accordions, dropdowns, menus) -->
<button aria-expanded="true|false">Show More</button>

<!-- Disabled but still focusable (to show tooltips) -->
<button aria-disabled="true|false">Submit</button>

<!-- Checkboxes/options in custom components -->
<div role="option" aria-selected="true|false">Option 1</div>

<!-- Current item in navigation/pagination -->
<a aria-current="page|step|location|date|time|true">Home</a>
```

## Visibility & Hidden Content
```html
<!-- Completely hide from screen readers -->
<div aria-hidden="true">Decorative icon</div>

<!-- Describe non-text content -->
<button aria-label="Close dialog">×</button>

<!-- Reference another element for description -->
<input aria-labelledby="label-id" aria-describedby="help-id">
```

## Form & Input States
```html
<!-- Invalid input -->
<input aria-invalid="true|false">

<!-- Required field -->
<input aria-required="true|false">

<!-- Read-only (but not disabled) -->
<input aria-readonly="true|false">
```

## Live Regions (Dynamic Content)
```html
<!-- Announce changes to screen readers -->
<div aria-live="polite|assertive|off">Loading...</div>

<!-- Common: status messages, alerts -->
<div role="status" aria-live="polite">Item added to cart</div>
<div role="alert" aria-live="assertive">Error occurred!</div>
```

## Relationships
```html
<!-- Connect label to input -->
<label id="name-label">Name</label>
<input aria-labelledby="name-label">

<!-- Connect help text -->
<input aria-describedby="help-text">
<span id="help-text">Must be 8+ characters</span>

<!-- List owns/contains items -->
<ul role="list" aria-owns="item1 item2">
```

## Common Patterns

### Tabs
```html
<button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
<div role="tabpanel" id="panel1">Content</div>
```

### Modal Dialog
```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Action</h2>
</div>
```

### Accordion
```html
<button aria-expanded="false" aria-controls="content1">Section 1</button>
<div id="content1" aria-hidden="true">Content</div>
```

### Custom Checkbox
```html
<div role="checkbox" aria-checked="true|false|mixed">Accept Terms</div>
```

## Quick Reference by Use Case

| Need                       | Use                             |
| -------------------------- | ------------------------------- |
| Toggle button state        | `aria-pressed`                  |
| Show/hide content          | `aria-expanded` + `aria-hidden` |
| Current page/item          | `aria-current`                  |
| Selected item              | `aria-selected`                 |
| Disable but keep focusable | `aria-disabled`                 |
| Hide decorative content    | `aria-hidden`                   |
| Label without visible text | `aria-label`                    |
| Invalid form field         | `aria-invalid`                  |
| Dynamic updates            | `aria-live`                     |

## CSS Styling Examples

```scss
// Toggle button
[aria-pressed="true"] { background: blue; }

// Expanded accordion
[aria-expanded="true"] { 
  .icon { transform: rotate(180deg); }
}

// Current page
[aria-current="page"] { 
  font-weight: bold;
  border-bottom: 2px solid;
}

// Selected tab
[aria-selected="true"] {
  background: white;
  border-bottom: none;
}

// Disabled state
[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}
```