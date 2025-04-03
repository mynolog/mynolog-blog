'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

interface NavigationItemProps {
  href: string
  label: string
}

export default function NavigationItem({ href, label }: NavigationItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <li
      className={clsx(
        'rounded-md px-3 py-1 font-semibold',
        isActive
          ? 'bg-gray-100 text-black hover:text-black dark:bg-white dark:text-black dark:hover:text-black'
          : 'text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white',
      )}
    >
      <Link href={href}>{label}</Link>
    </li>
  )
}
