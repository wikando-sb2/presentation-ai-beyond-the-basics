<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";

const layers = [
  { center: 226, color: "#cc97f2" },
  { center: 154, color: "#74e8d7" },
  { center: 82, color: "#a2ef75" },
];
const foundationCells = [
  { x: 410, y: 226 },
  { x: 440, y: 217 },
  { x: 440, y: 235 },
  { x: 470, y: 226 },
];
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="Three floating glass layers: a lavender foundation, a mint model network, and lime application tiles, aligned as one AI stack."
  >
    <g class="cover-float">
      <path
        d="M285 82V238 M595 82V238"
        stroke="#74e8d7"
        stroke-opacity=".16"
        stroke-dasharray="2 7"
      />
      <g v-for="layer in layers" :key="layer.center">
        <path
          :d="`M285 ${layer.center} 440 ${layer.center + 45} 595 ${layer.center} V${layer.center + 12} L440 ${layer.center + 57} 285 ${layer.center + 12}Z`"
          :fill="`url(#${id}-edge)`"
          :stroke="layer.color"
          stroke-opacity=".4"
        />
        <path
          :d="`M285 ${layer.center} 440 ${layer.center - 45} 595 ${layer.center} 440 ${layer.center + 45}Z`"
          :fill="`url(#${id}-glass)`"
          :stroke="layer.color"
          stroke-opacity=".8"
          stroke-width="1.2"
        />
        <path
          :d="`M285 ${layer.center} 440 ${layer.center - 45} 595 ${layer.center} 440 ${layer.center + 45}Z`"
          :fill="layer.color"
          fill-opacity=".045"
        />
        <path
          :d="`M440 ${layer.center + 45}V${layer.center + 57}`"
          :stroke="layer.color"
          stroke-opacity=".4"
        />
      </g>
      <path
        v-for="cell in foundationCells"
        :key="`${cell.x}-${cell.y}`"
        :d="`M${cell.x - 18} ${cell.y} ${cell.x} ${cell.y - 5} ${cell.x + 18} ${cell.y} ${cell.x} ${cell.y + 5}Z`"
        fill="#0c2531"
        fill-opacity=".7"
        stroke="#cc97f2"
        stroke-opacity=".6"
      />
      <g stroke="#74e8d7" stroke-opacity=".6">
        <path d="M402 154 440 142 478 154 440 166Z M402 154H478 M440 142V166" />
        <circle
          cx="440"
          cy="154"
          r="10"
          fill="#74e8d7"
          :filter="`url(#${id}-glow)`"
          stroke="none"
          opacity=".45"
        />
        <circle cx="440" cy="154" r="5" :fill="`url(#${id}-core)`" />
        <circle cx="402" cy="154" r="3" fill="#74e8d7" />
        <circle cx="440" cy="142" r="3" fill="#74e8d7" />
        <circle cx="478" cy="154" r="3" fill="#74e8d7" />
        <circle cx="440" cy="166" r="3" fill="#74e8d7" />
      </g>
      <g fill="#a2ef75" fill-opacity=".16" stroke="#a2ef75" stroke-opacity=".8">
        <path
          d="M368 87 393 80 418 87 393 94Z M415 74 440 67 465 74 440 81Z M462 87 487 80 512 87 487 94Z"
        />
        <path
          d="M378 87 388 84 M425 74 435 71 M472 87 482 84"
          stroke-width="2"
        />
      </g>
    </g>
  </SectionCoverScene>
</template>
