"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const codeLines = [
  {
    parts: [{ t: "// strixcore.ts", c: "c-c" }],
  },
  {
    parts: [
      { t: "const ", c: "c-k" },
      { t: "strix", c: "c-v" },
      { t: " = ", c: "c-q" },
      { t: "{", c: "c-q" },
    ],
  },
  {
    parts: [
      { t: "  ", c: "" },
      { t: "mision", c: "c-p" },
      { t: ": ", c: "c-q" },
      { t: '"resolver problemas reales"', c: "c-s" },
      { t: ",", c: "c-q" },
    ],
  },
  { parts: [{ t: "};", c: "c-q" }] },
  { parts: [] },
  {
    parts: [
      { t: "async ", c: "c-k" },
      { t: "function ", c: "c-k" },
      { t: "construir", c: "c-f" },
      { t: "(", c: "c-q" },
      { t: "idea", c: "c-v" },
      { t: ") {", c: "c-q" },
    ],
  },
  {
    parts: [
      { t: "  const ", c: "c-k" },
      { t: "producto", c: "c-v" },
      { t: " = ", c: "c-q" },
      { t: "await ", c: "c-k" },
      { t: "diseniar", c: "c-f" },
      { t: "(", c: "c-q" },
      { t: "idea", c: "c-v" },
      { t: ");", c: "c-q" },
    ],
  },
  {
    parts: [
      { t: "  return ", c: "c-k" },
      { t: "escalar", c: "c-f" },
      { t: "(", c: "c-q" },
      { t: "producto", c: "c-v" },
      { t: ");", c: "c-q" },
    ],
  },
  { parts: [{ t: "}", c: "c-q" }] },
  { parts: [] },
  {
    parts: [
      { t: "while ", c: "c-k" },
      { t: "(", c: "c-q" },
      { t: "problemas", c: "c-v" },
      { t: ".", c: "c-q" },
      { t: "length", c: "c-p" },
      { t: ") {", c: "c-q" },
    ],
  },
  {
    parts: [
      { t: "  ", c: "" },
      { t: "automatizamos", c: "c-f" },
      { t: "(", c: "c-q" },
      { t: "problemas", c: "c-v" },
      { t: ".", c: "c-q" },
      { t: "shift", c: "c-f" },
      { t: "());", c: "c-q" },
    ],
  },
  { parts: [{ t: "}", c: "c-q" }] },
  { parts: [] },
  {
    parts: [
      { t: "strix", c: "c-v" },
      { t: ".", c: "c-q" },
      { t: "lanzar", c: "c-f" },
      { t: "(); ", c: "c-q" },
      { t: "// listo para el deploy", c: "c-c" },
    ],
  },
];

export default function Hero() {
  const [lineCount, setLineCount] = useState(0);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setLineCount(i);
      if (i >= codeLines.length) clearInterval(timer);
    }, 220);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      id="inicio"
      className="relative overflow-hidden pb-[100px] pt-[160px]"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(147,66,255,0.14),transparent_62%)]" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-12%] h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(164,100,246,0.12),transparent_60%)]" />

      <div className="container-x grid items-center gap-[60px] md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal delay={100}>
            <h1 className="h-display my-[26px] text-[clamp(2.9rem,6.5vw,5.4rem)]">
              Transformamos ideas en{" "}
              <span className="em">productos digitales</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-[480px] text-xl text-[var(--muted)]">
              Creamos ecosistemas digitales de alto rendimiento que escalan tu
              negocio mediante código limpio y procesos automatizados.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contacto" className="btn btn-primary">
                Contactanos <span className="arr">→</span>
              </a>
              <a href="#trabajos" className="btn btn-ghost">
                Ver nuestros trabajos
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="editor">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-[18px] py-[14px]">
              <div className="flex gap-[7px]">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="flex-1 text-center font-mono text-xs text-[var(--muted-2)]">
                ◉ strixcore.ts
              </span>
            </div>

            <div className="flex min-h-[350px] px-0 py-[22px] font-mono text-[13.5px] leading-[1.75]">
              <div className="w-[52px] shrink-0 select-none pr-4 text-right text-[#443c4f]">
                {codeLines.map((_, idx) => (
                  <div key={idx} className="min-h-[1.75em]">
                    {idx < lineCount && codeLines[idx].parts.length > 0
                      ? idx + 1
                      : ""}
                  </div>
                ))}
              </div>
              <div ref={codeRef} className="flex-1 overflow-x-auto pr-5">
                {codeLines.slice(0, lineCount).map((line, idx) => (
                  <div key={idx} className="min-h-[1.75em] whitespace-pre">
                    {line.parts.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.parts.map((p, j) => (
                        <span key={j} className={p.c}>
                          {p.t}
                        </span>
                      ))
                    )}
                  </div>
                ))}
                {lineCount >= codeLines.length && (
                  <div>
                    <span className="caret" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-white/10 px-[18px] py-[10px] font-mono text-[11px] text-[var(--muted-2)]">
              <span className="text-[#8ce0a6]">● main</span>
              <span>TypeScript</span>
              <span>UTF-8</span>
              <span>Ln 1, Col 1</span>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
