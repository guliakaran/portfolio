import { useState } from 'react'

function readTheme() {
  try {
    return localStorage.getItem('portfolio-theme')
  } catch {
    return null
  }
}

function systemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode)
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const initial = readTheme() || systemTheme()
    applyTheme(initial)
    return initial
  })

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    applyTheme(next)
    setTheme(next)
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch {
      /* ignore quota / private mode */
    }
  }

  return { theme, toggleTheme }
}
