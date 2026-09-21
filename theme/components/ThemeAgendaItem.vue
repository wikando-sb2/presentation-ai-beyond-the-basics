<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <li class="theme-agenda-item">
    <strong v-if="title">{{ title }}</strong>
    <span v-if="description">{{ description }}</span>
    <span v-if="$slots.default"><slot /></span>
  </li>
</template>

<style scoped>
.theme-agenda-item {
  position: relative;
  min-height: 3.4rem;
  margin: 0 0 0.85rem;
  padding: 0.2rem 0 0.85rem 3rem;
  border-bottom: 1px solid var(--fbx-border);
  break-inside: avoid;
  counter-increment: agenda;
}

.theme-agenda-item::before {
  content: counter(agenda, decimal-leading-zero);
  position: absolute;
  top: 0;
  left: 0;
  color: var(--fbx-green);
  font-family: var(--fbx-font-mono);
  font-size: 1rem;
  font-weight: 800;
}

.theme-agenda-item strong,
.theme-agenda-item span {
  display: block;
}

.theme-agenda-item strong {
  color: var(--fbx-heading);
  font-size: 1.05rem;
  line-height: 1.35;
}

.theme-agenda-item span {
  margin-top: 0.15rem;
  color: var(--fbx-text-muted);
  font-size: 0.9rem;
  line-height: 1.45;
}
</style>
