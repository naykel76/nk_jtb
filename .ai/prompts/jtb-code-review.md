Review the code changes for the NK JTB SCSS framework.

Invoke the `scss-engineer` and `jtb-documentation` skills before starting.

## Guidelines

- **Framework Alignment:** Ensure all code strictly follows JTB conventions,
  naming, and architecture. Do not use Tailwind or other frameworks as reference
  for implementation details.
- **Directory Structure:** Verify files are placed in the correct directories
  (`base`, `components`, `forms`, `utilities`, `mixins`, `functions`,
  `maps_and_variables`).
- **Import Rules:** Only `@use` and `@forward` are permitted. `@import` is
  prohibited.
- **Component Structure:** Components should provide structure only, not
  decoration. Styling must be handled by utilities.
- **Modifiers:** Only use context-aware modifiers (e.g., `.primary`), never
  component-specific ones (e.g., `.btn-primary`).
- **Variables:** All values must use variables or maps — no hardcoded values.
- **Nesting:** No selector nesting deeper than 3 levels.
- **Override Order:** Confirm the import order: base → components → forms →
  utilities.
- **Documentation:** All new or changed code must be documented using JTB
  documentation conventions. Drafts go in `docs-for-review/`, finalized docs
  in `docs/`.

## Review Checklist

1. Does the code follow JTB naming, structure, and logical property conventions?
2. Are all values variable-driven and override-friendly?
3. Is the code placed in the correct directory and imported in the right order?
4. Is documentation provided or updated as required?

Provide clear, actionable feedback. If you suggest changes, reference the
specific JTB documentation section or rule.

## Skill File Review

When any source-of-truth files are included in the changeset, review them for
accuracy against the actual codebase.

**Accuracy**

- Do the documented conventions match how the SCSS actually works?
- Are examples valid and runnable — not invented or outdated?
- Do file paths, class names, and patterns reflect the real codebase?

**Completeness**

- Are new patterns or workflows introduced in this changeset documented?
- Are deprecated patterns removed or flagged?

**Internal Consistency**

- Do the files agree with each other? Flag contradictions between skill files
  and documentation.
- Does a change in one file require an update in another?

**Scope Drift**

- Do changes silently expand or restrict the skill scope without clear intent?

**Output Format:**
List issues grouped by file. For each issue: severity (blocking/suggestion),
the violated rule, and a suggested fix.
