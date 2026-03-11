export default function Slide8_Closing({ active }) {
  if (!active) return null

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      {/* Multiple glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

      <div className="text-7xl mb-8 animate-float animate-fade-in-up stagger-1">
        &#9992;&#65039;
      </div>

      <h1 className="font-heading font-bold text-[clamp(2rem,6vw,4.5rem)] leading-tight mb-8 animate-fade-in-up stagger-2">
        <span className="text-white">You're Learning to </span>
        <span className="gradient-text">Pilot</span>
      </h1>

      <div className="max-w-2xl animate-fade-in-up stagger-3">
        <blockquote className="relative">
          <div className="absolute -top-4 -left-2 text-5xl text-neon-cyan/20 font-serif">&ldquo;</div>
          <p className="text-white/70 text-xl italic leading-relaxed pl-6">
            The best time to learn AI was yesterday.
            <br />
            The second best time is <span className="text-neon-cyan font-medium not-italic">right now</span>.
          </p>
        </blockquote>
      </div>

      <div className="mt-16 space-y-3 animate-fade-in-up stagger-4">
        <p className="text-white/30 text-sm font-mono">Next session in 2 weeks</p>
        <div className="flex items-center gap-4 justify-center">
          <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow" />
          <p className="text-white/50 text-sm">Install Claude Code &middot; Build your skill &middot; Come ready to demo</p>
          <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse-glow" />
        </div>
      </div>

      <div className="mt-12 animate-fade-in-up stagger-5">
        <p className="text-white/20 text-xs font-mono">
          AI Piloting Academy &middot; Unicity International &middot; 2025
        </p>
      </div>
    </div>
  )
}
