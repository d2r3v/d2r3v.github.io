import Link from 'next/link'
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-5xl flex flex-col justify-center h-full min-h-[calc(100vh-16rem)] py-20">
      <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 fill-mode-both">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Dhruv Bhardwaj
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-zinc-600 dark:text-zinc-400 mb-8">
          Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          Specializing in <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Backend Systems</strong>, <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Applied ML</strong>, and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">XR Systems</strong>. I build scalable infrastructure, intelligent algorithms, and immersive experiences.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a href="https://github.com/d2r3v" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </a>
        </div>
      </div>
    </div>
  )
}
