import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

function ComparisonBox({ data, isAfter, accent, delay }) {
  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isAfter ? 1 : 0.6,
        y: 0,
        scale: isAfter ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 22,
        delay,
      }}
    >
      <div
        className="font-mono text-[10px] tracking-[0.18em] mb-3"
        style={{ color: isAfter ? accent : "rgba(255,255,255,0.3)" }}
      >
        {data.label}
      </div>

      <motion.div
        className="flex-1 rounded-md overflow-hidden flex flex-col"
        style={{
          background: isAfter ? `${accent}0D` : "rgba(255,255,255,0.03)",
          border: `1px solid ${isAfter ? accent + "44" : "rgba(255,255,255,0.08)"}`,
        }}
        animate={
          isAfter
            ? { boxShadow: `0 0 40px ${accent}15` }
            : { filter: "brightness(0.7)" }
        }
        transition={{ delay: delay + 0.3, duration: 0.6 }}
      >
        <div
          className="px-4 py-3 font-mono text-[11px]"
          style={{
            borderBottom: `1px solid ${isAfter ? accent + "22" : "rgba(255,255,255,0.06)"}`,
            color: isAfter ? accent : "rgba(255,255,255,0.3)",
          }}
        >
          PROMPT
        </div>
        <div
          className="px-4 py-3 font-mono text-[11.5px] leading-relaxed whitespace-pre-wrap flex-1"
          style={{
            color: isAfter ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {data.prompt}
        </div>
        <div className="px-4 py-3 font-mono text-[10px] text-text-ghost" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          OUTPUT
        </div>
        <div
          className="px-4 py-3 font-display text-[13px] leading-relaxed whitespace-pre-wrap flex-1"
          style={{ color: isAfter ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)" }}
        >
          {data.output}
        </div>
        <div
          className="px-4 py-3 font-mono text-[10px] tracking-[0.08em]"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: isAfter ? accent : "rgba(255,255,255,0.25)",
          }}
        >
          {data.verdict}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ComparisonSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col h-full p-[4vh_8vw]">
      <div className="mb-5">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 mb-1 tracking-tight">
            {slide.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="font-mono text-[11px] text-text-muted">
            Task: {slide.task}
          </div>
        </FadeIn>
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        <ComparisonBox data={slide.before} isAfter={false} accent={accent} delay={0.2} />

        <motion.div
          className="flex items-center px-1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
        >
          <motion.div
            className="font-display font-bold text-[28px] text-text-ghost"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.div>

        <ComparisonBox data={slide.after} isAfter={true} accent={accent} delay={0.35} />
      </div>
    </div>
  );
}
