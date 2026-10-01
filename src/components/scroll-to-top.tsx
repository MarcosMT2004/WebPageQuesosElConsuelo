"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver al inicio de la página"
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center"
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          exit={{ transform: "translateY(20px)", opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          style={{
            width: 44,
            height: 44,
            background: "rgba(35,26,14,0.88)",
            color: "#F7F0E3",
            border: "1px solid rgba(193,125,60,0.25)",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#231A0E";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(193,125,60,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(35,26,14,0.88)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(193,125,60,0.25)";
          }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
