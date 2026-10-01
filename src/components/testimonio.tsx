"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

const opiniones = [
  {
    texto:
      "El Cordel añejo es el que compro para regalar. Tiene una intensidad que sorprende a la gente. Desde que lo probé en la quesería no compro otro manchego.",
    nombre: "Jose L.",
    origen: "Toledo",
    inicial: "JL",
  },
  {
    texto:
      "Pedimos por teléfono y llegó perfectamente embalado. El semicurado tiene un punto láctico que no encuentro en otros manchegos. Ya lo tenemos fijo en casa.",
    nombre: "Carmen P.",
    origen: "Madrid",
    inicial: "CP",
  },
  {
    texto:
      "Llevamos años comprando el curado en aceite. Mis hijos lo piden por su nombre. No concebimos la tabla de quesos sin él.",
    nombre: "Antonio M.",
    origen: "Sevilla",
    inicial: "AM",
  },
];

export default function Testimonio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 px-6"
      style={{ background: "#F7F0E3" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-14 text-center"
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Lo que dicen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#231A0E",
              fontWeight: 400,
            }}
          >
            Opiniones reales
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {opiniones.map((o, i) => (
            <motion.figure
              key={o.nombre}
              initial={{ transform: "translateY(28px)", opacity: 0 }}
              animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.09, ease }}
              className="flex flex-col p-8"
              style={{
                background: "#efe8d8",
                border: "1px solid rgba(193,125,60,0.2)",
              }}
            >
              <span
                aria-hidden
                className="block mb-5"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "#C17D3C",
                  opacity: 0.6,
                }}
              >
                &ldquo;
              </span>
              <blockquote
                className="flex-1 mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.15rem",
                  color: "#231A0E",
                  fontStyle: "italic",
                  lineHeight: 1.55,
                  fontWeight: 400,
                }}
              >
                {o.texto}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "#7A3B28",
                    color: "#F7F0E3",
                    fontFamily: "var(--font-lora)",
                  }}
                  aria-hidden
                >
                  {o.inicial}
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#231A0E", fontFamily: "var(--font-lora)" }}
                  >
                    {o.nombre}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
                  >
                    {o.origen}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
