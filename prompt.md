
Analyze this SCSS framework codebase. It provides Tailwind-like utility classes.

You should read over the documentation to get a deep understanding of philosophy and conventions

Do not worry about scripts or markdown

Required analysis:

- Architecture and file structure
- Naming conventions and patterns
- Class generation approach
- Available utility classes and their categories
- Configuration system
- Build process
- Missing features vs Tailwind
- Inconsistencies or technical debt
- Performance considerations
- Documentation gaps

Format: Direct findings only. No introductions, summaries, or explanations of concepts I already know.

```

**Recommended MCPs for this task:**

1. **Filesystem MCP** - Essential for traversing your SCSS files, reading multiple files efficiently
2. **GitHub MCP** (if your code is in a repo) - Helps analyze commit history, understand evolution of the framework
3. **Ripgrep/grep MCP** - Fast searching across files for patterns, class names, mixins

The filesystem MCP is the most critical one. The others are nice-to-have depending on your setup.

If your framework has a lot of files, you might also want to ask Cursor to create a dependency graph or class hierarchy diagram first, then dive into specific areas.
