import {
  MonitorSmartphone,
  ShoppingCart,
  Boxes,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Presencia Digital",
    desc: "Diseño moderno y optimizado para que tu marca se vea profesional y convierta visitas en clientes.",
    tags: ["Landing pages", "Webs institucionales", "Rediseño"],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    desc: "Tiendas online con pagos, integraciones y automatización de ventas para que vendas 24/7.",
    tags: ["Tiendas online", "Pagos", "Automatización"],
  },
  {
    icon: Boxes,
    title: "Sistemas de Gestión",
    desc: "Turnos, clientes, personal y stock. Soluciones a medida que ordenan el día a día de tu negocio.",
    tags: ["Turnos", "Clientes", "Stock"],
  },
  {
    icon: Zap,
    title: "Automatización",
    desc: "WhatsApp, emails, Google Sheets y procesos automáticos que te ahorran horas de trabajo manual.",
    tags: ["WhatsApp", "Emails", "n8n"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-x">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Nuestros servicios</div>
            <h2 className="h-display mt-[18px] text-[clamp(2.4rem,5.5vw,4.2rem)]">
              Soluciones completas para <span className="em">tu negocio</span>.
            </h2>
            <p className="sub">
              Ofrecemos soluciones digitales completas para llevar tu negocio al
              siguiente nivel.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-[26px] md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="service-card rounded-3xl border border-[var(--line)] bg-white p-10">
                <div className="before:pointer-events-none before:absolute before:right-[-40px] before:top-[-40px] before:h-[140px] before:w-[140px] before:rounded-full before:bg-[radial-gradient(circle,rgba(147,66,255,0.12),transparent_70%)]">
                  <div className="h-display text-lg text-[var(--violet)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="my-[22px] grid h-[58px] w-[58px] place-items-center rounded-2xl bg-[var(--lavender-soft)] text-[var(--violet)]">
                    <s.icon size={28} strokeWidth={1.7} />
                  </div>
                  <h3 className="h-display mb-3 text-[1.8rem]">{s.title}</h3>
                  <p className="text-[var(--muted)]">{s.desc}</p>
                  <div className="mt-[22px] flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--lavender-soft)] px-[13px] py-[6px] text-xs font-semibold text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
