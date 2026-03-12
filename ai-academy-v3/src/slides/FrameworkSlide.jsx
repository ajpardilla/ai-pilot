import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";
import GlassPanel from "../components/GlassPanel.jsx";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer.jsx";

export default function FrameworkSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[8vw]">
      <Tag color={slide.accent}>{slide.label}</Tag>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] text-white m-0 mb-10 tracking-tight whitespace-pre-line">
          {slide.headline}
        </h2>
      </FadeIn>

      <StaggerContainer className="flex gap-3" stagger={0.1} delayChildren={0.2}>
        {slide.ingredients.map((item, i) => (
          <StaggerItem key={i} className="flex-1">
            <GlassPanel
              topAccent={accent}
              hover3d
              glowColor={accent}
              className="p-6 relative overflow-hidden h-full"
            >
              {/* Background letter */}
              <div
                className="absolute top-2 right-3 font-display font-black text-[56px] leading-none opacity-[0.08]"
                style={{ color: accent }}
              >
                {item.letter}
              </div>

              <motion.div
                className="font-display font-black text-[44px] leading-none mb-3"
                style={{ color: accent }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.3 + i * 0.12,
                }}
              >
                {item.letter}
              </motion.div>

              <div className="font-display font-semibold text-lg text-white tracking-tight mb-3">
                {item.name}
              </div>

              <div className="font-display text-xs text-text-secondary leading-relaxed mb-4">
                {item.desc}
              </div>

              <div
                className="font-mono text-[10.5px] text-text-muted leading-relaxed pl-3"
                style={{ borderLeft: `2px solid ${accent}44` }}
              >
                {item.example}
              </div>
            </GlassPanel>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
