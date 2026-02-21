# Forms

## Control Sizes

```html +demo-folded
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

## Control Groups

Wrap controls in a `.frm-row` to make inputs full width and add vertical spacing. By default, groups are vertical.

```html +demo-folded
<div class="frm-row">
    <label for="name">Name</label>
    <input id="name" placeholder="Enter your name...">
</div>
<div class="frm-row">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="example@company.com">
</div>
```

## Toggle

```html +demo-folded class="bx my flex gap"
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

```html +demo-folded class="bx my flex gap"
<label class="toggle">
    <input type="checkbox" checked>
    <div></div>
    <span>Toggle</span>
</label>

<label class="toggle">
    <input type="checkbox" wire:model="form.published">
    <div></div>
    <span>Published</span>
</label>

<label class="toggle">
    <input type="checkbox" checked>
    <div></div>
</label>
<span>Toggle</span>
```

## Radio

```html +demo-folded class="bx flex gap"
<label><input type="radio" name="default-radio">Option</label>
<label><input type="radio" name="default-radio" checked>Checked</label>
<label><input type="radio" name="default-radio" disabled>Disabled</label>
```

### Radio Group

You can group related radio buttons using a fieldset for better accessibility and structure.

```html +demo-folded class="bx"
<fieldset class="frm-row space-y-05">
    <legend>Select your favorite color</legend>
    <label><input type="radio" name="colors" value="red">Red</label>
    <label><input type="radio" name="colors" value="green">Green</label>
    <label><input type="radio" name="colors" value="blue" checked>Blue</label>
    <label><input type="radio" name="colors" value="yellow" disabled>Yellow (Disabled)</label>
</fieldset>
```

```html +demo-folded class="bx"
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
```

## Checkbox

```html +demo-folded class="bx flex gap"
<label><input type="checkbox">Option</label>
<label><input type="checkbox" checked>Checked</label>
<label><input type="checkbox" disabled>Disabled</label>
```

### Checkbox Group

You can group related checkboxes using a fieldset for better accessibility and structure.

```html +demo-folded class="bx"
<fieldset class="frm-row space-y-05">
    <legend>Select your interests</legend>
    <label><input type="checkbox" name="interests" value="sports">Sports</label>
    <label><input type="checkbox" name="interests" value="music" checked>Music</label>
    <label><input type="checkbox" name="interests" value="travel">Travel</label>
    <label><input type="checkbox" name="interests" value="reading" disabled>Reading (Disabled)</label>
</fieldset>
```

## Form Example

```html +demo-folded
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

## File Input (review)

```html +demo-folded
<div class="frm-row">
    <label class="file btn">
        <input type="file" name="">
        <svg class="wh-1.25 mr-075" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
        </svg>
        <span>Choose a file...</span>
    </label>
</div>   
```

## Input Addons (review)

```html +demo-folded
<div class="frm-row">
    <div class="with-addons">
        <div class="leading-addon"> Leading </div>
        <div class="trailing-addon"> Trailing </div>
        <input type="text">
    </div>
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

```html +demo-folded
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

### Theme Examples

```html +demo-folded
<div class="frm-row">
    <label for="success" class="txt-green ">Your name</label>
    <input type="text" id="success" class="success-light" placeholder="Success input">
    <p class="txt-green txt-sm">Well done! Some success message.</p>
</div>
```

```html +demo-folded
<div class="frm-row">
    <label for="error" class="txt-red">Your name</label>
    <input type="text" id="error" class="danger-light" placeholder="Error input">
    <p class="txt-red txt-sm">Bugger! Some error message.</p>
</div>
```
