---
name: documenting-utilities
description: >-
  Pattern for documenting utility classes in docs-updated/utilities/. Activated
  when creating or updating utility documentation.
---

**Activate this skill when:** Creating or updating utility documentation in
`docs-updated/utilities/`.

-------------------------------------------------------------------------------

## Location

`docs-updated/utilities/` (symlinked to external repo)

-------------------------------------------------------------------------------

## Format

### Demo Block

Use `+demo-folded class="bx"` wrapper:

```markdown
```html +demo-folded class="bx"
<div class="grid gap lg:cols-3 tac">
    <div class="bx bdr">
        <code>h-2</code><br>2rem
    </div>
</div>
```

```

### Structure

1. **Title:** `# Utility Name`
2. **Section:** `## Property Name`  
3. **Brief description:** What it does
4. **Demo:** Visual + code example
5. **Values list:** Available values at end (optional for large sets)

### Grid Layouts

Use grid layouts to compare variants:

```html
<div class="grid gap lg:cols-3 tac">
    <!-- items -->
</div>
```

-------------------------------------------------------------------------------

## When to Show Examples

| What                | Show Example   |
| ------------------- | -------------- |
| Core/primary values | Yes            |
| Common use cases    | Yes            |
| Every variant       | No             |
| Full value list     | List text only |

List available values without visual examples when there are many (e.g., 20+ rem
values).

-------------------------------------------------------------------------------

## Reference

Templates: `border.md`, `position.md`, `sizing.md`
