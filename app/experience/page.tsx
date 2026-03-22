import React from 'react'

const experiences = [
  {
    role: "Research Software Engineer",
    company: "University of British Columbia",
    date: "Jan 2026 - Present",
    description: "Refactored a Python-based GitHub analytics pipeline to quantify student contributions across PRs, commits, and reviews. Developed heuristics to detect over-reliance on AI/LLMs in codebases, enabling interpretable metrics for instructors and reproducible analysis for research workflows.",
    tags: ["Python", "Data Analytics", "Visualizations"]
  },
  {
    role: "Undergraduate Researcher",
    company: "University of British Columbia",
    date: "Jan 2026 - Present",
    description: "Developing AR interaction techniques on Meta Quest 3 using body tracking signals. Implemented stability algorithms (smoothing, confidence weighting, drift correction) and built real-time logging pipelines with Firebase to measure latency and jitter for interaction performance evaluation.",
    tags: ["Unity", "Augmented Reality (AR)", "Meta Quest 3"]
  },
  {
    role: "Backend Lead",
    company: "Exam Generation & Analysis System",
    date: "May 2025 - Sep 2025",
    description: "Architected a microservice backend using Node.js, tRPC, Prisma, and PostgreSQL. Built deterministic data pipelines with snapshot-based versioning for reproducible grading and auditability. Enforced row-level security (RLS) for multi-tenant isolation.",
    tags: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "Microservices"]
  },
  {
    role: "Software Engineer",
    company: "Visualization & Emerging Media Studio",
    date: "Sep 2024 - Present",
    description: "Built real-time distributed systems for multi-user scientific visualization. Optimized latency-sensitive pipelines (<80 ms) integrating WebSocket services and heterogeneous input streams. Improved synchronization reliability across distributed deployments.",
    tags: ["Unity", "C#", "Distributed Systems", "WebSockets"]
  },
  {
    role: "System Analyst",
    company: "University of British Columbia",
    date: "Sep 2023 - Aug 2024",
    description: "Developed internal research portal improving documentation and resource sharing across lab teams. Automated infrastructure scripts and optimized workstation configurations, improving system reliability by 25%. Supported networking and hardware across 10+ research labs.",
    tags: ["System Administration", "Automation", "IT Support"]
  },
  {
    role: "Java Analyst",
    company: "MergeBase",
    date: "Jan 2023 - Apr 2023",
    description: "Analyzed 80+ CVEs to improve Software Composition Analysis (SCA) tooling. Implemented remediation workflows with backend teams, reducing exploit exposure by 15%. Monitored vulnerability trends and aligned analysis with emerging security standards.",
    tags: ["Java", "Security Analysis", "SCA"]
  }
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          Backend-focused experience across distributed systems, data pipelines, and applied ML.
        </p>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 border-l border-zinc-200 dark:border-zinc-800 md:border-l-0">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/4 shrink-0 pt-1 text-sm text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">
                  {exp.date}
                </div>
                <div className="md:w-3/4 pb-8 md:pb-12 md:pl-8 md:border-l md:border-zinc-200 md:dark:border-zinc-800 relative">
                  {/* Timeline Dot for desktop */}
                  <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-zinc-50 dark:ring-zinc-950" />
                  {/* Timeline Dot for mobile */}
                  <div className="block md:hidden absolute -left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-zinc-50 dark:ring-zinc-950" />

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-zinc-600 dark:text-zinc-300 mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
