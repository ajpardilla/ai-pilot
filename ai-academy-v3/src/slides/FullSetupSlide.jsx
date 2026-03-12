import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

export default function FullSetupSlide({ slide }) {
  const [activeSection, setActiveSection] = useState(0);
  const section = slide.sections[activeSection];

  return (
    <div className="flex h-full p-[2.5vh_4.5vw] gap-[2.5vw]">
      {/* Left: tabs */}
      <div className="flex-[0_0_32%] flex flex-col">
        <div className="mb-3">
          <Tag color={slide.accent}>{slide.label}</Tag>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(22px,2.8vw,36px)] text-white m-0 mb-2.5 tracking-tight">
              {slide.headline}
            </h2>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="font-display text-[11px] text-text-secondary leading-relaxed m-0 mb-4">
              {slide.intro}
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-1.5">
          {slide.sections.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveSection(i)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded text-left cursor-pointer"
              style={{
                background: i === activeSection ? `${s.color}15` : "rgba(255,255,255,0.02)",
                border: `1px solid ${i === activeSection ? s.color + "44" : "rgba(255,255,255,0.06)"}`,
                borderLeft: `3px solid ${i === activeSection ? s.color : "transparent"}`,
              }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              whileHover={{ x: 3 }}
            >
              <div className="text-base shrink-0">{s.icon}</div>
              <div
                className="font-display font-bold text-[15px] tracking-tight"
                style={{ color: i === activeSection ? "#fff" : "rgba(255,255,255,0.4)" }}
              >
                {s.title}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right: detail — vertical slide transitions */}
      <div className="flex-1 flex flex-col relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="flex-1 flex flex-col rounded-lg overflow-hidden absolute inset-0"
            style={{
              background: `${section.color}0A`,
              border: `1px solid ${section.color}22`,
              borderTop: `3px solid ${section.color}`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="px-5 py-3" style={{ borderBottom: `1px solid ${section.color}18` }}>
              <div className="font-display font-bold text-lg tracking-tight" style={{ color: section.color }}>
                {section.icon} {section.title}
              </div>
            </div>

            <div className="flex-1 px-5 py-3.5 overflow-auto">
              <div className="flex flex-col gap-1.5">
                {section.items.map((item, j) => (
                  <motion.div
                    key={j}
                    className="flex gap-3 p-3 rounded"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + j * 0.06 }}
                  >
                    <div className="font-mono text-[10.5px] shrink-0" style={{ color: section.color }}>
                      ▸
                    </div>
                    <div>
                      <div className="font-display font-medium text-xs text-white mb-0.5">
                        {item.name}
                      </div>
                      <div className="font-mono text-[9.5px] text-text-muted leading-snug">
                        {item.note}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="px-5 py-3"
              style={{
                borderTop: `1px solid ${section.color}18`,
                background: `${section.color}0D`,
              }}
            >
              <div className="font-display text-[11.5px] text-text-secondary leading-relaxed italic">
                {section.callout}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
