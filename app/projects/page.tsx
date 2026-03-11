import Link from 'next/link'
import { ArrowRight, Code } from 'lucide-react'

const projects = [
  {
    id: "exam-generation",
    title: "Exam Generation & Analysis System",
    description: "An automated system to generate and analyze exams, leveraging NLP for question extraction and ML for difficulty estimation.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    href: "/projects/exam-generation"
  },
  {
    id: "pillcare",
    title: "PillCare",
    description: "CNN and OCR based pill identification system to assist visually impaired individuals and elderly patients.",
    tech: ["PyTorch", "OpenCV", "Tesseract", "React Native"],
    href: "/projects/pillcare"
  },
  {
    id: "xr-vertebrate",
    title: "XR Vertebrate Visualization",
    description: "An immersive Unity-based XR application for exploring and visualizing vertebrate anatomy using augmented reality.",
    tech: ["Unity", "C#", "AR Foundation", "Blender"],
    href: "/projects/xr-vertebrate"
  },
  {
    id: "burnout-detection",
    title: "Developer Burnout Detection Research",
    description: "A research project to detect signs of burnout in developers through their GitHub and Slack activity patterns.",
    tech: ["Scikit-Learn", "Pandas", "GitHub API", "Slack API"],
    href: "/projects/burnout-detection"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl">
          A selection of my recent work across backend infrastructure, machine learning, and XR systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.href}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-400">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
