import { createClient } from '@/app/utils/supabase/server'

export default async function Certificates() {
  const supabase = await createClient()
  const { data: certificates, error } = await supabase
    .from('certificates')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching certificates:', error)
  }

  return (
    <section id="certificates" className="bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <span className="text-xs sm:text-sm font-bold text-accent-600 dark:text-accent-400 tracking-widest uppercase">Credentials</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-8 sm:mb-10">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certificates && certificates.length > 0 ? (
            certificates.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-accent-300 hover:-translate-y-0.5 transition-all flex gap-4 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent-50 dark:bg-accent-500/10 flex items-center justify-center text-accent-400 shrink-0 overflow-hidden">
                  {cert.badge_image_url ? (
                    <img src={cert.badge_image_url} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs">Badge</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">{cert.title}</h3>
                  {cert.issuer && <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>}
                  {cert.issue_date && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                      {new Date(cert.issue_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </p>
                  )}
                  {cert.credential_url && (
                    <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400 hover:underline mt-2 inline-block">
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-500 dark:text-slate-400">Certificates will appear here once added to Supabase.</p>
          )}
        </div>
      </div>
    </section>
  )
}