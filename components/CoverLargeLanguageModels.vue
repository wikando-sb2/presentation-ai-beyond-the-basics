<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";

const nodes = Array.from({ length: 27 }, (_, index) => {
  const i = index % 3;
  const j = Math.floor(index / 3) % 3;
  const k = Math.floor(index / 9);
  return { i, j, k, x: 445 + (i - j) * 25, y: 154 + (i + j) * 12 - k * 30 };
});
const connections = nodes.flatMap((start, startIndex) =>
  nodes.flatMap((end, endIndex) =>
    endIndex > startIndex &&
    Math.abs(start.i - end.i) +
      Math.abs(start.j - end.j) +
      Math.abs(start.k - end.k) ===
      1
      ? [{ start, end, key: `${startIndex}-${endIndex}` }]
      : [],
  ),
);
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="A large translucent model contains a three-dimensional lattice of connected parameters, with input tokens and a generated output."
  >
    <g class="cover-float">
      <path
        d="M445 42 575 106 445 172 315 106Z"
        :fill="`url(#${id}-glass)`"
        stroke="#cc97f2"
        stroke-opacity=".65"
      />
      <path
        d="M315 106 445 172 445 296 315 232Z"
        :fill="`url(#${id}-glass)`"
        stroke="#74e8d7"
        stroke-opacity=".45"
      />
      <path
        d="M445 172 575 106 575 232 445 296Z"
        :fill="`url(#${id}-edge)`"
        stroke="#74e8d7"
        stroke-opacity=".55"
      />
      <path
        d="M315 232 445 166 575 232M445 42V166"
        stroke="#74e8d7"
        stroke-opacity=".12"
      />
      <g stroke="#a8ffdf" stroke-opacity=".24">
        <line
          v-for="connection in connections"
          :key="connection.key"
          :x1="connection.start.x"
          :y1="connection.start.y"
          :x2="connection.end.x"
          :y2="connection.end.y"
        />
      </g>
      <circle
        cx="445"
        cy="146"
        r="23"
        fill="#74e8d7"
        opacity=".2"
        :filter="`url(#${id}-glow)`"
      />
      <circle
        v-for="(node, index) in nodes"
        :key="index"
        :cx="node.x"
        :cy="node.y"
        :r="index % 7 === 0 ? 3.6 : 2.3"
        :fill="index % 7 === 0 ? '#a2ef75' : '#a8ffdf'"
        :style="{ opacity: index % 7 === 0 ? 1 : 0.65 }"
      />
      <path
        d="M445 42 575 106 575 232 445 296"
        stroke="#a8ffdf"
        stroke-opacity=".35"
      />
    </g>
    <g transform="translate(156 164)">
      <g class="cover-float" style="--float-distance: -2px">
        <path
          d="M0 20 40 0 80 20 40 40Z"
          :fill="`url(#${id}-glass)`"
          stroke="#cc97f2"
          stroke-opacity=".7"
        />
        <path
          d="M0 20V31L40 51 80 31V20L40 40Z"
          fill="#cc97f2"
          fill-opacity=".1"
          stroke="#cc97f2"
          stroke-opacity=".35"
        />
        <path
          d="M19 64 59 44 99 64 59 84Z"
          :fill="`url(#${id}-glass)`"
          stroke="#cc97f2"
          stroke-opacity=".55"
        />
        <path
          d="M19 64V75L59 95 99 75V64L59 84Z"
          fill="#cc97f2"
          fill-opacity=".08"
          stroke="#cc97f2"
          stroke-opacity=".3"
        />
      </g>
    </g>
    <g transform="translate(641 183)">
      <g class="cover-float" style="--float-distance: -3px">
        <path
          d="M0 25 49 0 98 25 49 50Z"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".7"
        />
        <path
          d="M0 25V39L49 64 98 39V25L49 50Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".45"
        />
        <circle cx="49" cy="25" r="5" fill="#a2ef75" />
      </g>
    </g>
  </SectionCoverScene>
</template>
