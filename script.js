document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal');
    const snippetContainer = document.getElementById('tech-snippet');
    const snippetLang = document.getElementById('snippet-lang');
    const copyButton = document.getElementById('copy-snippet');
    const techChips = document.querySelectorAll('.tech-chip');
    let currentSnippetText = '';

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

    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            if (!currentSnippetText) {
                return;
            }
            try {
                await navigator.clipboard.writeText(currentSnippetText);
                copyButton.textContent = 'Copied';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 900);
            } catch (_error) {
                copyButton.textContent = 'Failed';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 900);
            }
        });
    }

    renderSnippet('default');
});
