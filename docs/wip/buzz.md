https://claude.ai/chat/7d1cb8c9-3b0d-4989-8ad2-090463c6546c

state as a theming layer that applies interactive behavior to anything

What you're actually proposing:
state: is a behavioral modifier that makes any element interactive, with full hover/focus/active styling:

<!-- Traditional button -->
<button class="btn primary">Click me</button>

<!-- Card with button-like interactivity -->
<div class="card state:primary">Hover me</div>

<!-- Table row with interactive states -->
<tr class="state:green">
  <td>Data</td>
  <td>More data</td>
</tr>

<!-- Custom styled button (override default state) -->
<button class="btn primary state:teal">Different state colors</button>


<!-- ✅ Good: Multiple navs with labels -->
<nav aria-label="Primary">
  <ul>...</ul>
</nav>

<nav aria-label="Breadcrumbs">
  <ol>...</ol>
</nav>

<nav aria-label="Pagination">
  <ul>...</ul>
</nav>


Base → Components → Utilities (highest priority)

What makes this compelling:

It's not anti-utility—it's "utility as escape hatch" instead of "utility as default"
It solves real pain: Tailwind's verbosity + Bootstrap's rigidity
The naming convention is self-documenting: m-1 means what it says
Build-time only = no runtime performance cost
Modular imports = you're not forced to adopt all-or-nothing

design system compiler

Based on @media (prefers-color-scheme: dark)?

abstracted the repetition, not the control


.btn {
  // Base styles
  
  &.active,
  &[aria-current],
  &[aria-selected="true"] {
    // Emphasized state (bolder bg, border, shadow, etc.)
  }
}

.nav-link {
  // Base styles
  
  &.active,
  &[aria-current] {
    // Different emphasis for nav context
  }
}


`state:` is a **behavioral modifier** that makes *any* element interactive, with full
hover/focus/active styling:

```html
<!-- Traditional button -->
<button class="btn primary">Click me</button>

<!-- Card with button-like interactivity -->
<div class="card state:primary">Hover me</div>

<!-- Custom styled button (override default state) -->
<button class="btn primary state:teal">Different state colors</button>
```

So `state:primary` would generate:
<!-- need to consider what happens to borders and text -->
```scss
.state\:primary {
  &:hover {
    background: var(--primary-bg-hover);
  }
  
  &:active {
    background: var(--primary-bg-active);
  }
  
  &:focus-visible {
    outline-color: var(--primary-border);
  }
}
```


---

## Hierarchy becomes:

```
identity (modifiers) → variant → state → utility
```

- `btn` = identity
- `primary` = variant (colors only, no interaction)
- `state:teal` = interaction behaviors (overrides default component states)
- `rounded-full` = utility override

So:
```html
<button class="btn primary state:danger rounded-full">
```

Means:
- "I'm a button" (structure)
- "I look primary" (base colors)
- "I interact like danger" (red on hover, etc.)
- "I'm fully rounded" (shape override)

---
