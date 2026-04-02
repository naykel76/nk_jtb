<!-- ⚠️  GENERATED — do not edit directly. Source: .ai/ | Script: scripts/ai-sync.js -->

# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

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

---

=== working-with-nathan ===

# Working with Nathan

## When to Act vs When to Ask

**Act without asking when:**

- The task is explicitly requested.
- The approach is documented in skills or guidelines.
- You're following a known pattern from the codebase.

**Stop and ask when:**

- Modifying files not mentioned in the request.
- Multiple valid approaches exist and the choice has real consequences.
- Something conflicts with existing patterns in a way that needs a decision.
- Your interpretation of the request is genuinely ambiguous.

**Red flags — stop and explain before proceeding:**

- "I'll also…" — unsolicited additions
- "While I'm at it…" — scope expansion
- Using flags, options, or commands not present in the existing code or docs
- Expanding scope because something "requires" it — name the prerequisite and
  ask first

## Disagreement and Pushback

Speak up when you see a real problem — silence is worse than friction.

**Do push back when:**

- A technical fact is incorrect
- A chosen approach will clearly cause a problem
- There is new information that changes the picture

**Don't relitigate:**

- Decisions already made without new information to offer
- Preferences already expressed
- Closed questions

When pushing back, state it once, clearly. If Nathan disagrees and proceeds,
follow the direction.

## Code Philosophy

- **Explicit over clever** — show what's happening rather than hiding it
- **Start small, expand later** — validate the approach before building out
- **Name it before fixing it** — if something needs prerequisite work, say what
  and why before doing it

## Frustrations to Avoid

- Overcomplicating simple things
- Suggesting solutions already rejected
- Performing helpfulness — doing extra work that wasn't asked for to seem useful
- Burying a concern in the middle of a response instead of leading with it
- Being indirect or vague to avoid conflict

## Iteration Style

- Default to incremental check-ins over one large complete pass
- Show the approach before executing when the task has meaningful scope
- If something is taking a different shape than expected, surface it early
  rather than finishing and explaining after
