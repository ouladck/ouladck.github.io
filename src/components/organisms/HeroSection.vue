<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="hero" class="hero" aria-labelledby="hero-title">
    <div class="hero__inner container">
      <div class="hero__content">
        <p class="hero__subtitle">{{ t('hero.subtitle') }}</p>
        <h1 id="hero-title" class="hero__title">{{ t('hero.title') }}</h1>
        <p class="hero__description">{{ t('hero.description') }}</p>

        <div class="hero__actions">
          <BaseButton href="#experience">
            {{ t('hero.cta_experience') }}
          </BaseButton>
          <BaseButton variant="secondary" href="#contact">
            {{ t('hero.cta_contact') }}
          </BaseButton>
        </div>

        <div class="hero__stats" aria-label="Statistiques clés">
          <StatCard :value="t('hero.stat1_value')" :label="t('hero.stat1_label')" />
          <StatCard :value="t('hero.stat2_value')" :label="t('hero.stat2_label')" />
          <StatCard :value="t('hero.stat3_value')" :label="t('hero.stat3_label')" />
        </div>
      </div>

      <div class="hero__code-wrapper">
        <CodeSnippet />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  @include section-padding;
  background-color: var(--color-bg-primary);

  &__inner {
    display: grid;
    gap: $space-12;

    @include respond-to($bp-lg) {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-6;
  }

  &__subtitle {
    font-size: $text-sm;
    font-weight: 600;
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--color-text-primary);

    @include respond-to($bp-lg) {
      font-size: $text-4xl;
    }
  }

  &__description {
    font-size: $text-lg;
    color: var(--color-text-secondary);
    line-height: 1.7;
    max-width: 52ch;
  }

  &__actions {
    display: flex;
    gap: $space-4;
    flex-wrap: wrap;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-3;

    @include respond-to($bp-sm) {
      grid-template-columns: repeat(3, auto);
      justify-content: start;
    }
  }

  &__code-wrapper {
    @include respond-to($bp-lg) {
      position: sticky;
      top: 80px;
    }
  }
}
</style>
