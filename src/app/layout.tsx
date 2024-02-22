import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.css'
import meta from '@/app/meta'
import Image from 'next/image'
import utilStyles from './utils.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="{inter.className}">
        <div>
          <header>
            <svg width="144" height="144" xmlns="http://www.w3.org/2000/svg">
              <circle cx="72" cy="72" r="50" fill="red" />
            </svg>
            <h1>Arron Paul</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
