# Color and Themes

## Consistent Theming Across Components

One of JTB's key features is unified theming. Components share the same theme
classes, creating visual consistency with minimal cognitive overhead.

<!-- I want to explain here that certain classes work across all components e.g.
primary, secondary, success, warning, sky, rose are all theme classes and they
work the same when applied to any component e.g. button, box, input etc

we no longer need special classes like btn-primary, box-primary, we split and
add `btn` and `primary` so they can be used together or separately -->



```html +code +preview class="grid cols-2"
<div class="bx primary">
    This is a primary themed box.
</div>
<div class="bx teal">
    This is a teal themed box.
</div>
```

```html +code +preview class="mt"
<button class="btn primary">Primary Button</button>
<button class="btn teal">Teal Button</button>
```

The same theme classes work across all components apply `.primary` to a button,
box, or badge and get consistent branding throughout your interface.



## Theme Colors

<div class="flex flex-wrap gap-025">
    <div class="primary w-6 h-4 flex-centered font-mono">primary</div>
    <div class="secondary w-6 h-4 flex-centered font-mono">secondary</div>
    <div class="accent w-6 h-4 flex-centered font-mono">accent</div>
    <div class="light w-6 h-4 flex-centered font-mono">light</div>
    <div class="dark w-6 h-4 flex-centered font-mono">dark</div>
    <div class="danger w-6 h-4 flex-centered font-mono">danger</div>
    <div class="info w-6 h-4 flex-centered font-mono">info</div>
    <div class="success w-6 h-4 flex-centered font-mono">success</div>
    <div class="warning w-6 h-4 flex-centered font-mono">warning</div>
    <div class="muted w-6 h-4 flex-centered font-mono">muted</div>
    <div class="white w-6 h-4 flex-centered font-mono">white</div>
</div>

## Base Colors

<div class="flex flex-wrap gap-025">
    <div class="red w-6 h-4 flex-centered font-mono">red</div>
    <div class="orange w-6 h-4 flex-centered font-mono">orange</div>
    <div class="amber w-6 h-4 flex-centered font-mono">amber</div>
    <div class="yellow w-6 h-4 flex-centered font-mono">yellow</div>
    <div class="lime w-6 h-4 flex-centered font-mono">lime</div>
    <div class="green w-6 h-4 flex-centered font-mono">green</div>
    <div class="emerald w-6 h-4 flex-centered font-mono">emerald</div>
    <div class="teal w-6 h-4 flex-centered font-mono">teal</div>
    <div class="cyan w-6 h-4 flex-centered font-mono">cyan</div>
    <div class="sky w-6 h-4 flex-centered font-mono">sky</div>
    <div class="blue w-6 h-4 flex-centered font-mono">blue</div>
    <div class="indigo w-6 h-4 flex-centered font-mono">indigo</div>
    <div class="violet w-6 h-4 flex-centered font-mono">violet</div>
    <div class="purple w-6 h-4 flex-centered font-mono">purple</div>
    <div class="fuchsia w-6 h-4 flex-centered font-mono">fuchsia</div>
    <div class="pink w-6 h-4 flex-centered font-mono">pink</div>
    <div class="rose w-6 h-4 flex-centered font-mono">rose</div>
    <div class="slate w-6 h-4 flex-centered font-mono">slate</div>
    <div class="gray w-6 h-4 flex-centered font-mono">gray</div>
    <div class="zinc w-6 h-4 flex-centered font-mono">zinc</div>
    <div class="stone w-6 h-4 flex-centered font-mono">stone</div>
    <div class="neutral w-6 h-4 flex-centered font-mono">neutral</div>
</div>

## Button Themes

<div class="flex flex-wrap gap-025">
    <button class="btn w-6 red">red</button>
    <button class="btn w-6 orange">orange</button>
    <button class="btn w-6 amber">amber</button>
    <button class="btn w-6 yellow">yellow</button>
    <button class="btn w-6 lime">lime</button>
    <button class="btn w-6 green">green</button>
    <button class="btn w-6 emerald">emerald</button>
    <button class="btn w-6 teal">teal</button>
    <button class="btn w-6 cyan">cyan</button>
    <button class="btn w-6 sky">sky</button>
    <button class="btn w-6 blue">blue</button>
    <button class="btn w-6 indigo">indigo</button>
    <button class="btn w-6 violet">violet</button>
    <button class="btn w-6 purple">purple</button>
    <button class="btn w-6 fuchsia">fuchsia</button>
    <button class="btn w-6 pink">pink</button>
    <button class="btn w-6 rose">rose</button>
    <button class="btn w-6 slate">slate</button>
    <button class="btn w-6 gray">gray</button>
    <button class="btn w-6 zinc">zinc</button>
    <button class="btn w-6 stone">stone</button>
    <button class="btn w-6 neutral">neutral</button>
</div>