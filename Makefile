SHELL := bash
.DEFAULT_GOAL := help

-include .env
-include .env.local

dc = docker compose

PNPM_COMPOSE_FILE = compose.pnpm.yaml
PRETTIER_COMPOSE_FILE = compose.prettier.yaml
ACTIONLINT_COMPOSE_FILE = compose.actionlint.yaml
ZIZMOR_COMPOSE_FILE = compose.zizmor.yaml

PNPM_RUN = COMPOSE_FILE=$(PNPM_COMPOSE_FILE) $(dc) run --rm
PNPM_CONTAINER = $(PNPM_RUN) pnpm
PRETTIER_CONTAINER = COMPOSE_FILE=$(PRETTIER_COMPOSE_FILE) $(dc) run --rm prettier
PRETTIER_CHECK_CONTAINER = COMPOSE_FILE=$(PRETTIER_COMPOSE_FILE) $(dc) run --rm prettier-check

NODE_VERSION ?= 22.22.0
SLIDEV_START_PORT = $(or $(SLIDEV_PORT),3000)
PNPM_READY = pnpm runtime set node "$${NODE_VERSION:-$(NODE_VERSION)}" -g >/dev/null && pnpm config set store-dir /pnpm/store >/dev/null

.PHONY: help
help: # print documentation from comments: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@egrep -h '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort -n | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-24s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install: ## install dependencies with pnpm in Docker
	$(PNPM_CONTAINER) sh -c '$(PNPM_READY) && pnpm install --frozen-lockfile'

.PHONY: format
format: ## format files with the package.json prettier script
	$(PRETTIER_CONTAINER) sh -c '$(PNPM_READY) && pnpm run format'

.PHONY: format-check
format-check: ## check formatting with the package.json prettier script
	$(PRETTIER_CHECK_CONTAINER) sh -c '$(PNPM_READY) && pnpm run format:check'

.PHONY: build
build: ## build the Slidev static site
	$(PNPM_CONTAINER) sh -c '$(PNPM_READY) && pnpm run build'

.PHONY: lint
lint: ## lint TypeScript and Vue source files
	$(PNPM_CONTAINER) sh -c '$(PNPM_READY) && pnpm run lint'

.PHONY: typecheck
typecheck: ## type-check Vue and TypeScript source files
	$(PNPM_CONTAINER) sh -c '$(PNPM_READY) && pnpm run typecheck'

.PHONY: test
test: ## run component tests
	$(PNPM_CONTAINER) sh -c '$(PNPM_READY) && pnpm run test'

.PHONY: check
check: lint typecheck test build ## run static analysis, component tests, and build

.PHONY: static-gha
static-gha: static-gha-zizmor static-gha-actionlint ## lint GitHub Actions workflows with zizmor and actionlint

.PHONY: static-gha-zizmor
static-gha-zizmor: ## lint GitHub Actions workflows with zizmor
	COMPOSE_FILE=$(ZIZMOR_COMPOSE_FILE) $(dc) run --rm zizmor --collect=workflows .

.PHONY: static-gha-actionlint
static-gha-actionlint: ## lint GitHub Actions workflows with actionlint
	COMPOSE_FILE=$(ACTIONLINT_COMPOSE_FILE) $(dc) run --rm actionlint -color

.PHONY: dev
dev: ## start the Slidev dev server on SLIDEV_PORT or the next free port from 3000
	@start_port="$(SLIDEV_START_PORT)"; \
	if ! [[ "$$start_port" =~ ^[0-9]+$$ ]]; then \
		echo "SLIDEV_PORT must be numeric, got '$$start_port'." >&2; \
		exit 1; \
	fi; \
	port="$$start_port"; \
	is_port_taken() { \
		(: > /dev/tcp/127.0.0.1/"$$1") >/dev/null 2>&1; \
	}; \
	while is_port_taken "$$port"; do \
		port=$$((port + 1)); \
	done; \
	echo "Starting Slidev at http://localhost:$$port"; \
	SLIDEV_PORT="$$port" $(PNPM_RUN) --service-ports pnpm sh -c '$(PNPM_READY) && pnpm run dev --port "$$SLIDEV_PORT" --remote --bind 0.0.0.0 --open=false'; \
	status="$$?"; \
	if [[ "$$status" == "130" || "$$status" == "143" ]]; then \
		exit "$$status"; \
	fi; \
	if [[ "$$status" != "0" ]]; then \
		echo "Failed to start Slidev. Port $$port may have been claimed after the host check; retry or set SLIDEV_PORT=<free-port>." >&2; \
		exit "$$status"; \
	fi
