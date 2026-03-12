import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import CountUp from "../components/CountUp.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function EvidenceSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col h-full p-[3vh_6vw]">
      <div className="mb-4">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-bold text-[clamp(28px,3.5vw,44px)] text-white m-0 tracking-tight">
            {slide.headline}
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-auto">
        {slide.quotes.map((q, i) => (
          <motion.div
            key={i}
            className="flex gap-4 p-4 rounded-md"
            style={{
              borderLeft: `3px solid ${q.color}`,
              background: `${q.color}0D`,
            }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 22,
              delay: 0.15 + i * 0.09,
            }}
          >
            <div className="min-w-[120px] shrink-0">
              <div
                className="font-display font-bold text-base tracking-tight leading-tight"
                style={{ color: q.color }}
              >
                {q.who}
              </div>
              <div className="font-mono text-[9px] text-text-muted tracking-[0.08em] mt-0.5">
                {q.role}
              </div>
            </div>
            <div className="flex-1">
              <div className="font-display text-[13px] text-text-secondary leading-relaxed italic">
                &ldquo;{q.quote}&rdquo;
              </div>
              <div className="font-mono text-[9px] text-text-ghost tracking-[0.08em] mt-1.5">
                {q.source}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-baseline gap-4 mt-4 pt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div
          className="font-display font-black text-[clamp(36px,5vw,56px)] leading-none tracking-tight"
          style={{ color: accent }}
        >
          <CountUp target={slide.stat} duration={2000} />
        </div>
        <div>
          <div className="font-display text-[13px] text-text-secondary">
            {slide.statLabel}
          </div>
          <div className="font-mono text-[9px] text-text-ghost tracking-[0.08em] mt-0.5">
            {slide.statSource}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
