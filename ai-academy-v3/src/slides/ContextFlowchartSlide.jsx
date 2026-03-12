import { motion } from "framer-motion";
import Tag, { resolveAccent } from "../components/Tag.jsx";
import { FadeIn } from "../components/AnimatedText.jsx";

function LevelRow({ label, color, claudeDesc, skills, skillsDesc, path, delay }) {
  return (
    <motion.div
      className="p-4 rounded-md"
      style={{
        background: `${color}0D`,
        border: `1px solid ${color}28`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 22, delay }}
    >
      <div className="font-display font-bold text-sm tracking-tight mb-0.5" style={{ color }}>
        {label}
      </div>
      <div className="font-mono text-[8px] text-text-ghost mb-2">{path}</div>
      <div className="flex gap-2">
        <div
          className="flex-1 p-3 rounded"
          style={{ background: `${color}0D`, border: `1px solid ${color}33` }}
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
          style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${color}33` }}
        >
          <div className="font-mono text-[8px] tracking-[0.12em] mb-1" style={{ color }}>
            SKILLS
          </div>
          <div className="flex flex-wrap gap-1 mb-1">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className="font-mono text-[7.5px] tracking-[0.1em] px-1.5 py-0.5 rounded-sm"
                style={{ color, border: `1px solid ${color}44` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.15 + i * 0.06 }}
              >
                {s}
              </motion.div>
            ))}
          </div>
          <div className="font-display text-[9px] text-text-muted leading-snug">
            {skillsDesc}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContextFlowchartSlide({ slide }) {
  const accent = resolveAccent(slide.accent);

  return (
    <div className="flex h-full p-[2.5vh_5vw] gap-[3.5vw]">
      {/* Left text */}
      <div className="flex-[0_0_28%] flex flex-col justify-center">
        <Tag color={slide.accent}>{slide.label}</Tag>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-bold text-[clamp(24px,3vw,40px)] text-white m-0 mb-5 tracking-tight">
            {slide.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="font-display text-xs text-text-secondary leading-relaxed m-0">
            {slide.description}
          </p>
        </FadeIn>
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
          delay={0.2}
        />

        {/* Connector lines — animate like data flowing */}
        <motion.div
          className="flex justify-center gap-20 py-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {slide.projects.map((_, i) => (
            <motion.div
              key={i}
              className="w-px"
              style={{ background: `${accent}44` }}
              initial={{ height: 0 }}
              animate={{ height: 16 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
            />
          ))}
        </motion.div>

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
                delay={0.45 + i * 0.1}
              />
            </div>
          ))}
        </div>

        {/* Merge */}
        <motion.div
          className="text-center py-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <motion.div
            className="font-mono text-[8px] text-text-ghost tracking-[0.15em]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ▼ MERGED AT RUNTIME ▼
          </motion.div>
        </motion.div>

        <motion.div
          className="p-3 rounded-md text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="font-display font-bold text-[13px] text-white tracking-tight mb-0.5">
            CLAUDE'S FULL CONTEXT
          </div>
          <div className="font-display text-[10px] text-text-muted text-center">
            {slide.mergeDesc}
          </div>
        </motion.div>

        <motion.div
          className="text-center py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="font-display font-bold text-lg text-emerald"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            +
          </motion.div>
        </motion.div>

        <motion.div
          className="p-3 rounded-md text-center"
          style={{
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.3)",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <div className="font-display font-bold text-[13px] text-emerald tracking-tight mb-0.5">
            YOUR PROMPT
          </div>
          <div className="font-display text-[10px] text-text-muted text-center">
            {slide.promptDesc}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
