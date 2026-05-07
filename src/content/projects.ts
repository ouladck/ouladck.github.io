export interface Project {
  titleFr: string
  titleEn: string
  descriptionFr: string
  descriptionEn: string
  tags: string[]
  link: string
  linkLabel: string
}

export const projects: Project[] = [
  {
    titleFr: 'Système Multi-Agents IA',
    titleEn: 'Multi-Agent AI System',
    descriptionFr: 'Conception d\'un écosystème de 9 agents IA spécialisés pour une équipe de développement : Vue 3 Tech Lead, UX Designer, Reviewer, DevOps, QA, et plus. Chaque agent a son identité, ses standards, et ses interactions définies avec les autres.',
    descriptionEn: 'Designed an ecosystem of 9 specialized AI agents for a development team: Vue 3 Tech Lead, UX Designer, Reviewer, DevOps, QA, and more. Each agent has its own identity, standards, and defined interactions.',
    tags: ['Prompt Engineering', 'Vue 3 Expertise', 'AI Systems', 'Multi-Agent'],
    link: 'https://github.com/ouladck',
    linkLabel: 'GitHub →',
  },
  {
    titleFr: 'Ce Portfolio',
    titleEn: 'This Portfolio',
    descriptionFr: 'Site statique Nuxt 3 SSG, TypeScript strict, BEM + SCSS tokens, i18n FR/EN, dark mode, Lighthouse 95+, déployé via GitHub Actions. Preuve vivante des compétences.',
    descriptionEn: 'Static Nuxt 3 SSG site, strict TypeScript, BEM + SCSS tokens, FR/EN i18n, dark mode, Lighthouse 95+, deployed via GitHub Actions. A living proof of skills.',
    tags: ['Nuxt 3', 'SSG', 'TypeScript', 'BEM', 'a11y', 'CI/CD'],
    link: 'https://github.com/ouladck/ouladck.github.io',
    linkLabel: 'Source →',
  },
]
