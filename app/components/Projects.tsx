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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-3">Projects</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-10 max-w-2xl">
          A selection of academic and personal projects spanning web development, machine learning, and systems programming.
        </p>

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
                <div
                  key={project.id}
                  className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                    project.featured
                      ? 'ring-2 ring-accent-500 shadow-lg shadow-accent-500/10 hover:shadow-2xl hover:shadow-accent-500/25'
                      : 'border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-black/40'
                  }`}
                >
                  {project.featured && (
                    <span className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                        <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 7.5l6.4-.6L10 1z" />
                      </svg>
                      FEATURED
                    </span>
                  )}

                  <div className="relative h-44 sm:h-48 bg-gradient-to-br from-accent-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[length:16px_16px] opacity-60"></div>
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <span className="relative text-sm font-medium">No image</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                    {techList.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {techList.map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-5 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.project_url && (
                        
                        < a href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-accent-600 dark:text-accent-400 hover:gap-2.5 transition-all"
                        >
                          {projectLinkLabel}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      )}
                      {project.github_url && (
                        
                        < a href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.7-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.37 2.76-.37.94 0 1.88.13 2.76.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.76 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.49-5.55 7.49-10.39C23.02 5.24 18.27.5 12 .5z" />
                          </svg>
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