export default function Slide7_Homework({ active }) {
  if (!active) return null

  const requirements = [
    { icon: '&#128196;', text: 'SKILL.md with proper frontmatter', detail: 'name, description, user-invocable' },
    { icon: '&#128218;', text: 'At least one supporting file', detail: 'reference.md, examples, or scripts' },
    { icon: '&#9889;', text: 'Working /invoke command', detail: 'Test it before you present' },
    { icon: '&#127908;', text: 'Demo in 2 weeks', detail: 'Show the team what you built' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[100px] pointer-events-none" />

      <div className="inline-flex items-center gap-2 bg-neon-pink/10 border border-neon-pink/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up stagger-1">
        <span className="text-neon-pink font-mono text-sm font-medium">Homework</span>
      </div>

      <h1 className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-3 animate-fade-in-up stagger-2">
        <span className="text-white">Build Your </span>
        <span className="gradient-text-warm">First Skill</span>
      </h1>

      <p className="text-white/50 text-lg mb-10 max-w-2xl animate-fade-in-up stagger-3">
        Create a skill that helps with <em>your</em> daily work.
        <br />
        Think: what do you do repeatedly that AI could streamline?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
        {requirements.map((r, i) => (
          <div
            key={i}
            className={`neon-card flex items-start gap-4 text-left animate-fade-in-up stagger-${i + 4}`}
          >
            <div
              className="text-2xl shrink-0 mt-0.5"
              dangerouslySetInnerHTML={{ __html: r.icon }}
            />
            <div>
              <p className="text-white font-medium text-sm">{r.text}</p>
              <p className="text-white/40 text-xs mt-1">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 neon-card !bg-neon-cyan/5 !border-neon-cyan/20 max-w-3xl animate-fade-in-up stagger-7">
        <p className="text-white/60 text-sm">
          <span className="text-neon-cyan font-mono font-medium">Ideas:</span>{' '}
          PR review checklist &middot; Sprint email generator &middot; Bug report formatter
          &middot; Design feedback template &middot; Release notes writer
        </p>
      </div>
    </div>
  )
}
