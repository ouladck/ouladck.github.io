<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="base-tag">{{ label }}</span>
</template>

<style lang="scss" scoped>
.base-tag {
  display: inline-flex;
  align-items: center;
  padding: $space-1 $space-3;
  border-radius: $radius-full;
  background-color: var(--color-tag-bg);
  color: var(--color-tag-text);
  font-size: $text-xs;
  font-weight: 500;
  letter-spacing: 0.02em;
}
</style>
