import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import Reveal from "./Reveal";

const team = [
  {
    name: "Luca Lanfranqui",
    role: "Desarrollador Full Stack",
    image: "/images/luca.png",
    imgClass: "member-img object-cover object-[center_10%] ",
    linkedin: "https://www.linkedin.com/in/luca-lanfranqui-06b84833a/",
    github: "https://github.com/LucaLanfranqui",
  },
  {
    name: "Valentín Caminos Martínez",
    role: "Desarrollador Full Stack",
    image: "/images/valen.png",
    imgClass: "member-img object-cover object-[center_18%]",
    linkedin: "https://www.linkedin.com/in/valentin-caminos-martinez-125384236/",
    github: "https://github.com/ValenCMz",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container-x">
        <div className="grid items-center gap-[60px] md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <div className="eyebrow">Quiénes somos</div>
              <h2
                className="h-display mt-[18px]"
                style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}
              >
                Un equipo pequeño con{" "}
                <span className="em">grandes resultados</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-[18px]">
              <p className="mb-[18px] text-[var(--muted)]">
                <strong className="font-bold text-[var(--ink)]">
                  StrixCore
                </strong>{" "}
                nace de una idea simple: el software debería resolver problemas,
                no crearlos. Creamos sistemas y automatizaciones que hacen que
                los negocios funcionen mejor.
              </p>
              <p className="text-[var(--muted)]">
                Nos enfocamos en resolver problemas reales — desde sistemas de
                gestión hasta integraciones — y en aportar soluciones que
                impulsen el crecimiento de cada cliente.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="member text-center">
                <div className="relative mx-auto mb-5 h-[min(300px,100%)] aspect-square w-[min(300px,100%)] overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(147,66,255,0.28)] to-transparent"
                    style={{ height: "45%", top: "55%" }}
                  />
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="300px"
                    className={m.imgClass}
                  />
                  <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-[13px] py-[5px] text-[11px] font-bold text-[var(--violet-deep)] backdrop-blur-md">
                    Full Stack
                  </span>
                </div>
                <h4 className="h-display text-2xl">{m.name}</h4>
                <div className="text-sm font-semibold text-[var(--violet)]">
                  {m.role}
                </div>
                <div className="mt-3 flex justify-center gap-[10px]">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--violet)] hover:text-[var(--violet)]"
                  >
                    <Linkedin size={16} strokeWidth={1.7} />
                  </a>
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--violet)] hover:text-[var(--violet)]"
                  >
                    <Github size={16} strokeWidth={1.7} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
