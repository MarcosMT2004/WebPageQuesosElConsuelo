"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, FormEvent } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Contacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = nombre
      ? `Hola, soy ${nombre}. ${mensaje || "Me gustaría obtener información sobre vuestros quesos."}`
      : mensaje || "Hola, me gustaría obtener información sobre vuestros quesos.";
    window.open(
      `https://wa.me/34667638293?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 lg:py-32 px-6"
      style={{ background: "#efe8d8" }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <motion.div
          initial={{ transform: "translateX(-24px)", opacity: 0 }}
          animate={inView ? { transform: "translateX(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#C17D3C", fontFamily: "var(--font-lora)" }}
          >
            Contacto
          </p>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              color: "#231A0E",
              fontWeight: 400,
            }}
          >
            Háblanos
          </h2>
          <p
            className="leading-relaxed mb-10"
            style={{
              color: "#5a3f25",
              fontFamily: "var(--font-lora)",
              fontSize: "1rem",
              maxWidth: "28rem",
            }}
          >
            Para pedidos, consultas mayoristas o simplemente si quieres saber
            más sobre nuestros quesos. Respondemos rápido.
          </p>

          <div className="space-y-5">
            <a
              href="tel:+34667638293"
              className="flex items-center gap-4 group"
              style={{ color: "#231A0E" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-150"
                style={{ background: "rgba(193,125,60,0.15)" }}
              >
                <Phone size={18} style={{ color: "#C17D3C" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}>
                  Móvil · WhatsApp
                </p>
                <p
                  className="font-medium transition-colors duration-150 group-hover:text-[#C17D3C]"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "1.05rem" }}
                >
                  +34 667 638 293
                </p>
              </div>
            </a>

            <a
              href="tel:+34925462459"
              className="flex items-center gap-4 group"
              style={{ color: "#231A0E" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(193,125,60,0.15)" }}
              >
                <Phone size={18} style={{ color: "#C17D3C" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}>
                  Teléfono fijo
                </p>
                <p
                  className="font-medium transition-colors duration-150 group-hover:text-[#C17D3C]"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "1.05rem" }}
                >
                  +34 925 462 459
                </p>
              </div>
            </a>
          </div>

          <a
            href="https://wa.me/34667638293?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20vuestros%20quesos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-10 px-6 py-3 transition-opacity hover:opacity-90"
            style={{
              background: "#25D366",
              color: "#fff",
              fontFamily: "var(--font-lora)",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "4px",
            }}
          >
            <MessageCircle size={18} />
            Escríbenos por WhatsApp
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ transform: "translateX(24px)", opacity: 0 }}
          animate={inView ? { transform: "translateX(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-8"
            style={{
              background: "#F7F0E3",
              border: "1px solid rgba(193,125,60,0.2)",
            }}
          >
            <div>
              <Label
                htmlFor="nombre"
                style={{ fontFamily: "var(--font-lora)", color: "#231A0E", fontSize: "0.85rem" }}
              >
                Nombre
              </Label>
              <Input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="mt-1.5"
                style={{
                  background: "#F7F0E3",
                  borderColor: "rgba(193,125,60,0.3)",
                  fontFamily: "var(--font-lora)",
                  color: "#231A0E",
                }}
              />
            </div>

            <div>
              <Label
                htmlFor="mensaje"
                style={{ fontFamily: "var(--font-lora)", color: "#231A0E", fontSize: "0.85rem" }}
              >
                Mensaje
              </Label>
              <Textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
                className="mt-1.5 resize-none"
                style={{
                  background: "#F7F0E3",
                  borderColor: "rgba(193,125,60,0.3)",
                  fontFamily: "var(--font-lora)",
                  color: "#231A0E",
                }}
              />
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{
                background: "#C17D3C",
                color: "#F7F0E3",
                fontFamily: "var(--font-lora)",
                fontSize: "0.9rem",
              }}
            >
              <MessageCircle size={16} />
              Enviar por WhatsApp
            </Button>

            <p
              className="text-xs text-center"
              style={{ color: "#8C7B6A", fontFamily: "var(--font-lora)" }}
            >
              Al enviar, abrirás WhatsApp con tu mensaje listo para enviar.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
