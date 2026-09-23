<script setup lang="ts">
import { useId } from "vue";
import { useIsSlideActive } from "@slidev/client";

defineProps<{ label: string }>();
const id = `section-cover-${useId()}`;
const isSlideActive = useIsSlideActive();
</script>

<template>
  <div class="section-artwork" :class="{ 'motion-paused': !isSlideActive }">
    <svg
      viewBox="0 0 880 330"
      fill="none"
      role="img"
      :aria-labelledby="`${id}-title`"
      focusable="false"
    >
      <title :id="`${id}-title`">{{ label }}</title>
      <defs>
        <linearGradient :id="`${id}-glass`" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#cc97f2" stop-opacity=".28" />
          <stop offset=".5" stop-color="#74e8d7" stop-opacity=".15" />
          <stop offset="1" stop-color="#34d5bd" stop-opacity=".04" />
        </linearGradient>
        <linearGradient :id="`${id}-edge`" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#74e8d7" stop-opacity=".35" />
          <stop offset="1" stop-color="#071b21" stop-opacity=".8" />
        </linearGradient>
        <linearGradient :id="`${id}-spectrum`" x1="0" y1="0" x2="1" y2=".7">
          <stop stop-color="#cc97f2" />
          <stop offset=".6" stop-color="#74e8d7" />
          <stop offset="1" stop-color="#a2ef75" />
        </linearGradient>
        <radialGradient :id="`${id}-floor`">
          <stop stop-color="#34d5bd" stop-opacity=".24" />
          <stop offset="1" stop-color="#34d5bd" stop-opacity="0" />
        </radialGradient>
        <radialGradient :id="`${id}-core`" cx=".3" cy=".25" r=".75">
          <stop stop-color="#f1fff9" />
          <stop offset=".3" stop-color="#a8ffdf" />
          <stop offset=".7" stop-color="#34d5bd" />
          <stop offset="1" stop-color="#126a65" />
        </radialGradient>
        <filter
          :id="`${id}-glow`"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <ellipse cx="440" cy="272" rx="365" ry="45" :fill="`url(#${id}-floor)`" />
      <g stroke-linecap="round" stroke-linejoin="round">
        <slot :id="id" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.section-artwork {
  width: 100%;
  margin-top: 1.5rem;
}
svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.section-artwork :deep(.cover-float) {
  animation: section-cover-settle calc(4.8s - var(--float-delay, 0s))
    ease-in-out var(--float-delay, 0s) both;
}
.motion-paused :deep(.cover-float) {
  animation: none;
}
@keyframes section-cover-settle {
  0% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(var(--float-distance, -4px));
  }
  100% {
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce), print {
  .section-artwork :deep(.cover-float) {
    animation: none;
  }
}
</style>
