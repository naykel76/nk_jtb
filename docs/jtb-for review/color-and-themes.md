# Color and Themes

## Consistent Theming Across Components

One of JTB's key features is unified theming. Components share the same theme
classes, creating visual consistency with minimal cognitive overhead.

<!-- I want to explain here that certain classes work across all components e.g.
primary, secondary, success, warning, sky, rose are all theme classes and they
work the same when applied to any component e.g. button, box, input etc

we no longer need special classes like btn-primary, box-primary, we split and
add `btn` and `primary` so they can be used together or separately -->

<div class="grid cols-2">
    <div class="bx primary">
        This is a primary themed box.
    </div>
    <div class="bx teal">
        This is a teal themed box.
    </div>
</div>

```html +torchlight-html
<div class="bx primary">
    This is a primary themed box.
</div>
<div class="bx teal">
    This is a teal themed box.
</div>
```


<!-- buttons already include state???? how??? -->
<button class="btn primary">Primary Button</button> <button class="btn
teal">Teal Button</button>

```html +torchlight-html
<button class="btn primary">Primary Button</button>
<button class="btn teal">Teal Button</button>
```

The same theme classes work across all components apply `.primary` to a button,
box, or badge and get consistent branding throughout your interface.

## The Problem with Utility-First CSS

<!-- should this be under its own heading? -->
Consider this utility tailwind style button:

<!-- tracking-wider - letter spacing -->
```html +torchlight-html    
<button class="px-075 py-05 cursor-pointer rounded
txt-white txt-sm 
font-medium \
bdr bdr-blue-500 bdr-2
bg-blue-700 hover:bg-blue-800
line-0 outline-none
active:bg-blue-700" type="button" >BUTTON</button>
```

<button class="px-075 py-05 cursor-pointer rounded
txt-white txt-sm 
font-medium \
bdr bdr-blue-500 bdr-2
bg-blue-700 hover:bg-blue-800
line-0 outline-none
active:bg-blue-700" type="button" >BUTTON</button>


<div class="px-075 py-05 cursor-pointer rounded
txt-white txt-sm  font-medium \
bdr bdr-blue-500 bdr-2
bg-blue-700 hover:bg-blue-800 active:bg-blue-700">DIV</div>
line-0 outline-none

<!-- <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button> -->

These classes can be categorised as follows:

- **Spacing** - `px-075`, `py-05` 
- 
- **Layout** - `relative`, `inline-flex`, `items-center`
- **Typography** - `text-sm`, `font-medium`, `leading-5` 
- **Border** - `border`, `border-gray-300`, `rounded-md` 
- **Colors (Light mode)** - `text-gray-700`, `bg-white` 
- **States (Light mode)** - `hover:text-gray-500`, `focus:outline-none`,
  `focus:ring`, `focus:ring-blue-300`, `focus:border-blue-300`,
  `active:bg-gray-100`, `active:text-gray-700`
- **Colors (Dark mode)** - `dark:bg-gray-800`, `dark:border-gray-600`,
  `dark:text-gray-300` 
- **States (Dark mode)** - `dark:focus:border-blue-700`,
  `dark:active:bg-gray-700`, `dark:active:text-gray-300` 
- **Transitions** - `transition`, `ease-in-out`, `duration-150`


<!-- this needs to be relocated somewhere sensible -->










<div class="flex">
<div class="primary wh-5">sdsdf</div>
<div class="secondary wh-5">sdsdf</div>
<div class="accent wh-5">sdsdf</div>
<div class="light wh-5">sdsdf</div>
<div class="dark wh-5">sdsdf</div>
<div class="danger wh-5">sdsdf</div>
<div class="info wh-5">sdsdf</div>
<div class="success wh-5">sdsdf</div>
<div class="warning wh-5">sdsdf</div>
<div class="muted wh-5">sdsdf</div>
<div class="stone wh-5">sdsdf</div>
<div class="brown wh-5">sdsdf</div>
<div class="red wh-5">sdsdf</div>
<div class="orange wh-5">sdsdf</div>
<div class="amber wh-5">sdsdf</div>
<div class="yellow wh-5">sdsdf</div>
<div class="lime wh-5">sdsdf</div>
<div class="emerald wh-5">sdsdf</div>
<div class="green wh-5">sdsdf</div>
<div class="teal wh-5">sdsdf</div>
<div class="cyan wh-5">sdsdf</div>
<div class="sky wh-5">sdsdf</div>
<div class="blue wh-5">sdsdf</div>
<div class="indigo wh-5">sdsdf</div>
<div class="purple wh-5">sdsdf</div>
<div class="fuchsia wh-5">sdsdf</div>
<div class="pink wh-5">sdsdf</div>
<div class="rose wh-5">sdsdf</div>
<div class="white wh-5">sdsdf</div>
</div>

<div class="">
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize  w-6"></p>
        <div class="w-3 tac">50</div>
        <div class="w-3 tac">100</div>
        <div class="w-3 tac">200</div>
        <div class="w-3 tac">300</div>
        <div class="w-3 tac">400</div>
        <div class="w-3 tac">500</div>
        <div class="w-3 tac">600</div>
        <div class="w-3 tac">700</div>
        <div class="w-3 tac">800</div>
        <div class="w-3 tac">900</div>
        <div class="w-3 tac">950</div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">red</p>
        <div class="wh-3 bg-red-50"></div>
        <div class="wh-3 bg-red-100"></div>
        <div class="wh-3 bg-red-200"></div>
        <div class="wh-3 bg-red-300"></div>
        <div class="wh-3 bg-red-400"></div>
        <div class="wh-3 bg-red-500"></div>
        <div class="wh-3 bg-red-600"></div>
        <div class="wh-3 bg-red-700"></div>
        <div class="wh-3 bg-red-800"></div>
        <div class="wh-3 bg-red-900"></div>
        <div class="wh-3 bg-red-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">orange</p>
        <div class="wh-3 bg-orange-50"></div>
        <div class="wh-3 bg-orange-100"></div>
        <div class="wh-3 bg-orange-200"></div>
        <div class="wh-3 bg-orange-300"></div>
        <div class="wh-3 bg-orange-400"></div>
        <div class="wh-3 bg-orange-500"></div>
        <div class="wh-3 bg-orange-600"></div>
        <div class="wh-3 bg-orange-700"></div>
        <div class="wh-3 bg-orange-800"></div>
        <div class="wh-3 bg-orange-900"></div>
        <div class="wh-3 bg-orange-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">amber</p>
        <div class="wh-3 bg-amber-50"></div>
        <div class="wh-3 bg-amber-100"></div>
        <div class="wh-3 bg-amber-200"></div>
        <div class="wh-3 bg-amber-300"></div>
        <div class="wh-3 bg-amber-400"></div>
        <div class="wh-3 bg-amber-500"></div>
        <div class="wh-3 bg-amber-600"></div>
        <div class="wh-3 bg-amber-700"></div>
        <div class="wh-3 bg-amber-800"></div>
        <div class="wh-3 bg-amber-900"></div>
        <div class="wh-3 bg-amber-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">yellow</p>
        <div class="wh-3 bg-yellow-50"></div>
        <div class="wh-3 bg-yellow-100"></div>
        <div class="wh-3 bg-yellow-200"></div>
        <div class="wh-3 bg-yellow-300"></div>
        <div class="wh-3 bg-yellow-400"></div>
        <div class="wh-3 bg-yellow-500"></div>
        <div class="wh-3 bg-yellow-600"></div>
        <div class="wh-3 bg-yellow-700"></div>
        <div class="wh-3 bg-yellow-800"></div>
        <div class="wh-3 bg-yellow-900"></div>
        <div class="wh-3 bg-yellow-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">lime</p>
        <div class="wh-3 bg-lime-50"></div>
        <div class="wh-3 bg-lime-100"></div>
        <div class="wh-3 bg-lime-200"></div>
        <div class="wh-3 bg-lime-300"></div>
        <div class="wh-3 bg-lime-400"></div>
        <div class="wh-3 bg-lime-500"></div>
        <div class="wh-3 bg-lime-600"></div>
        <div class="wh-3 bg-lime-700"></div>
        <div class="wh-3 bg-lime-800"></div>
        <div class="wh-3 bg-lime-900"></div>
        <div class="wh-3 bg-lime-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">green</p>
        <div class="wh-3 bg-green-50"></div>
        <div class="wh-3 bg-green-100"></div>
        <div class="wh-3 bg-green-200"></div>
        <div class="wh-3 bg-green-300"></div>
        <div class="wh-3 bg-green-400"></div>
        <div class="wh-3 bg-green-500"></div>
        <div class="wh-3 bg-green-600"></div>
        <div class="wh-3 bg-green-700"></div>
        <div class="wh-3 bg-green-800"></div>
        <div class="wh-3 bg-green-900"></div>
        <div class="wh-3 bg-green-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">emerald</p>
        <div class="wh-3 bg-emerald-50"></div>
        <div class="wh-3 bg-emerald-100"></div>
        <div class="wh-3 bg-emerald-200"></div>
        <div class="wh-3 bg-emerald-300"></div>
        <div class="wh-3 bg-emerald-400"></div>
        <div class="wh-3 bg-emerald-500"></div>
        <div class="wh-3 bg-emerald-600"></div>
        <div class="wh-3 bg-emerald-700"></div>
        <div class="wh-3 bg-emerald-800"></div>
        <div class="wh-3 bg-emerald-900"></div>
        <div class="wh-3 bg-emerald-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">teal</p>
        <div class="wh-3 bg-teal-50"></div>
        <div class="wh-3 bg-teal-100"></div>
        <div class="wh-3 bg-teal-200"></div>
        <div class="wh-3 bg-teal-300"></div>
        <div class="wh-3 bg-teal-400"></div>
        <div class="wh-3 bg-teal-500"></div>
        <div class="wh-3 bg-teal-600"></div>
        <div class="wh-3 bg-teal-700"></div>
        <div class="wh-3 bg-teal-800"></div>
        <div class="wh-3 bg-teal-900"></div>
        <div class="wh-3 bg-teal-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">cyan</p>
        <div class="wh-3 bg-cyan-50"></div>
        <div class="wh-3 bg-cyan-100"></div>
        <div class="wh-3 bg-cyan-200"></div>
        <div class="wh-3 bg-cyan-300"></div>
        <div class="wh-3 bg-cyan-400"></div>
        <div class="wh-3 bg-cyan-500"></div>
        <div class="wh-3 bg-cyan-600"></div>
        <div class="wh-3 bg-cyan-700"></div>
        <div class="wh-3 bg-cyan-800"></div>
        <div class="wh-3 bg-cyan-900"></div>
        <div class="wh-3 bg-cyan-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">sky</p>
        <div class="wh-3 bg-sky-50"></div>
        <div class="wh-3 bg-sky-100"></div>
        <div class="wh-3 bg-sky-200"></div>
        <div class="wh-3 bg-sky-300"></div>
        <div class="wh-3 bg-sky-400"></div>
        <div class="wh-3 bg-sky-500"></div>
        <div class="wh-3 bg-sky-600"></div>
        <div class="wh-3 bg-sky-700"></div>
        <div class="wh-3 bg-sky-800"></div>
        <div class="wh-3 bg-sky-900"></div>
        <div class="wh-3 bg-sky-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">blue</p>
        <div class="wh-3 bg-blue-50"></div>
        <div class="wh-3 bg-blue-100"></div>
        <div class="wh-3 bg-blue-200"></div>
        <div class="wh-3 bg-blue-300"></div>
        <div class="wh-3 bg-blue-400"></div>
        <div class="wh-3 bg-blue-500"></div>
        <div class="wh-3 bg-blue-600"></div>
        <div class="wh-3 bg-blue-700"></div>
        <div class="wh-3 bg-blue-800"></div>
        <div class="wh-3 bg-blue-900"></div>
        <div class="wh-3 bg-blue-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">indigo</p>
        <div class="wh-3 bg-indigo-50"></div>
        <div class="wh-3 bg-indigo-100"></div>
        <div class="wh-3 bg-indigo-200"></div>
        <div class="wh-3 bg-indigo-300"></div>
        <div class="wh-3 bg-indigo-400"></div>
        <div class="wh-3 bg-indigo-500"></div>
        <div class="wh-3 bg-indigo-600"></div>
        <div class="wh-3 bg-indigo-700"></div>
        <div class="wh-3 bg-indigo-800"></div>
        <div class="wh-3 bg-indigo-900"></div>
        <div class="wh-3 bg-indigo-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">violet</p>
        <div class="wh-3 bg-violet-50"></div>
        <div class="wh-3 bg-violet-100"></div>
        <div class="wh-3 bg-violet-200"></div>
        <div class="wh-3 bg-violet-300"></div>
        <div class="wh-3 bg-violet-400"></div>
        <div class="wh-3 bg-violet-500"></div>
        <div class="wh-3 bg-violet-600"></div>
        <div class="wh-3 bg-violet-700"></div>
        <div class="wh-3 bg-violet-800"></div>
        <div class="wh-3 bg-violet-900"></div>
        <div class="wh-3 bg-violet-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">purple</p>
        <div class="wh-3 bg-purple-50"></div>
        <div class="wh-3 bg-purple-100"></div>
        <div class="wh-3 bg-purple-200"></div>
        <div class="wh-3 bg-purple-300"></div>
        <div class="wh-3 bg-purple-400"></div>
        <div class="wh-3 bg-purple-500"></div>
        <div class="wh-3 bg-purple-600"></div>
        <div class="wh-3 bg-purple-700"></div>
        <div class="wh-3 bg-purple-800"></div>
        <div class="wh-3 bg-purple-900"></div>
        <div class="wh-3 bg-purple-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">fuchsia</p>
        <div class="wh-3 bg-fuchsia-50"></div>
        <div class="wh-3 bg-fuchsia-100"></div>
        <div class="wh-3 bg-fuchsia-200"></div>
        <div class="wh-3 bg-fuchsia-300"></div>
        <div class="wh-3 bg-fuchsia-400"></div>
        <div class="wh-3 bg-fuchsia-500"></div>
        <div class="wh-3 bg-fuchsia-600"></div>
        <div class="wh-3 bg-fuchsia-700"></div>
        <div class="wh-3 bg-fuchsia-800"></div>
        <div class="wh-3 bg-fuchsia-900"></div>
        <div class="wh-3 bg-fuchsia-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">pink</p>
        <div class="wh-3 bg-pink-50"></div>
        <div class="wh-3 bg-pink-100"></div>
        <div class="wh-3 bg-pink-200"></div>
        <div class="wh-3 bg-pink-300"></div>
        <div class="wh-3 bg-pink-400"></div>
        <div class="wh-3 bg-pink-500"></div>
        <div class="wh-3 bg-pink-600"></div>
        <div class="wh-3 bg-pink-700"></div>
        <div class="wh-3 bg-pink-800"></div>
        <div class="wh-3 bg-pink-900"></div>
        <div class="wh-3 bg-pink-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">rose</p>
        <div class="wh-3 bg-rose-50"></div>
        <div class="wh-3 bg-rose-100"></div>
        <div class="wh-3 bg-rose-200"></div>
        <div class="wh-3 bg-rose-300"></div>
        <div class="wh-3 bg-rose-400"></div>
        <div class="wh-3 bg-rose-500"></div>
        <div class="wh-3 bg-rose-600"></div>
        <div class="wh-3 bg-rose-700"></div>
        <div class="wh-3 bg-rose-800"></div>
        <div class="wh-3 bg-rose-900"></div>
        <div class="wh-3 bg-rose-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">slate</p>
        <div class="wh-3 bg-slate-50"></div>
        <div class="wh-3 bg-slate-100"></div>
        <div class="wh-3 bg-slate-200"></div>
        <div class="wh-3 bg-slate-300"></div>
        <div class="wh-3 bg-slate-400"></div>
        <div class="wh-3 bg-slate-500"></div>
        <div class="wh-3 bg-slate-600"></div>
        <div class="wh-3 bg-slate-700"></div>
        <div class="wh-3 bg-slate-800"></div>
        <div class="wh-3 bg-slate-900"></div>
        <div class="wh-3 bg-slate-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">gray</p>
        <div class="wh-3 bg-gray-50"></div>
        <div class="wh-3 bg-gray-100"></div>
        <div class="wh-3 bg-gray-200"></div>
        <div class="wh-3 bg-gray-300"></div>
        <div class="wh-3 bg-gray-400"></div>
        <div class="wh-3 bg-gray-500"></div>
        <div class="wh-3 bg-gray-600"></div>
        <div class="wh-3 bg-gray-700"></div>
        <div class="wh-3 bg-gray-800"></div>
        <div class="wh-3 bg-gray-900"></div>
        <div class="wh-3 bg-gray-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">zinc</p>
        <div class="wh-3 bg-zinc-50"></div>
        <div class="wh-3 bg-zinc-100"></div>
        <div class="wh-3 bg-zinc-200"></div>
        <div class="wh-3 bg-zinc-300"></div>
        <div class="wh-3 bg-zinc-400"></div>
        <div class="wh-3 bg-zinc-500"></div>
        <div class="wh-3 bg-zinc-600"></div>
        <div class="wh-3 bg-zinc-700"></div>
        <div class="wh-3 bg-zinc-800"></div>
        <div class="wh-3 bg-zinc-900"></div>
        <div class="wh-3 bg-zinc-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">neutral</p>
        <div class="wh-3 bg-neutral-50"></div>
        <div class="wh-3 bg-neutral-100"></div>
        <div class="wh-3 bg-neutral-200"></div>
        <div class="wh-3 bg-neutral-300"></div>
        <div class="wh-3 bg-neutral-400"></div>
        <div class="wh-3 bg-neutral-500"></div>
        <div class="wh-3 bg-neutral-600"></div>
        <div class="wh-3 bg-neutral-700"></div>
        <div class="wh-3 bg-neutral-800"></div>
        <div class="wh-3 bg-neutral-900"></div>
        <div class="wh-3 bg-neutral-950"></div>
    </div>
    <div class="flex va-c gap-1 fw6 mt-1">
        <p class="txt-blue-950 txt-capitalize w-6">stone</p>
        <div class="wh-3 bg-stone-50"></div>
        <div class="wh-3 bg-stone-100"></div>
        <div class="wh-3 bg-stone-200"></div>
        <div class="wh-3 bg-stone-300"></div>
        <div class="wh-3 bg-stone-400"></div>
        <div class="wh-3 bg-stone-500"></div>
        <div class="wh-3 bg-stone-600"></div>
        <div class="wh-3 bg-stone-700"></div>
        <div class="wh-3 bg-stone-800"></div>
        <div class="wh-3 bg-stone-900"></div>
        <div class="wh-3 bg-stone-950"></div>
    </div>
</div>