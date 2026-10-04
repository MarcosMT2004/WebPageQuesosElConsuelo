"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "La Empresa", href: "/empresa" },
  { label: "Nuestros Quesos", href: "/quesos" },
  { label: "Preguntas Frecuentes", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-verde-hondo)" }}>
      {/* FEADER */}
      <div
        className="px-6 py-8 flex justify-center"
        style={{ borderTop: "1px solid rgba(201,162,74,0.12)" }}
      >
        <div
          className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-2xl p-6"
          style={{ background: "rgba(243,242,238,0.05)", border: "1px solid rgba(243,242,238,0.08)" }}
        >
          <div className="flex-shrink-0 relative" style={{ width: 200, height: 100 }}>
            <Image
              src="/images/placa-feader.jpg"
              alt="Cofinanciado por el Fondo Europeo Agrícola de Desarrollo Rural — Unión Europea. Expediente AA-2018-45-000-00084. Mejoras en fábrica de queso. S.A.T. Cañada Real Soriana."
              fill
              className="object-contain object-left"
              sizes="200px"
            />
          </div>
          <div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(243,242,238,0.72)", fontFamily: "var(--font-body)" }}
            >
              Operación cofinanciada por el{" "}
              <span style={{ color: "rgba(243,242,238,0.88)" }}>
                Fondo Europeo Agrícola de Desarrollo Rural
              </span>{" "}
              (FEADER). Europa invierte en las zonas rurales.
              <br />
              Expediente AA-2018-45-000-00084 · Mejoras en fábrica de queso.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Link href="/" aria-label="Inicio">
              <Image
                src="/images/logo.png"
                alt="Cañada Real Soriana - Quesos El Consuelo"
                width={110}
                height={44}
                className="h-10 w-auto object-contain opacity-90"
              />
            </Link>

            <nav className="flex items-center gap-6" aria-label="Navegación del footer">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(243,242,238,0.55)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-oro)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.55)")}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href="https://www.instagram.com/quesoselconsuelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-150"
              style={{ color: "rgba(243,242,238,0.55)", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}
              aria-label="Síguenos en Instagram"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-oro)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.55)")}
            >
              <Camera size={18} />
              @quesoselconsuelo
            </a>
          </div>

          <Separator style={{ background: "rgba(201,162,74,0.15)" }} />

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className="text-xs"
              style={{ color: "rgba(243,242,238,0.72)", fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} S.A.T. Cañada Real Soriana · Madridejos, Toledo
            </p>
            <div className="flex items-center gap-4 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              <Link
                href="/aviso-legal"
                style={{ color: "rgba(243,242,238,0.72)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.72)")}
              >
                Aviso Legal
              </Link>
              <Link
                href="/privacidad"
                style={{ color: "rgba(243,242,238,0.72)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.72)")}
              >
                Privacidad
              </Link>
            </div>
            <p
              className="text-xs text-center"
              style={{ color: "rgba(243,242,238,0.72)", fontFamily: "var(--font-body)" }}
            >
              Built with Claude Web Builder by{" "}
              <a
                href="https://tododeia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150"
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,242,238,0.72)")}
              >
                Tododeia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
