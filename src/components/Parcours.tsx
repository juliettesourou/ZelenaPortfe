import { useState } from 'react'
import Title from './Title'
import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'

type ExpType = 'Stages' | 'Freelance'

const tabs: ExpType[] = ['Stages', 'Freelance']

const experiences: { type: ExpType; poste: string; lieu: string; duree: string; points: string[] }[] = [
  {
    type: 'Stages',
    poste: 'Collecte et traitement des données de la pêche maritime artisanale',
    lieu: 'Direction de la Production Halieutique / Projet AEP - FAO, Bénin',
    duree: '3 mois',
    points: [
      "Participation aux activités de collecte et de traitement des données le long de la côte béninoise.",
      "Renforcement des compétences en suivi halieutique, collecte de données de terrain et organisation des informations.",
    ],
  },
  {
    type: 'Stages',
    poste: 'Suivi des exploitations aquacoles',
    lieu: 'Direction de la Production Halieutique, Bénin',
    duree: '3 mois',
    points: [
      "Participation au suivi des exploitations aquacoles dans les départements du sud du Bénin.",
      "Meilleure compréhension des systèmes aquacoles, du suivi-évaluation et de la gestion durable des ressources halieutiques.",
    ],
  },
  {
    type: 'Stages',
    poste: "Identification d'espèces halieutiques et traitement des produits halieutiques",
    lieu: "LAREPROH, Université d'Abomey-Calavi",
    duree: '3 mois',
    points: [
      "Renforcement des compétences en identification biologique, observation scientifique et travail en laboratoire.",
      "Participation aux activités d'identification d'espèces en vue de leur traitement.",
    ],
  },
  {
    type: 'Stages',
    poste: 'Formation en sclérochronologie et analyses statistiques sous R',
    lieu: 'IFREMER - Pôle national de sclérochronologie, Boulogne-sur-Mer, France',
    duree: '2024',
    points: [
      "Formation à l'analyse des données en sclérochronologie et à l'application des méthodes statistiques sous R.",
      "Renforcement des compétences en traitement statistique des données biologiques et en interprétation de la croissance.",
    ],
  },
  {
    type: 'Freelance',
    poste: 'Services scientifiques et techniques',
    lieu: 'Écologie, biologie des poissons et données environnementales',
    duree: 'En cours',
    points: [
      'Analyse de données scientifiques et biologiques.',
      "Visualisation de données, rédaction scientifique et appui à la préparation de rapports environnementaux.",
      "Relecture et structuration d'articles, analyse statistique de données biologiques et présentation de résultats sous forme de graphiques, de tableaux et de supports PowerPoint.",
    ],
  },
]

const formations: { titre: string; ecole: string; annee: string; note?: string }[] = [
  {
    titre: 'Doctorat en Sciences biologiques',
    ecole: 'Faculté des Sciences de Tunis El Manar',
    annee: '2026',
  },
  {
    titre: 'Master en Écologie évolutive et fonctionnelle',
    ecole: 'Faculté des Sciences de Tunis El Manar',
    annee: '2021',
  },
  {
    titre: 'Licence en Sciences biologiques',
    ecole: "Université d'Abomey-Calavi",
    annee: '2018',
  },
]

const diplomes = [
  'Doctorat en Sciences biologiques',
  'Master en Écologie évolutive et fonctionnelle',
  'Licence en Sciences biologiques',
]

const Parcours = () => {
  const [gridRef, gridInView] = useInView()
  const [activeTab, setActiveTab] = useState<ExpType>('Stages')

  const filtered = experiences.filter((e) => e.type === activeTab)

  return (
    <section>
      <Title
        title='Expériences professionnelles'
        eyebrow='Parcours'
        subtitle="Un parcours universitaire et scientifique centré sur l'écologie évolutive et fonctionnelle, l'écologie aquatique et l'étude des organismes dans leur environnement."
      />

      <div ref={gridRef} className='grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
        <div
          style={{ animationDelay: '0ms' }}
          className={`rounded-[1.35rem] border border-[#E1E9E5] bg-white p-4 shadow-[0_20px_45px_-34px_rgba(12,80,61,0.35)] sm:rounded-[1.8rem] sm:p-8 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
        >
          <div className='mb-6 flex items-center gap-3'>
            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[#0E6B54] text-white'>
              <Briefcase className='h-5 w-5' />
            </span>
            <h3 className='text-lg font-semibold text-[#163229]'>Expériences professionnelles</h3>
          </div>
          <p className='mb-6 max-w-3xl text-sm leading-7 text-[#5B7068]'>
            Au cours de mon parcours, j&apos;ai participé à plusieurs stages et formations pratiques dans les domaines de la pêche, de l&apos;aquaculture, de la sclérochronologie et du traitement des produits halieutiques.
          </p>

          <div className='mb-8 flex gap-2 rounded-full bg-[#E6F3EE] p-1'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-medium transition ${
                  activeTab === tab
                    ? 'bg-[#0E6B54] text-white shadow-sm'
                    : 'text-[#2E463D] hover:text-[#0E6B54]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className='space-y-8'>
              {filtered.map((exp, i) => (
                <div key={i} className='relative pl-6'>
                  <div className='absolute left-0 top-2 h-full w-px bg-[#E1E9E5]' />
                  <div className='absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#0E6B54]' />
                  <p className='text-base font-semibold text-[#163229]'>{exp.poste}</p>
                  <p className='mt-1 text-sm font-medium text-[#0E6B54]'>{exp.lieu} · {exp.duree}</p>
                  <ul className='mt-4 space-y-2'>
                    {exp.points.map((p, j) => (
                      <li key={j} className='text-sm leading-7 text-[#4B5D57]'>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-sm leading-7 text-[#6B7C76]'>
              Aucune expérience à afficher pour le moment dans cette catégorie.
            </p>
          )}
        </div>

        <div className='space-y-6'>
          <div
            style={{ animationDelay: '130ms' }}
            className={`rounded-[1.35rem] border border-[#E1E9E5] bg-white p-4 shadow-[0_20px_45px_-34px_rgba(12,80,61,0.35)] sm:rounded-[1.8rem] sm:p-8 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='mb-8 flex items-center gap-3'>
              <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[#163229] text-white'>
                <GraduationCap className='h-5 w-5' />
              </span>
              <h3 className='text-lg font-semibold text-[#163229]'>Formation</h3>
            </div>
            <div className='space-y-8'>
              {formations.map((f, i) => (
                <div key={i} className='relative pl-6'>
                  <div className='absolute left-0 top-2 h-full w-px bg-[#E1E9E5]' />
                  <div className='absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#163229]' />
                  <p className='text-base font-semibold text-[#163229]'>{f.titre}</p>
                  <p className='mt-1 text-sm font-medium text-[#6B7C76]'>{f.ecole}</p>
                  <p className='mt-1 text-sm text-[#2E463D]'>{f.annee}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{ animationDelay: '220ms' }}
            className={`rounded-[1.35rem] border border-[#E1E9E5] bg-[#F7FBF9] p-4 shadow-[0_20px_45px_-34px_rgba(12,80,61,0.28)] sm:rounded-[1.8rem] sm:p-8 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='mb-6 flex items-center gap-3'>
              <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[#E6F5EF] text-[#0E6B54]'>
                <Award className='h-5 w-5' />
              </span>
              <h3 className='text-lg font-semibold text-[#163229]'>Diplômes</h3>
            </div>
            <ul className='space-y-4'>
              {diplomes.map((diplome) => (
                <li key={diplome} className='flex items-start gap-3 text-sm leading-7 text-[#4B5D57]'>
                  <span className='mt-2 h-2 w-2 rounded-full bg-[#0E6B54]' />
                  <span>{diplome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours
