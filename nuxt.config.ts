export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  srcDir: 'src/',

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (content: string, filepath: string) => {
            // main.scss handles its own @use statements; skip injection to avoid double-import
            if (filepath.includes('main.scss')) return content
            return `@use "~/assets/scss/_variables.scss" as *;\n@use "~/assets/scss/_mixins.scss" as *;\n${content}`
          },
        },
      },
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    restructureDir: 'src/i18n',
    langDir: './',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Karim Oulad Chalha — Senior Vue 3 Tech Lead & Full Stack Engineer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio de Karim Oulad Chalha. Senior Full Stack Engineer, Tech Lead Vue 3 / Nuxt 3 — 10+ ans d\'expérience en santé, e-commerce, télécom. Basé à Lyon, France.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Karim Oulad Chalha — Senior Vue 3 Tech Lead' },
        {
          property: 'og:description',
          content:
            '10+ ans d\'expérience Full Stack. Vue 3, Nuxt 3, TypeScript, Laravel, Docker. Disponible pour consulting.',
        },
        { property: 'og:image', content: 'https://ouladck.github.io/og-image.png' },
        { property: 'og:url', content: 'https://ouladck.github.io' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Karim Oulad Chalha — Senior Vue 3 Tech Lead' },
        { name: 'twitter:image', content: 'https://ouladck.github.io/og-image.png' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'canonical', href: 'https://ouladck.github.io' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Karim Oulad Chalha',
            jobTitle: 'Senior Full Stack Engineer & Tech Lead',
            url: 'https://ouladck.github.io',
            sameAs: [
              'https://www.linkedin.com/in/karim88',
              'https://github.com/ouladck',
              'https://hashnode.com/@karimslab',
            ],
            knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'Laravel', 'Docker'],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'La Mulatière',
              addressRegion: 'Auvergne-Rhône-Alpes',
              addressCountry: 'FR',
            },
          }),
        },
      ],
    },
  },
})
