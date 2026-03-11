export default function Experience() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl">
          My professional journey in software engineering.
        </p>

        <div className="space-y-12">
          {/* Example Item - Replace with real data */}
          <div className="relative pl-8 md:pl-0 border-l border-zinc-200 dark:border-zinc-800 md:border-l-0">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4 shrink-0 pt-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                2022 - Present
              </div>
              <div className="md:w-3/4 pb-8 md:pb-12 md:pl-8 md:border-l md:border-zinc-200 md:dark:border-zinc-800 relative">
                {/* Timeline Dot for desktop */}
                <div className="hidden md:block absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-950" />
                {/* Timeline Dot for mobile */}
                <div className="block md:hidden absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-950" />
                
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                  Software Engineer
                </h3>
                <h4 className="text-lg font-medium text-zinc-600 dark:text-zinc-300 mb-4">
                  Tech Company
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Built scalable backend systems using Node.js, Go and Python. Improved database query performance by 40% utilizing PostgreSQL indexing and read replicas. Architected a microservice for ML model deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Go</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">PostgreSQL</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
