import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { experienceData } from './data'

export default function Experience() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          Backend and AI-infrastructure work across industry and research.
        </p>

        <div className="space-y-4">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0 border-l border-zinc-200 dark:border-zinc-800 md:border-l-0">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/4 shrink-0 pt-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">
                  {exp.period}
                </div>
                <div className="md:w-3/4 pb-8 md:pb-12 md:pl-8 md:border-l md:border-zinc-200 md:dark:border-zinc-800 relative">
                  {/* Timeline Dot for desktop */}
                  <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-zinc-50 dark:ring-zinc-950" />
                  {/* Timeline Dot for mobile */}
                  <div className="block md:hidden absolute -left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-zinc-50 dark:ring-zinc-950" />

                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/10 dark:text-blue-400 dark:ring-blue-400/20">
                        Present
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-medium text-zinc-600 dark:text-zinc-300 mb-4">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ''}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {exp.summary}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-500 dark:text-zinc-400 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {tag}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
