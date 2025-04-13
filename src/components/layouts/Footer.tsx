'use client'

import { useEffect, useState } from 'react'
import ContactLinks from '../links/ContactLinks'

export default function Footer() {
  const [showFooter, setShowFooter] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShowFooter(currentY < lastScrollY || currentY < 10)
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <footer
      className={`fixed bottom-0 flex h-16 w-full items-center justify-center gap-3 border-t border-gray-100 bg-white p-4 text-center transition-transform duration-300 dark:border-gray-700 dark:bg-black ${showFooter ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <p className="text-xs sm:text-sm">
        © 2025, <b>minho lee</b> all rights reserved.
      </p>
      <ContactLinks />
    </footer>
  )
}
