<script setup lang="ts">
import { onSlideLeave } from "@slidev/client";
import { computed, nextTick, ref } from "vue";

type ChatRole = "human" | "agent";

type AgentHarnessChat = {
  human: string;
  agent: string;
};

type ChatMessage = {
  id: number;
  role: ChatRole;
  text: string;
  meta?: string;
  pending?: boolean;
};

type AgentHarnessOptions = {
  chats?: AgentHarnessChat[];
  initialAgentMessage?: string;
  initialHumanMessage?: string;
  models?: string[];
  efforts?: string[];
  initialModel?: string;
  initialEffort?: string;
  thinkingDelayMs?: number;
  placeholder?: string;
};

const props = defineProps<{
  options?: AgentHarnessOptions;
}>();

const defaultChats: AgentHarnessChat[] = [
  {
    human: "/code-review PR#1737",
    agent:
      "I’ll review PR #1737. I’ll gather the diff, inspect touched files, verify the base branch, and report only concrete findings with file references.",
  },
  {
    human: "Which checks should run before the human reviewer reads it?",
    agent:
      "I’ll run static checks, inspect changed modules, verify security-sensitive paths, and only escalate findings that are reproducible from the code.",
  },
  {
    human: "Summarize the final handoff for the reviewer",
    agent:
      "The handoff should include confirmed findings, reviewed scope, assumptions, non-findings worth mentioning, and any tests that could not be executed.",
  },
];

const chats = computed(() =>
  props.options?.chats?.length ? props.options.chats : defaultChats,
);
const models = computed(() =>
  props.options?.models?.length
    ? props.options.models
    : ["GPT-5.5", "Opus 4.8", "Sonnet 4.5"],
);
const efforts = computed(() =>
  props.options?.efforts?.length
    ? props.options.efforts
    : ["Low", "Medium", "High", "Extra High"],
);

const selectedModel = ref(props.options?.initialModel ?? models.value[0]);
const selectedEffort = ref(
  props.options?.initialEffort ?? efforts.value[1] ?? efforts.value[0],
);
const inputText = ref(
  props.options?.initialHumanMessage ?? chats.value[0]?.human ?? "",
);
const messages = ref<ChatMessage[]>([
  {
    id: 1,
    role: "agent",
    text:
      props.options?.initialAgentMessage ??
      "Hello. What would you like to work on today?",
    meta: "Your Harness",
  },
]);

const nextId = ref(2);
const currentChatIndex = ref(0);
const transcript = ref<HTMLElement | null>(null);
const pendingResponseTimer = ref<number | null>(null);
const isThinking = computed(() =>
  messages.value.some((message) => message.pending),
);
const hasNextChat = computed(() => currentChatIndex.value < chats.value.length);
const isConversationComplete = computed(
  () => !hasNextChat.value && !isThinking.value,
);

const scrollTranscript = async () => {
  await nextTick();
  if (transcript.value) {
    transcript.value.scrollTop = transcript.value.scrollHeight;
  }
};

const resetConversation = async () => {
  if (pendingResponseTimer.value) {
    window.clearTimeout(pendingResponseTimer.value);
    pendingResponseTimer.value = null;
  }

  messages.value = [
    {
      id: 1,
      role: "agent",
      text:
        props.options?.initialAgentMessage ??
        "Hello. What would you like to work on today?",
      meta: "Your Harness",
    },
  ];
  nextId.value = 2;
  currentChatIndex.value = 0;
  inputText.value =
    props.options?.initialHumanMessage ?? chats.value[0]?.human ?? "";

  await scrollTranscript();
};

const submitMessage = async () => {
  if (isConversationComplete.value) {
    await resetConversation();
    return;
  }

  const text = inputText.value.trim();
  const chat = chats.value[currentChatIndex.value];

  if (!text || !chat || isThinking.value) {
    return;
  }

  messages.value.push({
    id: nextId.value++,
    role: "human",
    text,
    meta: "Human",
  });

  inputText.value = "";
  const pendingId = nextId.value++;

  messages.value.push({
    id: pendingId,
    role: "agent",
    text: "Thinking",
    meta: `${selectedModel.value} · ${selectedEffort.value}`,
    pending: true,
  });

  await scrollTranscript();

  pendingResponseTimer.value = window.setTimeout(async () => {
    pendingResponseTimer.value = null;

    const pendingMessage = messages.value.find(
      (message) => message.id === pendingId,
    );

    if (pendingMessage) {
      pendingMessage.text = chat.agent;
      pendingMessage.pending = false;
    }

    currentChatIndex.value += 1;
    inputText.value = chats.value[currentChatIndex.value]?.human ?? "";

    await scrollTranscript();
  }, props.options?.thinkingDelayMs ?? 2700);
};

onSlideLeave(resetConversation);
</script>

<template>
  <section class="agent-harness" aria-label="Agent communication demo">
    <div ref="transcript" class="agent-harness__transcript">
      <article
        v-for="message in messages"
        :key="message.id"
        class="agent-harness__message"
        :class="`agent-harness__message--${message.role}`"
      >
        <div class="agent-harness__meta">{{ message.meta }}</div>
        <div class="agent-harness__bubble">
          <span>{{ message.text }}</span>
          <span v-if="message.pending" class="agent-harness__thinking">
            <span />
            <span />
            <span />
          </span>
        </div>
      </article>
    </div>

    <div class="agent-harness__dock">
      <form class="agent-harness__composer" @submit.prevent="submitMessage">
        <input
          v-model="inputText"
          class="agent-harness__input"
          aria-label="Agent instruction"
          autocomplete="off"
          :disabled="!hasNextChat || isThinking"
          :placeholder="
            props.options?.placeholder ??
            (hasNextChat
              ? 'Type an agent instruction'
              : 'Conversation complete')
          "
        />
        <button
          class="agent-harness__submit"
          type="submit"
          :disabled="
            isThinking || (!isConversationComplete && !inputText.trim())
          "
          :aria-label="
            isConversationComplete
              ? 'Reset agent conversation'
              : 'Submit agent instruction'
          "
        >
          <span v-if="isConversationComplete">&#8635;</span>
          <span v-else>↵</span>
        </button>
      </form>

      <div class="agent-harness__settings" aria-label="Model settings">
        <label>
          <span>Model</span>
          <select v-model="selectedModel">
            <option v-for="model in models" :key="model">{{ model }}</option>
          </select>
        </label>
        <label>
          <span>Effort</span>
          <select v-model="selectedEffort">
            <option v-for="effort in efforts" :key="effort">
              {{ effort }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.agent-harness {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  color: #f4f1e8;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 3%), transparent 28%), #1c1c1a;
  font-family: var(--fbx-font-sans);
}

.agent-harness__transcript {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  min-height: 0;
  padding: 3.25rem 4rem 1.25rem;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.agent-harness__message {
  display: grid;
  gap: 0.28rem;
  max-width: min(43rem, 78%);
}

.agent-harness__message--human {
  align-self: end;
}

.agent-harness__message--agent {
  align-self: start;
}

.agent-harness__meta {
  color: rgb(244 241 232 / 54%);
  font-size: 0.68rem;
  font-weight: 700;
}

.agent-harness__message--human .agent-harness__meta {
  text-align: right;
}

.agent-harness__bubble {
  display: flex;
  align-items: center;
  gap: 0.42rem;
  width: fit-content;
  max-width: 100%;
  padding: 0.78rem 0.95rem;
  border: 1px solid rgb(255 255 255 / 8%);
  border-radius: 8px;
  color: #f5f2ea;
  background: #2f2e2b;
  box-shadow: 0 16px 36px rgb(0 0 0 / 22%);
  font-size: 0.9rem;
  line-height: 1.45;
}

.agent-harness__message--human .agent-harness__bubble {
  margin-left: auto;
  background: #3a3936;
}

.agent-harness__message--agent .agent-harness__bubble {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}

.agent-harness__thinking {
  display: inline-flex;
  align-items: center;
  gap: 0.18rem;
  padding-left: 0.12rem;
}

.agent-harness__thinking span {
  width: 0.22rem;
  height: 0.22rem;
  border-radius: 50%;
  background: #9ddc4b;
  animation: agent-harness-pulse 900ms ease-in-out infinite;
}

.agent-harness__thinking span:nth-child(2) {
  animation-delay: 140ms;
}

.agent-harness__thinking span:nth-child(3) {
  animation-delay: 280ms;
}

.agent-harness__dock {
  display: grid;
  gap: 0.55rem;
  padding: 0.75rem 2rem 1.05rem;
  border-top: 1px solid rgb(255 255 255 / 8%);
  background: linear-gradient(180deg, rgb(28 28 26 / 82%), #20201e);
}

.agent-harness__submit {
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 8px;
  color: #f4f1e8;
  background: #2c2b29;
  font: 700 0.68rem/1 var(--fbx-font-sans);
  cursor: pointer;
}

.agent-harness__submit:hover:not(:disabled) {
  border-color: rgb(157 220 75 / 62%);
}

.agent-harness__composer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2.35rem;
  gap: 0.45rem;
}

.agent-harness__input {
  min-width: 0;
  height: 2.6rem;
  padding: 0 0.85rem;
  border: 1px solid rgb(255 255 255 / 14%);
  border-radius: 8px;
  color: #f7f3ea;
  background: #2a2926;
  font: 500 0.86rem/1 var(--fbx-font-sans);
  outline: none;
}

.agent-harness__input:focus {
  border-color: #9ddc4b;
  box-shadow: 0 0 0 3px rgb(157 220 75 / 15%);
}

.agent-harness__submit {
  display: grid;
  width: 2.35rem;
  height: 2.6rem;
  place-items: center;
  padding: 0;
  font-size: 1rem;
}

.agent-harness__submit:disabled {
  color: rgb(244 241 232 / 32%);
  cursor: not-allowed;
}

.agent-harness__settings {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  color: rgb(244 241 232 / 68%);
}

.agent-harness__settings label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.68rem;
  font-weight: 700;
}

.agent-harness__settings select {
  height: 1.8rem;
  padding: 0 1.5rem 0 0.55rem;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 8px;
  color: #f4f1e8;
  background: #2a2926;
  font: 700 0.68rem/1 var(--fbx-font-sans);
}

@keyframes agent-harness-pulse {
  0%,
  80%,
  100% {
    opacity: 0.34;
    transform: translateY(0);
  }

  40% {
    opacity: 1;
    transform: translateY(-0.12rem);
  }
}

@media (max-width: 760px) {
  .agent-harness__transcript {
    padding: 2rem 1.35rem 1rem;
  }

  .agent-harness__message {
    max-width: 88%;
  }

  .agent-harness__dock {
    padding: 0.75rem 1rem 0.9rem;
  }

  .agent-harness__settings {
    justify-content: flex-start;
  }
}
</style>
