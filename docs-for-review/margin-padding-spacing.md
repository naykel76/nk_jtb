# Margin and Padding

<p class="lead">Collection of margin, padding and other utilities for controlling element spacing.</p>

- [Add margin or padding to all sides](#add-margin-or-padding-to-all-sides)
- [Add vertical or horizontal margin or padding](#add-vertical-or-horizontal-margin-or-padding)
- [Add to a single side](#add-to-a-single-side)
- [Spacing Sizes (TBD)](#spacing-sizes-tbd)
- [Negative Values (TBD)](#negative-values-tbd)
- [Dividers and Space (TBD)](#dividers-and-space-tbd)

## Add margin or padding to all sides

<!-- NK?? Consider changing to just `m` and just `y` a good reason to keep is it will
be easier to search and replace, i think! -->

Use `mxy-<number>` and `pxy-<number>` utilities to control the margin on all sides of an element:

<!-- only uses logical properties but think about allowing the choice to use t,b,t,r or start or end -->
<!-- border is not working correctly -->
<!-- colors are shit but i will come back to them-->
<div class="flex gap justify-between items-start font-mono lh-1">
    <div class="bg-stripes-blue bdr-blue">
        <div class="pink mxy pxy-025">mxy</div>
    </div>
    <div class="bg-stripes-blue bdr-blue">
        <div class="pink mxy-2 pxy-025">mxy-2</div>
    </div>
    <div class="bg-stripes-blue bdr-blue pxy-025">
        <div class="pink pxy">pxy</div>
    </div>
    <div class="bg-stripes-blue bdr-blue pxy-05">
        <div class="pink pxy-2">pxy-2</div>
    </div>
</div>

## Add vertical or horizontal margin or padding

<!-- Use px-<number> utilities like px-4 and px-8 to control the horizontal padding of an element: -->

<div class="flex gap justify-between items-start font-mono lh-1 tac">
    <div class="bg-stripes-blue bdr-blue">
        <div class="w-4 pink mx-2 pxy-025">mx-2</div>
    </div>
    <div class="bg-stripes-blue bdr-blue">
        <div class="w-4 pink my-2 pxy-025">my-2</div>
    </div>
    <div class="pink pxy-025 px-2">px-2</div>
    <div class="pink pxy-025 py-2">py-2</div>
</div>

## Add to a single side

<!-- Use pt-<number>, pr-<number>, pb-<number>, and pl-<number> utilities like pt-6
and pr-4 to control the padding on one side of an element: -->


<div class="flex gap justify-between items-start font-mono lh-1 tac">
    <div class="bg-stripes-blue bdr-blue">
        <div class="w-4 pink mt-3 pxy-025">mt-3</div>
    </div>
    <div class="bg-stripes-blue bdr-blue">
        <div class="w-4 pink mr-3 pxy-025">mr-3</div>
    </div>
    <div class="bg-stripes-blue bdr-blue">
        <div class="w-4 pink mb-3 pxy-025">mb-3</div>
    </div>
    <div class="bg-stripes-blue bdr-blue">
        <div class="w-4 pink ml-3 pxy-025">ml-3</div>
    </div>
</div>

Now let's look at padding examples:

<div class="flex gap justify-between items-start font-mono lh-1 tac">
    <div class="pink pxy-025 pt-3">pt-3</div>
    <div class="pink pxy-025 pr-3">pr-3</div>
    <div class="pink pxy-025 pl-3">pb-3</div>
    <div class="pink pxy-025 pb-3">pl-3</div>
</div>

## Spacing Sizes (TBD)

## Negative Values (TBD)

## Dividers and Space (TBD)