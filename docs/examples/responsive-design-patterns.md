# Responsive Design Patterns

These examples use container queries so you can see responsive breakpoints in
action without resizing your browser window. We use invisible rather than hidden
so elements retain their space as the container shrinks — in a real project
you'd use hidden to remove them from the flow entirely.

## Show/Hide Pattern

The Show/Hide pattern displays one element while hiding another based on screen
or container width.

By combining `from` and `to` prefixes, you define explicit visibility ranges
instead of relying on default state overrides. Each element clearly states where
it exists.

A common example is navigation: the full menu appears on larger screens, while a
burger icon appears on smaller screens.

### Hide/Hide Pattern

```html +code
<!-- Visible only below md -->
<div class="to-md:hidden"> </div>

<!-- Visible only at md and up -->
<div class="md:hidden"> </div>
```

<!-- Container Query -->
<div class="resizable-container bx bdr-3 bdr-dashed bdr-gray-500">
    <div class="grid gap cols-2 tac -space-x-px">
        <div class="bdr-2 bdr-teal-700">
            <div class="py px-025 teal cq-to-sm:invisible">
                <code class="txt-white">NAV</code>
            </div>
        </div>
        <div class="bdr-2 bdr-blue-700">
            <div class="py px-025 blue cq-sm:invisible">
                <code class="txt-white">BURGER</code>
            </div>
        </div>
    </div>
</div>

<!-- Media Query -->
<div class="bx bdr-3 bdr-gray-500">
    <div class="grid gap cols-2 tac -space-x-px">
        <div class="bdr-2 bdr-teal-700">
            <div class="py px-025 teal to-md:hidden">
                <code class="txt-white">NAV</code>
            </div>
        </div>
        <div class="bdr-2 bdr-blue-700">
            <div class="py px-025 blue md:hidden">
                <code class="txt-white">BURGER</code>
            </div>
        </div>
    </div>
</div>

```html +code
<!-- Visible only below md -->
<div class="to-md:block">...</div>

<!-- Mobile only (explicit window) -->
<div class="block md:hidden">...</div>
```
