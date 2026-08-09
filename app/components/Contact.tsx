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

        {status === 'success' ? (
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg">Thanks for reaching out! I'll get back to you soon.</p>
        ) : (
          <form action={handleSubmit} className="max-w-xl flex flex-col gap-5">
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
              <textarea id="message" name="message" required rows={5} className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-shadow resize-none" />
            </div>

            {status === 'error' && <p className="text-red-600 dark:text-red-400 text-sm">{errorMsg}</p>}

            <button type="submit" disabled={status === 'loading'} className="bg-accent-500 hover:bg-accent-600 disabled:opacity-50 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 w-fit shadow-lg shadow-accent-500/30">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}