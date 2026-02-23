# UI Elements

## Dropdowns

```html +demo-folded
<div x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false" class="relative">
    <button x-on:click="open = ! open" class="flex items-center space-x-075 focus:outline-none">
        <span class="hidden md:block txt-sm font-medium txt-gray-700">John Doe</span>
        <div class="wh-2.5 rounded-full bg-blue-600 flex-centered txt-white font-semibold">
            JD
        </div>
        <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path x-show="open" x-transition d="m6 15 6-6 6 6" />
            <path x-show="!open" x-transition d="m6 9 6 6 6-6" />
        </svg>
    </button>
    <div x-show="open" x-transition class="dropdown">
        <ul class="menu space-y-0">
            <li class="txt-gray-700"><a href="#">Your Profile</a></li>
            <li class="txt-gray-700"><a href="#">Account Settings</a></li>
            <li class="txt-gray-700"><a href="#">Billing</a></li>
            <li class="bdr-t bdr-gray-200"><a href="#" class="txt-red-600">Sign out</a></li>
        </ul>
    </div>
</div>
```
