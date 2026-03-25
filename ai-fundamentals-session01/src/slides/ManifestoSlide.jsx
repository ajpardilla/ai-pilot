import { fade } from "../components/Animate.jsx";

export default function ManifestoSlide({ slide, on }) {
  return (
    <div className="flex flex-col justify-center h-full px-[10vw] max-w-[900px]">
      {slide.lines.map((line, i) => (
        <div
          key={i}
          className="font-display"
          style={{
            ...fade(on, 0.05 + i * 0.07),
            fontWeight: i % 2 === 0 ? 800 : 300,
            fontStyle: i % 2 !== 0 ? "italic" : "normal",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 1.08,
            color: i === 0 ? "#10B981" : "#fff",
          }}
        >
          {line}
        </div>
      ))}

      <div
        className="mt-10 font-mono text-[13px] text-text-muted tracking-[0.1em]"
        style={fade(on, 0.6)}
      >
        {slide.footnote}
      </div>
    </div>
  );
}
