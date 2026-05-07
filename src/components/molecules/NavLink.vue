<script setup lang="ts">
defineProps<{
  href: string
  label: string
  active?: boolean
}>()
</script>

<template>
  <a
    :href="href"
    class="nav-link"
    :class="{ 'nav-link--active': active }"
    :aria-current="active ? 'true' : undefined"
  >
    {{ label }}
  </a>
</template>

<style lang="scss" scoped>
.nav-link {
  font-size: $text-sm;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color $transition-fast;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width $transition-fast;
  }

  &:hover,
  &--active {
    color: var(--color-accent);

    &::after {
      width: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
    border-radius: 2px;
  }
}
</style>
