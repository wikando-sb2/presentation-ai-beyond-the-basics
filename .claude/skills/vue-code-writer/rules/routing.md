---
name: routing
description: Vue Router navigation, route params, and view composition
metadata:
  tags: vue, vue-router, routing, navigation
---

# Routing in Vue

## Let the URL Carry Navigation State

If a view can be linked, refreshed, or shared, important state often belongs in the route rather than
in ephemeral component state alone.

## Validate Route Inputs

Treat route params and query values as external input. Parse and validate them before deeper use,
especially when they control fetching or mutations.

## Keep Route Components Coordinating, Not Owning Everything

Use route-level components to compose views and data flow, then push focused behavior into child
components or composables.

## Handle Navigation Failures Intentionally

Consider loading, missing-resource, unauthorized, and malformed-route states as part of the route
contract.
