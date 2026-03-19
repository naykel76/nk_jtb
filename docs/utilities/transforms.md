# Transform Utilities (review)

<p class="lead">`translate-*`, `-translate-*`, and `rotate-*` move or rotate elements using the current JTB transform utility API.</p>

## Translate (review)

```html +demo-folded class="bx"
<div class="grid gap lg:cols-3 tac c-pxy-1">
    <div class="relative">
        <div class="bx translate-x-1-2">translate-x-1-2</div>
    </div>
    <div class="relative">
        <div class="bx translate-y-1-2">translate-y-1-2</div>
    </div>
    <div class="relative">
        <div class="bx translate-0">translate-0</div>
    </div>
</div>
```

## Negative Translate (review)

```html +demo-folded class="bx"
<div class="grid gap lg:cols-3 tac c-pxy-1">
    <div class="relative">
        <div class="bx -translate-x-1-2">-translate-x-1-2</div>
    </div>
    <div class="relative">
        <div class="bx -translate-y-1-2">-translate-y-1-2</div>
    </div>
    <div class="relative">
        <div class="bx -translate-x-full">-translate-x-full</div>
    </div>
</div>
```

## Rotate (review)

```html +demo-folded class="bx"
<div class="grid gap lg:cols-4 tac c-pxy-1">
    <div class="bx rotate-90">rotate-90</div>
    <div class="bx rotate-180">rotate-180</div>
    <div class="bx rotate-270">rotate-270</div>
    <div class="bx rotate--90">rotate--90</div>
</div>
```

## Combined Usage (review)

```html +demo-folded class="bx"
<div class="grid gap lg:cols-2 tac c-pxy-1">
    <div>
        <div class="bx translate-x-1-2 -translate-y-1-2">
            translate-x-1-2 -translate-y-1-2
        </div>
    </div>
    <div>
        <div class="bx translate-x-1-2 rotate-180">
            translate-x-1-2 rotate-180
        </div>
    </div>
</div>
```

## Available Values (review)

### Translate (review)

- `translate-0`
- `translate-x-0`
- `translate-x-1-2`
- `translate-x-full`
- `translate-y-0`
- `translate-y-1-2`
- `translate-y-full`

### Negative Translate (review)

- `-translate-x-1-2`
- `-translate-x-full`
- `-translate-y-1-2`
- `-translate-y-full`

### Rotate (review)

- `rotate-90`
- `rotate-180`
- `rotate-270`
- `rotate--90`
- `rotate--180`
