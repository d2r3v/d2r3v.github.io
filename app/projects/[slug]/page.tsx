import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github } from 'lucide-react'

// Dummy data for the static generation
const projectsData = {
  "exam-generation": {
    title: "Exam Generation & Analysis System",
    description: "An automated system to generate and analyze exams, leveraging NLP for question extraction and ML for difficulty estimation. Designed to save educators hours of manual work.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Hugging Face"],
    architecture: "The backend is built with FastAPI, providing a high-performance REST API. NLP tasks are handled using Hugging Face transformers. The React frontend interacts with the API to provide a seamless interface for educators.",
    githubUrl: "https://github.com/d2r3v/exam-generation"
  },
  "pillcare": {
    title: "PillCare",
    description: "CNN and OCR based pill identification system to assist visually impaired individuals and elderly patients. Helps prevent medication errors by accurately identifying pills from smartphone images.",
    tech: ["PyTorch", "OpenCV", "Tesseract", "React Native"],
    architecture: "Mobile app built in React Native captures images and sends them to a Python backend. The backend uses OpenCV for preprocessing, Tesseract for OCR text extraction, and a custom PyTorch CNN model to classify the pill based on visual features.",
    githubUrl: "https://github.com/d2r3v/pillcare"
  },
  "xr-vertebrate": {
    title: "XR Vertebrate Visualization",
    description: "An immersive Unity-based XR application for exploring and visualizing vertebrate anatomy using augmented reality. Provides an interactive educational experience for biology students.",
    tech: ["Unity", "C#", "AR Foundation", "Blender"],
    architecture: "Built on Unity using AR Foundation for cross-platform AR support (ARKit/ARCore). 3D models were optimized in Blender. C# scripts handle user interactions such as rotating, scaling, and inspecting specific anatomical structures.",
    githubUrl: "https://github.com/d2r3v/xr-vertebrate"
  },
  "burnout-detection": {
    title: "Developer Burnout Detection Research",
    description: "A research project to detect signs of burnout in developers through their GitHub and Slack activity patterns. Uses machine learning to find early indicators of reduced well-being.",
    tech: ["Scikit-Learn", "Pandas", "GitHub API", "Slack API"],
    architecture: "Data pipelines fetch activity logs using GitHub and Slack APIs. Pandas is used for data cleaning and feature engineering (e.g., commit frequency, message sentiment). A Random Forest classifier trained via Scikit-Learn predicts burnout risk scores.",
    githubUrl: "https://github.com/d2r3v/burnout-detection"
  }
}

export function generateStaticParams() {
  return [
    { slug: 'exam-generation' },
    { slug: 'pillcare' },
    { slug: 'xr-vertebrate' },
    { slug: 'burnout-detection' }
  ]
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 md:py-20">
      <Link href="/projects" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mb-12">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 px-4 font-medium text-zinc-900 bg-white border border-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
            <Github className="mr-2 h-4 w-4" />
            View Source
          </a>
        </div>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900 dark:text-zinc-50">Overview</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-12 text-zinc-400 dark:text-zinc-600">
            [ Project Screenshot / Demo ]
          </div>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900 dark:text-zinc-50">Architecture & Implementation</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-none">
            {project.architecture}
          </p>
        </div>
      </div>
    </div>
  )
}
