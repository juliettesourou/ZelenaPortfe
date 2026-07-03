import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

const infos = [
  { icon: Mail,         label: 'Email',       value: 'sounouvouliette10@gmail.com', href: 'mailto:sounouvouliette10@gmail.com' },
  { icon: Phone,        label: 'Téléphone',   value: '+229 01 65 36 32 23',         href: null },
  { icon: MapPin,       label: 'Localisation',value: 'Cotonou, Bénin',              href: null },
  { icon: ExternalLink, label: 'GitHub',      value: 'github.com/juliettesourou',   href: 'https://github.com/juliettesourou' },
]

const Contact = () => {
  const [gridRef, gridInView] = useInView()
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = encodeURIComponent(`Nom: ${form.nom}\n\n${form.message}`)
    const subject = encodeURIComponent(form.sujet || 'Message depuis le portfolio')
    window.location.href = `mailto:sounouvouliette10@gmail.com?subject=${subject}&body=${body}`
  }

  const field = 'w-full rounded-xl border border-[#3C1718] bg-[#3C1718] px-4 py-3 text-sm text-[#F5ECE8] placeholder:text-[#7B5750] outline-none focus:border-[#8E1F24] transition'

  return (
    <section id='contact' className='bg-[#200F0D] py-20'>
      <div className='section-shell'>
        <Title
          title='Me contacter'
          eyebrow='Contact'
          subtitle="Une opportunité, un stage ou un projet — voici comment me joindre."
        />

        <div ref={gridRef} className='grid gap-8 lg:grid-cols-[2fr_3fr]'>

          {/* ── Infos ── */}
          <div
            style={{ animationDelay: '0ms' }}
            className={`space-y-4 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            {infos.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4F2625] bg-[#200F0D]'>
                    <Icon className='h-4 w-4 text-[#8E1F24]' />
                  </div>
                  <div>
                    <p className='text-xs uppercase tracking-[0.25em] text-[#7B5750]'>{label}</p>
                    <p className='mt-1 text-sm text-[#C4B0A7]'>{value}</p>
                  </div>
                </>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className='flex items-center gap-4 rounded-[1.25rem] border border-[#3C1718] bg-[#3C1718] p-5 transition hover:border-[#8E1F24]/50'
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className='flex items-center gap-4 rounded-[1.25rem] border border-[#3C1718] bg-[#3C1718] p-5'>
                  {inner}
                </div>
              )
            })}
          </div>

          {/* ── Formulaire ── */}
          <form
            onSubmit={handleSubmit}
            style={{ animationDelay: '130ms' }}
            className={`rounded-[1.5rem] border border-[#3C1718] bg-[#3C1718] p-8 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <label className='mb-2 block text-xs text-[#7B5750]'>Nom</label>
                <input
                  type='text'
                  placeholder='Votre nom'
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label className='mb-2 block text-xs text-[#7B5750]'>Email</label>
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
              <label className='mb-2 block text-xs text-[#7B5750]'>Sujet</label>
              <input
                type='text'
                placeholder='Objet du message'
                value={form.sujet}
                onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                className={field}
              />
            </div>

            <div className='mt-4'>
              <label className='mb-2 block text-xs text-[#7B5750]'>Message</label>
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
              className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8E1F24] py-3 text-sm font-medium text-white transition hover:bg-[#A52020]'
            >
              <Send className='h-4 w-4' />
              Envoyer le message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
