import { createClient } from '@/app/utils/supabase/server'

export default async function Projects() {
  const supabase = await createClient()
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
  }

  return (
    <section id="projects" className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">Portfolio</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-8 sm:mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project) => {
              const techList = Array.isArray(project.tech_stack)
                ? project.tech_stack
                : typeof project.tech_stack === 'string'
                ? project.tech_stack.replace(/[{}]/g, '').split(',').filter(Boolean)
                : []

              const projectLinkLabel = project.project_url?.includes('kaggle.com') ? 'Dataset' : 'Live Demo'

              return (
                <div key={project.id} className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1.5 bg-white dark:bg-slate-900 flex flex-col ${project.featured ? 'ring-2 ring-accent-500' : 'border border-slate-200 dark:border-slate-800'}`}>
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-accent-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full z-10 tracking-wide">
                      FEATURED
                    </span>
                  )}

                  <div className="h-40 sm:h-44 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-400 overflow-hidden">
                    {project.image_url ? (
                      <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <span className="text-sm">No image</span>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                    {techList.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {techList.map((tech: string) => (
                          <span key={tech} className="bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 text-xs font-medium px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.project_url && (
                        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent-600 dark:text-accent-400 hover:underline">
                          {projectLinkLabel}
                        </a>
                      )}
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:underline">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-slate-500 dark:text-slate-400">Projects will appear here once added to Supabase.</p>
          )}
        </div>
      </div>
    </section>
  )
}