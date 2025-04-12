'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES, Category } from '@/constants/posts'
import { ROUTES } from '@/constants/routes'

interface CategoryTabsProps {
  counts: Record<Category, number>
}

export default function CategoryTabs({ counts }: CategoryTabsProps) {
  const pathname = usePathname()

  return (
    <nav className="mb-2 h-14 w-full text-sm">
      <ul className="flex h-full w-full items-center gap-6">
        {CATEGORIES.map((category) => {
          const href = category === 'all' ? ROUTES.BLOG : ROUTES.CATEGORY(category)
          const isActive = pathname === href

          return (
            <li
              key={category}
              className={`${isActive ? 'font-bold text-green-500 dark:text-green-300' : 'text-black dark:text-gray-200'}`}
            >
              <Link href={href} className="flex items-center gap-1">
                <span>{category}</span>
                <span>({counts[category]})</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
