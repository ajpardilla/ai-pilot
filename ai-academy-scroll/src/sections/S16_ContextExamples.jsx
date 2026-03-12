import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const panels = [
  {
    title: 'Global CLAUDE.md',
    path: '~/.claude/CLAUDE.md',
    color: '#CCFF00',
    code: `# Who I Am
AJ Pardilla, Head of Product at Unicity International.
I lead 8 product teams across ecommerce, checkout,
mobile, CMS, and growth.

# Tone & Style
- Direct and executive. No fluff, no filler.
- Never use em dashes. Avoid generic AI phrasing.
- Write like I would — confident, specific, actionable.

# Rules
- Always ask clarifying questions before long tasks.
- Default to bullet points for internal comms.
- Include risks and tradeoffs, not just recommendations.`,
  },
  {
    title: 'Project CLAUDE.md',
    path: '~/projects/the-method/CLAUDE.md',
    color: '#00D4FF',
    code: `# The Method
Daily practice discipline app for goal-setting.
Expo SDK 54 / React Native / Supabase backend.

# Architecture
- File-based routing via expo-router v6
- Auth: Hydra OTP (NOT Supabase auth)
- State: React Context + TanStack Query
- AI: OpenAI GPT-4o for goal validation

# Current Sprint
- Morning/evening practice session flows
- Streak tracking + coin reward system
- Known bug: offline sync fails on practice submit`,
  },
  {
    title: 'Skill: ClickUp Ticket',
    path: '~/.claude/skills/clickup-ticket.md',
    color: '#FF5C00',
    code: `# Skill: Create ClickUp Ticket
Generate a ready-to-paste ClickUp task.

# User Story
As a [role], I want [action],
so that [outcome].

# Format
1. Title: verb + object (e.g. Fix login OTP flow)
2. User story (above format, always included).
3. Description: problem, expected behavior, steps.
4. Acceptance criteria: 3-5 checkboxes max.
5. Priority: Urgent / High / Normal / Low.
6. Estimate: T-shirt size (S / M / L / XL).

# Rules
- Never combine multiple bugs into one ticket.
- Always include a 'How to test' section.
- Tag the relevant team: FGF, Checkout, Growth.`,
  },
]

export default function S16_ContextExamples() {
  const ref = useRef(null)

  useGSAP(() => {
    const cols = ref.current.querySelectorAll('.code-col')
    cols.forEach((col) => {
      const lines = col.querySelectorAll('.code-line')
      gsap.fromTo(
        lines,
        { opacity: 0, x: 10 },
        {
          opacity: 1, x: 0, duration: 0.3, stagger: 0.03, ease: 'power2.out',
          scrollTrigger: { trigger: col, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      )
    })
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="w-full max-w-7xl">
        <p className="section-tag">SESSION 01 &middot; EXAMPLES</p>
        <h2 className="display text-[clamp(1.8rem,3.5vw,3rem)] text-white mb-10">
          What they look like in practice.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {panels.map((panel, i) => (
            <div key={i} className="code-col">
              <p className="mono text-xs mb-1" style={{ color: panel.color }}>{panel.title}</p>
              <p className="mono text-[0.6rem] mb-3" style={{ color: 'var(--color-ghost)' }}>{panel.path}</p>
              <div className="code-block text-[0.72rem] leading-relaxed">
                {panel.code.split('\n').map((line, j) => (
                  <div key={j} className="code-line">{line || '\u00A0'}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 py-4 px-6 rounded-lg" style={{ background: 'rgba(204,255,0,0.06)', borderLeft: '3px solid #CCFF00' }}>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            &#x26A1; These files grow with you. Every time you fix a bug, learn a pattern, or refine a process, add it to your CLAUDE.md or create a new skill. The more you build, the smarter Claude gets at your specific work.
          </p>
        </div>
        <p className="mono text-xs mt-4" style={{ color: 'var(--color-muted)' }}>
          In a world of agentic AI, prompting the same thing three times can produce three different results. CLAUDE.md and skills are what turn inconsistency into a repeatable, scalable system.
        </p>
      </div>
    </section>
  )
}
