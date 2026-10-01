"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
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
    desc: "El más equilibrado. Textura más firme, aroma complejo de frutos secos y bodega. La corteza natural ya ha tomado color y carácter. El preferido de los queseros.",
    formato: "1 kg · 2,5 kg",
    destacado: true,
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
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "75vh" }}>
        <Image
          src="/images/quesos-cordel.jpg"
          alt="Ruedas de queso manchego El Cordel con Denominación de Origen Protegida sobre tabla de madera"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,26,14,0.1) 0%, rgba(35,26,14,0.5) 45%, rgba(35,26,14,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-20 pt-36">
          <motion.div
            initial={{ transform: "translateY(16px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-4 mb-6"
          >
            <Image
              src="/images/logo-cordel.png"
              alt="Logo El Cordel"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
            />
            <span
              className="px-3 py-1 text-xs tracking-widest uppercase"
              style={{
                background: "#C17D3C",
                color: "#F7F0E3",
                fontFamily: "var(--font-lora)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
              }}
            >
              DOP Manchego
            </span>
          </motion.div>
          <motion.h1
            initial={{ transform: "translateY(28px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#F7F0E3",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              lineHeight: 1,
              fontWeight: 400,
              fontStyle: "italic",
              maxWidth: "30rem",
            }}
          >
            El Cordel
          </motion.h1>
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-5 max-w-lg"
            style={{ color: "rgba(247,240,227,0.8)", fontFamily: "var(--font-lora)", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Denominación de Origen Protegida. Corteza natural, pasta firme, retrogusto que no se olvida. El queso más premiado de la casa.
          </motion.p>
        </div>
      </section>

      {/* Award */}
      <section
        ref={awardRef}
        className="py-20 px-6"
        style={{ background: "#231A0E" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={awardInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2"
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Reconocimiento internacional
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#F7F0E3",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Medalla de Plata · World Cheese Awards 2016
            </h2>
            <p
              className="mt-4"
              style={{ fontFamily: "var(--font-lora)", fontSize: "0.9rem", color: "rgba(247,240,227,0.7)", lineHeight: 1.7 }}
            >
              El certamen más prestigioso del sector quesero mundial reconoció a El Cordel entre los mejores quesos del año. Una validación de lo que ya sabían en Madridejos: que la combinación de leche cruda propia y tiempo de maduración produce algo difícil de igualar.
            </p>
          </motion.div>
          <motion.div
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={awardInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="p-8 text-center"
            style={{ background: "rgba(193,125,60,0.12)", border: "1px solid rgba(193,125,60,0.3)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "3rem",
                color: "#C17D3C",
                lineHeight: 1,
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Plata
            </p>
            <p
              className="mt-3"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", color: "#F7F0E3" }}
            >
              Medalla de Plata
            </p>
            <p
              className="text-xs mt-1"
              style={{ fontFamily: "var(--font-lora)", color: "rgba(247,240,227,0.5)" }}
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
        style={{ background: "#F7F0E3" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Variedades DOP
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#231A0E",
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
                  background: "#efe8d8",
                  border: v.destacado ? "1px solid #C17D3C" : "1px solid rgba(193,125,60,0.2)",
                }}
              >
                {v.destacado && (
                  <div
                    className="absolute -top-3 left-6 px-3 py-0.5 text-xs tracking-widest uppercase"
                    style={{
                      background: "#C17D3C",
                      color: "#F7F0E3",
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.6rem",
                    }}
                  >
                    El más solicitado
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.7rem",
                      color: "#231A0E",
                      fontWeight: 400,
                    }}
                  >
                    {v.nombre}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 mt-1"
                    style={{
                      background: "rgba(193,125,60,0.12)",
                      color: "#7A3B28",
                      fontFamily: "var(--font-lora)",
                      border: "1px solid rgba(193,125,60,0.25)",
                      whiteSpace: "nowrap",
                      fontSize: "0.7rem",
                    }}
                  >
                    {v.formato}
                  </span>
                </div>
                <p
                  className="text-xs mb-4"
                  style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
                >
                  {v.edad}
                </p>
                <p
                  style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.88rem", lineHeight: 1.75 }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué El Cordel */}
      <section className="py-24 px-6" style={{ background: "#efe8d8" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Por qué El Cordel
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "#231A0E",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Leche cruda, raza manchega, paciencia
          </h2>
          <div
            className="space-y-4"
            style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.92rem", lineHeight: 1.8 }}
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
        style={{ background: "#231A0E" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={ctaInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Pedir El Cordel
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#F7F0E3",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              ¿Te lo llevamos a casa?
            </h2>
            <p
              className="mb-8"
              style={{ color: "rgba(247,240,227,0.75)", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              Contacta con nosotros por WhatsApp o teléfono. Te informamos sobre disponibilidad, tamaños y envío.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                style={{ background: "#25D366", color: "#fff", fontFamily: "var(--font-lora)" }}
                className="hover:opacity-90 transition-opacity"
              >
                <a
                  href={`https://wa.me/34667638293?text=${waMessage}`}
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
                style={{ background: "transparent", color: "#F7F0E3", borderColor: "rgba(247,240,227,0.3)", fontFamily: "var(--font-lora)" }}
                className="hover:bg-white/10 transition-colors"
              >
                <a href="tel:+34667638293">+34 667 638 293</a>
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
              style={{ background: "rgba(247,240,227,0.06)", border: "1px solid rgba(247,240,227,0.12)" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
              >
                Otras líneas
              </p>
              {[
                { nombre: "El Consuelo", desc: "La línea insignia, en cuatro variedades", href: "/quesos/el-consuelo" },
                { nombre: "El Redil", desc: "La gama más versátil de la casa", href: "/quesos/el-redil" },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="flex items-center justify-between py-4 group"
                  style={{
                    borderBottom: "1px solid rgba(247,240,227,0.1)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", color: "#F7F0E3", fontWeight: 500 }}
                    >
                      {q.nombre}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-lora)", fontSize: "0.8rem", color: "rgba(247,240,227,0.45)" }}
                    >
                      {q.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    style={{ color: "#C17D3C", transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)" }}
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
