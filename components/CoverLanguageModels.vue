<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";

const tokens = [
  { x: 112, y: 170, strokeLength: 38 },
  { x: 242, y: 157, strokeLength: 52 },
  { x: 372, y: 147, strokeLength: 32 },
  { x: 502, y: 140, strokeLength: 44 },
  { x: 632, y: 136, strokeLength: 48 },
];
const alternatives = [54, 226];
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="A sequence of glass tokens continues with one luminous token selected from three possible continuations."
  >
    <g stroke-linecap="round" stroke-linejoin="round">
      <path
        d="M 220 192 L 242 185 M 350 179 L 372 175 M 480 169 L 502 168"
        stroke="#cc97f2"
        stroke-opacity=".5"
        stroke-width="1.5"
      />
      <path
        d="M 610 162 C 640 162 624 72 655 72 M 610 162 C 640 162 624 244 655 244"
        stroke="#b8afe9"
        stroke-opacity=".22"
      />
      <path
        d="M 610 162 L 632 164"
        stroke="#74e8d7"
        stroke-width="7"
        opacity=".5"
        :filter="`url(#${id}-glow)`"
      />
      <path d="M 610 162 L 632 164" stroke="#a8ffdf" stroke-width="2" />

      <g
        v-for="y in alternatives"
        :key="y"
        :transform="`translate(655 ${y})`"
        opacity=".25"
      >
        <path
          d="M 0 0 L 12 -9 H 72 L 60 0 Z M 60 0 L 72 -9 V 26 L 60 35 Z"
          :fill="`url(#${id}-edge)`"
          stroke="#cc97f2"
        />
        <rect
          width="60"
          height="35"
          :fill="`url(#${id}-glass)`"
          stroke="#cc97f2"
        />
        <path d="M 18 18 H 42" stroke="#cc97f2" stroke-width="3" />
      </g>

      <g
        v-for="(token, index) in tokens"
        :key="token.x"
        :transform="`translate(${token.x} ${token.y})`"
      >
        <g class="cover-float" :style="{ '--float-delay': `${index * 0.12}s` }">
          <ellipse
            v-if="index === 4"
            cx="46"
            cy="33"
            rx="55"
            ry="31"
            fill="#74e8d7"
            opacity=".16"
            :filter="`url(#${id}-glow)`"
          />
          <path
            d="M 0 0 L 16 -12 H 108 L 92 0 Z M 92 0 L 108 -12 V 44 L 92 56 Z"
            :fill="`url(#${id}-edge)`"
            :stroke="index === 4 ? '#a2ef75' : '#cc97f2'"
            stroke-opacity=".6"
          />
          <rect width="92" height="56" fill="#102b35" />
          <rect
            width="92"
            height="56"
            :fill="`url(#${id}-glass)`"
            :stroke="index === 4 ? '#a8ffdf' : '#cc97f2'"
            :style="{ strokeOpacity: index === 4 ? 1 : 0.8 }"
            stroke-width="1.5"
          />
          <rect
            v-if="index === 4"
            width="92"
            height="56"
            fill="#74e8d7"
            opacity=".12"
          />
          <path
            :d="`M ${(92 - token.strokeLength) / 2} 28 h ${token.strokeLength}`"
            :stroke="index === 4 ? '#bdf4a2' : '#efdafa'"
            stroke-width="4"
            :style="{ strokeOpacity: index === 4 ? 1 : 0.75 }"
          />
        </g>
      </g>
    </g>
  </SectionCoverScene>
</template>
