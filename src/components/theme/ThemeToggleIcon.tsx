import { useThemeStore } from '@/stores/themeStore'
import { Moon, Sun, MonitorCog } from 'lucide-react'

export default function ThemeToggleIcon() {
  const theme = useThemeStore((state) => state.theme)

  if (theme === 'light') {
    return <Sun className="h-5 w-5" />
  } else if (theme === 'dark') {
    return <Moon className="h-5 w-5" />
  } else if (theme === 'system') {
    return <MonitorCog className="h-5 w-5" />
  }
}
