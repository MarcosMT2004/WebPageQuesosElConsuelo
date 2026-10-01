"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Historia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="historia"
      ref={ref}
      className="py-24 lg:py-32 px-6"
      style={{ background: "#F7F0E3" }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ transform: "translateX(-32px)", opacity: 0 }}
          animate={inView ? { transform: "translateX(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/quesos-cordel.jpg"
              alt="Quesos El Cordel sobre madera rústica con tomates y nueces"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Decorative frame */}
          <div
            className="absolute -bottom-4 -right-4 w-full h-full rounded-sm -z-10 border"
            style={{ borderColor: "#C17D3C", opacity: 0.4 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ transform: "translateX(32px)", opacity: 0 }}
          animate={inView ? { transform: "translateX(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Nuestra historia
          </p>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              color: "#231A0E",
              fontWeight: 400,
            }}
          >
            Ochenta y ocho años haciendo lo mismo
          </h2>
          <div
            className="space-y-4 leading-relaxed"
            style={{ color: "#3d2e1a", fontFamily: "var(--font-lora)", fontSize: "1rem" }}
          >
            <p>
              Empezó con un rebaño, unos campos y la convicción de que el queso manchego
              se hace con tiempo y paciencia. En 1938, en Madridejos, nuestra familia
              estableció lo que hoy es la S.A.T. Cañada Real Soriana. Desde entonces,
              no hemos cambiado lo esencial.
            </p>
            <p>
              Nuestras 1.200 ovejas manchegas pastan en la misma llanura de siempre.
              La leche llega fresca. El proceso sigue siendo artesanal. El resultado
              es un queso con Denominación de Origen Protegida que sabe a lo que
              debe saber: a La Mancha.
            </p>
            <p>
              Tres líneas, un único origen. Cada una con su carácter, todas con la
              misma materia prima y el mismo respeto por el oficio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
