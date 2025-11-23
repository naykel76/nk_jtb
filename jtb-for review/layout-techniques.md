# Layout Tips and Techniques

- [Responsive Column Layouts](#responsive-column-layouts)
    - [Example: Stacks on small screens, columns appear side by side from medium screens](#example-stacks-on-small-screens-columns-appear-side-by-side-from-medium-screens)
    - [Example: Stacks on medium screens, columns appear side by side from large screens](#example-stacks-on-medium-screens-columns-appear-side-by-side-from-large-screens)


## Responsive Column Layouts

Using `flexbox`, stacked layouts provide a flexible way to structure responsive designs.
By adjusting the layout at different screen sizes, elements can be stacked vertically or
arranged side by side based on the available space.

#### How It Works <!-- omit in toc -->

- Apply `flex-col` to the parent element to stack columns vertically by default.
- Use responsive classes like `md:flex-row` or `lg:flex-row` to switch to a horizontal
  layout at specific breakpoints.
- Use responsive gap classes like `md:gap-1` or `lg:gap-3` on the parent for consistent
  spacing between columns.
- Add `fg1` to each column for even space distribution. This ensures columns grow to fill
  the available space, but does not guarantee equal column widths. To force equal column
  widths, use width classes like `w-1/3` or `w-1/4` based on the number of columns. You
  can also apply specific `w-` classes to adjust column widths as needed.
- To force equal column widths, use `flex-1` on each column. This will make all columns
  take up equal space within the container, ensuring they have the same width regardless
  of content.

### Example: Stacks on small screens, columns appear side by side from medium screens

<div class="flex-col md:flex-row gap bg-stripes-pink pxy-1">
    <div class="fg1 bx pink"></div>
    <div class="fg1 bx pink"></div>
    <div class="fg1 bx pink"></div>
</div>

```html
<div class="flex-col md:flex-row gap">
    <div class="fg1"></div>
    <div class="fg1"></div>
    <div class="fg1"></div>
</div>
```

In this example, the `fg1` class ensures equal space distribution between columns. You can
also adjust column widths using `w-` classes.

### Example: Stacks on medium screens, columns appear side by side from large screens

<div class="flex-col lg:flex-row gap bg-stripes-blue pxy-1">
    <div class="lg:w-16 bx blue"></div>
    <div class="fg1 bx blue"></div>
</div>

```html
<div class="flex-col lg:flex-row gap">
    <div class="lg:w-16"></div>
    <div class="fg1"></div>
</div>
```

In this example, `lg:w-16` sets the first column’s width to `16rem` on large screens. The
second column is flexible and adjusts based on available space, thanks to the `fg1` class.

```html +parse
<x-gt-alert type="info">
    Ensure responsive classes are applied to both the parent (row) and the children (columns)
    for proper layout adjustment.
</x-gt-alert>
```

<!-- this is not entire accurate, fg1 will grow to the content. it does not guarantee the columns will be equal -->
<!-- 

# Responsive Layout Examples (Medium and Large Devices)

## Two Equal Columns → Single Column  
- **Large Screens:** Two columns of equal width.  
- **Medium Screens:** Stacks into a single column.  

## Sidebar with Main Content → Stacked Layout  
- **Large Screens:** Sidebar (25%) on the left, main content (75%) on the right.  
- **Medium Screens:** Sidebar moves above the main content in a single column.  

## Three-Column Layout → Two Columns + Stacked  
- **Large Screens:** Three equal columns.  
- **Medium Screens:** Two columns with the third stacked below.  

## Hero Section with Two-Column Content → Single Column  
- **Large Screens:** Hero section spans full width, followed by two equal columns.  
- **Medium Screens:** Hero remains full width, content stacks into a single column.  

## Grid-Based Card Layout → Fewer Columns  
- **Large Screens:** Grid with four cards per row.  
- **Medium Screens:** Grid with two cards per row.  

## Centered Content with Sidebar → Full Width Content  
- **Large Screens:** Centered main content with a sidebar.  
- **Medium Screens:** Sidebar disappears or moves below the content.  

## Header with Multi-Column Navigation → Collapsed Menu  
- **Large Screens:** Full horizontal navigation bar.  
- **Medium Screens:** Navigation converts to a dropdown or hamburger menu.  

## Masonry Grid → Single Column Stack  
- **Large Screens:** Staggered grid layout (e.g., Pinterest-style).  
- **Medium Screens:** Converts to a single-column layout.  

## Image with Text Overlay → Text Below Image  
- **Large Screens:** Large image with text overlay.  
- **Medium Screens:** Image remains full width, text moves below.  

## Split Hero Section → Stacked Sections  
- **Large Screens:** Left side image, right side text.  
- **Medium Screens:** Image moves above the text in a single column.   -->
