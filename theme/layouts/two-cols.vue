<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
});
</script>

<template>
  <div class="slidev-layout two-columns">
    <main class="two-columns-content" :class="props.layoutClass">
      <div class="col-left" :class="props.class">
        <slot />
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </main>
    <ThemeFooter />
  </div>
</template>
