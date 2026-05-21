# Auto Spacing

<p class="lead">Automatic vertical spacing between block elements without
requiring margin utilities on every element.</p>

- **Flex/Grid Safe** - Automatically opts out when using gap-based layouts
- **Low Specificity** - Uses `:where()` for easy overrides

## Examples

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

### Flex and Grid

Elements inside flex or grid containers have margins reset—these layouts use `gap` instead.

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

## How It Works

Spacing is applied by element relationship, not position. Two categories determine behaviour:

**Spacing targets** — `p`, headings, `ul`, `table`, `form`, `blockquote`, `pre` — add
`margin-block-start` to whatever follows them.

**Layout wrappers** — `div`, `section`, `article` — only add spacing when followed by
content, not other wrappers. This prevents `div + div` from being spaced while
still catching `div + p`.

Elements inside flex or grid containers are exempt — margins reset to zero and
`gap` handles spacing instead.
