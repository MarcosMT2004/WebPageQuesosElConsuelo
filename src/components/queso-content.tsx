"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ease = [0.23, 1, 0.32, 1] as const;

const caracteristicas = [
  {
    label: "Forma",
    desc: "Cilíndrica con caras sensiblemente planas. El lateral lleva el dibujo de pleita de esparto, las caras la flor del quesero. Formato de 1 kg y 2,5 kg.",
  },
  {
    label: "Corteza",
    desc: "Natural de bodega, color oscuro. En los curados y añejos se unta con aceite de oliva, lo que le da el brillo característico.",
  },
  {
    label: "Pasta",
    desc: "Compacta, sin ojos o con muy pocos. Color marfil en el semicurado, amarillo paja en el curado. La textura va de elástica a quebradiza con la maduración.",
  },
  {
    label: "Sabor",
    desc: "Notas lácticas en el fresco. Mantequilla y frutos secos en el semicurado. Intenso, con cristales de sal en el añejo. Siempre limpio, nunca agresivo.",
  },
];

const maridajes = [
  { item: "Vino tinto", nota: "Tempranillo joven o Manchuela. Comparte origen y tierra con el queso." },
  { item: "Vino blanco", nota: "Verdejo o Rueda. Funciona especialmente con los semicurados en aceite." },
  { item: "Membrillo", nota: "El maridaje clásico castellano. Contraste dulce que realza la sal." },
  { item: "Frutos secos", nota: "Nueces y almendras tostadas. Amplifican los matices del añejo." },
  { item: "Pan de pueblo", nota: "Una rebanada y aceite de oliva. El desayuno manchego de siempre." },
  { item: "Miel de tomillo", nota: "Con el curado o añejo, un hilo de miel rompe la intensidad." },
];

export default function QuesoContent() {
  const dopRef = useRef(null);
  const carRef = useRef(null);
  const marRef = useRef(null);

  const dopInView = useInView(dopRef, { once: true, margin: "-60px" });
  const carInView = useInView(carRef, { once: true, margin: "-60px" });
  const marInView = useInView(marRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Banner */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "58vh" }}>
        <Image
          src="/images/hero-productos.jpg"
          alt="Quesos manchegos artesanales El Consuelo sobre mesa de madera"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,26,14,0.2) 0%, rgba(35,26,14,0.65) 55%, rgba(35,26,14,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-16 pt-32">
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            El Queso
          </motion.p>
          <motion.h1
            initial={{ transform: "translateY(28px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#F7F0E3",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              fontWeight: 400,
              fontStyle: "italic",
              maxWidth: "36rem",
            }}
          >
            El queso manchego, un patrimonio de La Mancha
          </motion.h1>
        </div>
      </section>

      {/* Qué es + DOP */}
      <section
        ref={dopRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#F7F0E3" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ transform: "translateX(-28px)", opacity: 0 }}
            animate={dopInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Denominación de Origen Protegida
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#231A0E",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Un queso que solo puede nacer en La Mancha
            </h2>
            <div
              className="space-y-4"
              style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              <p>
                El queso manchego es un queso de pasta prensada elaborado exclusivamente con leche de oveja de raza manchega, procedente de rebaños inscritos en el Registro de la Denominación de Origen Protegida Manchego.
              </p>
              <p>
                Solo pueden llamarse queso manchego los elaborados en la región natural de La Mancha, que abarca parte de las provincias de Albacete, Ciudad Real, Cuenca y Toledo. La DOP garantiza el origen, la raza y el método de elaboración.
              </p>
              <p>
                La placa de caseína numerada en la corteza es la prueba de autenticidad. Sin ella, no es manchego.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ transform: "translateX(28px)", opacity: 0 }}
            animate={dopInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative"
            style={{ minHeight: "380px" }}
          >
            <Image
              src="/images/slide6.jpg"
              alt="Tres ruedas de queso manchego El Consuelo con sus etiquetas DOP"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute bottom-6 left-6 right-6 px-6 py-5"
              style={{ background: "rgba(35,26,14,0.85)", backdropFilter: "blur(4px)" }}
            >
              <p
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem", color: "#F7F0E3", fontStyle: "italic", lineHeight: 1.4 }}
              >
                "Queso de pasta prensada, elaborado con leche entera y cruda de oveja manchega, con mínimo 6° de materia grasa."
              </p>
              <p
                className="mt-2 text-xs"
                style={{ color: "rgba(247,240,227,0.5)", fontFamily: "var(--font-lora)" }}
              >
                Especificaciones DOP Manchego
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Características */}
      <section
        ref={carRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#efe8d8" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={carInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Cómo reconocerlo
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#231A0E",
                fontWeight: 400,
              }}
            >
              Las cuatro señas de identidad
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {caracteristicas.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ transform: "translateY(24px)", opacity: 0 }}
                animate={carInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.07, ease }}
                className="p-8"
                style={{ background: "#F7F0E3", border: "1px solid rgba(193,125,60,0.2)" }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    color: "#C17D3C",
                    fontWeight: 500,
                  }}
                >
                  {c.label}
                </h3>
                <p
                  style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
                >
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maridajes */}
      <section
        ref={marRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#231A0E" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={marInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Maridajes
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#F7F0E3",
                fontWeight: 400,
              }}
            >
              Con qué acompañarlo
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {maridajes.map((m, i) => (
              <motion.div
                key={m.item}
                initial={{ transform: "translateY(20px)", opacity: 0 }}
                animate={marInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease }}
                className="p-6"
                style={{ background: "rgba(247,240,227,0.06)", border: "1px solid rgba(247,240,227,0.1)" }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.25rem",
                    color: "#C17D3C",
                    fontWeight: 500,
                  }}
                >
                  {m.item}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-lora)", fontSize: "0.85rem", color: "rgba(247,240,227,0.65)", lineHeight: 1.65 }}
                >
                  {m.nota}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservación */}
      <section className="py-20 px-6" style={{ background: "#F7F0E3" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Conservación
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "#231A0E",
              fontWeight: 400,
            }}
          >
            Cómo cuidar tu queso en casa
          </h2>
          <div
            className="space-y-3"
            style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
          >
            <p>Envuelve el queso en papel encerado o film, nunca hermético. Necesita respirar. Guárdalo en la parte baja del frigorífico, entre 4 y 8 °C.</p>
            <p>Sácalo 30 minutos antes de servir. El frío adormece los aromas. A temperatura ambiente es donde el queso manchego muestra todo lo que tiene.</p>
            <p>Si aparece algo de moho blanco en la corteza de los curados, retíralo con un trapo humedecido en aceite de oliva. Es normal y no afecta al interior.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: "#efe8d8" }}>
        <div className="max-w-xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Nuestras líneas
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#231A0E",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Elige tu queso manchego
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ background: "#C17D3C", color: "#F7F0E3", fontFamily: "var(--font-lora)" }}
              className="hover:opacity-90 transition-opacity"
            >
              <Link href="/quesos/el-cordel">El Cordel DOP</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              style={{ borderColor: "rgba(35,26,14,0.3)", color: "#231A0E", fontFamily: "var(--font-lora)" }}
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
