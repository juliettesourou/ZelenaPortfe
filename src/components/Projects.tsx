import { ArrowUpRight } from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'
import tazarki5 from '../assets/img/Tazarki5.png'
import logoon2 from '../assets/img/logoon2.jpeg'
import shahin1 from '../assets/img/Shahin1.jpeg'
import mejri4 from '../assets/img/Mejri4.png'
import yovo3 from '../assets/img/yovo3.jpeg'
import bakkari6 from '../assets/img/Lr-Bakkari6.png'
import jarique from '../assets/img/jarique.png'

const publications = [
  {
    id: 1,
    title: 'Morphological and Biometrical Characterization of Otoliths for Three Populations of the Genus Pagellus',
    authors: 'Houeto M. F. A.*, Mejri M., Tazarki M., Bakkari W., Chalh A., Quignard J. P., Trabelsi M.',
    year: '2024',
    desc: 'Caractérisation morphologique et biométrique des otolithes de trois populations du genre Pagellus en Méditerranée occidentale et orientale, en Tunisie.',
    image: tazarki5,
    tech: ['Otolithes', 'Morphométrie', 'Méditerranée'],
    role: 'Thalassas: An International Journal of Marine Sciences',
    doi: '10.1007/s41208-023-00637-3',
    imageFit: 'contain',
  },
  {
    id: 2,
    title: 'Evaluation of Otolith Shape as an Approach to Stock Discrimination of Mugil cephalus (Linnaeus, 1758) in the Lagoon Environments of Benin',
    authors: 'Houeto M. F. A.*, Andrialovanirina N., Mejri M., Tazarki M., Sounouvou M., Ben Ghorbel M., Dossou-Yovo P., Chalh A., Quignard J. P., Trabelsi M.',
    year: '2024',
    desc: "Évaluation de la forme des otolithes comme approche de discrimination des stocks de Mugil cephalus (Linnaeus, 1758) dans les environnements lagunaires du Bénin.",
    image: logoon2,
    tech: ['Stocks', 'Lagunes', 'Morphologie'],
    role: 'Preprint',
    doi: '10.21203/rs.3.rs-4219582/v1',
    imageFit: 'cover',
  },
  {
    id: 3,
    title: 'Does Sarotherodon melanotheron (Perciformes, Cichlidae) Stocks Exhibit Eco-Geospatial Connectivity? Assessment in Benin Waters Using Sagitta Shape Analysis',
    authors: 'Houeto M. F. A.*, Sounouvou M., Mahé K., Chalh A., Quignard J. P., Trabelsi M., Ben Faleh A., Shahin A. A. B., Bouriga N.',
    year: '2025',
    desc: "Évaluation de la connectivité éco-géospatiale des stocks de Sarotherodon melanotheron (Perciformes, Cichlidae) dans les eaux béninoises à l'aide de l'analyse de la forme des sagittae.",
    image: shahin1,
    tech: ['Bénin', 'Sagitta', 'Connectivité'],
    role: 'Thalassas: An International Journal of Marine Sciences, 41, 60',
    doi: '10.1007/s41208-025-00813-7',
    imageFit: 'cover',
  },
  {
    id: 4,
    title: 'Fluctuating Asymmetry of Elops lacerta (Valenciennes, 1847) Otoliths in the Western African Waters',
    authors: 'Houeto M. F. A.*, Mejri M., Tazarki M., Sounouvou M., Andrialovanirina N., Ben Ghorbel M., Dossou-Yovo P., Chalh A., Quignard P., Trabelsi M., Mahé K.',
    year: '2024',
    desc: "Analyse de l'asymétrie fluctuante des otolithes d'Elops lacerta (Valenciennes, 1847) dans les eaux ouest-africaines.",
    image: mejri4,
    tech: ['Asymétrie', 'Afrique de l’Ouest', 'Populations'],
    role: 'Open Journal of Marine Science, 14, 41-62',
    doi: '10.4236/ojms.2024.143003',
    imageFit: 'contain',
  },
  {
    id: 5,
    title: 'Analysis of Otolith Shape as a Tool for Discriminating Stocks of Cassava Croaker (Pseudotolithus senegalensis) in Beninese Waters',
    authors: 'Houeto M. F. A.*, Sounouvou M., Tazarki M., Andrialovanirina N., Ghorbel M. B., Mejri M., Dossou-Yovo P., Chalh A., Quignard J.-P., Mahé K., Trabelsi M.',
    year: '2024',
    desc: "Analyse de la forme des otolithes comme outil de discrimination des stocks de Cassava Croaker (Pseudotolithus senegalensis) dans les eaux béninoises.",
    image: yovo3,
    tech: ['Pseudotolithus senegalensis', 'Stocks', 'Bénin'],
    role: 'Open Journal of Marine Science, 14, 96-114',
    doi: '10.4236/ojms.2024.144006',
    imageFit: 'contain',
  },
  {
    id: 6,
    title: 'Discriminant Inter- and Intrapopulation Variation in Sagittal Otolith Shape and Morphometry in Chelon ramada',
    authors: 'Houeto M. F. A.*, Mejri M., Bakkari W., Bouriga N., Chalh A., Shahin A. A. A., Quignard J. P., Trabelsi M., Ben Faleh A.',
    year: '2024',
    desc: "Variation discriminante inter- et intrapopulationnelle de la forme et de la morphométrie des otolithes sagittaux de Chelon ramada dans les lagunes de Boughrara et d’El Bibane, en eaux tunisiennes.",
    image: bakkari6,
    tech: ['Chelon ramada', 'Morphométrie', 'Tunisie'],
    role: 'Journal of the Marine Biological Association of the United Kingdom',
    doi: '10.1017/S0025315423000851',
    imageFit: 'contain',
  },
  {
    id: 7,
    title: 'Environmental Structuring of Growth and Otolith Shape',
    authors: 'Houeto M. F. A., Tazarki M., Sounouvou M., Andrialovanirina N., Mejri M., Chalh A., Quignard J. P., Trabelsi M., Mahe K.',
    year: '2026',
    desc: "Structuration environnementale de la croissance et de la forme des otolithes chez Chloroscombrus chrysurus dans des habitats côtiers contrastés.",
    image: jarique,
    tech: ['Chloroscombrus chrysurus', 'Croissance', 'Habitats côtiers'],
    role: 'Manuscript in preparation',
    doi: 'En préparation',
    imageFit: 'contain',
  },
]

const collaborations = [
  {
    id: 1,
    title: 'Impact of the environment on otolith shape and fluctuating asymmetry of Sarpa salpa',
    authors: 'Tazarki M., Mejri M., Houeto M. F. A., Bouriga N., Mili S., Bakkari W., Chalh A., Quignard J. P., Trabelsi M.',
    year: '2023',
    role: 'Comparative Biochemistry and Physiology',
    doi: '10.21411/CBM.A.1C2F3D0',
  },
  {
    id: 2,
    title: 'Intra- and interspecies discrimination of three teleost species from the Komo Estuary',
    authors: 'Mbadinga K. C. M., Ben Ghorbel M., Houeto M. F. A., Tazarki M., Ben Faleh A., Quignard J. P., Trabelsi M., Shahin A. A., Bouriga N.',
    year: '2024',
    role: 'Marine Biology Research',
    doi: '10.1080/17451000.2024.2400251',
  },
  {
    id: 3,
    title: 'Discriminant stock structure of Diplodus annularis in Tunisian waters',
    authors: 'Ben Ghorbel M., Mejri M., Houeto M. F. A., Chalh A., Ben Faleh A., Quignard J. P., Trabelsi M., Shahin A. A. B., Bouriga N.',
    year: '2024',
    role: 'Iranian Journal of Fisheries Sciences',
    doi: '10.22092/ijfs.2024.131964',
  },
  {
    id: 4,
    title: 'Otolith microchemical and morphological analyses for stock discrimination of Sarpa salpa',
    authors: 'Ben Ghorbel M., Mejri M., Houeto M. F. A., Chalh A., Quignard J. P., Trabelsi M., Bouriga N.',
    year: '2024',
    role: 'Journal of the Marine Biological Association of the United Kingdom',
    doi: '10.1017/S0025315423000954',
  },
  {
    id: 5,
    title: 'Intra- and interspecific variation of otolith morphometric asymmetry',
    authors: 'Mbadinga K. C. M., Mejri M., Houeto M. F. A., Bakkari W., Ben Faleh A., Quignard J. P., Trabelsi M., Shahin A. A. A., Bouriga N.',
    year: '2025',
    role: 'Journal of the Marine Biological Association of the United Kingdom',
    doi: '10.1017/S0025315425100192',
  },
]

const Projects = () => {
  const [publicationsRef, publicationsInView] = useInView()
  const [collaborationsRef, collaborationsInView] = useInView()
  return (
    <section>
      <Title title='Publications scientifiques' eyebrow='Recherche' subtitle="Mes publications portent principalement sur l'analyse morphométrique, morphologique et microchimique des otolithes de poissons, avec des applications en écologie des populations et en discrimination des stocks." />

      <div ref={publicationsRef} className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {publications.map((project, i) => (
          <article
            key={project.id}
            style={{ animationDelay: `${i * 120}ms` }}
            className={`glass-card elegant-card group overflow-hidden rounded-[1.6rem] border border-[#E1E9E5] bg-[linear-gradient(180deg,#ffffff_0%,#fbfefd_100%)] shadow-[0_18px_40px_-32px_rgba(12,80,61,0.45)] ${
              project.id === 3 ? 'md:col-span-2 xl:col-span-2' : ''
            } ${publicationsInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className={project.id === 3 ? 'grid md:grid-cols-[0.92fr_1.08fr] md:items-stretch' : ''}>
              <div
                className={`relative overflow-hidden bg-[#F4F8F6] ${
                  project.id === 3 ? 'min-h-[260px] md:h-full' : 'h-40'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full transition duration-500 group-hover:scale-[1.02] ${
                    project.imageFit === 'contain'
                      ? 'object-contain p-3'
                      : 'object-cover'
                  }`}
                />
                <div className='absolute left-3 top-3 rounded-full border border-[#D8EAE2] bg-white/92 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#31594D] shadow-sm'>
                  {project.year}
                </div>
              </div>

              <div className='p-4 sm:p-5'>
                <div className='flex items-start justify-between gap-4'>
                  <h3 className='text-base font-semibold leading-6 text-[#163229]'>{project.title}</h3>
                  <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E1E9E5] text-[#4B5D57] transition group-hover:border-[#0E6B54] group-hover:text-[#0E6B54]'>
                    <ArrowUpRight className='h-4 w-4' />
                  </span>
                </div>
                <p className='mt-3 text-xs leading-6 text-[#70837C]'>{project.authors} ({project.year})</p>
                <p className='mt-3 text-sm leading-6 text-[#4B5D57]'>{project.desc}</p>

                <p className='mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#0E6B54]'>Référence</p>
                <p className='mt-1 text-sm leading-6 text-[#2E463D]'>{project.role}</p>
                <p className='mt-3 inline-flex max-w-full break-words rounded-2xl border border-[#CFE6DC] bg-[#E6F5EF] px-3 py-2 text-[0.78rem] font-semibold leading-6 text-[#0E6B54] shadow-[0_14px_30px_-24px_rgba(14,107,84,0.45)] sm:rounded-full sm:px-4 sm:text-[0.82rem]'>
                  DOI : {project.doi}
                </p>

                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.tech.map((t) => (
                    <span key={t} className='rounded-full border border-[#E1E9E5] bg-[#F5FAF8] px-3 py-1 text-xs font-medium text-[#2E463D]'>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='mt-16'>
        <Title
          title='Publications en collaboration'
          eyebrow='Collaboration'
          subtitle="Travaux menés avec d'autres équipes scientifiques autour des otolithes, de la discrimination des stocks et de l'écologie des populations."
        />

        <div className='grid gap-4' ref={collaborationsRef}>
          {collaborations.map((item, i) => (
            <article
              key={item.id}
              style={{ animationDelay: `${i * 90}ms` }}
              className={`glass-card elegant-card rounded-[1.45rem] border border-[#E1E9E5] bg-[linear-gradient(180deg,#ffffff_0%,#fbfefd_100%)] p-4 shadow-[0_18px_40px_-34px_rgba(12,80,61,0.35)] sm:p-6 ${collaborationsInView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <div className='flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between'>
                <div className='max-w-4xl'>
                  <h3 className='text-base font-semibold leading-6 text-[#163229]'>{item.title}</h3>
                  <p className='mt-2 text-sm leading-7 text-[#5C7169]'>{item.authors} ({item.year})</p>
                  <p className='mt-2 text-sm font-medium text-[#204C40]'>{item.role}</p>
                </div>
                <p className='inline-flex max-w-full break-words rounded-2xl border border-[#CFE6DC] bg-[#E6F5EF] px-3 py-2 text-[0.78rem] font-semibold leading-6 text-[#0E6B54] shadow-[0_14px_30px_-24px_rgba(14,107,84,0.45)] sm:rounded-full sm:px-4 sm:text-[0.82rem]'>
                  DOI : {item.doi}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
