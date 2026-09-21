<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  count: {
    default: 0,
  },
});

const counter = ref(props.count);
</script>

<template>
  <div class="counter">
    <button
      class="counter-button"
      aria-label="Decrease counter"
      @click="counter -= 1"
    >
      -
    </button>
    <span class="counter-value">{{ counter }}</span>
    <button
      class="counter-button"
      aria-label="Increase counter"
      @click="counter += 1"
    >
      +
    </button>
  </div>
</template>

<style scoped>
.counter {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem;
  border: 1px solid var(--fbx-border);
  border-radius: 999px;
  background: var(--fbx-panel);
  box-shadow: var(--fbx-shadow-soft);
}

.counter-button {
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 999px;
  color: var(--fbx-button-purple-text);
  background: var(--fbx-gradient-purple-button);
  font: 700 1.25rem/1 var(--fbx-font-sans);
  cursor: pointer;
}

.counter-value {
  min-width: 3rem;
  color: var(--fbx-text);
  font: 700 1.35rem/1 var(--fbx-font-mono);
  text-align: center;
}
</style>
