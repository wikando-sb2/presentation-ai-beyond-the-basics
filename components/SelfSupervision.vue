<script setup lang="ts">
import { useDiagramPlayback } from "./diagram/useDiagramPlayback";
const { running, completed, staticRendering, progress, play } =
  useDiagramPlayback(18000);
const examples = [
  { context: "My", target: "favorite" },
  { context: "My favorite", target: "color" },
  { context: "My favorite color", target: "is" },
  { context: "My favorite color is", target: "blue" },
];
</script>
<template>
  <DiagramCanvas
    title="The text supplies the targets"
    description="A single sentence supplies several training pairs: My predicts favorite; My favorite predicts color; My favorite color predicts is; My favorite color is predicts blue. During training, the target is compared with the prediction to update model weights."
  >
    <template #default="{ arrow }">
      <text class="eyebrow" x="345" y="22">
        ONE SENTENCE → MANY TRAINING PAIRS
      </text>
      <rect class="card" x="70" y="40" width="550" height="53" rx="12" />
      <text class="token" x="345" y="74">My favorite color is blue</text>
      <text class="label" x="215" y="127">Context</text>
      <text class="label" x="585" y="127">Target from the text</text>
      <g
        v-for="(example, i) in examples"
        :key="example.target"
        :style="{ opacity: progress(i * 4200, 850) }"
      >
        <rect
          class="card"
          x="20"
          :y="140 + i * 50"
          width="390"
          height="40"
          rx="9"
        />
        <text class="token" x="215" :y="167 + i * 50">
          {{ example.context }}
        </text>
        <path
          class="line active-line"
          :d="`M 428 ${160 + i * 50} H 477`"
          :marker-end="arrow"
        />
        <rect
          class="accent"
          x="500"
          :y="140 + i * 50"
          width="170"
          height="40"
          rx="9"
        />
        <text class="token accent-text" x="585" :y="167 + i * 50">
          {{ example.target }}
        </text>
      </g>
      <g :style="{ opacity: progress(16000, 1500) }">
        <rect class="card" x="715" y="110" width="285" height="220" rx="16" />
        <text class="eyebrow" x="857" y="140">DURING TRAINING</text>
        <text class="strong" x="857" y="177">Predict</text>
        <path
          class="line active-line"
          d="M 857 190 V 210"
          :marker-end="arrow"
        />
        <text class="strong" x="857" y="239">Compare with target</text>
        <path
          class="line active-line"
          d="M 857 253 V 273"
          :marker-end="arrow"
        />
        <text class="strong" x="857" y="303">Update weights</text>
      </g>
    </template>
    <template #controls>
      <DiagramPlayback
        v-if="!staticRendering"
        :running="running"
        :completed="completed"
        label="self-supervision"
        @play="play"
      />
    </template>
  </DiagramCanvas>
</template>
