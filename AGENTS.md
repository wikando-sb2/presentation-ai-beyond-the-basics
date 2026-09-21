# Instructions for AIs

- Ask clarifying questions when requirements are ambiguous, instead of assuming.
- Prioritize clear, readable, and maintainable code.
- Use descriptively named methods and variables instead of comments.

## Completion Guardrail

Consider a task complete only after:

- `make build` succeeds without errors.
- `make format-check` succeeds without errors.

## Package Manager

For security reasons, never use npm instead of pnpm.
If pnpm is not available, use the official Docker image.
See the [pnpm Docker docs](https://pnpm.io/docker) for more.

## Browser Automation

Use the Playwright skill to validate changes when larger layout, visual, or interaction changes may
affect how the presentation renders in a browser.
Always run it with `pnpx @playwright/cli`.

## Slidev Syntax

- Keep `comark: true` in the top-level `slides.md` headmatter. New slides may rely on Slidev
  Comark syntax by default.

## Repository Context

Check the Git remote before deciding which instructions apply:

- If the remote repository is `wikando/slidev-template`, this repository is the shared Slidev template.
  Follow [Template Instructions](AGENTS.template.md).
- If the remote repository is anything else, this repository is a presentation created from the template.
  Follow [Presentation Instructions](AGENTS.presentation.md).
