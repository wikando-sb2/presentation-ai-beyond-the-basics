<template>
  <div class="theme-metric-stack-item">
    <strong />
    <span><slot /></span>
  </div>
</template>

<style scoped>
.theme-metric-stack-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid var(--fbx-border);
  border-radius: 999px;
  background: var(--fbx-panel);
  box-shadow: var(--fbx-shadow-soft);
  counter-increment: metric;
}

.theme-metric-stack-item strong::before {
  content: counter(metric, decimal-leading-zero);
}

.theme-metric-stack-item strong {
  color: var(--fbx-green);
  font-family: var(--fbx-font-mono);
  font-size: 1.45rem;
}

.theme-metric-stack-item span {
  color: var(--fbx-heading);
  font-weight: 700;
}
</style>
