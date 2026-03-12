import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function ContextInActionSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex h-full p-[2.5vh_4vw] gap-[3vw]">
      {/* Left: steps */}
      <div className="flex-[0_0_52%] flex flex-col">
        <div className="mb-2.5">
          <Tag color={slide.accent}>{slide.label}</Tag>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(22px,2.5vw,36px)] text-white m-0 mb-1.5 tracking-tight">
              {slide.headline}
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="font-display text-xs text-text-secondary mb-2">
              {slide.scenario}
            </div>
          </FadeIn>
        </div>

        {/* Prompt */}
        <FadeIn delay={0.2}>
          <div
            className="p-3 rounded mb-2.5"
            style={{
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <div className="font-mono text-[8px] text-emerald tracking-[0.15em] mb-1">YOUR PROMPT</div>
            <div className="font-mono text-[11px] text-white leading-snug">{slide.prompt}</div>
          </div>
        </FadeIn>

        {/* Steps — sequential activation */}
        <div className="flex flex-col gap-1.5 flex-1">
          {slide.steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-2.5 p-2 rounded-sm"
              style={{
                borderLeft: `3px solid ${step.color}`,
                background: `${step.color}0D`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.3 + i * 0.15,
              }}
            >
              <motion.div
                className="text-base shrink-0 mt-0.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.35 + i * 0.15 }}
              >
                {step.icon}
              </motion.div>
              <div>
                <div className="font-mono text-[8px] tracking-[0.12em] mb-0.5" style={{ color: step.color }}>
                  {step.label}
                </div>
                <div className="font-display text-[10.5px] text-text-secondary leading-snug">
                  {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center py-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className="font-mono text-[8px] text-text-ghost tracking-[0.15em]"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ▶ OUTPUT ▶
          </motion.div>
        </motion.div>
      </div>

      {/* Right: output — types line by line */}
      <div className="flex-1 flex flex-col">
        <motion.div
          className="flex-1 flex flex-col rounded overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #10B981",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-mono text-[8px] text-emerald tracking-[0.15em] mb-1">
              CLAUDE'S OUTPUT
            </div>
            <div className="font-display font-semibold text-[15px] text-white tracking-tight">
              {slide.output.title}
            </div>
          </div>
          <div className="flex-1 px-3 py-2.5 overflow-auto">
            {slide.output.preview.map((line, i) => (
              <motion.div
                key={i}
                className="font-mono text-[10px] leading-relaxed"
                style={{
                  color: line.startsWith("☐")
                    ? "rgba(255,255,255,0.6)"
                    : line.startsWith("As a")
                    ? "rgba(255,255,255,0.7)"
                    : line === ""
                    ? "transparent"
                    : line.endsWith(":")
                    ? "#10B981"
                    : "rgba(255,255,255,0.45)",
                  fontWeight: line.endsWith(":") ? 700 : 400,
                  fontStyle: line.startsWith("As a") ? "italic" : "normal",
                }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
              >
                {line || "\u00A0"}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <FadeIn delay={1.8}>
          <div
            className="mt-2.5 p-3"
            style={{
              borderLeft: "3px solid #10B981",
              background: "rgba(16,185,129,0.04)",
            }}
          >
            <div className="font-display text-[13px] text-text-secondary leading-relaxed italic">
              {slide.punchline}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
