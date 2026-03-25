import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

export default function HomeworkSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[10vw]">
      <Tag color={slide.accent}>{slide.label}</Tag>

      <h2
        className="font-display font-bold text-[clamp(32px,4.5vw,60px)] text-white m-0 mb-2 tracking-tight"
        style={fade(on, 0.1)}
      >
        {slide.headline}
      </h2>

      <div
        className="font-mono text-[11px] tracking-[0.15em] mb-9"
        style={{ ...fade(on, 0.18), color: accent }}
      >
        DUE: {slide.due.toUpperCase()}
      </div>

      <div
        className="p-6 mb-7 max-w-[700px] rounded-md"
        style={{
          ...fade(on, 0.25),
          background: `${accent}15`,
          border: `1px solid ${accent}33`,
        }}
      >
        <div className="font-display text-base text-text-secondary leading-relaxed">
          {slide.assignment}
        </div>
      </div>

      <div className="flex flex-col gap-2.5 max-w-[700px]">
        {slide.rules.map((rule, i) => (
          <div
            key={i}
            className="flex gap-3.5 items-start"
            style={fade(on, 0.35 + i * 0.07)}
          >
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ background: accent }}
            />
            <div className="font-display text-sm text-text-secondary leading-relaxed">
              {rule}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
