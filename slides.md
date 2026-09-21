---
theme: ./theme
comark: true
layout: cover
title: FundraisingBox Slidev Template
info: |
  A Wikando/FundraisingBox Slidev template with local theme layouts,
  branded tokens, imported snippets, Vue components, and imported pages.
author: Wikando / FundraisingBox
transition: slide-left
drawings:
  persist: false
duration: 25min
lineNumbers: true
themeFooter:
  text: Wikando Slidev Template
---

# FundraisingBox

## Slidev template for Wikando presentations

Practical slides for product demos, technical walkthroughs, and internal enablement.

<ThemeButton href="https://fundraisingbox.com" variant="purple">FundraisingBox</ThemeButton>
<ThemeButton href="https://wikando.de" variant="white">Wikando</ThemeButton>

---

# Agenda

<ThemeAgenda columns="2">
  <ThemeAgendaItem title="Brand basics" description="Typography, gradients, buttons, and slide rhythm." />
  <ThemeAgendaItem title="Content layouts" description="Default, split, and centered layouts for common decks." />
  <ThemeAgendaItem title="Developer examples" description="Imported snippets, Vue components, and reusable pages." />
  <ThemeAgendaItem title="Export and deployment" description="Build checks, static output, and PDF export notes." />
</ThemeAgenda>

---

# Content Layout Example

## Default layout

Use this layout for narrative slides with a clear statement and a compact set of supporting points.

- Lead with the outcome or decision.
- Keep bullets short enough to scan from the back of a room.
- Use the slide canvas for content instead of heavy decorative frames.

---
layout: two-cols
layoutClass: gap-10
---

# Split Layout Example

## Fundraising flow

Map the donor journey from a campaign touchpoint into CRM, payments, and reporting.

::right::

<ThemeMetricStack>
  <ThemeMetricStackItem>Spenden sammeln</ThemeMetricStackItem>
  <ThemeMetricStackItem>CRM synchronisieren</ThemeMetricStackItem>
  <ThemeMetricStackItem>Payments abgleichen</ThemeMetricStackItem>
</ThemeMetricStack>

---
layout: center
---

# Center Layout Example

<ThemeLead>
  Use centered slides for section transitions, key decisions, or one strong product message.
</ThemeLead>

<ThemeButton variant="purple">Make impact visible</ThemeButton>
<ThemeButton variant="white">Keep teams focused</ThemeButton>

---

# Imported Code Snippet

The deck imports example TypeScript from `snippets/external.ts`, so template users can see the standard Slidev snippet workflow.

<<< @/snippets/external.ts#snippet {1-5}

---

# Component Example

<ThemeShowcase
  eyebrow="Vue component"
  title="Interactive counter"
  description="The existing components/Counter.vue example remains part of the deck and can be edited like any local Slidev component."
>
  <Counter :count="12" />
</ThemeShowcase>

---
layout: agent-harness
---

<AgentHarness
  :options="{
    initialAgentMessage: 'Ready. Start the workflow conversation.',
    initialModel: 'GPT-5.5',
    initialEffort: 'Medium',
    chats: [
      {
        human: '/code-review PR#1737',
        agent: 'I’ll review PR #1737. I’ll gather the diff, inspect touched files, verify the base branch, and report only concrete findings with file references.',
      },
      {
        human: 'Which checks should run before the human reviewer reads it?',
        agent: 'I’ll run static checks, inspect changed modules, verify security-sensitive paths, and only escalate findings that are reproducible from the code.',
      },
      {
        human: 'Summarize the final handoff for the reviewer',
        agent: 'The handoff should include confirmed findings, reviewed scope, assumptions, non-findings worth mentioning, and any tests that could not be executed.',
      },
    ],
  }"
/>

---
src: ./pages/imported-slides.md
---

---
layout: center
---

# Thank You

<ThemeLead>
  Wikando / FundraisingBox
</ThemeLead>

<ThemeButton href="https://fundraisingbox.com" variant="purple">fundraisingbox.com</ThemeButton>
<ThemeButton href="https://wikando.de" variant="white">wikando.de</ThemeButton>

---

# Sources

- FundraisingBox website and product messaging: https://fundraisingbox.com
- Wikando company website: https://wikando.de
- Slidev documentation: https://sli.dev
- Fonts: Montserrat and Source Code Pro
