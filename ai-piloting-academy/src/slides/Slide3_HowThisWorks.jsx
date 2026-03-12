const COLOR_MAP = {
  'neon-cyan': '#00f0ff',
  'neon-purple': '#a855f7',
  'neon-pink': '#f472b6',
}

export default function Slide3_HowThisWorks({ active }) {
  if (!active) return null

  const steps = [
    { time: '15 min', label: 'Lesson', desc: 'Core concept + live walkthrough', color: 'neon-cyan' },
    { time: '15 min', label: 'Live Demo', desc: 'Watch it in action, ask questions', color: 'neon-purple' },
    { time: '30 min', label: 'Hands-On', desc: 'You build it yourself — right now', color: 'neon-pink' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[100px] pointer-events-none" />

      <h1 className="font-heading font-bold text-[clamp(2rem,5vw,4rem)] leading-tight mb-4 animate-fade-in-up stagger-1">
        <span className="text-white">How This </span>
        <span className="gradient-text">Works</span>
      </h1>

      <p className="text-white/50 text-lg mb-12 animate-fade-in-up stagger-2">
        Every session follows the same rhythm
      </p>

      {/* Timeline */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 max-w-5xl w-full">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`flex-1 neon-card text-left relative animate-fade-in-up stagger-${i + 3}`}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{ backgroundColor: COLOR_MAP[s.color] }}
            />
            <p className="font-mono text-sm mb-2 mt-2" style={{ color: COLOR_MAP[s.color] }}>
              {s.time}
            </p>
            <h3 className="font-heading font-semibold text-2xl text-white mb-2">{s.label}</h3>
            <p className="text-white/50">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4 animate-fade-in-up stagger-6">
        <div className="neon-card !py-3 !px-5 text-sm flex items-center gap-3">
          <span className="text-2xl">&#127968;</span>
          <div className="text-left">
            <p className="text-white font-medium">Homework</p>
            <p className="text-white/40 text-xs">Practice between sessions</p>
          </div>
        </div>
        <span className="text-neon-cyan/40">&#10132;</span>
        <div className="neon-card !py-3 !px-5 text-sm flex items-center gap-3">
          <span className="text-2xl">&#127908;</span>
          <div className="text-left">
            <p className="text-white font-medium">Present</p>
            <p className="text-white/40 text-xs">Show what you built</p>
          </div>
        </div>
      </div>
    </div>
  )
}
