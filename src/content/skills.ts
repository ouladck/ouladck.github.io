export interface SkillGroup {
  titleFr: string
  titleEn: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    titleFr: 'Core Stack',
    titleEn: 'Core Stack',
    skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vite', 'Pinia', 'Vue Router'],
  },
  {
    titleFr: 'Qualité & Tests',
    titleEn: 'Quality & Testing',
    skills: ['Vitest', 'Playwright', 'TDD', 'SonarQube', 'ESLint', 'Prettier'],
  },
  {
    titleFr: 'Architecture & Méthodes',
    titleEn: 'Architecture & Methods',
    skills: ['Atomic Design', 'BEM', 'SCSS', 'Composables', 'Code Review', 'Pair Programming'],
  },
  {
    titleFr: 'Infrastructure',
    titleEn: 'Infrastructure',
    skills: ['Docker', 'Laravel', 'GitHub Actions', 'Git', 'CI/CD', 'Linux'],
  },
]

export const legacySkills = ['Angular', 'Vue Storefront', 'PHP', 'Python', 'MySQL', 'PostgreSQL', 'Odoo', 'AngularJS']

export const certifications = [
  'Microsoft Exam 483 — Programming in C#',
  'Microsoft Exam 480 — HTML5/JS/CSS3',
  'Big Data Engineer (2020)',
  'Scrum Foundation Professional Certificate (SFPC)',
]

export const languages = [
  { name: 'Français', level: 'Professionnel' },
  { name: 'English', level: 'Professional' },
  { name: 'العربية / Darija', level: 'Natif' },
]
