"use client";

import { MotionConfig } from "motion/react";

// Las animaciones de motion son JS: el @media reduced-motion de globals.css no les afecta.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
