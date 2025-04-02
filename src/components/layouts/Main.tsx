interface MainProps {
  children: React.ReactNode
  className?: string
}

export default function Main({ children, className = '' }: MainProps) {
  return (
    <main className={`flex w-full max-w-[1200px] grow px-6 ${className}`}>
      {children}
    </main>
  )
}
