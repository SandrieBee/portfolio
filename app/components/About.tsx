import { createClient } from '@/app/utils/supabase/server'

export default async function About() {
  const supabase = await createClient()
  const { data: profile, error } = await supabase.from('profile').select('*').single()

  if (error) {
    console.error('Error fetching profile:', error)
  }

  const highlights = [
    {
      label: 'Focus Areas',
      value: 'Data Science & Software Engineering',
    },
    {
      label: 'Education',
      value: 'BS Computer Science, Caraga State University',
    },
    {
      label: 'Currently Exploring',
      value: 'AI Integration in Everyday Software',
    },
  ]

  return (
    <section id="about" className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">About</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-10">Who I Am</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              {profile?.bio ?? 'Your bio will appear here once added to Supabase.'}
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-3xl"></div>

              <div className="relative flex flex-col gap-6">
                {highlights.map((item, i) => (
                  <div key={item.label} className={i !== 0 ? 'pt-6 border-t border-slate-200 dark:border-slate-800' : ''}>
                    <span className="text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                    <p className="text-slate-800 dark:text-white font-medium mt-1.5 text-sm sm:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}