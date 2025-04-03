'use client'

import { NAVIGATION_ITEMS } from '@/constants/navigation'
import NavigationItem from './NavigationItem'

export default function Navigation() {
  return (
    <ul className="flex gap-5">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem href={item.href} label={item.label} key={item.id} />
      ))}
    </ul>
  )
}
