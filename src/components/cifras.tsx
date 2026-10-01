"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

const stats = [
  { valor: "1938", etiqueta: "Año de fundación" },
  { valor: "1.200", etiqueta: "Ovejas manchegas propias" },
  { valor: "DOP", etiqueta: "Denominación de Origen Protegida" },
  { valor: "3", etiqueta: "Líneas de queso manchego" },
];

export default function Cifras() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6"
      style={{ background: "#231A0E" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.etiqueta}
              initial={{ transform: "translateY(24px)", opacity: 0 }}
              animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="py-10 px-8 flex flex-col items-center text-center"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid rgba(193,125,60,0.2)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#C17D3C",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {stat.valor}
              </span>
              <span
                className="mt-3 text-sm leading-snug max-w-[140px]"
                style={{ color: "rgba(247,240,227,0.65)", fontFamily: "var(--font-lora)" }}
              >
                {stat.etiqueta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
