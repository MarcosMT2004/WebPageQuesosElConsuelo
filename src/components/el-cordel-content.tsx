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
    nombre: "Semicurado",
    edad: "4–6 meses",
    desc: "El punto de entrada a El Cordel DOP. Pasta elástica, sabor limpio con notas de mantequilla y hierba. La acidez de la leche cruda todavía presente.",
    formato: "1 kg · 2,5 kg",
  },
  {
    nombre: "Curado",
    edad: "6–9 meses",
    desc: "El más equilibrado. Textura más firme, aroma complejo de frutos secos y bodega. La corteza natural ya ha tomado color y carácter.",
    formato: "1 kg · 2,5 kg",
  },
  {
    nombre: "Añejo",
    edad: "9–12 meses",
    desc: "La expresión máxima de El Cordel. Pasta seca, cristalizada. Retrogusto largo de frutos secos tostados. Corteza oscura untada en aceite. Para los que buscan intensidad.",
    formato: "1 kg · 2,5 kg",
  },
];

export default function ElCordelContent() {
  const awardRef = useRef(null);
  const varRef = useRef(null);
  const ctaRef = useRef(null);

  const awardInView = useInView(awardRef, { once: true, margin: "-60px" });
  const varInView = useInView(varRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const waMessage = encodeURIComponent(
    "Hola, me interesa el queso El Cordel DOP. ¿Podríais informarme sobre variedades disponibles y precios?"
  );

  return (
    <>
      <CabeceraQueso
        slug="el-cordel"
        alt="Ruedas de queso manchego El Cordel con Denominación de Origen Protegida sobre tabla de madera"
        intro="Denominación de Origen Protegida. Corteza natural, pasta firme, retrogusto que no se olvida. El queso más premiado de la casa."
        sello="DOP Manchego"
      />

      {/* Award */}
      <section
        ref={awardRef}
        className="py-20 px-6"
        style={{ background: "var(--color-verde)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={awardInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "var(--color-marmol)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Medalla de Plata · World Cheese Awards 2016
            </h2>
            <p
              className="mt-4"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(243,242,238,0.7)", lineHeight: 1.7 }}
            >
              En los World Cheese Awards 2016, El Cordel recibió la Medalla de Plata. Una validación de lo que ya sabían en Madridejos: que la combinación de leche cruda propia y tiempo de maduración produce algo difícil de igualar.
            </p>
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={awardInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="p-8 text-center"
            style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.3)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                color: "var(--color-oro)",
                lineHeight: 1,
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Plata
            </p>
            <p
              className="mt-3"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-marmol)" }}
            >
              Medalla de Plata
            </p>
            <p
              className="text-xs mt-1"
              style={{ fontFamily: "var(--font-body)", color: "rgba(243,242,238,0.5)" }}
            >
              World Cheese Awards · 2016
            </p>
          </motion.div>
        </div>
      </section>

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
              El mismo queso en tres estadios de madurez
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {variedades.map((v, i) => (
              <motion.div
                key={v.nombre}
                initial={{ transform: "translateY(28px)", opacity: 0 }}
                animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease }}
                className="relative p-8 flex flex-col"
                style={{
                  background: "var(--color-azulejo)",
                  border: "1px solid rgba(201,162,74,0.2)",
                }}
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
                    className="text-xs px-2 py-0.5 mt-1"
                    style={{
                      background: "rgba(201,162,74,0.12)",
                      color: "var(--color-cordel)",
                      fontFamily: "var(--font-body)",
                      border: "1px solid rgba(201,162,74,0.25)",
                      whiteSpace: "nowrap",
                      fontSize: "0.7rem",
                    }}
                  >
                    {v.formato}
                  </span>
                </div>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--color-oro-tinta)", fontFamily: "var(--font-body)" }}
                >
                  {v.edad}
                </p>
                <p
                  style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.75 }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué El Cordel */}
      <section className="py-24 px-6" style={{ background: "var(--color-azulejo)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "var(--color-verde)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Leche cruda, raza manchega, paciencia
          </h2>
          <div
            className="space-y-4"
            style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.8 }}
          >
            <p>
              El Cordel se elabora exclusivamente con leche cruda entera de oveja manchega procedente de la propia ganadería. No se pasteuriza: la leche cruda conserva la flora microbiana natural que da carácter y complejidad al queso durante la maduración.
            </p>
            <p>
              La corteza natural, oscura y sin tratamientos artificiales, se desarrolla en la bodega a lo largo de meses. En el añejo se unta con aceite de oliva para protegerla. Es la señal de que el tiempo ha hecho su trabajo.
            </p>
            <p>
              La placa de caseína numerada certifica que cada rueda ha pasado por el análisis del Consejo Regulador. No es solo un sello: es la garantía de que estás comprando queso manchego auténtico, elaborado en La Mancha con oveja manchega.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-24 px-6"
        style={{ background: "var(--color-verde)" }}
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
                color: "var(--color-marmol)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              Pídelo por WhatsApp
            </h2>
            <p
              className="mb-8"
              style={{ color: "rgba(243,242,238,0.75)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              Contacta con nosotros por WhatsApp o teléfono. Te informamos sobre disponibilidad, tamaños y envío.
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
                style={{ background: "transparent", color: "var(--color-marmol)", borderColor: "rgba(243,242,238,0.3)", fontFamily: "var(--font-body)" }}
                className="hover:bg-white/10 transition-colors"
              >
                <a href={TEL_HREF}>+34 667 638 293</a>
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
              style={{ background: "rgba(243,242,238,0.06)", border: "1px solid rgba(243,242,238,0.12)" }}
            >
              <h3 className="mb-2 font-display text-[1.5rem] leading-tight" style={{ color: "var(--color-marmol)" }}>
                Otras líneas
              </h3>
              {[
                { nombre: "El Consuelo", desc: "La línea insignia, en cuatro variedades", href: "/quesos/el-consuelo" },
                { nombre: "El Redil", desc: "La gama más versátil de la casa", href: "/quesos/el-redil" },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="flex items-center justify-between py-4 group"
                  style={{
                    borderBottom: "1px solid rgba(243,242,238,0.1)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-marmol)", fontWeight: 500 }}
                    >
                      {q.nombre}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(243,242,238,0.45)" }}
                    >
                      {q.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    style={{ color: "var(--color-oro)", transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)" }}
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
