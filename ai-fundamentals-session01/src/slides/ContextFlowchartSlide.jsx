import Tag, { resolveAccent } from "../components/Tag.jsx";
import { fade } from "../components/Animate.jsx";

function LevelRow({ label, color, claudeDesc, skills, skillsDesc, path, on, delay }) {
  return (
    <div
      className="p-4 rounded-md"
      style={{
        ...fade(on, delay),
        background: `${color}0D`,
        border: `1px solid ${color}28`,
      }}
    >
      <div className="font-display font-bold text-sm tracking-tight mb-0.5" style={{ color }}>
        {label}
      </div>
      <div className="font-mono text-[8px] text-text-ghost mb-2">{path}</div>
      <div className="flex gap-2">
        <div
          className="flex-1 p-3 rounded"
          style={{
            background: `${color}0D`,
            border: `1px solid ${color}33`,
          }}
        >
          <div className="font-mono text-[8px] tracking-[0.12em] mb-1" style={{ color }}>
            CLAUDE.MD
          </div>
          <div className="font-display text-[10px] text-text-muted leading-snug">
            {claudeDesc}
          </div>
        </div>
        <div
          className="flex-1 p-3 rounded"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${color}33`,
          }}
        >
          <div className="font-mono text-[8px] tracking-[0.12em] mb-1" style={{ color }}>
            SKILLS
          </div>
          <div className="flex flex-wrap gap-1 mb-1">
            {skills.map((s, i) => (
              <div
                key={i}
                className="font-mono text-[7.5px] tracking-[0.1em] px-1.5 py-0.5 rounded-sm"
                style={{ color, border: `1px solid ${color}44` }}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="font-display text-[9px] text-text-muted leading-snug">
            {skillsDesc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContextFlowchartSlide({ slide, on }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex h-full p-[2.5vh_5vw] gap-[3.5vw]">
      {/* Left text */}
      <div className="flex-[0_0_28%] flex flex-col justify-center">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <h2
          className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 mb-5 tracking-tight"
          style={fade(on, 0.1)}
        >
          {slide.headline}
        </h2>
        <p
          className="font-display text-xs text-text-secondary leading-relaxed m-0"
          style={fade(on, 0.25)}
        >
          {slide.description}
        </p>
      </div>

      {/* Right flowchart */}
      <div className="flex-1 flex flex-col justify-center gap-0">
        <LevelRow
          label="GLOBAL"
          color={accent}
          path="~/.claude/"
          claudeDesc={slide.global.desc}
          skills={slide.global.skills}
          skillsDesc={slide.global.skillsDesc}
          on={on}
          delay={0.2}
        />

        {/* Connector */}
        <div
          className="flex justify-center gap-20 py-0.5"
          style={fade(on, 0.35)}
        >
          {slide.projects.map((_, i) => (
            <div key={i} className="w-px h-4" style={{ background: `${accent}44` }} />
          ))}
        </div>

        {/* Projects */}
        <div className="flex gap-2.5">
          {slide.projects.map((proj, i) => (
            <div key={i} className="flex-1">
              <LevelRow
                label={proj.name}
                color={proj.color}
                path={`./${proj.name.toLowerCase().replace(/\s+/g, "-")}/`}
                claudeDesc={proj.desc}
                skills={proj.skills}
                skillsDesc={proj.skillsDesc}
                on={on}
                delay={0.4 + i * 0.08}
              />
            </div>
          ))}
        </div>

        {/* Merge */}
        <div className="text-center py-1.5" style={fade(on, 0.55)}>
          <div className="font-mono text-[8px] text-text-ghost tracking-[0.15em]">
            ▼ MERGED AT RUNTIME ▼
          </div>
        </div>

        <div
          className="p-3 rounded-md text-center"
          style={{
            ...fade(on, 0.6),
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div className="font-display font-bold text-[13px] text-white tracking-tight mb-0.5">
            CLAUDE'S FULL CONTEXT
          </div>
          <div className="font-display text-[10px] text-text-muted text-center">
            {slide.mergeDesc}
          </div>
        </div>

        <div className="text-center py-1" style={fade(on, 0.65)}>
          <div className="font-display font-bold text-lg text-emerald">+</div>
        </div>

        <div
          className="p-3 rounded-md text-center"
          style={{
            ...fade(on, 0.7),
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.3)",
          }}
        >
          <div className="font-display font-bold text-[13px] text-emerald tracking-tight mb-0.5">
            YOUR PROMPT
          </div>
          <div className="font-display text-[10px] text-text-muted text-center">
            {slide.promptDesc}
          </div>
        </div>
      </div>
    </div>
  );
}
