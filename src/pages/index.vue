<script setup lang="ts">
const { initTheme } = useTheme()
const { t, locale } = useI18n()

onMounted(() => {
  initTheme()
})

useHead({
  htmlAttrs: { lang: locale.value },
})

watch(locale, (val) => {
  useHead({ htmlAttrs: { lang: val } })
})
</script>

<template>
  <main id="main-content">
    <HeroSection />
    <ExpertiseGrid />
    <ExperienceTimeline />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
</template>
