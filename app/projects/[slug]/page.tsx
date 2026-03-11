import { projectsData } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

// Support static export
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projectsData.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <div className="mb-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>



        <div className="flex flex-wrap gap-4 mb-16">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            <Github className="mr-2 h-5 w-5" />
            View Source Code
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 font-medium border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-zinc-50 rounded-lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          )}
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Overview</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Architecture</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
              {project.architecture}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Key Engineering Decisions</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
              {project.decisions}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-1.5 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Impact</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
              {project.impact}
            </p>
          </section>
        </div>
        
        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800">
           <Link 
            href="/projects" 
            className="inline-flex items-center font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to all projects
          </Link>
        </div>
      </div>
    </div>
  )
}
