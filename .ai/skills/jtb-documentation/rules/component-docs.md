# Component Documentation

Follow the shared component-doc rules in `nk-documentation-best-practices` first.
Then apply these JTB-specific additions.

**Section Order:**

Every section is conditional — include only the ones the component needs. When
present, they appear in this order:

1. Title and lead
2. `## Basic Usage` — minimum working example using the component class
3. One section for whatever must be understood before use — named case by case
4. `## Responsive` — behaviour across viewports
5. `## Examples` — component class recipes, one `###` each
6. `## SCSS Variables`
7. `## Utility Examples` — the same component built from utilities

Slot three has no fixed heading. It carries whatever the reader has to
understand before using the component — a required HTML shape in `menu.md`
(`## Structure`, where the `<nav>` is only a container), or how the component
treats its children in `navbar.md` (`## How It Works`, where the number of
children drives the layout). Name it for what it actually covers, and omit it
when there is nothing to explain. This is a case-by-case call, not a section
every doc needs.

A `##` answers a different question about the component; a `###` is a variation
within one of those answers. `### With Brand and Actions` is a variation of the
navbar above it, so it nests. `## Responsive` asks how the component behaves
across viewports — a different question, so its own `##`. Never use sibling
`##` sections for variations of one another.

`## Examples` and `## Utility Examples` are not mirrors. Utility examples come
first in a component's life and are maintained while the class matures, so the
two sets overlap only where they happen to. Do not add a class example purely to
pair one that exists in utilities.

Tag examples individually, not by section: `class="bx example-jtb"` for
component class examples, `class="bx example-utils"` for utility examples. See
`components/loaders-and-spinners.md` — every variant is `example-utils` except
`Dots`, which uses `example-jtb` because `.spinner-dots` is a real class.

**Rules:**

- The lead describes purpose, not implementation. Do not mention specific CSS properties.
- Open Basic Usage with `Apply the [component class] to...` — directive, not descriptive.
- Link to `/docs/jtb/variable-system` for override instructions rather than explaining inline.
- The component class is the primary API; utility examples are a convenience and go last.
- In `## Utility Examples`, rebuild the component and the content central to its
  purpose. Components that are incidental to the example keep their own classes —
  a navbar example rebuilds the menu, since navigation is the navbar's purpose,
  but leaves the `.btn` action alone.

A component doc with its own page carries `## Examples`. That replaces what
would otherwise go in `showcase-ui.md` for that component.
