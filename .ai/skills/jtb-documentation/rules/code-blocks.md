# Code Blocks and Examples

## Block Attributes

- `class="..."` → outer demo wrapper class
- `preview-class="..."` → class applied to the preview container only, keeps copied code clean
- `+demo` / `+demo-folded` → render preview and code together

Use raw HTML (no demo attribute) when the block is purely visual demonstration and the markup is scaffold — showing the code would add noise rather than value.

For layout/responsive docs, use:

```md
+demo-folded class="resizable-container with-docs-only-overrides"
```

## Showcase Files

Quick visual references for components without a dedicated doc page, or
utilities that span multiple docs (e.g. typography).

**Default files:**

- `docs/examples/showcase-typography.md` — font sizes, weights, families, text utilities
- `docs/examples/showcase-ui.md` — components and UI elements without their own doc page

Two reasons something belongs in a showcase file:

1. **Syntax reminder** — enough variations exist that you forget the class names
2. **Existence reminder** — a single component worth flagging so it doesn't get overlooked

Format depends on content type:

- **UI components** (`showcase-ui.md`) — use `+demo-folded class="bx"` so markup is visible and copyable
- **Typography/syntax** (`showcase-typography.md`) — raw HTML pairing `<code>` class names with output

Group by component family under `##` headings. Variants sit under `###` within that group.

Do not ask whether to add something to a showcase file for skill, reference, or API docs.
