
## Phase 1: Foundation Cleanup (Low Risk, High Impact)

### Step 1.1: Remove Deprecated Code

**Goal:** Clean up the codebase without breaking anything

- Remove `mixins/_make-classes-old.scss`
- Remove all imports of the old file
- Test that existing utilities still compile

**Why first:** Zero functional changes, reduces confusion, easy to verify

### Step 1.2: Consolidate Common Imports

**Goal:** Make dependencies explicit

- Replace `common-tools.scss` barrel import with explicit imports in each file
- Document what each file actually needs
- Remove unused imports

**Why second:** Makes next steps clearer, no behavior changes

---

## Phase 2: Builder Consolidation (Medium Risk, High Value)

### Step 2.1: Audit Builder Usage

**Goal:** Understand current state

- Document which utilities use `build-classes()` (old)
- Document which utilities use `build-classes-new()` (new)
- List differences in output between the two

**Why first:** Need clear picture before making changes

### Step 2.2: Migrate to Single Builder

**Goal:** One build system

- Choose primary builder (likely `build-classes-new()`)
- Migrate remaining utilities one category at a time (start with smallest)
- Test each migration in `play.scss`
- Remove old builder when migration complete

**Why second:** Reduces complexity, enables next improvements

---

## Phase 3: DRY Breakpoint Handling (Medium Risk, Medium Value)

### Step 3.1: Abstract Breakpoint Logic

**Goal:** Replace hardcoded breakpoint checks

- Create loop-based breakpoint mixin that generates media queries
- Test in `play.scss` with one utility type (e.g., margin)
- Verify output matches current behavior

### Step 3.2: Replace Hardcoded Breakpoints

**Goal:** Use new abstraction everywhere

- Update maker mixins to use new breakpoint loop
- Update magic class builders
- Remove all hardcoded `if $breakpoint == sm` checks

**Why third:** Requires stable builder first, enables easier breakpoint changes

---

## Phase 4: State Variants Implementation (High Risk, High Value)

### Step 4.1: Re-enable State Layer

**Goal:** Get hover/focus/active working

- Uncomment Layer 3/4 in builder
- Test with one utility (e.g., background colors) in `play.scss`
- Verify cascade order (base < responsive < state < responsive-state)

### Step 4.2: Expand State Support

**Goal:** Full state variant system

- Add state support to remaining utilities (colors, borders, spacing)
- Document which utilities support states
- Create examples

**Why fourth:** Requires stable builder and breakpoint system

---

## Phase 5: Naming Consistency (Low Risk, Medium Value)

### Step 5.1: Standardize Prefixes

**Goal:** Consistent naming pattern

- Audit all prefixes (create list of current patterns)
- Define standard pattern (e.g., all properties use dash separator)
- Update configs one category at a time
- Update docs

### Step 5.2: Clean Position Key Usage

**Goal:** Consistent axis key handling

- Document which utilities should/shouldn't omit axis keys
- Update `$xy-axis-exclusions` to match conventions
- Verify consistency

**Why fifth:** Pure cleanup, doesn't affect functionality much

---

## Phase 6: Performance Optimization (Low Risk, High Impact)

### Step 6.1: Add CSS Purging

**Goal:** Reduce production CSS size

- Integrate PurgeCSS or similar
- Configure content scanning
- Test with sample project
- Measure size reduction

### Step 6.2: Optional Utility Imports

**Goal:** Allow selective loading

- Split utilities into individual importable files
- Create preset bundles (minimal, standard, full)
- Update build.scss to use new structure

**Why last:** Works better with clean, consolidated codebase

---

## Recommended Starting Point

**Start with Phase 1, Step 1.1** - Remove deprecated code. This is:

- Lowest risk
- Immediately removes confusion
- Easy to verify success
- Doesn't require understanding complex systems

After each step, you can:

1. Test in `play.scss`
2. Review the changes
3. Decide whether to continue or adjust approach

Would you like to start with Step 1.1 (removing `_make-classes-old.scss`)? I can help you identify all the places it's imported and create the specific file changes needed.
