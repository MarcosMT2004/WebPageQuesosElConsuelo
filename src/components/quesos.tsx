"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.23, 1, 0.32, 1] as const;

const lineas = [
  {
    logo: "/images/logo-consuelo.png",
    nombre: "El Consuelo",
    descripcion:
      "La línea insignia. Queso manchego artesanal en sus variedades fresco, semicurado y curado. Para quienes buscan el sabor clásico, sin concesiones.",
    variedades: ["Fresco", "Semicurado", "Curado", "En aceite"],
    href: "/quesos/el-consuelo",
  },
  {
    logo: "/images/logo-cordel.png",
    nombre: "El Cordel",
    descripcion:
      "Denominación de Origen Protegida. El Cordel es nuestro queso más premiado. Corteza natural, pasta firme y un retrogusto largo que no se olvida.",
    variedades: ["Semicurado", "Curado", "Añejo"],
    href: "/quesos/el-cordel",
    destacado: true,
  },
  {
    logo: "/images/logo-redil.png",
    nombre: "El Redil",
    descripcion:
      "Una línea más accesible, sin perder el origen artesanal. Perfecta para el día a día y para quien se acerca por primera vez al queso manchego.",
    variedades: ["Tierno", "Semicurado", "Cabra"],
    href: "/quesos/el-redil",
  },
];

export default function Quesos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="quesos"
      ref={ref}
      className="py-24 lg:py-32 px-6"
      style={{ background: "#efe8d8" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ transform: "translateY(24px)", opacity: 0 }}
          animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Nuestros quesos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              color: "#231A0E",
              fontWeight: 400,
              maxWidth: "28rem",
            }}
          >
            Tres líneas, un único origen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {lineas.map((linea, i) => (
            <motion.div
              key={linea.nombre}
              initial={{ transform: "translateY(32px)", opacity: 0 }}
              animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
              className="group relative flex flex-col"
              style={{
                background: "#F7F0E3",
                border: linea.destacado ? "1px solid #C17D3C" : "1px solid rgba(193,125,60,0.2)",
                padding: "2rem",
                transition: "transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(35,26,14,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0px)";
                el.style.boxShadow = "none";
              }}
            >
              {linea.destacado && (
                <div
                  className="absolute -top-3 left-6 px-3 py-0.5 text-xs tracking-widest uppercase"
                  style={{
                    background: "#C17D3C",
                    color: "#F7F0E3",
                    fontFamily: "var(--font-lora)",
                    fontSize: "0.65rem",
                  }}
                >
                  DOP · Más vendido
                </div>
              )}

              <div className="flex items-center justify-center h-28 mb-6">
                <Image
                  src={linea.logo}
                  alt={`Logo ${linea.nombre}`}
                  width={160}
                  height={110}
                  className="object-contain h-full w-auto"
                />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.75rem",
                  color: "#231A0E",
                  fontWeight: 500,
                }}
              >
                {linea.nombre}
              </h3>

              <p
                className="leading-relaxed mb-5 flex-1"
                style={{
                  color: "#5a3f25",
                  fontFamily: "var(--font-lora)",
                  fontSize: "0.9rem",
                }}
              >
                {linea.descripcion}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {linea.variedades.map((v) => (
                  <span
                    key={v}
                    className="text-xs px-2.5 py-1"
                    style={{
                      background: "rgba(193,125,60,0.12)",
                      color: "#7A3B28",
                      fontFamily: "var(--font-lora)",
                      border: "1px solid rgba(193,125,60,0.25)",
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>

              <Link
                href={linea.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 mt-auto group/link"
                style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7A3B28")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C17D3C")}
              >
                Ver productos
                <ArrowUpRight
                  size={15}
                  style={{ transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                  className="group-hover/link:[transform:translate(3px,-3px)]"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
