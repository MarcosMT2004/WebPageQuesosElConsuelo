"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ease = [0.23, 1, 0.32, 1] as const;

const pasos = [
  {
    num: "01",
    title: "La leche",
    text: "Todo empieza con leche entera cruda de oveja manchega, con un mínimo de 6° de materia grasa. Viene directamente de nuestra propia ganadería, adscrita a la DOP Manchego. Sin mezclas, sin intermediarios.",
  },
  {
    num: "02",
    title: "La coagulación",
    text: "La leche se coagula entre 28 y 32 °C con cuajo animal y fermentos lácticos. El proceso dura entre 45 y 60 minutos hasta que la cuajada alcanza la consistencia adecuada.",
  },
  {
    num: "03",
    title: "El recalentado",
    text: "La masa se somete a un calentamiento lento y controlado hasta alcanzar los 36–37 °C. Este paso afina la textura y prepara la cuajada para el moldeado.",
  },
  {
    num: "04",
    title: "El moldeado y prensado",
    text: "Se extrae la masa del suero y se introduce en moldes tradicionales, que imprimen el característico dibujo de esparto en la corteza lateral. El prensado dura varias horas para eliminar el suero restante.",
  },
  {
    num: "05",
    title: "La salmuera",
    text: "Cada pieza se sumerge en salmuera para obtener la corteza y el punto de sal. Es una etapa breve pero decisiva para el carácter del queso.",
  },
  {
    num: "06",
    title: "La maduración",
    text: "Las ruedas reposan en bodega a entre 75 y 85% de humedad relativa. El tiempo de maduración determina la variedad: de cuatro meses para el semicurado hasta más de doce para el añejo.",
  },
];

const variedades = [
  {
    label: "Semicurado",
    meses: "4–6 meses",
    desc: "Textura elástica y sabor suave con notas lácticas. El queso más accesible para el día a día.",
  },
  {
    label: "Curado",
    meses: "6–9 meses",
    desc: "Pasta más compacta, aroma pronunciado y principio de la cristalización. El equilibrio perfecto.",
  },
  {
    label: "Añejo",
    meses: "9–12 meses",
    desc: "Corteza oscura untada en aceite de oliva. Intensidad, profundidad y un retrogusto que persiste.",
  },
];

export default function ElaboracionContent() {
  const pasoRef = useRef(null);
  const varRef = useRef(null);
  const calRef = useRef(null);

  const pasoInView = useInView(pasoRef, { once: true, margin: "-60px" });
  const varInView = useInView(varRef, { once: true, margin: "-60px" });
  const calInView = useInView(calRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Banner */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "55vh" }}>
        <Image
          src="/images/quesos-cordel.jpg"
          alt="Ruedas de queso manchego artesanal maduradas en bodega"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,59,45,0.3) 0%, rgba(31,59,45,0.7) 60%, rgba(31,59,45,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-16 pt-32">
          <motion.h1
            initial={{ transform: "translateY(28px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-marmol)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              fontWeight: 400,
              fontStyle: "italic",
              maxWidth: "38rem",
            }}
          >
            Del pasto a la bodega, sin atajos
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: "var(--color-marmol)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0px)", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              color: "var(--color-verde)",
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            “Elaboramos a la manera tradicional, pero con los equipamientos e instalaciones que exige la normativa sanitaria actual.”
          </motion.p>
          <motion.p
            initial={{ transform: "translateY(16px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0px)", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-6"
            style={{ color: "var(--color-gris)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
          >
            S.A.T. Cañada Real Soriana · Madridejos, Toledo
          </motion.p>
        </div>
      </section>

      {/* Proceso */}
      <section
        ref={pasoRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "var(--color-azulejo)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={pasoInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-16"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--color-verde)",
                fontWeight: 400,
              }}
            >
              Seis pasos, el mismo método desde siempre
            </h2>
          </motion.div>

          <div className="space-y-0">
            {pasos.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ transform: "translateX(-24px)", opacity: 0 }}
                animate={pasoInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
                className="flex gap-8 py-10"
                style={{
                  borderBottom: i < pasos.length - 1 ? "1px solid rgba(201,162,74,0.2)" : "none",
                }}
              >
                <div className="flex-shrink-0 w-16">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      color: "rgba(201,162,74,0.35)",
                      fontWeight: 600,
                      fontStyle: "italic",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--color-verde)",
                      fontWeight: 500,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "52rem" }}
                  >
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Variedades por curación */}
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
              Tres momentos del mismo queso
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {variedades.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ transform: "translateY(28px)", opacity: 0 }}
                animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease }}
                className="p-8"
                style={{ background: "var(--color-azulejo)", border: "1px solid rgba(201,162,74,0.2)" }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--color-oro-tinta)", fontFamily: "var(--font-body)" }}
                >
                  {v.meses}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    color: "var(--color-verde)",
                    fontWeight: 400,
                  }}
                >
                  {v.label}
                </h3>
                <p
                  style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.7 }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calidad garantizada */}
      <section
        ref={calRef}
        className="py-24 px-6"
        style={{ background: "var(--color-verde)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={calInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "var(--color-marmol)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Cada rueda, trazable y certificada
            </h2>
            <p
              style={{ color: "rgba(243,242,238,0.75)", fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75 }}
            >
              Cada queso lleva una placa de caseína numerada que lo identifica de forma individual. Antes de salir al mercado, cada lote es analizado y autorizado por el Consejo Regulador de la DOP Manchego. Además, aplicamos control interno de puntos críticos en todas las fases del proceso.
            </p>
          </motion.div>

          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={calInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Placa de caseína", desc: "Numeración individual en cada pieza" },
              { label: "DOP Manchego", desc: "Consejo Regulador verifica cada lote" },
              { label: "Leche propia", desc: "Trazabilidad completa del origen" },
              { label: "Control APPCC", desc: "Puntos críticos monitorizados en proceso" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ transform: "translateY(16px)", opacity: 0 }}
                animate={calInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease }}
                className="p-5"
                style={{ background: "rgba(243,242,238,0.06)", border: "1px solid rgba(243,242,238,0.12)" }}
              >
                <p
                  className="mb-1"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-oro)", fontWeight: 500 }}
                >
                  {item.label}
                </p>
                <p
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(243,242,238,0.55)", lineHeight: 1.5 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: "var(--color-azulejo)" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "var(--color-verde)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Conoce los quesos que salen de esta bodega
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ background: "var(--color-oro)", color: "var(--color-verde-hondo)", fontFamily: "var(--font-body)" }}
              className="hover:opacity-90 transition-opacity"
            >
              <Link href="/quesos/el-cordel">El Cordel DOP</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              style={{ borderColor: "rgba(31,59,45,0.3)", color: "var(--color-verde)", fontFamily: "var(--font-body)" }}
              className="hover:bg-black/5 transition-colors"
            >
              <Link href="/quesos/el-consuelo">El Consuelo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
