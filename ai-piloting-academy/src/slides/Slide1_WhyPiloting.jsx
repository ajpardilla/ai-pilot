export default function Slide1_WhyPiloting({ active }) {
  if (!active) return null
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      {/* Decorative glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <p className="text-neon-cyan/70 font-mono text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up stagger-1">
        The Future of Product Management
      </p>

      <h1 className="font-heading font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] mb-8 animate-fade-in-up stagger-2">
        <span className="gradient-text">AI Pilots</span>
      </h1>

      <div className="max-w-3xl space-y-6 animate-fade-in-up stagger-3">
        <p className="text-white/60 text-xl leading-relaxed">
          AI agents can research, code, design, write, and execute.
        </p>
        <p className="text-white/60 text-xl leading-relaxed">
          The future PM doesn't just manage products — they
          <span className="gradient-text font-semibold text-2xl"> pilot agents</span> to build them.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-8 animate-fade-in-up stagger-4">
        <div className="flex flex-col items-center gap-3 opacity-40">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
            &#128172;
          </div>
          <span className="text-sm text-white/40 font-mono">Prompting</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-12 h-[2px] bg-gradient-to-r from-white/10 to-neon-cyan/50" />
          <span className="text-neon-cyan text-2xl animate-pulse-glow">&#10132;</span>
          <div className="w-12 h-[2px] bg-gradient-to-r from-neon-cyan/50 to-neon-purple/50" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-3xl glow-box">
            &#9992;&#65039;
          </div>
          <span className="text-sm text-neon-cyan font-mono font-medium">Piloting</span>
        </div>
      </div>
    </div>
  )
}
