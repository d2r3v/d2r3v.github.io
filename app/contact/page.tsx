import { Mail, Github, Linkedin, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">Get in Touch</h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 text-center leading-relaxed">
          I'm currently open to backend, applied ML, and software engineering opportunities. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="mailto:drv792@gmail.com" 
            className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <Mail className="w-8 h-8 mb-4 text-zinc-900 dark:text-zinc-50 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-lg font-bold mb-1">Email</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">drv792@gmail.com</span>
          </a>

          <a 
            href="https://github.com/d2r3v" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <Github className="w-8 h-8 mb-4 text-zinc-900 dark:text-zinc-50 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-lg font-bold mb-1">GitHub</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">@d2r3v</span>
          </a>

          <a 
            href="https://linkedin.com/in/d2r3v" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <Linkedin className="w-8 h-8 mb-4 text-zinc-900 dark:text-zinc-50 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-lg font-bold mb-1">LinkedIn</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Connect with me</span>
          </a>

          <a 
            href="/Dhruv_Bhardwaj_SWE.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <FileText className="w-8 h-8 mb-4 text-zinc-900 dark:text-zinc-50 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-lg font-bold mb-1">Resume</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  )
}
