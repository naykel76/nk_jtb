# SCSS Directory Structure

## Current Structure

```bash
scss/
├── functions/           # Pure, reusable utility functions
├── mixins/              # Pure, reusable mixins
└── systems/             # Complete workflows (functions + mixins together)
```

### functions/
Pure utility functions that can be used anywhere. These are standalone functions that
don't depend on specific mixins or configurations.

**Examples:** String manipulation, math helpers, validation functions, resolvers.

### mixins/
Reusable mixins for common styling patterns. These are general-purpose tools that work
independently.

**Examples:** Media query mixins, layout helpers, generic styling patterns.

### systems/
Complete workflows where functions and mixins work together as a cohesive unit. These are
feature-complete modules that combine related functionality.

**Examples:** Spacing systems, typography systems, color systems.


## _resolvers.scss

### Resolver Functions
These functions conditionally resolve values based on configuration modes. They ensure
valid lists or values are returned, preserving original values when the mode is disabled.

**resolve-breakpoints():** Resolves breakpoints based on responsive mode.

**Examples:**
- `resolve-breakpoints(true, null)` → `('sm', 'md', 'lg', 'xl')`
- `resolve-breakpoints(false, ('lg'))` → `('lg')`
- `resolve-breakpoints(false, null)` → `null`

### Getter Functions
These functions return default values when none are provided, ensuring consistent data
access.



<!-- scss/
    ├── components/          # UI component styles
    ├── config/              # Configuration maps and design tokens
    │   ├── _colors.scss     # Color palettes and variants
    │   ├── _layout.scss     # Display, position, alignment maps
    │   ├── _spacing.scss    # Margin, padding, border values
    │   ├── _typography.scss # Font weights, sizes, families
    │   └── _index.scss      # Forwards all config files
    ├── utilities/           # Utility class generation and configs
    ├── _base.scss           # Base styles, typography, root
    └── _properties.scss     # Property maps for utility generation -->
<!-- 
### base/
Foundation styles including CSS resets, base typography, root variables, and fundamental
styling that applies globally.

### components/
Styles for specific UI components. These are complete styling solutions for individual
interface elements.

**Examples:** Buttons, cards, modals, navigation components.

### config/
Configuration maps and design tokens split by domain. Each file focuses on a specific area
of configuration, keeping files manageable and easy to navigate.

**Files:** Colors, layout properties, spacing values, typography scales.



### properties/
Property maps that define how utility classes are generated. Contains the configuration
that connects design tokens to CSS utility classes.



### utilities/
Utility class generation and related configurations. This is where utility classes are
actually created and applied.

**Examples:** Generated spacing utilities, color utilities, typography utilities. -->

---

## Alternative Flat Structure

```
src/
├── _config.scss         # All configuration & variables

├── _properties.scss     # All property maps & utility configs
├── _base.scss           # Base styles, typography, root
├── _components.scss     # All UI components
└── _utilities.scss      # Generated utility classes
```

### _config.scss
Central configuration file containing all variables, settings, and global constants that
control the system behavior.



### _properties.scss
All property maps and utility configurations. Contains the data structures that define how
utility classes are generated.

### _base.scss
Foundation styles including CSS resets, base typography, root variables, and fundamental
styling that applies globally.

### _components.scss
All UI component styles consolidated into a single file. Contains complete styling
solutions for interface elements.

### _utilities.scss
Generated utility classes. The output of the utility generation system, containing all the
actual CSS utility classes.