<div class="toc" data-toc>

- [Introduction](#introduction)
- [Breakpoint System](#breakpoint-system)
- [Understanding Responsive Prefixes](#understanding-responsive-prefixes)
    - [From Breakpoints: `{breakpoint}:`](#from-breakpoints-breakpoint)
    - [Specific Range: `on-{breakpoint}:`](#specific-range-on-breakpoint)
    - [Up To Breakpoints: `to-{breakpoint}:`](#up-to-breakpoints-to-breakpoint)
- [Visibility Patterns](#visibility-patterns)
    - [The Visibility Window Pattern](#the-visibility-window-pattern)
    - [Traditional Mobile-First Pattern](#traditional-mobile-first-pattern)
    - [Pattern Comparison](#pattern-comparison)
- [Container Queries](#container-queries)
- [Practical Examples](#practical-examples)
    - [Content Switching](#content-switching)
    - [Progressive Enhancement](#progressive-enhancement)
    - [Breakpoint-Specific Layouts](#breakpoint-specific-layouts)
- [When to Use Each Prefix](#when-to-use-each-prefix)
    - [Quick Decision Guide](#quick-decision-guide)
    - [Common Scenarios](#common-scenarios)
</div>

# JTB Responsive System

<p class="lead">A flexible responsive system that gives you precise control over when styles apply across different screen sizes and container widths.</p>

## Introduction

JTB provides three types of responsive prefixes that let you control exactly when styles are applied. Whether you're building mobile-first progressive layouts or creating precise visibility windows for different screen sizes, the framework adapts to your approach.

> **Availability Note:** Standard `{breakpoint}:` prefixes are available on most utilities. The `on-{breakpoint}:` and `to-{breakpoint}:` prefixes are built by default for visibility and display utilities. Use the provided mixins to generate these prefixes for other utilities as needed.

## Breakpoint System

JTB defines five breakpoint sizes that represent common device categories:

| Breakpoint | Typical Devices | Min Width | Range           |
| ---------- | --------------- | --------- | --------------- |
| `sm`       | Large phones    | 576px     | 576px - 767px   |
| `md`       | Tablets         | 768px     | 768px - 991px   |
| `lg`       | Small laptops   | 992px     | 992px - 1199px  |
| `xl`       | Desktops        | 1200px    | 1200px - 1399px |
| `xxl`      | Wide screens    | 1400px    | 1400px+         |

## Understanding Responsive Prefixes

### From Breakpoints: `{breakpoint}:`

**Applies from the breakpoint and larger** - the mobile-first approach where styles cascade upward.

```html
<div class="md:bg-blue">Blue from tablets up (768px+)</div>
<div class="lg:text-2xl">Large text from desktop up (992px+)</div>
```

**When it applies:**
- `md:` → 768px and larger
- `lg:` → 992px and larger
- `xl:` → 1200px and larger

### Specific Range: `on-{breakpoint}:`

**Applies only within a specific breakpoint range** - styles that should NOT cascade to other sizes.

```html
<div class="on-md:bg-red">Red only on tablets (768px-991px)</div>
<div class="on-lg:grid">Grid only on desktop (992px-1199px)</div>
```

**When it applies:**
- `on-sm:` → 576px - 767px only
- `on-md:` → 768px - 991px only
- `on-lg:` → 992px - 1199px only

### Up To Breakpoints: `to-{breakpoint}:`

**Applies up to (but not including) the breakpoint** - useful for mobile-only or small-screen-only styles.

```html
<div class="to-lg:hidden">Hidden below desktop (< 992px)</div>
<div class="to-md:text-sm">Small text on phones (< 768px)</div>
```

**When it applies:**
- `to-sm:` → below 576px
- `to-md:` → below 768px
- `to-lg:` → below 992px

## Visibility Patterns

JTB's responsive system shines when controlling element visibility. There are two approaches, each with distinct advantages.

### The Visibility Window Pattern

**The elegant approach:** Elements are visible by default. You only declare where visibility turns OFF, letting visibility emerge naturally in the gaps between your declarations.

```html
<!-- Visible only on mobile (< 768px) -->
<div class="md:invisible">
    Mobile-only content
</div>

<!-- Visible only on tablets (768px - 991px) -->
<div class="to-md:invisible lg:invisible">
    Tablet-only content
</div>

<!-- Visible only on desktop (≥ 992px) -->
<div class="to-lg:invisible">
    Desktop-only content
</div>
```

**Why this works:**
- **One class per boundary** instead of multiple show/hide classes
- **Declarative intent:** "block visibility at these edges"
- **Default visible state** is implicit and free
- **Cleaner HTML** with fewer classes

**Visual representation:**
```
Mobile (< 768px)        Tablet (768-991px)      Desktop (≥ 992px)
─────────────────────────────────────────────────────────────────
md:invisible            [visible by default]    [visible by default]
to-md:invisible         lg:invisible            [visible by default]
[visible by default]    to-md:invisible         lg:invisible
```

### Traditional Mobile-First Pattern

**The progressive approach:** Start hidden, explicitly show at each breakpoint.

```html
<!-- Hidden by default, visible from tablets up -->
<div class="hidden md:block">
    Tablet and desktop content
</div>

<!-- Visible on mobile, hidden from tablets up -->
<div class="block md:hidden">
    Mobile-only content
</div>

<!-- Complex visibility: mobile, hide on tablet, show on desktop -->
<div class="block md:hidden lg:block">
    Mobile and desktop content
</div>
```

**When to use:**
- Building layouts that progressively enhance
- When you're thinking in terms of "add this feature at larger sizes"
- Working with other responsive utilities that cascade

### Pattern Comparison

| Aspect         | Visibility Window | Mobile-First             |
| -------------- | ----------------- | ------------------------ |
| Classes needed | 1-2 per element   | 2-3 per element          |
| Mental model   | "Block at edges"  | "Show/hide at each step" |
| Best for       | Show/hide content | Progressive enhancement  |
| Default state  | Visible           | Hidden                   |
| Clarity        | High for ranges   | High for cascades        |

**Choose Visibility Windows when:**
- You're specifically showing/hiding elements at different breakpoints
- You want cleaner HTML with fewer classes
- You're thinking in terms of visibility ranges

**Choose Mobile-First when:**
- Building layouts that progressively enhance
- Working with utilities that naturally cascade (sizing, spacing)
- You prefer explicit visibility states at each breakpoint

## Container Queries

All responsive prefixes also work with container queries using the `cq-` prefix. Container queries respond to the parent container's width instead of the viewport.

```html
<div style="container-type: inline-size">
    <!-- Responds to container width, not viewport -->
    <div class="cq-md:invisible">Hidden when container ≥ 768px</div>
    <div class="cq-to-lg:invisible">Hidden when container < 992px</div>
    <div class="cq-on-md:bg-blue">Blue only when container is tablet-sized</div>
</div>
```

**Container query prefixes:**
- `cq-{breakpoint}:` - from container width and up
- `cq-on-{breakpoint}:` - only within container width range
- `cq-to-{breakpoint}:` - up to container width

## Practical Examples

### Content Switching

**Using Visibility Windows:**
```html
<div class="feature-section">
    <!-- Mobile version -->
    <div class="md:invisible">
        <h2>Tap to Learn More</h2>
        <button>Show Details</button>
    </div>
    
    <!-- Tablet version -->
    <div class="to-md:invisible lg:invisible">
        <h2>Explore Features</h2>
        <div class="grid cols-2">...</div>
    </div>
    
    <!-- Desktop version -->
    <div class="to-lg:invisible">
        <h2>Full Feature Overview</h2>
        <div class="grid cols-3">...</div>
    </div>
</div>
```

**Using Mobile-First:**
```html
<div class="feature-section">
    <!-- Mobile version -->
    <div class="block md:hidden">
        <h2>Tap to Learn More</h2>
        <button>Show Details</button>
    </div>
    
    <!-- Desktop version -->
    <div class="hidden md:block">
        <h2>Full Feature Overview</h2>
        <div class="grid cols-2 lg:cols-3">...</div>
    </div>
</div>
```

### Progressive Enhancement

Mobile-first cascade pattern works best for progressive enhancement:

```html
<!-- Text sizing that grows with screen size -->
<h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    Heading
</h1>

<!-- Padding that increases at larger screens -->
<div class="p-4 md:p-6 lg:p-8 xl:p-12">
    Content with progressive spacing
</div>

<!-- Navigation that transforms -->
<nav class="
    hidden lg:flex
    lg:gap-4 lg:items-center
    xl:gap-6
">
    Desktop Navigation
</nav>
<button class="lg:hidden">Mobile Menu</button>
```

### Breakpoint-Specific Layouts

Use `on-{breakpoint}:` when layouts shouldn't cascade:

```html
<!-- Different layout strategy per breakpoint -->
<div class="
    flex-col
    on-sm:flex-row on-sm:gap-2
    on-md:grid on-md:cols-2 on-md:gap-4
    on-lg:grid on-lg:cols-3 on-lg:gap-6
    on-xl:grid on-xl:cols-4 on-xl:gap-8
">
    Items arranged differently at each breakpoint
</div>

<!-- Tablet-specific design treatment -->
<aside class="hidden on-md:block on-md:sidebar-layout">
    Tablet-optimized sidebar
</aside>
```

## When to Use Each Prefix

### Quick Decision Guide

**Use `{breakpoint}:` when:**
- Building layouts mobile-first
- Styles should cascade to larger screens
- Working with sizing, spacing, typography
- Example: `md:p-6` (padding from tablets up)

**Use `on-{breakpoint}:` when:**
- Layouts differ completely at each breakpoint
- Styles should NOT cascade
- Each screen size needs unique treatment
- Example: `on-md:grid on-md:cols-2` (grid only on tablets)

**Use `to-{breakpoint}:` when:**
- Creating mobile-only or small-screen-only styles
- Building visibility windows
- Styles should NOT apply beyond a certain point
- Example: `to-lg:invisible` (hidden on desktop)

### Common Scenarios

```html
<!-- Show/hide with visibility windows -->
<div class="md:invisible">Mobile only</div>
<div class="to-lg:invisible">Desktop only</div>

<!-- Progressive enhancement -->
<div class="hidden lg:flex">Desktop nav</div>
<div class="p-4 md:p-6 lg:p-8">Growing padding</div>

<!-- Breakpoint-specific layouts -->
<div class="on-md:grid on-md:cols-2">Tablet grid</div>

<!-- Content switching (mobile-first) -->
<div class="block md:hidden">Mobile content</div>
<div class="hidden md:block">Desktop content</div>

<!-- Responsive grid (cascade) -->
<div class="grid cols-1 sm:cols-2 lg:cols-3 xl:cols-4">
    Grid that grows with screen size
</div>
```

---

**Pro Tip:** Mix and match patterns based on what you're building. Use visibility windows for show/hide, mobile-first for progressive enhancement, and `on-{breakpoint}:` for breakpoint-specific layouts. The system is flexible enough to support your mental model.