# JTB Display and Visibility Testing

## From screen sizes `{device}:`

> **Note:** The unprefixed `{device}:` is the default mobile-first approach. Styles apply
> from the specified breakpoint and up.

- Teal disappears FROM the breakpoint onward (appears as screen gets smaller, disappears as screen gets larger). 
- Orange appears FROM the breakpoint onward (disappears as screen gets smaller, appears as screen gets larger).

<div class="grid cols-5 tac">
    <div class="py px-025 teal sm:invisible"><code class="txt-white">sm:hidden</code></div>
    <div class="py px-025 teal md:invisible"><code class="txt-white">md:hidden</code></div>
    <div class="py px-025 teal lg:invisible"><code class="txt-white">lg:hidden</code></div>
    <div class="py px-025 teal xl:invisible"><code class="txt-white">xl:hidden</code></div>
    <div class="py px-025 teal xxl:invisible"><code class="txt-white">xxl:hidden</code></div>
    <div class="py px-025 orange invisible sm:visible"><code class="txt-white">sm:block</code></div>
    <div class="py px-025 orange invisible md:visible"><code class="txt-white">md:block</code></div>
    <div class="py px-025 orange invisible lg:visible"><code class="txt-white">lg:block</code></div>
    <div class="py px-025 orange invisible xl:visible"><code class="txt-white">xl:block</code></div>
    <div class="py px-025 orange invisible xxl:visible"><code class="txt-white">xxl:block</code></div>
</div>

## Targeting Specific screen sizes: `on-{device}:`

- Pink is visible ONLY at that exact breakpoint. 
- Blue is hidden ONLY at that exact breakpoint.
  
<div class="grid cols-5 tac">
    <div class="py px-025 pink on-sm:invisible"><code class="txt-white">on-sm:hidden</code></div>
    <div class="py px-025 pink on-md:invisible"><code class="txt-white">on-md:hidden</code></div>
    <div class="py px-025 pink on-lg:invisible"><code class="txt-white">on-lg:hidden</code></div>
    <div class="py px-025 pink on-xl:invisible"><code class="txt-white">on-xl:hidden</code></div>
    <div class="py px-025 pink on-xxl:invisible"><code class="txt-white">on-xxl:hidden</code></div>
    <div class="py px-025 blue invisible on-sm:visible"><code class="txt-white">on-sm:block</code></div>
    <div class="py px-025 blue invisible on-md:visible"><code class="txt-white">on-md:block</code></div>
    <div class="py px-025 blue invisible on-lg:visible"><code class="txt-white">on-lg:block</code></div>
    <div class="py px-025 blue invisible on-xl:visible"><code class="txt-white">on-xl:block</code></div>
    <div class="py px-025 blue invisible on-xxl:visible"><code class="txt-white">on-xxl:block</code></div>
</div>

## Targeting Up to screen sizes: `to-{device}:`

- Purple is visible UP TO the breakpoint (disappears at and above). 
- Lime is hidden UP TO the breakpoint (appears at and above).
  
<div class="grid cols-4 tac">
    <div class="py px-025 purple to-sm:invisible"><code class="txt-white">to-sm:hidden</code></div>
    <div class="py px-025 purple to-md:invisible"><code class="txt-white">to-md:hidden</code></div>
    <div class="py px-025 purple to-lg:invisible"><code class="txt-white">to-lg:hidden</code></div>
    <div class="py px-025 purple to-xl:invisible"><code class="txt-white">to-xl:hidden</code></div>
    <div class="py px-025 lime invisible to-sm:visible"><code class="txt-white">to-sm:block</code></div>
    <div class="py px-025 lime invisible to-md:visible"><code class="txt-white">to-md:block</code></div>
    <div class="py px-025 lime invisible to-lg:visible"><code class="txt-white">to-lg:block</code></div>
    <div class="py px-025 lime invisible to-xl:visible"><code class="txt-white">to-xl:block</code></div>
</div>