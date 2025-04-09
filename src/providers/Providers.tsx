import ThemeProvider from './ThemeProvider'
import ToastProvider from './ToastProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider />
      {children}
    </ThemeProvider>
  )
}
