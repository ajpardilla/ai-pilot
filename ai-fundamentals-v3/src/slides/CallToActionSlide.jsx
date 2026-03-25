import { fade } from "../components/Animate.jsx";
import { resolveAccent } from "../components/Tag.jsx";

export default function CallToActionSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[8vw]">
      <h2
        className="font-display font-black text-[clamp(48px,7vw,96px)] m-0 mb-12 tracking-tight"
        style={{ ...fade(on, 0.08), color: accent }}
      >
        {slide.headline}
      </h2>

      <div className="flex gap-4 mb-12">
        {slide.blocks.map((b, i) => (
          <div
            key={i}
            className="flex-1 p-7 rounded-lg"
            style={{
              ...fade(on, 0.2 + i * 0.1),
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderTop: `3px solid ${accent}`,
            }}
          >
            <div className="text-[28px] mb-3">{b.icon}</div>
            <div className="font-display font-bold text-[22px] text-white tracking-tight mb-3">
              {b.title}
            </div>
            <div className="font-display text-[13.5px] text-text-secondary leading-relaxed">
              {b.body}
            </div>
          </div>
        ))}
      </div>

      <div
        className="font-mono text-xs text-text-muted tracking-[0.06em] pl-5 max-w-[700px]"
        style={{
          ...fade(on, 0.6),
          borderLeft: `3px solid ${accent}`,
        }}
      >
        {slide.footnote}
      </div>
    </div>
  );
}
