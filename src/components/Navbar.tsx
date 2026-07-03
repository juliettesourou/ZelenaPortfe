import { Menu, X, Download } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#home',     label: 'Accueil' },
  { href: '#home',     label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills',   label: 'Compétences' },
  { href: '#contact',  label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b border-[#3C1718] bg-[#200F0D]/90 backdrop-blur-sm'>
      <div className='section-shell flex items-center justify-between py-4'>
        <a href='#home' className='font-serif text-2xl italic text-[#8E1F24]'>
          Juliette.
        </a>

        <nav className='hidden items-center gap-1 text-sm text-[#C4B0A7] md:flex'>
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className='rounded-full px-4 py-2 transition hover:text-[#F5ECE8]'
            >
              {label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <a
            href='#'
            className='hidden items-center gap-2 rounded-full bg-[#8E1F24] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#A52020] md:inline-flex'
          >
            <Download className='h-4 w-4' />
            Télécharger CV
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3C1718] text-[#C4B0A7] transition hover:border-[#8E1F24] md:hidden'
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open && (
        <nav className='border-t border-[#3C1718] bg-[#200F0D] px-6 py-4 md:hidden'>
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className='block py-3 text-sm text-[#C4B0A7] transition hover:text-[#F5ECE8]'
            >
              {label}
            </a>
          ))}
          <a
            href='#'
            className='mt-3 inline-flex items-center gap-2 rounded-full bg-[#8E1F24] px-4 py-2 text-sm font-medium text-white'
          >
            <Download className='h-4 w-4' />
            Télécharger CV
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
