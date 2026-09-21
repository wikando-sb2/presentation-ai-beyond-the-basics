import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import ThemeButton from "../theme/components/ThemeButton.vue";
import DefaultLayout from "../theme/layouts/default.vue";

test("theme buttons preserve their semantic link contract", () => {
  const wrapper = mount(ThemeButton, {
    props: { href: "https://example.test", variant: "purple" },
    slots: { default: "Read more" },
  });

  expect(wrapper.element.tagName).toBe("A");
  expect(wrapper.classes()).toContain("theme-button-primary");
  expect(wrapper.attributes("href")).toBe("https://example.test");
});

test("the default layout keeps supplied content inside its slide region", () => {
  const wrapper = mount(DefaultLayout, {
    slots: { default: "Slide body" },
    global: { stubs: { ThemeFooter: true } },
  });

  expect(wrapper.get("main.slide-content").text()).toContain("Slide body");
  expect(wrapper.find("theme-footer-stub").exists()).toBe(true);
});
