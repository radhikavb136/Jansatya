import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <motion.div
      className={`bg-[#16161F]/80 backdrop-blur-xl border border-[#2A2A3A] rounded-2xl p-6 ${
        hover ? "transition-all hover:border-[#6C63FF] hover:shadow-[0_0_20px_rgba(108,99,255,0.3)]" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
