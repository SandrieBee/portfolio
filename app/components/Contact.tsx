'use client'

import { useState } from 'react'
import { submitMessage } from '@/app/actions/contact'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    const result = await submitMessage(formData)

    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong.')
    }
  }

  return (
    <section id="contact" className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">Contact</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-8 sm:mb-10">Get in Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">Thanks for reaching out! I'll get back to you soon.</p>
            ) : (
              <form action={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
                  <input type="text" id="name" name="name" required className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-shadow" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                  <input type="email" id="email" name="email" required className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-shadow" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                  <textarea id="message" name="message" required rows={6} className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-shadow resize-none" />
                </div>

                {status === 'error' && <p className="text-red-600 dark:text-red-400 text-sm">{errorMsg}</p>}

                <button type="submit" disabled={status === 'loading'} className="bg-accent-500 hover:bg-accent-600 disabled:opacity-50 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 w-fit shadow-lg shadow-accent-500/30">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Let's connect</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              </p>

              <div className="flex flex-col gap-4">
                <a href="mailto:beasandara.abonales16@gmail.com" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group">
                  <span className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  beasandara.abonales16@gmail.com
                </a>

                <a href="https://github.com/SandrieBee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group">
                  <span className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.7-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.76 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.49-5.55 7.49-10.39C23.02 5.24 18.27.5 12 .5z"/>
                    </svg>
                  </span>
                  github.com/SandrieBee
                </a>

                <a href="https://linkedin.com/in/beaabonales16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group">
                  <span className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
                    </svg>
                  </span>
                  linkedin.com/in/beaabonales16
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent-500 to-accent-700 p-6 sm:p-8 text-white">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <p className="text-sm font-medium relative">Currently open to new opportunities and collaborations. Let's build something great together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}