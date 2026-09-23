<script setup lang="ts">
import { useDiagramPlayback } from "./diagram/useDiagramPlayback";
const { running, completed, staticRendering, progress, play } =
  useDiagramPlayback(6300);
const words = ["My", "favorite", "color", "is"];
const centers = [95, 285, 475, 665, 855];
</script>
<template>
  <DiagramCanvas
    title="Two ways to predict a token"
    description="An autoregressive model predicts the next token from preceding context. A masked model predicts a missing token using context on both sides. Word-sized tokens are used here for illustration."
  >
    <template #default="{ arrow }">
      <text class="eyebrow" x="20" y="25" style="text-anchor: start">
        AUTOREGRESSIVE
      </text>
      <text class="label" x="930" style="text-anchor: end" y="25">
        Only preceding context
      </text>
      <g v-for="(word, i) in words" :key="word">
        <rect
          class="card"
          :x="centers[i] - 75"
          y="52"
          width="150"
          height="58"
          rx="12"
        />
        <text class="token" :x="centers[i]" y="89">{{ word }}</text>
      </g>
      <path class="line active-line" d="M 746 81 H 774" :marker-end="arrow" />
      <rect class="accent" x="780" y="52" width="150" height="58" rx="12" />
      <text
        class="token accent-text"
        x="855"
        y="89"
        :style="{ opacity: 1 - progress(1500, 450) }"
      >
        ?
      </text>
      <text
        class="token accent-text"
        x="855"
        y="89"
        :style="{ opacity: progress(1500, 450) }"
      >
        blue
      </text>
      <path
        class="line active-line"
        d="M 855 120 V 140 H 95 V 116"
        :marker-end="arrow"
        :style="{ opacity: progress(2325, 525) }"
      />
      <text
        class="label"
        x="475"
        y="165"
        :style="{ opacity: progress(2325, 525) }"
      >
        Append, then predict again
      </text>
      <circle
        cy="81"
        :cx="746 + 28 * progress(225, 1275)"
        r="5"
        fill="var(--fbx-green)"
        :style="{ opacity: progress(0, 225) * (1 - progress(1500, 300)) }"
      />
      <text class="eyebrow" x="20" y="215" style="text-anchor: start">
        MASKED
      </text>
      <text class="label" x="930" style="text-anchor: end" y="215">
        Context on both sides
      </text>
      <g v-for="(word, i) in ['My', 'favorite', '', 'is', 'blue']" :key="i">
        <rect
          :class="i === 2 ? 'accent' : 'card'"
          :x="centers[i] - 75"
          y="242"
          width="150"
          height="58"
          rx="12"
        />
        <text v-if="i !== 2" class="token" :x="centers[i]" y="279">
          {{ word }}
        </text>
      </g>
      <text
        class="token accent-text"
        x="475"
        y="279"
        :style="{ opacity: 1 - progress(5250, 525) }"
      >
        [MASK]
      </text>
      <text
        class="token accent-text"
        x="475"
        y="279"
        :style="{ opacity: progress(5250, 525) }"
      >
        color
      </text>
      <path
        class="line active-line"
        d="M 285 306 V 326 H 445 V 306"
        :marker-end="arrow"
      />
      <path
        class="line active-line"
        d="M 855 306 V 326 H 505 V 306"
        :marker-end="arrow"
      />
      <circle
        :cy="326 - 20 * progress(4950, 300)"
        :cx="285 + 160 * progress(3600, 1350)"
        r="5"
        fill="var(--fbx-green)"
        :style="{ opacity: progress(3375, 225) * (1 - progress(5250, 300)) }"
      />
      <circle
        :cy="326 - 20 * progress(4950, 300)"
        :cx="855 - 350 * progress(3600, 1350)"
        r="5"
        fill="var(--fbx-green)"
        :style="{ opacity: progress(3375, 225) * (1 - progress(5250, 300)) }"
      />
    </template>
    <template #controls>
      <DiagramPlayback
        v-if="!staticRendering"
        :running="running"
        :completed="completed"
        label="token prediction"
        @play="play"
      />
    </template>
  </DiagramCanvas>
</template>
