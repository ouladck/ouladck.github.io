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
    quote: '<!-- TODO: Coller ici votre recommandation LinkedIn #1 (texte complet) -->',
    quoteEn: '<!-- TODO: Paste LinkedIn recommendation #1 here (full text) -->',
    author: '<!-- Prénom NOM -->',
    role: '<!-- Titre du poste -->',
    company: '<!-- Entreprise -->',
    initials: '??',
  },
  {
    quote: '<!-- TODO: Coller ici votre recommandation LinkedIn #2 (texte complet) -->',
    quoteEn: '<!-- TODO: Paste LinkedIn recommendation #2 here (full text) -->',
    author: '<!-- Prénom NOM -->',
    role: '<!-- Titre du poste -->',
    company: '<!-- Entreprise -->',
    initials: '??',
  },
]
