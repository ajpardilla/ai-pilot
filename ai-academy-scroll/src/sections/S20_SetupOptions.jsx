import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const options = [
  {
    letter: 'VS',
    name: 'VS Code + Claude Extension',
    description: 'The familiar IDE with Claude built in. Best for people already in VS Code who want AI assist without switching tools.',
    example: "Benefits: zero learning curve if you're in VS Code, inline code suggestions, chat sidebar with file context, and you stay in one window. Good starting point for non-engineers on the team.",
    color: '#00D4FF',
  },
  {
    letter: 'CX',
    name: 'Codex (OpenAI / ChatGPT)',
    description: "OpenAI's coding agent. If you're already in the ChatGPT ecosystem, Codex is your path to agentic coding with GPT models.",
    example: "Benefits: familiar if you use ChatGPT daily, strong at multi-file scaffolding and debugging, growing ecosystem of GPTs and plugins. Some of you are already here \u2014 that's fine. The principles we teach (context, skills, rituals) apply to any AI tool.",
    color: '#CCFF00',
  },
  {
    letter: 'CD',
    name: 'Claude Desktop + Claude Code',
    description: 'The native Claude app for chat and Cowork, paired with Claude Code in your terminal for full power.',
    example: "Benefits: deepest integration with CLAUDE.md and skills, Cowork can browse and use desktop apps, Claude Code has full terminal and file system access. This is the most powerful setup if you want to go all-in.",
    color: '#FF5C00',
  },
]

export default function S20_SetupOptions() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelectorAll('.option-col'),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section
      data-section
      className="section"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, var(--color-base) 60%, rgba(155,109,255,0.06) 100%)' }}
    >
      <div className="w-full max-w-6xl">
        <p className="section-tag">SESSION 01 &middot; CHOOSE YOUR SETUP</p>
        <h2 className="display text-[clamp(1.8rem,3.5vw,3rem)] text-white mb-14">
          Three ways to work with Claude or ChatGPT.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {options.map((opt, i) => (
            <div key={i} className="option-col">
              <span className="display text-[3.5rem]" style={{ color: opt.color, lineHeight: 1 }}>
                {opt.letter}
              </span>
              <h3 className="display text-lg text-white mt-4 mb-3">{opt.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {opt.description}
              </p>
              <p className="mono text-xs mt-4 leading-relaxed" style={{ color: opt.color, opacity: 0.7 }}>
                {opt.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
