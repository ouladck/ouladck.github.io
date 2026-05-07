<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div class="stat-card">
    <span class="stat-card__value">{{ value }}</span>
    <span class="stat-card__label">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-1;
  padding: $space-4 $space-6;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: $radius-md;
  box-shadow: $shadow-card;
  transition: box-shadow $transition-fast, transform $transition-fast;

  &:hover {
    box-shadow: $shadow-md;
    transform: translateY(-2px);
  }

  &__value {
    font-size: $text-2xl;
    font-weight: 700;
    color: var(--color-accent);
  }

  &__label {
    font-size: $text-sm;
    color: var(--color-text-muted);
    text-align: center;
  }
}
</style>
