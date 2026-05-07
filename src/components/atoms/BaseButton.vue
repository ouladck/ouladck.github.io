<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  href?: string
  target?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="base-button"
    :class="`base-button--${variant}`"
  >
    <slot />
  </a>
  <button
    v-else
    class="base-button"
    :class="`base-button--${variant}`"
    type="button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  padding: $space-3 $space-6;
  min-height: 48px;
  border-radius: $radius-md;
  font-size: $text-base;
  font-weight: 600;
  cursor: pointer;
  transition: all $transition-fast;
  border: 2px solid transparent;
  text-decoration: none;

  &--primary {
    background-color: var(--color-accent);
    color: #fff;
    border-color: var(--color-accent);

    &:hover {
      background-color: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }
  }

  &--secondary {
    background-color: transparent;
    color: var(--color-accent);
    border-color: var(--color-accent);

    &:hover {
      background-color: var(--color-accent-subtle);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
}
</style>
