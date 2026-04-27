# Developer Responsive Approaches (review)

<p class="lead">A short guide to the different ways developers can do responsive work in JTB.</p>

## Purpose (review)

This page is for developers writing SCSS or extending the framework.

It answers one question first:

**Which responsive approach should I use?**

For general class usage, see [Responsive Design](responsive-design.md).

## The Main Approaches (review)

JTB has several responsive approaches, and they solve different problems.

| Approach                                      | Use when                                                                 | Typical tool                                           |
| --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| Direct mixins inside a class                  | You are styling one component or selector                                | `@include from-md`, `@include to-md`, `@include on-lg` |
| Existing responsive utilities                 | You are writing markup with classes that already exist                   | `md:p-2`, `to-md:hidden`, `on-lg:block`                |
| Build-system utility generation               | You are adding a reusable utility family to JTB                          | `build-classes(..., $responsive: true)`                |
| Explicit visibility-window utility generation | You need generated `on-*` or `to-*` classes                              | `make-on-breakpoint()`, `make-to-breakpoint()`         |
| Container-query responsive work               | The component should respond to container width, not viewport width      | `cq-*` mixins or `cq-make-*` mixins                    |
| Magic classes                                 | You want breakpoint-driven value patterns, not normal prefixed utilities | magic class builders                                   |

## Start With The Simple Case (review)

If you are writing a class and just need responsive SCSS, use a mixin directly
inside that class.

This is **not** the build system.

Example:

```scss +code
@use '../mixins/media-container-queries' as *;

.card-list {
    display: grid;
    gap: 1rem;

    @include from-md {
        grid-template-columns: 2fr 1fr;
    }

    @include to-md {
        padding: 1rem;
    }
}
```

Use this when:

- the selector is custom
- the responsive rule is local to one component
- you do not need utility classes generated

In most component SCSS, this should be the first option you consider.

## Mixin-Based Responsive Design (review)

These mixins live in
[src/mixins/_media-container-queries.scss](/C:/Users/natha/sites/nk_jtb/src/mixins/_media-container-queries.scss).

### `from-*` (review)

Use for progressive, mobile-first changes.

Examples:

- `from-sm`
- `from-md`
- `from-lg`
- `from-xl`
- `from-xxl`

Meaning:

- apply from that breakpoint upward

### `on-*` (review)

Use for an exact breakpoint range.

Examples:

- `on-sm`
- `on-md`
- `on-lg`
- `on-xl`
- `on-xxl`

Meaning:

- apply only within that breakpoint window

### `to-*` (review)

Use below a breakpoint.

Examples:

- `to-sm`
- `to-md`
- `to-lg`
- `to-xl`

Meaning:

- apply only below that breakpoint

## Common Responsive Uses (review)

### Progressive styling (review)

Use when the layout or styling should scale upward.

Typical tools:

- base styles + `{bp}:` utilities
- `from-*` mixins
- build-system responsive variants

Examples:

- larger gaps on bigger screens
- more grid columns at larger widths
- desktop layout enhancements

### Visibility windows (review)

Use when an element should appear or disappear within a specific size range.

Typical tools:

- `to-*`
- `on-*`
- `to-{bp}:hidden`
- `on-{bp}:block`
- `make-to-breakpoint()`
- `make-on-breakpoint()`

Examples:

- desktop nav vs mobile menu button
- mobile-only controls
- exact-range debug markers

Per repo rules, this is the main place where `to-` and `on-` should be favored.

### Container-aware adaptation (review)

Use when component width matters more than viewport width.

Typical tools:

- `cq-from-*`
- `cq-on-*`
- `cq-to-*`
- `cq-make-*`

Examples:

- cards inside narrow sidebars
- widgets reused in different layout regions

## When To Use Utilities Instead (review)

Use existing utilities when:

- the class already exists
- you are working in markup
- you do not need to create new framework behavior

Examples:

```html +code
<div class="p-1 md:p-2 lg:p-3"></div>
<aside class="to-md:hidden"></aside>
<button class="hidden on-md:block"></button>
```

## When To Use The Build System (review)

Use the build system when you are adding reusable utilities to JTB itself.

Main tool:

- `build-classes(..., $responsive: true)`

Use this when:

- values come from maps
- the utility should exist framework-wide
- you want standard `{bp}:` variants

This is the normal path for utility generation, not for one-off component SCSS.

Related source:

- [src/mixins/build-system/_layers.scss](/C:/Users/natha/sites/nk_jtb/src/mixins/build-system/_layers.scss)
- [src/mixins/build-system/_make-classes.scss](/C:/Users/natha/sites/nk_jtb/src/mixins/build-system/_make-classes.scss)

## When To Use Explicit Breakpoint Utility Builders (review)

Use these when you need generated utility classes with explicit visibility or
window semantics.

Main tools:

- `make-from-breakpoint()`
- `make-on-breakpoint()`
- `make-to-breakpoint()`

These live in
[src/mixins/_breakpoint-utilities.scss](/C:/Users/natha/sites/nk_jtb/src/mixins/_breakpoint-utilities.scss).

Use them when:

- normal `{bp}:` generation is not the right fit
- you want output like `.on-md:block` or `.to-lg:hidden`
- you are building visibility helpers

## Container Query Variants (review)

JTB also provides container-query versions of both authoring styles.

For direct SCSS inside a class:

- `cq-from-*`
- `cq-on-*`
- `cq-to-*`

For generated utility classes:

- `cq-make-from-breakpoint()`
- `cq-make-on-breakpoint()`
- `cq-make-to-breakpoint()`

Use these when the container width should control the change.

## Magic Classes (review)

Magic classes are responsive in behavior, but they are not the same thing as
standard `{bp}:`, `on-*`, or `to-*` utilities.

Use them when you want breakpoint-driven value patterns rather than ordinary
prefixed variant generation.

Related source:

- [src/utilities/_magic-classes.scss](/C:/Users/natha/sites/nk_jtb/src/utilities/_magic-classes.scss)

## Constraints (review)

- `xxl` exists, but default build generation may stop at `xl`
- there is no `to-xxl`
- `on-xxl` is open-ended
- use `to-` / `on-` mainly for visibility windows
- prefer the smallest correct approach before reaching for framework generation

## Quick Recommendation (review)

If you are asking:

**"I want to use a mixin inside a class."**

Use:

- `from-*` for progressive changes
- `to-*` for below-breakpoint changes
- `on-*` for exact breakpoint-only changes

That is the simple SCSS authoring path, and it is separate from the build
system.

## Related Docs (review)

- [Responsive Design](responsive-design.md)
- [Layer System](layer-system.md)
- [Conventions & Architecture Rules](conventions-and-architecture-rules.md)

