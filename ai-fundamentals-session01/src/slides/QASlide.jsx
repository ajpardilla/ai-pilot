import { fade } from "../components/Animate.jsx";
import { resolveAccent } from "../components/Tag.jsx";

export default function QASlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-[10vw]">
      <div
        className="font-display font-light italic text-[clamp(56px,9vw,128px)] text-white m-0 mb-6 leading-none"
        style={fade(on, 0.1)}
      >
        {slide.headline}
      </div>

      <div
        className="w-12 h-[3px] mb-7"
        style={{
          ...fade(on, 0.3),
          background: `linear-gradient(90deg, ${accent}, #06B6D4)`,
        }}
      />

      <div
        className="font-display text-[clamp(16px,2vw,22px)] text-text-secondary"
        style={fade(on, 0.45)}
      >
        {slide.sub}
      </div>

      <div
        className="absolute bottom-10 font-mono text-[10px] text-text-ghost tracking-[0.18em]"
        style={fade(on, 0.6)}
      >
        UNICITY · AI ACADEMY · SESSION 01
      </div>
    </div>
  );
}
