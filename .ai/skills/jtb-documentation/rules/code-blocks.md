# Code Blocks and Examples

## Block Attributes

- Use `+demo-folded class="resizable-container with-docs-only-overrides"` for
  demos that depend on screen size or height (responsive classes, `h-screen`,
  `min-h-screen`). Otherwise use `class="bx"`.
- Tag every demo by how it is built: `example-utils` for utilities,
  `example-jtb` for a JTB class.
- Keep preview-only sizing, spacing, backgrounds and framing on that outer
  example wrapper, outside reusable markup. Apply this in `index.html` too.
  In Markdown, put wrapper classes in block attributes, not the code snippet.
- Use raw HTML with no demo when the markup is just scaffold — showing the code
  adds noise.

## Examples and Showcases

- Follow the development-workspace rule in `jtb-best-practices` when building
  examples.
- Use `showcase-{subject}.md`, such as `showcase-boxes.md`, for visual
  collections needing little explanation.
- Use subject-named pages, such as `dashboard.md`, for composed examples needing
  explanation of their structure, behaviour or variations.
