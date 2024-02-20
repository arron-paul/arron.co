import Header from '@/components/Header'
import React from 'react'

export default function JournalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 flex justify-between">
        <div className="site-content">{children}</div>
      </main>
    </>
  )
}
