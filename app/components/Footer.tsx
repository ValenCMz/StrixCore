import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f0a17] py-[70px] text-[rgba(243,239,255,0.7)]">
      <div className="container-x">
        <div className="grid gap-11 border-b border-[var(--line-night)] pb-[50px] md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-[11px]">
              <Image
                src="/images/logo-circulo.png"
                alt="StrixCore"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="h-display text-[27px] text-white">
                Strix<span className="em">Core</span>
              </span>
            </a>
            <p className="mt-4 max-w-[320px] text-[15px]">
              Software y automatizaciones que hacen que los negocios funcionen
              mejor.
            </p>
          </div>
          <div>
            <h5 className="h-display mb-[18px] text-xl text-white">
              Navegación
            </h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#servicios"
                  className="text-[15px] transition-colors hover:text-[var(--violet-2)]"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#trabajos"
                  className="text-[15px] transition-colors hover:text-[var(--violet-2)]"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="#tecnologias"
                  className="text-[15px] transition-colors hover:text-[var(--violet-2)]"
                >
                  Tecnologías
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-[15px] transition-colors hover:text-[var(--violet-2)]"
                >
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="h-display mb-[18px] text-xl text-white">Contacto</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:strixcore1@gmail.com"
                  className="text-[15px] transition-colors hover:text-[var(--violet-2)]"
                >
                  strixcore1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/542494670274?text=Hola%20StrixCore%2C%20quiero%20hacer%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[15px] transition-colors hover:text-[var(--violet-2)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={15}
                    height={15}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[14px] pt-[30px] text-[13px]">
          <span>© 2026 StrixCore. Todos los derechos reservados.</span>
          <span className="flex items-center gap-2">
            <Image
              src="/images/logo-circulo.png"
              alt=""
              width={26}
              height={26}
              className="rounded-full"
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
