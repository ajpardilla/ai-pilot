import { fade } from "../components/Animate.jsx";

export default function TitleSlide({ on }) {
  return (
    <div className="flex flex-col justify-center h-full px-[10vw]">
      <div
        className="font-mono text-[11px] tracking-[0.25em] text-emerald mb-6"
        style={fade(on, 0.05)}
      >
        UNICITY · PRODUCT & DESIGN · AI ACADEMY
      </div>

      <div className="overflow-hidden mb-2">
        <h1
          className="font-display font-light text-[clamp(48px,7vw,96px)] leading-[0.92] m-0 italic"
          style={{ ...fade(on, 0.15), color: "rgba(255,255,255,0.4)" }}
        >
          Unicity
        </h1>
      </div>

      <div className="overflow-hidden mb-1">
        <h1
          className="font-display font-black text-[clamp(72px,11vw,148px)] leading-[0.92] m-0 tracking-[0.04em] text-white"
          style={fade(on, 0.22)}
        >
          AI
        </h1>
      </div>

      <div className="overflow-hidden mb-10">
        <h1
          className="font-display font-black text-[clamp(72px,11vw,148px)] leading-[0.92] m-0 tracking-[0.04em]"
          style={{ ...fade(on, 0.28), color: "#10B981" }}
        >
          ACADEMY
        </h1>
      </div>

      <div
        className="w-12 h-[2px] mb-8"
        style={{ ...fade(on, 0.4), background: "linear-gradient(90deg, #10B981, #06B6D4)" }}
      />

      <p
        className="font-display text-[clamp(15px,1.8vw,20px)] text-text-secondary max-w-[480px] leading-relaxed m-0"
        style={fade(on, 0.5)}
      >
        A bi-weekly class to make AI part of how we work — not a tool we reach
        for when stuck.
      </p>

      <div
        className="absolute right-[8vw] bottom-[8vh] font-mono text-[10px] text-text-ghost tracking-[0.12em]"
        style={fade(on, 0.6)}
      >
        SESSION 01
      </div>
    </div>
  );
}
