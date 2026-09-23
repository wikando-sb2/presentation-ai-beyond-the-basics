<script setup lang="ts">
import { useId } from "vue";
import { useIsSlideActive } from "@slidev/client";

const id = `prediction-application-${useId()}`;
const isSlideActive = useIsSlideActive();
const tokens = [
  {
    x: 102,
    y: 95,
    width: 90,
    strokeLength: 44,
    duration: "6.8s",
    delay: "-2s",
  },
  {
    x: 96,
    y: 160,
    width: 104,
    strokeLength: 62,
    duration: "8.6s",
    delay: "-5s",
  },
  {
    x: 218,
    y: 160,
    width: 48,
    strokeLength: 18,
    duration: "7.7s",
    delay: "-1s",
  },
];
const connections = ["M 298 159 H 335", "M 541 159 H 591"];
</script>

<template>
  <div class="prediction-artwork" :class="{ 'motion-paused': !isSlideActive }">
    <svg viewBox="0 0 880 330" fill="none" focusable="false" aria-hidden="true">
      <defs>
        <linearGradient :id="`${id}-glass`" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#cc97f2" stop-opacity=".28" />
          <stop offset=".5" stop-color="#74e8d7" stop-opacity=".15" />
          <stop offset="1" stop-color="#34d5bd" stop-opacity=".04" />
        </linearGradient>
        <linearGradient :id="`${id}-edge`" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#74e8d7" stop-opacity=".35" />
          <stop offset="1" stop-color="#071b21" stop-opacity=".8" />
        </linearGradient>
        <linearGradient :id="`${id}-spectrum`" x1="0" y1="0" x2="1" y2=".7">
          <stop stop-color="#cc97f2" />
          <stop offset=".6" stop-color="#74e8d7" />
          <stop offset="1" stop-color="#a2ef75" />
        </linearGradient>
        <radialGradient :id="`${id}-floor`">
          <stop stop-color="#34d5bd" stop-opacity=".24" />
          <stop offset="1" stop-color="#34d5bd" stop-opacity="0" />
        </radialGradient>
        <radialGradient :id="`${id}-core`" cx=".3" cy=".25" r=".75">
          <stop stop-color="#f1fff9" />
          <stop offset=".3" stop-color="#a8ffdf" />
          <stop offset=".7" stop-color="#34d5bd" />
          <stop offset="1" stop-color="#126a65" />
        </radialGradient>
        <filter
          :id="`${id}-glow`"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <ellipse cx="440" cy="246" rx="410" ry="55" :fill="`url(#${id}-floor)`" />
      <g stroke-linecap="round" stroke-linejoin="miter">
        <g v-for="path in connections" :key="path">
          <path
            :d="path"
            stroke="#74e8d7"
            stroke-width="6"
            opacity=".25"
            :filter="`url(#${id}-glow)`"
          />
          <path :d="path" stroke="#8cebd9" stroke-width="1.5" />
        </g>
        <path
          d="M 327 153 L 335 159 L 327 165 M 583 153 L 591 159 L 583 165"
          stroke="#c2ffee"
          stroke-width="1.5"
        />

        <g
          v-for="token in tokens"
          :key="token.x"
          :transform="`translate(${token.x} ${token.y})`"
        >
          <g
            class="floating"
            :style="{
              '--float-duration': token.duration,
              '--float-delay': token.delay,
            }"
          >
            <path
              :d="`M 0 0 L 14 -10 H ${token.width + 14} L ${token.width} 0 Z M ${token.width} 0 L ${token.width + 14} -10 V 34 L ${token.width} 44 Z`"
              :fill="`url(#${id}-edge)`"
              stroke="#cc97f2"
              stroke-opacity=".55"
            />
            <rect :width="token.width" height="44" fill="#102b35" />
            <rect
              :width="token.width"
              height="44"
              :fill="`url(#${id}-glass)`"
              stroke="#cc97f2"
              stroke-opacity=".85"
            />
            <path
              :d="`M ${(token.width - token.strokeLength) / 2} 22 h ${token.strokeLength}`"
              stroke="#efdafa"
              stroke-width="4"
              stroke-opacity=".75"
            />
          </g>
        </g>

        <path
          d="M 326 226 L 446 280 V 290 L 326 236 Z M 446 280 L 551 226 V 236 L 446 290 Z"
          :fill="`url(#${id}-edge)`"
          stroke="#74e8d7"
          stroke-opacity=".25"
        />
        <path
          d="M 326 226 L 431 173 L 551 226 L 446 280 Z"
          :fill="`url(#${id}-glass)`"
          stroke="#74e8d7"
          stroke-opacity=".4"
        />
        <ellipse
          cx="439"
          cy="226"
          rx="57"
          ry="20"
          fill="#34d5bd"
          opacity=".2"
          :filter="`url(#${id}-glow)`"
        />

        <g class="floating model-float">
          <path
            d="M 353 107 L 438 64 L 523 107 V 202 L 438 247 L 353 202 Z"
            fill="#0d292e"
          />
          <path
            d="M 353 107 L 438 150 L 523 107 L 438 64 Z"
            :fill="`url(#${id}-glass)`"
            :stroke="`url(#${id}-spectrum)`"
            stroke-width="1.5"
          />
          <path
            d="M 353 107 V 202 L 438 247 V 150 Z"
            :fill="`url(#${id}-glass)`"
            stroke="#b8afe9"
            stroke-opacity=".7"
          />
          <path
            d="M 438 150 L 523 107 V 202 L 438 247 Z"
            :fill="`url(#${id}-edge)`"
            stroke="#74e8d7"
            stroke-opacity=".75"
          />
          <path
            d="M 438 78 V 168 M 367 193 L 438 168 L 509 193"
            stroke="#74e8d7"
            stroke-opacity=".3"
            stroke-dasharray="3 6"
          />
          <g class="floating sphere-float">
            <circle
              cx="438"
              cy="166"
              r="27"
              fill="#34d5bd"
              opacity=".4"
              :filter="`url(#${id}-glow)`"
            />
            <circle cx="438" cy="166" r="15" :fill="`url(#${id}-core)`" />
          </g>
          <path
            d="M 359 110 L 438 150 L 517 110 M 438 150 V 239"
            stroke="#cefff1"
            stroke-opacity=".65"
          />
        </g>

        <g transform="translate(609 85)">
          <g class="floating window-float">
            <path
              d="M 0 0 L 20 -14 H 210 L 190 0 Z M 190 0 L 210 -14 V 130 L 190 144 Z"
              :fill="`url(#${id}-edge)`"
              stroke="#74e8d7"
              stroke-opacity=".65"
            />
            <rect width="190" height="144" fill="#0d292e" />
            <rect
              width="190"
              height="144"
              :fill="`url(#${id}-glass)`"
              :stroke="`url(#${id}-spectrum)`"
              stroke-width="1.5"
            />
            <path d="M 0 28 H 190" stroke="#74e8d7" stroke-opacity=".3" />
            <circle
              v-for="x in [14, 25, 36]"
              :key="x"
              :cx="x"
              cy="14"
              r="2.5"
              fill="#b8d8d2"
            />
            <path
              d="M 20 52 H 155"
              stroke="#b5e7da"
              stroke-width="6"
              stroke-opacity=".85"
            />
            <g
              v-for="(width, index) in [125, 105, 115]"
              :key="index"
              :transform="`translate(20 ${77 + index * 21})`"
            >
              <circle cy="0" r="2.5" fill="#a2ef75" />
              <path
                :d="`M 13 0 H ${width}`"
                stroke="#b5e7da"
                stroke-width="4"
                stroke-opacity=".65"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.prediction-artwork {
  width: 100%;
  margin-top: 1.5rem;
}

svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.floating {
  animation: cover-float var(--float-duration, 8s) ease-in-out
    var(--float-delay, 0s) infinite;
}

.model-float {
  --float-duration: 10s;
  --float-delay: -3s;
  --float-distance: -5px;
}

.sphere-float {
  --float-duration: 6.2s;
  --float-delay: -1s;
  --float-distance: -3px;
}

.window-float {
  --float-duration: 9.2s;
  --float-delay: -6s;
  --float-distance: -4px;
}

.motion-paused .floating {
  animation-play-state: paused;
}

@keyframes cover-float {
  0%,
  100% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(var(--float-distance, -3px));
  }
}

@media (prefers-reduced-motion: reduce), print {
  .floating {
    animation: none;
  }
}
</style>
