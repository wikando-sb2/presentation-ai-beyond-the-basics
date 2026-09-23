<template>
  <div class="slidev-layout section-cover">
    <main class="section-cover-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.section-cover {
  display: grid;
  place-items: center;
  text-align: center;
  background:
    radial-gradient(ellipse at 50% 88%, #0b5049 0%, transparent 53%),
    radial-gradient(ellipse at 90% 0%, #163e3b 0%, transparent 55%), #071b21;
}
.section-cover-content {
  width: 100%;
  max-width: 48rem;
}
.section-cover :deep(h1) {
  color: #fff;
  margin: 0 auto 1rem;
  text-wrap: balance;
}
</style>
