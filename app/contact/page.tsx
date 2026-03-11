import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-20">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">Get in Touch</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12 text-center">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 text-zinc-900 dark:text-zinc-50">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Email Me</h2>
          <a href="mailto:dhruv@example.com" className="text-lg font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors mb-8">
            dhruv@example.com
          </a>
          
          <a href="mailto:dhruv@example.com" className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            Say Hello
          </a>
        </div>
      </div>
    </div>
  )
}
