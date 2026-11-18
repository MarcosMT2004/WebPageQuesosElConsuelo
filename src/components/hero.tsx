"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import NotaPedido from "@/components/nota-pedido";
import { LINEAS } from "@/lib/quesos";

const ease = [0.23, 1, 0.32, 1] as const;

// Moldura de madera pintada: filete dorado gastado dentro de un rebaje en sombra.
const moldura =
  "shadow-[inset_0_0_0_1px_rgba(201,162,74,0.35),inset_0_0_0_7px_var(--color-verde),inset_0_0_0_8px_rgba(0,0,0,0.28)]";

export default function Hero() {
  const [l, setL] = useState(LINEAS[0]);
  return (
    <section className="relative bg-verde pt-16 text-marmol">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 pb-10 pt-6 lg:pt-8 ${moldura}`}>
        {/* Rótulo */}
        <motion.div
          initial={{ opacity: 0, filter: "brightness(0.55)" }}
          animate={{ opacity: 1, filter: "brightness(1)" }}
          transition={{ duration: 1.1, ease }}
          className="border-[5px] border-double border-oro/80 bg-verde-hondo px-4 py-5 sm:py-6 text-center"
        >
          <h1 className="font-display text-oro leading-[0.95] tracking-[-0.01em] [text-shadow:0_1px_0_#6b5216,0_3px_10px_rgba(0,0,0,0.45)]">
            <span className="block text-[clamp(2.6rem,8.2vw,6rem)] font-semibold">Quesos El Consuelo</span>
            <span className="mt-3 block font-label text-[clamp(0.85rem,1.6vw,1.15rem)] font-medium uppercase tracking-[0.28em] text-oro/85 [text-shadow:none]">
              Queso manchego artesano · Madridejos, Toledo · desde 1938
            </span>
          </h1>
        </motion.div>

        {/* Orden del DOM = orden en móvil: escaparate → nota → texto */}
        <div className="mt-6 lg:mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-[auto_1fr] lg:items-start">
          {/* Escaparate */}
          <div className="lg:col-start-1">
            <div className="relative bg-verde-hondo p-2 sm:p-2.5">
              <div className="relative aspect-[4/3] sm:aspect-[2/1] overflow-hidden">
                <Image
                  key={l.foto}
                  src={l.foto}
                  alt={`Quesos de la línea ${l.nombre}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-[50%_60%]"
                />
                {/* Junquillos del escaparate y reflejo del cristal */}
                <div aria-hidden className="absolute inset-0 hidden sm:flex justify-evenly">
                  <span className="w-1.5 bg-verde-hondo" />
                  <span className="w-1.5 bg-verde-hondo" />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(243,242,238,0.09)_62%,transparent_70%)]"
                />
              </div>
              {/* Etiqueta esmaltada colgada del escaparate */}
              <p className="absolute -bottom-4 left-5 sm:left-8 border-2 border-verde bg-marmol px-3 py-1 font-label text-[0.8rem] sm:text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-verde shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
                {l.nombre} · {l.rotulo}
              </p>
            </div>
          </div>

          {/* Nota de pedido */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(24px) rotate(0.6deg)" }}
            animate={{ opacity: 1, transform: "translateY(0px) rotate(0.6deg)" }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:-mt-2"
          >
            <NotaPedido onLinea={setL} />
          </motion.div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="lg:mt-4 max-w-[56ch] text-[1.05rem] leading-relaxed text-marmol/85">
              Hacemos el queso con la leche de nuestro propio rebaño de ovejas manchegas, sin
              intermediarios. Apunta lo que quieres en la nota y nos llega por WhatsApp: te
              contestamos nosotros, desde la quesería.
            </p>
            <a
              href="#quesos"
              className="mt-5 inline-flex items-center gap-2 font-label text-[1.05rem] font-semibold uppercase tracking-[0.1em] text-oro underline decoration-oro/40 underline-offset-[6px] hover:decoration-oro transition-colors"
            >
              Ver los tres quesos
              <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
