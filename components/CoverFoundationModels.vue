<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";

const panels = [
  { x: 253, y: 106, color: "#cc97f2", kind: "image" },
  { x: 383, y: 70, color: "#74e8d7", kind: "text" },
  { x: 513, y: 106, color: "#a2ef75", kind: "sound" },
];
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="One luminous foundation supports image, language, and audio capabilities on a shared glass platform."
  >
    <path
      d="M 232 214 L 440 282 L 648 214 V 226 L 440 294 L 232 226 Z"
      :fill="`url(#${id}-edge)`"
      stroke="#74e8d7"
      stroke-opacity=".35"
    />
    <path d="M 232 214 L 440 126 L 648 214 L 440 282 Z" fill="#0d292e" />
    <path
      d="M 232 214 L 440 126 L 648 214 L 440 282 Z"
      :fill="`url(#${id}-glass)`"
      :stroke="`url(#${id}-spectrum)`"
      stroke-opacity=".65"
      stroke-width="1.5"
    />
    <path d="M 440 282 V 294" stroke="#74e8d7" stroke-opacity=".5" />
    <path
      d="M 440 222 L 315 197 M 440 222 V 167 M 440 222 L 565 197"
      stroke="#74e8d7"
      stroke-opacity=".45"
      stroke-width="1.5"
    />
    <path
      d="M 254 215 L 440 274 L 626 215"
      stroke="#74e8d7"
      stroke-opacity=".18"
    />
    <ellipse
      cx="440"
      cy="227"
      rx="48"
      ry="17"
      fill="#34d5bd"
      opacity=".25"
      :filter="`url(#${id}-glow)`"
    />
    <ellipse
      cx="440"
      cy="227"
      rx="36"
      ry="13"
      stroke="#74e8d7"
      stroke-opacity=".4"
    />
    <g transform="translate(440 222)">
      <g class="cover-float">
        <circle
          r="23"
          fill="#34d5bd"
          opacity=".3"
          :filter="`url(#${id}-glow)`"
        />
        <circle r="14" :fill="`url(#${id}-core)`" />
      </g>
    </g>
    <g
      v-for="panel in panels"
      :key="panel.kind"
      :transform="`translate(${panel.x} ${panel.y}) scale(1.4)`"
    >
      <g class="cover-float">
        <path
          d="M 0 0 L 9 -7 H 91 L 82 0 Z M 82 0 L 91 -7 V 57 L 82 64 Z"
          :fill="`url(#${id}-edge)`"
          :stroke="panel.color"
          stroke-opacity=".5"
        />
        <rect width="82" height="64" fill="#102b35" />
        <rect
          width="82"
          height="64"
          :fill="`url(#${id}-glass)`"
          :stroke="panel.color"
          stroke-opacity=".8"
          stroke-width="1.5"
        />
        <g :stroke="panel.color" stroke-width="2" stroke-opacity=".85">
          <g v-if="panel.kind === 'image'">
            <rect x="20" y="16" width="42" height="32" rx="2" />
            <circle cx="49" cy="25" r="3" :fill="panel.color" stroke="none" />
            <path d="M 20 42 L 33 29 L 45 41 L 52 34 L 62 44" />
          </g>
          <path
            v-else-if="panel.kind === 'text'"
            d="M 21 22 H 61 M 21 32 H 51 M 21 42 H 56"
            stroke-width="3"
          />
          <path
            v-else
            d="M 19 29 V 35 M 27 23 V 41 M 35 15 V 49 M 43 22 V 42 M 51 18 V 46 M 59 26 V 38 M 67 30 V 34"
            stroke-width="3"
          />
        </g>
      </g>
    </g>
  </SectionCoverScene>
</template>
