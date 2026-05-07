<script setup lang="ts">
import { projects } from '~/content/projects'

const { t, locale } = useI18n()
</script>

<template>
  <section id="projects" class="projects" aria-labelledby="projects-title">
    <div class="container">
      <header class="projects__header">
        <h2 id="projects-title" class="projects__title">{{ t('projects.title') }}</h2>
        <p class="projects__subtitle">{{ t('projects.subtitle') }}</p>
      </header>

      <div class="projects__grid">
        <article
          v-for="project in projects"
          :key="project.titleEn"
          class="projects__card"
        >
          <div class="projects__card-body">
            <h3 class="projects__card-title">
              {{ locale === 'fr' ? project.titleFr : project.titleEn }}
            </h3>
            <p class="projects__card-description">
              {{ locale === 'fr' ? project.descriptionFr : project.descriptionEn }}
            </p>

            <div class="projects__card-tags" role="list" aria-label="Technologies">
              <BaseTag
                v-for="tag in project.tags"
                :key="tag"
                :label="tag"
                role="listitem"
              />
            </div>
          </div>

          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="projects__card-link"
            :aria-label="`${locale === 'fr' ? project.titleFr : project.titleEn} — ${project.linkLabel}`"
          >
            <BaseIcon name="external-link" :size="16" aria-hidden="true" />
            {{ project.linkLabel }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
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
  }

  &__grid {
    display: grid;
    gap: $space-6;

    @include respond-to($bp-md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__card {
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: $radius-lg;
    padding: $space-6;
    box-shadow: $shadow-card;
    display: flex;
    flex-direction: column;
    gap: $space-4;
    transition: border-color $transition-fast, box-shadow $transition-fast;

    &:hover {
      border-color: var(--color-accent);
      box-shadow: $shadow-md;
    }
  }

  &__card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__card-title {
    font-size: $text-xl;
    font-weight: 700;
    color: var(--color-text-primary);
  }

  &__card-description {
    font-size: $text-base;
    color: var(--color-text-secondary);
    line-height: 1.7;
    flex: 1;
  }

  &__card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
  }

  &__card-link {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    font-size: $text-sm;
    font-weight: 600;
    color: var(--color-accent);
    text-decoration: none;
    padding-top: $space-3;
    border-top: 1px solid var(--color-border);
    transition: gap $transition-fast;

    &:hover {
      gap: $space-3;
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
}
</style>
