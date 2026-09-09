import Image from "next/image";
import Reveal from "./Reveal";

const lane1 = [
  { slug: "react", color: "61DAFB", name: "React" },
  { slug: "nextdotjs", color: "000000", name: "Next.js" },
  { slug: "typescript", color: "3178C6", name: "TypeScript" },
  { slug: "angular", color: "DD0031", name: "Angular" },
  { slug: "laravel", color: "FF2D20", name: "Laravel" },
  { slug: "springboot", color: "6DB33F", name: "Spring Boot" },
  { slug: "openjdk", color: "F89820", name: "Java" },
];

const lane2 = [
  { slug: "php", color: "777BB4", name: "PHP" },
  { slug: "javascript", color: "F7DF1E", name: "JavaScript" },
  { slug: "tailwindcss", color: "06B6D4", name: "Tailwind CSS" },
  { slug: "docker", color: "2496ED", name: "Docker" },
  { slug: "vite", color: "646CFF", name: "Vite" },
  { slug: "n8n", color: "EA4B71", name: "n8n" },
  { slug: "figma", color: "F24E1E", name: "Figma" },
];

function TechChip({ slug, color, name }: { slug: string; color: string; name: string }) {
  return (
    <div className="tech-item flex shrink-0 items-center gap-[14px] rounded-2xl border border-[var(--line)] bg-white px-[30px] py-5 transition-transform">
      <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[10px] border border-[var(--line)] bg-white">
        <Image
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt={name}
          width={22}
          height={22}
          unoptimized
        />
      </span>
      <span className="text-[17px] font-bold text-[var(--ink)]">{name}</span>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <div className="container-x">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Tecnologías</div>
            <h2 className="h-display mt-[18px] text-[clamp(2.4rem,5.5vw,4.2rem)]">
              Las herramientas que <span className="em">usamos</span>.
            </h2>
            <p className="sub">
              Trabajamos con las herramientas más modernas para crear
              soluciones robustas.
            </p>
          </div>
        </Reveal>

        <div className="overflow-hidden">
          <div
            className="flex w-max gap-0"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...lane1, ...lane1].map((t, i) => (
              <div key={i} className="mx-[13px]">
                <TechChip {...t} />
              </div>
            ))}
          </div>
          <div
            className="mt-[18px] flex w-max gap-0"
            style={{ animation: "marquee 30s linear infinite reverse" }}
          >
            {[...lane2, ...lane2].map((t, i) => (
              <div key={i} className="mx-[13px]">
                <TechChip {...t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
