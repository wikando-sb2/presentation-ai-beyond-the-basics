import { mount } from "@vue/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import AgentHarness from "../components/AgentHarness.vue";

vi.mock("@slidev/client", () => ({ onSlideLeave: vi.fn() }));

afterEach(() => {
  vi.useRealTimers();
});

test("turns a submitted instruction into the configured agent response", async () => {
  vi.useFakeTimers();
  const wrapper = mount(AgentHarness, {
    props: {
      options: {
        chats: [{ human: "Review this", agent: "The review is complete." }],
        thinkingDelayMs: 1,
      },
    },
  });

  await wrapper.get("form").trigger("submit");
  expect(wrapper.text()).toContain("Thinking");

  await vi.advanceTimersByTimeAsync(1);

  expect(wrapper.text()).toContain("The review is complete.");
  expect(wrapper.find('[aria-label="Reset agent conversation"]').exists()).toBe(
    true,
  );
});
