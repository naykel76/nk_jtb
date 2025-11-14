# Border and Outline Utilities

Border utilities are used to add or remove borders from elements.

- [Border Width](#border-width)
- [Border Color](#border-color)
- [Style](#style)
- [Outline Style (REVIEW)](#outline-style-review)
- [Border Positions](#border-positions)

## Border Width

To add a border, simply add the `bdr` class to any element. You can adjust the
width using `bdr-2` or `bdr-3` classes. The border color automatically inherits
the text color.

**How it works:**
1. **Base style** sets `border: 0 solid` (invisible but ready)
2. **Width utilities** change `border-width` from 0, making the border visible
3. **Color inheritance** happens automatically via `currentcolor` - the default
   behavior of CSS `border-color`
4. **No explicit color/style needed** - they're already configured in the base
   style

<div class="grid lg:cols-3 tac c-pxy-1">
    <div class="bdr">
        <code>bdr</code><br> Default border
    </div>
    <div class="bdr-2">
        <code>bdr-2</code><br> 2px border
    </div>
    <div class="bdr-3">
        <code>bdr-3</code><br> 3px border
    </div>
</div>

## Border Color

The border color automatically inherits the text color of the element. You can
change the color by applying any text color utility class to the same element.

<div class="grid lg:cols-3 tac c-pxy-1">
    <div class="bdr txt-red">
        <code>bdr</code><br> Border color matches red text
    </div>
    <div class="bdr-2 txt-green">
        <code>bdr-2 txt-green</code><br> Border color matches green text
    </div>
    <div class="bdr-3 txt-blue">
        <code>bdr-3 txt-blue</code><br> Border color matches blue text
    </div>
</div>

you can override the border color by applying a border-color utility class.

<div class="grid lg:cols-3 tac c-pxy-1">
    <div class="bdr txt-red bdr-pink">
        <code>bdr bdr-pink</code><br>  Pink border overrides red text
    </div>
    <div class="bdr-2 txt-green bdr-pink">
        <code>bdr-2 bdr-pink</code><br> Pink border overrides green text
    </div>
    <div class="bdr-3 txt-blue bdr-pink">
        <code>bdr-3 bdr-pink</code><br> Pink border overrides blue text
    </div>
</div>

## Style

You can change the border style using the following classes:

<div class="grid lg:cols-2 tac c-pxy-1">
    <div class="bdr-3 bdr-solid">
        <code class="txt-red">bdr-solid</code>
    </div>
    <div class="bdr-3 bdr-dashed">
        <code class="txt-red">bdr-dashed</code>
    </div>
    <div class="bdr-3 bdr-dotted">
        <code class="txt-red">bdr-dotted</code>
    </div>
    <div class="bdr-3 bdr-double">
        <code class="txt-red">bdr-double</code>
    </div>
</div>

## Outline Style (REVIEW)

Works the same way as border styles, but for outlines. Add the `outline` class
to any element to add an outline. You can adjust the width using `outline-2` or
`outline-3` classes. The outline color automatically inherits the text color.

<div class="grid md:cols-2 gap tac bx pxy-3">
    <div class="bx bdr-5 bdr-blue outline-5 outline-pink outline-solid">
        <code class="txt-red">outline-solid</code>
    </div>
    <div class="bx bdr-5 bdr-blue outline-5 outline-pink outline-dashed">
        <code class="txt-red">outline-dashed</code>
    </div>
    <div class="bx bdr-5 bdr-blue outline-5 outline-pink outline-dotted">
        <code class="txt-red">outline-dotted</code>
    </div>
    <div class="bx bdr-5 bdr-blue outline-5 outline-pink outline-double">
        <code class="txt-red">outline-double</code>
    </div>
</div>





## Border Positions








<!-- ## FAQ's

can apply class but its probably easier to use a theme class instead???
What happens if i use a `bx` or other component class?

<div class="grid md:cols-2 gap tac bx pxy-3">
    <div class="bx bdr-5">
        <code class="txt-red">bdr-double</code>
        hey there
    </div>
    <div class="bx success bdr-5">
        <code class="txt-red">bdr-double</code>
        hey there
    </div>
</div> -->


<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!-- 





## Techniques

### Clip Border Radius

Apply the `overflow-hidden` class to clip the border radius of an element. This is useful when you
want to add a border radius to an element that contains an image.

<div class="grid cols-4">
    <div class="rounded-2 bdr-5 bdr-red">
        <img src="/images/naykel-400.png">
    </div>
    <div class="rounded-2 bdr-5 bdr-red overflow-hidden">
        <img src="/images/naykel-400.png">
    </div>
</div>

```html
<div class="rounded-2 overflow-hidden">
    <img src="">
</div>
``` -->