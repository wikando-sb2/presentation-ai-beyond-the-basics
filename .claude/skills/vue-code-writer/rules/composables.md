---
name: composables
description: Extracting reusable reactive logic into Vue composables
metadata:
  tags: vue, composables, reuse, architecture
---

# Composables in Vue

## Extract Behavior, Not Templates

Create composables for reusable reactive logic, async workflows, and shared coordination. Keep view
markup and DOM-specific behavior in components unless reuse clearly demands otherwise.

## Keep the Interface Small

Return a focused set of refs, computed values, and actions. Large return objects usually signal an
unclear boundary.

## Make Ownership Clear

Document whether the composable creates state per call, shares singleton state, or wraps a store.
Hidden singleton behavior can cause surprising cross-view coupling.

## Isolate Side Effects

Network calls, subscriptions, and timers inside composables need explicit lifecycle management and
error handling.

Use `Array.fromAsync` inside composables only when the goal is to collect an async iterable and the
runtime supports it. Keep `for await...of` for streaming, cancellation, short-circuiting, or
incremental side effects.

Use `RegExp.escape` before building regexes from user search text or route-derived input when the
runtime supports it. Keep fallback helpers local and tested when support is below the project
baseline.
