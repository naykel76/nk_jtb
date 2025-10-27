<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# JTB – Just the Basics

*Sensible defaults without over-styling.*

> JTB is a Sass framework that gives you structure without dictating style. Build with
> composable classes, override anything, and keep your markup readable.

---

**Why build another CSS framework?**

> "Because without reinventing the wheel we wouldn't have fast cars."  
> -- Nathan Watts

---

## Key Features

- **Context-aware modifiers** – `.primary` works on buttons, boxes, badges. No
  `.btn-primary` bloat.
- **Predictable naming** – `m-1` = 1rem, `p-2` = 2rem. Numbers mean what they say.
- **Minimal components** – Structure without decoration. Customize with utilities.
- **Build-time focused** – No JavaScript. No runtime magic. Just Sass.

---

## Directory Structure

```bash
src/
    ├──color-and-themes/
    │  ├── _buildtime-theme.scss  # SASS variables from theme maps
    │  ├── _colors.scss           # Color palette
    │  ├── _runtime-themes.scss   # CSS custom properties from theme maps
    │  └── _themes.scss           # Theme maps (source of truth)
```

## Theming Pattern

```scss
// Step 1: Define SASS variable (your existing system)
$primary: #2563eb;

// Step 2: Convert to CSS custom property (in theme file)
:root {
    --color-primary: #{$primary};  // Note the #{}
}

// Step 3: Use in component
.button {
    background: var(--color-primary);  // Can switch at runtime
}
```

## FAQ's

**How can I exclude axis indicators when creating position based classes?**

For example, instead of generating a class like `bdr-xy` to represent both the x and y
axes, I want to use just `bdr`. Similarly, I want to change `m-xy` to either `m` or `mxy`,
removing the explicit axis notation.


## CSS Positional Properties Patterns

**Split pattern** (`<property-start>-<position>-<property-end>`):
```css
border-<top|right|bottom|left>-width
border-<top|right|bottom|left>-style
border-<top|right|bottom|left>-color
border-<top-left|top-right|bottom-right|bottom-left>-radius
```

**Suffix pattern** (`<property>-<position>`):
```css
border-<top|right|bottom|left>
padding-<top|right|bottom|left>
margin-<top|right|bottom|left>
```

**When to use each pattern:**

- **Split pattern**: When controlling a specific sub-property (like width, style, or
  color) for a particular side
  - Example: `border-top-width: 2px` sets only the width of the top border
  
- **Suffix pattern**: When setting all aspects of a property for a particular side at once
  - Example: `border-top: 2px solid red` sets width, style, and color for the top border

## Spacing Scale

| px  | rem      | tailwind |
| --- | -------- | -------- |
| 4   | 0.25rem  | 1        |
| 6   | 0.375rem | 1.5      |
| 8   | 0.5rem   | 2        |
| 10  | 0.625rem | 2.5      |
| 12  | 0.75rem  | 3        |
| 14  | 0.875rem | 3.5      |
| 16  | 1rem     | 4        |
| 20  | 1.25rem  | 5        |
| 24  | 1.5rem   | 6        |

