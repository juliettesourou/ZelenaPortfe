import Title from './Title'
import { useInView } from '../hooks/useInView'

const qualities = [
  "Développement d'interfaces web modernes et lisibles",
  "Conception d'API et logique métier back-end",
  "Réalisation d'applications mobiles orientées utilisateur",
]

const strengths = [
  "J'interviens sur toute la chaîne de développement, de la structure technique au rendu final.",
  "Je privilégie les interfaces simples, les flux clairs et un code organisé pour faciliter la maintenance.",
  "Mes projets mêlent besoins académiques, usage réel et sens du détail dans l'expérience utilisateur.",
]

const About = () => {
  const [gridRef, gridInView] = useInView()
  return (
    <section className='bg-[#f7f3ee] py-20'>
      <div className='section-shell'>
        <Title
          title="Un profil polyvalent, centré sur l'utilité"
          eyebrow='Profil'
          subtitle="Je construis des interfaces, des API et des applications mobiles avec une attention portée à la clarté du code et à l'expérience utilisateur."
        />

        <div ref={gridRef} className='grid gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
          <div
            style={{ animationDelay: '0ms' }}
            className={`rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_32px_80px_-42px_rgba(15,23,42,0.85)] md:p-10 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <p className='max-w-2xl text-base leading-8 text-slate-200'>
              Étudiante en fin de licence professionnelle en Génie Électrique / Systèmes d&apos;Information, je développe des solutions web et mobiles avec une approche structurée, sobre et orientée usage. Je cherche à créer des produits qui inspirent confiance, autant dans leur apparence que dans leur fonctionnement.
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
              {qualities.map((q) => (
                <div key={q} className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                  <p className='text-sm leading-6 text-slate-100'>{q}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{ animationDelay: '130ms' }}
            className={`space-y-6 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.28em] text-[#b76e4d]'>Points forts</h3>
              <ul className='mt-5 space-y-4'>
                {strengths.map((s) => (
                  <li key={s} className='text-sm leading-7 text-slate-600'>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className='rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.28em] text-[#b76e4d]'>Outils essentiels</h3>
              <div className='mt-5 flex flex-wrap gap-2'>
                {['Git', 'GitHub', 'Postman', 'VS Code', 'MySQL', 'PostgreSQL', 'UML', 'Merise'].map((t) => (
                  <span key={t} className='rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700'>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
