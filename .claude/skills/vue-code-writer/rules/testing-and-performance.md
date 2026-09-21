---
name: testing-and-performance
description: Testing, accessibility, and performance review for Vue applications
metadata:
  tags: vue, testing, accessibility, performance
---

# Testing and Performance in Vue

## Test the User-Facing Boundary

Use component tests for rendering and interactions, integration tests for router and store behavior,
and end-to-end tests when full application flows matter.

## Keep Accessibility Part of Correctness

Verify labels, keyboard navigation, focus behavior, and semantic structure as part of the feature,
not as optional polish.

## Measure Before Rewriting for Speed

Performance work should follow observed slow interactions, expensive recomputation, or large payloads.
Do not micro-optimize reactive code without a concrete signal.

## Watch Reactive Churn

Unnecessary watchers, oversized stores, and repeated derived work are common sources of avoidable
front-end cost in Vue apps.

When slow paths involve large synchronous iterables, generated values, or repeated Set comparisons,
check whether iterator helpers or native Set methods simplify the code without violating the
project's browser baseline.
