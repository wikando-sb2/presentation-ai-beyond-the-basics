import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import NeatAnnotation from "../components/NeatAnnotation.vue";

test("renders a readable note beside its slotted target", () => {
  const wrapper = mount(NeatAnnotation, {
    props: {
      note: "Review this",
      direction: "sw",
      color: "purple",
      noMark: true,
    },
    slots: { default: '<button type="button">Publish</button>' },
  });

  expect(wrapper.classes()).toEqual(
    expect.arrayContaining(["ann", "ann-sw", "ann-purple", "ann-no-mark"]),
  );
  expect(wrapper.get("button").text()).toBe("Publish");
  expect(wrapper.get('[role="note"]').text()).toBe("Review this");
  expect(wrapper.attributes("data-note")).toBe("Review this");
  expect(wrapper.get("button").attributes("aria-label")).toBeUndefined();
});

test("renders a plain marker without arrow or empty note when note is omitted", () => {
  const wrapper = mount(NeatAnnotation, {
    props: { color: "amber" },
    slots: { default: "Ready" },
  });

  expect(wrapper.classes()).toContain("ann-n");
  expect(wrapper.classes()).toContain("ann-amber");
  expect(wrapper.attributes("data-note")).toBeUndefined();
  expect(wrapper.find('[role="note"]').exists()).toBe(false);
});
