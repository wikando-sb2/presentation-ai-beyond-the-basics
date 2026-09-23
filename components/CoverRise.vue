<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";

const platforms = [
  { x: 195, y: 240 },
  { x: 430, y: 200 },
  { x: 690, y: 145 },
];
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="Three ascending glass platforms show an AI core becoming a complete model and then a working application."
  >
    <g stroke-linejoin="round" stroke-linecap="round">
      <g
        v-for="platform in platforms"
        :key="platform.x"
        :transform="`translate(${platform.x} ${platform.y})`"
      >
        <path
          d="M -83 0 L 0 36 L 83 0 V 12 L 0 48 L -83 12 Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".35"
        />
        <path
          d="M -83 0 L 0 -36 L 83 0 L 0 36 Z"
          :fill="`url(#${id}-glass)`"
          :stroke="`url(#${id}-spectrum)`"
          stroke-opacity=".65"
        />
        <ellipse
          rx="45"
          ry="14"
          fill="#34d5bd"
          opacity=".15"
          :filter="`url(#${id}-glow)`"
        />
      </g>

      <g transform="translate(195 191)">
        <g class="cover-float">
          <path
            d="M -44 -26 L 0 -48 L 44 -26 V 23 L 0 45 L -44 23 Z M -44 -26 L 0 -4 L 44 -26 M 0 -4 V 45"
            stroke="#cc97f2"
            stroke-opacity=".55"
          />
          <path
            d="M 0 -48 V 1 L -44 23 M 0 1 L 44 23"
            stroke="#74e8d7"
            stroke-opacity=".25"
            stroke-dasharray="3 6"
          />
          <circle
            r="22"
            fill="#34d5bd"
            opacity=".35"
            :filter="`url(#${id}-glow)`"
          />
          <circle r="12" :fill="`url(#${id}-core)`" />
        </g>
      </g>

      <g transform="translate(430 135)">
        <g class="cover-float" style="--float-delay: 0.15s">
          <path
            d="M -56 -28 L 0 -56 L 56 -28 V 31 L 0 59 L -56 31 Z"
            fill="#0d292e"
          />
          <path
            d="M -56 -28 L 0 -56 L 56 -28 L 0 0 Z M -56 -28 V 31 L 0 59 V 0 Z"
            :fill="`url(#${id}-glass)`"
            :stroke="`url(#${id}-spectrum)`"
            stroke-opacity=".8"
          />
          <path
            d="M 0 0 L 56 -28 V 31 L 0 59 Z"
            :fill="`url(#${id}-edge)`"
            stroke="#74e8d7"
            stroke-opacity=".8"
          />
          <circle
            cy="9"
            r="24"
            fill="#34d5bd"
            opacity=".3"
            :filter="`url(#${id}-glow)`"
          />
          <circle cy="9" r="13" :fill="`url(#${id}-core)`" />
          <path
            d="M -51 -26 L 0 0 L 51 -26 M 0 0 V 54"
            stroke="#cefff1"
            stroke-opacity=".55"
          />
        </g>
      </g>

      <g transform="translate(625 37)">
        <g class="cover-float" style="--float-delay: 0.3s">
          <path
            d="M 0 0 L 15 -10 H 145 L 130 0 Z M 130 0 L 145 -10 V 85 L 130 95 Z"
            :fill="`url(#${id}-edge)`"
            stroke="#74e8d7"
            stroke-opacity=".65"
          />
          <rect width="130" height="95" fill="#0d292e" />
          <rect
            width="130"
            height="95"
            :fill="`url(#${id}-glass)`"
            :stroke="`url(#${id}-spectrum)`"
          />
          <path d="M 0 20 H 130" stroke="#74e8d7" stroke-opacity=".35" />
          <circle
            v-for="x in [11, 19, 27]"
            :key="x"
            :cx="x"
            cy="10"
            r="2"
            fill="#b8d8d2"
          />
          <rect
            x="14"
            y="34"
            width="38"
            height="46"
            rx="3"
            fill="#cc97f2"
            fill-opacity=".15"
            stroke="#cc97f2"
            stroke-opacity=".45"
          />
          <path
            d="M 67 70 L 81 57 L 94 61 L 114 41"
            stroke="#a2ef75"
            stroke-width="2"
          />
          <path d="M 67 79 H 114" stroke="#74e8d7" stroke-opacity=".3" />
          <circle cx="33" cy="57" r="9" :fill="`url(#${id}-core)`" />
          <circle cx="114" cy="41" r="3" fill="#a2ef75" />
        </g>
      </g>
    </g>
  </SectionCoverScene>
</template>
