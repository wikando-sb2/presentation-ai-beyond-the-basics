<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";

const milestones = [
  { x: 290, y: 177 },
  { x: 420, y: 127 },
  { x: 510, y: 200 },
];
</script>

<template>
  <SectionCoverScene
    label="An isometric glass planning board with a branching route and a highlighted destination"
  >
    <template #default="{ id }">
      <g class="cover-float">
        <path
          d="M170 160 445 285 720 160V172L445 297 170 172Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".22"
        />
        <path
          d="M170 160 445 55 720 160 445 285Z"
          :fill="`url(#${id}-glass)`"
          stroke="#a5eddf"
          stroke-opacity=".48"
        />
        <path
          d="M239 134 514 254M308 108 583 222M376 81 651 191M239 191 514 81M308 222 583 108M376 254 651 134"
          stroke="#b5e6df"
          stroke-opacity=".09"
        />
        <path
          d="M290 177 420 127 510 200 595 165"
          stroke="#74e8d7"
          stroke-width="8"
          stroke-opacity=".13"
          :filter="`url(#${id}-glow)`"
        />
        <path d="M420 127 515 92" stroke="#cc97f2" stroke-opacity=".4" />
        <ellipse
          cx="515"
          cy="92"
          rx="7"
          ry="3"
          stroke="#cc97f2"
          stroke-opacity=".45"
        />
        <path
          d="M290 177 420 127 510 200 595 165"
          stroke="#74e8d7"
          stroke-width="2"
        />
        <g
          v-for="milestone in milestones"
          :key="milestone.x"
          :transform="`translate(${milestone.x} ${milestone.y})`"
        >
          <ellipse cy="3" rx="18" ry="8" fill="#031619" fill-opacity=".5" />
          <path
            d="M-15-7V0A15 7 0 0 0 15 0V-7"
            :fill="`url(#${id}-edge)`"
            stroke="#74e8d7"
            stroke-opacity=".55"
          />
          <ellipse
            cy="-7"
            rx="15"
            ry="7"
            :fill="`url(#${id}-glass)`"
            stroke="#a6f5e8"
            stroke-opacity=".7"
          />
          <ellipse cy="-7" rx="4" ry="2" fill="#b4fff0" fill-opacity=".8" />
        </g>
        <g transform="translate(595 165)">
          <ellipse
            cy="2"
            rx="31"
            ry="13"
            fill="#a2ef75"
            fill-opacity=".12"
            :filter="`url(#${id}-glow)`"
          />
          <path
            d="M-21-7V0A21 9 0 0 0 21 0V-7"
            :fill="`url(#${id}-edge)`"
            stroke="#a2ef75"
            stroke-opacity=".5"
          />
          <ellipse
            cy="-7"
            rx="21"
            ry="9"
            :fill="`url(#${id}-glass)`"
            stroke="#a2ef75"
            stroke-width="1.5"
          />
          <circle cy="-23" r="15" :fill="`url(#${id}-core)`" />
          <circle cx="-4" cy="-28" r="3" fill="#f1fff9" fill-opacity=".4" />
        </g>
      </g>
    </template>
  </SectionCoverScene>
</template>
