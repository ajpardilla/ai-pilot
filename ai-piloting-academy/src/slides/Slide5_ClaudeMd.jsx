export default function Slide5_ClaudeMd({ active }) {
  if (!active) return null

  const layers = [
    {
      path: '~/.claude/CLAUDE.md',
      label: 'Global',
      desc: 'Your personal preferences — applies to every project',
      color: '#a855f7',
      bgColor: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      path: './CLAUDE.md',
      label: 'Project',
      desc: 'Shared team standards — committed to git',
      color: '#00f0ff',
      bgColor: 'rgba(0, 240, 255, 0.1)',
      borderColor: 'rgba(0, 240, 255, 0.3)',
    },
    {
      path: '.claude/rules/*.md',
      label: 'Rules',
      desc: 'Organized rule files — split by topic or path',
      color: '#f472b6',
      bgColor: 'rgba(244, 114, 182, 0.1)',
      borderColor: 'rgba(244, 114, 182, 0.3)',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <h1 className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-3 animate-fade-in-up stagger-1">
        <span className="text-neon-cyan font-mono">CLAUDE.md</span>
        <span className="text-white"> Architecture</span>
      </h1>

      <p className="text-white/50 text-lg mb-10 max-w-2xl animate-fade-in-up stagger-2">
        Instruction files that tell Claude <em>how</em> to work in your project.
        <br />
        <span className="text-neon-cyan/70 font-medium">They stack — all files are loaded, not overwritten.</span>
      </p>

      {/* Hierarchy */}
      <div className="w-full max-w-3xl space-y-4">
        {layers.map((l, i) => (
          <div
            key={i}
            className={`neon-card text-left flex items-start gap-5 animate-fade-in-up stagger-${i + 3}`}
            style={{ borderColor: l.borderColor }}
          >
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: l.bgColor, border: `1px solid ${l.borderColor}` }}
            >
              <span className="font-heading font-bold text-lg" style={{ color: l.color }}>
                {i + 1}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <code
                  className="font-mono text-sm px-2 py-0.5 rounded"
                  style={{ color: l.color, backgroundColor: l.bgColor }}
                >
                  {l.path}
                </code>
                <span className="text-xs text-white/30 font-mono uppercase tracking-wider">{l.label}</span>
              </div>
              <p className="text-white/50 text-sm">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 neon-card !border-neon-cyan/20 max-w-3xl animate-fade-in-up stagger-6" style={{ backgroundColor: 'rgba(0, 240, 255, 0.03)' }}>
        <p className="text-white/60 text-sm">
          <span className="text-neon-cyan font-mono font-medium">Pro tip:</span>{' '}
          Claude walks <em>up</em> the directory tree and loads every CLAUDE.md it finds.
          Put personal prefs in global, team standards in project.
        </p>
      </div>
    </div>
  )
}
