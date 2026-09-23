import { useNav } from "@slidev/client";
import { computed, onMounted, onUnmounted, ref, useId, type Ref } from "vue";

export function useDiagramIds(prefix: string) {
  const componentId = `${prefix}-${useId().replace(/:/g, "")}`;

  return {
    componentId,
    titleId: `${componentId}-title`,
    descriptionId: `${componentId}-description`,
    markerId: (name: string) => `${componentId}-${name}`,
  };
}

export function useStaticRendering(animated: Ref<boolean> | (() => boolean)) {
  const { isPrintMode } = useNav();
  const reducedMotionQuery =
    typeof window === "undefined"
      ? null
      : window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReducedMotion = ref(reducedMotionQuery?.matches ?? false);

  const updateReducedMotionPreference = (event: MediaQueryListEvent) => {
    prefersReducedMotion.value = event.matches;
  };

  onMounted(() => {
    reducedMotionQuery?.addEventListener(
      "change",
      updateReducedMotionPreference,
    );
  });

  onUnmounted(() => {
    reducedMotionQuery?.removeEventListener(
      "change",
      updateReducedMotionPreference,
    );
  });

  return computed(() => {
    const animationEnabled =
      typeof animated === "function" ? animated() : animated.value;

    return !animationEnabled || isPrintMode.value || prefersReducedMotion.value;
  });
}
