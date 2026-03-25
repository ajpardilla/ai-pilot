import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

function ComparisonBox({ data, isAfter, accent, on, delay }) {
  return (
    <div className="flex-1 flex flex-col" style={fade(on, delay)}>
      <div
        className="font-mono text-[10px] tracking-[0.18em] mb-3"
        style={{ color: isAfter ? accent : "rgba(255,255,255,0.3)" }}
      >
        {data.label}
      </div>

      <div
        className="flex-1 rounded-md overflow-hidden flex flex-col"
        style={{
          background: isAfter
            ? `${accent}0D`
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${isAfter ? accent + "44" : "rgba(255,255,255,0.08)"}`,
        }}
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
          style={{
            color: isAfter ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)",
          }}
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
      </div>
    </div>
  );
}

export default function ComparisonSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col h-full p-[4vh_8vw]">
      <div className="mb-5">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <h2
          className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 mb-1 tracking-tight"
          style={fade(on, 0.1)}
        >
          {slide.headline}
        </h2>
        <div
          className="font-mono text-[11px] text-text-muted"
          style={fade(on, 0.15)}
        >
          Task: {slide.task}
        </div>
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        <ComparisonBox data={slide.before} isAfter={false} accent={accent} on={on} delay={0.2} />
        <div className="flex items-center px-1">
          <div
            className="font-display font-bold text-[28px] text-text-ghost"
            style={fade(on, 0.3)}
          >
            →
          </div>
        </div>
        <ComparisonBox data={slide.after} isAfter={true} accent={accent} on={on} delay={0.3} />
      </div>
    </div>
  );
}
