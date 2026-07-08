import Link from 'next/link'
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react'
import { projectsData, currentlyBuilding } from './projects/data'
import { experienceData } from './experience/data'

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured)
  const featuredExperience = experienceData.filter(e => e.featured)

  return (
    <div className="container mx-auto px-4 max-w-5xl flex flex-col justify-center h-full min-h-[calc(100vh-16rem)] py-20">
      <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 fill-mode-both">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Dhruv Bhardwaj
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-zinc-600 dark:text-zinc-400 mb-8">
          Software engineer building backend and AI-infrastructure systems — retrieval, ranking, and evaluation.
        </h2>
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          Recently: backend re-architecture and RAG-pipeline security at Astin Analytics; real-time XR visualization infrastructure at UBC.
        </p>

        {currentlyBuilding && (
          <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Currently building:</span> {currentlyBuilding}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-20">
          <Link href="/projects" className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a href="https://github.com/d2r3v" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/d2r3v" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="/Dhruv_Bhardwaj_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "TypeScript", "PostgreSQL", "Prisma"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase mb-4">Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              {["TensorFlow/PyTorch", "OpenCV", "Scikit-learn"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase mb-4">XR / Graphics</h3>
            <div className="flex flex-wrap gap-2">
              {["Unity", "C#"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <Link href="/experience" className="hidden sm:flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
            Full history <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {featuredExperience.map(exp => (
            <div
              key={exp.id}
              className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <p className="text-lg font-medium text-zinc-600 dark:text-zinc-300">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ''}
                </p>
                {exp.current && (
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/10 dark:text-blue-400 dark:ring-blue-400/20">
                    Present
                  </span>
                )}
              </div>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed max-w-3xl">
                {exp.summary}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              {exp.caseStudySlug && (
                <Link
                  href={`/projects/${exp.caseStudySlug}`}
                  className="mt-6 inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300 transition-colors"
                >
                  View case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Engineering Work</h2>
          <Link href="/projects" className="hidden sm:flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
            View all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {featuredProjects.map(project => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed max-w-3xl">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Read engineering case study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}

          <Link href="/projects" className="sm:hidden flex items-center justify-center h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium mt-4">
            View all projects
          </Link>
        </div>
      </div>
    </div>
  )
}
