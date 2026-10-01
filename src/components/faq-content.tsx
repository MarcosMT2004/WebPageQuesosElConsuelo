"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

const ease = [0.23, 1, 0.32, 1] as const;

const waLink = `https://wa.me/34667638293?text=${encodeURIComponent("Hola, tengo una pregunta sobre vuestros quesos.")}`;

const faqs = [
  {
    q: "¿Hacéis envíos a domicilio?",
    a: "Sí, enviamos a toda la Península Ibérica. Para hacer un pedido, contáctanos por WhatsApp y te informamos de tarifas y plazos de entrega. El queso se envía correctamente protegido y en las mejores condiciones.",
  },
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "No hay un pedido mínimo establecido. Puedes pedir desde una sola pieza. Para envíos a domicilio, cuanto más completo es el pedido, mejor sale el precio del porte. Escríbenos y te hacemos un presupuesto sin compromiso.",
  },
  {
    q: "¿Qué diferencia hay entre El Consuelo, El Cordel y El Redil?",
    a: "El Consuelo es nuestra línea principal, elaborada con leche de nuestra propia cabaña de 1.150 ovejas manchegas. El Cordel es nuestra gama premium con DOP Queso Manchego, con el curado más premiado —medalla de plata en el World Cheese Awards 2016. El Redil incluye quesos de cabra y mezcla para quienes buscan sabores distintos.",
  },
  {
    q: "¿Tenéis tienda física donde comprar?",
    a: "Sí, podéis pasar directamente por nuestra fábrica en Madridejos, en la Ctra. Toledo-Alcázar de San Juan km 69,200. Lo más cómodo es llamarnos o escribirnos antes para asegurarse de que hay alguien disponible para atenderos.",
  },
  {
    q: "¿Qué es la DOP Queso Manchego?",
    a: "La Denominación de Origen Protegida Queso Manchego certifica que el queso está elaborado exclusivamente con leche de oveja manchega en la región de La Mancha, siguiendo métodos tradicionales regulados por el Consejo Regulador. Es la garantía más alta de calidad y autenticidad que puede llevar un queso manchego.",
  },
  {
    q: "¿Cómo conservo el queso una vez abierto?",
    a: "Envuélvelo en papel parafinado o film y guárdalo en la parte menos fría del frigorífico, entre 8 y 14°C. Para disfrutarlo al máximo, sácalo 30 minutos antes de consumir —el queso necesita temperatura ambiente para liberar todo su aroma. Los quesos en aceite se conservan sumergidos en el mismo aceite, fuera del frigorífico.",
  },
  {
    q: "¿Los quesos están disponibles todo el año?",
    a: "Sí, elaboramos queso durante todo el año con leche de nuestra propia cabaña. Algunos formatos o curaciones pueden tener disponibilidad limitada según la temporada. Consúltanos por WhatsApp si buscas algo concreto.",
  },
  {
    q: "¿Podéis preparar lotes o regalos de empresa?",
    a: "Por supuesto. Preparamos lotes y cestas para regalo, tanto para particulares como para empresas. Si tienes en mente alguna combinación especial o necesitas un volumen mayor, cuéntanoslo por WhatsApp y te preparamos un presupuesto personalizado.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ transform: "translateY(16px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      style={{ borderBottom: "1px solid rgba(193,125,60,0.18)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        style={{ background: "none", border: "none", cursor: "pointer" }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            fontWeight: 500,
            color: open ? "#C17D3C" : "#231A0E",
            lineHeight: 1.3,
            transition: "color 200ms",
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          transition={{ duration: 0.22, ease }}
          style={{
            flexShrink: 0,
            color: open ? "#C17D3C" : "#8C7B6A",
            display: "flex",
            transition: "color 200ms",
          }}
        >
          <Plus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6 pr-10"
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "0.9rem",
                color: "#8C7B6A",
                lineHeight: 1.8,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqContent() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#F7F0E3", padding: "80px 24px 100px" }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={headerInView ? { transform: "translateY(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#231A0E",
              marginBottom: "1rem",
            }}
          >
            Preguntas frecuentes
          </h1>
          <p style={{ fontFamily: "var(--font-lora)", fontSize: "0.9rem", color: "#8C7B6A", lineHeight: 1.75 }}>
            Si no encuentras lo que buscas, escríbenos por WhatsApp y te respondemos en seguida.
          </p>
        </motion.div>

        <div>
          {faqs.map((item, i) => (
            <FaqItem key={i} index={i} q={item.q} a={item.a} />
          ))}
        </div>

        <motion.div
          initial={{ transform: "translateY(16px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4 p-8"
          style={{ background: "#231A0E" }}
        >
          <div className="flex-1">
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontStyle: "italic",
                color: "#F7F0E3",
                marginBottom: "0.25rem",
              }}
            >
              ¿Tienes otra pregunta?
            </p>
            <p style={{ fontFamily: "var(--font-lora)", fontSize: "0.8rem", color: "rgba(247,240,227,0.5)" }}>
              Respondemos por WhatsApp en horario de trabajo.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 text-sm transition-opacity hover:opacity-90"
            style={{
              background: "#25D366",
              color: "#fff",
              fontFamily: "var(--font-lora)",
              textDecoration: "none",
            }}
          >
            Escríbenos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
