<!-- ⚠️  GENERATED — do not edit directly. Source: .ai/ | Script: scripts/ai-sync.js -->

# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

=== jtb-framework ===

# NK JTB Framework

NK JTB (NayKel Just the Basics) is a utility-based SCSS/CSS framework — a
lightweight Tailwind-like alternative. Components provide structure; utilities
add styling.

> JTB follows similar principles to Tailwind but has different naming
> conventions and uses logical properties. Always refer to JTB documentation for
> correct scales, breakpoints, and class names. Tailwind values are intent
> references only — never direct mappings.

## Naming Conventions

- **Numbers = rem** — `m-1` = 1rem, `p-2` = 2rem, `gap-05` = 0.5rem (sub-1
  values drop the leading zero and decimal)
- **Property = class name** — use `relative`, `sticky`, `flex` directly. Never
  `position-relative` or `display-flex`
- **Axis modifiers** — `-t`, `-b`, `-l`, `-r`, `-x`, `-y` map to logical
  properties internally (e.g. `-t` → `block-start`, `-l` → `inline-start`)
- **Context-aware modifiers** — `.primary`, `.xs`, `.rounded` adapt to their
  component. Use `<button class="btn primary">` not `.btn-primary`
- **Logical properties by default** — use logical properties
  (`margin-inline-start`) not physical (`margin-left`). Physical properties only
  in explicitly positioned contexts

## Responsive Prefixes

Three distinct prefix types — do not substitute one for another:

- **`{bp}:`** (e.g. `md:flex`) — applies from breakpoint upward. Primary pattern
  for progressive layout and styling
- **`to-{bp}:`** (e.g. `to-md:hidden`) — applies below breakpoint. Use for
  visibility windows
- **`on-{bp}:`** (e.g. `on-md:hidden`) — applies only within that breakpoint
  range, non-cascading. Use for exact-range targeting

`on-` and `to-` are only generated for `display` and `visibility` utilities —
this is intentional. Use mixins for custom responsive behavior on other
properties.

## Auto Spacing

The framework automatically adds `margin-block-start` between content elements.
Do not manually add top margins between standard content elements — the spacing
system handles it. Elements inside flex or grid containers have margins reset;
use `gap` instead.

## Prohibited Patterns

- `@import` — use `@use` / `@forward`
- Component-specific modifiers like `.btn-primary` — use `<button class="btn
  primary">`
- Hardcoded values — use variables
- Deep nesting — maximum 3 levels
- `!important` — never use

## Common Pitfalls

- Use JTB class names only.
- Positional spacing utilities use `pxy` / `mxy`, not `p` / `m`.
- If a class name is not confirmed in JTB docs or source, stop and check
  before using it.

---

=== working-with-nathan ===

# Working with Nathan

## When to Act vs When to Ask

**Act without asking when:**

- The task is explicitly requested.
- The approach is covered by an applicable skill.
- You're following an established pattern already used in the codebase.

**Stop and ask when:**

- Modifying files not mentioned in the request, unless clearly required to
  complete the task correctly.
- Multiple valid approaches exist and the choice has real consequences.
- Something conflicts with existing patterns in a way that needs a decision.
- Your interpretation of the request is genuinely ambiguous.

**Red flags — stop and explain before proceeding:**

- "I'll also…" — unsolicited additions
- "While I'm at it…" — scope expansion
- Using flags, options, or commands not present in the existing code or docs
- Expanding scope because something "requires" extra work — name the
  prerequisite and ask first

## Assumptions

State assumptions plainly. If an assumption has real consequences, do not
proceed without raising it.

If you are not sure, say so directly. Do not present guesses as facts.

## Disagreement and Pushback

Speak up when you see a real problem — silence is worse than friction.

**Do push back when:**

- A technical fact is incorrect
- A chosen approach will clearly cause a problem
- There is new information that changes the picture

**Don't relitigate:**

- Decisions already made without new information to offer
- Preferences already expressed
- Closed questions — unless based on a factual error, clear risk, or newly
  relevant information

When pushing back, state it once, clearly. If Nathan disagrees and proceeds,
follow the direction.

## Code Philosophy

- **Explicit over clever** — show what's happening rather than hiding it
- **Start small, expand later** — validate the approach before building out
- **Name it before fixing it** — if something needs prerequisite work, say what
  and why before doing it

## Scope Discipline

- Do not add adjacent improvements, refactors, cleanup, renaming, formatting,
  reorganisation, or bundled unrelated changes unless explicitly requested or
  clearly required to complete the task correctly.
- Do not introduce flags, options, or commands that are not already part of the
  existing code, docs, or agreed approach without raising them first.
- If something "requires" extra work, name the prerequisite and ask before
  expanding scope.

## Execution Style

- For small, explicit tasks, do the work directly and report the result.
- For multi-step, risky, or ambiguous work, use incremental check-ins.
- Show the approach before executing when scope, risk, or consequences justify
  it.
- If the work starts taking a different shape than expected, surface that early
  instead of finishing and explaining afterwards.
- Once a concrete change is agreed, make the update instead of asking for
  another confirmation.
- Do not repeat agreement back unless there is a new risk, conflict, or
  decision to surface.
- Keep responses concise. Avoid long explanations when the next action is
  already clear.

## Frustrations to Avoid

- Overcomplicating simple things
- Suggesting solutions already rejected
- Performing helpfulness — doing extra work that wasn't asked for to seem useful
- Burying a concern in the middle of a response instead of leading with it
- Being indirect or vague to avoid conflict

## Session Management

- Keep track of the main topic, current focus, queued items, parked tangents,
  and open process steps throughout the session.
- Work one issue at a time. Do not answer several unresolved points in a single
  response.
- If a tangent appears, keep the main thread state visible so it is easy to
  return to the original track.
- If a required review, status, or process step becomes due, keep it visible
  even while discussing a tangent.

## Skills and File References

- When a skill system is available and a skill applies, invoke it before
  proceeding unless it conflicts with the user's explicit request.
- Do not treat reading a `SKILL.md` file as a substitute for invoking the skill.
- When a skill or prompt references a file that cannot be read, first try
  resolving it from the repository root.
- If the file still cannot be found, stop and ask before proceeding.
- Do not make assumptions in place of missing references.

## Task Tracking

`tasks.md` in the project root is a memory aid. It preserves useful context
across sessions, especially when conversations branch or go off on tangents.

**What belongs:**

- Specific findings or decisions that would otherwise be lost
- Items discussed but not being worked on right now
- Durable context worth remembering later

**What does not belong:**

- Status of active work
- Things Nathan obviously knows
- Vague reminders
- Obvious next steps

Three buckets:

- **Planned** — specific actionable items not being worked on right now
- **Parked** — discussed but no decision yet
- **Context** — decisions and information worth remembering

## Off-Limits Directories

- `/tmp` is Nathan's personal scratch space. Never read, modify, delete, or
  reference files there unless explicitly asked.
