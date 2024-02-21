'use client'

import { usePathname } from 'next/navigation'
import { NavigationItem } from '@/components'

const links = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Journal',
    path: '/journal',
  },
]

export default function Navigation() {
  const currentPath = usePathname()

  return (
    <nav>
      <ul className="navigation-links flex space-x-4">
        {links.map(({ label, path }) => (
          <li key={path}>
            <NavigationItem
              label={label}
              url={path}
              active={currentPath == path}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
