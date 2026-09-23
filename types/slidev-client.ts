import type { Ref } from "vue";

export declare function onSlideLeave(
  callback: (to: number, from: number | undefined) => unknown,
): void;

export declare function onSlideEnter(
  callback: (to: number, from: number | undefined) => unknown,
): void;

export declare function useIsSlideActive(): Ref<boolean>;

export declare function useNav(): { isPrintMode: Ref<boolean> };
