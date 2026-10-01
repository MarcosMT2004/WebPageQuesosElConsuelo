"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const productos = [
  {
    nombre: "Oveja Madurado",
    tipo: "Queso de oveja",
    desc: "Queso de oveja manchega con maduración en bodega. Textura grasa y sabor redondo. La versión más cotidiana de lo artesanal.",
    formato: "1 kg · 2,5 kg",
    tags: ["Madurado", "Graso"],
  },
  {
    nombre: "Cabra al Pimentón",
    tipo: "Queso de cabra",
    desc: "Queso de cabra con corteza al pimentón. Un punto picante, corteza naranja característica. Diferente. Para quienes buscan algo fuera de lo habitual.",
    formato: "Pequeño formato",
    tags: ["Cabra", "Pimentón", "Light"],
  },
  {
    nombre: "Tierno de Oveja",
    tipo: "Queso de oveja",
    desc: "Pasta suave y húmeda. El más accesible de la gama. Para quien quiere un queso de oveja manchega sin la intensidad de la curación.",
    formato: "1 kg",
    tags: ["Tierno", "Suave"],
  },
];

export default function ElRedilContent() {
  const prodRef = useRef(null);
  const ctaRef = useRef(null);

  const prodInView = useInView(prodRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const waMessage = encodeURIComponent(
    "Hola, me interesa la gama El Redil. ¿Podríais informarme sobre los productos disponibles y precios?"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "70vh" }}>
        <Image
          src="/images/slide7.jpg"
          alt="Gama completa El Redil: queso de oveja madurado, cabra al pimentón y tierno sobre estantería de madera"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,26,14,0.15) 0%, rgba(35,26,14,0.55) 50%, rgba(35,26,14,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-20 pt-36">
          <motion.div
            initial={{ transform: "translateY(16px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6"
          >
            <Image
              src="/images/logo-redil.png"
              alt="Logo El Redil"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
            />
          </motion.div>
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Queso de oveja y cabra · La gama más versátil
          </motion.p>
          <motion.h1
            initial={{ transform: "translateY(28px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#F7F0E3",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              lineHeight: 1,
              fontWeight: 400,
              fontStyle: "italic",
              maxWidth: "30rem",
            }}
          >
            El Redil
          </motion.h1>
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="mt-5 max-w-lg"
            style={{ color: "rgba(247,240,227,0.8)", fontFamily: "var(--font-lora)", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            La gama más amplia de la casa. Oveja madurado, cabra al pimentón, tierno. Artesanal en origen, accesible en precio. Para todos los días.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: "#F7F0E3" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            La gama
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "#231A0E",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Artesanal sin excusas, para el día a día
          </h2>
          <p
            style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.92rem", lineHeight: 1.8 }}
          >
            El Redil nació para quienes querían un queso artesanal sin la intensidad de los curados largos. Más accesible en precio, no en origen. La leche sigue siendo propia, el proceso el mismo, las manos también. Lo que cambia es el tiempo que el queso pasa en la bodega. Y el resultado: más versátil, más cotidiano.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section
        ref={prodRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#efe8d8" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={prodInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Productos
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#231A0E",
                fontWeight: 400,
              }}
            >
              Tres quesos, un mismo espíritu
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {productos.map((p, i) => (
              <motion.div
                key={p.nombre}
                initial={{ transform: "translateY(28px)", opacity: 0 }}
                animate={prodInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease }}
                className="p-8 flex flex-col"
                style={{ background: "#F7F0E3", border: "1px solid rgba(193,125,60,0.2)" }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
                >
                  {p.tipo}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.6rem",
                    color: "#231A0E",
                    fontWeight: 400,
                  }}
                >
                  {p.nombre}
                </h3>
                <p
                  className="flex-1 mb-6"
                  style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.88rem", lineHeight: 1.75 }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1"
                      style={{
                        background: "rgba(193,125,60,0.1)",
                        color: "#7A3B28",
                        fontFamily: "var(--font-lora)",
                        border: "1px solid rgba(193,125,60,0.22)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p
                  className="text-xs"
                  style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
                >
                  Formato: {p.formato}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#231A0E" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={ctaInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Pedir El Redil
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#F7F0E3",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              ¿Qué queso buscas hoy?
            </h2>
            <p
              className="mb-8"
              style={{ color: "rgba(247,240,227,0.75)", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              Escríbenos por WhatsApp y te decimos qué tenemos disponible. También puedes llamar directamente a la quesería.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                style={{ background: "#25D366", color: "#fff", fontFamily: "var(--font-lora)" }}
                className="hover:opacity-90 transition-opacity"
              >
                <a
                  href={`https://wa.me/34667638293?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Pedir por WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                style={{ background: "transparent", color: "#F7F0E3", borderColor: "rgba(247,240,227,0.3)", fontFamily: "var(--font-lora)" }}
                className="hover:bg-white/10 transition-colors"
              >
                <a href="tel:+34667638293">+34 667 638 293</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ transform: "translateX(32px)", opacity: 0 }}
            animate={ctaInView ? { transform: "translateX(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <div
              className="p-8"
              style={{ background: "rgba(247,240,227,0.06)", border: "1px solid rgba(247,240,227,0.12)" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
              >
                Si buscas más intensidad
              </p>
              {[
                { nombre: "El Cordel DOP", desc: "Medalla de Plata World Cheese Awards 2016", href: "/quesos/el-cordel" },
                { nombre: "El Consuelo", desc: "La línea insignia, en cuatro variedades", href: "/quesos/el-consuelo" },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="flex items-center justify-between py-4 group"
                  style={{
                    borderBottom: "1px solid rgba(247,240,227,0.1)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", color: "#F7F0E3", fontWeight: 500 }}
                    >
                      {q.nombre}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-lora)", fontSize: "0.8rem", color: "rgba(247,240,227,0.45)" }}
                    >
                      {q.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    style={{ color: "#C17D3C", transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                    className="group-hover:[transform:translate(3px,-3px)]"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
