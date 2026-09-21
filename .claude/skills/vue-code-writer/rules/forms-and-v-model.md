---
name: forms-and-v-model
description: Form state, validation, and v-model design in Vue
metadata:
  tags: vue, forms, v-model, validation
---

# Forms and `v-model` in Vue

## Keep Form State Predictable

Model form fields explicitly and keep validation and submission state close to the form boundary. Do
not let the same input state drift across many unrelated refs.

## Use `v-model` Intentionally

`v-model` is convenient for straightforward data binding, but it should not hide complex write
semantics. For richer interactions, explicit props and emits are often clearer.

## Separate Validation from Submission

Differentiate invalid input, pending submission, and server rejection. Each state deserves explicit UI
feedback.

## Avoid Overloading Reusable Inputs

Reusable field components should expose a clear contract. If a field component needs many special
cases, it may be solving too many forms at once.
