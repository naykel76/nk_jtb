## Button Based (JavaScript pagination, SPAs)

```html +demo-folded
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

<hr>

```html +demo-folded
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

<hr>

## Link Based (Server-side pagination, full page loads)

```html +demo-folded
<div class="example-utils">
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
</div>
```

<nav class="flex items-center gap-025" aria-label="Pagination">
    <button type="button" class="btn primary gap-025" aria-label="Previous page">
        <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-left"></use> </svg>
        <span class="sr-only">Previous</span>
    </button>
    <div class="flex items-center gap-025">
        <button type="button" class="btn primary" aria-current="page" aria-label="Page 1">1</button>
        <button type="button" class="btn primary" aria-label="Page 2">2</button>
        <button type="button" class="btn primary" aria-label="Page 3">3</button>
    </div>
    <button type="button" class="btn primary gap-025" aria-label="Next page">
        <span class="sr-only">Next</span>
        <svg class="icon xs" aria-hidden="true"> <use href="/svg/icons.svg#chevron-right"></use> </svg>
    </button>
</nav>
