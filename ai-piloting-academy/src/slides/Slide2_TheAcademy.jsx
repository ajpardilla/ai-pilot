export default function Slide2_TheAcademy({ active }) {
  if (!active) return null

  const features = [
    { icon: '&#128197;', label: 'Bi-Weekly Sessions', desc: '1 hour every two weeks' },
    { icon: '&#129309;', label: 'Accountability Pairs', desc: 'Partner up, push each other' },
    { icon: '&#128200;', label: 'Level Up Together', desc: 'The whole team grows' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <p className="text-neon-purple/70 font-mono text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up stagger-1">
        Welcome to
      </p>

      <h1 className="font-heading font-bold text-[clamp(2rem,6vw,4.5rem)] leading-tight mb-4 animate-fade-in-up stagger-2">
        <span className="text-white">The </span>
        <span className="gradient-text">Academy</span>
      </h1>

      <p className="text-white/50 text-lg max-w-2xl mb-12 animate-fade-in-up stagger-3">
        A structured program to transform how our team works with AI.
        No one gets left behind.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {features.map((f, i) => (
          <div
            key={i}
            className={`neon-card flex flex-col items-center gap-4 animate-fade-in-up stagger-${i + 4}`}
          >
            <div
              className="text-4xl"
              dangerouslySetInnerHTML={{ __html: f.icon }}
            />
            <h3 className="font-heading font-semibold text-lg text-white">{f.label}</h3>
            <p className="text-white/50 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
