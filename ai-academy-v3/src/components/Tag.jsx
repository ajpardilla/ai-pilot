import { motion } from "framer-motion";

const ACCENT_COLORS = {
  emerald: "#10B981",
  cyan: "#06B6D4",
  magenta: "#EC4899",
  orange: "#FF6B35",
  violet: "#B66DFF",
  lime: "#E8FF47",
};

export function resolveAccent(accent) {
  return ACCENT_COLORS[accent] || accent || "#10B981";
}

export default function Tag({ children, color }) {
  const c = resolveAccent(color);
  return (
    <motion.div
      className="inline-block font-mono text-[10px] tracking-[0.22em] uppercase mb-6"
      style={{
        color: c,
        border: `1px solid ${c}55`,
        padding: "5px 14px",
      }}
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
    >
      {children}
    </motion.div>
  );
}
