---
name: nuxt-and-server-data
description: SSR, Nuxt-style data loading, and privileged server boundaries for Vue applications
metadata:
  tags: vue, nuxt, ssr, server-data
---

# Nuxt and Server Data Boundaries

## Keep Privileged Logic on the Server

Credentials, private tokens, and trusted data access should stay in server routes, server utilities,
or SSR-only boundaries. Do not leak them into client bundles.

## Choose the Fetching Boundary Deliberately

Fetch on the server when the page depends on the data for first render, SEO, or access control. Fetch
on the client when the interaction is user-initiated or purely local.

## Keep Data Serialization Simple

Return plain, serializable data shapes across the server-client boundary. Avoid pushing rich class
instances or privileged service objects into the client layer.

Use JSON import attributes for static bundle-time JSON when supported. Keep runtime fetches for data
that is user-specific, frequently changing, or only available behind server credentials.

## Watch Hydration Assumptions

Code that depends on browser APIs, time-sensitive output, or random values needs extra care in SSR
contexts to avoid hydration mismatches.

Before using newer JavaScript APIs in shared modules, verify support in both execution contexts.
Client code depends on the browser baseline, while server routes and SSR code depend on the deployed
Node.js runtime.
