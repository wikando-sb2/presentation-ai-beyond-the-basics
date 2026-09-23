import { computed, onUnmounted, ref, watch } from "vue";
import { onSlideEnter, onSlideLeave, useIsSlideActive } from "@slidev/client";
import { useStaticRendering } from "./useDiagram";

export function useDiagramPlayback(duration: number) {
  const staticRendering = useStaticRendering(() => true);
  const active = useIsSlideActive();
  const elapsed = ref(0);
  const running = ref(false);
  const completed = ref(false);
  const time = computed(() =>
    staticRendering.value ? duration : elapsed.value,
  );
  let frame: number | null = null;
  let started = 0;
  function stop() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    running.value = false;
  }
  function reset() {
    stop();
    elapsed.value = 0;
    completed.value = false;
  }
  function tick(now: number) {
    elapsed.value = Math.min(duration, now - started);
    if (elapsed.value === duration) {
      stop();
      completed.value = true;
    } else frame = requestAnimationFrame(tick);
  }
  function play() {
    if (running.value || !active.value || staticRendering.value) return;
    reset();
    running.value = true;
    started = performance.now();
    frame = requestAnimationFrame(tick);
  }
  function progress(start: number, length: number) {
    return Math.min(1, Math.max(0, (time.value - start) / length));
  }
  onSlideEnter(reset);
  onSlideLeave(reset);
  watch(staticRendering, reset);
  onUnmounted(stop);
  return { time, running, completed, staticRendering, progress, play };
}
