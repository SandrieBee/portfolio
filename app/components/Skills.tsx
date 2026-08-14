import { createClient } from '@/app/utils/supabase/server'

export default async function Skills() {
  const supabase = await createClient()
  const { data: skills, error } = await supabase
    .from('skills')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching skills:', error)
  }

  const grouped: Record<string, typeof skills> = {}
  ;(skills || []).forEach((skill) => {
    const cat = skill.category || 'Other'
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat]!.push(skill)
  })

  const categories = Object.keys(grouped)

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">Skills</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-3">What I Work With</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-10 max-w-2xl">
          Tools and technologies I use across development, data, and design.
        </p>

        {categories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat) => (
              <div
                key={cat}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">{cat}</h3>
                  <span className="text-xs font-semibold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 px-2.5 py-1 rounded-full">
                    {grouped[cat]!.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {grouped[cat]!.map((skill) => (
                    <span
                      key={skill.id}
                      className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-500/10 transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 dark:text-slate-400">Skills will appear here once added to Supabase.</p>
        )}
      </div>
    </section>
  )
}