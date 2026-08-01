import { ArrowRight, Mail, Globe2, GraduationCap } from "lucide-react";
import imaa from "../assets/img/profill.jpeg";
import background from "../assets/img/ecosysteme.jpg";

const socials = [
  {
    icon: Globe2,
    href: "https://www.linkedin.com/in/houeto-floriane-224b12374",
    label: "LinkedIn",
  },
  {
    icon: GraduationCap,
    href: "https://scholar.google.com/citations?user=4QMWA4oAAAAJ&hl=fr",
    label: "Scholar",
  },
  {
    icon: Mail,
    href: "mailto:houetoflori@gmail.com",
    label: "Email",
  },
];

const Home = () => {
  return (
    <section className="relative overflow-hidden rounded-[1.4rem] border border-[#DDEEE8] bg-white shadow-[0_30px_80px_-48px_rgba(13,74,58,0.45)] sm:rounded-[2rem]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EFF8F4] to-transparent"></div>

      <div className="grid items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-14">

        {/* Texte */}
        <div className="relative z-10">
          <div className="flex items-start gap-4">

            <div className="hidden flex-col gap-3 pt-12 md:flex">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D8EBE3] bg-white text-[#0E6B54] shadow-sm transition hover:-translate-y-1 hover:border-[#0E6B54]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="max-w-xl">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D5F50] sm:text-sm sm:tracking-[0.25em]">
                Docteure en Sciences Biologiques
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#11372D] sm:text-4xl md:text-6xl">
                Dr Madel Floriane
                <br />
                <span className="text-[#0E6B54]">Adjibayo</span>
              </h1>

              <p className="mt-5 text-lg font-semibold leading-relaxed text-[#1E6C58] sm:mt-6 sm:text-xl">
                Écologie évolutive et fonctionnelle • Écologie aquatique •
                Biologie des organismes
              </p>

              <p className="mt-5 text-base leading-8 text-[#4C675E] sm:mt-6 sm:text-lg">
                Docteure en sciences biologiques, spécialisée en écologie
                évolutive et fonctionnelle. Mes recherches portent sur les
                organismes aquatiques, leurs interactions avec leur
                environnement et leur capacité d’adaptation aux changements
                environnementaux, afin de contribuer à la conservation de la
                biodiversité et à la gestion durable des écosystèmes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E6B54] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B5643] sm:px-7"
                >
                  Découvrir mon parcours
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D7E8E0] bg-white px-5 py-3 text-sm font-semibold text-[#19483C] transition hover:border-[#0E6B54] hover:text-[#0E6B54] sm:px-7"
                >
                  <Mail className="h-4 w-4" />
                  Me contacter
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#EAF6F1] p-4 pt-8 sm:min-h-[420px] sm:p-0 md:min-h-[550px] md:rounded-[2rem]">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-[#0E6B54]/20"></div>

          <div className="absolute -left-24 top-8 h-[72%] w-[84%] rounded-r-[12rem] rounded-l-[8rem] border-2 border-[#139173]/30 bg-white/50 backdrop-blur-sm sm:h-[82%] sm:w-[72%]"></div>

          <div className="relative z-10 mx-auto w-[78%] max-w-[300px] sm:absolute sm:bottom-0 sm:right-6 sm:w-[62%] sm:max-w-[360px] md:right-8 md:w-[72%] md:max-w-[420px]">
            <img
              src={imaa}
              alt="Dr Madel Floriane Adjibayo"
              className="w-full object-contain object-bottom"
            />
          </div>

          <div className="relative z-20 mt-4 max-w-none rounded-2xl border border-white/90 bg-white/95 p-4 shadow-[0_22px_45px_-28px_rgba(10,50,40,0.55)] sm:absolute sm:bottom-5 sm:left-5 sm:mt-0 sm:max-w-[230px] sm:p-5 md:bottom-6 md:left-6">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B5F4A] sm:tracking-[0.25em]">
              Axes de recherche
            </p>

            <p className="mt-3 text-sm font-medium leading-6 text-[#1F4037]">
              Biodiversité • Écologie aquatique • Écologie fonctionnelle •
              Conservation des écosystèmes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
