import { Menu, X, Leaf } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#home',     label: 'Accueil' },
  { href: '#about',    label: 'À propos' },
  { href: '#services', label: 'Domaines' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#projects', label: 'Publications' },
  { href: '#skills',   label: 'Compétences' },
  { href: '#contact',  label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sectionIds = links.map(({ href }) => href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    let frameId = 0

    const updateActiveSection = () => {
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0
      const currentPosition = window.scrollY + headerHeight + 72
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8

      if (pageBottom) {
        setActiveId(sections[sections.length - 1].id)
        return
      }

      const currentSection = sections
        .filter((section) => section.offsetTop <= currentPosition)
        .at(-1)

      setActiveId(currentSection?.id ?? sections[0].id)
    }

    const handleScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setActiveId(href.replace('#', ''))
    setOpen(false)
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b border-[#DCEDE6] bg-[#F7FBF9]/92 backdrop-blur-md'>
      <div className='section-shell flex items-center justify-between py-4'>
        <a href='#home' className='flex items-center gap-3 text-[#0F5B47]'>
          <span className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFF3EB]'>
            <Leaf className='h-5 w-5' />
          </span>
          <span className='leading-tight'>
            <span className='block text-[0.95rem] font-semibold'>Dr Madel</span>
            <span className='block text-[1.05rem] font-semibold text-[#15735B]'>Floriane Adjibayo</span>
          </span>
        </a>

        <nav className='hidden items-center gap-1 text-sm text-[#45655A] md:flex'>
          {links.map(({ href, label }) => {
            const isActive = activeId === href.replace('#', '')

            return (
              <a
                key={label}
                href={href}
                onClick={() => handleNavClick(href)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 font-medium transition ${
                  isActive
                    ? 'bg-[#0E6B54] text-white shadow-[0_14px_28px_-20px_rgba(14,107,84,0.75)]'
                    : 'text-[#45655A] hover:bg-white hover:text-[#163229]'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E9E5] text-[#4B5D57] transition hover:border-[#0E6B54] md:hidden'
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open && (
        <nav className='border-t border-[#DCEDE6] bg-[#F7FBF9] px-6 py-4 md:hidden'>
          {links.map(({ href, label }) => {
            const isActive = activeId === href.replace('#', '')

            return (
              <a
                key={label}
                href={href}
                onClick={() => handleNavClick(href)}
                aria-current={isActive ? 'page' : undefined}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#E2F3EC] text-[#0E6B54]'
                    : 'text-[#4B5D57] hover:bg-white hover:text-[#163229]'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Navbar
