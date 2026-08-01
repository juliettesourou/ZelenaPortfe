import Title from "./Title";
import { CheckCircle2, UserRound, Target } from "lucide-react";
import { useInView } from "../hooks/useInView";
import portrait from "../assets/img/qui suis-je.jpeg";

const strengths = [
  "Je suis Dr Houeto Madel Floriane, Docteure en Sciences biologiques, spécialisée en écologie évolutive et fonctionnelle, avec un intérêt particulier pour les organismes aquatiques.",

  "Mes recherches portent sur la compréhension des mécanismes qui régissent la vie des espèces aquatiques, leur développement, leur adaptation et leurs interactions avec les changements environnementaux.",

  "Mon expertise associe la recherche scientifique, l'analyse des données, l'écologie appliquée, la biologie des organismes et la conservation de la biodiversité."
];

const goals = [
  "Mettre mes compétences scientifiques au service de projets de recherche en écologie, biodiversité et conservation des milieux naturels.",

  "Contribuer à des études environnementales, des programmes de suivi écologique, des évaluations d'impact environnemental et des actions de conservation de la biodiversité.",

  "Développer des collaborations scientifiques nationales et internationales autour de l'écologie aquatique, de la gestion durable des écosystèmes et de l'analyse des données environnementales."
];

const journey = [
  "Mon parcours universitaire est consacré à l'écologie évolutive et fonctionnelle, une discipline qui étudie les relations entre les organismes, leurs fonctions biologiques, leur évolution et leur environnement.",

  "J'ai développé mes compétences scientifiques au sein du Laboratoire de Recherche en Écologie, Biologie et Physiologie des Organismes, où mes travaux se sont orientés vers l'écologie aquatique et la biologie des poissons.",

  "Mes recherches doctorales portent sur l'utilisation des otolithes comme outils biologiques permettant d'étudier la croissance, la morphologie, la microchimie et la structuration des populations de poissons.",

  "Au cours de mes travaux, j'ai étudié plusieurs espèces provenant de milieux lagunaires, lacustres et marins en utilisant des approches morphométriques, statistiques et écologiques pour mieux comprendre leur dynamique et leur adaptation."
];

const About = () => {
  const [gridRef, gridInView] = useInView();

  return (
    <section className="rounded-[1.4rem] bg-white p-4 shadow-[0_28px_70px_-52px_rgba(12,77,59,0.48)] sm:rounded-[2rem] sm:p-6 md:p-10">
      <div className="section-shell w-full !max-w-none">
        <Title
          title="À propos"
          eyebrow="À propos"
          subtitle="Découvrez mon parcours scientifique, mes domaines d'expertise et mes objectifs en écologie aquatique et en conservation de la biodiversité."
        />

        <div ref={gridRef} className="space-y-6">

          {/* Qui suis-je */}
          <div
            style={{ animationDelay: "0ms" }}
            className={`glass-card elegant-card rounded-[1.35rem] border border-[#E2F0EA] bg-[#F9FCFB] p-4 sm:rounded-[1.75rem] sm:p-8 ${
              gridInView ? "anim-fade-up" : "opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E6F5EF] text-[#0E6B54]">
                <UserRound className="h-5 w-5" />
              </span>

              <h3 className="text-xl font-semibold text-[#163229]">
                Qui suis-je ?
              </h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-[#D7EAE2] bg-white shadow-[0_30px_60px_-40px_rgba(14,107,84,0.42)] sm:min-h-[460px] sm:rounded-[1.75rem] lg:min-h-[520px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F6FBF9] via-transparent to-[#E4F2EC]/50" />
                <img
                  src={portrait}
                  alt="Portrait professionnel de Dr Houeto Madel Floriane"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061C17]/95 via-[#09251E]/78 to-transparent px-4 pb-5 pt-28 text-white sm:px-6 sm:pb-6 sm:pt-32">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#DFF7EF] drop-shadow-sm sm:text-[0.72rem] sm:tracking-[0.3em]">
                    Profil professionnel
                  </p>
                  <p className="mt-2 text-lg font-bold leading-snug drop-shadow-sm sm:text-xl">
                    Dr Houeto Madel Floriane
                  </p>
                  <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-[#F2FBF8] drop-shadow-sm">
                    Spécialiste en écologie évolutive et fonctionnelle, avec
                    une expertise dédiée aux milieux aquatiques et à la
                    biodiversité.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-start pt-3 lg:pt-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#EAF6F1] px-3 py-1 text-xs font-semibold text-[#0E6B54]">
                    Docteure en sciences biologiques
                  </span>
                  <span className="rounded-full bg-[#F1F8F5] px-3 py-1 text-xs font-semibold text-[#31594D]">
                    Recherche appliquée
                  </span>
                </div>

                <div className="space-y-4 text-base leading-8 text-[#4A645B]">
                  {strengths.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Objectifs */}
          <div
            style={{ animationDelay: "130ms" }}
            className={`glass-card elegant-card rounded-[1.35rem] border border-[#E2F0EA] bg-[#F9FCFB] p-4 sm:rounded-[1.75rem] sm:p-8 ${
              gridInView ? "anim-fade-up" : "opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E6F5EF] text-[#0E6B54]">
                <Target className="h-5 w-5" />
              </span>

              <h3 className="text-xl font-semibold text-[#163229]">
                Mes objectifs
              </h3>
            </div>

            <ul className="space-y-5">
              {goals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 text-sm leading-7 text-[#4A645B] md:text-[0.98rem]"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0E6B54]" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Parcours */}
        <div
          style={{ animationDelay: "220ms" }}
          className={`glass-card elegant-card mt-6 rounded-[1.35rem] border border-[#E2F0EA] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf9_100%)] p-4 shadow-[0_20px_45px_-34px_rgba(12,80,61,0.2)] sm:rounded-[1.75rem] sm:p-8 ${
            gridInView ? "anim-fade-up" : "opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-[#163229]">
            Mon parcours scientifique
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {journey.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[#E5F1EC] bg-white/90 p-5 text-sm leading-7 text-[#4A645B] transition duration-300 hover:border-[#CFE6DC] hover:bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
