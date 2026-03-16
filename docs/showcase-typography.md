# JTB Typography Showcase

Issues encountered while building `typography-showcase.html`:

- `font-weight-prefix` exists in `src/maps_and_variables/_config.scss`, but typography weight utilities still emit `font-*` classes rather than a configurable prefix like `fw-*`.
- Typography sizing is split between numeric utilities like `txt-1`, `txt-3.75` and composite utilities like `txt-sm`, `txt-xl`, and `lead`. That makes the API harder to scan and document.
- Text transform utilities are unprefixed (`uppercase`, `lowercase`, `capitalize`, `normal-case`) while most typography utilities use a typography prefix such as `txt-` or `tracking-`.
- Vite was only configured to emit the default `index.html` entry, so the new showcase page needed an explicit multi-page build input before it would appear in `dist/`.

## Headings and Basic Text

<!-- space y -not working?? -->
<div class="bx space-y-1">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</div>

## Text Variants

<div class="bx">
    <div class="space-y-05">
        <p class="txt-xs"><code>txt-xs</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</p>
        <hr>
        <p class="txt-sm"><code>txt-sm</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</p>
        <hr>
        <p class="txt-base"><code>txt-base</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</p>
        <hr>
        <p class="txt-lg"><code>txt-lg</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</p>
        <hr>
        <p class="txt-xl"><code>txt-xl</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</p>
        <hr>
        <p class="lead"><code>lead</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</p>
        <hr>
        <small><code>small</code>: Once a jolly swagman camped by a billabong, under the shade of a coolibah tree, and he sang as he watched and waited till his billy boiled, you'll come a-waltzing Matilda with me.</small>
    </div>
</div>

## Text Colors

<div class="bx space-y-05 flex">
    <div id="base-color-showcase"></div>
</div>

## Font Families

<div class="bx space-y-05">
    <p class="font-sans">font-sans: The quick brown fox jumps over the lazy dog.</p>
    <p class="font-serif">font-serif: The quick brown fox jumps over the lazy dog.</p>
    <p class="font-mono">font-mono: The quick brown fox jumps over the lazy dog.</p>
</div>

## Font Size (Variants)

<div class="bx space-y-05">
    <p class="txt-xs">txt-xs - The quick brown fox jumps over the lazy dog</p>
    <p class="txt-sm">txt-sm - The quick brown fox jumps over the lazy dog</p>
    <p class="txt-base">txt-base - The quick brown fox jumps over the lazy dog</p>
    <p class="txt-lg">txt-lg - The quick brown fox jumps over the lazy dog</p>
    <p class="txt-xl">txt-xl - The quick brown fox jumps over the lazy dog</p>
    <p class="txt-xxl">txt-xxl - The quick brown fox jumps over the lazy dog</p>
    <p class="lead">lead - The quick brown fox jumps over the lazy dog</p>
</div>

## Font Style

<div class="bx space-y-05">
    <p class="txt-normal">txt-normal - The quick brown fox jumps over the lazy dog</p>
    <p class="txt-italic">txt-italic - The quick brown fox jumps over the lazy dog</p>  
</div>

## Font Weight (variants)

<div class="bx space-y-05">
    <p class="font-thin">font-thin</p>
    <p class="font-extralight">font-extralight</p>
    <p class="font-light">font-light</p>
    <p class="font-normal">font-normal</p>
    <p class="font-medium">font-medium</p>
    <p class="font-semibold">font-semibold</p>
    <p class="font-bold">font-bold</p>
    <p class="font-extrabold">font-extrabold</p>
    <p class="font-black">font-black</p>
</div>

## Line Height

<div class="bx">
    <div class="space-y-05">
        <p class="lh-none"><code>lh-none</code>: It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.</p>
        <hr>
        <p class="lh-tight"><code>lh-tight</code>: It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.</p>
        <hr>
        <p class="lh-normal"><code>lh-normal</code>: It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.</p>
        <hr>
        <p class="lh-relaxed"><code>lh-relaxed</code>: It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.</p>
        <hr>
        <p class="lh-loose"><code>lh-loose</code>: It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.</p>
    </div>
</div>

## Letter Spacing

<div class="bx space-y-05 uppercase">
    <p class="tracking-tighter">tracking-tighter</p>
    <p class="tracking-tight">tracking-tight</p>
    <p class="tracking-normal">tracking-normal</p>
    <p class="tracking-wide">tracking-wide</p>
    <p class="tracking-wider">tracking-wider</p>
    <p class="tracking-widest">tracking-widest</p>
</div>

## Alignment and Text Formatting

<div class="bx space-y-05">
    <h3 class="txt-lg font-semibold mt-2">Text Align</h3>
    <div class="mt-2">
        <p class="tal">tal: left aligned sample text.</p>
        <p class="tar">tar: right aligned sample text.</p>
        <p class="tac">tac: centered sample text.</p>
        <p class="taj">taj: justified sample text stretched across the measure so the spacing behaviour can be inspected directly in the browser.</p>
    </div>
    <h3 class="txt-lg font-semibold mt-3">Text Transform</h3>
    <div class="mt-2">
        <p class="uppercase">uppercase utility</p>
        <p class="lowercase">LOWERCASE UTILITY</p>
        <p class="capitalize">capitalize utility sample</p>
        <p class="normal-case">normal-case utility sample</p>
    </div>
    <h3 class="txt-lg font-semibold mt-3">Text Wrap</h3>
    <div class="mt-2">
        <p class="txt-wrap">txt-wrap: Typography wrap behaviour is applied with the framework utility.</p>
        <p class="txt-balance">txt-balance: Typography wrap behaviour is applied with the framework utility.</p>
        <p class="txt-nowrap">txt-nowrap: Typography wrap behaviour is applied with the framework utility.</p>
        <p class="txt-pretty">txt-pretty: Typography wrap behaviour is applied with the framework utility.</p>
    </div>
    <h3 class="txt-lg font-semibold mt-3">Text Decoration</h3>
    <div class="mt-2">
        <p class="txt-underline">txt-underline</p>
        <p class="txt-overline">txt-overline</p>
        <p class="txt-strike">txt-strike</p>
        <p class="txt-underline-overline">txt-underline-overline</p>
    </div>
    <h3 class="txt-lg font-semibold mt-3">Whitespace</h3>
    <div class="mt-2">
        <pre class="whitespace-normal">whitespace-normal: one two three four five six seven</pre>
        <pre class="whitespace-nowrap">whitespace-nowrap: one two three four five six seven</pre>
        <pre class="whitespace-pre">whitespace-pre:
line one
line two</pre>
        <pre class="whitespace-pre-line">whitespace-pre-line:
line one
line two</pre>
        <pre class="whitespace-pre-wrap">whitespace-pre-wrap:
line one
line two with more content to force wrapping.</pre>
    </div>
</div>

## List Styles

<div class="bx space-y-05">
    <div class="mt-2">
        <ul class="list-none">
            <li>list-none</li>
            <li>Second item</li>
        </ul>
        <ul class="list-disc">
            <li>list-disc</li>
            <li>Second item</li>
        </ul>
        <ul class="list-circle">
            <li>list-circle</li>
            <li>Second item</li>
        </ul>
        <ul class="list-square">
            <li>list-square</li>
            <li>Second item</li>
        </ul>
        <ol class="list-decimal">
            <li>list-decimal</li>
            <li>Second item</li>
        </ol>
    </div>

<script>
const baseColorClasses = [
    'txt-primary', 'txt-secondary', 'txt-accent', 'txt-muted',
    'txt-red', 'txt-orange', 'txt-amber', 'txt-yellow', 'txt-lime',
    'txt-green', 'txt-emerald', 'txt-teal', 'txt-cyan', 'txt-sky',
    'txt-blue', 'txt-indigo', 'txt-violet', 'txt-purple', 'txt-fuchsia',
    'txt-pink', 'txt-rose', 'txt-slate', 'txt-gray', 'txt-zinc',
    'txt-neutral', 'txt-stone'
];

const baseColorShowcase = document.getElementById('base-color-showcase');

function makeGroup(title, classes) {
    const section = document.createElement('section');
    section.className = 'grid cols-6';

    // const heading = document.createElement('h3');
    // heading.className = 'txt-lg font-semibold';
    // heading.textContent = title;
    // section.appendChild(heading);

    classes.forEach((className) => {
        const item = document.createElement('p');
        item.className = `${className} font-medium`;
        item.textContent = className;
        section.appendChild(item);
    });

    return section;
}

baseColorShowcase.appendChild(makeGroup('Base and Semantic Colors', baseColorClasses));

// const scaleHues = [
//     'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald',
//     'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple',
//     'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral',
//     'stone'
// ];

// const scaleSteps = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

// scaleHues.forEach((hue) => {
//     const classes = scaleSteps.map((step) => `txt-${hue}-${step}`);
//     baseColorShowcase.appendChild(makeGroup(`${hue} Scale`, classes));
// });
</script>
