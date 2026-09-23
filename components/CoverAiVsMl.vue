<script setup lang="ts">
import SectionCoverScene from "./SectionCoverScene.vue";
</script>

<template>
  <SectionCoverScene
    v-slot="{ id }"
    label="A shared model connects iterative machine learning on the left with connected AI applications on the right"
  >
    <path
      d="M244 169H344M536 165H557L576 119M557 165H636M557 165L576 225"
      :stroke="`url(#${id}-spectrum)`"
      stroke-width="1.5"
      opacity=".42"
    />
    <path
      d="M372 97C313 73 289 104 289 162C289 219 314 250 372 234"
      stroke="#cc97f2"
      stroke-width="1.5"
      opacity=".5"
    />
    <path d="m362 228 11 6-6 10" stroke="#cc97f2" opacity=".6" />
    <g transform="translate(177 165)">
      <g class="cover-float">
        <g v-for="offset in [-35, 0, 35]" :key="offset">
          <g :transform="`translate(0 ${offset})`">
            <path
              d="M-48-12 10-28 49-9-10 9Z"
              fill="#cc97f2"
              fill-opacity=".16"
              stroke="#cc97f2"
              stroke-opacity=".6"
            />
            <path
              d="M-48-12V1L-10 22 49 4V-9L-10 9Z"
              :fill="`url(#${id}-edge)`"
              stroke="#cc97f2"
              stroke-opacity=".25"
            />
            <path d="M-10 9V22" stroke="#cc97f2" opacity=".35" />
          </g>
        </g>
      </g>
    </g>
    <g transform="translate(440 165)">
      <g class="cover-float">
        <path
          d="M0-87 78-47V48L0 91-78 48V-47Z"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".65"
          stroke-width="1.5"
        />
        <path
          d="M-78-47 0-5 78-47M0-5V91"
          stroke="#74e8d7"
          stroke-opacity=".45"
        />
        <circle
          r="37"
          fill="#34d5bd"
          opacity=".35"
          :filter="`url(#${id}-glow)`"
        />
        <circle r="29" :fill="`url(#${id}-core)`" />
        <ellipse
          cy="4"
          rx="51"
          ry="18"
          transform="rotate(-28)"
          stroke="#cc97f2"
          stroke-opacity=".55"
        />
      </g>
    </g>
    <g
      v-for="(module, index) in [
        { x: 625, y: 105 },
        { x: 690, y: 165 },
        { x: 625, y: 225 },
      ]"
      :key="index"
      :transform="`translate(${module.x} ${module.y})`"
    >
      <g class="cover-float">
        <path
          d="M-36-25 25-25 39-35-22-35Z"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".55"
        />
        <path
          d="M25-25 39-35V21L25 31Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".35"
        />
        <rect
          x="-36"
          y="-25"
          width="61"
          height="56"
          rx="3"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".7"
        />
        <g v-if="index === 1" stroke="#a8ffdf" stroke-opacity=".65">
          <path d="M-35-11H24M-26-18h1m6 0h1m6 0h1" />
          <rect x="-25" y="0" width="15" height="18" rx="2" />
          <path d="M-2 2H14M-2 10H10M-2 18H14" />
        </g>
        <g v-else>
          <circle
            cx="-5"
            cy="3"
            r="12"
            :fill="`url(#${id}-core)`"
            opacity=".8"
          />
          <circle cx="-5" cy="3" r="18" stroke="#74e8d7" opacity=".3" />
        </g>
      </g>
    </g>
  </SectionCoverScene>
</template>
