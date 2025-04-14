'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrolled = (scrollPosition / totalHeight) * 100
      setScroll(Math.min(Number(scrolled.toFixed(2)), 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 bg-green-600 transition-all duration-150 ease-out dark:bg-green-400"
      style={{ width: `${scroll}%` }}
    />
  )
}
