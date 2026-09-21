---
name: component-design
description: Component boundaries, props, emits, and composition in Vue
metadata:
  tags: vue, components, props, emits, composition
---

# Component Design in Vue

## Keep Components Small and Intentional

Give each component one clear responsibility. Split large components when template complexity, local
state, and side effects start competing for attention.

## Prefer Explicit Public APIs

Use typed props and explicit emits instead of hidden parent-child coupling. If a component needs many
boolean switches to work, reconsider the abstraction.

## Preserve Semantic Markup

Prefer native elements and accessible markup first. Custom interaction widgets carry keyboard, focus,
and ARIA obligations that should be taken seriously.

## Compose Instead of Building Generic Wrappers

Favor a small set of purposeful components over wrapper layers that mostly proxy props without adding
clear value.
