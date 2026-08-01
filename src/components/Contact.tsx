import { Mail, Globe2, GraduationCap, Send } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

type ContactInfo = {
  icon: typeof Mail
  label: string
  value: string
  href: string | null
}

const infos: ContactInfo[] = [
  { icon: Mail, label: 'Email principal', value: 'houetoflori@gmail.com', href: 'mailto:houetoflori@gmail.com' },
  {
    icon: Mail,
    label: 'Email institutionnel',
    value: 'florianemadel.houeto@etudiant-fst.utm.tn',
    href: 'mailto:florianemadel.houeto@etudiant-fst.utm.tn',
  },
  {
    icon: Globe2,
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/houeto-floriane-224b12374',
    href: 'https://www.linkedin.com/in/houeto-floriane-224b12374',
  },
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    value: 'Profil académique',
    href: 'https://scholar.google.com/citations?user=4QMWA4oAAAAJ&hl=fr',
  },
]

const highlights = [
  'Études environnementales',
  'Suivi écologique',
  'Conservation',
]

const Contact = () => {
  const [gridRef, gridInView] = useInView()
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = encodeURIComponent(`Nom: ${form.nom}\nEmail: ${form.email}\n\n${form.message}`)
    const subject = encodeURIComponent(form.sujet || 'Message depuis le portfolio')
    window.location.href = `mailto:houetoflori@gmail.com?subject=${subject}&body=${body}`
  }

  const field = 'w-full rounded-2xl border border-white/10 bg-white/92 px-4 py-3 text-sm text-[#163229] placeholder:text-[#8A9B94] outline-none transition focus:border-[#8BD0B8] focus:bg-white focus:ring-4 focus:ring-[#8BD0B8]/15'

  return (
    <section id='contact' className='relative overflow-hidden bg-[#0B4B3D] py-12 text-white md:py-16'>
      <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent' />
      <div className='absolute left-[-6rem] top-10 h-52 w-52 rounded-full bg-[#35B18C]/12 blur-3xl' />
      <div className='absolute bottom-[-5rem] right-[-2rem] h-64 w-64 rounded-full bg-[#8BD0B8]/10 blur-3xl' />
      <div className='section-shell'>
        <div className='mb-10 grid gap-3 md:grid-cols-[0.9fr_1.1fr_0.8fr] md:items-end'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#9FDAC5] sm:tracking-[0.28em]'>Contact</p>
            <h2 className='mt-3 text-3xl font-semibold text-white'>Contactez-moi</h2>
            <div className='mt-5 flex flex-wrap gap-2'>
              {highlights.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs font-medium text-[#D4EEE6] backdrop-blur-sm'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className='max-w-xl text-sm leading-7 text-[#C7E6DB]'>
            Je souhaite contribuer à des études environnementales, à des projets de recherche, à des programmes de suivi écologique et à des actions de conservation.
          </p>
          <div className='text-sm text-[#D4EEE6]'>
            Retrouvons-nous autour de projets liés à l'environnement et à la biodiversité.
          </div>
        </div>

        <div ref={gridRef} className='grid gap-8 md:grid-cols-[0.95fr_1.2fr_0.85fr]'>

          <div
            style={{ animationDelay: '0ms' }}
            className={`space-y-4 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            {infos.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E1E9E5] bg-[#F5FAF8]'>
                    <Icon className='h-4 w-4 text-[#0E6B54]' />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-xs uppercase tracking-[0.18em] text-[#9FDAC5] sm:tracking-[0.25em]'>{label}</p>
                    <p className='mt-1 break-words text-sm text-white'>{value}</p>
                  </div>
                </>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={typeof href === 'string' && href.startsWith('http') ? '_blank' : undefined}
                  rel={typeof href === 'string' && href.startsWith('http') ? 'noreferrer' : undefined}
                  className='glass-card elegant-card flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm hover:border-white/30 sm:p-5'
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className='glass-card elegant-card flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm sm:p-5'>
                  {inner}
                </div>
              )
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ animationDelay: '130ms' }}
            className={`glass-card rounded-[1.35rem] border border-white/10 bg-white/7 p-4 shadow-[0_24px_50px_-36px_rgba(0,0,0,0.5)] backdrop-blur-md sm:rounded-[1.85rem] sm:p-8 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='mb-6 flex items-center justify-between gap-4'>
              <div>
                <h3 className='text-lg font-semibold text-white'>Envoyer un message</h3>
                <p className='mt-1 text-sm text-[#C7E6DB]'>Une opportunité, une collaboration ou une mission scientifique.</p>
              </div>
              <span className='hidden rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-medium text-[#D9F1E8] sm:inline-flex'>
                Réponse par email
              </span>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <label className='mb-2 block text-xs text-[#B8DDD1]'>Nom</label>
                <input
                  type='text'
                  placeholder='Votre nom'
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label className='mb-2 block text-xs text-[#B8DDD1]'>Email</label>
                <input
                  type='email'
                  placeholder='votre@email.com'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </div>
            </div>

            <div className='mt-4'>
              <label className='mb-2 block text-xs text-[#B8DDD1]'>Sujet</label>
              <input
                type='text'
                placeholder='Objet du message'
                value={form.sujet}
                onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                className={field}
              />
            </div>

            <div className='mt-4'>
              <label className='mb-2 block text-xs text-[#B8DDD1]'>Message</label>
              <textarea
                rows={5}
                placeholder='Votre message...'
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-none`}
              />
            </div>

            <button
              type='submit'
              className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-medium text-[#0E6B54] shadow-[0_16px_32px_-24px_rgba(255,255,255,0.55)] transition hover:-translate-y-0.5 hover:bg-[#EAF6F1]'
            >
              <Send className='h-4 w-4' />
              Envoyer le message
            </button>
          </form>

          <div
            style={{ animationDelay: '220ms' }}
            className={`glass-card elegant-card flex flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.05)_100%)] p-4 backdrop-blur-sm sm:rounded-[1.85rem] sm:p-7 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div>
              <h3 className='text-xl font-semibold text-white'>Retrouvez-moi</h3>
              <div className='mt-5 flex gap-3'>
                {infos.slice(0, 3).map(({ icon: Icon, label }) => (
                  <div key={label} className='flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white'>
                    <Icon className='h-4 w-4' />
                  </div>
                ))}
              </div>
              <div className='mt-6 space-y-4'>
                {infos.map(({ label, value }) => (
                  <div key={label} className='border-b border-white/8 pb-3 last:border-b-0 last:pb-0'>
                    <p className='text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9FDAC5] sm:tracking-[0.25em]'>{label}</p>
                    <p className='mt-1 break-words text-sm text-white'>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className='mt-8 text-sm leading-7 text-[#D4EEE6]'>
              La compréhension du vivant est une clé pour préserver notre environnement.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
