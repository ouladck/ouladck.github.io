<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="site-footer__inner container">
      <p class="site-footer__name">Karim Oulad Chalha · La Mulatière, France</p>
      <p class="site-footer__built">{{ t('footer.built') }}</p>

      <nav class="site-footer__links" aria-label="Liens sociaux">
        <a
          href="https://github.com/ouladck"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub — ouladck"
          class="site-footer__link"
        >
          <BaseIcon name="github" :size="20" />
        </a>
        <a
          href="https://www.linkedin.com/in/karim88"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn — Karim Oulad Chalha"
          class="site-footer__link"
        >
          <BaseIcon name="linkedin" :size="20" />
        </a>
        <a
          href="https://hashnode.com/@karimslab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blog Hashnode — karimslab"
          class="site-footer__link"
        >
          <BaseIcon name="external-link" :size="20" />
        </a>
      </nav>

      <p class="site-footer__copy">© {{ year }}</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  padding: $space-8 0;
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-3;
    text-align: center;

    @include respond-to($bp-md) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  &__name {
    font-weight: 600;
    font-size: $text-sm;
    color: var(--color-text-primary);
  }

  &__built {
    font-size: $text-xs;
    color: var(--color-text-muted);
  }

  &__links {
    display: flex;
    gap: $space-4;
  }

  &__link {
    color: var(--color-text-muted);
    transition: color $transition-fast;
    display: flex;

    &:hover {
      color: var(--color-accent);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 4px;
      border-radius: 2px;
    }
  }

  &__copy {
    font-size: $text-xs;
    color: var(--color-text-muted);
  }
}
</style>
