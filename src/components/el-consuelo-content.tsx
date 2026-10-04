"use client";

import { WA_URL, TEL_HREF } from "@/lib/contacto";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import CabeceraQueso from "@/components/cabecera-queso";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const variedades = [
  {
    nombre: "Fresco",
    edad: "Menos de 2 meses",
    desc: "Textura suave y húmeda. Sabor láctico limpio, con el recuerdo directo de la leche de oveja. Para quien quiere el queso manchego en su estado más natural.",
    formato: "1 kg",
  },
  {
    nombre: "Semicurado",
    edad: "4–6 meses",
    desc: "Pasta elástica de color marfil claro, aromas de mantequilla y nuez. Entra solo o con un vino joven manchego.",
    formato: "1 kg · 2,5 kg",
  },
  {
    nombre: "Curado",
    edad: "6–9 meses",
    desc: "Pasta más compacta y de tono más amarillo. Los sabores se concentran y aparecen los matices de frutos secos. La corteza natural ya ha tomado su carácter.",
    formato: "1 kg · 2,5 kg",
  },
  {
    nombre: "En aceite",
    edad: "Curado · en aceite de oliva",
    desc: "El curado conservado en aceite de oliva virgen extra. Profundidad añadida. Textura ligeramente untuosa. Un clásico de la despensa manchega.",
    formato: "1 kg",
  },
];

export default function ElConsueloContent() {
  const varRef = useRef(null);
  const caracRef = useRef(null);
  const ctaRef = useRef(null);

  const varInView = useInView(varRef, { once: true, margin: "-60px" });
  const caracInView = useInView(caracRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const waMessage = encodeURIComponent(
    "Hola, me interesa el queso El Consuelo. ¿Podríais informarme sobre variedades disponibles y precios?"
  );

  return (
    <>
      <CabeceraQueso
        slug="el-consuelo"
        alt="Tres ruedas de queso manchego El Consuelo en sus variedades semicurado, curado y añejo"
        intro="El queso que da nombre a la casa. Fresco, semicurado, curado o en aceite. Cuatro formas de disfrutar la leche de nuestras propias ovejas manchegas."
      />

      {/* Variedades */}
      <section
        ref={varRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "var(--color-marmol)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--color-verde)",
                fontWeight: 400,
              }}
            >
              Cuatro momentos del mismo origen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {variedades.map((v, i) => (
              <motion.div
                key={v.nombre}
                initial={{ transform: "translateY(28px)", opacity: 0 }}
                animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
                className="p-8"
                style={{ background: "var(--color-azulejo)", border: "1px solid rgba(201,162,74,0.2)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.7rem",
                      color: "var(--color-verde)",
                      fontWeight: 400,
                    }}
                  >
                    {v.nombre}
                  </h3>
                  <span
                    className="text-xs px-2.5 py-1 mt-1"
                    style={{
                      background: "rgba(201,162,74,0.12)",
                      color: "var(--color-cordel)",
                      fontFamily: "var(--font-body)",
                      border: "1px solid rgba(201,162,74,0.25)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.formato}
                  </span>
                </div>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--color-oro-tinta)", fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}
                >
                  {v.edad}
                </p>
                <p
                  style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.75 }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section ref={caracRef} className="py-20 px-6" style={{ background: "var(--color-verde)" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {[
            { label: "Origen", text: "Leche cruda entera de oveja manchega. Propia ganadería en Madridejos, Toledo." },
            { label: "Elaboración", text: "Cuajo animal, fermentos lácticos. Maduración en bodega a 75-85% de humedad." },
            { label: "DOP", text: "Placa de caseína numerada. Lote analizado y autorizado por el Consejo Regulador." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ transform: "translateY(20px)", opacity: 0 }}
              animate={caracInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center"
            >
              <h3
                className="mb-3"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--color-oro)", fontWeight: 500 }}
              >
                {item.label}
              </h3>
              <p
                style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "rgba(243,242,238,0.7)", lineHeight: 1.7 }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "var(--color-azulejo)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={ctaInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--color-verde)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              Pídelo por WhatsApp
            </h2>
            <p
              className="mb-8"
              style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              Contacta con nosotros por WhatsApp. Te informamos sobre variedades disponibles, tamaños y cómo hacértelo llegar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                style={{ background: "var(--color-oro)", color: "var(--color-verde-hondo)", fontFamily: "var(--font-body)" }}
                className="hover:opacity-90 transition-opacity"
              >
                <a
                  href={`${WA_URL}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Pedir por WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                style={{ borderColor: "rgba(31,59,45,0.3)", color: "var(--color-verde)", fontFamily: "var(--font-body)" }}
                className="hover:bg-black/5 transition-colors"
              >
                <a href={TEL_HREF}>Llamar: +34 667 638 293</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ transform: "translateX(32px)", opacity: 0 }}
            animate={ctaInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <div
              className="p-8"
              style={{ background: "var(--color-marmol)", border: "1px solid rgba(201,162,74,0.2)" }}
            >
              <h3 className="mb-2 font-display text-[1.5rem] leading-tight" style={{ color: "var(--color-verde)" }}>
                También podrías probar
              </h3>
              {[
                { nombre: "El Cordel DOP", desc: "El más premiado de la casa", href: "/quesos/el-cordel" },
                { nombre: "El Redil", desc: "La gama más versátil", href: "/quesos/el-redil" },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="flex items-center justify-between py-4 group"
                  style={{
                    borderBottom: "1px solid rgba(201,162,74,0.15)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-verde)", fontWeight: 500 }}
                    >
                      {q.nombre}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--color-gris)" }}
                    >
                      {q.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    style={{ color: "var(--color-oro-tinta)", transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                    className="group-hover:[transform:translate(3px,-3px)]"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
