"use client";

import { motion } from "motion/react";
import Image from "next/image";
import NotaPedido from "@/components/nota-pedido";
import { LINEAS } from "@/lib/quesos";

const ease = [0.23, 1, 0.32, 1] as const;

// Cabecera de cada línea: su balda en la fachada y la nota ya puesta en ese queso.
export default function CabeceraQueso({
  slug,
  intro,
  alt,
  sello,
}: {
  slug: string;
  intro: string;
  alt: string;
  sello?: string;
}) {
  const l = LINEAS.find((x) => x.slug === slug)!;
  return (
    <section className="bg-verde px-4 sm:px-6 py-8 lg:py-10 text-marmol">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-[5px] border-double border-oro/80 bg-verde-hondo px-5 py-4">
            <span className="grid h-16 w-24 shrink-0 place-items-center bg-marmol p-1.5">
              <Image src={l.logo} alt={`Logo ${l.nombre}`} width={120} height={80} className="h-full w-auto object-contain" />
            </span>
            <h1 className="font-display text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-none text-oro [text-shadow:0_1px_0_#6b5216,0_3px_10px_rgba(0,0,0,0.45)]">
              {l.nombre}
            </h1>
            {sello && (
              <span className="border-2 border-oro px-2.5 py-1 font-label text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-oro">
                {sello}
              </span>
            )}
          </div>

          <div className="mt-6 bg-verde-hondo p-2">
            <div className="relative aspect-[3/2] sm:aspect-[2/1] overflow-hidden">
              <Image src={l.foto} alt={alt} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(243,242,238,0.09)_62%,transparent_70%)]" />
            </div>
          </div>

          <p className="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-marmol/85">{intro}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px) rotate(0.6deg)" }}
          animate={{ opacity: 1, transform: "translateY(0px) rotate(0.6deg)" }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <NotaPedido lineaInicial={slug} />
        </motion.div>
      </div>
    </section>
  );
}
