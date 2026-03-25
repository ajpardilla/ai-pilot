import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

export default function ContextInActionSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex h-full p-[2.5vh_4vw] gap-[3vw]">
      {/* Left: steps */}
      <div className="flex-[0_0_52%] flex flex-col">
        <div className="mb-2.5">
          <Tag color={slide.accent}>{slide.label}</Tag>
          <h2
            className="font-display font-bold text-[clamp(22px,2.5vw,36px)] text-white m-0 mb-1.5 tracking-tight"
            style={fade(on, 0.1)}
          >
            {slide.headline}
          </h2>
          <div
            className="font-display text-xs text-text-secondary mb-2"
            style={fade(on, 0.15)}
          >
            {slide.scenario}
          </div>
        </div>

        {/* Prompt */}
        <div
          className="p-3 rounded mb-2.5"
          style={{
            ...fade(on, 0.2),
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          <div className="font-mono text-[8px] text-emerald tracking-[0.15em] mb-1">YOUR PROMPT</div>
          <div className="font-mono text-[11px] text-white leading-snug">{slide.prompt}</div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-1.5 flex-1">
          {slide.steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-2.5 p-2 rounded-sm"
              style={{
                ...fade(on, 0.25 + i * 0.08),
                borderLeft: `3px solid ${step.color}`,
                background: `${step.color}0D`,
              }}
            >
              <div className="text-base shrink-0 mt-0.5">{step.icon}</div>
              <div>
                <div
                  className="font-mono text-[8px] tracking-[0.12em] mb-0.5"
                  style={{ color: step.color }}
                >
                  {step.label}
                </div>
                <div className="font-display text-[10.5px] text-text-secondary leading-snug">
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-1.5" style={fade(on, 0.65)}>
          <div className="font-mono text-[8px] text-text-ghost tracking-[0.15em]">
            ▶ OUTPUT ▶
          </div>
        </div>
      </div>

      {/* Right: output */}
      <div className="flex-1 flex flex-col">
        <div
          className="flex-1 flex flex-col rounded overflow-hidden"
          style={{
            ...fade(on, 0.55),
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #10B981",
          }}
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
              <div
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
              >
                {line || "\u00A0"}
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-2.5 p-3"
          style={{
            ...fade(on, 0.75),
            borderLeft: "3px solid #10B981",
            background: "rgba(16,185,129,0.04)",
          }}
        >
          <div className="font-display text-[13px] text-text-secondary leading-relaxed italic">
            {slide.punchline}
          </div>
        </div>
      </div>
    </div>
  );
}
