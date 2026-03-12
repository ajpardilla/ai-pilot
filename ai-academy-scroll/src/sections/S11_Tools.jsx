import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const tools = [
  {
    letter: 'C',
    name: 'Claude',
    description: 'The conversational interface. Good for thinking, writing, brainstorming, and one-off tasks.',
    example: "Draft a stakeholder email. Analyze a competitor. Summarize a doc. This is where most people start \u2014 and stop.",
    color: '#CCFF00',
  },
  {
    letter: 'W',
    name: 'Cowork',
    description: 'Claude with agency. It can browse, read files, use your apps, and work across tools on your desktop.',
    example: "Research 5 competitors, pull data from your Drive, and draft a comparison matrix \u2014 all in one workflow.",
    color: '#00D4FF',
  },
  {
    letter: 'CC',
    name: 'Claude Code',
    description: 'The command line power tool. Full access to your codebase, terminal, and file system. Built for builders.',
    example: "Scaffold a React app, debug a Supabase RLS policy, refactor a module \u2014 with full project context.",
    color: '#FF5C00',
  },
]

export default function S11_Tools() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelectorAll('.tool-col'),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="w-full max-w-6xl">
        <p className="section-tag">SESSION 01 &middot; THE TOOLS</p>
        <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white mb-14">
          Three tools. Three use cases.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tools.map((tool, i) => (
            <div key={i} className="tool-col">
              <span className="display text-[4rem]" style={{ color: tool.color, lineHeight: 1 }}>
                {tool.letter}
              </span>
              <h3 className="display text-xl text-white mt-4 mb-3">{tool.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {tool.description}
              </p>
              <p className="mono text-xs mt-4 leading-relaxed" style={{ color: tool.color, opacity: 0.7 }}>
                {tool.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
