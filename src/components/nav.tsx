"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const ease = [0.23, 1, 0.32, 1] as const;

const navLinks = [
  { label: "La Empresa", href: "/empresa" },
  { label: "La Elaboración", href: "/elaboracion" },
  { label: "El Manchego", href: "/queso" },
];

const quesosLines = [
  { label: "El Consuelo", href: "/quesos/el-consuelo", desc: "La línea insignia" },
  { label: "El Cordel", href: "/quesos/el-cordel", desc: "DOP · El más premiado", dop: true },
  { label: "El Redil", href: "/quesos/el-redil", desc: "Para el día a día" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [quesosOpen, setQuesosOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome;
  const linkColor = showSolid ? "var(--color-verde)" : "var(--color-marmol)";
  // El oro solo se lee sobre verde; sobre la barra clara va el oro oscuro.
  const accent = showSolid ? "var(--color-oro-tinta)" : "var(--color-oro)";
  const isQuesosActive = pathname.startsWith("/quesos");

  return (
    <>
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-verde focus:text-marmol"
    >
      Saltar al contenido
    </a>
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ transform: "translateY(-100%)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      style={{
        background: showSolid ? "rgba(243,242,238, 0.96)" : "transparent",
        backdropFilter: showSolid ? "blur(8px)" : "none",
        borderBottom: showSolid ? "1px solid rgba(201,162,74, 0.2)" : "none",
        transition: "background 300ms, border-color 300ms, backdrop-filter 300ms",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Inicio">
          <Image
            src="/images/logo.png"
            alt="Cañada Real Soriana - Quesos El Consuelo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((l) => {
            const isActive = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm"
                style={{
                  color: isActive ? accent : linkColor,
                  fontFamily: "var(--font-body)",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? accent : linkColor)
                }
              >
                {l.label}
              </Link>
            );
          })}

          {/* Nuestros Quesos dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setQuesosOpen(true)}
            onMouseLeave={() => setQuesosOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm"
              style={{
                color: quesosOpen || isQuesosActive ? accent : linkColor,
                fontFamily: "var(--font-body)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "color 150ms",
              }}
              aria-expanded={quesosOpen}
              aria-haspopup="true"
            >
              Nuestros Quesos
              <motion.span
                animate={{ transform: quesosOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                transition={{ duration: 0.2, ease }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {quesosOpen && (
                <motion.div
                  initial={{ transform: "translateY(8px)", opacity: 0 }}
                  animate={{ transform: "translateY(0px)", opacity: 1 }}
                  exit={{ transform: "translateY(8px)", opacity: 0 }}
                  transition={{ duration: 0.18, ease }}
                  className="absolute top-full left-0 pt-3"
                  style={{ minWidth: "220px" }}
                >
                  <div
                    style={{
                      background: "var(--color-marmol)",
                      border: "1px solid rgba(201,162,74,0.25)",
                      boxShadow: "0 8px 32px rgba(31,59,45,0.12)",
                    }}
                  >
                    {quesosLines.map((q, i) => (
                      <Link
                        key={q.href}
                        href={q.href}
                        className="block px-5 py-3.5"
                        style={{
                          borderBottom: i < quesosLines.length - 1 ? "1px solid rgba(201,162,74,0.12)" : "none",
                          transition: "background 150ms",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(201,162,74,0.07)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        <span
                          className="flex items-center gap-2"
                          style={{ color: "var(--color-verde)", fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 500 }}
                        >
                          {q.label}
                          {q.dop && (
                            <span
                              className="px-1.5 py-px"
                              style={{
                                background: "var(--color-oro)",
                                color: "var(--color-verde-hondo)",
                                fontSize: "0.55rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontFamily: "var(--font-body)",
                              }}
                            >
                              DOP
                            </span>
                          )}
                        </span>
                        <span
                          className="block text-xs mt-0.5"
                          style={{ color: "var(--color-gris)", fontFamily: "var(--font-body)" }}
                        >
                          {q.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            asChild
            size="sm"
            style={{ background: "var(--color-oro)", color: "var(--color-verde-hondo)" }}
            className="hover:opacity-90 transition-opacity"
          >
            <Link href="/contacto">Contacto</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 rounded-md"
              aria-label="Abrir menú"
              style={{ color: showSolid ? "var(--color-verde)" : "var(--color-marmol)" }}
            >
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            style={{ background: "var(--color-marmol)", borderLeft: "1px solid rgba(201,162,74,0.2)" }}
          >
            <div className="flex flex-col gap-6 pt-12">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-verde)", fontWeight: 500, transition: "color 150ms" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-oro-tinta)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-verde)")}
                >
                  {l.label}
                </Link>
              ))}

              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--color-gris)", fontFamily: "var(--font-body)" }}
                >
                  Nuestros Quesos
                </p>
                {quesosLines.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    onClick={() => setOpen(false)}
                    className="block text-xl py-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-verde)", fontWeight: 500, transition: "color 150ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-oro-tinta)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-verde)")}
                  >
                    {q.label}
                    {q.dop && (
                      <span
                        className="ml-2 px-1.5 py-px text-xs"
                        style={{ background: "var(--color-oro)", color: "var(--color-verde-hondo)", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        DOP
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <Button
                asChild
                style={{ background: "var(--color-oro)", color: "var(--color-verde-hondo)", width: "fit-content" }}
              >
                <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
    {/* Destino del enlace de salto: primer punto del contenido tras la cabecera fija */}
    <div id="contenido" tabIndex={-1} className="outline-none" />
    </>
  );
}
