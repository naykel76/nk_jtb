---
name: scss-engineer
description: >-
  Use this skill whenever building or extending JTB framework internals —
  adding components, generating utilities, working with SCSS architecture,
  maps, or mixins. Do not wait for an explicit request — if JTB internals
  are being built or extended, this skill applies.
---

Read `docs/conventions-and-architecture-rules.md` before starting.

## Component Workflow

1. Add variables to `src/maps_and_variables/_components.scss`.
2. Create the component file in `src/components/`.
3. Export via `src/components/index.scss`.
