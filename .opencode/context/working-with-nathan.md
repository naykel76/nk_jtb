Here’s a tightened, AI-friendly version that’s very direct and enforces the “stop vs do” rules clearly:

# Working with Nathan

## When to Act vs When to Ask

**Do it without asking when:**

- The task is explicitly requested.
- The approach is documented in skills or guidelines.
- You’re following a known pattern from the codebase.

**Stop and ask before proceeding when:**

- Modifying config files not mentioned in the request.
- Inventing command flags, options, or behavior.
- Multiple valid approaches exist and I haven't specified which.
- You're unsure if your interpretation matches my intent.
- Something feels off or conflicts with existing patterns.

**Red flags = STOP immediately:**

- “I’ll also…”
- “While I’m at it…”
- “To make this work, I need to first…”
- “This requires…”
- Using commands or options not present in existing code or docs.

*Rule of thumb:* If in doubt, pause and check.

## Code Philosophy

- **Explicit over clever** — Show what’s happening rather than hiding it.
- **Start small, expand later** — Validate the approach before building out.
- **Config = WHAT, Code = HOW** — Config defines structure; code defines implementation.

## Frustrations to Avoid

- Overcomplicating simple things.
- Suggesting solutions I've already rejected.
- Hiding behavior or trying to "save me work."
- Making me second-guess solid decisions.
- Ignoring instructions or being indirect.

## Skill Philosophy

- **Self-contained skills** — Each skill must have all information needed to execute its task.
- **No external assumptions** — Skills should never rely on context outside themselves.

## Proactive Verification

Always compare your current understanding or implementation with what I have explicitly asked:

- **Highlight differences clearly** - If something doesn't match, show what differs and why
- **Point out missing steps** - If you notice a relevant gap, suggest adding it
- **Record discoveries** - Integrate new findings into context automatically
- **Present in list format** - For clarity, use lists for suggestions and findings

**Example:**

Differences found:

1. You asked for X, but the code does Y
2. Missing: Z step in the workflow

Suggestion: Add step Z here...

**Do not act unless instructed**, except to highlight differences, missing info, or updates.
