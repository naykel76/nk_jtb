---
name: jtb-documentation
description: Documentation patterns for the NK JTB SCSS framework.
---

**Activate this skill when:** Asked to create or update framework documentation.

## Documentation Locations

- **Utilities** → `docs-updated/utilities/`
- **API/Functions** → `docs-updated/api/`
- **Components** → `docs-updated/components/`

Check AGENTS.md for symlink setup if `docs-updated/` doesn't exist.

## Utility Documentation

### Demo Blocks

Use `+demo-folded class="bx"` for interactive examples:

```html +demo-folded class="bx"
<div class="example">Demo content</div>
```

### Structure

1. Title and brief description
2. Visual demo + code example
3. Available values/variants at end

## API/Function Documentation

### File Convention

**One API document per source file.**

Documentation mirrors the source file structure:

- `src/functions/_normalise-config.scss` → `docs-updated/api/normalise-config.md`
- `src/functions/_helpers.scss` → `docs-updated/api/helpers.md`

Document all functions contained in that source file.

### Structure

Scale detail to complexity:

**Simple functions:**

1. Name & one-line description
2. Signature with inline parameter notes
3. Example usage

**Complex functions:**

1. Name & brief description
2. Signature
3. Parameters table (if 2+ params or needs explanation)
4. What it returns (brief or structured if complex)
5. Example usage
6. Notes (only if there are gotchas or important context)

### Code Blocks

Use `+code` flag for SCSS examples:

```scss +code
@function example($param) {
    @return $param;
}
```

**Function signatures:** Keep on a single line, even if long.

```scss +code
@function normalise-property-config($property, $config, $responsive, $with-state)
```

## Formatting Rules

- **No horizontal rules (`---`)** - Ever. Use headings and spacing
- **Concise** - Get to the point
- **Show code** - Examples over explanation
- **Document the non-obvious** - Skip what's clear from context

## Reference

Utilities: `border.md`, `position.md`, `sizing.md`  
API: Check existing files in `docs-updated/api/`
