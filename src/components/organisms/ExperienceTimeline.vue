<script setup lang="ts">
import { experience } from '~/content/experience'

const { t, locale } = useI18n()
</script>

<template>
  <section id="experience" class="timeline" aria-labelledby="experience-title">
    <div class="container">
      <header class="timeline__header">
        <h2 id="experience-title" class="timeline__title">{{ t('experience.title') }}</h2>
        <p class="timeline__subtitle">{{ t('experience.subtitle') }}</p>
      </header>

      <div class="timeline__list">
        <article
          v-for="item in experience"
          :key="item.company"
          class="timeline__item"
        >
          <div class="timeline__dot" aria-hidden="true" />

          <div class="timeline__card">
            <header class="timeline__card-header">
              <div class="timeline__card-company">{{ item.company }}</div>
              <h3 class="timeline__card-role">{{ item.role }}</h3>
              <div class="timeline__card-meta">
                <time>{{ locale === 'fr' ? item.period : item.periodEn }}</time>
                <span aria-hidden="true"> · </span>
                <span>{{ item.location }}</span>
              </div>
            </header>

            <p class="timeline__card-description">
              {{ locale === 'fr' ? item.description : item.descriptionEn }}
            </p>

            <ul class="timeline__card-bullets" aria-label="Réalisations clés">
              <li
                v-for="bullet in (locale === 'fr' ? item.bullets : item.bulletsEn)"
                :key="bullet"
              >
                {{ bullet }}
              </li>
            </ul>

            <div class="timeline__card-tags" role="list" aria-label="Technologies">
              <TechBadge
                v-for="tag in item.tags"
                :key="tag"
                :label="tag"
                role="listitem"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeline {
  @include section-padding;
  background-color: var(--color-bg-primary);

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
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-left: $space-8;

    &::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--color-accent), var(--color-border));
    }

    @include respond-to($bp-lg) {
      padding-left: 0;
    }
  }

  &__item {
    position: relative;
    padding-bottom: $space-8;

    &:last-child {
      padding-bottom: 0;
    }
  }

  &__dot {
    position: absolute;
    left: -$space-8;
    top: $space-4;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-accent);
    border: 2px solid var(--color-bg-primary);
    box-shadow: 0 0 0 3px var(--color-accent-subtle);
  }

  &__card {
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: $radius-lg;
    padding: $space-6;
    box-shadow: $shadow-card;
    display: flex;
    flex-direction: column;
    gap: $space-4;
    transition: box-shadow $transition-fast;

    &:hover {
      box-shadow: $shadow-md;
    }
  }

  &__card-header {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__card-company {
    font-size: $text-sm;
    font-weight: 700;
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  &__card-role {
    font-size: $text-xl;
    font-weight: 700;
    color: var(--color-text-primary);
  }

  &__card-meta {
    font-size: $text-sm;
    color: var(--color-text-muted);
  }

  &__card-description {
    font-size: $text-base;
    color: var(--color-text-secondary);
    line-height: 1.7;
  }

  &__card-bullets {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    padding-left: $space-4;

    li {
      font-size: $text-sm;
      color: var(--color-text-secondary);
      position: relative;

      &::before {
        content: '→';
        position: absolute;
        left: -$space-4;
        color: var(--color-accent);
        font-weight: 700;
      }
    }
  }

  &__card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    padding-top: $space-2;
    border-top: 1px solid var(--color-border);
  }
}
</style>
