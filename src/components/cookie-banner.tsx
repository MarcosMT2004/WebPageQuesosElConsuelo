"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;
const STORAGE_KEY = "qec-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ transform: "translateY(100%)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          exit={{ transform: "translateY(100%)", opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="fixed bottom-0 inset-x-0 z-40 px-6 py-4"
          style={{
            background: "rgba(35,26,14,0.97)",
            borderTop: "1px solid rgba(193,125,60,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(247,240,227,0.65)", fontFamily: "var(--font-lora)" }}
            >
              Esta web usa únicamente cookies técnicas necesarias para su funcionamiento. No usamos cookies de seguimiento ni publicidad.{" "}
              <Link
                href="/privacidad"
                style={{ color: "#C17D3C", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Política de privacidad
              </Link>
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={accept}
                className="text-xs px-5 py-2.5 transition-opacity hover:opacity-90"
                style={{
                  background: "#C17D3C",
                  color: "#F7F0E3",
                  fontFamily: "var(--font-lora)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Entendido
              </button>
              <button
                onClick={accept}
                aria-label="Cerrar"
                style={{ color: "rgba(247,240,227,0.4)", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
