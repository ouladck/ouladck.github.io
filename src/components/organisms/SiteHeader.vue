<script setup lang="ts">
const { locale, setLocale, locales } = useI18n()
const { theme, toggleTheme } = useTheme()
const { activeSection } = useScrollSpy(['experience', 'expertise', 'projects', 'skills', 'contact'])

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const { t } = useI18n()

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  }, { passive: true })
})

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMenu() {
  mobileMenuOpen.value = false
}

function switchLocale(code: string) {
  setLocale(code as 'fr' | 'en')
  closeMenu()
}

const navLinks = computed(() => [
  { id: 'experience', label: t('nav.experience') },
  { id: 'expertise', label: t('nav.expertise') },
  { id: 'projects', label: t('nav.projects') },
  { id: 'skills', label: t('nav.skills') },
  { id: 'contact', label: t('nav.contact') },
])
</script>

<template>
  <a class="skip-link" href="#main-content">Aller au contenu principal</a>
  <header
    class="site-header"
    :class="{ 'site-header--scrolled': isScrolled }"
    role="banner"
  >
    <div class="site-header__inner container">
      <a href="#" class="site-header__logo" aria-label="Karim Oulad Chalha — Accueil">
        K.OC
      </a>

      <nav class="site-header__nav" aria-label="Navigation principale">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="site-header__nav-link"
          :class="{ 'site-header__nav-link--active': activeSection === link.id }"
          :aria-current="activeSection === link.id ? 'true' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="site-header__actions">
        <div class="site-header__lang-toggle" role="group" aria-label="Langue">
          <button
            v-for="l in locales"
            :key="l.code"
            class="site-header__lang-btn"
            :class="{ 'site-header__lang-btn--active': locale === l.code }"
            :aria-pressed="locale === l.code"
            type="button"
            @click="switchLocale(l.code)"
          >
            {{ l.code.toUpperCase() }}
          </button>
        </div>

        <ThemeToggle />

        <button
          class="site-header__hamburger"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          type="button"
          @click="toggleMenu"
        >
          <BaseIcon :name="mobileMenuOpen ? 'x' : 'menu'" :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition name="slide">
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="site-header__mobile-menu"
        role="dialog"
        aria-label="Menu de navigation"
        aria-modal="true"
      >
        <nav>
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="site-header__mobile-link"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>

    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="site-header__overlay"
        aria-hidden="true"
        @click="closeMenu"
      />
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
.skip-link {
  @include visually-hidden;

  &:focus {
    position: fixed;
    top: $space-4;
    left: $space-4;
    width: auto;
    height: auto;
    clip: auto;
    white-space: normal;
    background-color: var(--color-accent);
    color: #fff;
    padding: $space-2 $space-4;
    border-radius: $radius-md;
    z-index: 1000;
    font-weight: 600;
  }
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 64px;
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  transition: all $transition-medium;

  &--scrolled {
    height: 52px;
    backdrop-filter: blur(12px);
    background-color: rgba(250, 250, 250, 0.85);
    box-shadow: $shadow-sm;

    [data-theme='dark'] & {
      background-color: rgba(15, 15, 26, 0.85);
    }
  }

  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
    gap: $space-8;
  }

  &__logo {
    font-size: $text-lg;
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -0.02em;
    flex-shrink: 0;
    text-decoration: none;

    &:hover {
      color: var(--color-accent);
    }
  }

  &__nav {
    display: none;
    align-items: center;
    gap: $space-6;
    flex: 1;

    @include respond-to($bp-md) {
      display: flex;
    }
  }

  &__nav-link {
    font-size: $text-sm;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
    transition: color $transition-fast;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-accent);
      transition: width $transition-fast;
    }

    &:hover,
    &--active {
      color: var(--color-accent);

      &::after {
        width: 100%;
      }
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 4px;
      border-radius: 2px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-2;
    margin-left: auto;
  }

  &__lang-toggle {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  &__lang-btn {
    font-size: $text-xs;
    font-weight: 600;
    color: var(--color-text-muted);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: $space-1 $space-2;
    border-radius: $radius-sm;
    transition: color $transition-fast;

    &--active {
      color: var(--color-accent);
    }

    &:hover {
      color: var(--color-text-primary);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  &__hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: $radius-md;
    color: var(--color-text-primary);
    transition: background-color $transition-fast;

    @include respond-to($bp-md) {
      display: none;
    }

    &:hover {
      background-color: var(--color-accent-subtle);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: var(--color-bg-secondary);
    border-left: 1px solid var(--color-border);
    padding: $space-8 $space-6;
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: $space-2;

    nav {
      display: flex;
      flex-direction: column;
      gap: $space-1;
      margin-top: $space-8;
    }
  }

  &__mobile-link {
    font-size: $text-lg;
    font-weight: 500;
    color: var(--color-text-primary);
    text-decoration: none;
    padding: $space-3 0;
    border-bottom: 1px solid var(--color-border);
    transition: color $transition-fast;

    &:hover {
      color: var(--color-accent);
    }
  }

  &__overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 150;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform $transition-medium;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-medium;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
