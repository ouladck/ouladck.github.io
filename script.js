document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal');
    const snippetContainer = document.getElementById('tech-snippet');
    const snippetLang = document.getElementById('snippet-lang');
    const copyButton = document.getElementById('copy-snippet');
    const techChips = document.querySelectorAll('.tech-chip');
    const langButtons = document.querySelectorAll('.lang-btn');
    const startYear = 2016;
    const supportedLanguages = ['en', 'fr'];
    let currentSnippetText = '';
    let currentLanguage = 'en';

    const translations = {
        en: {
            title: 'Karim Oulad Chalha - Full Stack & Front-end Engineer',
            nav: ['Experience', 'Expertise', 'Contact'],
            headerCall: 'Book a call',
            eyebrow: 'Full Stack Engineer · Front-end Engineer',
            heroTitle: 'Shipping modern Vue 3 & Nuxt 3 products with clarity and speed.',
            heroLead: 'Senior Full Stack Developer with {years} of experience building scalable web applications and leading teams across health insurance, e-commerce, utilities, and CRM platforms.',
            heroActions: ['View experience', 'Get in touch'],
            heroStatLabels: ['Full Stack development', 'Core front-end stack', 'France & Morocco'],
            overviewChip: 'Overview',
            copy: { idle: 'Copy', ok: 'Copied', fail: 'Failed' },
            expertise: {
                title: 'Expertise built for modern teams',
                subtitle: 'From greenfield builds to platform hardening, I focus on scale, velocity, and quality.',
                cards: [
                    {
                        title: 'Technical leadership',
                        body: 'Mentoring, code reviews, and pair programming to elevate team delivery.'
                    },
                    {
                        title: 'Quality engineering',
                        body: 'TDD, CI/CD pipelines, and structured documentation for reliable releases.'
                    },
                    {
                        title: 'System evolution',
                        body: 'Modularization, migrations, and architecture decisions for long-term stability.'
                    },
                    {
                        title: 'Performance tuning',
                        body: 'Optimizing Vue.js codebases and Docker setups for speed and efficiency.'
                    }
                ]
            },
            work: {
                title: 'Experience',
                subtitle: 'Selected roles across France and Morocco.',
                items: [
                    {
                        title: 'Alptis · Consultat Tech Lead',
                        meta: 'Sep 2024 - Present · Lyon, France · Health insurance platform (Alptis Group)',
                        summary: 'Technical lead on business-critical insurance applications with strong delivery and quality ownership.',
                        points: [
                            'Led team rituals, mentoring, pair programming, and systematic code reviews.',
                            'Drove architecture evolution, modularization, testing standards, and performance practices.'
                        ]
                    },
                    {
                        title: 'SKILLSHUB · Full Stack Engineer',
                        meta: 'Sep 2023 - Jul 2024 · Remote · Vue 3/Nuxt 3 & Laravel 10 e-commerce platform',
                        summary: 'Delivered core features and integrations for an e-commerce stack with strong delivery ownership.',
                        points: [
                            'Built new capabilities in Vue 3/Nuxt 3 and Laravel across legacy and new services.',
                            'Improved Docker setup, estimations, and project execution tracking with unit testing on Vitest.'
                        ]
                    },
                    {
                        title: 'Veolia Water · Consultat Tech Lead',
                        meta: 'Feb 2022 - Aug 2023 · St-Maurice, France · Monitoring app for Veolia Water',
                        summary: 'Consulting mission focused on scalable monitoring workflows and reusable frontend modules.',
                        points: [
                            'Designed and delivered reusable Vue components and integrated quality hooks in delivery flow.',
                            'Contributed to functional analysis, technical decisions, and refactoring for stability and performance.'
                        ]
                    },
                    {
                        title: 'Gear9 · Senior Full Stack Developer',
                        meta: 'Aug 2020 - Dec 2021 · Casablanca, Morocco · Vue Storefront for inwi.ma',
                        summary: 'Senior delivery role on telecom e-commerce with ownership from planning to production rollout.',
                        points: [
                            'Built and shipped features for storefront and backend services with structured team coordination.',
                            'Handled estimation, follow-up, issue resolution, refactoring, and deployment quality checks.'
                        ]
                    },
                    {
                        title: 'RC2K Engineering · Senior Full Stack Developer',
                        meta: 'Jan 2019 - Jul 2020 · Casablanca, Morocco · Incident management for Free/Iliad',
                        summary: 'Contributed to an incident management platform with API and frontend responsibilities.',
                        points: [
                            'Developed REST APIs in Laravel and Angular client modules, including documentation and maintenance.',
                            'Supported planning, team coordination, validation workflows, and production issue handling.'
                        ]
                    },
                    {
                        title: 'Graviton.ma · Full Stack Developer',
                        meta: 'Jan 2018 - Dec 2018 · Rabat, Morocco · Agricultural IS for Cosumar + Odoo',
                        summary: 'Led full-stack implementation of an agricultural information system with ERP integration.',
                        points: [
                            'Designed APIs and interactive frontend modules, plus containerized Odoo customization.',
                            'Maintained infrastructure availability and delivered additional tooling and mobile initiatives.'
                        ]
                    },
                    {
                        title: 'Zayousa · Full Stack Developer',
                        meta: 'Apr 2016 - Nov 2017 · Rabat, Morocco · CRM for Gazprom Energy France',
                        summary: 'Built CRM capabilities for energy distribution workflows and data migration pipelines.',
                        points: [
                            'Implemented APIs, AngularJS client features, and DocuSign-based e-signature integrations.',
                            'Delivered CI setup, data migration scripts, and onboarding support for incoming developers.'
                        ]
                    }
                ]
            },
            skills: {
                title: 'Skills & Certifications',
                subtitle: 'Core strengths, languages, and professional certifications.',
                cards: [
                    {
                        title: 'Top skills',
                        body: 'Block Element Modifier (BEM), ESLint, Vitest.'
                    },
                    {
                        title: 'Competencies',
                        body: 'Angular, Vue.js, Vue Storefront, Laravel, Python, SSH, Git, GNU/Linux.'
                    },
                    {
                        title: 'Languages',
                        body: 'English (Professional), French (Professional), Arabic (Native).'
                    },
                    {
                        title: 'Certifications',
                        body: 'Exam 483 (C#), Exam 480 (HTML5/JS/CSS3), Big Data Engineer (2020), SFPC.'
                    }
                ]
            },
            contact: {
                title: 'Let\'s build your next release',
                subtitle: 'Available for consulting and long-term collaborations.',
                actions: ['Email me', 'LinkedIn', 'Call']
            },
            footer: {
                name: 'Karim Oulad Chalha',
                location: 'La Mulatiere, Auvergne-Rhone-Alpes, France'
            }
        },
        fr: {
            title: 'Karim Oulad Chalha - Ingenieur Full Stack & Front-end',
            nav: ['Experiences', 'Expertise', 'Contact'],
            headerCall: 'Reserver un appel',
            eyebrow: 'Ingenieur Full Stack · Ingenieur Front-end',
            heroTitle: 'Concevoir et livrer des produits Vue 3 & Nuxt 3 modernes, avec clarte et rapidite.',
            heroLead: 'Developpeur Full Stack Senior avec {years} d\'experience dans la creation d\'applications web evolutives, au service de la sante, de l\'e-commerce, des utilities et des CRM.',
            heroActions: ['Voir les experiences', 'Me contacter'],
            heroStatLabels: ['Developpement Full Stack', 'Stack front-end principale', 'France & Maroc'],
            overviewChip: 'Vue globale',
            copy: { idle: 'Copier', ok: 'Copie', fail: 'Echec' },
            expertise: {
                title: 'Expertise orientee equipes modernes',
                subtitle: 'Du greenfield a la fiabilisation de plateforme, je vise echelle, velocite et qualite.',
                cards: [
                    {
                        title: 'Leadership technique',
                        body: 'Mentorat, revues de code et pair programming pour elevee la qualite de livraison.'
                    },
                    {
                        title: 'Ingenierie qualite',
                        body: 'TDD, pipelines CI/CD et documentation structuree pour des releases fiables.'
                    },
                    {
                        title: 'Evolution systeme',
                        body: 'Modularisation, migrations et choix d\'architecture pour une stabilite durable.'
                    },
                    {
                        title: 'Optimisation performance',
                        body: 'Optimisation de codebases Vue.js et configurations Docker pour plus d\'efficacite.'
                    }
                ]
            },
            work: {
                title: 'Experiences',
                subtitle: 'Missions selectionnees en France et au Maroc.',
                items: [
                    {
                        title: 'Alptis · Consultat Tech Lead',
                        meta: 'Sep 2024 - Present · Lyon, France · Plateforme assurance sante (Groupe Alptis)',
                        summary: 'Tech lead sur des applications critiques avec forte exigence de qualite et de livraison.',
                        points: [
                            'Animation equipe, mentorat, pair programming et revues de code systematiques.',
                            'Evolution architecture, modularisation, standards de test et pratiques de performance.'
                        ]
                    },
                    {
                        title: 'SKILLSHUB · Full Stack Engineer',
                        meta: 'Sep 2023 - Jul 2024 · Remote · Plateforme e-commerce Vue 3/Nuxt 3 & Laravel 10',
                        summary: 'Livraison de fonctionnalites et integrations pour une stack e-commerce complete.',
                        points: [
                            'Developpement de fonctionnalites Vue 3/Nuxt 3 et Laravel sur services legacy et modernes.',
                            'Amelioration de la configuration Docker, de l\'estimation et du suivi projet avec tests Vitest.'
                        ]
                    },
                    {
                        title: 'Veolia Water · Consultat Tech Lead',
                        meta: 'Feb 2022 - Aug 2023 · St-Maurice, France · Application de monitoring Veolia Water',
                        summary: 'Mission de conseil orientee scalabilite des workflows et reutilisabilite front-end.',
                        points: [
                            'Conception de composants Vue reutilisables et integration des garde-fous qualite.',
                            'Participation a l\'analyse fonctionnelle, aux choix techniques et au refactoring.'
                        ]
                    },
                    {
                        title: 'Gear9 · Senior Full Stack Developer',
                        meta: 'Aug 2020 - Dec 2021 · Casablanca, Maroc · Vue Storefront pour inwi.ma',
                        summary: 'Role senior sur e-commerce telecom, de la planification jusqu\'a la mise en production.',
                        points: [
                            'Livraison de fonctionnalites storefront et backend avec coordination equipe structuree.',
                            'Estimation, suivi, resolution des incidents, refactoring et controle qualite deploiement.'
                        ]
                    },
                    {
                        title: 'RC2K Engineering · Senior Full Stack Developer',
                        meta: 'Jan 2019 - Jul 2020 · Casablanca, Maroc · Gestion d\'incidents Free/Iliad',
                        summary: 'Contribution a une plateforme de gestion d\'incidents, cote API et front-end.',
                        points: [
                            'Developpement d\'API REST Laravel et modules Angular, documentation et maintenance.',
                            'Support planning, coordination equipe, validation et traitement d\'incidents prod.'
                        ]
                    },
                    {
                        title: 'Graviton.ma · Full Stack Developer',
                        meta: 'Jan 2018 - Dec 2018 · Rabat, Maroc · SI agricole pour Cosumar + Odoo',
                        summary: 'Pilotage full stack d\'un SI agricole avec integration ERP.',
                        points: [
                            'Conception d\'API et modules front interactifs, avec personnalisation Odoo containerisee.',
                            'Maintien de la disponibilite infra et livraison d\'initiatives outillage/mobile.'
                        ]
                    },
                    {
                        title: 'Zayousa · Full Stack Developer',
                        meta: 'Apr 2016 - Nov 2017 · Rabat, Maroc · CRM pour Gazprom Energy France',
                        summary: 'Construction de fonctionnalites CRM et de pipelines de migration de donnees.',
                        points: [
                            'Implementation API, front AngularJS et integration e-signature DocuSign.',
                            'Mise en place CI, scripts de migration et onboarding des nouveaux developpeurs.'
                        ]
                    }
                ]
            },
            skills: {
                title: 'Competences & Certifications',
                subtitle: 'Forces principales, langues et certifications professionnelles.',
                cards: [
                    {
                        title: 'Top skills',
                        body: 'Block Element Modifier (BEM), ESLint, Vitest.'
                    },
                    {
                        title: 'Competences',
                        body: 'Angular, Vue.js, Vue Storefront, Laravel, Python, SSH, Git, GNU/Linux.'
                    },
                    {
                        title: 'Langues',
                        body: 'Anglais (Professionnel), Francais (Professionnel), Arabe (Natif).'
                    },
                    {
                        title: 'Certifications',
                        body: 'Exam 483 (C#), Exam 480 (HTML5/JS/CSS3), Big Data Engineer (2020), SFPC.'
                    }
                ]
            },
            contact: {
                title: 'Construisons votre prochaine release',
                subtitle: 'Disponible pour des missions de conseil et collaborations long terme.',
                actions: ['M\'ecrire', 'LinkedIn', 'Appeler']
            },
            footer: {
                name: 'Karim Oulad Chalha',
                location: 'La Mulatiere, Auvergne-Rhone-Alpes, France'
            }
        }
    };

    const snippets = {
        default: {
            lang: 'config',
            lines: [
                'const delivery = build({',
                '  stack: { frontend: "Vue 3 / Nuxt 3", backend: "Laravel" },',
                '  quality: { tests: "Vitest + Playwright", ci: "CI/CD" },',
                '  infra: { container: "Docker", env: "staging/prod" }',
                '});'
            ]
        },
        vue: {
            lang: 'vue',
            lines: [
                '<template>',
                '  <TaskBoard :items="tasks" @move="onMove" />',
                '</template>',
                '',
                '<script setup lang="ts">',
                'import { ref, onMounted } from "vue";',
                'const tasks = ref<Task[]>([]);',
                'const onMove = (id: string, lane: string) => updateLane(id, lane);',
                'onMounted(async () => { tasks.value = await fetchTasks(); });',
                '</script>'
            ]
        },
        nuxt: {
            lang: 'typescript',
            lines: [
                'const { data: projects } = await useAsyncData(',
                '  "projects",',
                '  () => $fetch("/api/projects")',
                ');',
                'definePageMeta({ middleware: ["auth"] });'
            ]
        },
        laravel: {
            lang: 'php',
            lines: [
                'Route::middleware("auth:sanctum")->group(function () {',
                '  Route::get("/projects", [ProjectController::class, "index"]);',
                '  Route::post("/projects", [ProjectController::class, "store"]);',
                '});'
            ]
        },
        vitest: {
            lang: 'typescript',
            lines: [
                'import { describe, it, expect } from "vitest";',
                'import { formatMoney } from "./money";',
                '',
                'it("formats euro values", () => {',
                '  expect(formatMoney(1250)).toBe("€12.50");',
                '});'
            ]
        },
        docker: {
            lang: 'yaml',
            lines: [
                'services:',
                '  app:',
                '    build: .',
                '    ports: ["3000:3000"]',
                '    depends_on: ["db"]'
            ]
        },
        playwright: {
            lang: 'typescript',
            lines: [
                'import { test, expect } from "@playwright/test";',
                '',
                'test("checkout flow", async ({ page }) => {',
                '  await page.goto("/checkout");',
                '  await expect(page.getByText("Payment")).toBeVisible();',
                '});'
            ]
        }
    };

    const escapeHtml = (value) => value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    const highlightLine = (line) => {
        let html = escapeHtml(line);
        const storedStrings = [];

        html = html.replace(/(".*?"|'.*?')/g, (match) => {
            const token = `__STR_${storedStrings.length}__`;
            storedStrings.push(`<span class="token-string">${match}</span>`);
            return token;
        });
        html = html.replace(/\b(const|await|async|import|from|function|return)\b/g, '<span class="token-keyword">$1</span>');
        html = html.replace(/\b(definePageMeta|useAsyncData|ref|describe|it|expect|test|onMounted|fetchTasks|updateLane)\b/g, '<span class="token-function">$1</span>');
        html = html.replace(/\b(Route|ProjectController|TaskBoard|page)\b/g, '<span class="token-type">$1</span>');
        html = html.replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');
        html = html.replace(/\b(services|app|build|ports|depends_on)\b(?=:)/g, '<span class="token-key">$1</span>');
        html = html.replace(/\bsetup\b/g, '<span class="token-attr-setup">setup</span>');
        html = html.replace(/\blang\b/g, '<span class="token-attr-lang">lang</span>');
        html = html.replace(/(&lt;\/?[a-zA-Z0-9][^&]*?&gt;)/g, '<span class="token-tag">$1</span>');
        html = html.replace(/__STR_(\d+)__/g, (_, index) => storedStrings[Number(index)]);

        return html;
    };

    const renderSnippet = (tech) => {
        const snippet = snippets[tech] || snippets.default;
        const lines = snippet.lines;
        if (!snippetContainer) {
            return;
        }

        snippetContainer.classList.add('is-switching');
        snippetContainer.replaceChildren();
        currentSnippetText = lines.join('\n');
        if (snippetLang) {
            snippetLang.textContent = snippet.lang;
        }

        lines.forEach((line, index) => {
            const paragraph = document.createElement('p');
            paragraph.className = 'code-line';
            paragraph.innerHTML = `<span class="line-number">${index + 1}</span><span class="line-content">${highlightLine(line)}</span>`;
            snippetContainer.appendChild(paragraph);
        });

        setTimeout(() => snippetContainer.classList.remove('is-switching'), 120);
    };

    const setText = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) {
            el.textContent = value;
        }
    };

    const yearsValue = () => Math.max(0, new Date().getFullYear() - startYear);

    const applyLanguage = (language) => {
        const lang = supportedLanguages.includes(language) ? language : 'en';
        const t = translations[lang];
        const years = yearsValue();
        const yearsLong = lang === 'fr' ? `${years}+ ans` : `${years}+ years`;
        const yearsShort = lang === 'fr' ? `${years}+ ans` : `${years}+ yrs`;

        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.title = t.title;

        const navLinks = document.querySelectorAll('.site-nav a');
        navLinks.forEach((link, index) => {
            if (t.nav[index]) {
                link.textContent = t.nav[index];
            }
        });

        setText('.header-actions .btn-ghost', t.headerCall);
        setText('.eyebrow', t.eyebrow);
        setText('.hero h1', t.heroTitle);

        const lead = document.querySelector('.hero .lead');
        if (lead) {
            lead.innerHTML = t.heroLead.replace('{years}', `<span id="exp-years-full">${yearsLong}</span>`);
        }

        const ctaButtons = document.querySelectorAll('.cta-row a');
        ctaButtons.forEach((button, index) => {
            if (t.heroActions[index]) {
                button.textContent = t.heroActions[index];
            }
        });

        setText('#exp-years-short', yearsShort);
        setText('.meta-row .stat:nth-child(1) .stat-label', t.heroStatLabels[0]);
        setText('.meta-row .stat:nth-child(2) .stat-label', t.heroStatLabels[1]);
        setText('.meta-row .stat:nth-child(3) .stat-label', t.heroStatLabels[2]);

        setText('.tech-chip[data-tech="default"]', t.overviewChip);
        if (copyButton) {
            copyButton.textContent = t.copy.idle;
        }

        setText('#expertise .section-head h2', t.expertise.title);
        setText('#expertise .section-head p', t.expertise.subtitle);
        const expertiseCards = document.querySelectorAll('#expertise .card');
        expertiseCards.forEach((card, index) => {
            const item = t.expertise.cards[index];
            if (!item) {
                return;
            }
            const heading = card.querySelector('h3');
            const body = card.querySelector('p');
            if (heading) {
                heading.textContent = item.title;
            }
            if (body) {
                body.textContent = item.body;
            }
        });

        setText('#work .section-head h2', t.work.title);
        setText('#work .section-head p', t.work.subtitle);
        const workItems = document.querySelectorAll('#work .work-item');
        workItems.forEach((card, index) => {
            const item = t.work.items[index];
            if (!item) {
                return;
            }
            const heading = card.querySelector('h3');
            const meta = card.querySelector('.work-meta');
            const summary = card.querySelector('.work-summary');
            const points = card.querySelectorAll('.work-points li');
            if (heading) {
                heading.textContent = item.title;
            }
            if (meta) {
                meta.textContent = item.meta;
            }
            if (summary) {
                summary.textContent = item.summary;
            }
            points.forEach((point, pointIndex) => {
                if (item.points[pointIndex]) {
                    point.textContent = item.points[pointIndex];
                }
            });
        });

        setText('#skills .section-head h2', t.skills.title);
        setText('#skills .section-head p', t.skills.subtitle);
        const skillCards = document.querySelectorAll('#skills .card');
        skillCards.forEach((card, index) => {
            const item = t.skills.cards[index];
            if (!item) {
                return;
            }
            const heading = card.querySelector('h3');
            const body = card.querySelector('p');
            if (heading) {
                heading.textContent = item.title;
            }
            if (body) {
                body.textContent = item.body;
            }
        });

        setText('#contact h2', t.contact.title);
        setText('#contact p', t.contact.subtitle);
        const contactButtons = document.querySelectorAll('#contact .cta-actions a');
        contactButtons.forEach((button, index) => {
            if (t.contact.actions[index]) {
                button.textContent = t.contact.actions[index];
            }
        });

        setText('.site-footer span:first-child', t.footer.name);
        setText('.site-footer span:last-child', t.footer.location);

        langButtons.forEach((button) => {
            button.classList.toggle('is-active', button.dataset.lang === lang);
        });

        try {
            localStorage.setItem('site-language', lang);
        } catch (_error) {
            // Ignore storage failures in restricted browser contexts.
        }
    };

    const detectInitialLanguage = () => {
        let storedLanguage = null;
        try {
            storedLanguage = localStorage.getItem('site-language');
        } catch (_error) {
            storedLanguage = null;
        }
        if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
            return storedLanguage;
        }

        const browserLanguage = (navigator.language || '').toLowerCase();
        if (browserLanguage.startsWith('fr')) {
            return 'fr';
        }

        return 'en';
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));

    techChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            techChips.forEach((item) => item.classList.remove('is-active'));
            chip.classList.add('is-active');
            renderSnippet(chip.dataset.tech || 'default');
        });
    });

    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            applyLanguage(button.dataset.lang || 'en');
        });
    });

    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            if (!currentSnippetText) {
                return;
            }
            try {
                await navigator.clipboard.writeText(currentSnippetText);
                copyButton.textContent = translations[currentLanguage].copy.ok;
                setTimeout(() => {
                    copyButton.textContent = translations[currentLanguage].copy.idle;
                }, 900);
            } catch (_error) {
                copyButton.textContent = translations[currentLanguage].copy.fail;
                setTimeout(() => {
                    copyButton.textContent = translations[currentLanguage].copy.idle;
                }, 900);
            }
        });
    }

    renderSnippet('default');
    applyLanguage(detectInitialLanguage());
});
