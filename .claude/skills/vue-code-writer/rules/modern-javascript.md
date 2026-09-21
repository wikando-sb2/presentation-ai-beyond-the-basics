---
name: modern-javascript
description: Modern JavaScript APIs in Vue and Nuxt code
metadata:
  tags: vue, javascript, es2025, es2026, frontend
---

# Modern JavaScript in Vue

Use modern JavaScript APIs when they make Vue or Nuxt code simpler and the target browser, SSR, and
tooling baselines support them. Check `package.json`, Nuxt or Vite targets, browserslist settings,
and server runtime before using ES2025 or ES2026 APIs.

## Iterables and Derived Data

Use `Iterator.from(...)` and iterator helpers for lazy transformations of DOM collections, maps,
sets, generated values, and large collections:

```typescript
const activeIds = Iterator.from(itemsById.values())
  .filter((item) => item.active)
  .map((item) => item.id)
  .toArray();
```

Keep array methods when data is already an array, Vue reactivity depends on array identity, or the
project browser baseline does not support iterator helpers.

## Sets, Maps, and Reactive State

Use Set methods for filters, selection state, permissions, and visible item calculations:

```typescript
const availableSelectedIds = selectedIds.intersection(availableIds);
const removedIds = previousIds.difference(currentIds);
```

Because Set methods return new sets, assign the result intentionally when used with refs, reactive
objects, Pinia state, or computed values.

Use `Map.getOrInsert` or `Map.getOrInsertComputed` for counters, grouping, and caches when
supported. Keep explicit `has`/`set` logic when the runtime baseline does not include upsert.

## User Search and Regexes

Use `RegExp.escape(input)` before creating regexes from search boxes, route params, or user-owned
content:

```typescript
const matcher = new RegExp(RegExp.escape(query), "iu");
```

Avoid custom regex escaping helpers for new code when the runtime provides the standard API.

## Dates, Async Data, and Modules

Use Temporal for calendar, timezone, age, recurrence, and duration logic when the app baseline or
polyfill supports it. Do not add Moment, date-fns, or Luxon to new code before checking whether
Temporal fits the requirement.

Use `Array.fromAsync` to collect async iterables in Nuxt server code or composables when supported.
Keep `for await...of` when the logic streams, short-circuits, or performs incremental side effects.

Use JSON import attributes for bundle-time JSON:

```typescript
import messages from "./messages.json" with { type: "json" };
```

Before using `Promise.try`, `Error.isError`, `Math.sumPrecise`, `Uint8Array` base64/hex helpers,
`using`, or `import defer`, verify support in both client and server execution paths.
