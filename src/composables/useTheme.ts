export function useTheme() {
  const theme = useState<'light' | 'dark'>('theme', () => 'light')

  function initTheme() {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
      const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      theme.value = saved ?? preferred
      document.documentElement.setAttribute('data-theme', theme.value)
    }
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', theme.value)
      localStorage.setItem('theme', theme.value)
    }
  }

  return { theme, initTheme, toggleTheme }
}
