# JTB Responsive System

<p class="lead">Three prefix types control when utilities apply across screen sizes.</p>

## Introduction

JTB provides three responsive prefix types:

**`{breakpoint}:`** — from breakpoint upward (mobile-first cascade)

Applies at this breakpoint and all larger screens. Use for progressive
enhancement — padding, text size, spacing that grows with screen size.

```html +code
<!-- Hidden on mobile, visible from md and up -->
<div class="hidden md:block">...</div>

<!-- Visible on mobile, hidden from lg and up -->
<div class="block lg:hidden">...</div>
```

**`on-{breakpoint}:`** — only within breakpoint range (non-cascading)

Applies only within the breakpoint range. Styles **DO NOT** cascade. Use when
each breakpoint needs completely different treatment — unique layouts or
breakpoint-specific designs.

```html +code
<!-- Visible only at sm (576px–767px) -->
<div class="hidden on-sm:block">...</div>

<!-- Hidden only at md -->
<div class="on-md:hidden">...</div>
```

**`to-{breakpoint}:`** — up to breakpoint (mobile-only styles)

Applies to all sizes smaller than this breakpoint (up to, but not including, the
specified breakpoint). Use for mobile-only styles or creating visibility
windows.

```html +code
<!-- Visible only below md -->
<div class="to-md:block">...</div>

<!-- Mobile only (explicit window) -->
<div class="block md:hidden">...</div>
```

## Breakpoint System

| Breakpoint | Typical Devices | Min Width | Range         |
| ---------- | --------------- | --------- | ------------- |
| `sm`       | Large phones    | 576px     | 576px–767px   |
| `md`       | Tablets         | 768px     | 768px–991px   |
| `lg`       | Small laptops   | 992px     | 992px–1199px  |
| `xl`       | Desktops        | 1200px    | 1200px–1399px |
| `xxl`      | Wide screens    | 1600px    | 1600px+       |

## Common Visibility Windows

### Tablet Only (md range)

```html +code
<div class="hidden md:block lg:hidden">Tablet only</div>
```

### Desktop Only (md and up)

```html +code
<div class="hidden md:block">Desktop only</div>
```

### Mobile Only (below md)

```html +code
<div class="block md:hidden">Mobile only</div>
```

## Quick Reference

| Task                         | Class                       |
| ---------------------------- | --------------------------- |
| Hide on mobile, show from md | `hidden md:block`           |
| Show on mobile, hide from lg | `block lg:hidden`           |
| Show only at sm              | `hidden on-sm:block`        |
| Hide only at md              | `on-md:hidden`              |
| Mobile only (below md)       | `block md:hidden`           |
| Tablet only                  | `hidden md:block lg:hidden` |

<!-- How do I show a burger menu only on mobile? md:hidden -->
<!-- How do I hide a sidebar on mobile? to-lg:hidden -->
<!-- How do I show something only at tablet? hidden on-md:block -->
<!-- How do I hide something only at tablet? on-md:hidden -->

## Common Patterns

### Mobile-First Cascade (`{breakpoint}:`)

The most common approach. Start with mobile styles, add breakpoints for larger screens.

```html +code
<!-- Hidden on mobile, visible from md (768px) up -->
<div class="hidden md:block">Show on tablet and desktop</div>

<!-- Visible on mobile, hidden from lg (992px) up -->
<div class="block lg:hidden">Hide on large screens</div>

<!-- Show at md, hide again at lg (creates a window) -->
<div class="hidden md:block lg:hidden">Show on tablets only</div>
```

### Exact Breakpoint (`on-{breakpoint}:`)

Use when you need precise control at each size with no cascading.

```html +code
<!-- Show ONLY at small screens -->
<div class="hidden on-sm:block">Small screens only</div>

<!-- Hide ONLY at medium screens -->
<div class="on-md:hidden">Visible everywhere except tablet</div>

<!-- Different content at each breakpoint -->
<div class="on-sm:block on-md:hidden on-lg:block">Three different states</div>
```

### Desktop-First Boundary (`to-{breakpoint}:`)

Useful for hiding content below a certain size (mobile-only patterns).

```html +code
<!-- Visible on mobile, hidden from md up -->
<div class="to-md:block">Mobile only</div>

<!-- Hidden on mobile, visible from md up -->
<div class="hidden to-md:block">Desktop only</div>
```

### Visibility Windows

Create content that shows only within a specific range by combining prefixes:

```html +code
<!-- Tablet only (768px - 991px) -->
<div class="md:block lg:hidden">Tablet only</div>

<!-- Desktop only (≥ 992px) -->
<div class="lg:block">Desktop content</div>

<!-- Mobile only (< 768px) -->
<div class="to-md:block">Mobile content</div>
```
