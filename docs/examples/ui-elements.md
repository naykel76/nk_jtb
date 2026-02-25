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

## Buttons & Inputs

```html +demo-folded
<div class="space-y">
    <div class="space-x-05">
        <button class="btn primary xs">XS Button</button> <input class="xs" type="text" placeholder="XS input" />
    </div>
    <div class="space-x-05">
        <button class="btn primary sm">SM Button</button><input class="sm" type="text" placeholder="SM input" />
    </div>
    <div class="space-x-05">
        <button class="btn primary md">MD Button</button><input class="md" type="text" placeholder="MD input" />
    </div>
    <div class="space-x-05">
        <button class="btn primary lg">LG Button</button><input class="lg" type="text" placeholder="LG input" />
    </div>
    <div class="space-x-05">
        <button class="btn primary xl">XL Button</button><input class="xl" type="text" placeholder="XL input" />
    </div>
</div>
```

## Navbar

```html +demo-folded

<nav class="navbar shadow-sm bdr-b bdr-gray-200">
    <div class="container">
        <!-- Logo and Menu-->
        <div class="flex items-center">
            <div class="font-bold txt-blue-600 txt-2">MyBrand</div>
            <ul class="menu mx-2 to-md:hidden">
                <li class="mt-0"> <a href="#"> Home </a> </li>
                <li class="mt-0"> <a href="#"> About </a> </li>
                <li class="mt-0 relative" x-data="{ open: false }" x-on:click.outside="open = false"
                    x-on:keydown.escape="open = false">
                    <button x-on:click="open = ! open">
                        <span> Products </span>
                        <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                            stroke-width="1.5" viewBox="0 0 24 24">
                            <path x-show="open" x-transition d="m6 15 6-6 6 6" />
                            <path x-show="!open" x-transition d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    <div x-show="open" x-transition class="dropdown">
                        <ul class="mxy-0">
                            <li><a href="#" class="menu-item">Electronics</a></li>
                            <li><a href="#" class="menu-item">Clothing</a></li>
                            <li><a href="#" class="menu-item">Books</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- User Dropdown -->
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
                <ul class="menu">
                    <li class="txt-gray-700"><a href="#">Your Profile</a></li>
                    <li class="txt-gray-700"><a href="#">Account Settings</a></li>
                    <li class="txt-gray-700"><a href="#">Billing</a></li>
                    <li class="bdr-t bdr-gray-200"><a href="#" class="txt-red-600">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
```
