import { ArrowUpRight } from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'
import ima from '../assets/noteo.png'
import Preta from '../assets/Preta.png'

const projects = [
  {
    id: 1,
    title: 'Noteo',
    desc: "Plateforme de suivi académique pensée pour l'administration et les parents, avec une expérience cohérente entre web et mobile.",
    image: ima,
    tech: ['React', 'NestJS', 'Tailwind', 'Flutter'],
    role: 'Conception full stack web et mobile',
  },
  {
    id: 2,
    title: 'Preta',
    desc: 'Application mobile pour connecter clients et prestataires autour des services, rendez-vous et échanges.',
    image: Preta,
    tech: ['Flutter', 'Dart'],
    role: 'Développement mobile Flutter',
  },
  {
    id: 3,
    title: 'GestionNotes',
    desc: "Application de gestion des notes destinée aux enseignants, avec administration et organisation des résultats.",
    image: null,
    tech: ['React', 'TypeScript', 'Symfony', 'PHP'],
    role: 'Développement back-end Symfony',
  },
]

const Projects = () => {
  const [gridRef, gridInView] = useInView()
  return (
    <section>
      <Title title='Projets sélectionnés' eyebrow='Réalisations' />

      <div ref={gridRef} className='grid gap-5 lg:grid-cols-3'>
        {projects.map((project, i) => (
          <article
            key={project.id}
            style={{ animationDelay: `${i * 120}ms` }}
            className={`group overflow-hidden rounded-[1.5rem] border border-[#3C1718] bg-[#3C1718] transition hover:border-[#8E1F24]/50 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            {/* Preview */}
            <div className='flex h-44 items-center justify-center bg-[#200F0D] p-5'>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className='max-h-full rounded-xl object-contain'
                />
              ) : (
                <div className='flex h-full w-full items-end rounded-xl border border-[#4F2625] p-5'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.3em] text-[#7B5750]'>Projet web</p>
                    <p className='mt-2 text-xl font-semibold text-[#F5ECE8]'>{project.title}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className='p-6'>
              <div className='flex items-start justify-between gap-4'>
                <h3 className='text-lg font-semibold text-[#F5ECE8]'>{project.title}</h3>
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4F2625] text-[#C4B0A7] transition group-hover:border-[#8E1F24] group-hover:text-[#8E1F24]'>
                  <ArrowUpRight className='h-4 w-4' />
                </span>
              </div>
              <p className='mt-3 text-sm leading-7 text-[#AF978F]'>{project.desc}</p>

              <p className='mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8E1F24]'>Rôle</p>
              <p className='mt-1 text-sm leading-6 text-[#C4B0A7]'>{project.role}</p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {project.tech.map((t) => (
                  <span key={t} className='rounded-full border border-[#4F2625] px-3 py-1 text-xs font-medium text-[#C4B0A7]'>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
