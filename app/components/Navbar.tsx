"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container-x flex h-[78px] items-center justify-between">
        <a href="#inicio" className="flex items-center gap-[11px]">
          <Image
            src="/images/logo.png"
            alt="StrixCore"
            width={38}
            height={38}
            className="rounded-full"
          />
          <span className="h-display text-2xl">
            Strix<span className="em">Core</span>
          </span>
        </a>

        <ul className="hidden gap-[34px] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative py-1 text-[15px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                {l.label}
                <span className="absolute bottom-[-2px] left-0 h-[2px] w-0 rounded bg-[var(--grad)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="btn btn-primary px-6 py-3 text-sm"
          >
            Solicitar presupuesto
          </a>
        </div>

        <button
          className="text-[var(--ink)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="h-display border-b border-[var(--line)] py-4 text-2xl"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-4 w-full justify-center"
              >
                Solicitar presupuesto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
