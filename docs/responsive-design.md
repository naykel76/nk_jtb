<div class="toc" data-toc>

- [Introduction](#introduction)
- [Breakpoint System](#breakpoint-system)
- [Responsive Naming Conventions](#responsive-naming-conventions)
    - [From Screen Sizes: `{breakpoint}:`](#from-screen-sizes-breakpoint)
    - [Targeting Specific Screen Sizes: `on-{breakpoint}:`](#targeting-specific-screen-sizes-on-breakpoint)
    - [Up to Screen Sizes: `to-{breakpoint}:`](#up-to-screen-sizes-to-breakpoint)
- [Mobile-First Philosophy](#mobile-first-philosophy)
- [Practical Usage Guide](#practical-usage-guide)
    - [From Screen Sizes `{breakpoint}:` - Progressive Enhancement](#from-screen-sizes-breakpoint---progressive-enhancement)
    - [Targeting Specific Screen Sizes `on-{breakpoint}:`](#targeting-specific-screen-sizes-on-breakpoint-1)
    - [Up to Screen Sizes `to-{breakpoint}:`](#up-to-screen-sizes-to-breakpoint-1)
- [Choosing the Right Approach](#choosing-the-right-approach)
    - [Quick Reference](#quick-reference)
    - [Decision Tree](#decision-tree)
    - [Common Patterns](#common-patterns)
</div>


# JTB Responsive System - Core Concepts

<p class="lead">Understanding JTB's responsive breakpoint system, naming
conventions, and when to apply styles across different screen sizes.</p>

## Introduction

JTB provides a flexible responsive system that lets you apply different styles
at different screen sizes. The framework supports three types of breakpoint
prefixes that control exactly when styles are applied.

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

JTB uses three breakpoint prefix types to control when styles are applied:

> **Note:** Standard `{breakpoint}:` prefixes are available on most utilities.
> The `on-{breakpoint}:` and `to-{breakpoint}:` prefixes are built by default
> only for visibility and display utilities. Use the provided mixins to generate
> these prefixes for other utilities as needed.

### From Screen Sizes: `{breakpoint}:`

Applies from the breakpoint and up (mobile-first approach):

```html +code
<div class="md:bg-blue">Blue background from tablets up</div>
<div class="lg:text-2xl">Large text from desktop up</div>
```

### Targeting Specific Screen Sizes: `on-{breakpoint}:`

Applies only within a specific breakpoint range:

```html +code
<div class="on-md:bg-red">Red background only on tablets</div>
<div class="on-lg:text-center">Centered only on desktop</div>
```

### Up to Screen Sizes: `to-{breakpoint}:`

Applies up to (but not including) a breakpoint:

```html +code
<div class="to-lg:block hidden">Visible on mobile/tablets, hidden on desktop</div>
<div class="to-md:text-sm">Small text on phones only</div>
```

## Mobile-First Philosophy

JTB follows a mobile-first approach:

1. Start with base mobile styles (no prefix)
2. Enhance progressively for larger screens using breakpoint prefixes
3. Each breakpoint builds upon the previous

```html +code
<div class="
    p-4 text-sm bg-white
    sm:p-6
    md:text-base md:bg-gray-50
    lg:p-8 lg:text-lg
    xl:p-12
">
    Content styled mobile-first
</div>
```

## Practical Usage Guide

### From Screen Sizes `{breakpoint}:` - Progressive Enhancement

Use for styles that cascade upward (most common):

```html +code
<!-- Show/hide navigation elements -->
<button class="lg:hidden">Mobile Menu</button>
<nav class="hidden lg:flex">Desktop Navigation</nav>

<!-- Progressive text sizing -->
<h1 class="text-2xl md:text-3xl lg:text-4xl">Heading</h1>

<!-- Simple visibility control -->
<div class="hidden md:block">Visible from tablets up</div>
```

### Targeting Specific Screen Sizes `on-{breakpoint}:`

Use when styles should NOT cascade to other breakpoints:

```html +code
<!-- Different layout per breakpoint -->
<div class="
    flex-col
    on-sm:flex-row
    on-md:grid on-md:cols-2
    on-lg:cols-3
">
    Breakpoint-specific layouts
</div>

<!-- Tablet-only content -->
<div class="hidden on-md:block">Only visible on tablets</div>
```

### Up to Screen Sizes `to-{breakpoint}:`

Use for mobile-only content or styles:

```html +code
<!-- Mobile-only elements -->
<button class="to-lg:block hidden">Tap to Call</button>

<!-- Different content for mobile vs desktop -->
<div class="to-md:block hidden">Mobile version</div>
<div class="hidden md:flex">Desktop version</div>
```

## Choosing the Right Approach

### Quick Reference

| Scenario                         | Use                        | Example                                    |
| -------------------------------- | -------------------------- | ------------------------------------------ |
| Progressive enhancement          | `{breakpoint}:`            | `md:text-lg` - larger text from tablets up |
| Different layout per screen size | `on-{breakpoint}:`         | `on-md:grid` - grid only on tablets        |
| Mobile-only content              | `to-{breakpoint}:`         | `to-lg:hidden` - hide on desktop           |
| Desktop-only content             | `{breakpoint}:` + `hidden` | `hidden lg:block` - show from desktop up   |

### Decision Tree

1. **Should the style apply to all larger screens too?**
   - Yes → Use `{breakpoint}:`
   - No → Continue

2. **Should it only apply at one breakpoint range?**
   - Yes → Use `on-{breakpoint}:`
   - No → Use `to-{breakpoint}:`

### Common Patterns

```html +code
<!-- Mobile menu / desktop nav toggle -->
<button class="lg:hidden">Menu</button>
<nav class="hidden lg:flex">Desktop Nav</nav>

<!-- Responsive content switching -->
<div class="to-md:block hidden">Mobile content</div>
<div class="hidden md:block">Desktop content</div>

<!-- Grid that changes column count -->
<div class="grid cols-1 sm:cols-2 lg:cols-3 xl:cols-4">Items</div>
```
