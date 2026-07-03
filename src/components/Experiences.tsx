import Title from './Title'
import { useInView } from '../hooks/useInView'
import { CheckCircle2 } from 'lucide-react'
import htmlImg    from '../assets/HTML5.png'
import cssImg     from '../assets/css.png'
import jsImg      from '../assets/JavaScript.png'
import reactImg   from '../assets/react.png'
import nodeImg    from '../assets/node.png'
import phpImg     from '../assets/php.jpeg'
import symfonyImg from '../assets/symfony.png'
import flutterImg from '../assets/flutter.png'
import nestImg    from '../assets/nest.jpg'
import tailwindImg from '../assets/tailwind.png'

const skills = [
  { name: 'HTML / CSS',        level: 95 },
  { name: 'JavaScript',        level: 90 },
  { name: 'React',             level: 85 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Symfony / PHP',     level: 80 },
  { name: 'Flutter',           level: 85 },
  { name: 'MySQL / PostgreSQL',level: 80 },
]

const frontendLogos = [
  { src: htmlImg,     alt: 'HTML5' },
  { src: cssImg,      alt: 'CSS3' },
  { src: jsImg,       alt: 'JavaScript' },
  { src: reactImg,    alt: 'React' },
  { src: tailwindImg, alt: 'Tailwind CSS' },
]

const backendLogos = [
  { src: nodeImg,    alt: 'Node.js' },
  { src: nestImg,    alt: 'NestJS' },
  { src: phpImg,     alt: 'PHP' },
  { src: symfonyImg, alt: 'Symfony' },
  { src: flutterImg, alt: 'Flutter' },
]

const otherSkills = [
  "Conception UML / MERISE",
  "Analyse et modélisation",
  "Développement d'API RESTful",
  "Gestion de projet",
  "Méthodes agiles",
  "Résolution de problèmes",
  "Travail en équipe",
]

const Experiences = () => {
  const [ref, inView] = useInView()
  return (
    <section>
      <Title title='Mes Compétences' eyebrow='Compétences' />

      <div ref={ref} className={`grid gap-8 lg:grid-cols-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}>

        {/* ── Barres de progression ── */}
        <div className='rounded-[1.5rem] border border-[#3C1718] bg-[#3C1718] p-7'>
          <h3 className='mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#8E1F24]'>
            Compétences techniques
          </h3>
          <div className='space-y-5'>
            {skills.map((s) => (
              <div key={s.name}>
                <div className='mb-2 flex justify-between text-xs text-[#C4B0A7]'>
                  <span>{s.name}</span>
                  <span className='font-medium text-[#F5ECE8]'>{s.level}%</span>
                </div>
                <div className='h-1.5 w-full rounded-full bg-[#200F0D]'>
                  <div
                    className='h-1.5 rounded-full bg-[#8E1F24]'
                    style={{
                      width: inView ? `${s.level}%` : '0%',
                      transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Logos marquee ── */}
        <div className='overflow-hidden rounded-[1.5rem] border border-[#3C1718] bg-[#3C1718] p-7'>
          <h3 className='mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#8E1F24]'>
            Stack technologique
          </h3>

          {/* masque dégradé gauche/droite */}
          <div
            className='space-y-4 overflow-hidden'
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            {/* Ligne 1 — Frontend → gauche */}
            <div className='animate-marquee flex w-max gap-4'>
              {[...frontendLogos, ...frontendLogos].map((logo, i) => (
                <div
                  key={i}
                  title={logo.alt}
                  className='flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#4F2625] bg-[#200F0D] p-1.5'
                >
                  <img src={logo.src} alt={logo.alt} className='h-full w-full rounded-2xl object-contain' />
                </div>
              ))}
            </div>

            {/* Ligne 2 — Backend ← droite (sens inverse) */}
            <div className='animate-marquee-reverse flex w-max gap-4'>
              {[...backendLogos, ...backendLogos].map((logo, i) => (
                <div
                  key={i}
                  title={logo.alt}
                  className='flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#4F2625] bg-[#200F0D] p-1.5'
                >
                  <img src={logo.src} alt={logo.alt} className='h-full w-full rounded-2xl object-contain' />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Autres compétences ── */}
        <div className='rounded-[1.5rem] border border-[#3C1718] bg-[#3C1718] p-7'>
          <h3 className='mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#8E1F24]'>
            Autres compétences
          </h3>
          <ul className='space-y-4'>
            {otherSkills.map((s) => (
              <li key={s} className='flex items-start gap-3 text-sm text-[#C4B0A7]'>
                <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#8E1F24]' />
                {s}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Experiences
