import Title from './Title'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const experiences = [
  {
    poste: 'Stagiaire Développeur Web & Mobile',
    lieu: 'NUMEXIO — Cotonou',
    duree: '3 mois',
    points: [
      "Participation au développement et à la maintenance d'applications web.",
      "Collaboration en équipe sur des projets clients réels et amélioration de la qualité des interfaces.",
    ],
  },
  {
    poste: 'Stagiaire Développeur Web & Mobile',
    lieu: 'H-Kim',
    duree: '3 mois',
    points: [
      "Maintenance et amélioration d'applications web et mobile.",
      'Participation aux tests, corrections et évolutions fonctionnelles.',
    ],
  },
]

const formations = [
  {
    titre: "Licence 3 — Génie Électrique / Systèmes d'Information",
    ecole: 'UATM GASA-FORMATION, Cotonou',
    annee: '2025–2026',
  },
  {
    titre: "Licence 2 — Génie Électrique / Systèmes d'Information",
    ecole: 'UATM GASA-FORMATION, Cotonou',
    annee: '2024–2025',
  },
  {
    titre: "Licence 1 — Génie Électrique / Systèmes d'Information",
    ecole: 'UATM GASA-FORMATION, Cotonou',
    annee: '2023–2024',
  },
  {
    titre: 'Baccalauréat',
    ecole: 'Cotonou, Bénin',
    annee: '',
    note: "Projet de fin d'études : conception et développement de Noteo/ENANGNON, plateforme de suivi académique couvrant plusieurs centres d'enseignement.",
  },
]

const Parcours = () => {
  const [gridRef, gridInView] = useInView()
  return (
    <section id='parcours'>
      <Title
        title='Parcours'
        eyebrow='Expérience'
        subtitle="Mon parcours académique et mes expériences en entreprise, au service d'un objectif clair : concevoir des produits fiables et bien pensés."
      />

      <div ref={gridRef} className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div
          style={{ animationDelay: '0ms' }}
          className={`rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
        >
          <div className='mb-8 flex items-center gap-3'>
            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[#1f3c88] text-white'>
              <Briefcase className='h-5 w-5' />
            </span>
            <h3 className='text-lg font-semibold text-slate-900'>Expérience professionnelle</h3>
          </div>
          <div className='space-y-8'>
            {experiences.map((exp, i) => (
              <div key={i} className='relative pl-6'>
                <div className='absolute left-0 top-2 h-full w-px bg-slate-200' />
                <div className='absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#b76e4d]' />
                <p className='text-base font-semibold text-slate-900'>{exp.poste}</p>
                <p className='mt-1 text-sm font-medium text-[#b76e4d]'>{exp.lieu} · {exp.duree}</p>
                <ul className='mt-4 space-y-2'>
                  {exp.points.map((p, j) => (
                    <li key={j} className='text-sm leading-7 text-slate-600'>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{ animationDelay: '130ms' }}
          className={`rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
        >
          <div className='mb-8 flex items-center gap-3'>
            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white'>
              <GraduationCap className='h-5 w-5' />
            </span>
            <h3 className='text-lg font-semibold text-slate-900'>Formation</h3>
          </div>
          <div className='space-y-8'>
            {formations.map((f, i) => (
              <div key={i} className='relative pl-6'>
                <div className='absolute left-0 top-2 h-full w-px bg-slate-200' />
                <div className='absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-slate-900' />
                <p className='text-base font-semibold text-slate-900'>{f.titre}</p>
                <p className='mt-1 text-sm font-medium text-slate-500'>{f.ecole}{f.annee && ` · ${f.annee}`}</p>
                {f.note && (
                  <p className='mt-3 text-sm leading-7 text-slate-600'>{f.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours
