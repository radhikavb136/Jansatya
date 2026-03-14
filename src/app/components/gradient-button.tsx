import { motion } from "motion/react";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "filled" | "outlined";
  className?: string;
  disabled?: boolean;
}

export function GradientButton({
  children,
  onClick,
  variant = "filled",
  className = "",
  disabled = false,
}: GradientButtonProps) {
  if (variant === "filled") {
    return (
      <motion.button
        onClick={onClick}
        disabled={disabled}
        className={`px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-3.5 rounded-xl border-2 border-[#00D4FF] text-[#00D4FF] font-medium transition-all hover:bg-[#00D4FF]/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
}
