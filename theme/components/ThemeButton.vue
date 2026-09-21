<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href?: string;
    variant?: "primary" | "secondary" | "cta" | "text" | "purple" | "white";
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "primary",
    type: "button",
  },
);

const normalizedVariant =
  props.variant === "purple"
    ? "primary"
    : props.variant === "white"
      ? "secondary"
      : props.variant;

const tag = props.href ? "a" : "button";
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? undefined : type"
    class="theme-button"
    :class="[`theme-button-${normalizedVariant}`, `theme-button-${variant}`]"
  >
    <span class="theme-button__label">
      <slot />
    </span>
  </component>
</template>
