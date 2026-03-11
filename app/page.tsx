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
          Software Engineer focused on backend systems, applied machine learning, and immersive XR platforms.
        </h2>
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          I build scalable backend infrastructure, machine learning systems, and interactive XR applications. My work spans full-stack platforms, applied AI systems, and real-world immersive software deployed in research and classroom environments.
        </p>

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
          <a href="/Dhruv_Bhardwaj_SWE.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300">
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
              {["Unity", "C#", "Blender"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
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
          {/* Project 1 */}
          <Link 
            href="/projects/exam-generation-analysis"
            className="group block p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              Exam Generation & Analysis System
            </h3>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed max-w-3xl">
              Production-grade distributed system for generating exam variants and grading OMR responses. Built on Node.js microservices with tRPC and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Node.js", "TypeScript", "tRPC", "PostgreSQL", "Microservices"].map((t) => (
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

          {/* Project 2 */}
          <Link 
            href="/projects/xr-vertebrate-visualization"
            className="group block p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              XR Vertebrate Visualization
            </h3>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed max-w-3xl">
              An immersive Unity/C# spatial computing application deployed to 100+ students. Features distributed rendering for high-fidelity interactive anatomy models.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Unity", "C#", "XR SDKs", "Distributed Rendering"].map((t) => (
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
          
          <Link href="/projects" className="sm:hidden flex items-center justify-center h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium mt-4">
            View all projects
          </Link>
        </div>
      </div>
    </div>
  )
}
