import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function TipsTricksSlide({ slide }) {
  const [activeTip, setActiveTip] = useState(0);
  const tip = slide.tips[activeTip];

  return (
    <div className="flex h-full p-[3vh_5vw] gap-[3vw]">
      {/* Left */}
      <div className="flex-[0_0_45%] flex flex-col">
        <div className="mb-4">
          <Tag color={slide.accent}>{slide.label}</Tag>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 tracking-tight">
              {slide.headline}
            </h2>
          </FadeIn>
        </div>

        {/* Tip tabs */}
        <div className="flex flex-col gap-1.5 mb-5">
          {slide.tips.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTip(i)}
              className="flex items-center gap-3 px-4 py-3 rounded text-left cursor-pointer"
              style={{
                background: i === activeTip ? `${t.color}15` : "rgba(255,255,255,0.02)",
                border: `1px solid ${i === activeTip ? t.color + "44" : "rgba(255,255,255,0.06)"}`,
                borderLeft: `3px solid ${i === activeTip ? t.color : "transparent"}`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              whileHover={{ x: 4 }}
            >
              <div className="font-mono text-[10px] tracking-[0.12em] shrink-0" style={{ color: t.color }}>
                {t.num}
              </div>
              <div
                className="font-display font-bold text-[17px] tracking-tight"
                style={{ color: i === activeTip ? "#fff" : "rgba(255,255,255,0.4)" }}
              >
                {t.title}
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTip}
            className="font-display text-[13px] text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {tip.body}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right — AnimatePresence for tab transitions */}
      <div className="flex-1 flex flex-col relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTip}
            className="flex-1 flex flex-col absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {tip.example ? (
              <div
                className="flex-1 rounded overflow-hidden flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${tip.color}28`,
                  borderTop: `3px solid ${tip.color}`,
                }}
              >
                <div className="px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="font-mono text-[8px] tracking-[0.15em]" style={{ color: tip.color }}>
                    EXAMPLE: THE METHOD APP — CLAUDE.MD RITUAL
                  </div>
                </div>
                <div className="flex-1 px-3 py-3 overflow-auto">
                  {tip.example.map((line, j) => (
                    <motion.div
                      key={j}
                      className="font-mono text-[10px] leading-relaxed"
                      style={{
                        color: line.startsWith("##")
                          ? tip.color
                          : line.startsWith("  ")
                          ? "rgba(16,185,129,0.7)"
                          : line.startsWith("-") || line.match(/^\d\./)
                          ? "rgba(255,255,255,0.55)"
                          : line === ""
                          ? "transparent"
                          : "rgba(255,255,255,0.4)",
                        fontWeight: line.startsWith("##") ? 700 : 400,
                      }}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.03 }}
                    >
                      {line || "\u00A0"}
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="flex-1 flex flex-col justify-center items-center rounded-lg p-8"
                style={{
                  background: `${tip.color}0A`,
                  border: `1px solid ${tip.color}22`,
                }}
              >
                <motion.div
                  className="font-display font-black text-[clamp(48px,8vw,96px)] leading-none opacity-15"
                  style={{ color: tip.color }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {tip.num}
                </motion.div>
                <div
                  className="font-display font-bold text-[clamp(28px,3.5vw,44px)] tracking-tight text-center mt-3"
                  style={{ color: tip.color }}
                >
                  {tip.title}
                </div>
                {activeTip === 0 && (
                  <motion.div
                    className="mt-6 p-4 rounded max-w-[360px]"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="font-mono text-[10px] text-text-muted tracking-[0.12em] mb-2">ADD TO YOUR CLAUDE.MD</div>
                    <div className="font-mono text-[11px] text-text-secondary leading-relaxed whitespace-pre-line">
                      {"Always start by creating a plan.\nOutline steps before executing.\nConfirm the plan with me first."}
                    </div>
                  </motion.div>
                )}
                {activeTip === 1 && (
                  <motion.div
                    className="mt-6 flex gap-3 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="p-3 rounded" style={{ background: "rgba(255,100,100,0.08)", border: "1px solid rgba(255,100,100,0.2)" }}>
                      <div className="font-mono text-[9px] tracking-[0.1em] mb-1" style={{ color: "rgba(255,100,100,0.6)" }}>MESSY CONTEXT</div>
                      <div className="font-mono text-[10px] text-text-muted whitespace-pre-line">{"Planning chat\nBack & forth\nDead ends\nNoise"}</div>
                    </div>
                    <motion.div
                      className="font-display font-bold text-2xl text-text-ghost"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                    <div className="p-3 rounded" style={{ background: "rgba(100,255,150,0.08)", border: "1px solid rgba(100,255,150,0.2)" }}>
                      <div className="font-mono text-[9px] tracking-[0.1em] mb-1" style={{ color: "rgba(100,255,150,0.6)" }}>CLEAN CONTEXT</div>
                      <div className="font-mono text-[10px] text-text-muted whitespace-pre-line">{"Fresh window\nJust the plan\nFocused execution"}</div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
