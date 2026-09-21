# Presentation Instructions

Use these instructions when the remote repository is not `wikando/slidev-template`.

This repository is a presentation created from the Slidev template. Changes should focus on the
specific talk or deck.

- Prioritize the presentation content, narrative flow, speaker needs, and visual clarity.
- For new presentations, first think through the deck structure: audience, goal, narrative arc,
  slide types, useful components, and content patterns.
- Do not preserve the existing `slides.md` structure by default. Treat it as template placeholder
  material unless the user explicitly asks to keep it.
- Replace or restructure `slides.md` to fit the presentation instead of editing around the existing
  example slides.
- It is acceptable to customize slides, assets, and styling for the specific presentation.
- Avoid changing reusable template structure unless the presentation requires it.
- Keep local customizations easy to distinguish from reusable template behavior.
- If a change would benefit the shared template, call that out instead of silently generalizing the
  presentation repository.
- Prefer existing layouting options over custom CSS and HTML elements.
- For special elements, prefer creatint Vue components over custom HTML blobs.
- When layouting elements, keep in mind that sizing must be in relation to slide size, not current
  viewport. Also, layouts must be responsive, as presentations may be resized or viewed on different
  devices.
- When working with data, prefer [Chart.js](https://github.com/chartjs/Chart.js) integrated
  via [vue-chartjs](https://vue-chartjs.org/guide/) over other libraries or custom SVGs.
  - When using charts, make sure they are readable in both light and dark mode
    and have sufficient contrast.
- Make sure to ask the user for permission before installing any external dependencies.

## Concrete Examples

Use the example slides as replaceable patterns, not content that must be preserved.

### Diagrams

Use the `diagram` class to add diagrams from images to slides.

```md
<img
  src="/assets/myDiagram.png"
  alt="My Diagram Alt Text"
  class="diagram"
/>
```

### Cover slide

Use the `cover` layout for the title and one clear call to action.

```md
---
theme: ./theme
layout: cover
title: FundraisingBox Slidev Template
---

# FundraisingBox

## Donation tools for modern fundraising teams

<ThemeButton href="https://fundraisingbox.com" variant="purple">Open product page</ThemeButton>
```

### Agenda list

Use an agenda for named sections with short descriptions.

```md
# Agenda

<ol class="agenda-list">
  <li><strong>Brand basics</strong><span>Typography, gradients, buttons, and slide rhythm.</span></li>
  <li><strong>Content layouts</strong><span>Default, split, and centered layouts for common decks.</span></li>
  <li><strong>Developer examples</strong><span>Imported snippets, Vue components, and reusable pages.</span></li>
  <li><strong>Export and deployment</strong><span>Build checks, static output, and PDF export notes.</span></li>
</ol>
```

### Default content slide

Use default slides for one idea plus short supporting points.

```md
# Content Layout Example

## Default layout

Use this layout for narrative slides with a clear statement and a compact set of supporting points.

- Lead with the outcome or decision.
- Keep bullets short enough to scan from the back of a room.
- Use the slide canvas for content instead of heavy decorative frames.
```

### Two-column metric stack

Use `two-cols` for explanation plus structured supporting content.

```md
---
layout: two-cols
layoutClass: gap-10
---

# Split Layout Example

## Fundraising flow

Map the donor journey from a campaign touchpoint into CRM, payments, and reporting.

::right::

<div class="metric-stack">
  <div class="metric-card">
    <strong>01</strong>
    <span>Spenden sammeln</span>
  </div>
  <div class="metric-card">
    <strong>02</strong>
    <span>CRM synchronisieren</span>
  </div>
  <div class="metric-card">
    <strong>03</strong>
    <span>Payments abgleichen</span>
  </div>
</div>
```

If the structure grows beyond a small static block, create a Vue component instead of adding more
HTML to `slides.md`.

### Centered statement slide

Use `center` for transitions, decisions, or one strong message.

```md
---
layout: center
---

# Center Layout Example

<p class="lead">
  Use centered slides for section transitions, key decisions, or one strong product message.
</p>

<ThemeButton variant="purple">Make impact visible</ThemeButton> <ThemeButton variant="white">Keep
teams focused</ThemeButton>
```

### Imported code snippet

Use imported snippets when code should stay in a real source file.

```md
# Imported Code Snippet

The deck imports example TypeScript from `snippets/external.ts`, so template users can see the
standard Slidev snippet workflow.

<<< @/snippets/external.ts#snippet {1-5}
```

### Component demo

Use local Vue components for interactive or reusable elements.

```md
# Component Example

<div class="component-demo">
  <div>
    <span class="eyebrow">Vue component</span>
    <h2>Interactive counter</h2>
    <p>The existing `components/Counter.vue` example remains part of the deck and can be edited like any local Slidev component.</p>
  </div>

<Counter :count="12" />
</div>
```

### Agent harness slide

Use `agent-harness` for the full-slide interactive chat example.

```md
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
    ],
  }"
/>
```

### Imported slides

Use imported slide files to keep larger decks modular.

```md
---
src: ./pages/imported-slides.md
---
```

### Sources slide

Keep source slides plain and scannable.

```md
# Sources

- FundraisingBox website and product messaging: https://fundraisingbox.com
- Wikando company website: https://wikando.de
- Slidev documentation: https://sli.dev
- Fonts: Montserrat and Source Code Pro
```
