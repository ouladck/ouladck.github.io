<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="tech-badge">{{ label }}</span>
</template>

<style lang="scss" scoped>
.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: $space-1 $space-3;
  border-radius: $radius-full;
  background-color: var(--color-accent-subtle);
  color: var(--color-accent);
  font-size: $text-xs;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.2);
}
</style>
