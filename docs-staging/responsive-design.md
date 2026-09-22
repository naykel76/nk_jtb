# JTB Responsive System (review)

<p class="lead">Three prefix types control when utilities apply across screen sizes.</p>

## Core Model (review)

JTB is mobile-first by default.

Unprefixed classes are your base (mobile) styles. Breakpoint-prefixed classes
(`sm:`, `md:`, `lg:`, `xl:`, `xxl:`) apply from that breakpoint upward
(min-width) and override base styles where needed.

For progressive styling, mobile-first works well.

For visibility/show-hide behavior, JTB prefers visibility-window patterns
(`to-`, `on-`) because they describe where an element exists directly.

## Prefix Reference (review)

**`{breakpoint}:`** — from breakpoint upward (mobile-first cascade).

```html +code
<!-- Mobile base, then scale up -->
<div class="p-1 md:p-2 lg:p-3">...</div>
```

**`on-{breakpoint}:`** — only within breakpoint range (non-cascading). Applies
only within the defined breakpoint range.

**`to-{breakpoint}:`** — up to breakpoint. Applies to all sizes smaller than the
specified breakpoint.

`on-` and `to-` are first-class responsive tools in JTB and are generated via
the framework's responsive utility system.

See [Visibility Patterns](#visibility-patterns) below for examples.

## Breakpoint System (review)

| Breakpoint | Typical Devices | Min Width | Range         |
| ---------- | --------------- | --------- | ------------- |
| `sm`       | Large phones    | 576px     | 576px–767px   |
| `md`       | Tablets         | 768px     | 768px–991px   |
| `lg`       | Small laptops   | 992px     | 992px–1199px  |
| `xl`       | Desktops        | 1200px    | 1200px–1599px |
| `xxl`      | Wide screens    | 1600px    | 1600px+       |

## Decision Guide (review)

| Goal                                   | Preferred Prefix Pattern           | Why                                      |
| -------------------------------------- | ---------------------------------- | ---------------------------------------- |
| Progressive style changes across sizes | `{bp}:`                            | Mobile-first cascade and clean overrides |
| Show/hide below a breakpoint           | `to-{bp}:hidden` / `to-{bp}:block` | Explicit visibility window               |
| Show/hide only at one breakpoint range | `on-{bp}:hidden` / `on-{bp}:block` | Exact-range targeting                    |
| Simple base + reveal at larger sizes   | `hidden {bp}:block`                | Still valid when it is clearer           |

## Visibility Patterns (review)

Use this section for responsive visibility recipes.

### Hide/Display Pattern (review)

```html +code
<!-- Hidden by default, shown from breakpoint -->
<div class="hidden md:block">...</div>
```

### Hide Pattern (review)

```html +code
<!-- Hidden below md, visible above md -->
<aside class="to-md:hidden">...</aside>
```

### Hide/Hide Pattern (review)

```html +code
<!-- Desktop element -->
<aside class="to-md:hidden">...</aside>

<!-- Mobile element -->
<button class="md:hidden">☰</button>
```

Recommended order:

1. **Hide Pattern** for single-element visibility windows.
2. **Hide/Hide Pattern** for role-switching pairs (desktop element + mobile element).
3. **Hide/Display Pattern** only when base-hidden then reveal-at-breakpoint is clearly simpler.

## Container Query Parity (review)

Container query versions follow the same intent with `cq-` prefixes:

### Container Query Example (review)

<div class="resizable-container bx bdr-3 bdr-dashed bdr-gray-500">
    <div class="grid gap cols-2 tac -space-x-px">
        <div class="bdr-2 bdr-teal-700">
            <div class="py px-025 teal cq-to-md:hidden">
                <code class="txt-white">NAV</code>
            </div>
        </div>
        <div class="bdr-2 bdr-blue-700">
            <div class="py px-025 blue cq-md:hidden">
                <code class="txt-white">BURGER</code>
            </div>
        </div>
    </div>
</div>

