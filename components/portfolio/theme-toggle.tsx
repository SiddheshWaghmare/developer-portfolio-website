'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const root = document.documentElement
    const nextDark = !isDark
    root.classList.toggle('dark', nextDark)
    root.classList.toggle('light', !nextDark)
    try {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    } catch {}
    setIsDark(nextDark)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="glow-hover inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
    >
      {mounted && isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
