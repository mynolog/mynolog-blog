interface MainProps {
  children: React.ReactNode
  className?: string
}

export default function Main({ children, className = '' }: MainProps) {
  return (
    <main className={`flex w-full max-w-[1100px] grow p-9 ${className}`}>{children}</main>
  )
}
