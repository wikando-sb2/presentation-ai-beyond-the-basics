<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="A luminous model core connects storage, context, routing, and an application on a glass platform"
  >
    <path
      d="M160 196 440 96 720 196 440 296Z"
      :fill="`url(#${id}-glass)`"
      stroke="#74e8d7"
      stroke-opacity=".24"
    />
    <path
      d="M160 196V204L440 304 720 204V196L440 296Z"
      :fill="`url(#${id}-edge)`"
      stroke="#74e8d7"
      stroke-opacity=".15"
    />
    <g stroke-width="1.5" stroke-opacity=".42">
      <path d="M285 203 330 219 380 201" stroke="#cc97f2" />
      <path d="M350 140 376 150" stroke="#cc97f2" />
      <path d="M579 203 548 214 503 197" stroke="#74e8d7" />
      <path d="M440 224 415 233 470 253 485 248" stroke="#a2ef75" />
    </g>
    <g transform="translate(235 165)">
      <g class="cover-float" style="--float-distance: -3px">
        <ellipse
          cy="30"
          rx="42"
          ry="15"
          fill="#cc97f2"
          fill-opacity=".1"
          :filter="`url(#${id}-glow)`"
        />
        <path
          d="M-35-25V22C-35 42 35 42 35 22V-25"
          :fill="`url(#${id}-glass)`"
          stroke="#cc97f2"
          stroke-opacity=".65"
        />
        <ellipse
          cy="-25"
          rx="35"
          ry="13"
          fill="#cc97f2"
          fill-opacity=".16"
          stroke="#dec2f4"
          stroke-opacity=".85"
        />
        <path
          d="M-35-10C-35 8 35 8 35-10M-35 6C-35 24 35 24 35 6"
          stroke="#cc97f2"
          stroke-opacity=".35"
        />
        <ellipse cy="-25" rx="18" ry="6" stroke="#dec2f4" stroke-opacity=".3" />
      </g>
    </g>
    <g transform="translate(340 90)">
      <g class="cover-float" style="--float-distance: -5px">
        <path
          d="M-35-5 13-23 40-13 40 22-8 40-35 30Z"
          :fill="`url(#${id}-edge)`"
          stroke="#cc97f2"
          stroke-opacity=".4"
        />
        <path
          d="M-35-5 13-23 40-13-8 5Z"
          :fill="`url(#${id}-glass)`"
          stroke="#dec2f4"
          stroke-opacity=".7"
        />
        <path
          d="M-35-5-8 5V40M-8 5 40-13"
          stroke="#cc97f2"
          stroke-opacity=".5"
        />
        <path
          d="M1 13 28 3M1 22 19 15"
          stroke="#dec2f4"
          stroke-opacity=".75"
          stroke-width="2"
        />
      </g>
    </g>
    <g transform="translate(440 145)">
      <g class="cover-float">
        <ellipse
          cy="62"
          rx="58"
          ry="22"
          fill="#34d5bd"
          fill-opacity=".18"
          :filter="`url(#${id}-glow)`"
        />
        <path
          d="M-48-25 0-44 48-25V43L0 62-48 43Z"
          :fill="`url(#${id}-glass)`"
          stroke="#a5eddf"
          stroke-opacity=".8"
        />
        <path
          d="M-48-25 0-6 48-25M0-6V62"
          stroke="#b4fff0"
          stroke-opacity=".5"
        />
        <circle cy="10" r="21" :fill="`url(#${id}-core)`" />
        <circle cy="10" r="26" stroke="#74e8d7" stroke-opacity=".3" />
        <circle cx="-6" cy="3" r="4" fill="#f1fff9" fill-opacity=".6" />
        <path
          d="M-39 30V-11L-22-5M10 51 39 39V21"
          stroke="#b4fff0"
          stroke-opacity=".45"
        />
      </g>
    </g>
    <g transform="translate(630 165)">
      <g class="cover-float" style="--float-distance: -3px">
        <path
          d="M-38-15 0-29 38-15V23L0 37-38 23Z"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".65"
        />
        <path
          d="M-38-15 0-1 38-15M0-1V37"
          stroke="#74e8d7"
          stroke-opacity=".5"
        />
        <path
          d="M-24-15 0-6 24-15M0-6V-22"
          stroke="#b4fff0"
          stroke-width="2"
          stroke-opacity=".8"
        />
        <circle cx="-24" cy="-15" r="3" fill="#74e8d7" />
        <circle cx="24" cy="-15" r="3" fill="#74e8d7" />
        <circle cy="-22" r="3" fill="#a2ef75" />
      </g>
    </g>
    <g transform="translate(535 235)">
      <g class="cover-float" style="--float-distance: -4px">
        <path
          d="M-36-40 36-15V33L-36 8Z"
          :fill="`url(#${id}-glass)`"
          stroke="#a2ef75"
          stroke-opacity=".75"
        />
        <path
          d="M36-15 42-18V30L36 33M-36-40-30-43 42-18"
          stroke="#a2ef75"
          stroke-opacity=".4"
        />
        <path d="M-36-27 36-2" stroke="#a2ef75" stroke-opacity=".35" />
        <path
          d="M-23-15-4-8V9L-23 2Z"
          fill="#a2ef75"
          fill-opacity=".3"
          stroke="#a2ef75"
          stroke-opacity=".5"
        />
        <path
          d="M5-5 23 1M5 3 18 8"
          stroke="#d4ffbc"
          stroke-opacity=".65"
          stroke-width="2"
        />
        <circle cx="-27" cy="-31" r="2" fill="#a2ef75" />
      </g>
    </g>
  </SectionCoverScene>
</template>
