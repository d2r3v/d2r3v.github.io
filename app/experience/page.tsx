import React from 'react'

const experiences = [
  {
    role: "Research Software Engineer",
    company: "University of British Columbia",
    date: "Jan 2026 - Present",
    description: "Refactored a Python-based GitHub analytics system to quantify student contributions through PRs, commits, and review behavior. Developed heuristics to detect over-reliance on AI/LLMs in student codebases, informed by lab research on model-assisted development patterns. Extended analytic visualizations to make AI-reliance indicators interpretable for instructors and reproducible for future studies.",
    tags: ["Python", "Data Analytics", "Visualizations"]
  },
  {
    role: "Undergraduate Researcher",
    company: "University of British Columbia",
    date: "Jan 2026 - Present",
    description: "Designing an elbow-anchored AR interaction technique on Meta Quest 3. Implementing stability algorithms over Meta Body Tracking SDK signals, including smoothing filters, confidence weighting, and drift correction. Developing a real-time data logging approach using Firebase to quantify interaction latency and jitter for a Fitts' Law evaluation.",
    tags: ["Unity", "Augmented Reality (AR)", "Meta Quest 3"]
  },
  {
    role: "Backend Lead",
    company: "Exam Generation & Analysis System",
    date: "May 2025 - Sep 2025",
    description: "Architected a microservice-based backend using Node.js, tRPC, Prisma, and PostgreSQL. Designed deterministic data pipelines with snapshot-based state versioning, ensuring reproducible evaluation and auditability. Implemented CI-backed validation and enforced row-level security (RLS) for multi-tenant isolation.",
    tags: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "Microservices"]
  },
  {
    role: "Software Engineer",
    company: "Visualization & Emerging Media Studio",
    date: "Sep 2024 - Present",
    description: "Built and maintained real-time distributed systems supporting multi-user scientific visualization environments. Optimized latency-sensitive pipelines (<80 ms) integrating WebSocket services and heterogeneous input streams. Hardened synchronization and networking layers across distributed deployments to improve reliability.",
    tags: ["Unity", "C#", "Distributed Systems", "WebSockets"]
  },
  {
    role: "System Analyst",
    company: "University of British Columbia",
    date: "Sep 2023 - Aug 2024",
    description: "Built and maintained internal research portal improving documentation and resource sharing across lab teams. Automated infrastructure scripts and optimized workstation configurations, increasing reliability by 25%. Managed network and hardware support for 10+ research labs.",
    tags: ["System Administration", "Automation", "IT Support"]
  },
  {
    role: "Java Analyst",
    company: "MergeBase",
    date: "Jan 2023 - Apr 2023",
    description: "Analyzed 80+ CVEs to strengthen the company’s Software Composition Analysis (SCA) tool. Implemented remediation workflows with backend teams, reducing exploit risk exposure by 15%. Monitored vulnerability data and aligned analysis with emerging security standards.",
    tags: ["Java", "Security Analysis", "SCA"]
  }
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          My professional journey spanning backend infrastructure, applied machine learning, and immersive platforms.
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
