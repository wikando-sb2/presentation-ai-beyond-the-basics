---
name: vue-code-writer
description:
  Vue 3 and Nuxt-oriented implementation workflow for `.vue` components, script-setup
  components,
  composables, Pinia stores, Vue Router, forms, and server-data boundaries. Use when building or
  refactoring Vue components, state flows, routing, or reactive front-end logic.
---

# Vue Code Writer

## When to Use

Use this skill whenever working on Vue 3, Vue Router, Pinia, or Nuxt-style applications built around
reactive components and composables.

Check the project's Vue version, router and store setup, SSR or Nuxt usage, and test tooling before
assuming a specific pattern.

## Common Workflows

**New component or feature flow**
Define the component boundary -> use `<script setup>` and typed props where appropriate -> keep
reactive state local until sharing is justified -> test the interaction path. See
[rules/component-design.md](rules/component-design.md) and
[rules/reactivity-and-script-setup.md](rules/reactivity-and-script-setup.md).

**Shared logic across views**
Extract the stateful behavior into a composable -> keep the interface explicit -> avoid mixing view
rendering with reusable logic. See [rules/composables.md](rules/composables.md).

**App state or routing change**
Choose local state, Pinia, route state, or server data based on ownership -> avoid mirrored sources of
truth -> keep navigation and data fetching predictable. See
[rules/state-management.md](rules/state-management.md) and [rules/routing.md](rules/routing.md).

**Modern JavaScript in Vue**
Check client, SSR, and tooling baselines before using ES2025/ES2026 APIs -> prefer native iterator,
Set, regex, date, async-collection, and module APIs where supported -> keep fallback logic explicit.
See [rules/modern-javascript.md](rules/modern-javascript.md).

## How to Use

Read individual rule files for detailed guidance and examples:

- [rules/component-design.md](rules/component-design.md) - Component boundaries, props, emits, and
  composition
- [rules/reactivity-and-script-setup.md](rules/reactivity-and-script-setup.md) - Reactivity,
  watchers, computed values, and `<script setup>`
- [rules/composables.md](rules/composables.md) - Extracting reusable reactive logic safely
- [rules/state-management.md](rules/state-management.md) - Local state versus Pinia and shared stores
- [rules/routing.md](rules/routing.md) - Vue Router navigation, route params, and view composition
- [rules/forms-and-v-model.md](rules/forms-and-v-model.md) - Form state, validation, and `v-model`
- [rules/nuxt-and-server-data.md](rules/nuxt-and-server-data.md) - SSR, server data, and privileged
  boundaries
- [rules/testing-and-performance.md](rules/testing-and-performance.md) - Testing, accessibility, and
  performance checks
- [rules/modern-javascript.md](rules/modern-javascript.md) - Modern JavaScript APIs in Vue and Nuxt
  code
