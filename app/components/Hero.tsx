import { createClient } from '@/app/utils/supabase/server'

export default async function Hero() {
  const supabase = await createClient()
  const { data: profile, error } = await supabase.from('profile').select('*').single()

  if (error) {
    console.error('Error fetching profile:', error)
  }

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-accent-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.25)_1px,transparent_1px)] bg-[length:28px_28px] opacity-40 dark:opacity-20"></div>
      <div className="absolute top-10 left-1/4 w-[36rem] h-[36rem] bg-accent-400/20 dark:bg-accent-600/25 rounded-full blur-[110px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/5 w-[26rem] h-[26rem] bg-accent-300/20 dark:bg-accent-400/15 rounded-full blur-[100px] animate-float"></div>

      <div className="relative max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 sm:pt-24 sm:pb-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400 mb-5 tracking-widest uppercase justify-center md:justify-start">
            <span className="w-8 h-px bg-accent-500 dark:bg-accent-400"></span>
            {profile?.headline ?? 'Hi, my name is'}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
            {profile?.full_name ?? 'Your Name'}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-accent-500 to-accent-700 dark:from-accent-300 dark:to-accent-500 bg-clip-text text-transparent mt-4 sm:mt-5">
            {profile?.role_title ?? 'Your Role'}
          </p>

          <div className="hidden md:flex flex-col sm:flex-row items-start gap-4 justify-start mt-10">
            <a href="#projects" className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-accent-500/30">
              View Projects
            </a>
            <a href="#contact" className="border border-slate-300 dark:border-slate-700 hover:border-accent-400 text-slate-700 dark:text-slate-200 hover:text-accent-600 dark:hover:text-accent-400 text-sm font-semibold px-7 py-3.5 rounded-full transition-colors">
              Get in Touch
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3 justify-start mt-8">
            <a href="https://github.com/SandrieBee" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.7-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.76 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.49-5.55 7.49-10.39C23.02 5.24 18.27.5 12 .5z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/beaabonales16" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
              </svg>
            </a>
            <a href="mailto:beasandara.abonales16@gmail.com" aria-label="Email" className="p-2.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-8">
          <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent-500 to-accent-300 rounded-full blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt={profile.full_name} className="w-full h-full object-cover" />
              ) : (
                'Photo'
              )}
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center gap-4">
            <a href="#projects" className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-accent-500/30">
              View Projects
            </a>
            <a href="#contact" className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold px-7 py-3.5 rounded-full">
              Get in Touch
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/SandrieBee" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-full bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.7-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.76 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.49-5.55 7.49-10.39C23.02 5.24 18.27.5 12 .5z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/beaabonales16" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
                </svg>
              </a>
              <a href="mailto:beasandara.abonales16@gmail.com" aria-label="Email" className="p-2.5 rounded-full bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}