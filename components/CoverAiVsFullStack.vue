<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="Two matching application assemblies share one platform; the AI assembly extends its application with a luminous model chamber and a feedback connection"
  >
    <path
      d="M130 235 240 195 750 235 640 280Z"
      :fill="`url(#${id}-glass)`"
      stroke="#74e8d7"
      stroke-opacity=".35"
    />
    <path
      d="M130 235V249L640 294 750 249V235L640 280Z"
      :fill="`url(#${id}-edge)`"
      stroke="#74e8d7"
      stroke-opacity=".2"
    />
    <path d="M640 280V294" stroke="#74e8d7" stroke-opacity=".3" />
    <g
      v-for="center in [285, 585]"
      :key="center"
      :transform="`translate(${center} 170)`"
    >
      <g class="cover-float" style="--float-distance: -3px">
        <ellipse cy="71" rx="105" ry="19" :fill="`url(#${id}-floor)`" />
        <path
          d="M-80-91 14-57V33L-80-1Z"
          :fill="`url(#${id}-glass)`"
          stroke="#b0efdf"
          stroke-opacity=".8"
        />
        <path
          d="M-80-91-72-95 22-61V29L14 33V-57Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".45"
        />
        <path d="M-80-73 14-39" stroke="#cc97f2" stroke-opacity=".45" />
        <circle cx="-70" cy="-78" r="2" fill="#cc97f2" />
        <circle cx="-61" cy="-75" r="2" fill="#74e8d7" />
        <path
          d="M-65-55-39-46V-14L-65-23Z"
          fill="#cc97f2"
          fill-opacity=".22"
          stroke="#cc97f2"
          stroke-opacity=".55"
        />
        <path
          d="M-27-42 1-32M-27-31-5-23M-27-20-10-14"
          stroke="#a8f3dc"
          stroke-opacity=".55"
          stroke-width="2"
        />
        <path
          d="M-40 15V42L-56 48M-40 42 2 57"
          stroke="#74e8d7"
          stroke-opacity=".45"
        />
        <g
          v-for="(offset, index) in [-62, 2]"
          :key="offset"
          :transform="`translate(${offset} ${index ? 62 : 48})`"
        >
          <path
            d="M-24-7 0-16 30-5 6 4Z"
            :fill="`url(#${id}-glass)`"
            stroke="#cc97f2"
            stroke-opacity=".6"
          />
          <path
            d="M-24-7V10L6 21 30 12V-5L6 4Z"
            :fill="`url(#${id}-edge)`"
            stroke="#74e8d7"
            stroke-opacity=".4"
          />
          <path d="M6 4V21" stroke="#74e8d7" stroke-opacity=".35" />
          <path
            d="M-15 4-3 8"
            stroke="#a2ef75"
            stroke-opacity=".7"
            stroke-width="2"
          />
        </g>
      </g>
    </g>
    <g transform="translate(668 163)">
      <g
        class="cover-float"
        style="--float-delay: 0.3s; --float-distance: -4px"
      >
        <ellipse
          cy="53"
          rx="49"
          ry="17"
          fill="#34d5bd"
          fill-opacity=".2"
          :filter="`url(#${id}-glow)`"
        />
        <path
          d="M-37-34 0-48 38-34V40L0 55-37 41Z"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".6"
        />
        <path
          d="M-37-34 0-20 38-34M0-20V-7M0 36V55M-37 41 0 27 38 40"
          stroke="#b8fff0"
          stroke-opacity=".4"
        />
        <circle cy="9" r="22" :fill="`url(#${id}-core)`" />
        <circle cx="-5" cy="2" r="4" fill="#effff5" fill-opacity=".5" />
        <circle cx="-25" cy="-9" r="3" fill="#cc97f2" fill-opacity=".5" />
        <circle cx="25" cy="-6" r="3" fill="#a2ef75" fill-opacity=".45" />
        <circle cx="21" cy="32" r="3" fill="#74e8d7" fill-opacity=".4" />
        <path
          d="M-24 28C-68 70-102 49-97 7"
          stroke="#a2ef75"
          stroke-opacity=".55"
          stroke-width="1.5"
        />
        <path
          d="m-102 12 5-5 4 8"
          stroke="#a2ef75"
          stroke-opacity=".55"
          stroke-width="1.5"
        />
      </g>
    </g>
  </SectionCoverScene>
</template>
