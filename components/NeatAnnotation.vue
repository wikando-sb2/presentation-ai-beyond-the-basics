<script setup lang="ts">
type Direction = "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";
type Color = "amber" | "blue" | "green" | "red" | "purple" | "rainbow";

withDefaults(
  defineProps<{
    note?: string;
    direction?: Direction;
    color?: Color;
    noMark?: boolean;
  }>(),
  { direction: "n" },
);
</script>

<template>
  <span
    class="ann"
    :class="[
      `ann-${direction}`,
      color && `ann-${color}`,
      { 'ann-no-mark': noMark },
    ]"
    :data-note="note || undefined"
  >
    <slot />
    <span v-if="note" class="ann-note" role="note">{{ note }}</span>
  </span>
</template>

<style scoped src="./NeatAnnotation/neat-annotations.css"></style>
