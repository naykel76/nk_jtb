# JTB to Tailwind CSS Cross-Reference Guide

This document provides a comprehensive cross-reference between JTB classes and their Tailwind CSS equivalents.

---

## Typography

### Text Alignment

| JTB Class | Tailwind Class | CSS Property        |
| --------- | -------------- | ------------------- |
| `tl`      | `text-left`    | text-align: left    |
| `tr`      | `text-right`   | text-align: right   |
| `tc`      | `text-center`  | text-align: center  |
| `tj`      | `text-justify` | text-align: justify |

### Text Color

| JTB Class | Tailwind Class | Notes                          |
| --------- | -------------- | ------------------------------ |
| `text-*`  | `text-*`       | Same pattern with color values |

### Text Decoration

| JTB Class                 | Tailwind Class       | CSS Property                        |
| ------------------------- | -------------------- | ----------------------------------- |
| `text-strike`             | `line-through`       | text-decoration: line-through       |
| `text-underline`          | `underline`          | text-decoration: underline          |
| `text-overline`           | `overline`           | text-decoration: overline           |
| `text-underline-overline` | `underline overline` | text-decoration: underline overline |

### Text Transform

| JTB Class          | Tailwind Class | CSS Property               |
| ------------------ | -------------- | -------------------------- |
| `text-upper`       | `uppercase`    | text-transform: uppercase  |
| `text-lower`       | `lowercase`    | text-transform: lowercase  |
| `text-capitalize`  | `capitalize`   | text-transform: capitalize |
| `text-normal-case` | `normal-case`  | text-transform: none       |

### Text Size

| JTB Class  | Tailwind Class       |
| ---------- | -------------------- |
| `txt-xs`   | `text-xs`            |
| `txt-sm`   | `text-sm`            |
| `txt-base` | `text-base`          |
| `txt-lg`   | `text-lg`            |
| `txt-xl`   | `text-xl`            |
| `txt-2xl`  | `text-2xl`           |
| `lead`     | Similar to `text-lg` |

### Font Family

| JTB Class    | Tailwind Class |
| ------------ | -------------- |
| `font-serif` | `font-serif`   |
| `font-sans`  | `font-sans`    |
| `font-mono`  | `font-mono`    |

### Font Weight

| JTB Class         | Tailwind Class    | Value |
| ----------------- | ----------------- | ----- |
| `font-thin`       | `font-thin`       | 100   |
| `font-extralight` | `font-extralight` | 200   |
| `font-light`      | `font-light`      | 300   |
| `font-normal`     | `font-normal`     | 400   |
| `font-medium`     | `font-medium`     | 500   |
| `font-semibold`   | `font-semibold`   | 600   |
| `font-bold`       | `font-bold`       | 700   |
| `font-extrabold`  | `font-extrabold`  | 800   |
| `font-black`      | `font-black`      | 900   |

### Line Height

| JTB Class    | Tailwind Class    | Value |
| ------------ | ----------------- | ----- |
| `lh-none`    | `leading-none`    | 1     |
| `lh-tight`   | `leading-tight`   | 1.25  |
| `lh-normal`  | `leading-normal`  | 1.5   |
| `lh-relaxed` | `leading-relaxed` | 1.75  |
| `lh-loose`   | `leading-loose`   | 2     |

### White Space

| JTB Class             | Tailwind Class        |
| --------------------- | --------------------- |
| `whitespace-normal`   | `whitespace-normal`   |
| `whitespace-nowrap`   | `whitespace-nowrap`   |
| `whitespace-pre`      | `whitespace-pre`      |
| `whitespace-pre-line` | `whitespace-pre-line` |
| `whitespace-pre-wrap` | `whitespace-pre-wrap` |

### Letter Spacing

| JTB Class          | Tailwind Class     |
| ------------------ | ------------------ |
| `tracking-tighter` | `tracking-tighter` |
| `tracking-tight`   | `tracking-tight`   |
| `tracking-normal`  | `tracking-normal`  |
| `tracking-wide`    | `tracking-wide`    |
| `tracking-wider`   | `tracking-wider`   |
| `tracking-widest`  | `tracking-widest`  |

---

## Spacing

### Margin

| JTB Class | Tailwind Class               |
| --------- | ---------------------------- |
| `m-*`     | `m-*`                        |
| `mx-*`    | `mx-*`                       |
| `my-*`    | `my-*`                       |
| `ms-*`    | `ms-*` (margin-inline-start) |
| `me-*`    | `me-*` (margin-inline-end)   |
| `mt-*`    | `mt-*`                       |
| `mb-*`    | `mb-*`                       |

### Padding

| JTB Class | Tailwind Class                |
| --------- | ----------------------------- |
| `p-*`     | `p-*`                         |
| `px-*`    | `px-*`                        |
| `py-*`    | `py-*`                        |
| `ps-*`    | `ps-*` (padding-inline-start) |
| `pe-*`    | `pe-*` (padding-inline-end)   |
| `pt-*`    | `pt-*`                        |
| `pb-*`    | `pb-*`                        |

### Space Between (Children)

| JTB Class   | Tailwind Class |
| ----------- | -------------- |
| `space-x-*` | `space-x-*`    |
| `space-y-*` | `space-y-*`    |

### Control Padding

| JTB Class   | Tailwind Class                        | Notes |
| ----------- | ------------------------------------- | ----- |
| `p-ctrl-sm` | Similar to form input small padding   |       |
| `p-ctrl`    | Similar to form input default padding |       |
| `p-ctrl-lg` | Similar to form input large padding   |       |

---

## Flexbox

### Display & Direction

| JTB Class          | Tailwind Class     | Notes                                  |
| ------------------ | ------------------ | -------------------------------------- |
| `flex-row`         | `flex-row`         | display: flex + flex-direction: row    |
| `flex-col`         | `flex-col`         | display: flex + flex-direction: column |
| `flex-row-reverse` | `flex-row-reverse` |                                        |
| `flex-col-reverse` | `flex-col-reverse` |                                        |

### Flex Wrap

| JTB Class           | Tailwind Class      |
| ------------------- | ------------------- |
| `flex-nowrap`       | `flex-nowrap`       |
| `flex-wrap`         | `flex-wrap`         |
| `flex-wrap-reverse` | `flex-wrap-reverse` |

### Flex Grow/Shrink

| JTB Class       | Tailwind Class |
| --------------- | -------------- |
| `flex-grow-0`   | `grow-0`       |
| `flex-grow-1`   | `grow`         |
| `flex-shrink-0` | `shrink-0`     |
| `flex-shrink-1` | `shrink`       |

### Flex Values

| JTB Class      | Tailwind Class |
| -------------- | -------------- |
| `flex-1`       | `flex-1`       |
| `flex-auto`    | `flex-auto`    |
| `flex-initial` | `flex-initial` |
| `flex-none`    | `flex-none`    |

### Order

| JTB Class                   | Tailwind Class              |
| --------------------------- | --------------------------- |
| `order-1` through `order-8` | `order-1` through `order-8` |

### Align Items

| JTB Class        | Tailwind Class   |
| ---------------- | ---------------- |
| `items-start`    | `items-start`    |
| `items-end`      | `items-end`      |
| `items-center`   | `items-center`   |
| `items-baseline` | `items-baseline` |
| `items-stretch`  | `items-stretch`  |

### Align Content

| JTB Class         | Tailwind Class    |
| ----------------- | ----------------- |
| `content-start`   | `content-start`   |
| `content-end`     | `content-end`     |
| `content-center`  | `content-center`  |
| `content-between` | `content-between` |
| `content-around`  | `content-around`  |
| `content-evenly`  | `content-evenly`  |

### Justify Content

| JTB Class         | Tailwind Class    |
| ----------------- | ----------------- |
| `justify-start`   | `justify-start`   |
| `justify-end`     | `justify-end`     |
| `justify-center`  | `justify-center`  |
| `justify-between` | `justify-between` |
| `justify-around`  | `justify-around`  |
| `justify-evenly`  | `justify-evenly`  |

### Align Self

| JTB Class      | Tailwind Class |
| -------------- | -------------- |
| `self-auto`    | `self-auto`    |
| `self-start`   | `self-start`   |
| `self-end`     | `self-end`     |
| `self-center`  | `self-center`  |
| `self-stretch` | `self-stretch` |

### Composite Flex Classes

| JTB Class       | Tailwind Class                     | CSS Properties                                              |
| --------------- | ---------------------------------- | ----------------------------------------------------------- |
| `flex-centered` | `flex items-center justify-center` | display: flex; align-items: center; justify-content: center |
| `flex-vac`      | `flex items-center`                | display: flex; align-items: center                          |
| `flex-hac`      | `flex justify-content-center`      | display: flex; justify-content: center                      |

---

## Grid

### Grid Display

| JTB Class | Tailwind Class |
| --------- | -------------- |
| `grid`    | `grid`         |

### Grid Columns

| JTB Class | Tailwind Class |
| --------- | -------------- |
| `cols-1`  | `grid-cols-1`  |
| `cols-2`  | `grid-cols-2`  |
| `cols-3`  | `grid-cols-3`  |
| `cols-4`  | `grid-cols-4`  |
| `cols-5`  | `grid-cols-5`  |
| `cols-6`  | `grid-cols-6`  |
| `cols-7`  | `grid-cols-7`  |
| `cols-8`  | `grid-cols-8`  |
| `cols-9`  | `grid-cols-9`  |
| `cols-10` | `grid-cols-10` |
| `cols-11` | `grid-cols-11` |
| `cols-12` | `grid-cols-12` |

### Column Span

| JTB Class     | Tailwind Class |
| ------------- | -------------- |
| `col-span-1`  | `col-span-1`   |
| `col-span-2`  | `col-span-2`   |
| ...           | ...            |
| `col-span-12` | `col-span-12`  |

### Grid Gap

| JTB Class | Tailwind Class |
| --------- | -------------- |
| `gap-*`   | `gap-*`        |

---

## Background

### Background Color

| JTB Class | Tailwind Class | Notes                          |
| --------- | -------------- | ------------------------------ |
| `bg-*`    | `bg-*`         | Same pattern with color values |

### Background Stripes

| JTB Class           | Tailwind Class               | Notes                           |
| ------------------- | ---------------------------- | ------------------------------- |
| `bg-stripes-*`      | Custom implementation needed | Striped background pattern      |
| `bg-stripes-wide-*` | Custom implementation needed | Wide striped background pattern |

---

## Sizing

### Width

| JTB Class  | Tailwind Class |
| ---------- | -------------- |
| `w-*`      | `w-*`          |
| `w-auto`   | `w-auto`       |
| `w-full`   | `w-full`       |
| `w-screen` | `w-screen`     |
| `w-min`    | `w-min`        |
| `w-max`    | `w-max`        |
| `w-fit`    | `w-fit`        |

### Height

| JTB Class  | Tailwind Class |
| ---------- | -------------- |
| `h-*`      | `h-*`          |
| `h-auto`   | `h-auto`       |
| `h-full`   | `h-full`       |
| `h-screen` | `h-screen`     |
| `h-min`    | `h-min`        |
| `h-max`    | `h-max`        |
| `h-fit`    | `h-fit`        |

### Min Width/Height

| JTB Class  | Tailwind Class                  |
| ---------- | ------------------------------- |
| `min-w-*`  | `min-w-*`                       |
| `min-h-*`  | `min-h-*`                       |
| `min-wh-*` | Custom (min-width + min-height) |

### Max Width/Height

| JTB Class | Tailwind Class          |
| --------- | ----------------------- |
| `max-w-*` | `max-w-*`               |
| `max-h-*` | `max-h-*`               |
| `wh-*`    | Custom (width + height) |

---

## Border

### Border Width

| JTB Class                     | Tailwind Class                                            |
| ----------------------------- | --------------------------------------------------------- |
| `border`                      | `border`                                                  |
| `border-0` through `border-5` | `border-0` through `border` (Tailwind uses 1-2-4-8 scale) |
| `border-8`                    | `border-8`                                                |
| `border-12`                   | Custom                                                    |
| `border-16`                   | `border-4`                                                |

### Border Color

| JTB Class  | Tailwind Class | Notes                          |
| ---------- | -------------- | ------------------------------ |
| `border-*` | `border-*`     | Same pattern with color values |

### Border Style

| JTB Class       | Tailwind Class  |
| --------------- | --------------- |
| `border-solid`  | `border-solid`  |
| `border-dashed` | `border-dashed` |
| `border-dotted` | `border-dotted` |
| `border-double` | `border-double` |
| `border-hidden` | `border-hidden` |
| `border-none`   | `border-none`   |

### Border Radius

| JTB Class      | Tailwind Class          |
| -------------- | ----------------------- |
| `rounded-none` | `rounded-none`          |
| `rounded-xs`   | `rounded-sm`            |
| `rounded-sm`   | `rounded`               |
| `rounded-base` | Similar to `rounded-md` |
| `rounded-lg`   | `rounded-lg`            |
| `rounded-xl`   | `rounded-xl`            |
| `rounded-full` | `rounded-full`          |

---

## Effects

### Box Shadow

| JTB Class      | Tailwind Class |
| -------------- | -------------- |
| `shadow-none`  | `shadow-none`  |
| `shadow-xs`    | `shadow-xs`    |
| `shadow-sm`    | `shadow-sm`    |
| `shadow-md`    | `shadow-md`    |
| `shadow-lg`    | `shadow-lg`    |
| `shadow-xl`    | `shadow-xl`    |
| `shadow-xxl`   | `shadow-2xl`   |
| `shadow-inner` | `shadow-inner` |

### Opacity

| JTB Class           | Tailwind Class |
| ------------------- | -------------- |
| `opacity-0`         | `opacity-0`    |
| `opacity-10`        | `opacity-10`   |
| `opacity-20`        | `opacity-20`   |
| ...                 | ...            |
| `opacity-100`       | `opacity-100`  |
| `opacity-invisible` | `opacity-0`    |
| `opacity-semi`      | `opacity-50`   |
| `opacity-visible`   | `opacity-100`  |

---

## Layout

### Display

| JTB Class      | Tailwind Class |
| -------------- | -------------- |
| `hidden`       | `hidden`       |
| `block`        | `block`        |
| `flex`         | `flex`         |
| `inline-flex`  | `inline-flex`  |
| `inline-block` | `inline-block` |
| `inline`       | `inline`       |
| `grid`         | `grid`         |
| `table`        | `table`        |
| `table-cell`   | `table-cell`   |

### Visibility

| JTB Class   | Tailwind Class |
| ----------- | -------------- |
| `visible`   | `visible`      |
| `invisible` | `invisible`    |
| `collapse`  | `collapse`     |

### Overflow

| JTB Class          | Tailwind Class     |
| ------------------ | ------------------ |
| `overflow-auto`    | `overflow-auto`    |
| `overflow-hidden`  | `overflow-hidden`  |
| `overflow-visible` | `overflow-visible` |
| `overflow-scroll`  | `overflow-scroll`  |
| `overflow-x-auto`  | `overflow-x-auto`  |
| `overflow-y-auto`  | `overflow-y-auto`  |

### Position

| JTB Class  | Tailwind Class |
| ---------- | -------------- |
| `static`   | `static`       |
| `absolute` | `absolute`     |
| `relative` | `relative`     |
| `fixed`    | `fixed`        |
| `sticky`   | `sticky`       |

### Z-Index

| JTB Class  | Tailwind Class |
| ---------- | -------------- |
| `z-0`      | `z-0`          |
| `z-1`      | `z-10`         |
| `z-50`     | `z-50`         |
| `z-bottom` | Custom         |
| `z-top`    | Custom         |

### Inset Positioning

| JTB Class    | Tailwind Class |
| ------------ | -------------- |
| `inset-0`    | `inset-0`      |
| `inset-auto` | `inset-auto`   |
| `inset-full` | `inset-full`   |
| `top-*`      | `top-*`        |
| `bottom-*`   | `bottom-*`     |
| `left-*`     | `left-*`       |
| `right-*`    | `right-*`      |

---

## Transitions

### Transition Properties

| JTB Class              | Tailwind Class         |
| ---------------------- | ---------------------- |
| `transition`           | `transition`           |
| `transition-all`       | `transition-all`       |
| `transition-colors`    | `transition-colors`    |
| `transition-opacity`   | `transition-opacity`   |
| `transition-shadow`    | `transition-shadow`    |
| `transition-transform` | `transition-transform` |
| `transition-none`      | `transition-none`      |

---

## Transforms

### Transform Properties

| JTB Class       | Tailwind Class  |
| --------------- | --------------- |
| `transform`     | `transform`     |
| `transform-gpu` | `transform-gpu` |

---

## Responsive Prefixes

JTB and Tailwind both use similar responsive prefixes:

| Prefix | Breakpoint |
| ------ | ---------- |
| `sm:`  | ~576px     |
| `md:`  | ~768px     |
| `lg:`  | ~992px     |
| `xl:`  | ~1200px    |
| `xxl:` | ~1600px    |

Example:

- JTB: `md:flex-row`
- Tailwind: `md:flex-row`

---

## Hover/Focus States

Both frameworks use similar state prefixes:

| State | JTB       | Tailwind  |
| ----- | --------- | --------- |
| Hover | `hover:*` | `hover:*` |
| Focus | `focus:*` | `focus:*` |

Example:

- JTB: `hover:bg-blue-500`
- Tailwind: `hover:bg-blue-500`

---

## Color Reference

JTB and Tailwind share the same color palette names:

| Color        | Example                                                                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary      | JTB: `primary`, Tailwind: Custom config                                                                                                                                                             |
| Secondary    | JTB: `secondary`, Tailwind: Custom config                                                                                                                                                           |
| Accent       | JTB: `accent`, Tailwind: Custom config                                                                                                                                                              |
| Theme colors | `danger`, `info`, `success`, `warning`, `muted`, `light`, `dark`, `white`                                                                                                                           |
| Base colors  | `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone` |
| Shades       | 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950                                                                                                                                                |

Example:

- JTB: `bg-blue-500`, `text-red-600`
- Tailwind: `bg-blue-500`, `text-red-600`

---

## Quick Reference: Common Conversions

| JTB              | Tailwind         | Description            |
| ---------------- | ---------------- | ---------------------- |
| `tac`            | `text-center`    | Center text            |
| `tl`             | `text-left`      | Left align text        |
| `tr`             | `text-right`     | Right align text       |
| `tj`             | `text-justify`   | Justify text           |
| `txt-sm`         | `text-sm`        | Small text             |
| `txt-lg`         | `text-lg`        | Large text             |
| `flex-col`       | `flex-col`       | Flex column            |
| `flex-row`       | `flex-row`       | Flex row               |
| `items-center`   | `items-center`   | Center items (flex)    |
| `justify-center` | `justify-center` | Center content (flex)  |
| `p-4`            | `p-4`            | Padding 1rem           |
| `m-4`            | `m-4`            | Margin 1rem            |
| `bg-white`       | `bg-white`       | White background       |
| `text-black`     | `text-black`     | Black text             |
| `rounded-lg`     | `rounded-lg`     | Large border radius    |
| `shadow-md`      | `shadow-md`      | Medium shadow          |
| `w-full`         | `w-full`         | Full width             |
| `h-screen`       | `h-screen`       | Full viewport height   |
| `hidden`         | `hidden`         | Hidden (display: none) |
| `static`         | `static`         | Static position        |
| `absolute`       | `absolute`       | Absolute position      |
| `fixed`          | `fixed`          | Fixed position         |
| `relative`       | `relative`       | Relative position      |
| `sticky`         | `sticky`         | Sticky position        |
| `border`         | `border`         | Default border         |
| `border-none`    | `border-none`    | No border              |
