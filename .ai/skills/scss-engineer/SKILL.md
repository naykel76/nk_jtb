---
name: scss-engineer
description: >-
  Use this skill whenever building or extending JTB framework internals —
  adding components, generating utilities, working with SCSS architecture,
  maps, or mixins. Do not wait for an explicit request — if JTB internals
  are being built or extended, this skill applies.
---

Read `docs/conventions-and-architecture-rules.md` before starting.

## General Rules

- Check existing source, docs, and `framework-status.md` before adding a new
  framework API so you extend or formalise instead of duplicating.
- If formalising an existing helper requires a structural decision, stop and
  discuss it before proceeding. Examples: doc home, utility family scope, and
  what to do with related experimental variants.
- Do not invent variants, scales, or an expanded utility family. If the work
  suggests them, stop and discuss the API first. Default to the smallest useful
  addition.
- Extend an existing domain file in `src/utilities/` or `src/components/`
  before creating a new partial.
- Prefer the build system (`build-classes`, `build-composite-classes`,
  `child-combinator`) over hand-written selectors when the pattern fits.
- Add or extend variables/maps in `src/maps_and_variables/` only when the new
  API needs reusable configuration or scale values.

## Component Workflow

1. Add variables to `src/maps_and_variables/_components.scss` only if the
   component needs framework-level configuration.
2. Create or update the component file in `src/components/`.
3. Export via `src/components/index.scss` if this is a new component file.
4. Invoke `jtb-documentation` to document the component.
5. Update `framework-status.md` when the component or its docs change status.

## Utility Workflow

1. Choose the correct existing utility partial in `src/utilities/`. Create a
   new partial only when the utility introduces a new domain.
2. If the utility fits the build system, implement it with `build-classes` or
   `build-composite-classes` rather than ad hoc selectors.
3. Use `child-combinator` for direct-child utilities such as spacing or
   dividers instead of duplicating selector logic by hand.
4. Add or extend variables/maps only when the utility exposes real framework
   configuration. Fixed helpers can stay local to the utility partial.
5. If the utility already exists as an informal helper, formalise or migrate it
   instead of creating a duplicate implementation.
6. Keep related variants together in the same domain partial. Do not formalise
   one variant while leaving related variants behind in a different home.
7. Invoke `jtb-documentation` to document the utility.
8. Update `framework-status.md` when the utility or its docs change status.
