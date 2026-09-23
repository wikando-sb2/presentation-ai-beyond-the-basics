<script setup lang="ts">
defineProps<{ running: boolean; completed: boolean; label: string }>();
defineEmits<{ play: [] }>();
</script>
<template>
  <button
    class="diagram-playback"
    :class="{ replay: completed }"
    type="button"
    :disabled="running"
    :aria-label="`${completed ? 'Replay' : 'Play'}: ${label}`"
    :aria-busy="running"
    @click.stop="$emit('play')"
    @keydown.stop
    @keyup.stop
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path class="shape" />
      <path class="arrow" />
    </svg>
    <span>{{ completed ? "Replay" : "Play" }}</span>
  </button>
</template>
<style scoped>
.diagram-playback {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 7rem;
  margin: 0.35rem auto 0;
  padding: 0.5rem 1rem;
  border: 1px solid var(--fbx-border);
  border-radius: 999px;
  background: var(--fbx-panel);
  color: var(--fbx-heading);
  font: 700 0.85rem var(--fbx-font-sans);
  cursor: pointer;
}
.diagram-playback:hover:not(:disabled) {
  border-color: var(--fbx-green);
  background: color-mix(in srgb, var(--fbx-green) 12%, var(--fbx-panel));
}
.diagram-playback:focus-visible {
  outline: 3px solid var(--fbx-green);
  outline-offset: 4px;
}
.diagram-playback:disabled {
  opacity: 0.45;
  cursor: default;
}
svg {
  width: 1.2rem;
  height: 1.2rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.shape {
  d: path(
    "M 8 4 C 8 4 16 9 20 12 C 16 15 12 17 8 20 C 8 16 8 12 8 8 C 8 6 8 5 8 4"
  );
  transition: d 550ms ease;
}
.arrow {
  d: path("M 8 4 L 8 4 L 8 4");
  transition: d 550ms ease;
}
.replay .shape {
  d: path(
    "M 4 10 C 5 6 8 4 12 4 C 16 4 20 8 20 12 C 20 16 16 20 12 20 C 8 20 5 18 4 15 C 4 15 4 15 4 15"
  );
}
.replay .arrow {
  d: path("M 4 4 L 4 10 L 10 10");
}
@media (prefers-reduced-motion: reduce) {
  path {
    transition: none;
  }
}
@media print {
  button {
    display: none;
  }
}
</style>
