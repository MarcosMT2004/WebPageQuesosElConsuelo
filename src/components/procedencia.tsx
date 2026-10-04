"use client";

import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const PASOS = [
  { lugar: "El rebaño", dato: "Ovejas propias", texto: "Manchegas, de nuestra ganadería. Pastan en Madridejos, Toledo." },
  { lugar: "El ordeño", dato: "Leche cruda", texto: "Entera, de nuestro propio ordeño. Llega fresca a la quesería." },
  { lugar: "La bodega", dato: "Curación lenta", texto: "A 75–85 % de humedad, con cuajo animal y fermentos lácticos." },
  { lugar: "La placa", dato: "Numerada", texto: "Cada rueda DOP lleva su placa de caseína del Consejo Regulador." },
];

export default function Procedencia({ titulo = "De la cañada a tu mesa" }: { titulo?: string }) {
  return (
    <section className="bg-marmol px-4 sm:px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] text-verde [text-wrap:balance]">
          {titulo}
        </h2>

        <div className="relative mt-14">
          {/* El cordel que une los pasos: horizontal en escritorio */}
          <svg aria-hidden viewBox="0 0 1000 24" preserveAspectRatio="none" className="absolute left-0 top-[11px] hidden h-6 w-full md:block">
            <motion.path
              d="M10 12 C 180 0, 300 24, 500 12 S 820 0, 990 12"
              fill="none"
              stroke="var(--color-cordel)"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.6, ease }}
            />
          </svg>
          {/* …y vertical en móvil */}
          <span aria-hidden className="absolute left-[11px] top-2 bottom-2 border-l-[2.5px] border-dashed border-cordel md:hidden" />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {PASOS.map((p) => (
              <li key={p.lugar} className="relative pl-10 md:pl-0">
                {/* Nudo */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 md:static block h-6 w-6 rounded-full border-[3px] border-cordel bg-marmol"
                />
                <h3 className="md:mt-5 font-display text-[2rem] leading-tight text-verde">{p.dato}</h3>
                <p className="mt-2 max-w-[28ch] leading-relaxed text-tinta">
                  <strong className="font-semibold text-verde">{p.lugar}.</strong> {p.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
