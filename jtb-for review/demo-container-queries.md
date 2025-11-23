<style> body { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); } </style>

# Container Queries Demo

<p class="lead"> Container queries let elements respond to their <strong>container's size</strong> instead of the viewport size. <strong>Drag the bottom-right corner</strong> of the container below to see the card layout change! </p>

<div class="resizable-container bx bdr-3 bdr-dashed bdr-blue-500">
    <div class="bx">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam repudiandae aperiam suscipit officiis aut. Tempore molestiae beatae, quas illo animi laudantium id iste quam cum exercitationem modi magni placeat doloremque!
    </div>
</div>

<h2>How Container Queries Work</h2>

### 1. Define a Container

```css +code
.resizable-container {
    container-type: inline-size;    /* Query based on width */
    container-name: demo-container; /* Optional name */
}
```

- `container-type: inline-size` - Makes this a container that can be queried based on its width
- `container-name` - Optional name to target specific containers

### 2. Write Container Queries

```css +code
/* Small: vertical layout */
@container demo-container (max-width: 400px) {
    .card-image { height: 150px; }
}

/* Medium: horizontal with small image */
@container demo-container (min-width: 400px) and (max-width: 600px) {
    .card {
        display: grid;
        grid-template-columns: 150px 1fr;
    }
}

/* Large: horizontal with big image */
@container demo-container (min-width: 600px) {
.card {
    display: grid;
        grid-template-columns: 250px 1fr;
    }
}
```



### 3. Container Type Options
 
- `inline-size` - Query based on width (most common)
- `size` - Query based on both width and height
- `normal` - Not a query container