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
          <div className="hidden md:flex justify-start mt-10">
            <a href="#projects" className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-accent-500/30">
              View Projects
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

          <a href="#projects" className="md:hidden bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-accent-500/30">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}