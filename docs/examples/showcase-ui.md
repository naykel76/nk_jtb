# JTB UI Showcase

## Boxes

```html +demo-folded
<div class="bx relative overflow-hidden max-w-384px" style="background-color: var(--brand-primary-surface); border-color: var(--brand-primary-surface-border);">
    <svg class="absolute -top-1.5 -right-1.5 opacity-10" width="120" height="120" viewBox="0 0 120 120" style="color: var(--brand-primary)">
        <circle cx="60" cy="60" r="50" fill="currentColor"/>
        <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>
    <svg class="absolute -bottom-1 -left-1 opacity-10" width="80" height="80" viewBox="0 0 80 80" style="color: var(--brand-primary)">
        <circle cx="40" cy="40" r="35" fill="currentColor"/>
    </svg>
    <p class="txt-xs font-medium uppercase tracking-widest opacity-70" style="color: var(--brand-primary)">Also available as</p>
    <p class="font-serif txt-base font-medium" style="color: var(--brand-primary-on-surface)">Part of a program</p>
    <p class="txt-sm" style="color: var(--brand-primary-on-surface)">Save with a bundle discount when you enrol in the full program.</p>
    <a href="#" class="txt-sm font-medium inline-flex items-center gap-025" style="color: var(--brand-primary)">View program →</a>
</div>
```

## Brand colour + corner shapes

```html +demo-folded
<div class="bx primary relative overflow-hidden max-w-384px">
    <svg class="absolute -top-1.5 -right-1.5 opacity-10" width="100" height="100" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="8" fill="white"/>
        <rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="absolute -bottom-1.5 -left-1.5 opacity-10" width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="40" fill="white"/>
        <circle cx="45" cy="45" r="25" fill="none" stroke="white" stroke-width="2"/>
    </svg>
    <p class="txt-xs font-medium uppercase tracking-widest txt-rose-200 opacity-80">Also available as</p>
    <p class="font-serif txt-base font-medium">Part of a program</p>
    <p class="txt-sm txt-rose-200 opacity-90">Save with a bundle discount when you enrol in the full program.</p>
    <a href="#" class="txt-sm font-medium inline-flex items-center gap-025">View program →</a>
</div>
```

## left border accent

```html +demo-folded
<div class="bx relative overflow-hidden max-w-384px bdr-l-3 bdr-l-primary">
    <p class="txt-xs font-medium uppercase tracking-widest opacity-70" style="color: var(--primary)">Also available as</p>
    <p class="font-serif txt-base font-medium">Part of a program</p>
    <p class="txt-sm txt-muted">Save with a bundle discount when you enrol in the full program.</p>
    <a href="#" class="txt-sm font-medium inline-flex items-center gap-025" style="color: var(--primary)">View program →</a>
</div>
```

## diagonal shape bleed

```html +demo-folded
<div class="bx relative overflow-hidden max-w-384px" style="background-color: var(--brand-primary-surface); border-color: var(--brand-primary-surface-border);">
    <svg class="absolute top-0 right-0" width="120" height="120" viewBox="0 0 120 120" style="color: var(--brand-primary)">
        <polygon points="120,0 120,120 0,0" fill="currentColor" opacity="0.08"/>
        <polygon points="120,0 120,80 40,0" fill="currentColor" opacity="0.08"/>
    </svg>
    <svg class="absolute bottom-0 left-0" width="70" height="70" viewBox="0 0 70 70" style="color: var(--brand-primary)">
        <polygon points="0,70 70,70 0,0" fill="currentColor" opacity="0.06"/>
    </svg>
    <p class="txt-xs font-medium uppercase tracking-widest opacity-70" style="color: var(--brand-primary)">Also available as</p>
    <p class="font-serif txt-base font-medium" style="color: var(--brand-primary-on-surface)">Part of a program</p>
    <p class="txt-sm" style="color: var(--brand-primary-on-surface)">Save with a bundle discount when you enrol in the full program.</p>
    <a href="#" class="txt-sm font-medium inline-flex items-center gap-025" style="color: var(--brand-primary)">View program →</a>
</div>
```

## Lists

### Checklist

```html +demo-folded class="bx"
<ul class="checklist">
    <li>12 months access from enrolment</li>
    <li>Downloadable resources included</li>
    <li>Certificate on completion</li>
</ul>
```

## Pagination

### Button Based

```html +demo-folded class="bx"
<nav class="flex items-center -space-x-px" aria-label="Pagination">
    <button type="button" class="txt-sm flex-centered min-wh-2.5 py-05 px-075 ends:rounded-lg gray state-gray bdr bdr-gray-200" aria-label="Previous page">
        <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-left"></use> </svg>
        <span class="hidden sm:block">Previous</span>
    </button>
    <button type="button" class="txt-sm flex-centered min-wh-2.5 py-05 px-075 ends:rounded-lg gray state-gray bdr bdr-gray-200" aria-current="page" aria-label="Page 1">1</button>
    <button type="button" class="txt-sm flex-centered min-wh-2.5 py-05 px-075 ends:rounded-lg gray state-gray bdr bdr-gray-200" aria-label="Page 2">2</button>
    <button type="button" class="txt-sm flex-centered min-wh-2.5 py-05 px-075 ends:rounded-lg gray state-gray bdr bdr-gray-200" aria-label="Page 3">3</button>
    <button type="button" class="txt-sm flex-centered min-wh-2.5 py-05 px-075 ends:rounded-lg gray state-gray bdr bdr-gray-200" aria-label="Next page">
        <span class="hidden sm:block">Next</span>
        <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-right"></use> </svg>
    </button>
</nav>
```

```html +demo-folded class="bx"
<nav class="flex items-center gap-025" aria-label="Pagination">
    <button type="button" class="py-05 px-075 flex-centered gap-025 txt-sm rounded-lg txt-gray-800 hover:bg-gray-100" aria-label="Previous page">
        <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-left"></use> </svg>
        <span class="hidden sm:block">Previous</span>
    </button>
    <div class="flex items-center gap-025">
        <button type="button" class="flex-centered bdr bdr-gray-200 txt-gray-800 py-05 px-075 txt-sm rounded-lg" aria-current="page" aria-label="Page 1">1</button>
        <button type="button" class="flex-centered txt-gray-800 hover:bg-gray-100 py-05 px-075 txt-sm rounded-lg" aria-label="Page 2">2</button>
        <button type="button" class="flex-centered txt-gray-800 hover:bg-gray-100 py-05 px-075 txt-sm rounded-lg" aria-label="Page 3">3</button>
    </div>
    <button type="button" class="py-05 px-075 flex-centered gap-025 txt-sm rounded-lg txt-gray-800 hover:bg-gray-100" aria-label="Next page">
        <span class="hidden sm:block">Next</span>
        <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-right"></use> </svg>
    </button>
</nav>
```

### Link Based

```html +demo-folded class="bx"
<nav aria-label="Pagination">
    <ul class="flex items-center -space-x-px">
        <li>
            <a href="#" class="py-05 px-075 flex-centered gap-025 txt-sm ends:rounded bdr bdr-gray-200 txt-gray-800 hover:bg-gray-100" aria-label="Previous page" rel="prev">
                <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-left"></use> </svg>
                <span>Previous</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex-centered bg-gray-200 txt-gray-800 bdr bdr-gray-200 py-05 px-075 txt-sm" aria-current="page" aria-label="Page 1">1</a>
        </li>
        <li>
            <a href="#" class="flex-centered bdr bdr-gray-200 txt-gray-800 hover:bg-gray-100 py-05 px-075 txt-sm" aria-label="Page 2">2</a>
        </li>
        <li>
            <a href="#" class="flex-centered bdr bdr-gray-200 txt-gray-800 hover:bg-gray-100 py-05 px-075 txt-sm" aria-label="Page 3">3</a>
        </li>
        <li>
            <a href="#" class="py-05 px-075 flex-centered gap-025 txt-sm ends:rounded bdr bdr-gray-200 txt-gray-800 hover:bg-gray-100" aria-label="Next page" rel="next">
                <span>Next</span>
                <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-right"></use> </svg>
            </a>
        </li>
    </ul>
</nav>
```

### Checklist (utility)

```html +demo-folded class="bx"
<ul class="space-y-05 txt-sm">
    <li class="flex gap-05">
        <svg class="wh-1.25 rounded-full bg-orange-100 txt-primary pxy-025" fill="none" viewBox="0 0 10 8" stroke="currentColor" stroke-width="1.5">
            <path d="M1 4l2.5 2.5L9 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        12 months access from enrolment
    </li>
    <li class="flex gap-05">
        <svg class="wh-1.25 rounded-full bg-orange-100 txt-primary pxy-025" fill="none" viewBox="0 0 10 8" stroke="currentColor" stroke-width="1.5">
            <path d="M1 4l2.5 2.5L9 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Downloadable resources included
    </li>
    <li class="flex gap-05">
        <svg class="wh-1.25 rounded-full bg-orange-100 txt-primary pxy-025" fill="none" viewBox="0 0 10 8" stroke="currentColor" stroke-width="1.5">
            <path d="M1 4l2.5 2.5L9 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Certificate on completion
    </li>
</ul>
```
