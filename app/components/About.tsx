import { createClient } from '@/app/utils/supabase/server'

export default async function About() {
  const supabase = await createClient()
  const { data: profile, error } = await supabase.from('profile').select('*').single()

  if (error) {
    console.error('Error fetching profile:', error)
  }

  return (
    <section id="about" className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">About</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Who I Am</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg max-w-3xl">
          {profile?.bio ?? 'Your bio will appear here once added to Supabase.'}
        </p>
      </div>
    </section>
  )
}