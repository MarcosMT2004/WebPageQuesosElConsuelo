"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const waMessage = encodeURIComponent("Hola, me gustaría obtener información sobre vuestros quesos.");
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Ctra+Toledo+Alcázar+de+San+Juan+km+69+Madridejos+Toledo";

export default function ContactoContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#F7F0E3" }}>
      {/* Intro band */}
      <div
        className="px-6 py-16"
        style={{ borderBottom: "1px solid rgba(193,125,60,0.15)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            ref={ref}
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#231A0E",
            }}
          >
            Contáctanos
          </motion.h1>
          <motion.p
            initial={{ transform: "translateY(16px)", opacity: 0 }}
            animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.95rem",
              color: "#8C7B6A",
              lineHeight: 1.8,
              maxWidth: "44ch",
            }}
          >
            Estamos en Madridejos, en el corazón de La Mancha. La forma más
            rápida de contactar con nosotros es por WhatsApp —respondemos en
            horario de trabajo.
          </motion.p>
        </div>
      </div>

      {/* Main grid */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: contact info */}
          <ContactInfo />

          {/* Right: map */}
          <MapBlock />
        </div>
      </div>

      {/* WhatsApp CTA band */}
      <WaCta />
    </section>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ transform: "translateY(20px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.6, ease }}
      className="space-y-10"
    >
      {/* Address */}
      <div>
        <div className="flex items-start gap-3 mb-3">
          <MapPin size={18} style={{ color: "#C17D3C", marginTop: 2, flexShrink: 0 }} />
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.3rem",
              fontStyle: "italic",
              color: "#231A0E",
            }}
          >
            Cómo llegar
          </h2>
        </div>
        <div
          className="pl-7 space-y-1"
          style={{ fontFamily: "var(--font-lora)", fontSize: "0.875rem", color: "#8C7B6A", lineHeight: 1.75 }}
        >
          <p>S.A.T. Cañada Real Soriana</p>
          <p>Ctra. Toledo-Alcázar de San Juan, km 69,200</p>
          <p>45710 Madridejos, Toledo</p>
          <p>Castilla-La Mancha, España</p>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 ml-7 text-xs transition-opacity hover:opacity-70"
          style={{ color: "#C17D3C", fontFamily: "var(--font-lora)", textDecoration: "none" }}
        >
          Ver en Google Maps
          <span aria-hidden>↗</span>
        </a>
      </div>

      {/* Phones */}
      <div>
        <div className="flex items-start gap-3 mb-3">
          <Phone size={18} style={{ color: "#C17D3C", marginTop: 2, flexShrink: 0 }} />
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.3rem",
              fontStyle: "italic",
              color: "#231A0E",
            }}
          >
            Teléfonos
          </h2>
        </div>
        <div className="pl-7 space-y-2" style={{ fontFamily: "var(--font-lora)", fontSize: "0.875rem" }}>
          <div className="flex items-center gap-3">
            <a
              href="tel:+34667638293"
              style={{ color: "#231A0E" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C17D3C")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#231A0E")}
            >
              +34 667 638 293
            </a>
            <span
              className="px-2 py-0.5 text-xs"
              style={{ background: "#25D366", color: "#fff", fontSize: "0.6rem", letterSpacing: "0.05em" }}
            >
              WhatsApp
            </span>
          </div>
          <div>
            <a
              href="tel:+34925462459"
              style={{ color: "#231A0E" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C17D3C")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#231A0E")}
            >
              +34 925 462 459
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <div className="flex items-start gap-3 mb-3">
          <MessageCircle size={18} style={{ color: "#C17D3C", marginTop: 2, flexShrink: 0 }} />
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.3rem",
              fontStyle: "italic",
              color: "#231A0E",
            }}
          >
            WhatsApp
          </h2>
        </div>
        <p
          className="pl-7 mb-4"
          style={{ fontFamily: "var(--font-lora)", fontSize: "0.875rem", color: "#8C7B6A", lineHeight: 1.75 }}
        >
          Para pedidos, preguntas y presupuestos. Es la forma más rápida de llegar a nosotros.
        </p>
        <a
          href={`https://wa.me/34667638293?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-7 inline-flex items-center gap-2 px-5 py-2.5 text-sm transition-opacity hover:opacity-90"
          style={{
            background: "#25D366",
            color: "#fff",
            fontFamily: "var(--font-lora)",
            textDecoration: "none",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Abrir WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

function MapBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ transform: "translateY(20px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.15, ease }}
    >
      <div
        className="overflow-hidden"
        style={{
          aspectRatio: "4/3",
          border: "1px solid rgba(193,125,60,0.2)",
        }}
      >
        <iframe
          title="Mapa - Quesos El Consuelo, Madridejos"
          src="https://maps.google.com/maps?q=Madridejos,+Toledo,+Spain&output=embed&z=13&hl=es"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p
        className="mt-3 text-xs"
        style={{ fontFamily: "var(--font-lora)", color: "#8C7B6A" }}
      >
        Madridejos, Toledo · A 80 km de Madrid por la A-4
      </p>
    </motion.div>
  );
}

function WaCta() {
  return (
    <div
      className="px-6 py-14"
      style={{ background: "#231A0E" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontStyle: "italic",
              color: "#F7F0E3",
              marginBottom: "0.5rem",
            }}
          >
            ¿Listo para hacer un pedido?
          </p>
          <p style={{ fontFamily: "var(--font-lora)", fontSize: "0.85rem", color: "rgba(247,240,227,0.5)" }}>
            Escríbenos por WhatsApp. Respondemos en horario de trabajo.
          </p>
        </div>
        <a
          href={`https://wa.me/34667638293?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 text-sm transition-opacity hover:opacity-90"
          style={{
            background: "#25D366",
            color: "#fff",
            fontFamily: "var(--font-lora)",
            textDecoration: "none",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
