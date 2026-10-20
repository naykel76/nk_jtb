# Project Context

## Parked

### Framework

- Some class pairs still clash because they come from different CSS files, so
  the wrong one can win. Example: `flex-col to-md:hidden` never hides on phones
  (use `hidden md:flex-col` instead). Mostly affects text colours vs theme
  colours. Needs a proper fix to how the build orders its files.
