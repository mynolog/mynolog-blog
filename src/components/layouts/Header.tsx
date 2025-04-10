'use client'

import { useState, useEffect } from 'react'
import GitHubLink from '../links/GitHubLink'
import HomeLink from '../links/HomeLink'
import ThemeDropdown from '../theme/ThemeDropdown'
import { Button } from '../ui/button'
import Navigation from './Navigation'

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShowHeader(currentY < lastScrollY || currentY < 10)
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 z-50 flex h-14 w-full items-center justify-center border-b-2 border-gray-100 bg-white transition-transform duration-300 dark:border-gray-700 dark:bg-black ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="grid h-full w-full max-w-[1200px] grid-cols-3 items-center px-6">
        {/* 네비게이션 메뉴 */}
        <Navigation />
        <HomeLink>
          <h1 className="hidden w-full justify-center text-2xl font-extrabold md:flex">
            mynolog
          </h1>
        </HomeLink>
        {/* 깃헙, 테마 설정 */}
        <ul className="flex items-center justify-end gap-5">
          <li>
            <Button variant="ghost" className="w-10 bg-transparent">
              <GitHubLink />
            </Button>
          </li>
          <li>
            <ThemeDropdown />
          </li>
        </ul>
      </nav>
    </header>
  )
}
