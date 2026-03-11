export default function Slide6_Skills({ active }) {
  if (!active) return null

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[120px] pointer-events-none" />

      <h1 className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-3 animate-fade-in-up stagger-1">
        <span className="gradient-text">Skills</span>
        <span className="text-white"> Architecture</span>
      </h1>

      <p className="text-white/50 text-lg mb-8 max-w-2xl animate-fade-in-up stagger-2">
        Reusable prompt templates you invoke with{' '}
        <code className="text-neon-cyan font-mono bg-neon-cyan/10 px-1.5 py-0.5 rounded">/skillname</code>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* File structure */}
        <div className="code-block animate-fade-in-up stagger-3 !text-[clamp(0.65rem,1.2vw,0.85rem)]">
          <p className="text-neon-cyan/60 font-mono text-xs uppercase tracking-wider mb-3">
            Directory Structure
          </p>
          <div className="space-y-1">
            <p><span className="code-path">.claude/skills/</span></p>
            <p><span className="code-path">  my-skill/</span></p>
            <p><span className="code-command">    SKILL.md</span> <span className="code-comment">      # Instructions (required)</span></p>
            <p><span className="text-white/40">    reference.md</span> <span className="code-comment">  # Detailed docs</span></p>
            <p><span className="text-white/40">    examples/</span> <span className="code-comment">     # Sample outputs</span></p>
            <p><span className="text-white/40">    scripts/</span> <span className="code-comment">      # Helper scripts</span></p>
          </div>
        </div>

        {/* SKILL.md format */}
        <div className="code-block animate-fade-in-up stagger-4 !text-[clamp(0.65rem,1.2vw,0.85rem)]">
          <p className="text-neon-purple/60 font-mono text-xs uppercase tracking-wider mb-3">
            SKILL.md Format
          </p>
          <div className="space-y-1">
            <p><span className="code-comment">---</span></p>
            <p><span className="code-keyword">name</span><span className="text-white/40">: </span><span className="code-string">my-skill</span></p>
            <p><span className="code-keyword">description</span><span className="text-white/40">: </span><span className="code-string">What this does</span></p>
            <p><span className="code-keyword">user-invocable</span><span className="text-white/40">: </span><span className="code-string">true</span></p>
            <p><span className="code-comment">---</span></p>
            <p className="mt-2"><span className="code-comment"># Instructions in markdown</span></p>
            <p><span className="text-white/60">When invoked, do this:</span></p>
            <p><span className="text-white/60">1. Step one</span></p>
            <p><span className="text-white/60">2. Step two</span></p>
          </div>
        </div>
      </div>

      {/* Invocation example */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up stagger-5">
        <div className="neon-card !py-3 !px-5">
          <p className="text-white/40 text-xs font-mono mb-1">Invoke</p>
          <p className="font-mono text-neon-cyan">/my-skill <span className="text-white/40">args</span></p>
        </div>
        <div className="neon-card !py-3 !px-5 !border-neon-purple/20">
          <p className="text-white/40 text-xs font-mono mb-1">Global Skills</p>
          <p className="font-mono text-neon-purple text-sm">~/.claude/skills/</p>
        </div>
        <div className="neon-card !py-3 !px-5 !border-neon-pink/20">
          <p className="text-white/40 text-xs font-mono mb-1">Project Skills</p>
          <p className="font-mono text-neon-pink text-sm">.claude/skills/</p>
        </div>
      </div>
    </div>
  )
}
