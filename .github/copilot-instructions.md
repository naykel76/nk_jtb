# Copilot Instructions for JTB (Just the Basics)

## Project Overview
- **JTB** is a Sass-based utility framework focused on composable classes, minimal components, and predictable naming. It avoids runtime JavaScript and prioritizes build-time CSS generation.
- The architecture centers on SCSS mixins for class generation, using configuration maps and builder/maker mixins.

## Key Files & Structure
- `src/` — Main SCSS source. Organized by `base/`, `components/`, `forms/`, `functions/`, `maps_and_variables/`, `mixins/`, `utilities/`.
- `build.scss` — Entry point for building the full framework.
- `docs/` — Documentation, conventions, and architecture explanations.
- `examples/` — Examples are provided in the documents not the examples/ folder.
- `package.json` — Build/test/lint scripts and dependencies.

## Before Responding
- Always consider existing patterns in the codebase
- Reference docs/ when explaining architecture
- Don't give generic CSS advice—this is a framework with specific conventions

For more details, see:
- `docs/core-architecture.md`
- `docs/conventions.md`
- `docs/responsive-design.md`
- `README.md`

## Class Generation Patterns
- **Builders**: Use configuration maps to generate sets of utility classes. Example:
  ```scss
  @include build-classes((margin: (prefix: 'm-', values: (1,2,3), unit: 'rem')));
  // Generates: .m-1, .m-2, .m-3
  ```
- **Makers**: For single, precise classes. Example:
  ```scss
  @include make-single-property-class('display', 'hidden', 'none', $breakpoints: (md, lg), $states: (hover));
  // Generates: .hidden, .md:hidden, .lg:hidden, .hover:hidden:hover
  ```
- **Responsive Prefixes**: `md:`, `on-md:`, `to-md:` control when styles apply. See `docs/responsive-design.md` for details.

## Naming Conventions
- Utility classes: `{breakpoint}:{property}-{variant/value}`
  - Examples: `mxy`, `gap-lg`, `md:mxy-3`, `on-lg:hidden`
- Properties use short prefixes: `m` (margin), `p` (padding), `bg` (background), `txt` (text)
- Variants: Semantic keywords (`sm`, `lg`) or direct values (`1.5`, `0`)

## Developer Workflows
- **Build**: `npm run build` (uses Vite)
- **Dev**: `npm run dev` (hot reload, watches SCSS)
- **Watch**: `npm run watch` (watches build.scss)
- **Lint**: `npm run lint` or `npm run lint:base` (uses stylelint)
- **Playground**: `npm run play` (watches play.scss, opens files)
- **Debug**: `npm run debug` (Vite debug mode)

## Customization & Configuration
- Override variables in `maps_and_variables/` before importing modules.
- Import only needed modules for smaller builds.
- Vite config for SCSS: see `docs/installation.md` for `additionalData` usage.

## Integration Points
- Minimal JS: Only for interactive components (see `public/docs/components/` and dependencies in `package.json`).
- External: Uses Alpine.js for some components, Highlight.js and Marked for docs/examples.

## Project-Specific Patterns
- **No runtime CSS-in-JS.** All class generation is build-time via SCSS.
- **Responsive system**: Three prefix types for breakpoints (`md:`, `on-md:`, `to-md:`).
- **Spacing scale**: See `README.md` for px/rem mapping.
- **Class name prediction**: See `docs/conventions.md` for structure and examples.

---

