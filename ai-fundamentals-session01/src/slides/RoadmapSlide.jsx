import Tag from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

export default function RoadmapSlide({ slide, on }) {
  return (
    <div className="flex flex-col justify-center h-full px-[10vw]">
      <Tag>{slide.label}</Tag>

      <h2
        className="font-display font-bold text-[clamp(32px,4vw,52px)] text-white m-0 mb-12 tracking-tight"
        style={fade(on, 0.1)}
      >
        {slide.headline}
      </h2>

      <div className="flex flex-col">
        {slide.sessions.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-8 py-5"
            style={{
              ...fade(on, 0.15 + i * 0.09),
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.15em] min-w-[32px]"
              style={{ color: s.color }}
            >
              {s.num}
            </div>
            <div className="flex-1 font-display font-bold text-[clamp(20px,2.5vw,32px)] text-white tracking-tight">
              {s.title}
            </div>
            <div
              className="w-2 h-2 rounded-full opacity-60"
              style={{ background: s.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
