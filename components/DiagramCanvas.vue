<script setup lang="ts">
import { useDiagramIds } from "./diagram/useDiagram";
defineProps<{ title: string; description: string }>();
const { titleId, descriptionId, markerId } = useDiagramIds("ai-diagram");
const arrowId = markerId("arrow");
</script>
<template>
  <figure class="ai-diagram">
    <svg
      viewBox="0 0 1000 350"
      role="img"
      :aria-labelledby="`${titleId} ${descriptionId}`"
    >
      <title :id="titleId">{{ title }}</title>
      <desc :id="descriptionId">{{ description }}</desc>
      <defs>
        <marker
          :id="arrowId"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path
            d="M 1 1 L 8 5 L 1 9"
            fill="none"
            stroke="context-stroke"
            stroke-width="1.6"
          />
        </marker>
      </defs>
      <slot :arrow="`url(#${arrowId})`" />
    </svg>
    <slot name="controls" />
  </figure>
</template>
<style scoped>
.ai-diagram {
  --diagram-accent: #087c68;
  --diagram-purple: #8541b5;
  margin: 1rem 0 0;
  width: 100%;
}
:global(.dark .ai-diagram) {
  --diagram-accent: #63dec7;
  --diagram-purple: #cc97f2;
}
svg {
  width: 100%;
  height: 18rem;
  display: block;
  overflow: visible;
}
svg :deep(text) {
  font-family: var(--fbx-font-sans);
  font-size: 22px;
  fill: var(--fbx-heading);
  text-anchor: middle;
}
svg :deep(.label) {
  font-size: 18px;
  fill: var(--fbx-text-muted);
}
svg :deep(.eyebrow) {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  fill: var(--diagram-accent);
}
svg :deep(.strong) {
  font-weight: 700;
}
svg :deep(.accent-text) {
  fill: var(--diagram-accent);
}
svg :deep(.purple-text) {
  fill: var(--diagram-purple);
}
svg :deep(.card) {
  fill: var(--fbx-panel);
  stroke: var(--fbx-border);
  stroke-width: 2;
}
svg :deep(.accent) {
  fill: color-mix(in srgb, var(--fbx-green) 10%, var(--fbx-panel));
  stroke: var(--fbx-green);
  stroke-width: 2;
}
svg :deep(.purple) {
  fill: color-mix(in srgb, var(--fbx-purple) 10%, var(--fbx-panel));
  stroke: var(--diagram-purple);
  stroke-width: 2;
}
svg :deep(.line) {
  fill: none;
  stroke: var(--fbx-text-muted);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
svg :deep(.active-line) {
  stroke: var(--fbx-green);
}
svg :deep(.token) {
  font-family: var(--fbx-font-mono);
  font-size: 22px;
}
</style>
