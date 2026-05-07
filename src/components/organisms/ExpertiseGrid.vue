<script setup lang="ts">
import { expertise } from '~/content/expertise'

const { t, locale } = useI18n()
</script>

<template>
  <section id="expertise" class="expertise" aria-labelledby="expertise-title">
    <div class="container">
      <header class="expertise__header">
        <h2 id="expertise-title" class="expertise__title">{{ t('expertise.title') }}</h2>
        <p class="expertise__subtitle">{{ t('expertise.subtitle') }}</p>
      </header>

      <div class="expertise__grid">
        <article
          v-for="item in expertise"
          :key="item.titleEn"
          class="expertise__card"
        >
          <div class="expertise__card-icon" aria-hidden="true">
            <BaseIcon :name="item.icon" :size="24" />
          </div>
          <h3 class="expertise__card-title">
            {{ locale === 'fr' ? item.titleFr : item.titleEn }}
          </h3>
          <p class="expertise__card-description">
            {{ locale === 'fr' ? item.descriptionFr : item.descriptionEn }}
          </p>
          <blockquote class="expertise__card-impact">
            {{ locale === 'fr' ? item.impactFr : item.impactEn }}
          </blockquote>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.expertise {
  @include section-padding;
  background-color: var(--color-bg-secondary);

  &__header {
    text-align: center;
    margin-bottom: $space-12;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 800;
    margin-bottom: $space-4;
  }

  &__subtitle {
    font-size: $text-lg;
    color: var(--color-text-secondary);
    max-width: 60ch;
    margin-inline: auto;
  }

  &__grid {
    display: grid;
    gap: $space-6;

    @include respond-to($bp-md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__card {
    padding: $space-6;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: $radius-lg;
    box-shadow: $shadow-card;
    display: flex;
    flex-direction: column;
    gap: $space-3;
    transition: border-color $transition-fast, box-shadow $transition-fast;

    &:hover {
      border-color: var(--color-accent);
      box-shadow: $shadow-md;
    }
  }

  &__card-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-accent-subtle);
    border-radius: $radius-md;
    color: var(--color-accent);
  }

  &__card-title {
    font-size: $text-xl;
    font-weight: 700;
  }

  &__card-description {
    font-size: $text-base;
    color: var(--color-text-secondary);
    line-height: 1.7;
    flex: 1;
  }

  &__card-impact {
    font-size: $text-sm;
    font-style: italic;
    color: var(--color-text-muted);
    padding: $space-3 $space-4;
    background-color: var(--color-accent-subtle);
    border-left: 3px solid var(--color-accent);
    border-radius: 0 $radius-sm $radius-sm 0;
    margin: 0;
  }
}
</style>
