# JTB Forms

- [Input](#input)
    - [Control Groups](#control-groups)
- [Select](#select)
    - [Multi-Select](#multi-select)
- [Things to Review ---------------------------------------------](#things-to-review----------------------------------------------)
    - [Control Sizes (REVIEW)](#control-sizes-review)
    - [Theme Examples](#theme-examples)
    - [Examples](#examples)
    - [Trouble Shooting](#trouble-shooting)
        - [Inconsistent control and button height](#inconsistent-control-and-button-height)


## Input

Form controls are inline by default.

<label for="email">Email</label>
<input type="email" id="email" name="email">
<button type="button" class="btn">Submit</button>

```html +torchlight-html
<label for="email">Email</label>
<input type="email" id="email" name="email">
<button type="button" class="btn">Submit</button>
```

### Control Groups

Wrap controls in a `.frm-row` to make inputs full width and add vertical spacing. By default, groups are vertical.

<form class="bx maxw-xs">
    <div class="frm-row">
        <label for="name">Name</label>
        <input id="name" placeholder="Enter your name...">
    </div>
    <div class="frm-row">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="example@company.com">
    </div>
    <div class="frm-row">
        <button type="submit" class="btn primary">Submit</button>
    </div>
</form>

```html +torchlight-html
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

```html +torchlight-html
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


### Control Sizes (REVIEW)

<div class="flex-col gap-1">
    <div>
        <input type="text" class="xs" placeholder="x-Small">
        <button class="ml-05 btn xs"> x-Small </button>
    </div>
    <div>
        <input type="text" class="sm" placeholder="Small">
        <button class="ml-05 btn sm"> Small </button>
    </div>
    <div>
        <input type="text" placeholder="Normal">
        <button class="ml-05 btn"> Normal </button>
    </div>
    <div>
        <input type="text" class="md" placeholder="Medium">
        <button class="ml-05 btn md"> Medium </button>
    </div>
    <div>
        <input type="text" class="lg" placeholder="Large">
        <button class="ml-05 btn lg"> Large </button>
    </div>
</div>

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

### Examples

<form class="bx light">
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
            <input type="tel" id="phone" placeholder="1111-2345-6789" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}">
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

```html +torchlight-html
<form class="bx light">
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
            <input type="tel" id="phone" placeholder="1111-2345-6789" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}">
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
            I agree with the <a href="#">terms and conditions</a>
        </label>
    </div>
    <button type="submit" class="btn primary">Submit</button>
</form>
```

### Trouble Shooting

#### Inconsistent control and button height

Input and button should have the same border thickness for equal height. If you remove borders, set a fixed height.

<div>
    <input type="text" class="h-3 bdr-5">
    <button class="btn h-3">Click Me</button>
</div>

```html +torchlight-html
<input type="text" class="h-3 bdr-5">
<button class="btn h-3">Click Me</button>
```