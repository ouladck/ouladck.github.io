<script setup lang="ts">
const copied = ref(false)

const code = `export default defineConfig({
  frontend: "Vue 3 / Nuxt 3",
  quality:  "TDD · Vitest · E2E",
  infra:    "Docker · GitHub Actions",
  method:   "BEM · Atomic Design",
})`

async function copyCode() {
  await navigator.clipboard.writeText(code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="code-snippet" role="region" aria-label="Code exemple">
    <div class="code-snippet__header">
      <span class="code-snippet__filename">karim.config.ts</span>
      <button
        class="code-snippet__copy"
        :aria-label="copied ? 'Copié !' : 'Copier le code'"
        type="button"
        @click="copyCode"
      >
        {{ copied ? 'Copié ✓' : 'Copier' }}
      </button>
    </div>
    <pre class="code-snippet__body"><code>{{ code }}</code></pre>
  </div>
</template>

<style lang="scss" scoped>
.code-snippet {
  background-color: $color-bg-code;
  border-radius: $radius-md;
  overflow: hidden;
  font-family: $font-family-code;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $space-3 $space-4;
    background-color: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__filename {
    font-size: $text-sm;
    color: #a0a0c0;
  }

  &__copy {
    font-size: $text-xs;
    color: #a0a0c0;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: $radius-sm;
    padding: $space-1 $space-2;
    cursor: pointer;
    transition: all $transition-fast;
    font-family: $font-family-body;

    &:hover {
      color: #e8e8f0;
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:focus-visible {
      outline: 2px solid $color-accent;
      outline-offset: 2px;
    }
  }

  &__body {
    padding: $space-4;
    overflow-x: auto;

    code {
      font-size: $text-sm;
      line-height: 1.7;
      color: #cdd6f4;
    }
  }
}
</style>
