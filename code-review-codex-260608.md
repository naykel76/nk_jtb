# Theme and Color System Review

## Scope Reviewed

- Application audit of the JTB color/theme subsystem.
- Covered color maps, theme partials, utility generators, component defaults, and docs.
- Source-level review only; generated CSS and browser visuals were not tested.

## Findings

### Medium — Runtime brand overrides do not update all brand-dependent components

- **Impact:** A project that overrides `--primary` at runtime can get mixed old and new brand colors across components.
- **Evidence:** Brand defaults are defined from SCSS values in [src/maps_and_variables/_components.scss:79](src/maps_and_variables/_components.scss#L79), [src/maps_and_variables/_components.scss:86](src/maps_and_variables/_components.scss#L86), [src/maps_and_variables/_components.scss:87](src/maps_and_variables/_components.scss#L87), and [src/maps_and_variables/_components.scss:93](src/maps_and_variables/_components.scss#L93); `.navbar` emits the compiled `$navbar-bg` in [src/components/_navbar.scss:4](src/components/_navbar.scss#L4), menu hover/underline uses compiled fallbacks in [src/components/_menu.scss:28](src/components/_menu.scss#L28) and [src/components/_menu.scss:48](src/components/_menu.scss#L48), while tabs use runtime `var(--primary)` in [src/components/_tabs.scss:6](src/components/_tabs.scss#L6) and [src/components/_tabs.scss:25](src/components/_tabs.scss#L25). The docs say CSS custom properties let users swap a brand color without recompiling in [docs/variable-system.md:47](docs/variable-system.md#L47).
- **Fix:** Decide that brand colors are a runtime token family, then make brand-derived component defaults resolve through component CSS vars that default to `var(--primary)`, `var(--secondary)`, or `var(--accent)` instead of compiled `$primary` values.
- **Trade-off:** Components that rely on Sass color functions for derived values still need compile-time fallbacks or explicit runtime tokens.

### Medium — Brand theme text contrast can go stale after runtime color changes

- **Impact:** Changing only `--primary`, `--secondary`, or `--accent` can leave stale text colors on theme classes and button states.
- **Evidence:** [src/themes/_brand.scss:21](src/themes/_brand.scss#L21) computes `--on-{name}` from the compile-time `$brand-colors`, but brand themes and outline hover states consume `var(--on-{name})` in [src/themes/_brand.scss:57](src/themes/_brand.scss#L57) and [src/themes/_brand.scss:68](src/themes/_brand.scss#L68); brand button hover/active states also consume the same token in [src/components/_button.scss:113](src/components/_button.scss#L113). [docs/variable-system.md:87](docs/variable-system.md#L87) documents this caveat, but [docs/colors-and-themes.md:386](docs/colors-and-themes.md#L386) and [docs/colors-and-themes.md:414](docs/colors-and-themes.md#L414) still describe brand themes as runtime-swappable without that qualification.
- **Fix:** Document and enforce runtime brand overrides as a full token set, or remove the implication that overriding only the base brand color is enough.
- **Trade-off:** CSS cannot reliably choose accessible `on-*` colors from arbitrary runtime colors without either explicit tokens or newer browser-dependent color logic.

### Medium — Brand themes now bypass the normal theme builder pipeline

- **Impact:** `.primary`, `.secondary`, and `.accent` look like ordinary theme classes in the public API but are generated and maintained through different code paths.
- **Evidence:** Static hue and semantic themes use [src/themes/_color.scss:36](src/themes/_color.scss#L36), [src/themes/_color.scss:41](src/themes/_color.scss#L41), and the shared builders in [src/mixins/_themes.scss:28](src/mixins/_themes.scss#L28); brand themes are generated manually in [src/themes/_brand.scss:56](src/themes/_brand.scss#L56). Buttons repeat the same split with static themes in [src/components/_button.scss:106](src/components/_button.scss#L106) and brand themes in [src/components/_button.scss:113](src/components/_button.scss#L113). Before `81b753b`, `primary`, `secondary`, and `accent` lived in `$base-colors` and passed through the same loops as hue themes.
- **Fix:** Make one theme pipeline support both static Sass values and runtime CSS-var-backed values, then feed brand themes through that pipeline instead of hand-building them separately.
- **Trade-off:** The shared theme builders need a small extension so they can accept precomputed runtime tokens instead of only Sass color values.

### Low — Brand colors are not first-class across all color-consuming APIs

- **Impact:** Users can reach for brand color classes in some places but not others, which makes the color system feel inconsistent.
- **Evidence:** Background, text, and border utilities are generated from static palette maps in [src/utilities/_backgrounds.scss:23](src/utilities/_backgrounds.scss#L23), [src/maps_and_variables/_typography.scss:34](src/maps_and_variables/_typography.scss#L34), and [src/utilities/_border.scss:28](src/utilities/_border.scss#L28), while brand utility generation lives separately in [src/themes/_brand.scss:78](src/themes/_brand.scss#L78). Gradient utilities generate only base and scale color stops in [src/utilities/_gradients.scss:57](src/utilities/_gradients.scss#L57), and the gradient resolver checks semantic/base colors but not brand colors in [src/mixins/_gradients.scss:12](src/mixins/_gradients.scss#L12).
- **Fix:** After the theme pipeline is unified, decide per utility domain whether brand tokens should be included.

## Top Architectural Risks

- Brand has two meanings: compile-time SCSS defaults and runtime CSS tokens.
- Brand theme generation is separated from the normal theme builder pipeline.
- Component defaults mix `$primary` and `var(--primary)`, so runtime theming is uneven.
- Documentation promises runtime swapping more broadly than the implementation safely supports.

## Top Refactor Priorities

- Treat brand as a runtime token family, not just three extra colors.
- Refactor theme builders so static and runtime-backed themes use the same public pipeline.
- Convert brand-derived component defaults to CSS custom properties with brand-token fallbacks.
- Tighten docs around what changes at runtime and what remains compile-time.

## Next Sprint Action Plan

- **Action:** Define a clear brand token contract; **Why now:** removes the current compile/runtime ambiguity; **Effort:** S; **First step:** write the required token list for `primary`, `secondary`, and `accent`.
- **Action:** Unify theme generation; **Why now:** restores the pre-`81b753b` mental model where `.primary` and `.teal` are both normal themes; **Effort:** M; **First step:** extend [src/mixins/_themes.scss:28](src/mixins/_themes.scss#L28) to accept runtime-backed theme maps.
- **Action:** Convert component brand defaults to runtime component vars; **Why now:** makes brand overrides consistent across components; **Effort:** M; **First step:** start with navbar and menu because they currently compile `$primary`.
- **Action:** Update color/theme docs; **Why now:** prevents incorrect expectations about runtime swaps; **Effort:** S; **First step:** rewrite the runtime brand section in [docs/variable-system.md:75](docs/variable-system.md#L75).
- **Action:** Decide whether gradient stops should support brand; **Why now:** closes the most visible missing color API; **Effort:** S; **First step:** choose whether `from-primary` and `to-primary` should exist.

## Maintainability Risk

Moderate. The current split is understandable, but the same brand concept is implemented through separate Sass maps, CSS vars, component variables, and docs language.

## Cross-Boundary Coupling Risk

Moderate. Color decisions cross maps, themes, utilities, components, and documentation, so a change to brand behavior can easily miss one boundary.
