import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

export default function HomeLink({ children }: { children: React.ReactNode }) {
  return <Link href={ROUTES.HOME}>{children}</Link>
}
