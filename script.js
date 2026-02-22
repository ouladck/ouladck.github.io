document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal');
    const snippetContainer = document.getElementById('tech-snippet');
    const techChips = document.querySelectorAll('.tech-chip');

    const snippets = {
        default: [
            'const delivery = build({',
            '  frontend: "Vue 3 / Nuxt 3",',
            '  quality: "TDD · CI/CD · Vitest",',
            '  platform: "Laravel · Docker",',
            '});'
        ],
        vue: [
            '<template>',
            '  <TaskBoard :items="tasks" @move="onMove" />',
            '</template>',
            '',
            '<script setup lang="ts">',
            'const tasks = ref<Task[]>([]);',
            '</script>'
        ],
        nuxt: [
            'const { data: projects } = await useAsyncData(',
            '  "projects",',
            '  () => $fetch("/api/projects")',
            ');',
            'definePageMeta({ middleware: ["auth"] });'
        ],
        laravel: [
            'Route::middleware("auth:sanctum")->group(function () {',
            '  Route::get("/projects", [ProjectController::class, "index"]);',
            '  Route::post("/projects", [ProjectController::class, "store"]);',
            '});'
        ],
        vitest: [
            'import { describe, it, expect } from "vitest";',
            'import { formatMoney } from "./money";',
            '',
            'it("formats euro values", () => {',
            '  expect(formatMoney(1250)).toBe("€12.50");',
            '});'
        ],
        docker: [
            'services:',
            '  app:',
            '    build: .',
            '    ports: ["3000:3000"]',
            '    depends_on: ["db"]'
        ],
        playwright: [
            'import { test, expect } from "@playwright/test";',
            '',
            'test("checkout flow", async ({ page }) => {',
            '  await page.goto("/checkout");',
            '  await expect(page.getByText("Payment")).toBeVisible();',
            '});'
        ]
    };

    const renderSnippet = (tech) => {
        const lines = snippets[tech] || snippets.default;
        if (!snippetContainer) {
            return;
        }

        snippetContainer.classList.add('is-switching');
        snippetContainer.replaceChildren();

        lines.forEach((line) => {
            const paragraph = document.createElement('p');
            paragraph.className = 'code-line';
            paragraph.textContent = line;
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
});
