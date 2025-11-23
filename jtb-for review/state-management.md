# State Management Utility

Semantic utility classes for managing interactive states across components. Provides
consistent hover, active, focus, and disabled behaviors with support for both class-based
and ARIA-based state management.

## Key Features

- **Hybrid Approach** - Supports both `.active` class and `aria-current` attribute for
  flexibility
- **Global Disabled Handling** - Single source of truth for disabled states across all
  components
- **Interaction Pattern Focus** - State classes define behavior patterns, not specific
  components
- **Subtle by Design** - Minimal visual changes that assume color differences aren't
  needed for state communication

## Usage

State classes manage interaction behavior and can be applied to any component (links,
buttons, cards, etc.).

```html
<!-- Class-based state -->
<a class="state-nav active">Home</a>

<!-- ARIA-based state -->
<a class="state-nav" aria-current="page">Home</a>

<!-- Disabled state -->
<button class="state-nav" disabled>Admin</button>
<a class="state-nav" aria-disabled="true">Settings</a>
```

## Implementation

### CSS Variables

<!-- does not include base colors that is handles in the component or theme -->

```scss
:root {
    --nav-bg: #{map.get($oklch-colors, sky-100)};
    --nav-text: #{map.get($oklch-colors, sky-700)};
    --nav-bg-hover: #{map.get($oklch-colors, sky-100)};
    --nav-bg-active: #{map.get($oklch-colors, sky-200)};
    --nav-border: #{map.get($oklch-colors, sky-200)};
}
```

### State Class

```scss
.state-nav {
    &:hover:not(.disabled, :disabled, [aria-disabled]) {
        background: var(--nav-bg-hover);
    }

    &:is(.active, :active, [aria-current]):not(.disabled, :disabled, [aria-disabled]) {
        background: var(--nav-bg-active);
    }

    &:focus-visible:not(.disabled, :disabled, [aria-disabled]) {
        outline: 2px solid var(--nav-border);
        outline-offset: 2px;
    }
}
```

### Global Disabled Styles

Disabled states are handled globally in base styles:

```scss
:is(.disabled, :disabled, [aria-disabled]) {
    cursor: not-allowed;
    opacity: 0.6;
}
```

