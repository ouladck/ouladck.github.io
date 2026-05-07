# ouladck.github.io

Portfolio personnel de **Karim Oulad Chalha** — Senior Full Stack Engineer & Tech Lead Vue 3.

🌐 **Live:** [ouladck.github.io](https://ouladck.github.io)

---

## Stack

| Couche | Outil |
|--------|-------|
| Framework | Nuxt 3 (SSG) |
| Langage | TypeScript strict |
| Styling | SCSS + BEM |
| i18n | @nuxtjs/i18n (FR / EN) |
| Build | Vite |
| CI/CD | GitHub Actions → GitHub Pages |

## Setup local

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Build statique
pnpm generate

# Prévisualiser le build
pnpm preview
```

## Structure

```
src/
├── assets/scss/        # Design tokens, mixins, reset
├── components/
│   ├── atoms/          # BaseButton, BaseTag, BaseIcon, ThemeToggle
│   ├── molecules/      # StatCard, TechBadge, CodeSnippet
│   └── organisms/      # SiteHeader, HeroSection, ExperienceTimeline…
├── composables/        # useTheme, useScrollSpy, useReducedMotion
├── content/            # Données structurées (expérience, expertise, projets…)
├── i18n/               # Traductions fr.json / en.json
├── layouts/            # default.vue (header + footer)
└── pages/              # index.vue
```

## Deploy

Chaque push sur `main` déclenche le workflow GitHub Actions :
1. `pnpm install`
2. `pnpm generate` → `.output/public/`
3. Deploy sur GitHub Pages

> Activer dans : Settings → Pages → Source → **GitHub Actions**
