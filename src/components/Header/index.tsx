import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="py-4">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <svg width="24" height="24">
          <circle cx="12" cy="12" r="12" fill="red" />
        </svg>
        <Navigation />
      </div>
    </header>
  )
}
