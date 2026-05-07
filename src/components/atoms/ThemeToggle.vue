<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    :aria-label="theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'"
    type="button"
    @click="toggleTheme"
  >
    <span v-if="theme === 'light'" class="theme-toggle__icon" aria-hidden="true">🌙</span>
    <span v-else class="theme-toggle__icon" aria-hidden="true">☀️</span>
  </button>
</template>

<style lang="scss" scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: $radius-md;
  transition: background-color $transition-fast;

  &:hover {
    background-color: var(--color-accent-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  &__icon {
    font-size: $text-lg;
    line-height: 1;
  }
}
</style>
