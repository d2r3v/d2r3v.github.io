import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 md:py-12 mt-auto">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Dhruv Bhardwaj. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          <a href="https://github.com/d2r3v" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/d2r3v" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:drv792@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
