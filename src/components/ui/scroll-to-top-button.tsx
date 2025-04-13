'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from './button'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    showButton && (
      <Button
        onClick={scrollToTop}
        className="fixed right-8 bottom-16 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 p-3 text-xl text-white shadow-2xl transition-all hover:cursor-pointer hover:bg-gray-900 hover:ring-2 hover:ring-white dark:bg-white dark:text-black"
      >
        <ChevronUp />
      </Button>
    )
  )
}
