import Title from './Title'
import { useInView } from '../hooks/useInView'
import { CheckCircle2, Database, BarChart3, Microscope, Fish, Leaf } from 'lucide-react'
import pythonImage from '../assets/img/Python.png'
import xlstatImage from '../assets/img/XLSTAT.png'

const skills = [
  { name: 'Écologie aquatique',         level: 95 },
  { name: 'Biologie des poissons',      level: 92 },
  { name: 'Morphométrie',               level: 90 },
  { name: 'Otolithométrie',             level: 90 },
  { name: 'Microchimie',                level: 85 },
  { name: 'Analyses statistiques',      level: 88 },
  { name: 'Visualisation de données',   level: 86 },
]

const methods = [
  { icon: Microscope, label: 'Morphométrie' },
  { icon: Fish, label: 'Otolithométrie' },
  { icon: Database, label: 'Microchimie' },
  { icon: BarChart3, label: 'Analyse statistique' },
  { icon: Leaf, label: 'Interprétation écologique' },
  { icon: CheckCircle2, label: 'Visualisation de données' },
]

const otherSkills = [
  'Analyse de données scientifiques',
  'Rédaction scientifique',
  "Relecture et structuration d'articles",
  'Préparation de rapports environnementaux',
  'Présentation de résultats sous forme de graphiques et de tableaux',
  'Gestion des écosystèmes aquatiques',
  'Collaboration scientifique internationale',
]

const pythonSummary =
  "En complément de mon expertise en écologie évolutive et fonctionnelle, je mobilise Python comme un véritable levier d’analyse scientifique. Je l’utilise pour traiter et explorer des jeux de données complexes, visualiser des résultats, automatiser des tâches répétitives et concevoir des outils facilitant l’exploitation des données de recherche. Cette compétence renforce ma capacité à répondre avec rigueur à des problématiques scientifiques exigeantes et à contribuer à des projets interdisciplinaires à l’interface entre sciences biologiques et technologies numériques."

const xlstatSummary =
  "J’utilise également XLSTAT pour les analyses statistiques appliquées aux données biologiques et environnementales, en complément de mes outils de traitement, de visualisation et d’interprétation des résultats."

const Experiences = () => {
  const [ref, inView] = useInView()
  return (
    <section>
      <Title title='Compétences scientifiques' eyebrow='Compétences' />

      <div ref={ref} className={`grid gap-8 lg:grid-cols-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}>

        {/* ── Barres de progression ── */}
        <div className='rounded-[1.35rem] border border-[#E1E9E5] bg-white p-4 shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)] sm:rounded-[1.5rem] sm:p-7'>
          <h3 className='mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E6B54] sm:text-sm sm:tracking-[0.3em]'>
            Compétences techniques
          </h3>
          <div className='space-y-5'>
            {skills.map((s) => (
              <div key={s.name}>
                <div className='mb-2 flex justify-between text-xs text-[#4B5D57]'>
                  <span>{s.name}</span>
                  <span className='font-medium text-[#163229]'>{s.level}%</span>
                </div>
                <div className='h-1.5 w-full rounded-full bg-[#E6F3EE]'>
                  <div
                    className='h-1.5 rounded-full bg-[#0E6B54]'
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

        <div className='overflow-hidden rounded-[1.35rem] border border-[#E1E9E5] bg-white p-4 shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)] sm:rounded-[1.5rem] sm:p-7'>
          <h3 className='mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E6B54] sm:text-sm sm:tracking-[0.3em]'>
            Méthodes et outils
          </h3>
          <div className='grid gap-4 sm:grid-cols-2'>
            {methods.map(({ icon: Icon, label }) => (
              <div key={label} className='flex items-center gap-4 rounded-[1.15rem] border border-[#E7F1ED] bg-[#F7FBF9] px-4 py-4'>
                <span className='flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0E6B54] shadow-sm'>
                  <Icon className='h-5 w-5' />
                </span>
                <span className='text-sm font-medium text-[#24453B]'>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Autres compétences ── */}
        <div className='rounded-[1.35rem] border border-[#E1E9E5] bg-white p-4 shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)] sm:rounded-[1.5rem] sm:p-7'>
          <h3 className='mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E6B54] sm:text-sm sm:tracking-[0.3em]'>
            Objectifs et atouts
          </h3>
          <ul className='space-y-4'>
            {otherSkills.map((s) => (
              <li key={s} className='flex items-start gap-3 text-sm text-[#4B5D57]'>
                <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#0E6B54]' />
                {s}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div
        style={{ animationDelay: '180ms' }}
        className={`mt-8 overflow-hidden rounded-[1.35rem] border border-[#E1E9E5] bg-[linear-gradient(180deg,#ffffff_0%,#f8fcfa_100%)] shadow-[0_22px_44px_-34px_rgba(10,75,59,0.34)] sm:rounded-[1.75rem] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
      >
        <div className='grid gap-0 lg:grid-cols-[0.82fr_1.18fr]'>
          <div className='border-b border-[#E7F1ED] bg-[#F4FAF7] p-4 sm:p-8 lg:border-b-0 lg:border-r'>
            <div className='space-y-6'>
              <div className='rounded-[1.5rem] border border-[#E7F1ED] bg-white/88 px-6 py-6 shadow-sm'>
                <div className='flex items-center justify-center'>
                  <div className='python-slide flex h-44 w-44 items-center justify-center rounded-full'>
                    <img
                      src={pythonImage}
                      alt='Illustration Python pour l’analyse scientifique'
                      className='h-32 w-32 rounded-full object-contain mix-blend-multiply'
                    />
                  </div>
                </div>
              </div>

              <div className='mt-10 rounded-[1.5rem] border border-[#E7F1ED] bg-white/88 px-6 py-6 shadow-sm'>
                <div className='flex items-center justify-center'>
                  <img
                    src={xlstatImage}
                    alt='Logo XLSTAT'
                    className='python-slide h-20 w-20 shrink-0 rounded-full object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#0E6B54] sm:tracking-[0.3em]'>Compétence numérique</p>
            <div className='mt-4 space-y-6'>
              <div className='rounded-[1.35rem] border border-[#E2F0EA] bg-white/68 p-4 shadow-[0_20px_45px_-34px_rgba(12,80,61,0.22)] backdrop-blur-sm sm:rounded-[1.75rem] sm:p-7'>
                <h3 className='text-xl font-semibold leading-tight text-[#163229] sm:text-2xl'>Python au service de l’analyse scientifique</h3>
                <p className='mt-5 text-[0.95rem] leading-8 text-[#4A645B]'>
                  {pythonSummary}
                </p>
              </div>

              <div className='rounded-[1.35rem] border border-[#E2F0EA] bg-white/68 p-4 shadow-[0_20px_45px_-34px_rgba(12,80,61,0.22)] backdrop-blur-sm sm:rounded-[1.75rem] sm:p-7'>
                <h3 className='text-xl font-semibold leading-tight text-[#163229] sm:text-2xl'>XLSTAT</h3>
                <p className='mt-5 text-[0.95rem] leading-8 text-[#4A645B]'>
                  {xlstatSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
