"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-rebano.jpg"
        alt="Rebaño de ovejas manchegas en los campos de La Mancha"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(35,26,14,0.55) 0%, rgba(35,26,14,0.7) 60%, rgba(35,26,14,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.6, ease }}
        >
          <Badge
            className="mb-6 text-xs tracking-widest uppercase px-4 py-1.5 border"
            style={{
              background: "transparent",
              color: "#C17D3C",
              borderColor: "#C17D3C",
              fontFamily: "var(--font-lora)",
            }}
          >
            Desde 1938 · DOP Manchego
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ transform: "translateY(28px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#F7F0E3",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.05,
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Queso manchego<br />artesanal de La Mancha
        </motion.h1>

        <motion.p
          initial={{ transform: "translateY(28px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(247,240,227,0.8)", fontFamily: "var(--font-lora)" }}
        >
          Queso manchego artesanal. De nuestras ovejas a tu mesa, con el mismo
          cuidado de siempre.
        </motion.p>

        <motion.div
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            asChild
            style={{
              background: "#C17D3C",
              color: "#F7F0E3",
              fontFamily: "var(--font-lora)",
              fontSize: "0.95rem",
              padding: "0.75rem 2rem",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            <a href="#quesos">Descubre nuestros quesos</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            style={{
              background: "transparent",
              color: "#F7F0E3",
              borderColor: "rgba(247,240,227,0.5)",
              fontFamily: "var(--font-lora)",
              fontSize: "0.95rem",
            }}
            className="hover:bg-white/10 transition-colors"
          >
            <a href="#historia">Nuestra historia</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Desplázate hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease }}
        style={{ color: "rgba(247,240,227,0.6)" }}
      >
        <ChevronDown size={28} strokeWidth={1.5} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
