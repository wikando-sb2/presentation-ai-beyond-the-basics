<script setup lang="ts">
import { computed } from "vue";
import configs from "#slidev/configs";

const footer = computed(() => {
  const config = configs.themeFooter as
    | {
        text?: string;
        right?: string;
      }
    | undefined;

  return {
    text: config?.text || config?.right || "Wikando Slidev Template",
  };
});
</script>

<template>
  <footer class="theme-footer">
    <img
      class="theme-footer-logo"
      src="/assets/fb_logo.svg"
      alt="FundraisingBox"
    />
    <span>{{ footer.text }}</span>
  </footer>
</template>
