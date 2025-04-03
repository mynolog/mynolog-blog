import { create } from 'zustand'
import { applyTheme } from '@/lib/theme'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'system',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    applyTheme(theme)
    set({ theme })
  },
}))
