"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.23, 1, 0.32, 1] as const;

const lineas = [
  {
    logo: "/images/logo-consuelo.png",
    nombre: "El Consuelo",
    descripcion:
      "La línea insignia de la casa. Queso manchego artesanal en cuatro variedades: fresco, semicurado, curado y en aceite de oliva. Para quienes buscan el sabor clásico, sin concesiones.",
    variedades: ["Fresco", "Semicurado", "Curado", "En aceite"],
    href: "/quesos/el-consuelo",
    imagen: "/images/slide6.jpg",
  },
  {
    logo: "/images/logo-cordel.png",
    nombre: "El Cordel",
    descripcion:
      "Denominación de Origen Protegida. El más premiado de la casa — Medalla de Plata en el World Cheese Awards 2016. Corteza natural, pasta firme y retrogusto que no se olvida.",
    variedades: ["Semicurado", "Curado", "Añejo"],
    href: "/quesos/el-cordel",
    imagen: "/images/quesos-cordel.jpg",
    destacado: true,
  },
  {
    logo: "/images/logo-redil.png",
    nombre: "El Redil",
    descripcion:
      "La gama más versátil de la casa. Oveja madurado, cabra al pimentón, tierno. Artesanal en origen, accesible para el día a día.",
    variedades: ["Oveja Madurado", "Cabra al Pimentón", "Tierno"],
    href: "/quesos/el-redil",
    imagen: "/images/slide7.jpg",
  },
];

export default function QuesosIndexContent() {
  const lineasRef = useRef(null);
  const lineasInView = useInView(lineasRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Banner */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "52vh" }}>
        <Image
          src="/images/hero-productos.jpg"
          alt="Quesos manchegos artesanales El Consuelo"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,26,14,0.25) 0%, rgba(35,26,14,0.65) 55%, rgba(35,26,14,0.92) 100%)",
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
            Nuestros Quesos
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
            Tres líneas, un único origen
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6" style={{ background: "#F7F0E3" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.95rem",
              color: "#5a3f25",
              lineHeight: 1.8,
            }}
          >
            Todo el queso que elaboramos procede de la misma leche: cruda, entera, de oveja manchega, de nuestro propio rebaño en Madridejos. Lo que cambia entre líneas es el tiempo, el formato y la intensidad que buscas.
          </motion.p>
        </div>
      </section>

      {/* Líneas */}
      <section
        ref={lineasRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#efe8d8" }}
      >
        <div className="max-w-6xl mx-auto space-y-8">
          {lineas.map((linea, i) => (
            <motion.div
              key={linea.nombre}
              initial={{ transform: "translateY(32px)", opacity: 0 }}
              animate={lineasInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="grid md:grid-cols-2 overflow-hidden group"
              style={{
                border: linea.destacado ? "1px solid #C17D3C" : "1px solid rgba(193,125,60,0.2)",
                background: "#F7F0E3",
              }}
            >
              {/* Imagen */}
              <div
                className={`relative min-h-64 md:min-h-80 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={linea.imagen}
                  alt={`Queso manchego ${linea.nombre}`}
                  fill
                  className="object-cover transition-transform duration-700"
                  style={{ transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {linea.destacado && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase"
                    style={{
                      background: "#C17D3C",
                      color: "#F7F0E3",
                      fontFamily: "var(--font-lora)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    DOP · Más premiado
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className={`flex flex-col justify-center p-10 lg:p-14 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="h-14 flex items-center mb-6">
                  <Image
                    src={linea.logo}
                    alt={`Logo ${linea.nombre}`}
                    width={140}
                    height={56}
                    className="h-12 w-auto object-contain object-left"
                  />
                </div>

                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: "#231A0E",
                    fontWeight: 400,
                  }}
                >
                  {linea.nombre}
                </h2>

                <p
                  className="mb-6"
                  style={{
                    color: "#5a3f25",
                    fontFamily: "var(--font-lora)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                  }}
                >
                  {linea.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {linea.variedades.map((v) => (
                    <span
                      key={v}
                      className="text-xs px-2.5 py-1"
                      style={{
                        background: "rgba(193,125,60,0.1)",
                        color: "#7A3B28",
                        fontFamily: "var(--font-lora)",
                        border: "1px solid rgba(193,125,60,0.22)",
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>

                <Link
                  href={linea.href}
                  className="inline-flex items-center gap-2 text-sm font-medium group/link w-fit"
                  style={{ color: "#C17D3C", fontFamily: "var(--font-lora)", transition: "color 150ms" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7A3B28")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C17D3C")}
                >
                  Ver {linea.nombre}
                  <ArrowUpRight
                    size={15}
                    style={{ transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                    className="group-hover/link:[transform:translate(3px,-3px)]"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA contacto */}
      <section className="py-20 px-6 text-center" style={{ background: "#231A0E" }}>
        <div className="max-w-xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            ¿Tienes dudas?
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#F7F0E3",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Pregúntanos directamente
          </h2>
          <Button
            asChild
            size="lg"
            style={{ background: "#C17D3C", color: "#F7F0E3", fontFamily: "var(--font-lora)" }}
            className="hover:opacity-90 transition-opacity"
          >
            <Link href="/#contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
