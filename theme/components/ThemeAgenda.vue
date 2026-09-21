<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    columns?: number | string;
  }>(),
  {
    columns: 2,
  },
);

const columnCount = Math.max(1, Math.min(Number(props.columns) || 1, 2));
</script>

<template>
  <ol class="theme-agenda" :style="{ '--theme-agenda-columns': columnCount }">
    <slot />
  </ol>
</template>

<style scoped>
.theme-agenda {
  column-count: var(--theme-agenda-columns);
  column-gap: 2.5rem;
  margin: 1.6rem 0 0;
  padding: 0;
  list-style: none;
  counter-reset: agenda;
}

@media (max-width: 900px) {
  .theme-agenda {
    column-count: 1;
  }
}
</style>
