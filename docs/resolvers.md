# Resolvers and Getters

Resolvers and getters work together to centralise conditional logic and data
normalisation, turning raw configuration maps into predictable structures. This avoids
scattering edge cases, defaults, and transformations throughout mixins.

## Purpose

Configuration maps often contain optional properties, conditional logic, and mixed
formats. Resolvers and getters process these once and return clean, standardised data that
mixins can rely on.

**Before resolvers and getters:**

```scss
@mixin some-mixin($config) {
  $prefix: if(map.get($config, 'omit-prefix'), '', map.get($config, 'prefix'));
  $states: if($with-state, get-states(map.get($config, 'states')), map.get($config, 'states'));
  // ...more conditional logic
}
```

**After resolvers and getters:**

```scss
@mixin some-mixin($config) {
  $resolved: resolve-property-config($config);
  // predictable, ready-to-use structure
}
```

## Resolvers

Resolvers handle conditional logic and data transformation:
- They make decisions based on multiple parameters
- They transform or normalise data based on context
- They contain the "business logic" of your system

**Example:**
```scss
@function resolve-breakpoints($responsive, $breakpoints) {
    @return if($responsive, get-breakpoints($breakpoints), $breakpoints);
}
```
This **decides** whether to process `$breakpoints` through `get-breakpoints()` or return
it as-is, based on the `$responsive` flag.

## Getters

Getters provide simple data retrieval with defaults:
- They return data or fallback to defaults
- They don't make complex decisions
- They're purely about data access

**Example:**
```scss
@function get-breakpoints($breakpoints) {
    $default-breakpoints: ('sm', 'md', 'lg', 'xl');
    @return if($breakpoints == null, $default-breakpoints, $breakpoints);
}
```
This simply **retrieves** breakpoints or provides defaults - no complex logic.

## Resolvers vs Getters

The key distinction lies in their scope and decision-making complexity:

| Aspect             | Resolvers                      | Getters                      |
| ------------------ | ------------------------------ | ---------------------------- |
| **Input**          | Multiple parameters            | Single parameter             |
| **Logic**          | Complex conditional processing | Simple null/default checks   |
| **Purpose**        | Transform and normalise data   | Retrieve data with fallbacks |
| **Decision scope** | Multi-parameter business logic | Single-parameter data access |

**Resolvers** handle the "what should we do?" questions based on context and multiple
inputs.  **Getters** handle the "what do we have?" questions with simple data retrieval.

## The Pattern

**Resolvers** follow this pattern:
1. **Input**: Multiple parameters that affect the decision
2. **Logic**: Conditional processing based on those parameters  
3. **Output**: Transformed/normalised data ready for use

**Getters** follow this pattern:
1. **Input**: Single data parameter
2. **Logic**: Simple null check
3. **Output**: Data or default fallback

This separation keeps your conditional logic centralised in resolvers while keeping simple
data access in getters, creating a clean architectural pattern that makes your code more
maintainable.