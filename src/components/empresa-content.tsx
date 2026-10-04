"use client";

import { TEL_HREF } from "@/lib/contacto";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ease = [0.23, 1, 0.32, 1] as const;

const FUNDACION = 1938;

const stats = [
  { value: "2.200", label: "ovejas manchegas" },
  { value: `${new Date().getFullYear() - FUNDACION}+`, label: "años de historia" },
  { value: "3", label: "artesanos" },
  { value: "Toledo", label: "Madridejos" },
];

const hitos = [
  {
    year: "1938",
    title: "El origen",
    text: "Jesús Ávila Durango funda la explotación junto a la Cañada Real Soriana, en Madridejos, Toledo. La misma ruta por la que los pastores trashumaban desde el medievo. El queso manchego es, desde entonces, el oficio de la familia.",
  },
  {
    year: "1968",
    title: "La continuidad",
    text: "Su hijo Gregorio Ávila Carreño toma las riendas. Mantiene el carácter artesanal heredado y comienza a ampliar la quesería con los equipamientos que exige la normativa sanitaria, sin perder la forma de hacer de siempre.",
  },
  {
    year: "Hoy",
    title: "S.A.T. Cañada Real Soriana",
    text: "La empresa opera como Sociedad Agraria de Transformación. El diseño del edificio sigue la construcción tradicional toledana, a base de ladrillo de cerámica. Aquí se elaboran tres líneas de queso manchego, todas con leche propia.",
  },
];

export default function EmpresaContent() {
  const histRef = useRef(null);
  const statsRef = useRef(null);
  const granjRef = useRef(null);
  const premRef = useRef(null);

  const histInView = useInView(histRef, { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const granjInView = useInView(granjRef, { once: true, margin: "-60px" });
  const premInView = useInView(premRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Banner */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "58vh" }}>
        <Image
          src="/images/hero-rebano.jpg"
          alt="Rebaño de ovejas manchegas en los campos de La Mancha"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,59,45,0.35) 0%, rgba(31,59,45,0.75) 70%, rgba(31,59,45,0.9) 100%)",
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
              maxWidth: "36rem",
            }}
          >
            Queso manchego de generación en generación
          </motion.h1>
        </div>
      </section>

      {/* Historia */}
      <section
        ref={histRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "var(--color-marmol)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{ transform: "translateY(24px)", opacity: 0 }}
                animate={histInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-verde)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  marginBottom: "2.5rem",
                }}
              >
                Tres generaciones, el mismo oficio
              </motion.h2>

              <div className="space-y-10">
                {hitos.map((h, i) => (
                  <motion.div
                    key={h.year}
                    initial={{ transform: "translateY(24px)", opacity: 0 }}
                    animate={histInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          color: "var(--color-oro-tinta)",
                          fontWeight: 600,
                          fontStyle: "italic",
                          lineHeight: 1,
                        }}
                      >
                        {h.year}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.3rem",
                          color: "var(--color-verde)",
                          fontWeight: 500,
                        }}
                      >
                        {h.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
                      >
                        {h.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ transform: "translateX(32px)", opacity: 0 }}
              animate={histInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="relative"
              style={{ minHeight: "400px" }}
            >
              <Image
                src="/images/quesos-cordel.jpg"
                alt="Ruedas de queso manchego artesanal El Cordel sobre madera"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: "1px solid rgba(201,162,74,0.3)", margin: "12px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsRef}
        className="py-16 px-6"
        style={{ background: "var(--color-verde)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ transform: "translateY(20px)", opacity: 0 }}
                animate={statsInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="text-center"
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "var(--color-oro)",
                    fontWeight: 400,
                    lineHeight: 1,
                    fontStyle: "italic",
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-2 text-xs tracking-widest uppercase"
                  style={{ color: "rgba(243,242,238,0.6)", fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* La Explotación */}
      <section
        ref={granjRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "var(--color-azulejo)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ transform: "translateX(-32px)", opacity: 0 }}
            animate={granjInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                color: "var(--color-verde)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Leche propia, de nuestra propia ganadería
            </h2>
            <div
              className="space-y-4"
              style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75 }}
            >
              <p>
                La explotación trabaja con un sistema de semi-estabulación. El rebaño lo forman 2.200 ovejas de raza manchega. La producción media es de entre 250 y 260 litros por oveja en cada lactación de 120 días.
              </p>
              <p>
                Se realizan controles lecheros exhaustivos e inseminación artificial para mejorar progresivamente la raza. La quesería está adscrita a la Denominación de Origen Protegida Queso Manchego, lo que exige que toda la leche empleada cumpla los estándares del Consejo Regulador.
              </p>
              <p>
                El edificio, construido con ladrillo de cerámica en la tradición toledana, dispone de sala de degustación y venta en la propia quesería, en la carretera Toledo–Alcázar de San Juan, km 69,200.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ transform: "translateX(32px)", opacity: 0 }}
            animate={granjInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <div
              className="p-8 lg:p-10"
              style={{ background: "var(--color-marmol)", border: "1px solid rgba(201,162,74,0.2)" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: "var(--color-oro-tinta)", fontFamily: "var(--font-body)" }}
              >
                Dónde estamos
              </p>
              <address
                className="not-italic"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-verde)", lineHeight: 1.6 }}
              >
                Ctra. Toledo–Alcázar de San Juan<br />
                km 69,200<br />
                Madridejos, Toledo
              </address>
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,162,74,0.15)" }}>
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--color-gris)", fontFamily: "var(--font-body)" }}
                >
                  Contacto
                </p>
                <a
                  href={TEL_HREF}
                  className="block"
                  style={{ color: "var(--color-verde)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
                >
                  +34 667 638 293
                </a>
                <a
                  href="tel:+34925462459"
                  className="block mt-1"
                  style={{ color: "var(--color-verde)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
                >
                  +34 925 462 459
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section
        ref={premRef}
        className="py-24 px-6"
        style={{ background: "var(--color-marmol)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={premInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--color-verde)",
                fontWeight: 400,
              }}
            >
              Premios
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "Medalla de Plata",
                event: "World Cheese Awards",
                year: "2016",
                desc: "Medalla de Plata para El Cordel DOP en los World Cheese Awards 2016.",
              },
              {
                title: "Medallas de Oro",
                event: "Fercamp",
                year: "Años 90",
                desc: "Múltiples reconocimientos en las ferias del campo de Castilla-La Mancha, que consolidaron la reputación de la casa.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ transform: "translateY(24px)", opacity: 0 }}
                animate={premInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
                className="p-8"
                style={{ border: "1px solid rgba(201,162,74,0.25)", background: "var(--color-azulejo)" }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--color-oro-tinta)", fontFamily: "var(--font-body)" }}
                >
                  {p.event} · {p.year}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.6rem",
                    color: "var(--color-verde)",
                    fontWeight: 400,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{ color: "var(--color-tinta)", fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.7 }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "var(--color-verde)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-marmol)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Descubre las tres líneas de la casa
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
              style={{ background: "transparent", color: "var(--color-marmol)", borderColor: "rgba(243,242,238,0.4)", fontFamily: "var(--font-body)" }}
              className="hover:bg-white/10 transition-colors"
            >
              <Link href="/elaboracion">Cómo los elaboramos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
