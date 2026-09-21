<template>
  <p class="theme-lead">
    <slot />
  </p>
</template>

<style scoped>
.theme-lead {
  max-width: 42rem;
  margin: 0 auto 1.4rem;
  color: var(--fbx-text-muted);
  font-size: 1.35rem;
  line-height: 1.65;
}
</style>
