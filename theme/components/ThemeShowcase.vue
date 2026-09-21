<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div class="theme-showcase">
    <div class="theme-showcase__content">
      <span v-if="eyebrow" class="theme-showcase__eyebrow">{{ eyebrow }}</span>
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
      <slot name="content" />
    </div>
    <div class="theme-showcase__media">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.theme-showcase {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 52rem;
}

.theme-showcase__content {
  min-width: 0;
}

.theme-showcase__eyebrow {
  display: inline-flex;
  margin-bottom: 0.75rem;
  color: var(--fbx-green);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.theme-showcase__media {
  flex: 0 0 auto;
}
</style>
