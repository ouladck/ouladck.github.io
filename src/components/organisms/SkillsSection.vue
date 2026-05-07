<script setup lang="ts">
import { skillGroups, legacySkills, certifications, languages } from '~/content/skills'

const { t, locale } = useI18n()
</script>

<template>
  <section id="skills" class="skills" aria-labelledby="skills-title">
    <div class="container">
      <header class="skills__header">
        <h2 id="skills-title" class="skills__title">{{ t('skills.title') }}</h2>
      </header>

      <div class="skills__groups">
        <div
          v-for="group in skillGroups"
          :key="group.titleEn"
          class="skills__group"
        >
          <h3 class="skills__group-title">
            {{ locale === 'fr' ? group.titleFr : group.titleEn }}
          </h3>
          <div class="skills__tags" role="list">
            <TechBadge
              v-for="skill in group.skills"
              :key="skill"
              :label="skill"
              role="listitem"
            />
          </div>
        </div>
      </div>

      <div class="skills__legacy">
        <h3 class="skills__group-title">{{ t('skills.also_with') }}</h3>
        <p class="skills__legacy-list">{{ legacySkills.join(' · ') }}</p>
      </div>

      <div class="skills__certifications">
        <h3 class="skills__group-title">{{ t('skills.certifications') }}</h3>
        <ul class="skills__cert-list">
          <li v-for="cert in certifications" :key="cert">{{ cert }}</li>
        </ul>
      </div>

      <div class="skills__languages">
        <h3 class="skills__group-title">{{ t('skills.languages') }}</h3>
        <div class="skills__tags" role="list">
          <span
            v-for="lang in languages"
            :key="lang.name"
            class="skills__lang-item"
            role="listitem"
          >
            <strong>{{ lang.name }}</strong>
            <span class="skills__lang-level">{{ lang.level }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  @include section-padding;
  background-color: var(--color-bg-primary);

  &__header {
    margin-bottom: $space-12;
    text-align: center;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 800;
  }

  &__groups {
    display: grid;
    gap: $space-8;
    margin-bottom: $space-12;

    @include respond-to($bp-md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__group-title {
    font-weight: 700;
    color: var(--color-text-primary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: $text-sm;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
  }

  &__legacy {
    padding: $space-6;
    background-color: var(--color-bg-secondary);
    border-radius: $radius-md;
    margin-bottom: $space-8;
  }

  &__legacy-list {
    font-size: $text-sm;
    color: var(--color-text-muted);
    margin-top: $space-2;
  }

  &__certifications {
    margin-bottom: $space-8;
  }

  &__cert-list {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    margin-top: $space-3;
    padding-left: $space-4;

    li {
      font-size: $text-sm;
      color: var(--color-text-secondary);
      position: relative;

      &::before {
        content: '✓';
        position: absolute;
        left: -$space-4;
        color: var(--color-success);
        font-weight: 700;
      }
    }
  }

  &__lang-item {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    padding: $space-2 $space-4;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: $radius-md;
    font-size: $text-sm;
  }

  &__lang-level {
    color: var(--color-text-muted);
    font-size: $text-xs;
  }
}
</style>
