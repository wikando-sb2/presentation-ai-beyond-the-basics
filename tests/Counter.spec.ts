import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Counter from "../components/Counter.vue";

test("updates the displayed count when either control is used", async () => {
  const wrapper = mount(Counter, { props: { count: 12 } });

  expect(wrapper.get(".counter-value").text()).toBe("12");

  await wrapper.get('[aria-label="Increase counter"]').trigger("click");
  await wrapper.get('[aria-label="Decrease counter"]').trigger("click");
  await wrapper.get('[aria-label="Decrease counter"]').trigger("click");

  expect(wrapper.get(".counter-value").text()).toBe("11");
});
