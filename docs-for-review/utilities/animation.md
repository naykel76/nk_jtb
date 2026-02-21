# Animation Utilities

<h2>Loading States</h2>
<div class="grid md:cols-2 lg:cols-3 gap">
    <!-- Simple Spinner -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Simple Spinner</h3>
        <div class="animate-spin rounded-full wh-4 bdr-4 bdr-gray-200 bdr-t-blue-600"></div>
        <p class="txt-sm txt-gray-600">Sending message...</p>
    </div>
    <!-- Ring Spinner (Thicker) -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Ring Spinner</h3>
        <div class="animate-spin rounded-full wh-4 bdr-8 bdr-gray-200 bdr-t-indigo-600"></div>
        <p class="txt-sm txt-gray-600">Processing...</p>
    </div>
    <!-- Dual Ring -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Dual Ring</h3>
        <div class="relative">
            <div class="animate-spin rounded-full wh-4 bdr-4 bdr-gray-200 bdr-t-purple-600"></div>
            <div class="absolute top-05 left-05 animate-spin rounded-full wh-3 bdr-4 bdr-gray-100 bdr-t-purple-400" style="animation-direction: reverse;"></div>
        </div>
        <p class="txt-sm txt-gray-600">Loading...</p>
    </div>
    <!-- Bouncing Dots -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Bouncing Dots</h3>
        <div class="flex space-x-05">
            <div class="wh-1 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
            <div class="wh-1 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
            <div class="wh-1 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
        </div>
        <p class="txt-sm txt-gray-600">Submitting...</p>
    </div>
    <!-- Pulsing Circle -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Pulse</h3>
        <div class="wh-4 bg-teal-500 rounded-full animate-pulse"></div>
        <p class="txt-sm txt-gray-600">Please wait...</p>
    </div>
    <!-- Pulse Rings -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Pulse Rings</h3>
        <div class="relative">
            <div class="wh-4 bg-emerald-500 rounded-full"></div>
            <div class="absolute top-0 left-0 wh-4 bg-emerald-400 rounded-full animate-pulse-ring"></div>
            <div class="absolute top-0 left-0 wh-4 bg-emerald-400 rounded-full animate-pulse-ring" style="animation-delay: 0.5s;"></div>
        </div>
        <p class="txt-sm txt-gray-600">Processing...</p>
    </div>
    <!-- SVG Spinner -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">SVG Spinner</h3>
        <svg class="animate-spin wh-4 txt-orange-600" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="txt-sm txt-gray-600">Uploading...</p>
    </div>
    <!-- Progress Bar -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Progress Bar</h3>
        <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-blue-600 rounded-full animate-pulse" style="width: 70%;"></div>
        </div>
        <p class="txt-sm txt-gray-600">70% Complete</p>
    </div>
    <!-- Sequential Dots -->
    <div class="bx bdr-none shadow-lg flex-centered flex-col gap">
        <h3 class="bx-title txt-1 font-semibold">Sequential Dots</h3>
        <div class="flex space-x-05 items-center h-2">
            <div class="wh-05 bg-gray-600 rounded-full opacity-0 animate-pulse" style="animation-delay: 0s;"></div>
            <div class="wh-05 bg-gray-600 rounded-full opacity-0 animate-pulse" style="animation-delay: 0.3s;"></div>
            <div class="wh-05 bg-gray-600 rounded-full opacity-0 animate-pulse" style="animation-delay: 0.6s;"></div>
        </div>
        <p class="txt-sm txt-gray-600">Loading...</p>
    </div>
</div>

## Loading Animations

<div class="loader-container bx dark">
    <div class="spinner"></div>
    <div class="loading-text">Loading<span class="dots"></span></div>
</div>

<div class="loader-container bx dark">
    <div class="loading-text">Loading<span class="dots"></span></div>
</div>

## SVG Spinners

<div class="bx  flex va-c">
    <svg class="wh-2 animate-spin" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" class="stroke-gray-400" stroke-width="12" />
        <circle cx="100" cy="100" r="80" fill="none" class="stroke-gray-100" stroke-width="12" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="188.4" />
    </svg>
    <svg class="wh-3 animate-spin" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" class="stroke-red-300" stroke-width="12" />
        <circle cx="100" cy="100" r="80" fill="none" class="stroke-blue-500" stroke-width="12" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="188.4" />
    </svg>
    <svg class="wh-4 animate-spin" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" class="stroke-yellow-300" stroke-width="12" />
        <circle cx="100" cy="100" r="80" fill="none" class="stroke-green-500" stroke-width="12" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="188.4" />
    </svg>
</div>

## Border Animations

### Spinner

```html +demo-folded
<div class="dark flex-centered gap bx">
    <div class="spinner sm"></div>
    <div class="spinner"></div>
    <div class="spinner lg"></div>
</div>
```

**Thick Spinners:**

```html +demo-folded
<div class="dark flex-centered gap bx">
    <div class="spinner sm thick"></div>
    <div class="spinner thick "></div>
    <div class="spinner lg thick"></div>
</div>
```
