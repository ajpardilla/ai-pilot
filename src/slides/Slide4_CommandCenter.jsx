export default function Slide4_CommandCenter({ active }) {
  if (!active) return null

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <p className="text-neon-cyan/70 font-mono text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up stagger-1">
        Lesson 1
      </p>

      <h1 className="font-heading font-bold text-[clamp(2rem,5vw,4rem)] leading-tight mb-3 animate-fade-in-up stagger-2">
        <span className="text-white">Your AI </span>
        <span className="gradient-text">Command Center</span>
      </h1>

      <p className="text-white/50 text-lg mb-10 max-w-2xl animate-fade-in-up stagger-3">
        Claude Code is your AI pair programmer — it lives in your terminal
        and understands your entire codebase.
      </p>

      {/* Install commands */}
      <div className="w-full max-w-3xl space-y-4 text-left">
        <div className="animate-fade-in-up stagger-4">
          <p className="text-neon-cyan/60 font-mono text-xs uppercase tracking-wider mb-2 ml-1">
            &#9733; Recommended Install
          </p>
          <div className="code-block">
            <span className="code-prompt">$ </span>
            <span className="code-command">curl</span>
            <span className="code-flag"> -fsSL</span>
            <span className="code-string"> https://claude.ai/install.sh</span>
            <span className="text-white/40"> | </span>
            <span className="code-command">bash</span>
          </div>
        </div>

        <div className="animate-fade-in-up stagger-5">
          <p className="text-white/30 font-mono text-xs uppercase tracking-wider mb-2 ml-1">
            Alternative: Homebrew
          </p>
          <div className="code-block">
            <span className="code-prompt">$ </span>
            <span className="code-command">brew</span>
            <span className="code-keyword"> install</span>
            <span className="code-flag"> --cask</span>
            <span className="code-string"> claude-code</span>
          </div>
        </div>

        <div className="animate-fade-in-up stagger-6">
          <p className="text-white/30 font-mono text-xs uppercase tracking-wider mb-2 ml-1">
            Verify Installation
          </p>
          <div className="code-block flex items-center justify-between">
            <div>
              <span className="code-prompt">$ </span>
              <span className="code-command">claude</span>
              <span className="code-flag"> --version</span>
            </div>
            <span className="text-neon-green/60 text-sm">&#10003; You're ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}
