<script setup lang="ts">
import { testimonials } from '~/content/testimonials'

const { t, locale } = useI18n()
</script>

<template>
  <section id="testimonials" class="testimonials" aria-labelledby="testimonials-title">
    <div class="container">
      <header class="testimonials__header">
        <h2 id="testimonials-title" class="testimonials__title">{{ t('testimonials.title') }}</h2>
      </header>

      <div class="testimonials__grid">
        <blockquote
          v-for="item in testimonials"
          :key="item.author"
          class="testimonials__card"
        >
          <p class="testimonials__quote">
            "{{ locale === 'fr' ? item.quote : item.quoteEn }}"
          </p>
          <footer class="testimonials__author">
            <div class="testimonials__avatar" aria-hidden="true">{{ item.initials }}</div>
            <div>
              <cite class="testimonials__author-name">{{ item.author }}</cite>
              <p class="testimonials__author-role">{{ item.role }} · {{ item.company }}</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  @include section-padding;
  background-color: var(--color-bg-secondary);

  &__header {
    text-align: center;
    margin-bottom: $space-12;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 800;
  }

  &__grid {
    max-width: 700px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: $space-6;
  }

  &__card {
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: $radius-lg;
    padding: $space-8;
    box-shadow: $shadow-card;
    margin: 0;
  }

  &__quote {
    font-size: $text-lg;
    line-height: 1.7;
    color: var(--color-text-primary);
    font-style: italic;
    margin-bottom: $space-6;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--color-accent-subtle);
    color: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: $text-sm;
    flex-shrink: 0;
  }

  &__author-name {
    font-style: normal;
    font-weight: 600;
    font-size: $text-sm;
    color: var(--color-text-primary);
  }

  &__author-role {
    font-size: $text-xs;
    color: var(--color-text-muted);
    margin-top: 2px;
  }
}
</style>
