import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function TitleSlide() {
  return (
    <div className="flex flex-col justify-center h-full px-[10vw]">
      <FadeIn delay={0.05}>
        <div className="font-mono text-[11px] tracking-[0.25em] text-emerald mb-6">
          UNICITY · PRODUCT & DESIGN · AI ACADEMY
        </div>
      </FadeIn>

      {/* Unicity — clip-path wipe */}
      <div className="overflow-hidden mb-2">
        <motion.h1
          className="font-display font-light text-[clamp(48px,7vw,96px)] leading-[0.92] m-0 italic"
          style={{ color: "rgba(255,255,255,0.4)" }}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          Unicity
        </motion.h1>
      </div>

      {/* AI — scale spring */}
      <div className="overflow-hidden mb-1">
        <motion.h1
          className="font-display font-black text-[clamp(72px,11vw,148px)] leading-[0.92] m-0 tracking-[0.04em] text-white"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
        >
          AI
        </motion.h1>
      </div>

      {/* ACADEMY — typewriter */}
      <div className="overflow-hidden mb-10">
        <h1
          className="font-display font-black text-[clamp(72px,11vw,148px)] leading-[0.92] m-0 tracking-[0.04em]"
          style={{ color: "#10B981" }}
        >
          <TypewriterText text="ACADEMY" speed={80} delay={600} cursor={true} />
        </h1>
      </div>

      <motion.div
        className="w-12 h-[2px] mb-8"
        style={{ background: "linear-gradient(90deg, #10B981, #06B6D4)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <FadeIn delay={1.4}>
        <p className="font-display text-[clamp(15px,1.8vw,20px)] text-text-secondary max-w-[480px] leading-relaxed m-0">
          A bi-weekly class to make AI part of how we work — not a tool we reach
          for when stuck.
        </p>
      </FadeIn>

      <FadeIn delay={1.6}>
        <div className="absolute right-[8vw] bottom-[8vh] font-mono text-[10px] text-text-ghost tracking-[0.12em]">
          SESSION 01
        </div>
      </FadeIn>
    </div>
  );
}
