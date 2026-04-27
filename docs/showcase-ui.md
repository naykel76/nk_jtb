# JTB UI Showcase

## Lists

### Checklist

```html +demo-folded class="bx" class="bx"
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

```html +demo-folded class="bx" class="bx"
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
