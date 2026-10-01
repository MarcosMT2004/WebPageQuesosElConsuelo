"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const variedades = [
  {
    nombre: "Fresco",
    edad: "Menos de 2 meses",
    desc: "Textura suave y húmeda. Sabor láctico limpio, con el recuerdo directo de la leche de oveja. Para quien quiere el queso manchego en su estado más natural.",
    formato: "1 kg",
  },
  {
    nombre: "Semicurado",
    edad: "4–6 meses",
    desc: "La variedad más pedida. Pasta elástica de color marfil claro, aromas de mantequilla y nuez. Entra solo o con un vino joven manchego.",
    formato: "1 kg · 2,5 kg",
  },
  {
    nombre: "Curado",
    edad: "6–9 meses",
    desc: "Pasta más compacta y de tono más amarillo. Los sabores se concentran y aparecen los matices de frutos secos. La corteza natural ya ha tomado su carácter.",
    formato: "1 kg · 2,5 kg",
  },
  {
    nombre: "En aceite",
    edad: "Curado · en aceite de oliva",
    desc: "El curado conservado en aceite de oliva virgen extra. Profundidad añadida. Textura ligeramente untuosa. Un clásico de la despensa manchega.",
    formato: "1 kg",
  },
];

export default function ElConsueloContent() {
  const varRef = useRef(null);
  const ctaRef = useRef(null);

  const varInView = useInView(varRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const waMessage = encodeURIComponent(
    "Hola, me interesa el queso El Consuelo. ¿Podríais informarme sobre variedades disponibles y precios?"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "70vh" }}>
        <Image
          src="/images/slide6.jpg"
          alt="Tres ruedas de queso manchego El Consuelo en sus variedades semicurado, curado y añejo"
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
              src="/images/logo-consuelo.png"
              alt="Logo El Consuelo"
              width={160}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </motion.div>
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Queso manchego artesanal · La línea insignia
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
            El Consuelo
          </motion.h1>
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="mt-5 max-w-lg"
            style={{ color: "rgba(247,240,227,0.8)", fontFamily: "var(--font-lora)", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            El queso que da nombre a la casa. Fresco, semicurado, curado o en aceite. Cuatro formas de disfrutar la leche de nuestras propias ovejas manchegas.
          </motion.p>
        </div>
      </section>

      {/* Variedades */}
      <section
        ref={varRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#F7F0E3" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ transform: "translateY(24px)", opacity: 0 }}
            animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
            >
              Variedades
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#231A0E",
                fontWeight: 400,
              }}
            >
              Cuatro momentos del mismo origen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {variedades.map((v, i) => (
              <motion.div
                key={v.nombre}
                initial={{ transform: "translateY(28px)", opacity: 0 }}
                animate={varInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
                className="p-8"
                style={{ background: "#efe8d8", border: "1px solid rgba(193,125,60,0.2)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.7rem",
                      color: "#231A0E",
                      fontWeight: 400,
                    }}
                  >
                    {v.nombre}
                  </h3>
                  <span
                    className="text-xs px-2.5 py-1 mt-1"
                    style={{
                      background: "rgba(193,125,60,0.12)",
                      color: "#7A3B28",
                      fontFamily: "var(--font-lora)",
                      border: "1px solid rgba(193,125,60,0.25)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.formato}
                  </span>
                </div>
                <p
                  className="text-xs mb-4"
                  style={{ color: "#C17D3C", fontFamily: "var(--font-lora)", letterSpacing: "0.05em" }}
                >
                  {v.edad}
                </p>
                <p
                  style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 px-6" style={{ background: "#231A0E" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {[
            { label: "Origen", text: "Leche cruda entera de oveja manchega. Propia ganadería en Madridejos, Toledo." },
            { label: "Elaboración", text: "Cuajo animal, fermentos lácticos. Maduración en bodega a 75-85% de humedad." },
            { label: "DOP", text: "Placa de caseína numerada. Lote analizado y autorizado por el Consejo Regulador." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ transform: "translateY(20px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center"
            >
              <h3
                className="mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", color: "#C17D3C", fontWeight: 500 }}
              >
                {item.label}
              </h3>
              <p
                style={{ fontFamily: "var(--font-lora)", fontSize: "0.88rem", color: "rgba(247,240,227,0.7)", lineHeight: 1.7 }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-24 lg:py-32 px-6"
        style={{ background: "#efe8d8" }}
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
              Pedir El Consuelo
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#231A0E",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              ¿Te lo llevamos a casa?
            </h2>
            <p
              className="mb-8"
              style={{ color: "#5a3f25", fontFamily: "var(--font-lora)", fontSize: "0.9rem", lineHeight: 1.75 }}
            >
              Contacta con nosotros por WhatsApp. Te informamos sobre variedades disponibles, tamaños y envío a domicilio.
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
                style={{ borderColor: "rgba(35,26,14,0.3)", color: "#231A0E", fontFamily: "var(--font-lora)" }}
                className="hover:bg-black/5 transition-colors"
              >
                <a href="tel:+34667638293">Llamar: +34 667 638 293</a>
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
              style={{ background: "#F7F0E3", border: "1px solid rgba(193,125,60,0.2)" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
              >
                También podrías probar
              </p>
              {[
                { nombre: "El Cordel DOP", desc: "El más premiado de la casa", href: "/quesos/el-cordel" },
                { nombre: "El Redil", desc: "La gama más versátil", href: "/quesos/el-redil" },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="flex items-center justify-between py-4 group"
                  style={{
                    borderBottom: "1px solid rgba(193,125,60,0.15)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", color: "#231A0E", fontWeight: 500 }}
                    >
                      {q.nombre}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-lora)", fontSize: "0.8rem", color: "#8C7B6A" }}
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
