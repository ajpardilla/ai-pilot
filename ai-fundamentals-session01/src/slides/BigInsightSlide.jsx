import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

export default function BigInsightSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center h-full px-[10vw] max-w-[900px]">
      <Tag color={slide.accent}>{slide.label}</Tag>

      <h2
        className="font-display font-light text-[clamp(48px,8vw,104px)] leading-[0.95] text-white whitespace-pre-line m-0 mb-10 italic"
        style={fade(on, 0.15)}
      >
        {slide.headline}
      </h2>

      <div
        className="w-10 h-[3px] mb-7"
        style={{ ...fade(on, 0.35), background: accent }}
      />

      <p
        className="font-display text-[clamp(15px,1.8vw,20px)] text-text-secondary leading-relaxed max-w-[560px] m-0"
        style={fade(on, 0.45)}
      >
        {slide.body}
      </p>
    </div>
  );
}
