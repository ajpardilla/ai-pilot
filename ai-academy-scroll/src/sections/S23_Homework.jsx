import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const items = [
  { tier: 'MUST DO', text: 'Pick a coding tool and have a working setup on your machine', color: '#CCFF00' },
  { tier: 'MUST DO', text: 'Create a global CLAUDE.md with your role, tone, and 3 rules', color: '#CCFF00' },
  { tier: 'MUST DO', text: '3 minutes to present \u2014 show your setup, your CLAUDE.md, and what you built with it', color: '#CCFF00' },
  { tier: 'STRETCH', text: 'Establish a shared repo of skills for your team \u2014 start collaborating on playbooks', color: '#00D4FF' },
  { tier: 'STRETCH', text: 'Come up with a personal project (Unicity or non-Unicity) you want to build with Claude or Codex', color: '#00D4FF' },
  { tier: 'STRETCH', text: 'Create your first pull request \u2014 prompt \u2192 code \u2192 commit \u2192 PR. It can be small. Go through the full cycle', color: '#00D4FF' },
  { tier: 'BONUS', text: 'Start in plan mode, clear the context window, then execute. Build a task ritual into your CLAUDE.md', color: '#9B6DFF' },
]

export default function S23_Homework() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelectorAll('.hw-item'),
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="max-w-3xl">
        <p className="section-tag">SESSION 01 &middot; HOMEWORK</p>
        <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white mb-3">
          This week's assignment.
        </h2>
        <p className="mono text-xs mb-2" style={{ color: '#CCFF00' }}>Present at Session 02</p>
        <p className="text-sm mb-10" style={{ color: 'var(--color-muted)' }}>
          Complete the must-do items below before Session 02. Stretch goals are optional but will put you ahead of the curve.
        </p>
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div key={i} className="hw-item flex items-start gap-4">
              <span
                className="mono text-[0.6rem] uppercase tracking-widest shrink-0 mt-1 px-2 py-0.5 rounded"
                style={{ color: item.color, border: `1px solid ${item.color}30` }}
              >
                {item.tier}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
