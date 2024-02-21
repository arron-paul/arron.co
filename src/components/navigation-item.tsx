'use client'

import Link from 'next/link'
import React from 'react'

interface NavigationItemProps {
  label: string
  url: string
  active: boolean
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, url, active }) => {
  return (
    <Link href={url} className={active ? 'active' : ''}>
      {label}
    </Link>
  )
}

export default NavigationItem
