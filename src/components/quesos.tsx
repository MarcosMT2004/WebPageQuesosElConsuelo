import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LINEAS } from "@/lib/quesos";

const descripcion: Record<string, string> = {
  "el-cordel":
    "Denominación de Origen Protegida y Medalla de Plata en los World Cheese Awards 2016. Corteza natural, pasta firme y un retrogusto largo.",
  "el-consuelo":
    "La línea que da nombre a la casa. El manchego clásico en cuatro momentos: de fresco a curado, y curado en aceite de oliva.",
  "el-redil":
    "Oveja madurado, cabra al pimentón y tierno de oveja. Artesanal en origen y pensado para el día a día.",
};

// Alicatado de la pared de la tienda
const azulejos =
  "bg-azulejo bg-[linear-gradient(rgba(31,59,45,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(31,59,45,0.07)_1px,transparent_1px)] bg-[size:56px_56px]";

export default function Quesos() {
  return (
    <section id="quesos" className={`scroll-mt-16 px-4 sm:px-6 py-20 lg:py-28 ${azulejos}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] text-verde max-w-[18ch] [text-wrap:balance]">
          Tres quesos en el mostrador
        </h2>
        <p className="mt-4 max-w-[60ch] text-[1.05rem] leading-relaxed text-tinta">
          Cada línea tiene su balda. Mira lo que hay de cada una y en qué formatos; para pedir,
          apúntalo en la nota de arriba.
        </p>

        <div className="mt-14 space-y-16 lg:space-y-20">
          {LINEAS.map((l) => (
            <article key={l.slug} aria-labelledby={`balda-${l.slug}`}>
              {/* Balda con el género */}
              <div className="relative">
                <div className="relative aspect-[5/2] sm:aspect-[4/1] overflow-hidden">
                  <Image
                    src={l.foto}
                    alt={`Quesos de la línea ${l.nombre}`}
                    fill
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className={`object-cover ${l.slug === "el-consuelo" ? "scale-[1.45]" : ""}`}
                  />
                </div>
                <div aria-hidden className="h-3 bg-verde-hondo shadow-[0_10px_18px_-8px_rgba(20,42,32,0.6)]" />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-10">
                {/* Etiqueta esmaltada */}
                <div className="self-start border-[3px] border-double border-verde bg-marmol px-5 py-4">
                  <h3 id={`balda-${l.slug}`} className="font-display text-[2rem] leading-none text-verde">
                    {l.nombre}
                  </h3>
                  <p className="mt-2 font-label text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-cordel">
                    {l.rotulo}
                  </p>
                </div>

                <div>
                  <p className="max-w-[62ch] leading-relaxed text-tinta">{descripcion[l.slug]}</p>
                  {/* Lista de la libreta: variedad ……… formatos */}
                  <dl className="mt-5 max-w-xl font-label text-[1.1rem]">
                    {l.variedades.map((v) => (
                      <div key={v.nombre} className="flex items-baseline gap-2 py-1">
                        <dt className="font-semibold text-verde">{v.nombre}</dt>
                        <span aria-hidden className="flex-1 border-b-2 border-dotted border-verde/30 translate-y-[-4px]" />
                        <dd className="tabular-nums text-tinta">{v.formatos.join(" · ")}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href={l.href}
                    className="group mt-5 inline-flex items-center gap-2 font-label text-[1.05rem] font-semibold uppercase tracking-[0.1em] text-verde underline decoration-cordel decoration-2 underline-offset-[6px] hover:text-cordel transition-colors"
                  >
                    Conocer {l.nombre}
                    <ArrowRight size={17} className="transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
