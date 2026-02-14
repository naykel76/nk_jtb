# What are the goals of the new build system?

From what I understand:
Where we are:

- The framework has an "old" build system in _build-classes.scss with a lot of functionality
- We've started creating a new "build-system" in src/mixins/build-system/ with:
  - _controllers.scss - orchestration (build-base-classes, build-responsive-classes, build-classes)
  - _layers.scss - layer implementations (build-base-layer, build-responsive-layer)
  - _make-classes.scss - the actual make mixins (make-base-class, make-responsive-class)
  - _make-properties.scss - property generation
  - _helpers.scss - helper functions/variables
  
Short term goals:

1. Get the new build-system to produce the same output as the old system

Long term goals:

1. Replace the old _build-classes.scss entirely with the new build-system
2. Have a cleaner, more modular architecture
3. Delete the old files once migration is complete

4. Get parity - new system produces same output as old (class names, units, etc.)
5. Add missing patterns - to:, on:, cq-: responsive patterns
6. Migrate utilities - one by one, switch utilities to use new build-system Long Term Goals
7. Replace old - delete _build-classes.scss and old files entirely
8. Clean architecture - smaller, targeted files that are easier to maintain Does this match your understanding? Am I missing anything?

-----------------------------------------

## Create API docs for functions

Should this be one file or function,REA
