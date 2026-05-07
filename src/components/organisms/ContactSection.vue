<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="contact__title">{{ t('contact.title') }}</h2>
      <p class="contact__subtitle">{{ t('contact.subtitle') }}</p>

      <div class="contact__links">
        <a
          href="mailto:ouladchalha.k@gmail.com"
          class="contact__link"
          :aria-label="t('contact.email') + ' — ouladchalha.k@gmail.com'"
        >
          <BaseIcon name="mail" :size="20" aria-hidden="true" />
          {{ t('contact.email') }}
        </a>
        <a
          href="https://www.linkedin.com/in/karim88"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__link"
          :aria-label="t('contact.linkedin') + ' — Profil LinkedIn Karim'"
        >
          <BaseIcon name="linkedin" :size="20" aria-hidden="true" />
          LinkedIn
        </a>
        <a
          href="tel:+33XXXXXXXXX"
          class="contact__link"
          :aria-label="t('contact.phone')"
        >
          <BaseIcon name="phone" :size="20" aria-hidden="true" />
          {{ t('contact.phone') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  @include section-padding;
  background-color: var(--color-bg-primary);
  text-align: center;

  &__title {
    font-size: $text-3xl;
    font-weight: 800;
    margin-bottom: $space-4;

    @include respond-to($bp-lg) {
      font-size: $text-4xl;
    }
  }

  &__subtitle {
    font-size: $text-lg;
    color: var(--color-text-secondary);
    margin-bottom: $space-12;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: $space-4;
    justify-content: center;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    padding: $space-3 $space-6;
    min-height: 48px;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: $radius-md;
    font-size: $text-base;
    font-weight: 600;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: all $transition-fast;

    &:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
      box-shadow: $shadow-md;
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }
}
</style>
