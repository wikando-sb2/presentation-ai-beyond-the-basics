<template>
  <div class="theme-metric-stack">
    <slot />
  </div>
</template>

<style scoped>
.theme-metric-stack {
  display: grid;
  gap: 0.9rem;
  counter-reset: metric;
}
</style>
