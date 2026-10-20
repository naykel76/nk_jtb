# Box Showcase

<style>
.ep-title-gradient {
    background: linear-gradient(90deg, #a4a08f 0%, #b2af97 18%, #bebca0 40%, #d0cfb0 68%, #e4e2be 88%, #efedc7 100%);
}
.course-panel {
    --panel-bg: #d97d91;
    background-color: var(--panel-bg);
    inset-inline-start: 6%;
    inline-size: 28.4%;
}

.program {
    --portrait-width: 8rem;
}

.program .panel,
.program .media {
    inline-size: var(--portrait-width);
}

.program .gradient {
    background: linear-gradient(90deg, #a4a08f 0%, #b2af97 18%, #bebca0 40%, #d0cfb0 68%, #e4e2be 88%, #efedc7 100%);
}

.program .panel {
    background-color: #d97d91;
}

.program .portrait {
    object-fit: cover;
    object-position: center top;
    border-start-start-radius: 50% 20%;
    border-start-end-radius: 50% 20%;
}

.program h2.title {
    margin-block-start: 0;
}
</style>

## Gradient Band Card

```html +demo-folded class="resizable-container example-utils"
<article class="relative aspect-16:9">
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1280 720" aria-hidden="true" focusable="false">
        <path fill="#fff" d="M1280 0H0v720h1280V0Z" />
        <path fill="#4D1434" d="M436 48H47v10h389V48Z" />
        <path fill="#969FA7" d="M1233 48H844v10h389V48Z" />
        <path fill="#903163" d="M834 48H445v10h389V48Z" />
        <path fill="#903163" fill-rule="evenodd" d="M1086.5 63c48.88 0 88.5-39.849 88.5-89H998c0 49.151 39.62 89 88.5 89Z" clip-rule="evenodd" />
        <path fill="#F6DEEC" fill-rule="evenodd" d="M1292 390c0 113.219-92.01 205-205.5 205C973.005 595 881 503.219 881 390c0-113.218 92.005-205 205.5-205 113.49 0 205.5 91.782 205.5 205Z" clip-rule="evenodd" />
    </svg>
    <div class="absolute inset-0 flex items-center">
        <div class="ep-title-gradient w-full pxy">
            <h2 class="font-serif txt-lg">IV. Pharmacology &amp; Toxicology</h2>
        </div>
    </div>
    <div class="absolute bottom-0 right-0 flex items-center pxy-05">
        <a href="" class="txt-primary font-bold txt-sm">View Details →</a>
    </div>
</article>
```

```css +code +collapse
.ep-title-gradient {
    background: linear-gradient(90deg, #a4a08f 0%, #b2af97 18%, #bebca0 40%, #d0cfb0 68%, #e4e2be 88%, #efedc7 100%);
}
```

## Gradient Band Card with Pink Panel

```html +demo-folded class="resizable-container example-utils"
<article class="relative aspect-16:9 ">
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" aria-hidden="true" focusable="false">
        <path fill="#fff" d="M1280 0H0v720h1280V0Z" />
        <path fill="#4D1434" d="M436 48H47v10h389V48Z" />
        <path fill="#969FA7" d="M1233 48H844v10h389V48Z" />
        <path fill="#903163" d="M834 48H445v10h389V48Z" />
        <path fill="#903163" fill-rule="evenodd" d="M1086.5 63c48.88 0 88.5-39.849 88.5-89H998c0 49.151 39.62 89 88.5 89Z" clip-rule="evenodd" />
        <path fill="#F6DEEC" fill-rule="evenodd" d="M1292 390c0 113.219-92.01 205-205.5 205C973.005 595 881 503.219 881 390c0-113.218 92.005-205 205.5-205 113.49 0 205.5 91.782 205.5 205Z" clip-rule="evenodd" />
    </svg>
    <div class="course-panel absolute top-0 bottom-0"></div>
    <div class="absolute inset-0 flex items-center">
        <div class="ep-title-gradient w-full pxy">
            <h2 class="font-serif txt-lg">IV. Pharmacology &amp; Toxicology</h2>
        </div>
    </div>
    <div class="absolute bottom-0 right-0 flex items-center pxy-05">
        <a href="" class="txt-primary font-bold txt-sm">View Details →</a>
    </div>
</article>
```

```css +code +collapse
.ep-title-gradient {
    background: linear-gradient(90deg, #a4a08f 0%, #b2af97 18%, #bebca0 40%, #d0cfb0 68%, #e4e2be 88%, #efedc7 100%);
}

.course-panel {
    --panel-bg: #d97d91;
    background-color: var(--panel-bg);
    inset-inline-start: 6%;
    inline-size: 28.4%;
}
```

## Program Cards

```html +demo-folded class="resizable-container with-docs-only-overrides example-utils"
<div class="grid md:cols-3">
    <article class="program relative aspect-16:9">
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M1280 0H0v720h1280V0Z" />
            <path fill="#4D1434" d="M436 48H47v10h389V48Z" />
            <path fill="#969FA7" d="M1233 48H844v10h389V48Z" />
            <path fill="#903163" d="M834 48H445v10h389V48Z" />
            <path fill="#903163" fill-rule="evenodd" d="M1086.5 63c48.88 0 88.5-39.849 88.5-89H998c0 49.151 39.62 89 88.5 89Z" clip-rule="evenodd" />
            <path fill="#F6DEEC" fill-rule="evenodd" d="M1292 390c0 113.219-92.01 205-205.5 205C973.005 595 881 503.219 881 390c0-113.218 92.005-205 205.5-205 113.49 0 205.5 91.782 205.5 205Z" clip-rule="evenodd" />
        </svg>
        <div class="panel absolute top-0 bottom-0 left-1"></div>
        <div class="absolute inset-0 flex items-center">
            <div class="gradient w-full flex items-center">
                <div class="media relative self-stretch fs0 ml-1">
                    <div class="absolute bottom-0 w-full pr-05">

                        <img src="/images/portrait-placeholder.svg" alt="Portrait placeholder" class="portrait w-full h-8" width="320" height="360">

                    </div>
                </div>
                <h2 class="title txt-lg font-serif py pl-05">Program Title 1</h2>
            </div>
        </div>
        <div class="absolute bottom-0 right-0 pxy-05">
            <a href="" class="txt-primary font-bold txt-sm">View Details →</a>
        </div>
    </article>

    <article class="program relative aspect-16:9">
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M1280 0H0v720h1280V0Z" />
            <path fill="#4D1434" d="M436 48H47v10h389V48Z" />
            <path fill="#969FA7" d="M1233 48H844v10h389V48Z" />
            <path fill="#903163" d="M834 48H445v10h389V48Z" />
            <path fill="#903163" fill-rule="evenodd" d="M1086.5 63c48.88 0 88.5-39.849 88.5-89H998c0 49.151 39.62 89 88.5 89Z" clip-rule="evenodd" />
            <path fill="#F6DEEC" fill-rule="evenodd" d="M1292 390c0 113.219-92.01 205-205.5 205C973.005 595 881 503.219 881 390c0-113.218 92.005-205 205.5-205 113.49 0 205.5 91.782 205.5 205Z" clip-rule="evenodd" />
        </svg>
        <div class="panel absolute top-0 bottom-0 left-1"></div>
        <div class="absolute inset-0 flex items-center">
            <div class="gradient w-full flex items-center">
                <div class="media relative self-stretch fs0 ml-1">
                    <div class="absolute bottom-0 w-full pr-05">

                        <img src="/images/portrait-placeholder.svg" alt="Portrait placeholder" class="portrait w-full h-8" width="320" height="360">

                    </div>
                </div>
                <h2 class="title txt-lg font-serif py pl-05">Program Title 2</h2>
            </div>
        </div>
        <div class="absolute bottom-0 right-0 pxy-05">
            <a href="" class="txt-primary font-bold txt-sm">View Details →</a>
        </div>
    </article>

    <article class="program relative aspect-16:9">
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M1280 0H0v720h1280V0Z" />
            <path fill="#4D1434" d="M436 48H47v10h389V48Z" />
            <path fill="#969FA7" d="M1233 48H844v10h389V48Z" />
            <path fill="#903163" d="M834 48H445v10h389V48Z" />
            <path fill="#903163" fill-rule="evenodd" d="M1086.5 63c48.88 0 88.5-39.849 88.5-89H998c0 49.151 39.62 89 88.5 89Z" clip-rule="evenodd" />
            <path fill="#F6DEEC" fill-rule="evenodd" d="M1292 390c0 113.219-92.01 205-205.5 205C973.005 595 881 503.219 881 390c0-113.218 92.005-205 205.5-205 113.49 0 205.5 91.782 205.5 205Z" clip-rule="evenodd" />
        </svg>
        <div class="panel absolute top-0 bottom-0 left-1"></div>
        <div class="absolute inset-0 flex items-center">
            <div class="gradient w-full flex items-center">
                <div class="media relative self-stretch fs0 ml-1">
                    <div class="absolute bottom-0 w-full pr-05">

                        <img src="/images/portrait-placeholder.svg" alt="Portrait placeholder" class="portrait w-full h-8" width="320" height="360">

                    </div>
                </div>
                <h2 class="title txt-lg font-serif py pl-05">Program Title 3</h2>
            </div>
        </div>
        <div class="absolute bottom-0 right-0 pxy-05">
            <a href="" class="txt-primary font-bold txt-sm">View Details →</a>
        </div>
    </article>
</div>
```

```css +code +collapse
.program {
    --portrait-width: 8rem;
}

.program .panel,
.program .media {
    inline-size: var(--portrait-width);
}

.program .gradient {
    background: linear-gradient(90deg, #a4a08f 0%, #b2af97 18%, #bebca0 40%, #d0cfb0 68%, #e4e2be 88%, #efedc7 100%);
}

.program .panel {
    background-color: #d97d91;
}

.program .portrait {
    object-fit: cover;
    object-position: center top;
    border-start-start-radius: 50% 20%;
    border-start-end-radius: 50% 20%;
}

.program h2.title {
    margin-block-start: 0;
}
```
