# Tasks

Running backlog for the JTB framework. Updated by Claude during sessions;
Nathan may add directly. When something comes up that isn't being done right
now, it goes here before the topic changes.

## Planned

- **Complete `loaders-and-spinners.md`** — one section still pending:
  - `## Loader Container (review)` — needs proper content, currently just a one-liner pointing to UI examples

## Parked

- **Consuming-project skill + prompt** — agreed it's needed, no decisions made yet.

## Context

- **JTB nav is authored in `nk_jtb`** — keep the nav file updated there as the
  source of truth, then copy it into the Laravel docs app when needed.
- **Spinner approach decided** — no `.spinner` component class. SVG Arc utility pattern only: two-circle stroke approach (`stroke-opacity="0.25"` track + `stroke-dasharray="22 66"` arc, `stroke-linecap="butt"`). Size via `wh-*`, colour via `txt-*`. CSS border spinner and `@keyframes dash` approaches considered and set aside.
- **`jtb-conversion-notes.md`** — open gaps recorded there: positional border-color (`bdr-t-{color}` not generated), `flex-shrink: 0` no utility, percentage widths not in scale, icon-only button variant.
