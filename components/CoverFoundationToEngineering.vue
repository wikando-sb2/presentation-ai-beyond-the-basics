<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="A foundation model becomes part of a working application: the same luminous core appears first in a glass model and then integrated into a product interface."
  >
    <g class="cover-float">
      <path
        d="M 178 113 L 263 70 L 348 113 V 208 L 263 251 L 178 208 Z"
        fill="#0d292e"
      />
      <path
        d="M 178 113 L 263 70 L 348 113 L 263 156 Z"
        :fill="`url(#${id}-glass)`"
        :stroke="`url(#${id}-spectrum)`"
        stroke-width="1.5"
      />
      <path
        d="M 178 113 L 263 156 V 251 L 178 208 Z"
        :fill="`url(#${id}-glass)`"
        stroke="#cc97f2"
        stroke-opacity=".7"
      />
      <path
        d="M 263 156 L 348 113 V 208 L 263 251 Z"
        :fill="`url(#${id}-edge)`"
        stroke="#74e8d7"
        stroke-opacity=".75"
      />
      <circle
        cx="263"
        cy="168"
        r="31"
        fill="#34d5bd"
        opacity=".3"
        :filter="`url(#${id}-glow)`"
      />
      <circle cx="263" cy="168" r="19" :fill="`url(#${id}-core)`" />
      <path
        d="M 183 116 L 263 156 L 343 116 M 263 156 V 244"
        stroke="#cefff1"
        stroke-opacity=".5"
      />
    </g>

    <g transform="translate(474 77)">
      <g class="cover-float" style="--float-delay: 0.2s">
        <path
          d="M 0 0 L 24 -17 H 258 L 234 0 Z M 234 0 L 258 -17 V 157 L 234 174 Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".65"
        />
        <rect width="234" height="174" fill="#0d292e" />
        <rect
          width="234"
          height="174"
          :fill="`url(#${id}-glass)`"
          :stroke="`url(#${id}-spectrum)`"
          stroke-width="1.5"
        />
        <path d="M 0 28 H 234" stroke="#74e8d7" stroke-opacity=".35" />
        <circle
          v-for="x in [15, 26, 37]"
          :key="x"
          :cx="x"
          cy="14"
          r="2.5"
          fill="#b8d8d2"
        />
        <path d="M 191 14 H 217" stroke="#a2ef75" stroke-width="3" />

        <path
          d="M 22 75 L 65 53 L 108 75 V 123 L 65 145 L 22 123 Z"
          fill="#102b35"
        />
        <path
          d="M 22 75 L 65 53 L 108 75 L 65 97 Z M 22 75 V 123 L 65 145 V 97 Z"
          :fill="`url(#${id}-glass)`"
          stroke="#cc97f2"
          stroke-opacity=".65"
        />
        <path
          d="M 65 97 L 108 75 V 123 L 65 145 Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".7"
        />
        <circle
          cx="65"
          cy="101"
          r="27"
          fill="#34d5bd"
          opacity=".3"
          :filter="`url(#${id}-glow)`"
        />
        <circle cx="65" cy="101" r="16" :fill="`url(#${id}-core)`" />

        <rect
          x="132"
          y="56"
          width="80"
          height="32"
          rx="3"
          fill="#74e8d7"
          fill-opacity=".09"
          stroke="#74e8d7"
          stroke-opacity=".35"
        />
        <path d="M 145 72 H 194" stroke="#c2ffee" stroke-width="4" />
        <path
          d="M 145 111 H 199 M 145 133 H 183"
          stroke="#b5e7da"
          stroke-width="4"
          stroke-opacity=".65"
        />
        <circle cx="134" cy="111" r="3" fill="#a2ef75" />
        <circle cx="134" cy="133" r="3" fill="#a2ef75" />
      </g>
    </g>
  </SectionCoverScene>
</template>
