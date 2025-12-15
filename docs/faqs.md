# Frequently Asked Questions


<question>How can I create a container query?</question>

## How do I create responsive layouts without writing media queries?

```scss +code
@include cq-make-on-breakpoint( ( visibility: hidden ), 'invisible', $responsive-variants );

@include cq-make-on-breakpoint( ( visibility: visible ), 'visible', $responsive-variants );

@include cq-make-from-breakpoint( ( visibility: hidden ), 'invisible', $responsive-variants );

@include cq-make-from-breakpoint( ( visibility: visible ), 'visible', $responsive-variants );

@include cq-make-to-breakpoint( ( visibility: hidden ), 'invisible', remove-from-list($responsive-variants, xxl) );

@include cq-make-to-breakpoint( ( visibility: visible ), 'visible', remove-from-list($responsive-variants, xxl) );

```

```lang +code

```