import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer.jsx";

export default function ContextExamplesSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col h-full p-[3vh_5vw]">
      <div className="mb-3">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 tracking-tight">
            {slide.headline}
          </h2>
        </FadeIn>
      </div>

      <StaggerContainer className="flex gap-3 flex-1 min-h-0" stagger={0.12} delayChildren={0.15}>
        {slide.examples.map((ex, i) => (
          <StaggerItem key={i} className="flex-1 flex flex-col overflow-hidden rounded-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: `3px solid ${ex.color}`,
            }}
          >
            <div className="px-4 py-3 flex justify-between items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-display font-bold text-base tracking-tight" style={{ color: ex.color }}>
                {ex.title}
              </div>
              <div className="font-mono text-[9px] text-text-ghost">{ex.path}</div>
            </div>
            <div className="flex-1 px-4 py-3 overflow-auto">
              <CodeBlock
                lines={ex.lines}
                accentColor={ex.color}
                delay={300 + i * 200}
                typingSpeed={20}
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {slide.highlight && (
        <FadeIn delay={0.7}>
          <div
            className="mt-3 p-4 rounded flex gap-3 items-center"
            style={{
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <div className="font-display font-bold text-lg text-emerald shrink-0">⚡</div>
            <div className="font-display text-[13px] text-text-secondary leading-relaxed">
              {slide.highlight}
            </div>
          </div>
        </FadeIn>
      )}

      {slide.callout && (
        <FadeIn delay={0.8}>
          <div
            className="mt-2 p-3"
            style={{
              borderLeft: "3px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div className="font-display text-[13px] text-text-secondary leading-relaxed italic">
              {slide.callout}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
