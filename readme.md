<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# JTB – Just the Basics

*Sensible defaults without over-styling.*

> JTB is a Sass framework that gives you structure without dictating style. Build with
> composable classes, override anything, and keep your markup readable.

---

**Why build another framework?**

> "Because without reinventing the wheel, we wouldn't have fast cars."  
> -- Nathan Watts

---

## Key Features

- **Context-aware modifiers** – `.primary` works on buttons, boxes, badges. No
  `.btn-primary` bloat.
- **Predictable naming** – `m-1` = 1rem, `p-2` = 2rem. Numbers mean what they say.
- **Minimal components** – Structure without decoration. Customize with utilities.
- **Build-time focused** – No JavaScript. No runtime magic. Just Sass.

---


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

| tailwind | px  | rem      |
| -------- | --- | -------- |
| 1        | 4   | 0.25rem  |
| 1.5      | 6   | 0.375rem |
| 2        | 8   | 0.5rem   |
| 2.5      | 10  | 0.625rem |
| 3        | 12  | 0.75rem  |
| 3.5      | 14  | 0.875rem |
| 4        | 16  | 1rem     |
| 5        | 20  | 1.25rem  |
| 6        | 24  | 1.5rem   |
| 7        | 28  | 1.75rem  |
| 8        | 32  | 2rem     |
| 9        | 36  | 2.25rem  |
| 9.5      | 38  | 2.375rem |
| 10       | 40  | 2.5rem   |
| 64       | 256 | 16rem    |

