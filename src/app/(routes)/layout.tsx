import Header from '@/components/Header'
import '@/app/styles/globals.css'

export default function RoutesPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
