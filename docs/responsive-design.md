# JTB Responsive System

<p class="lead">Three prefix types control when utilities apply across screen sizes.</p>

## Introduction

JTB provides three responsive prefix types.

**`{breakpoint}:`** — from breakpoint upward (mobile-first cascade) Applies at
this breakpoint and above.

```html +code
<!-- Hidden on mobile, visible from md and up -->
<div class="hidden md:block">...</div>

<!-- Visible on mobile, hidden from lg and up -->
<div class="block lg:hidden">...</div>
```

**`on-{breakpoint}:`** — only within breakpoint range (non-cascading) Applies
only within the defined breakpoint range. Styles do not cascade.

```html +code
<!-- Visible only at sm (576px–767px) -->
<div class="hidden on-sm:block">...</div>

<!-- Hidden only at md -->
<div class="on-md:hidden">...</div>
```

**`to-{breakpoint}:`** — up to breakpoint (mobile-only styles) Applies to all
sizes smaller than the specified breakpoint. Useful for mobile-only styles or
explicit visibility windows.

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

## Responsive Design Patterns

**this section needs work**

These examples use container queries so breakpoint behaviour can be observed
without resizing the browser window. `invisible` is used for demonstration so
elements retain layout space. In production, use `hidden` to remove them from
the flow.

## Show/Hide Pattern

The Show/Hide pattern displays one element while hiding another based on screen
or container width.

A common example is navigation: the full menu appears on larger screens, while a
burger icon appears on smaller screens.

By combining `from` and `to` prefixes, you define explicit visibility ranges
instead of relying on default state overrides. Each element clearly states where
it exists.

### Container Query Example

<div class="resizable-container bx bdr-3 bdr-dashed bdr-gray-500">
    <div class="grid gap cols-2 tac -space-x-px">
        <div class="bdr-2 bdr-teal-700">
            <div class="py px-025 teal cq-to-md:invisible">
                <code class="txt-white">NAV</code>
            </div>
        </div>
        <div class="bdr-2 bdr-blue-700">
            <div class="py px-025 blue cq-md:invisible">
                <code class="txt-white">BURGER</code>
            </div>
        </div>
    </div>
</div>
