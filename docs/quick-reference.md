# Quick Reference

A at-a-glance reference for available values and magic class patterns.

## Spacing Scale

Used by `m-*`, `p-*`, `mx-*`, `my-*`, `px-*`, `py-*`, `mt-*`, `mb-*`, `pt-*`, `pb-*` etc.

| Class suffix | Value |
|---|---|
| `0` | 0 |
| `0125` | 0.125rem |
| `025` | 0.25rem |
| `0375` | 0.375rem |
| `05` | 0.5rem |
| `0625` | 0.625rem |
| `075` | 0.75rem |
| `0875` | 0.875rem |
| `1` | 1rem |
| `1.25` | 1.25rem |
| `1.5` | 1.5rem |
| `1.75` | 1.75rem |
| `2` | 2rem |
| `2.25` | 2.25rem |
| `2.5` | 2.5rem |
| `2.75` | 2.75rem |
| `3` | 3rem |
| `4` | 4rem |
| `5` | 5rem |
| `base` | 1.25rem (default) |
| `auto` | auto (margin only) |

## Gap Scale

Used by `gap-*`, `gap-x-*`, `gap-y-*`.

| Class suffix | Value |
|---|---|
| `0` | 0 |
| `025` | 0.25rem |
| `05` | 0.5rem |
| `075` | 0.75rem |
| `1` | 1rem |
| `1.25` | 1.25rem |
| `1.5` | 1.5rem |
| `2` | 2rem |
| `3` | 3rem |
| `4` | 4rem |
| `5` | 5rem |
| `sm` | 0.75rem |
| `base` | 1.25rem (default) |
| `lg` | 2rem |

## Magic Classes

Magic classes apply different values at each breakpoint automatically. Values step down from large screens to small.

### Padding Y

| Class | xxl | lg | md | sm |
|---|---|---|---|---|
| `py-5-3-2` | 5rem | 3rem | — | 2rem |
| `py-5-3-2-2` | 5rem | 3rem | 2rem | 2rem |
| `py-3-2-1` | 3rem | 2rem | — | 1rem |

### Margin Y

| Class | xxl | lg | md | sm |
|---|---|---|---|---|
| `my-5-3-2` | 5rem | 3rem | — | 2rem |
| `my-3-2-1` | 3rem | 2rem | — | 1rem |

### Gap

| Class | xxl | lg | md | sm |
|---|---|---|---|---|
| `gap-5-3-2` | 5rem | 3rem | — | 2rem |
| `gap-5-3` | 5rem | — | 3rem | — |
| `gap-4-2` | 4rem | — | 2rem | — |
| `gap-3-1` | 3rem | — | 1rem | — |

### Grid Columns

| Class | xxl | lg | md | sm |
|---|---|---|---|---|
| `cols-4-2-1` | 4 | 2 | — | 1 |
| `cols-4-3-2-1` | 4 | 3 | 2 | 1 |
| `cols-3-2-1` | 3 | 2 | — | 1 |
| `cols-3-1-1` | 3 | 1 | — | 1 |
