'use client'

import { useEffect } from 'react'
import { Theme, useThemeStore } from '@/stores/themeStore'

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  const raw = localStorage.getItem('theme')
  if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  return 'system'
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    const storedTheme = getStoredTheme()
    setTheme(storedTheme)
  })

  return <>{children}</>
}
