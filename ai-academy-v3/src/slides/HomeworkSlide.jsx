import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function HomeworkSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[10vw]">
      <Tag color={slide.accent}>{slide.label}</Tag>

      <FadeIn delay={0.1}>
        <h2 className="font-display font-bold text-[clamp(32px,4.5vw,60px)] text-white m-0 mb-2 tracking-tight">
          {slide.headline}
        </h2>
      </FadeIn>

      <FadeIn delay={0.18}>
        <div
          className="font-mono text-[11px] tracking-[0.15em] mb-9"
          style={{ color: accent }}
        >
          DUE: {slide.due.toUpperCase()}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div
          className="p-6 mb-7 max-w-[700px] rounded-md"
          style={{
            background: `${accent}15`,
            border: `1px solid ${accent}33`,
          }}
        >
          <div className="font-display text-base text-text-secondary leading-relaxed">
            {slide.assignment}
          </div>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-2.5 max-w-[700px]">
        {slide.rules.map((rule, i) => (
          <motion.div
            key={i}
            className="flex gap-3.5 items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.35 + i * 0.08,
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ background: accent }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08, type: "spring" }}
            />
            <div className="font-display text-sm text-text-secondary leading-relaxed">
              {rule}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
