# JTB Responsive System

<p class="lead">Three prefix types give you precise control over when styles
apply across screen sizes and container widths.</p>

## Introduction

JTB provides three responsive prefix types:

###### **`{breakpoint}:`** - from breakpoint upward (mobile-first cascade)

Applies at this breakpoint and all larger screens. Use for progressive
enhancement — padding, text size, spacing that grows with screen size.

###### **`on-{breakpoint}:`** - only within breakpoint range (non-cascading)

Applies only within the breakpoint range. Styles **DO NOT** cascade. Use when
each breakpoint needs completely different treatment — unique layouts or
breakpoint-specific designs.

###### **`to-{breakpoint}:`** - up to breakpoint (mobile-only styles)

Applies to all sizes smaller than this breakpoint (up to, but not including, the
specified breakpoint). Use for mobile-only styles or creating visibility
windows.

## Breakpoint System

Five breakpoints cover common device categories:

| Breakpoint | Typical Devices | Min Width | Range           |
| ---------- | --------------- | --------- | --------------- |
| `sm`       | Large phones    | 576px     | 576px - 767px   |
| `md`       | Tablets         | 768px     | 768px - 991px   |
| `lg`       | Small laptops   | 992px     | 992px - 1199px  |
| `xl`       | Desktops        | 1200px    | 1200px - 1399px |
| `xxl`      | Wide screens    | 1400px    | 1400px+         |


## Understanding Through Interaction

### The From Pattern: `{breakpoint}:`

<div x-data="{ modalOpen: false }" :class="{ 'modal-open': modalOpen }">
    <button @click="modalOpen = true" class="btn primary"> View </button>
    <div x-show="modalOpen" x-transition.opacity @click.self="modalOpen = false" class="modal-backdrop" style="display: none;">
        <div class="modal-content" x-transition:enter="transition ease-out
        duration-300" x-transition:enter-start="opacity-0 transform scale-90"
        x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">
            <div class="modal-header">
                Welcome to Alpine.js
            </div>
            <div class="modal-body">
<div class="demo-container">
    <p class="demo-label">Resize the container — boxes disappear as it
    shrinks</p>
    <div class="resizable-container bx bdr-3 bdr-dashed bdr-blue-500">
        <div class="grid gap-0 cols-4 tac -space-x-px">
            <div class="bdr bdr-teal-700">
                <div class="py px-025 teal">
                    <code class="txt-white">mobile</code>
                </div>
            </div>
            <div class="bdr bdr-teal-700">
                <div class="py px-025 teal cq-sm:invisible">
                    <code class="txt-white">sm</code>
                </div>
            </div>
            <div class="bdr bdr-teal-700">
                <div class="py px-025 teal cq-md:invisible">
                    <code class="txt-white">md</code>
                </div>
            </div>
            <div class="bdr bdr-teal-700">
                <div class="py px-025 teal cq-lg:invisible">
                    <code class="txt-white">lg</code>
                </div>
            </div>
            <div class="bdr bdr-teal-700">
                <div class="py px-025 teal cq-xl:invisible">
                    <code class="txt-white">xl</code>
                </div>
            </div>
            <div class="bdr bdr-teal-700">
                <div class="py px-025 teal cq-xxl:invisible">
                    <code class="txt-white">xxl</code>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
            <button @click="modalOpen = false" class="btn secondary"> Close
            </button>
        </div>
    </div>
</div>



Each box uses `cq-{breakpoint}:invisible` — they disappear FROM their breakpoint
upward.

As the container grows, boxes disappear and stay hidden. Once a
`cq-md:invisible` box disappears at 768px, it stays hidden at all larger sizes.
This is cascading behavior.











## Common Patterns

### Visibility Window Pattern

Elements are visible by default. Declare where visibility turns OFF; visibility
emerges in the gaps.

```html +code
<!-- Visible only on mobile (< 768px) -->
<div class="md:invisible">Mobile-only content</div>

<!-- Visible only on tablets (768px - 991px) -->
<div class="to-md:invisible lg:invisible">Tablet-only content</div>

<!-- Visible only on desktop (≥ 992px) -->
<div class="to-lg:invisible">Desktop-only content</div>
```

**Visual representation:**
```
Mobile (< 768px)        Tablet (768-991px)      Desktop (≥ 992px)
─────────────────────────────────────────────────────────────────
md:invisible            [visible]               [visible]
to-md:invisible         lg:invisible            [visible]
[visible]               to-md:invisible         lg:invisible
```

**Advantages:**
- One class per visibility boundary
- Cleaner HTML
- Declarative intent: "block visibility at these edges"

### Mobile-First Cascade Pattern

Start hidden, explicitly show at each breakpoint. Styles cascade upward.

```html +code
<!-- Hidden by default, visible from tablets up -->
<div class="hidden md:block">Tablet and desktop content</div>

<!-- Visible on mobile, hidden from tablets up -->
<div class="block md:hidden">Mobile-only content</div>

<!-- Complex: mobile + desktop, skip tablet -->
<div class="block md:hidden lg:block">Mobile and desktop content</div>
```

**Advantages:**
- Natural for progressive enhancement
- Works well with other cascading utilities (spacing, sizing)
- Explicit visibility state at each breakpoint

### Pattern Comparison

| Aspect              | Visibility Window | Mobile-First             |
| ------------------- | ----------------- | ------------------------ |
| Classes per element | 1-2               | 2-3                      |
| How you think       | "Block at edges"  | "Show/hide at each step" |
| Best for            | Show/hide content | Progressive enhancement  |
| Default state       | Visible           | Hidden                   |
| Code readability    | High for ranges   | High for cascades        |

**Use Visibility Windows for:** Element show/hide at specific breakpoints  
**Use Mobile-First for:** Layouts that progressively enhance with screen size