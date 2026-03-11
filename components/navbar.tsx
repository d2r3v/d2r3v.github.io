import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Dhruv Bhardwaj
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Projects
          </Link>
          <Link href="/experience" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Experience
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Contact
          </Link>
          <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-2" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
