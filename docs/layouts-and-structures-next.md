# JTB Layouts and Structures Next (review)

<p class="lead">Working sections for layouts and structures that still need review before joining the main document.</p>

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




### Main Content Area (review)

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
### Content + Aside (review)

A layout with a main content area and a secondary panel that supports it. The
aside is smaller and helps the main flow rather than competing with it.

Typical use cases:

- checkout pages
- article pages with summary or table of contents
- settings forms with a summary panel
- filter/results pages with supporting controls

### Implementation Examples

Typical implementation:

- mobile-first stacked layout
- desktop split using a simple documented grid when the structure is
  proportional
- `lg:cols-3` with `lg:col-span-2` / `lg:col-span-1` for `thirds-2-1`
- `flex` with a fixed or narrow aside when the supporting region needs an
  intentional width

### Grid Example (preferred)

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="grid gap-1 lg:cols-3">
    <div class="lg:col-span-2 space-y-1">
        <div class="bx h-6"></div>
        <div class="bx h-10"></div>
    </div>

    <aside class="lg:col-span-1">
        <div class="bx h-12"></div>
    </aside>
</div>
```