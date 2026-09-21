---
name: reactivity-and-script-setup
description: Reactivity, watchers, computed values, and script setup patterns in Vue 3
metadata:
  tags: vue, reactivity, script-setup, computed, watch
---

# Reactivity and `<script setup>` in Vue

## Prefer `<script setup>`

Use `<script setup>` for modern Vue components unless the project intentionally uses another style.
It keeps component code direct and makes dependencies easier to scan.

## Keep Derived State Computed

Use `computed` for values that can be derived from existing state. Do not mirror derived data into a
second mutable ref unless there is a clear synchronization reason.

## Use Watchers Deliberately

Reach for `watch` or `watchEffect` when synchronizing with external systems or async side effects, not
for routine value derivation.

## Avoid Reactive Over-Destructuring

Be careful when destructuring props, refs, and reactive objects. Preserve reactivity intentionally so
the data flow stays correct and explainable.
