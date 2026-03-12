import Tag, { resolveAccent } from "../components/Tag.jsx";
import { WordReveal, FadeIn } from "../components/AnimatedText.jsx";
import { motion } from "framer-motion";

export default function BigInsightSlide({ slide }) {
  const accent = resolveAccent(slide.accent);
  const lines = slide.headline.split("\n");

  return (
    <div className="flex flex-col justify-center h-full px-[10vw] max-w-[900px]">
      <Tag color={slide.accent}>{slide.label}</Tag>

      <div className="mb-10">
        {lines.map((line, i) => (
          <WordReveal
            key={i}
            text={line}
            className="font-display font-light text-[clamp(48px,8vw,104px)] leading-[0.95] text-white italic block"
            delay={0.15 + i * 0.2}
            stagger={0.05}
          />
        ))}
      </div>

      <motion.div
        className="w-10 h-[3px] mb-7"
        style={{ background: accent }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <FadeIn delay={0.6}>
        <p className="font-display text-[clamp(15px,1.8vw,20px)] text-text-secondary leading-relaxed max-w-[560px] m-0">
          {slide.body}
        </p>
      </FadeIn>
    </div>
  );
}
