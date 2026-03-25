import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

export default function FrameworkSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[8vw]">
      <Tag color={slide.accent}>{slide.label}</Tag>

      <h2
        className="font-display font-bold text-[clamp(28px,3.5vw,48px)] text-white m-0 mb-10 tracking-tight whitespace-pre-line"
        style={fade(on, 0.1)}
      >
        {slide.headline}
      </h2>

      <div className="flex gap-3">
        {slide.ingredients.map((item, i) => (
          <div
            key={i}
            className="flex-1 p-6 rounded-lg relative overflow-hidden"
            style={{
              ...fade(on, 0.15 + i * 0.08),
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderTop: `3px solid ${accent}`,
            }}
          >
            {/* Background letter */}
            <div
              className="absolute top-2 right-3 font-display font-black text-[56px] leading-none opacity-[0.08]"
              style={{ color: accent }}
            >
              {item.letter}
            </div>

            <div
              className="font-display font-black text-[44px] leading-none mb-3"
              style={{ color: accent }}
            >
              {item.letter}
            </div>

            <div className="font-display font-semibold text-lg text-white tracking-tight mb-3">
              {item.name}
            </div>

            <div className="font-display text-xs text-text-secondary leading-relaxed mb-4">
              {item.desc}
            </div>

            <div
              className="font-mono text-[10.5px] text-text-muted leading-relaxed pl-3"
              style={{ borderLeft: `2px solid ${accent}44` }}
            >
              {item.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
