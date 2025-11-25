<div class="toc" data-toc>

- [How It Works](#how-it-works)
- [The Rules](#the-rules)
    - [Rule 1: Spacing Targets](#rule-1-spacing-targets)
    - [Rule 2: Layout to Content](#rule-2-layout-to-content)
- [Visual Tests](#visual-tests)
    - [Should Space](#should-space)
    - [Should NOT Space](#should-not-space)
- [Flex and Grid](#flex-and-grid)

</div>

# Auto Spacing System

<p class="lead">Automatic vertical spacing between block elements without
requiring margin utilities on every element. Content flows naturally with
consistent gaps.</p>

- **Relationship-Based** - Spacing determined by what elements follow each other
- **Semantic-Aware** - Distinguishes between content and layout wrappers
- **Flex/Grid Safe** - Automatically opts out when using gap-based layouts
- **Low Specificity** - Uses `:where()` for easy overrides

## How It Works

Two rules apply `margin-top: $base-gap` based on element relationships. Spacing
targets (`p`, `h1-h6`, `table`, `ul`, etc.) add spacing when followed by other
elements. Layout wrappers (`div`, `section`, `article`) only add spacing when
followed by content—not other wrappers.

## The Rules

### Rule 1: Spacing Targets

Content elements followed by any block element.

```scss +code
:where(#{$spacing-targets}, #{$common-classes}) + :where(*:not(#{$inline-exclusions})) {
    margin-block-start: $base-gap;
}
```

### Rule 2: Layout to Content

Layout wrappers followed by content elements. This prevents `div + div` spacing
while catching `div + p`.

```scss +code
:where(div, section, article) + :where(#{$spacing-targets}) {
    margin-block-start: $base-gap;
}
```

## Visual Tests

### Should Space

<div class="bx bg-stripes-pink">
    <h2 class="pxy-075 warning-light rounded-05">Heading 2</h2>
    <p class="pxy-075 warning-light rounded-05">Paragraph</p>
    <div class="pxy-075 warning-light rounded-05">Div</div>
    <h3 class="pxy-075 warning-light rounded-05">Heading 3</h3>
    <ul class="pxy-075 warning-light rounded-05 ml-0"><li>List</li></ul>
    <table class="pxy-075 warning-light rounded-05"><tr><td>Table</td></tr></table>
    <form class="pxy-075 warning-light rounded-05">Form</form>
    <blockquote class="pxy-075 warning-light rounded-05">Blockquote</blockquote>
    <pre class="pxy-075 warning-light rounded-05">Pre</pre>
</div>

### Should NOT Space

<div class="bx bg-stripes-blue">
    <div class="pxy-075 info-light rounded-05">Div</div>
    <div class="pxy-075 info-light rounded-05">Div</div>
    <section class="pxy-075 info-light rounded-05">Section</section>
    <article class="pxy-075 info-light rounded-05">Article</article>
    <main class="pxy-075 info-light rounded-05">Main</main>
    <footer class="pxy-075 info-light rounded-05">Footer</footer>
</div>

## Flex and Grid

Elements inside flex or grid containers have margins reset—these layouts use `gap` instead.

```scss +code
:where([class*='flex'], [class*='grid']) > * {
    margin: 0;
}
```

<div class="grid cols-2 gap-1">
    <div>
        <p class="txt-sm">Flex (uses gap)</p>
        <div class="flex gap-1 bg-stripes-pink pxy-1">
            <div class="pxy-075 warning-light rounded-05">Item</div>
            <div class="pxy-075 warning-light rounded-05">Item</div>
            <div class="pxy-075 warning-light rounded-05">Item</div>
        </div>
    </div>
    <div>
        <p class="txt-sm">Grid (uses gap)</p>
        <div class="grid cols-2 gap-1 bg-stripes-pink pxy-1">
            <div class="pxy-075 warning-light rounded-05">Item</div>
            <div class="pxy-075 warning-light rounded-05">Item</div>
            <div class="pxy-075 warning-light rounded-05">Item</div>
            <div class="pxy-075 warning-light rounded-05">Item</div>
        </div>
    </div>
</div>