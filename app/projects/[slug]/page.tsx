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
          {project.tagline && (
            <p className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
              {project.tagline}
            </p>
          )}
          {project.status && (
            <div className="mb-6">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/10 dark:text-blue-400 dark:ring-blue-400/20">
                Status: {project.status}
              </span>
            </div>
          )}
          {(project.summary || project.description) && (
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.summary || project.description}
            </p>
          )}
        </div>



        <div className="flex flex-wrap gap-4 mb-16">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              <Github className="mr-2 h-5 w-5" />
              View Source Code
            </a>
          ) : (
            <span className="inline-flex items-center justify-center h-12 px-6 font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 rounded-lg cursor-not-allowed border border-transparent">
              <Github className="mr-2 h-5 w-5 opacity-50" />
              Code Upon Request
            </span>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 font-medium border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-zinc-50 rounded-lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          )}
          {project.reportUrl && (
            <a href={project.reportUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 font-medium border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-zinc-50 rounded-lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              Read Full Report
            </a>
          )}
        </div>

        <div className="space-y-12">
          {project.contributions || project.diagram || project.visuals || project.standoutSections || project.metrics ? (
            <>
              {project.metrics && project.metrics.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Impact & Scale</h2>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 text-lg">
                    {project.metrics.map((metric, i) => (
                      <li key={i} className="leading-relaxed">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.contributions && project.contributions.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Key Contributions</h2>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 text-lg">
                    {project.contributions.map((contribution, i) => (
                      <li key={i} className="leading-relaxed">
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.diagram && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    {project.diagramTitle || "System Architecture"}
                  </h2>
                  <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-zinc-800 dark:text-zinc-300">
                      {project.diagram}
                    </pre>
                  </div>
                </section>
              )}

              {project.visuals && project.visuals.map((visual, i) => (
                <section key={i}>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">{visual.title}</h2>
                  <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={visual.src} alt={visual.caption} className="w-full h-auto rounded" />
                  </div>
                  <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 italic">
                    {visual.caption}
                  </p>
                </section>
              ))}

              {project.standoutSections && project.standoutSections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">{section.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
                    {section.content}
                  </p>
                </section>
              ))}
            </>
          ) : (
            <>
              {project.overview && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Overview</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
                    {project.overview}
                  </p>
                </section>
              )}

              {project.architecture && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Architecture</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
                    {project.architecture}
                  </p>
                </section>
              )}

              {project.decisions && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Key Engineering Decisions</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
                    {project.decisions}
                  </p>
                </section>
              )}

              {project.impact && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-2">Impact</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg whitespace-pre-wrap">
                    {project.impact}
                  </p>
                </section>
              )}
            </>
          )}

          {project.tech && project.tech.length > 0 && (
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
          )}
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
