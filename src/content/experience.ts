export interface ExperienceItem {
  company: string
  role: string
  period: string
  periodEn: string
  location: string
  description: string
  descriptionEn: string
  bullets: string[]
  bulletsEn: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Alptis',
    role: 'Consultant Tech Lead',
    period: 'Sep 2024 – Présent',
    periodEn: 'Sep 2024 – Present',
    location: 'Lyon, France',
    description: 'Tech lead sur des applications critiques d\'assurance avec forte responsabilité delivery et qualité.',
    descriptionEn: 'Tech lead on critical insurance applications with strong delivery and quality responsibility.',
    bullets: [
      'Code reviews systématiques et pair programming → réduction des bugs prod de ~40%.',
      'Modularisation de l\'archi, standards de test → couverture Vitest passée de 30% à 80%.',
    ],
    bulletsEn: [
      'Systematic code reviews and pair programming → ~40% reduction in production bugs.',
      'Architecture modularization, test standards → Vitest coverage from 30% to 80%.',
    ],
    tags: ['Vue 3', 'TypeScript', 'Vitest', 'BEM', 'Docker', 'CI/CD'],
  },
  {
    company: 'SKILLSHUB',
    role: 'Full Stack Engineer',
    period: 'Sep 2023 – Jul 2024',
    periodEn: 'Sep 2023 – Jul 2024',
    location: 'Remote',
    description: 'Développement full stack sur plateforme e-commerce moderne Vue 3 / Nuxt 3 + Laravel.',
    descriptionEn: 'Full stack development on a modern Vue 3 / Nuxt 3 + Laravel e-commerce platform.',
    bullets: [
      'Livré features critiques Vue 3/Nuxt 3 + Laravel 10 → plateforme e-commerce opérationnelle en 6 mois.',
      'Optimisé setup Docker + ajouté tests Vitest → temps de build réduit de 40%.',
    ],
    bulletsEn: [
      'Delivered critical Vue 3/Nuxt 3 + Laravel 10 features → e-commerce platform live in 6 months.',
      'Optimized Docker setup + added Vitest tests → build time reduced by 40%.',
    ],
    tags: ['Vue 3', 'Nuxt 3', 'Laravel 10', 'TypeScript', 'Vitest', 'Docker'],
  },
  {
    company: 'Veolia Water',
    role: 'Consultant Tech Lead',
    period: 'Fév 2022 – Août 2023',
    periodEn: 'Feb 2022 – Aug 2023',
    location: 'Saint-Maurice, France',
    description: 'Consultant technique sur des applications Vue.js pour les services d\'eau d\'une infrastructure critique.',
    descriptionEn: 'Technical consultant on Vue.js applications for critical water infrastructure services.',
    bullets: [
      'Conçu bibliothèque de composants Vue réutilisables → adoption par 3 équipes internes.',
      'Intégré hooks qualité dans le flux delivery → zéro régression sur 4 releases consécutives.',
    ],
    bulletsEn: [
      'Designed reusable Vue component library → adopted by 3 internal teams.',
      'Integrated quality hooks in the delivery flow → zero regression across 4 consecutive releases.',
    ],
    tags: ['Vue 3', 'TypeScript', 'SCSS', 'BEM', 'Atomic Design', 'Playwright'],
  },
  {
    company: 'Gear9',
    role: 'Senior Full Stack Developer',
    period: 'Août 2020 – Déc 2021',
    periodEn: 'Aug 2020 – Dec 2021',
    location: 'Casablanca, Maroc',
    description: 'Développement e-commerce storefront pour inwi.ma, l\'un des opérateurs télécom leaders au Maroc.',
    descriptionEn: 'E-commerce storefront development for inwi.ma, one of Morocco\'s leading telecom operators.',
    bullets: [
      'Shipped storefront inwi.ma (Vue Storefront) → 100k+ utilisateurs.',
      'Process estimation + suivi → delivery on-time passé de ~60% à ~90%.',
    ],
    bulletsEn: [
      'Shipped inwi.ma storefront (Vue Storefront) → 100k+ users.',
      'Estimation process + tracking → on-time delivery improved from ~60% to ~90%.',
    ],
    tags: ['Vue 2', 'Vue Storefront', 'GraphQL', 'Docker', 'Nuxt 2'],
  },
  {
    company: 'RC2K Engineering',
    role: 'Senior Full Stack Developer',
    period: 'Jan 2019 – Jul 2020',
    periodEn: 'Jan 2019 – Jul 2020',
    location: 'Casablanca, Maroc',
    description: 'Développement d\'APIs REST et modules Angular pour la plateforme de gestion d\'incidents Free/Iliad.',
    descriptionEn: 'REST API and Angular module development for the Free/Iliad incident management platform.',
    bullets: [
      'Développé APIs REST Laravel + modules Angular pour plateforme Free/Iliad.',
      'Documentation API complète → temps d\'intégration nouveaux devs réduit de moitié.',
    ],
    bulletsEn: [
      'Built Laravel REST APIs + Angular modules for the Free/Iliad platform.',
      'Complete API documentation → new developer integration time cut in half.',
    ],
    tags: ['Laravel', 'Angular', 'PHP', 'MySQL', 'REST API'],
  },
  {
    company: 'Graviton.ma',
    role: 'Full Stack Developer',
    period: 'Jan 2018 – Déc 2018',
    periodEn: 'Jan 2018 – Dec 2018',
    location: 'Rabat, Maroc',
    description: 'Conception d\'un SI agricole complet pour Cosumar avec intégration ERP Odoo conteneurisée.',
    descriptionEn: 'Designed a complete agricultural information system for Cosumar with containerized Odoo ERP integration.',
    bullets: [
      'Conçu SI agricole complet pour Cosumar + intégration ERP Odoo conteneurisée.',
      'Infrastructure maintenue à 99.5% uptime sur l\'année.',
    ],
    bulletsEn: [
      'Designed full agricultural IS for Cosumar + containerized Odoo ERP integration.',
      'Infrastructure maintained at 99.5% uptime over the year.',
    ],
    tags: ['PHP', 'Laravel', 'Odoo', 'Python', 'Docker', 'PostgreSQL'],
  },
  {
    company: 'Zayousa',
    role: 'Full Stack Developer',
    period: 'Avr 2016 – Nov 2017',
    periodEn: 'Apr 2016 – Nov 2017',
    location: 'Rabat, Maroc',
    description: 'Développement CRM pour Gazprom Energy France avec intégration e-signature DocuSign.',
    descriptionEn: 'CRM development for Gazprom Energy France with DocuSign e-signature integration.',
    bullets: [
      'CRM Gazprom Energy France : APIs + intégration e-signature DocuSign.',
      'Setup CI + scripts de migration → zéro perte de données sur 3 migrations.',
    ],
    bulletsEn: [
      'Gazprom Energy France CRM: APIs + DocuSign e-signature integration.',
      'CI setup + migration scripts → zero data loss across 3 migrations.',
    ],
    tags: ['PHP', 'AngularJS', 'MySQL', 'DocuSign', 'CI'],
  },
]
