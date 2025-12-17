# UI Elements

## Buttons

### Menu Button

```html +code +preview +collapse
<button class="btn primary pxy-05">
    <svg class="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
</button>
```


## Dropdowns

```html +code +preview +collapse
<div class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
    <button x-on:click="open = ! open" class="btn primary">
        <span> Dropdown </span>
        <svg class="wh-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path x-show="open" x-transition d="m6 15 6-6 6 6" />
            <path x-show="!open" x-transition d="m6 9 6 6 6-6" />
        </svg>
    </button>
    <div x-show="open" x-transition class="dropdown">
        <ul class="menu">
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Books</a></li>
        </ul>
    </div>
</div>
```

```html +code +preview +collapse
<div class="relative" x-data="{ open: false }" x-on:click.outside="open = false" x-on:keydown.escape="open = false">
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
```

## Navbars

```html +code-blade +preview
<x-gt-markdown path="jtb\ui-examples\navbar" />
```



## Radio Buttons

```html +code +preview +collapse
<div class="bx">
    <fieldset>
        <legend class="font-semibold txt-gray-900">Choose your plan</legend>
        <div class="frm-row">
            <input type="radio" id="basic" name="plan" value="basic">
            <label for="basic">
                <div class="txt-sm txt-gray-900">Basic</div>
                <div class="txt-xs txt-gray-500 mt-025">Perfect for personal projects</div>
            </label>
        </div>
        <div class="frm-row">
            <input type="radio" id="pro" name="plan" value="pro" checked>
            <label for="pro">
                <div class="txt-sm txt-gray-900">Pro</div>
                <div class="txt-xs txt-gray-500 mt-025">Best for professionals</div>
            </label>
        </div>
        <div class="frm-row">
            <input type="radio" id="enterprise" name="plan" value="enterprise">
            <label for="enterprise">
                <div class="txt-sm txt-gray-900">Enterprise</div>
                <div class="txt-xs txt-gray-500 mt-025">For large organizations</div>
            </label>
        </div>
    </fieldset>
</div>
```


```html +code +preview
   
```