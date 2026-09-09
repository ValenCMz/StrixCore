import Image from "next/image";
import Reveal from "./Reveal";

const projects = [
  {
    idx: "Proyecto 01 — Agro",
    title: "Sistema de Gestión de Stock Animal",
    desc: "Sistema de gestión para control de stock animal y reportes médicos, enfocado en evitar olvidos de carga de datos.",
    tags: ["Spring Boot", "Java", "Next.js", "PostgreSQL"],
    image: "/images/proyecto-stock.png",
    cat: "Sistema de gestión",
    demo: "https://www.youtube.com/watch?v=rYUH2OcRMlk",
    flip: false,
  },
  {
    idx: "Proyecto 02 — Legal",
    title: "Estudio CGA · Gestión de Casos y Documentos",
    desc: "Desarrollo de una web para un estudio jurídico y un sistema interno para la gestión de casos, clientes y documentos, con acceso diferenciado por roles.",
    tags: ["Spring Boot", "Java", "Next.js", "PostgreSQL"],
    image: "/images/proyecto-cga.png",
    cat: "Web y sistema de gestión",
    demo: "https://www.youtube.com/watch?v=zxMMSZWPzDI",
    flip: true,
  },
];

export default function Projects() {
  return (
    <section id="trabajos" className="section bg-[var(--night)] text-[#f3efff]">
      <div className="container-x">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow" style={{ color: "var(--violet-2)" }}>
              Nuestros trabajos
            </div>
            <h2 className="h-display mt-[18px] text-[clamp(2.4rem,5.5vw,4.2rem)] text-white">
              Proyectos que <span className="em">hablan por nosotros</span>.
            </h2>
            <p className="sub" style={{ color: "rgba(243,239,255,0.6)" }}>
              Casos reales donde convertimos problemas en soluciones que
              funcionan.
            </p>
          </div>
        </Reveal>

        {projects.map((p) => (
          <div
            key={p.idx}
            className="project mb-[90px] grid items-center gap-[56px] last:mb-0 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className={p.flip ? "order-2" : ""}>
              <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={800}
                  className="project-img h-auto w-full object-cover"
                />
                <span className="absolute left-5 top-5 rounded-full bg-[rgba(22,16,31,0.72)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {p.cat}
                </span>
              </div>
            </div>
            <div>
              <div className="h-display text-base text-[var(--violet-2)]">
                {p.idx}
              </div>
              <h3 className="h-display my-4 text-[clamp(1.8rem,3.4vw,2.7rem)] text-white">
                {p.title}
              </h3>
              <p className="mb-[26px] text-[rgba(243,239,255,0.65)]">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--line-night)] px-[14px] py-[6px] text-xs font-semibold text-[rgba(243,239,255,0.8)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-[10px] border-b-2 border-[var(--violet-2)] pb-1 text-[15px] font-semibold text-white transition-all duration-300 hover:gap-4"
              >
                Ver demo <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
