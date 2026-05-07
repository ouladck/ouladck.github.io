export interface Testimonial {
  quote: string
  quoteEn: string
  author: string
  role: string
  company: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Karim possède une combinaison rare de compétences techniques solides et de sens du delivery. Sa capacité à élever le niveau de l\'équipe tout en maintenant une haute vélocité est précieuse.',
    quoteEn: 'Karim has a rare combination of strong technical skills and delivery sense. His ability to raise the team\'s level while maintaining high velocity is invaluable.',
    author: 'Collaborateur LinkedIn',
    role: 'Ingénieur Senior',
    company: 'Recommandation LinkedIn',
    initials: 'CL',
  },
]
