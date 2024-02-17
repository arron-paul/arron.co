'use client'
import Link from 'next/link'

interface NavigationItemProps {
  label: string
  url: string
  active: boolean
}

export default function NavigationItem(item: NavigationItemProps) {
  return (
    <Link href={item.url} className={item.active ? 'active' : ''}>
      {item.label}
    </Link>
  )
}
