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

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">Skills</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-8 sm:mb-10">What I Work With</h2>
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {skills && skills.length > 0 ? (
            skills.map((skill) => (
              <span key={skill.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full shadow-sm hover:shadow-md hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5 transition-all cursor-default">
                {skill.name}
              </span>
            ))
          ) : (
            <p className="text-slate-500 dark:text-slate-400">Skills will appear here once added to Supabase.</p>
          )}
        </div>
      </div>
    </section>
  )
}