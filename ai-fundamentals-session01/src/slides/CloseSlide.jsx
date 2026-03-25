import { fade } from "../components/Animate.jsx";

export default function CloseSlide({ slide, on }) {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-[10vw]">
      <h2
        className="font-display font-light italic text-[clamp(40px,7vw,96px)] text-white m-0 mb-7 leading-tight"
        style={fade(on, 0.1)}
      >
        {slide.headline}
      </h2>

      <div
        className="font-display font-bold text-[clamp(32px,5vw,64px)] text-emerald tracking-[0.08em]"
        style={fade(on, 0.3)}
      >
        {slide.sub}
      </div>

      <div
        className="absolute bottom-10 font-mono text-[10px] text-text-ghost tracking-[0.18em]"
        style={fade(on, 0.5)}
      >
        UNICITY · AI ACADEMY · SESSION 01
      </div>
    </div>
  );
}
