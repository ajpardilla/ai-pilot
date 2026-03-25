import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

export default function ContextExamplesSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col h-full p-[3vh_5vw]">
      <div className="mb-3">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <h2
          className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 tracking-tight"
          style={fade(on, 0.1)}
        >
          {slide.headline}
        </h2>
      </div>

      <div className="flex gap-3 flex-1 min-h-0">
        {slide.examples.map((ex, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col overflow-hidden rounded-md"
            style={{
              ...fade(on, 0.15 + i * 0.1),
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
              {ex.lines.map((line, j) => (
                <div
                  key={j}
                  className="font-mono text-[10.5px] leading-relaxed"
                  style={{
                    color: line.startsWith("#")
                      ? ex.color
                      : line.startsWith("-")
                      ? "rgba(255,255,255,0.6)"
                      : line === ""
                      ? "transparent"
                      : "rgba(255,255,255,0.45)",
                    fontWeight: line.startsWith("#") ? 700 : 400,
                  }}
                >
                  {line || "\u00A0"}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {slide.highlight && (
        <div
          className="mt-3 p-4 rounded flex gap-3 items-center"
          style={{
            ...fade(on, 0.6),
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <div className="font-display font-bold text-lg text-emerald shrink-0">⚡</div>
          <div className="font-display text-[13px] text-text-secondary leading-relaxed">
            {slide.highlight}
          </div>
        </div>
      )}

      {slide.callout && (
        <div
          className="mt-2 p-3"
          style={{
            ...fade(on, 0.7),
            borderLeft: "3px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="font-display text-[13px] text-text-secondary leading-relaxed italic">
            {slide.callout}
          </div>
        </div>
      )}
    </div>
  );
}
