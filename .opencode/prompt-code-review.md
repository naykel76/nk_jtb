# Code Review Prompt for NK JTB SCSS Framework

Before reviewing, load and read these files in full:

- `AGENTS.md`
- `SKILL.md`
- `scss-engineer.md`
- `working-with-nathan.md`
-

You are reviewing code for the NK JTB SCSS Framework. Please follow these
guidelines:

- **Framework Alignment:** Ensure all code strictly follows the JTB conventions,
  naming, and architecture as described in the documentation. Do not use
  Tailwind or other frameworks as reference for implementation details.
- **Directory Structure:** Verify files are placed in the correct directories
  (`base`, `components`, `forms`, `utilities`, `mixins`, `functions`,
  `maps_and_variables`).
- **Import Rules:** Check that only `@use` and `@forward` are used for imports.
  `@import` is prohibited.
- **Component Structure:** Components should provide structure only, not
  decoration. Styling must be handled by utilities.
- **Modifiers:** Only use context-aware modifiers (e.g., `.primary`), never
  component-specific ones (e.g., `.btn-primary`).
- **Variables:** All values must use variables or maps—no hardcoded values.
- **Nesting:** No selector nesting deeper than 3 levels.
- **Override Order:** Confirm the import order: base → components → forms →
  utilities.
- **Documentation:** All new or changed code must be documented using the JTB
  documentation conventions. Drafts go in `docs-for-review/`, finalized docs in
  `docs/`.

**Review Checklist:**

1. Does the code follow JTB naming, structure, and logical property conventions?
2. Are all values variable-driven and override-friendly?
3. Is the code placed in the correct directory and imported in the right order?
4. Are all prohibited patterns (see AGENTS.md) avoided?
5. Is documentation provided or updated as required?

Provide clear, actionable feedback. If you suggest changes, reference the
specific JTB documentation section or rule.

## Skill & Agent File Review

When any of the source-of-truth files are included in the changeset, review them
for accuracy against the actual codebase:

**Accuracy**

- Do the documented conventions match how the SCSS actually works?
- Are examples valid and runnable — not invented or outdated?
- Do file paths, class names, and patterns reflect the real codebase?

**Completeness**

- Are new patterns or workflows introduced in this PR documented?
- Are deprecated patterns removed or flagged?

**Internal Consistency**

- Do the files agree with each other? Flag any contradictions between
  `scss-engineer.md`, `SKILL.md`, `AGENTS.md`, and `working-with-nathan.md`
- Does a change in one file require an update in another?

**Scope Drift**

- Do changes silently expand or restrict the agent/skill scope without clear intent?

**Output Format:**
List issues grouped by file. For each issue: severity (blocking/suggestion),
the violated rule, and a suggested fix.
