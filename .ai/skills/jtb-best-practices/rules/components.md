# Components & Tokens

## Framework Components First

Always check whether a framework component already expresses the structure
before rebuilding it with low-level utilities.

### `bx`

Use for any bordered, padded content container:

```html +code
<!-- correct -->
<div class="bx">...</div>

<!-- wrong — rebuilding what bx already does -->
<div class="bg-white bdr rounded shadow pxy-1">...</div>
```

Sub-elements: `bx-header`, `bx-content`, `bx-footer` bleed to the box edges.
Use them for image regions, section headers, and footers within the card.

### `btn`

Use for all button-like controls. Apply theme and size as context-aware modifiers:

```html +code
<button class="btn primary">Enrol Now</button>
<button class="btn sm">Cancel</button>
```

Do not rebuild pill or button shapes with low-level utilities.

### `badge`

Use for small label/tag UI before assembling the same shape from scratch.
Check existing badge variants before adding a new one.

## Semantic Tokens

Prefer semantic utility tokens over palette utilities when they match the intent:

| Token         | Use for                         |
| ------------- | ------------------------------- |
| `txt-muted`   | Secondary or de-emphasised text |
| `txt-primary` | Brand-coloured text             |
| `bg-primary`  | Brand-coloured background       |

Reach for palette utilities (`txt-stone-600`, `bg-teal-100`) only when no
semantic token is a reasonable match.

## Local Helper Classes

When JTB cannot express a requirement, create a local helper class. Never use
inline styles — a class is visible, searchable, and signals a gap clearly.

Inline styles are only permitted if explicitly instructed by the developer.