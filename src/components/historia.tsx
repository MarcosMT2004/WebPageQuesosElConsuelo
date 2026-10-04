import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Una idea por plano: tres paneles a sangre, un solo dato cada uno.
export default function Historia() {
  return (
    <section id="historia" aria-label="Nuestra historia">
      <div className="bg-verde px-4 sm:px-6 py-20 lg:py-28 text-marmol">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1] tracking-[-0.015em] max-w-[14ch] [text-wrap:balance]">
            Desde <span className="text-oro tabular-nums">1938</span> en Madridejos.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[1.1rem] leading-relaxed text-marmol/85">
            Empezó con un rebaño, unos campos y la idea de que el manchego se hace con tiempo.
            La familia fundó lo que hoy es la S.A.T. Cañada Real Soriana, y desde entonces lo
            esencial del oficio no ha cambiado.
          </p>
        </div>
      </div>

      <figure>
        <div className="relative aspect-[5/3] sm:aspect-[3/1] lg:aspect-[4/1]">
          <Image
            src="/images/hero-rebano.jpg"
            alt="Rebaño de ovejas manchegas pastando en la llanura de Madridejos"
            fill
            sizes="100vw"
            className="object-cover object-[50%_70%]"
          />
        </div>
        <figcaption className="bg-verde-hondo px-4 sm:px-6 py-6 sm:py-8">
          <p className="mx-auto max-w-6xl font-display text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[1.05] text-marmol [text-wrap:balance]">
            2.200 ovejas manchegas. Todas nuestras.
          </p>
        </figcaption>
      </figure>

      <div className="bg-marmol px-4 sm:px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          {/* Placa esmaltada, no una medalla dibujada */}
          <p className="w-fit self-start border-[3px] border-double border-verde bg-azulejo px-6 py-4 text-center">
            <span className="block font-display text-[2.6rem] italic leading-none text-verde">Plata</span>
            <span className="mt-1 block font-label text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-cordel">
              WCA · <span className="tabular-nums">2016</span>
            </span>
          </p>
          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] text-verde [text-wrap:balance]">
              Medalla de Plata en los World Cheese Awards 2016.
            </h2>
            <p className="mt-4 max-w-[58ch] leading-relaxed text-tinta">
              La ganó El Cordel, nuestro manchego con Denominación de Origen Protegida.
            </p>
            <Link
              href="/quesos/el-cordel"
              className="group mt-5 inline-flex items-center gap-2 font-label text-[1.05rem] font-semibold uppercase tracking-[0.1em] text-verde underline decoration-cordel decoration-2 underline-offset-[6px] hover:text-cordel transition-colors"
            >
              Conocer El Cordel
              <ArrowRight size={17} className="transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
