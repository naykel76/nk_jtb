# Forms

## Control Sizes

```html +code +preview +collapse
<div class="flex-col gap-1">
    <div>
        <input type="text" class="sm" placeholder="Small">
        <button class="ml-05 btn sm"> Small </button>
    </div>
    <div>
        <input type="text" placeholder="Normal">
        <button class="ml-05 btn"> Normal </button>
    </div>
    <div>
        <input type="text" class="lg" placeholder="Large">
        <button class="ml-05 btn lg"> Large </button>
    </div>
</div>
```

## Other Controls

### Toggle

```html +code +preview +collapse class="bx my flex gap"
<label class="toggle">
    <input type="checkbox">
    <div></div>
    <span>Toggle Off</span>
</label>
<label class="toggle">
    <input type="checkbox" checked>
    <div></div>
    <span>Toggle On</span>
</label>
<label class="toggle">
    <input type="checkbox" disabled>
    <div></div>
    <span>Toggle Off (Disabled)</span>
</label>
<label class="toggle">
    <input type="checkbox" checked disabled>
    <div></div>
    <span>Toggle On (Disabled)</span>
</label>
```

You can position the label text inside or outside the `.toggle` container. When placed
inside, the label receives styling and automatic spacing.

```html +code +preview +collapse class="bx my flex gap"
<label class="toggle">
    <input type="checkbox" checked>
    <div></div>
    <span>Toggle</span>
</label>
<label class="toggle">
    <input type="checkbox" checked>
    <div></div>
</label>
<span>Toggle</span>
```



## Form Example

```html +code +preview +collapse
<form class="bx">
    <div class="grid md:cols-2">
        <div class="frm-row">
            <label for="first_name">First name</label>
            <input type="text" id="first_name" placeholder="Mike">
        </div>
        <div class="frm-row">
            <label for="last_name">Last name</label>
            <input type="text" id="last_name" placeholder="Dingle">
        </div>
        <div class="frm-row">
            <label for="company">Company</label>
            <input type="text" id="company" placeholder="Naykel">
        </div>
        <div class="frm-row">
            <label for="phone">Phone number</label>
            <input type="tel" id="phone" placeholder="0411 123 456" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}">
        </div>
    </div>
    <div class="frm-row">
        <label for="website">Website URL</label>
        <input type="url" id="website" placeholder="naykel.com.au">
    </div>
    <div class="frm-row">
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="mike.dingle@company.com">
    </div>
    <div class="frm-row">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="•••••••••">
    </div>
    <div class="frm-row">
        <label for="confirm_password">Confirm password</label>
        <input type="password" id="confirm_password" placeholder="•••••••••">
    </div>
    <div class="frm-row">
        <label>
            <input type="checkbox">
            I agree with the &nbsp;<a href="#">terms and conditions</a>.
        </label>
    </div>
    <button type="submit" class="btn primary">Submit</button>
</form>
```





### Control Groups

Wrap controls in a `.frm-row` to make inputs full width and add vertical spacing. By default, groups are vertical.

```html +code +preview +collapse
<div class="frm-row">
    <label for="name">Name</label>
    <input id="name" placeholder="Enter your name...">
</div>
<div class="frm-row">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="example@company.com">
</div>
```

## Select

<div class="frm-row">
    <label for="country">Select your country</label>
    <select name="country" id="country">
        <option value="AU">Australia</option>
        <option value="CA">Canada</option>
        <option value="NZ">New Zealand</option>
        <option value="UK">United Kingdom</option>
        <option value="US">United States</option>
    </select>
</div>

### Multi-Select

**Note:** When using `.frm-row` (which applies flexbox), the multi-select
`<select>` may collapse to a single line. To prevent this, set a minimum height
    on the select element (e.g., with a `min-height` utility class).

    <div class="frm-row">
        <label for="countries">Select your country</label>
        <select class="minh-8" name="countries" id="countries" multiple>
            <option selected>Choose countries</option>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="NZ">New Zealand</option>
            <option value="UK">United Kingdom</option>
        </select>
    </div>

    ```html +code +preview +collapse
    <div class="frm-row">
        <label for="countries">Select your country</label>
        <select class="minh-8" name="countries" id="countries" multiple>
            <option selected>Choose countries</option>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="NZ">New Zealand</option>
            <option value="UK">United Kingdom</option>
        </select>
    </div>
    ```


    ## Things to Review ---------------------------------------------




    ### Theme Examples

    <div class="frm-row">
        <label for="success" class="txt-green ">Your name</label>
        <input type="text" id="success" class="success-light" placeholder="Success input">
        <p class="txt-green txt-sm">Well done! Some success message.</p>
    </div>

    <div class="frm-row">
        <label for="error" class="txt-red">Your name</label>
        <input type="text" id="error" class="danger-light" placeholder="Error input">
        <p class="txt-red txt-sm">Bugger! Some error message.</p>
    </div>
















    <div class="green pxy">sdf</div>
    <section id="form-controls" class="py-3">
        <div class="container">
            <div class="txt-red txt-4">moved to JTB docs</div>
            <h2 class="title txt-3">Form Controls</h2>
            <div class="grid cols-2">
                <div id="radio-check-toggle">
                    <h5>Radio</h5>
                    <div class="space-x">
                        <label><input type="radio" name="abc">Option</label>
                        <label><input type="radio" name="abc" checked>Checked</label>
                        <label><input type="radio" name="abc" disabled>Disabled</label>
                    </div>
                    <h5>Checkbox</h5>
                    <div class="space-x">
                        <label><input type="checkbox">Option</label>
                        <label><input type="checkbox" checked>Checked</label>
                        <label><input type="checkbox" disabled>Disabled</label>
                    </div>
                    <h5>Slider</h5>
                    <div class="space-x">
                        <label class="toggle">
                            <input type="checkbox">
                            <div class="slider"></div>
                            <span>Option</span>
                        </label>
                        <label class="toggle">
                            <input type="checkbox" checked>
                            <div class="slider"></div>
                            <span>Checked</span>
                        </label>
                        <label class="toggle">
                            <input type="checkbox" disabled>
                            <div class="slider"></div>
                            <span>Disabled</span>
                        </label>
                    </div>
                </div>
                <div id="label-with-tooltip">
                    <h5 class="my">Label with Tooltip</h5>
                    <div class="flex va-c gap space-between mb-05 bdr">
                        <label> My Label </label>
                        <span x-data="{open:false}" class="relative" x-on:mouseenter="open=true"
                            x-on:mouseleave="open=false">
                            <div class="flex va-c gap-1 fw6 mt-1">
                                <svg class="txt-muted" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="absolute right-0 minw-18 z-100 bx pxy-075 mt-05 txt-sm fw4 bg-stone-50"
                                x-show="open" x-transition.duration="" style="display: none;">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae
                                perspiciatis officiis iste omnis, iure quasi, rerum minus magnam consequatur eos ut
                                aliquam aspernatur sapiente veniam! Repudiandae voluptatum eius ducimus?
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div id="file-input">
                <div class="my">
                    <input type="file" name="name">
                    <input type="text">
                </div>
                <hr>
                <label class="file">
                    <input type="file" name="name">
                    <span> Select file... </span>
                </label>
                <div>
                    <label class="file bdr">
                        <input type="file" name="file">
                        <span>Choose a file…</span>
                    </label>
                    <div class="frm-row">
                        <label class="file btn">
                            <input type="file" name="">
                            <svg class="wh-1.25 mr-075" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd"
                                    d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Choose a file...</span>
                        </label>
                    </div>
                </div>
                <div class="frm-row">
                    <label for="success" class="txt-success-light">Your name</label>
                    <input type="text" id="success" class="success-light" placeholder="Success input">
                    <p class="txt-success-light txt-sm"><span class="font-medium">Well done!</span> Some success
                        message.</p>
                </div>
                <div class="frm-row">
                    <label for="error" class="block mb-2 text-sm text-red-700 dark:text-red-500">Your
                        name</label>
                    <input type="text" id="error"
                        class="bg-red-50 bdr bdr-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:bdr-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:bdr-red-500"
                        placeholder="Error input">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh,
                            snapp!</span> Some error message.</p>
                </div>
                <div class="frm-row">
                    <div class="withAddons">
                        <input type="text">
                        <div class="trailingAddon"> Trailing </div>
                        <div class="leadingAddon"> Leading </div>
                    </div>
                </div>
                <div class="frm-row">
                    <div class="withAddons">
                        <div class="leadingAddon"> Leading </div>
                        <div class="trailingAddon"> Trailing </div>
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="pxy-5">

        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                </svg>
            </div>
            <input
                type="text"
                class="pl-10 border border-gray-300 rounded"
                placeholder="Enter something">
        </div>


        <form>
            <label for="email-address-icon" class="block">Your Email</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <svg class="txt-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </div>
                <input type="text" id="email-address-icon" class="block w-full ps-10 p-2.5" placeholder="email@example.com.au">
            </div>
        </form>