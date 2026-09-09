"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeqywwv";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  return (
    <section id="contacto" className="section bg-[var(--night)] text-[#f3efff]">
      <div className="container-x">
        <div className="grid items-start gap-[60px] md:grid-cols-2">
          <Reveal>
            <div>
              <div className="eyebrow" style={{ color: "var(--violet-2)" }}>
                Contacto
              </div>
              <h2
                className="h-display mb-5 mt-[18px] text-white"
                style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}
              >
                Hablemos de tu <span className="em">próximo proyecto</span>.
              </h2>
              <p className="max-w-[420px] text-[rgba(243,239,255,0.65)]">
                Contanos tu idea y te respondemos con una propuesta clara. Sin
                compromiso.
              </p>
              <div className="mt-10 flex flex-col gap-[18px]">
                <a
                  href="https://wa.me/542494670274?text=Hola%21%20Quiero%20solicitar%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[14px] font-medium text-[rgba(243,239,255,0.85)] transition-colors hover:text-white"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25d3661a] text-[#25d366]">
                    <svg
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </span>
                  Contactanos por Whatsapp
                </a>
                <a
                  href="mailto:strixcore1@gmail.com"
                  className="flex items-center gap-[14px] font-medium text-[rgba(243,239,255,0.85)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[rgba(147,66,255,0.16)] text-[var(--violet-2)]">
                    <Mail size={20} strokeWidth={1.7} />
                  </span>
                  strixcore1@gmail.com
                </a>
                <span className="flex items-center gap-[14px] font-medium text-[rgba(243,239,255,0.85)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[rgba(147,66,255,0.16)] text-[var(--violet-2)]">
                    <MapPin size={20} strokeWidth={1.7} />
                  </span>
                  Tandil, Argentina 🇦🇷
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[28px] border border-[var(--line-night)] bg-[var(--night-2)] p-11">
              <form
                className="flex flex-col gap-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  setStatus("loading");
                  try {
                    const res = await fetch(FORMSPREE_ENDPOINT, {
                      method: "POST",
                      body: data,
                      headers: { Accept: "application/json" },
                    });
                    if (res.ok) {
                      setStatus("sent");
                      form.reset();
                    } else {
                      setStatus("error");
                    }
                  } catch {
                    setStatus("error");
                  }
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[rgba(243,239,255,0.5)]"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-[14px] border border-[var(--line-night)] bg-white/[0.04] px-[18px] py-[15px] text-white outline-none transition-colors focus:border-[var(--violet-2)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[rgba(243,239,255,0.5)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tucorreo@empresa.com"
                    className="w-full rounded-[14px] border border-[var(--line-night)] bg-white/[0.04] px-[18px] py-[15px] text-white outline-none transition-colors focus:border-[var(--violet-2)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="msg"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[rgba(243,239,255,0.5)]"
                  >
                    ¿Qué querés construir?
                  </label>
                  <textarea
                    id="msg"
                    name="message"
                    rows={5}
                    required
                    placeholder="Contanos sobre tu proyecto..."
                    className="w-full resize-y rounded-[14px] border border-[var(--line-night)] bg-white/[0.04] px-[18px] py-[15px] text-white outline-none transition-colors focus:border-[var(--violet-2)]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary self-start disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Enviando..."
                    : status === "sent"
                      ? "¡Mensaje enviado!"
                      : "Enviar mensaje"}{" "}
                  <span className="arr">→</span>
                </button>
                {status === "sent" && (
                  <p className="text-sm text-[#8ce0a6]">
                    Gracias por escribirnos. Te respondemos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-[#ff8c8c]">
                    Hubo un error. Probá de nuevo o escribinos directo a
                    strixcore1@gmail.com.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
