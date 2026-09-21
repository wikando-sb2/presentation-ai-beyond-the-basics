---
name: state-management
description: Choosing between local state, Pinia, and shared stores in Vue applications
metadata:
  tags: vue, pinia, state-management, stores
---

# State Management in Vue

## Keep State Local Until Sharing Is Real

Start with component-local refs and computed values. Promote state into Pinia or another shared store
only when multiple routes or distant components genuinely depend on it.

## Preserve One Source of Truth

Avoid duplicating the same value in route params, local refs, and stores without clear ownership. Pick
one canonical home for each piece of state.

For selection, filtering, and permission state represented as sets, prefer native Set methods such
as `intersection`, `difference`, and `isDisjointFrom` when the browser baseline supports them. These
methods return new `Set` values, so assign them intentionally in refs, computed values, or stores.

## Keep Stores Domain-Oriented

Model stores around business concepts or UI domains, not around arbitrary technical buckets such as
`globalStore` or `miscStore`.

## Separate Server State from UI State

Do not mix fetched server records, optimistic mutation state, and purely visual toggles into the same
indistinct structure.
