import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.css'
import meta from '@/app/meta'
import Image from 'next/image'
import utilStyles from './utils.module.scss'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/date'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = meta

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const allPostsData: AllPostsData = getSortedPostsData()
  return (
    <html lang="en">
      <body className="{inter.className}">
        <div className="wrap max-w-3xl mx-auto px-4">
          <header className="my-5">
            <h1 className="font-bold">Arron Paul</h1>
            <nav className="flex justify-between items-center">
              <ul>
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <Link href={`/about`}>About</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
