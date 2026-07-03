import { Monitor, Smartphone, Database, Network, Palette, Wrench } from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: Monitor,
    title: 'Développement Web',
    desc: 'Sites vitrines, applications web et plateformes sur mesure.',
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    desc: "Applications Android & iOS avec Flutter.",
  },
  {
    icon: Database,
    title: 'Bases de données',
    desc: 'Conception et gestion de bases de données robustes et sécurisées.',
  },
  {
    icon: Network,
    title: 'API & Intégrations',
    desc: "Développement d'API RESTful et intégration de services tiers.",
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Interfaces modernes, intuitives et adaptées à tous les écrans.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    desc: 'Maintenance, évolutions et amélioration de vos applications.',
  },
]

const Services = () => {
  const [gridRef, gridInView] = useInView()
  return (
    <section>
      <Title title='Mes Services' eyebrow='Services' />
      <div ref={gridRef} className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {services.map((s, i) => (
          <div
            key={s.title}
            style={{ animationDelay: `${i * 80}ms` }}
            className={`rounded-[1.5rem] border border-[#3C1718] bg-[#3C1718] p-7 transition hover:border-[#8E1F24]/60 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#8E1F24]/30 bg-[#200F0D]'>
              <s.icon className='h-5 w-5 text-[#8E1F24]' />
            </div>
            <h3 className='text-base font-semibold text-[#F5ECE8]'>{s.title}</h3>
            <p className='mt-2 text-sm leading-7 text-[#AF978F]'>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
