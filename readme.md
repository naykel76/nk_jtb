<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL JTB

Why!

> Because without reinventing the wheel we wouldn’t have fast cars.  -- Nathan Watts

## To Do's

- remove themes from color variables

- Fix the positional class names. When adding the positions map the class names are not correct.

## FAQ's

**How can I exclude axis indicators when creating position based classes?**

For example, instead of generating a class like `bdr-xy` to represent both the x and y
axes, I want to use just `bdr`. Similarly, I want to change `m-xy` to either `m` or `mxy`,
removing the explicit axis notation.

## Color List

```html
<p class="txt-red">red</p>
<p class="txt-orange">orange</p>
<p class="txt-amber">amber</p>
<p class="txt-yellow">yellow</p>
<p class="txt-lime">lime</p>
<p class="txt-green">green</p>
<p class="txt-emerald">emerald</p>
<p class="txt-teal">teal</p>
<p class="txt-cyan">cyan</p>
<p class="txt-sky">sky</p>
<p class="txt-blue">blue</p>
<p class="txt-indigo">indigo</p>
<p class="txt-violet">violet</p>
<p class="txt-purple">purple</p>
<p class="txt-fuchsia">fuchsia</p>
<p class="txt-pink">pink</p>
<p class="txt-rose">rose</p>
<p class="txt-slate">slate</p>
<p class="txt-gray">gray</p>
<p class="txt-zinc">zinc</p>
<p class="txt-neutral">neutral</p>
<p class="txt-stone">stone</p>
```


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



| px  | rem      |
| --- | -------- |
| 4   | 0.25rem  |
| 6   | 0.375rem |
| 8   | 0.5rem   |
| 10  | 0.625rem |
| 12  | 0.75rem  |
| 14  | 0.875rem |
| 16  | 1rem     |
| 20  | 1.25rem  |
| 24  | 1.5rem   |
