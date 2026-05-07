export interface ExpertiseItem {
  icon: string
  titleFr: string
  titleEn: string
  descriptionFr: string
  descriptionEn: string
  impactFr: string
  impactEn: string
}

export const expertise: ExpertiseItem[] = [
  {
    icon: 'settings',
    titleFr: 'Technical Leadership',
    titleEn: 'Technical Leadership',
    descriptionFr: 'Mentorat, code reviews, pair programming. J\'élève le niveau de toute l\'équipe et réduis le temps d\'onboarding.',
    descriptionEn: 'Mentoring, code reviews, pair programming. I raise the bar for the whole team and cut onboarding time.',
    impactFr: '"Réduit le temps d\'onboarding dev de 3 semaines à 1."',
    impactEn: '"Cut developer onboarding time from 3 weeks to 1."',
  },
  {
    icon: 'check-circle',
    titleFr: 'Quality Engineering',
    titleEn: 'Quality Engineering',
    descriptionFr: 'TDD, CI/CD, documentation structurée, Vitest + Playwright. Zéro régression en prod.',
    descriptionEn: 'TDD, CI/CD, structured documentation, Vitest + Playwright. Zero regression in production.',
    impactFr: '"Tests automatisés sur 85% du code critique."',
    impactEn: '"Automated tests on 85% of critical code."',
  },
  {
    icon: 'layers',
    titleFr: 'System Evolution',
    titleEn: 'System Evolution',
    descriptionFr: 'Modularisation, migrations, choix d\'archi pour la stabilité long terme. Du legacy à Vue 3 sans interruption.',
    descriptionEn: 'Modularization, migrations, architecture choices for long-term stability. From legacy to Vue 3 without interruption.',
    impactFr: '"Migration Vue 2 → Vue 3 sans interruption de service."',
    impactEn: '"Vue 2 → Vue 3 migration with zero service interruption."',
  },
  {
    icon: 'zap',
    titleFr: 'Performance Tuning',
    titleEn: 'Performance Tuning',
    descriptionFr: 'Optimisation Vue.js et Docker. Lighthouse 95+, bundle splitting, lazy loading.',
    descriptionEn: 'Vue.js and Docker optimization. Lighthouse 95+, bundle splitting, lazy loading.',
    impactFr: '"LCP passé de 3.2s à 1.1s sur une app e-commerce."',
    impactEn: '"LCP reduced from 3.2s to 1.1s on an e-commerce app."',
  },
]
