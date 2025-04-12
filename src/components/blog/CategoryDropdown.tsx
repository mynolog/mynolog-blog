'use client'

import type { Category } from '@/constants/posts'
import { useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { CATEGORIES } from '@/constants/posts'
import { ROUTES } from '@/constants/routes'

interface CategoryDropdownProps {
  counts: Record<Category, number>
}

export default function CategoryDropdown({ counts }: CategoryDropdownProps) {
  const router = useRouter()
  const pathname = usePathname()

  const currentCategory: Category = useMemo(() => {
    const matched = CATEGORIES.find((category) => pathname === ROUTES.CATEGORY(category))
    return matched ?? 'all'
  }, [pathname])

  const handleCategoryChange = (category: Category) => {
    const href = category === 'all' ? ROUTES.BLOG : ROUTES.CATEGORY(category)
    router.push(href)
  }

  return (
    <div className="mb-4 flex w-full justify-center text-sm">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-md border px-4 py-2">
            <span>{currentCategory}</span>
            <span>({counts[currentCategory]})</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={currentCategory}
            onValueChange={(value) => handleCategoryChange(value as Category)}
          >
            {CATEGORIES.map((category, index) => (
              <DropdownMenuRadioItem key={category + index} value={category}>
                {category} ({counts[category]})
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
