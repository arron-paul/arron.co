'use client'

import Navigation from '@/components/Navigation'
import Image from 'next/image'
import React from 'react'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="py-4">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="flex">
          <Image
            src="/poly.svg"
            alt="Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/wordmark.svg"
            alt="Logo"
            className="pl-4 dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
