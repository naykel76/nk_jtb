# Layouts and Structures

Named patterns for page-level structure. Layouts describe the overall shape of a page or major region. Structures are reusable internal arrangements that can appear inside any layout.

## Layouts

Layouts describe the overall shape of a page or major page region.

### Defaults

- Use `container` for standard page sections
- Let the section or component own its internal padding
- Use `py-4-3-2` as a standard section rhythm
- Use `py-5-3-2` for more prominent sections

### Individual Layout Docs

- [Sidebar + Main](/docs/jtb/layouts/layout-sidebar-main)

## Structures

Structures are reusable internal arrangements that can appear inside different layouts.

Common use cases:

- layouts with a dominant content region and a smaller supporting panel
- pages that pair primary content with summary, context, or actions
- sections that need a proportional split without equal visual weight

### thirds-2-1

A proportional structure with a larger primary region and a smaller supporting region in a two-thirds / one-third split.

```html +demo-folded class="resizable-container with-docs-only-overrides"
<div class="grid gap lg:cols-3">
    <div class="lg:col-span-2 space-y">
        <div class="bx h-6"></div>
        <div class="bx h-10"></div>
    </div>

    <aside class="lg:col-span-1">
        <div class="bx h-12"></div>
    </aside>
</div>
```
