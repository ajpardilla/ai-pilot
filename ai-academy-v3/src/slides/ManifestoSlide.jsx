import { motion } from "framer-motion";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function ManifestoSlide({ slide }) {
  return (
    <div className="flex flex-col justify-center h-full px-[10vw] max-w-[900px]">
      {slide.lines.map((line, i) => (
        <motion.div
          key={i}
          className="font-display"
          style={{
            fontWeight: i % 2 === 0 ? 800 : 300,
            fontStyle: i % 2 !== 0 ? "italic" : "normal",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 1.08,
            color: i === 0 ? "#10B981" : "#fff",
          }}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            delay: 0.05 + i * 0.12,
          }}
        >
          {line}
        </motion.div>
      ))}

      <FadeIn delay={0.8}>
        <div className="mt-10 font-mono text-[13px] text-text-muted tracking-[0.1em]">
          {slide.footnote}
        </div>
      </FadeIn>
    </div>
  );
}
