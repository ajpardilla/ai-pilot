import { motion } from "framer-motion";
import { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer.jsx";

export default function CallToActionSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[8vw]">
      {/* Headline slams in */}
      <motion.h2
        className="font-display font-black text-[clamp(48px,7vw,96px)] m-0 mb-12 tracking-tight"
        style={{ color: accent }}
        initial={{ opacity: 0, scale: 1.15, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.08 }}
      >
        {slide.headline}
      </motion.h2>

      <StaggerContainer className="flex gap-4 mb-12" stagger={0.12} delayChildren={0.25}>
        {slide.blocks.map((b, i) => (
          <StaggerItem key={i} className="flex-1">
            <motion.div
              className="p-7 rounded-lg h-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderTop: `3px solid ${accent}`,
                transformStyle: "preserve-3d",
              }}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.3 + i * 0.15,
              }}
            >
              <motion.div
                className="text-[28px] mb-3"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {b.icon}
              </motion.div>
              <div className="font-display font-bold text-[22px] text-white tracking-tight mb-3">
                {b.title}
              </div>
              <div className="font-display text-[13.5px] text-text-secondary leading-relaxed">
                {b.body}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.8}>
        <div
          className="font-mono text-xs text-text-muted tracking-[0.06em] pl-5 max-w-[700px]"
          style={{ borderLeft: `3px solid ${accent}` }}
        >
          {slide.footnote}
        </div>
      </FadeIn>
    </div>
  );
}
