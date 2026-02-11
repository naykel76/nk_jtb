# JTB Framework Audit Report

**Date:** February 11, 2026 **Auditor:** OpenCode SCSS Engineer

---

## Executive Summary

The JTB framework demonstrates a well-thought-out architecture with clear
separation of concerns, modern SCSS practices, and a coherent design philosophy.
The cascade and import order follow the documented "Base → Components →
Utilities" priority. Several areas for improvement were identified, primarily
around code cleanliness, documentation gaps, and some anti-patterns.

**Overall Assessment:** Strong foundation with room for refinement.

---

## Strengths

### 1. Architecture & Design

- Clear directory structure matching documented philosophy
- Proper cascade order: Base → Components → Utilities (highest priority)
- Logical properties (RTL support) implemented throughout
- Context-aware modifiers working correctly

### 2. SCSS Module System

- Consistent use of `@use` and `@forward`
- Proper namespace management (`as *` for convenience, namespaced for specific
  needs)
- Good separation between configuration and implementation

### 3. Variable System

- Three-map pattern consistently applied (`*-values`, `*-variants`, `*-map`)
- Proper use of `!default` for overridability
- `smart-merge()` function correctly implemented for cascade precedence

### 4. Class Generation

- Builder/Maker system is sophisticated and well-implemented
- `build-classes()` generating utilities from configuration maps
- `build-composite-classes()` for compound utilities

### 5. Documentation

- Core philosophy well-documented
- Naming conventions clearly explained
- Builder/Maker system documented in `docs/core-architecture.md`

---

## Issues Found

### Critical (Priority 1)

#### 1.1 `!important` Usage in Components

**File:** `src/components/_box.scss` **Lines:** 39, 46

```scss
.bx-header {
    margin-block-start: -$bx-padding !important;  // Line 39
}

.bx-footer {
    margin-block-end: -bx-padding !important;     // Line 46
}
```

**Issue:** Using `!important` in a utility framework defeats the purpose of
cascade control. Users cannot override these margins.

**Recommendation:** Remove `!important` and restructure using `:where()` for
lower specificity or redesign the component structure.

---

#### 1.2 Commented-Out Code in Mixin File

**File:** `src/mixins/_build-classes.scss` **Lines:** 67-150

Large blocks of commented-out code for Layer 3 (state variants) and Layer 4
(responsive + state combinations).

**Issue:** Dead code in the codebase increases maintenance burden and creates
confusion about future plans.

**Recommendation:** Either implement the commented features or remove the code
entirely.

---

### High Priority (Priority 2)

#### 2.1 Messy Root Variables File

**File:** `src/base/_root.scss`

The file contains approximately 50 lines of commented-out CSS custom properties
(lines 67-113).

**Issue:** Creates visual noise and makes it difficult to understand which
properties are actively used.

**Recommendation:** Remove commented code or move to a separate "legacy" file if
backward compatibility is needed.

---

#### 2.2 Duplicate Color Definitions

**File:** `src/maps_and_variables/_colors.scss` **Lines:** 302-589

The file defines both OKLCH colors (used throughout) and hex Tailwind colors
(`$tailwind-colors`) that appear unused.

**Issue:** Increases file size unnecessarily and creates confusion about which
color system to use.

**Recommendation:** Remove unused `$tailwind-colors` or clearly document its
purpose.

---

#### 2.3 Inconsistent @use Patterns

Some files use wildcard imports:

```scss
@use '../maps_and_variables/components' as *;
```

While others use specific imports:

```scss
@use '../maps_and_variables/base' as base;
```

**Issue:** Inconsistent patterns make code harder to maintain.

**Recommendation:** Establish a clear convention. Consider using `as *` for all
internal framework files for consistency.

---

#### 2.4 Missing Color Variant Names in Button

**File:** `src/components/_button.scss` **Lines:** 87-92

```scss
@each $key, $color in $color-map {
    .#{$button-prefix}.#{$key} {
        @include hover($color);
        @include active($color);
    }
}
```

This generates classes like `.btn.white`, `.btn.muted`, but these should
probably be semantic names (`.btn-light`, `.btn-subtle`) rather than color
names.

**Issue:** The generated class names don't align with the context-aware modifier
philosophy.

**Recommendation:** Create a `$button-theme-map` with semantic names instead of
using `$color-map` directly.

---

### Medium Priority (Priority 3)

#### 3.1 Missing Documentation for Functions

The following functions are used but not documented:

- `text-color()` - Used in multiple components
- `border-contrast()` - Used in themes
- `smart-merge()` - Critical for understanding the framework

**Issue:** Users need to read source code to understand core functionality.

**Recommendation:** Create `docs/api/functions.md` documenting all public
functions.

---

#### 3.2 No Clear API Boundaries

It's unclear which mixins/functions are:

- **Internal** - Subject to change without notice
- **Public** - Stable API for users to consume

**Issue:** Users don't know what they can safely use in their projects.

**Recommendation:** Add prefix convention (e.g., `_jtb-internal-mixin()`) or
documentation specifying stability levels.

---

#### 3.3 Incomplete API Documentation

`docs/core-architecture.md` mentions several mixins but doesn't provide:

- Parameter descriptions
- Return values
- Usage examples

**Issue:** Incomplete documentation reduces developer experience.

**Recommendation:** Expand API documentation with comprehensive examples.

---

#### 3.4 Unused Import

**File:** `src/components/_box.scss` **Line:** 2

```scss
@use '../maps_and_variables/value-maps' as *;
```

This import appears unused in the file.

**Issue:** Unused imports add noise and potential for confusion.

**Recommendation:** Remove unused imports.

---

### Low Priority (Priority 4)

#### 4.1 Naming Inconsistencies

| Pattern               | File           | Example |
| --------------------- | -------------- | ------- |
| `$text-prefix`        | `_config.scss` | `txt-`  |
| `$line-height-prefix` | `_config.scss` | `lh-`   |
| `$font-weight-prefix` | `_config.scss` | `fw-`   |

Some use hyphenated names, some don't. No clear pattern.

**Recommendation:** Establish consistent naming convention for prefixes.

---

#### 4.2 Spacing Scale Documentation Mismatch

README.md lists spacing scale:

```
| 1 | 4 | 0.25rem |
| 2 | 8 | 0.5rem  |
```

But value maps use direct rem values (1 = 1rem, not 0.25rem).

**Issue:** Documentation mismatch creates confusion.

**Recommendation:** Update README.md to match actual implementation.

---

#### 4.3 No Version Strategy Documented

No `CHANGELOG.md` or version history.

**Issue:** Users can't track framework evolution.

**Recommendation:** Add `CHANGELOG.md` following Keep a Changelog format.

---

## Cascade Analysis

### Import Order (build.scss)

```scss
@use './base';              // 1. Lowest priority

@forward './components';    // 2. Medium priority
@forward './forms';

@forward './utilities/*';   // 3. Highest priority
```

**Verdict:** Correct. Utilities override components override base styles as
documented.

---

### Three-Map Pattern

```scss
$spacing-variants: (base: 1rem, auto: auto) !default;
$spacing-values: (0, 1, 2, 3) !default;
$spacing-map: smart-merge($spacing-variants, $spacing-values);  // Variants FIRST
```

**Verdict:** Correct. Variants before values ensures base class appears first in
CSS output, allowing specific values to properly override.

---

### Logical Properties

All components use logical properties:

- `margin-block-start` instead of `margin-top`
- `padding-inline` instead of `padding-left/right`
- `border-radius` with logical corners

**Verdict:** Excellent RTL support.

---

## Recommendations Summary

### Immediate Actions (This Sprint)

1. Remove `!important` from `_box.scss`
2. Clean up commented code in `_build-classes.scss`
3. Remove unused `$tailwind-colors` from `_colors.scss`
4. Clean up commented custom properties in `_root.scss`

### Short-Term (Next Sprint)

1. Create API documentation for functions
2. Establish and document API stability levels
3. Fix naming inconsistencies in `_config.scss`
4. Update README.md spacing scale documentation

### Long-Term (Future Versions)

1. Implement state variant support (commented code in `_build-classes.scss`)
2. Add `CHANGELOG.md`
3. Create migration guide for major versions
4. Consider Sass module organization (separate public/internal APIs)

---

## Files Reviewed

| Category         | Files                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Core Docs        | `docs/introduction.md`, `docs/core-architecture.md`, `docs/conventions.md`                                                                                   |
| Build            | `src/build.scss`                                                                                                                                             |
| Base             | `src/base/index.scss`, `src/base/_root.scss`                                                                                                                 |
| Components       | `src/components/_box.scss`, `src/components/_button.scss`, `src/components/index.scss`                                                                       |
| Forms            | `src/forms/_control.scss`, `src/forms/index.scss`                                                                                                            |
| Utilities        | `src/utilities/_spacing.scss`, `src/utilities/_typography.scss`, `src/utilities/_themes.scss`                                                                |
| Maps & Variables | `src/maps_and_variables/_base.scss`, `src/maps_and_variables/_colors.scss`, `src/maps_and_variables/_config.scss`, `src/maps_and_variables/_value-maps.scss` |
| Mixins           | `src/mixins/_build-classes.scss`, `src/mixins/_themes.scss`                                                                                                  |
| Functions        | `src/functions/_map-and-list-helpers.scss`                                                                                                                   |

---

## Conclusion

The JTB framework has a solid architectural foundation with modern SCSS
practices. The core philosophy of "structure without decoration" is
well-implemented. Priority should be given to removing `!important` usage and
cleaning up commented code. Medium-term focus should be on improving
documentation, especially for the API.

The framework is in good shape for continued development with these identified
improvements.
