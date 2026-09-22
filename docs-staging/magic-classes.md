# Magic Responsive Classes

<p class="lead">Curated responsive utility patterns that let one class describe a whole spacing or layout rhythm.</p>

Magic classes are best used as a developer tool. They are not a free-form value
syntax. Each class maps to a small set of approved responsive patterns defined
in the framework.

Instead of writing:

```html +code
lg:py-5 md:py-3 py-2
```

You can use:

```html +code
py-5-3-2
```

## Concept

Magic classes compress a known responsive pattern into one utility.

They are useful when:

- the same responsive rhythm appears often
- the pattern matters more than the individual breakpoint utilities
- you want to avoid repeating the same breakpoint sequence across many sections

They are less useful when:

- you only need one fixed value
- the pattern is one-off
- the class name would be harder to understand than the explicit utilities

## Syntax

Magic classes are written from largest to smallest.

```html +code
{utility}-{lg}-{md}-{sm}-{base}
```

The number of values determines which breakpoints are targeted.

Examples:

```html +code
py-5-3-2
py-5-3-2-2
gap-4-2
cols-3-2-1
```

That means:

- `py-5-3-2`
  - `lg`: `py-5`
  - `md`: `py-3`
  - base: `py-2`
- `gap-4-2`
  - `md`: `gap-4`
  - base: `gap-2`

The pattern is still mobile-first in the generated CSS. The class name is
written in descending breakpoint order because that makes the intended rhythm
easier to read.

## How It Works

The patterns are generated from approved lists in the framework source. You
cannot assume every value combination exists.

## Section Spacing Example

```html +demo-folded class="bx"
<section class="py-5-3-2">
    <div class="container">
        <div class="bx">Section content</div>
    </div>
</section>
```

Use this when the section should feel tighter on small screens and more
generous on larger screens.

## Gap Example

```html +demo-folded class="bx"
<div class="grid cols-3-2-1 gap-5-3-2">
    <div class="bx">Item</div>
    <div class="bx">Item</div>
    <div class="bx">Item</div>
</div>
```

Use this when the layout and its spacing should scale together.
