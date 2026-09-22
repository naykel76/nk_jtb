# Typography Utilities

<p class="lead">Utilities for font size, weight, family, alignment, spacing, decoration, and text behaviour.</p>

## Composite Size Classes

Composite classes set both `font-size` and `line-height` together. Use these as
the primary way to set text size.

```html +demo-folded class="bx"
<p class="txt-xs">txt-xs — 0.75rem / lh 1.4</p>
<p class="txt-sm">txt-sm — 0.875rem / lh 1.4</p>
<p class="txt-base">txt-base — 1rem / lh 1.5</p>
<p class="txt-lg">txt-lg — 1.125rem / lh 1.5</p>
<p class="txt-xl">txt-xl — 1.25rem / lh 1.4</p>
<p class="txt-xxl">txt-xxl — 1.5rem / lh 1.3</p>
<p class="lead">lead — 1.125rem / lh 1.7</p>
```

| Class      | Font Size | Line Height |
| ---------- | --------- | ----------- |
| `txt-xs`   | 0.75rem   | 1.4         |
| `txt-sm`   | 0.875rem  | 1.4         |
| `txt-base` | 1rem      | 1.5         |
| `txt-lg`   | 1.125rem  | 1.5         |
| `txt-xl`   | 1.25rem   | 1.4         |
| `txt-xxl`  | 1.5rem    | 1.3         |
| `lead`     | 1.125rem  | 1.7         |

## Font Size

Numeric utilities set `font-size` only, without a paired line height. Use
composite classes above when both values matter.

```html +demo-folded class="bx"
<p class="txt-1">txt-1 — 1rem</p>
<p class="txt-1.5">txt-1.5 — 1.5rem</p>
<p class="txt-2">txt-2 — 2rem</p>
<p class="txt-2.25">txt-2.25 — 2.25rem</p>
<p class="txt-2.5">txt-2.5 — 2.5rem</p>
<p class="txt-3">txt-3 — 3rem</p>
<p class="txt-3.75">txt-3.75 — 3.75rem</p>
<p class="txt-4">txt-4 — 4rem</p>
```

## Font Weight

```html +demo-folded class="bx"
<p class="font-thin"><code>font-thin</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-extralight"><code>font-extralight</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-light"><code>font-light</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-normal"><code>font-normal</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-medium"><code>font-medium</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-semibold"><code>font-semibold</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-bold"><code>font-bold</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-extrabold"><code>font-extrabold</code> The quick brown fox jumps over the lazy dog</p>
<p class="font-black"><code>font-black</code> The quick brown fox jumps over the lazy dog</p>
```

## Font Family

```html +demo-folded class="bx"
<p class="font-sans">font-sans — system sans-serif stack</p>
<p class="font-serif">font-serif — system serif stack</p>
<p class="font-mono">font-mono — system monospace stack</p>
```

## Font Style

```html +demo-folded class="bx"
<p class="txt-italic">txt-italic</p>
<p class="txt-normal">txt-normal</p>
```

## Line Height

```html +demo-folded class="bx"
<p class="lh-none">lh-none (1) — It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.</p>
<p class="lh-tight">lh-tight (1.25) — It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.</p>
<p class="lh-normal">lh-normal — It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.</p>
<p class="lh-relaxed">lh-relaxed (1.75) — It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.</p>
<p class="lh-loose">lh-loose (2) — It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.</p>
```

| Class        | Value            |
| ------------ | ---------------- |
| `lh-none`    | 1                |
| `lh-tight`   | 1.25             |
| `lh-normal`  | base line-height |
| `lh-relaxed` | 1.75             |
| `lh-loose`   | 2                |

## Letter Spacing

```html +demo-folded class="bx"
<p class="tracking-tighter uppercase">tracking-tighter — -0.05em</p>
<p class="tracking-tight uppercase">tracking-tight — -0.025em</p>
<p class="tracking-normal uppercase">tracking-normal — 0</p>
<p class="tracking-wide uppercase">tracking-wide — 0.025em</p>
<p class="tracking-wider uppercase">tracking-wider — 0.05em</p>
<p class="tracking-widest uppercase">tracking-widest — 0.1em</p>
```

## Text Align

```html +demo-folded class="bx"
<p class="tal">tal — left aligned</p>
<p class="tar">tar — right aligned</p>
<p class="tac">tac — center aligned</p>
<p class="taj">taj — justified text stretched across the measure so the spacing behaviour is visible at a normal reading width.</p>
```

## Text Decoration

Supports `hover:` and `focus:` variants.

```html +demo-folded class="bx"
<p class="txt-underline">txt-underline</p>
<p class="txt-overline">txt-overline</p>
<p class="txt-strike">txt-strike</p>
<p class="txt-underline-overline">txt-underline-overline</p>
```

## Text Transform

Text transform utilities are unprefixed — they do not use the `txt-` prefix.

```html +demo-folded class="bx"
<p class="uppercase">uppercase</p>
<p class="lowercase">LOWERCASE</p>
<p class="capitalize">capitalize each word</p>
<p class="normal-case">NORMAL-CASE resets transform</p>
```

## Text Wrap

```html +demo-folded class="bx"
<p class="txt-wrap">txt-wrap</p>
<p class="txt-balance">txt-balance</p>
<p class="txt-nowrap">txt-nowrap</p>
<p class="txt-pretty">txt-pretty</p>
```

## White Space

```html +demo-folded class="bx"
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
line two with more content to force wrapping</pre>
```

## List Style

```html +demo-folded class="bx"
<ul class="list-none"><li>list-none</li><li>item two</li></ul>
<ul class="list-disc"><li>list-disc</li><li>item two</li></ul>
<ul class="list-circle"><li>list-circle</li><li>item two</li></ul>
<ul class="list-square"><li>list-square</li><li>item two</li></ul>
<ol class="list-decimal"><li>list-decimal</li><li>item two</li></ol>
```

## Text Color

Uses the `txt-` prefix with any color token. Supports `hover:` and `focus:` variants.

```html +demo-folded class="bx" preview-class="grid gap cols-4"
<p class="txt-primary font-medium">txt-primary</p>
<p class="txt-secondary font-medium">txt-secondary</p>
<p class="txt-accent font-medium">txt-accent</p>
<p class="txt-muted font-medium">txt-muted</p>
<p class="txt-red font-medium">txt-red</p>
<p class="txt-orange font-medium">txt-orange</p>
<p class="txt-amber font-medium">txt-amber</p>
<p class="txt-yellow font-medium">txt-yellow</p>
<p class="txt-lime font-medium">txt-lime</p>
<p class="txt-green font-medium">txt-green</p>
<p class="txt-teal font-medium">txt-teal</p>
<p class="txt-cyan font-medium">txt-cyan</p>
<p class="txt-blue font-medium">txt-blue</p>
<p class="txt-indigo font-medium">txt-indigo</p>
<p class="txt-violet font-medium">txt-violet</p>
<p class="txt-purple font-medium">txt-purple</p>
<p class="txt-pink font-medium">txt-pink</p>
<p class="txt-rose font-medium">txt-rose</p>
<p class="txt-slate font-medium">txt-slate</p>
<p class="txt-gray font-medium">txt-gray</p>
```
