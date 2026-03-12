import { useState } from "react";
import { motion } from "framer-motion";

export default function GlassPanel({
  children,
  className = "",
  borderColor,
  topAccent,
  hover3d = false,
  glowColor,
  style,
  ...props
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!hover3d) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    if (hover3d) setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`rounded-lg backdrop-blur-sm ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${borderColor || "rgba(255,255,255,0.08)"}`,
        borderTop: topAccent ? `3px solid ${topAccent}` : undefined,
        perspective: hover3d ? 800 : undefined,
        ...style,
      }}
      animate={
        hover3d
          ? { rotateX: tilt.x, rotateY: tilt.y }
          : undefined
      }
      transition={hover3d ? { type: "spring", stiffness: 300, damping: 20 } : undefined}
      whileHover={
        glowColor
          ? { boxShadow: `0 0 30px ${glowColor}22, 0 0 60px ${glowColor}11` }
          : { borderColor: "rgba(255,255,255,0.15)" }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
}
