import { motion } from "framer-motion";
import { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function QASlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-[10vw]">
      <motion.div
        className="font-display font-light italic text-[clamp(56px,9vw,128px)] text-white m-0 mb-6 leading-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
      >
        {slide.headline}
      </motion.div>

      <motion.div
        className="w-12 h-[3px] mb-7"
        style={{ background: `linear-gradient(90deg, ${accent}, #06B6D4)` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <FadeIn delay={0.55}>
        <div className="font-display text-[clamp(16px,2vw,22px)] text-text-secondary">
          {slide.sub}
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <div className="absolute bottom-10 font-mono text-[10px] text-text-ghost tracking-[0.18em]">
          UNICITY · AI ACADEMY · SESSION 01
        </div>
      </FadeIn>
    </div>
  );
}
