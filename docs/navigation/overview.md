# Navigation

<!-- not sure i like this explanation, i am thinking we need to explain there is some magic  -->
Navigation in JTB uses semantic HTML structure: `<nav>` as the container, `<ul>` as the menu list.

## Basic Structure

```html +code
<nav>
    <ul>
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```

This structure works for all navigation patterns—sidebars, navbars, dropdowns.

## Styling Options

Add `.menu` class for automatic styling, or use utility classes for custom control.

[Then show examples]

- Adding the `menu` class makes nav lists context-aware, adapting their layout and styling
  based on where they're used (sidebars, dropdowns, navbars).

## Basic Navigation With Menu Class

### Vertical Menu (default)

```html +code +preview +collapse class="bx"
<nav>
    <ul class="menu">
        <li> <a class="active" href="#"> Dashboard </a> </li>
        <li> <a href="#"> Account </a> </li>
        <li> <a href="#"> Projects </a> </li>
        <li> <a href="#"> Calendar </a> </li>
        <li> <a href="#"> Documentation </a> </li>
    </ul>
</nav>
```

---

### Horizontal Menu (navbar)

```html +code +preview +collapse class="bx"
<nav class="navbar">
    <ul class="menu space-y-0">
        <li> <a class=" active" href="#"> Dashboard </a> </li>
        <li> <a href="#"> Account </a> </li>
        <li> <a href="#"> Projects </a> </li>
        <li> <a href="#"> Calendar </a> </li>
        <li> <a href="#"> Documentation </a> </li>
    </ul>
</nav>   
```