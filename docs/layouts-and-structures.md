# JTB Layouts and Structures (review)

<p class="lead">Named layout patterns for page-level structure, with a clear distinction between layouts and reusable internal structures.</p>

## Why This Exists (review)

Define common page structures before implementation so layouts are easier to
classify and build consistently.

> Example previews may use docs-only wrapper overrides so they display cleanly
> inside the documentation. The example code itself remains the correct
> implementation to copy and use.

## Definitions (review)

In this document, a **layout** describes the overall shape of a page or major
page region.

A **structure** is a reusable arrangement that can be placed inside different
layouts. Structures are not tied to a specific page type or element. They
describe how content regions relate to each other.

Example:

- a checkout page may use `Main Content Area` as its page layout
- inside that layout, the checkout content may use a reusable `thirds-2-1`
  structure

For documentation, structures may be named by proportion when that makes the
relationship clearer than semantic labels. For example, `thirds-2-1` describes
a structure with a larger region and a smaller supporting region in a
two-thirds / one-third split.

## Sidebar + Main (review)

A layout with a persistent sidebar for navigation and a main area for the
primary workspace. The sidebar width is deliberate and usually stays consistent.

Typical use cases:

- admin dashboards
- account areas

### Implementation Examples (review)

Typical implementation:

- `flex` container
- fixed-width sidebar using width utilities
- `flex-1` main area

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-16 fs-0 to-md:hidden flex-col bg-slate-900 ">
        <header class="pxy-075 bdr-b bdr-gray-200">
            <div class="h-2 bg-slate-700 rounded"></div>
        </header>

        <div class="flex-1 pxy-075 space-y">
            <div class="h-full bg-slate-700 rounded"></div>
        </div>

        <footer class="pxy-075 bdr-t bdr-gray-200">
            <div class="h-2 bg-slate-700 rounded"></div>
        </footer>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 bg-gray-200">
        <div class="container-md py">
            <div class="bx h-4"></div>
            <div class="bx h-14"></div>
        </div>
    </main>
</div>
```

## Main Content Area (review)

A layout with a main content area inside a container. It is used when the page
has one primary content region, whether that region is simple on its own or
contains a more structured internal arrangement.

Typical use cases:

- documentation pages
- simple forms
- legal pages

### Implementation Examples (review)

Typical implementation:

- `container-*`
- width constraints
- vertical spacing utilities

Use `container-*` on its own before adding extra horizontal padding. Containers
already include inline spacing through their built-in width constraint.

<!-- TODO: THESE VIEWS ARE TO BE REVIEW WHEN CALLED UPON TO DO SO -->
## Content + Aside (review)

A layout with a main content area and a secondary panel that supports it. The
aside is smaller and helps the main flow rather than competing with it.

Typical use cases:

- checkout pages
- article pages with summary or table of contents
- settings forms with a summary panel
- filter/results pages with supporting controls

### Implementation Examples (review)

Typical implementation:

- mobile-first stacked layout
- desktop split using `flex` with a fixed or narrow aside
- simple documented grid where it expresses the relationship clearly

### Common Structures (review)

- `thirds-2-1`

## Split Screen (review)

A layout with two main regions that carry similar visual weight.

Typical use cases:

- authentication layouts
- marketing hero with form/content split
- media plus content landing sections

### Implementation Examples (review)

Typical implementation:

- `grid` with documented `cols-*`
- `flex` when one side needs stronger intrinsic sizing behavior
- stacked mobile layout with a clear content order

## Hero + Sections (review)

A layout with a strong opening section followed by a series of content sections.

Typical use cases:

- product landing pages
- campaign pages
- public homepages

### Implementation Examples (review)

Typical implementation:

- stacked page sections
- each section uses the simplest internal layout needed
- clear spacing and ordering between sections

## Dense Data Layout (review)

A layout built around a data-heavy main area with supporting controls such as
filters, toolbars, and actions.

Typical use cases:

- admin tables
- search/results screens
- analytics pages

### Implementation Examples (review)

Typical implementation:

- stacked blocks for toolbar, filters, and results
- `flex` layouts for controls and actions
- grid only where it improves grouping

## Decision Questions (review)

Use these questions before choosing classes:

1. Is there one dominant region or two?
2. Is the secondary region supportive or navigational?
3. Does the layout need to persist across most screen sizes or collapse early?
4. Is the source showing a true structural requirement or just one CSS way of
   expressing it?
5. Can the same intent be achieved with documented JTB layout primitives without
   custom grid-template reproduction?

## Classification Examples (review)

- Dashboard admin shell → `Sidebar + Main`
- Checkout page with order summary → `Main Content Area` + `thirds-2-1`
- Login page with visual panel and form → `Split Screen`
- Documentation article → `Main Content Area`
- Product homepage → `Hero + Sections`
- Search page with filters and results table → `Dense Data Layout`

## Note (review)

These patterns describe page structure first. The implementation examples show
common ways to build them, but they are not the only valid option.

