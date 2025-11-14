# JTB Responsive System - Core Concepts

<p class="lead">Understanding JTB's responsive breakpoint system, naming conventions, and when to apply styles across different screen sizes.</p>

- [Introduction](#introduction)
- [Breakpoint System](#breakpoint-system)
- [Responsive Naming Conventions](#responsive-naming-conventions)
    - [Standard Breakpoint Classes: `{breakpoint}:`](#standard-breakpoint-classes-breakpoint)
    - [Specific Breakpoint Classes: `on-{breakpoint}:`](#specific-breakpoint-classes-on-breakpoint)
    - [Up-to Breakpoint Classes: `to-{breakpoint}:`](#up-to-breakpoint-classes-to-breakpoint)
- [Mobile-First Philosophy](#mobile-first-philosophy)
    - [Mobile-First Example](#mobile-first-example)
- [Understanding the Three Approaches](#understanding-the-three-approaches)
    - [When to use standard `{breakpoint}:` classes](#when-to-use-standard-breakpoint-classes)
    - [When to use `on-{breakpoint}:` classes](#when-to-use-on-breakpoint-classes)
    - [When to use `to-{breakpoint}:` classes](#when-to-use-to-breakpoint-classes)
- [Choosing the Right Approach](#choosing-the-right-approach)
    - [Decision Tree](#decision-tree)

## Introduction

JTB provides a flexible responsive system that lets you apply different styles
at different screen sizes. The system uses prefixes to indicate when styles
should be applied, following a clear and predictable naming convention.

## Breakpoint System

JTB defines five breakpoint sizes that represent common device categories:

| Breakpoint | Description       | Typical Devices | Breakpoint Value |
| ---------- | ----------------- | --------------- | ---------------- |
| `sm`       | Small             | Large phones    | 576px            |
| `md`       | Medium            | Tablets         | 768px            |
| `lg`       | Large             | Small laptops   | 992px            |
| `xl`       | Extra Large       | Desktops        | 1200px           |
| `xxl`      | Extra Extra Large | Large screens   | 1400px           |

## Responsive Naming Conventions

JTB uses three different prefixes to control when styles are applied. Each
prefix has a specific meaning and use case:

### Standard Breakpoint Classes: `{breakpoint}:`

The most common pattern - classes that apply from a breakpoint and up
(mobile-first):

```html +torchlight-html
<!-- Apply from medium screens and larger -->
<div class="md:bg-blue">Blue background on tablets and up</div>

<!-- Apply from large screens and larger -->
<div class="lg:text-2xl">Large text on desktop and up</div>
```

**Key concept**: `md:bg-blue` means "blue background on medium screens AND
larger screens". It's not just medium - it's medium and everything bigger.

### Specific Breakpoint Classes: `on-{breakpoint}:`

Classes that apply only within a specific breakpoint range:

```html +torchlight-html
<!-- Apply only on medium screens (not smaller, not larger) -->
<div class="on-md:bg-red">Red background only on tablets</div>

<!-- Apply only on large screens -->
<div class="on-lg:text-center">Centered only on desktop</div>
```

**Key concept**: `on-md:bg-red` means "red background ONLY on medium screens".
It won't apply on small phones or large desktops.

### Up-to Breakpoint Classes: `to-{breakpoint}:`

Classes that apply up to but not including a breakpoint:

```html +torchlight-html
<!-- Apply on screens smaller than large -->
<div class="to-lg:hidden">Hidden on mobile and tablets, visible on desktop</div>

<!-- Apply up to medium screens -->
<div class="to-md:text-sm">Small text on phones and small tablets</div>
```

**Key concept**: `to-lg:hidden` means "hidden on everything SMALLER than large
screens". Once you hit large screens and up, this rule no longer applies.

## Mobile-First Philosophy

JTB follows a mobile-first approach, which means:

1. **Start with mobile styles** as your base (no prefix needed)
2. **Enhance for larger screens** using breakpoint prefixes
3. **Think progressively** - each breakpoint builds upon the previous

### Mobile-First Example

```html +torchlight-html
<!-- Mobile-first responsive design -->
<div class="
    p-4 text-sm bg-white        <!-- Base mobile styles -->
    sm:p-6                      <!-- Small screens: more padding -->
    md:text-base md:bg-gray-50  <!-- Medium screens: larger text, different background -->
    lg:p-8 lg:text-lg           <!-- Large screens: even more padding and text -->
    xl:p-12                     <!-- Extra large: maximum padding -->
">
    Mobile-first content
</div>
```

This approach ensures your design works on the smallest screens first, then gets
enhanced as screen size increases.

## Understanding the Three Approaches

### When to use standard `{breakpoint}:` classes

**Best for**: Progressive enhancement, most common responsive needs

```html +torchlight-html
<!-- Hide mobile menu button on desktop -->
<button class="block lg:hidden">Mobile Menu</button>

<!-- Show desktop navigation on larger screens -->
<nav class="hidden lg:flex">Desktop Navigation</nav>

<!-- Responsive text sizing -->
<h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Heading</h1>
```

### When to use `on-{breakpoint}:` classes

**Best for**: Breakpoint-specific layouts or styles that shouldn't cascade

```html +torchlight-html
<!-- Different layouts for each screen size -->
<div class="
    flex-col            <!-- Mobile: vertical stack -->
    on-sm:flex-row      <!-- Small: horizontal -->
    on-md:grid on-md:cols-2  <!-- Medium: 2-column grid -->
    on-lg:cols-3        <!-- Large: 3-column grid -->
    on-xl:cols-4        <!-- Extra large: 4-column grid -->
">
    Content with breakpoint-specific layouts
</div>

<!-- Show different content for tablets only -->
<div class="on-md:block hidden">Tablet-specific content</div>
```

### When to use `to-{breakpoint}:` classes

**Best for**: Mobile-specific styles, content that should hide on larger screens

```html +torchlight-html
<!-- Mobile-only call-to-action button -->
<button class="to-md:block hidden">Tap to Call</button>

<!-- Desktop gets different content -->
<div class="to-md:hidden md:flex">
    <button>Call Now</button>
    <button>Get Quote</button>
</div>

<!-- Simplified mobile navigation -->
<nav class="to-lg:simple-menu lg:full-menu">
    Navigation
</nav>
```

## Choosing the Right Approach

### Decision Tree

1. **Do you want styles to cascade upward?**
   - Yes → Use standard `{breakpoint}:` classes
   - No → Continue to question 2

2. **Do you want styles only at specific screen sizes?**
   - Yes → Use `on-{breakpoint}:` classes
   - No → Use `to-{breakpoint}:` classes
