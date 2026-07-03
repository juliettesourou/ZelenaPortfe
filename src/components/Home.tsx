import { ArrowRight, Mail, Code2, Globe } from 'lucide-react'
import imaa from '../assets/imaa.png'

const socials = [
  { icon: Code2,  href: 'https://github.com/juliettesourou', label: 'GitHub' },
  { icon: Globe,  href: '#',                                  label: 'LinkedIn' },
  { icon: Mail,   href: 'mailto:sounouvouliette10@gmail.com', label: 'Email' },
]

const Home = () => {
  return (
    <section className='flex min-h-[92vh] items-center py-16'>
      <div className='grid w-full items-center gap-12 md:grid-cols-[1.1fr_0.9fr]'>

        {/* ── Text ── */}
        <div>
          <div className='hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-[#3C1718] bg-[#3C1718] px-4 py-2 text-xs font-medium text-[#C4B0A7]'>
            <Code2 className='h-3.5 w-3.5 text-[#8E1F24]' />
            Développeuse Full Stack
          </div>

          <p className='hero-sub text-sm text-[#AF978F]'>Bonjour, je suis</p>

          <h1 className='hero-title mt-2 text-5xl font-bold leading-tight tracking-tight md:text-6xl'>
            <span className='text-[#F5ECE8]'>Juliette </span>
            <span className='text-[#8E1F24]'>Sounouvou</span>
          </h1>

          <p className='hero-sub mt-4 text-lg font-medium text-[#D4C2B9]'>
            Développeuse Full Stack Web &amp; Mobile
          </p>

          <p className='hero-sub mt-4 max-w-lg text-base leading-8 text-[#AF978F]'>
            Je conçois et développe des applications web et mobiles modernes, performantes et adaptées aux besoins réels.
          </p>

          <div className='hero-cta mt-8 flex flex-wrap gap-3'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-full bg-[#8E1F24] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#A52020]'
            >
              Voir mes projets <ArrowRight className='h-4 w-4' />
            </a>
            <a
              href='#contact'
              className='inline-flex items-center gap-2 rounded-full border border-[#3C1718] px-6 py-3 text-sm font-medium text-[#C4B0A7] transition hover:border-[#8E1F24] hover:text-[#F5ECE8]'
            >
              <Mail className='h-4 w-4' /> Me contacter
            </a>
          </div>

          <div className='hero-meta mt-8 flex gap-3'>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className='flex h-10 w-10 items-center justify-center rounded-full border border-[#3C1718] text-[#C4B0A7] transition hover:border-[#8E1F24] hover:text-[#8E1F24]'
              >
                <Icon className='h-4 w-4' />
              </a>
            ))}
          </div>
        </div>

        {/* ── Photo ── */}
        <div className='hero-photo hidden md:flex md:justify-center'>
          <div className='relative h-[520px] w-[380px] overflow-hidden rounded-[2.5rem] border-2 border-[#3C1718]'>
            <img
              src={imaa}
              alt='Juliette Sounouvou'
              className='h-full w-full object-cover object-top'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#200F0D]/50 to-transparent' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
