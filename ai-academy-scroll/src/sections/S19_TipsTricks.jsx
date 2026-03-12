import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const tips = [
  {
    num: '01',
    title: 'Always start in Plan Mode',
    body: "Before Claude writes a single line of code or text, make it plan first. Tell it to outline the approach, list the steps, and confirm with you before executing. This catches bad assumptions early, saves you from re-doing work, and gives you a checkpoint to redirect. Think of it as a standup before the sprint.",
    code: `Always start by creating a plan.
Outline steps before executing.
Confirm the plan with me first.`,
  },
  {
    num: '02',
    title: 'Clear the context window after the plan',
    body: "Once Claude gives you a solid plan, start a fresh conversation and paste the plan in. Why? The planning conversation is full of back-and-forth, dead ends, and noise. A clean context window with just the plan means Claude executes with focus, not baggage. Plan dirty, execute clean.",
    visual: 'context',
  },
  {
    num: '03',
    title: 'Create a task ritual in your CLAUDE.md',
    body: "Define a repeatable process Claude must follow before, during, and after every task. This eliminates drift and keeps your project docs in sync automatically. Here's a real example from The Method app:",
    code: `## Start-of-Task Ritual
Before touching any code, read these four docs in order:
1. docs/PROJECT_MEMORY.md — current state of features
2. docs/WORKING_LOG.md — history of what's been done
3. docs/BUG_TRACKER.md — known bugs and status
4. docs/ROADMAP.md — what's planned and complete
No exceptions. No coding until all four are read.

## Post-Change Checks
After every code change, run:
  run biome
  run /quality-gate skill

## End-of-Task Ritual
Before committing (not after), update all four docs:
- WORKING_LOG.md — add entry for this session
- PROJECT_MEMORY.md — update changed features
- BUG_TRACKER.md — mark resolved, add new ones
- ROADMAP.md — check off completed items
Then commit everything together (code + docs).

## After Every Commit
Tell the user the pull command:
  git pull origin claude/BRANCH && npm run expo:static:build`,
  },
]

export default function S19_TipsTricks() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    // Intro
    tl.fromTo(
      innerRef.current.querySelector('.intro'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.2 }
    )

    tips.forEach((tip, i) => {
      const el = innerRef.current.querySelector(`[data-tip="${i}"]`)
      if (i > 0) {
        const prev = innerRef.current.querySelector(`[data-tip="${i - 1}"]`)
        tl.to(prev, { opacity: 0, x: -30, duration: 0.15 })
      } else {
        tl.to(innerRef.current.querySelector('.intro'), { opacity: 0.2, duration: 0.1 })
      }
      tl.fromTo(el, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.25 })
      tl.to({}, { duration: 0.2 })
    })
  })

  return (
    <section data-section ref={sectionRef} className="section relative" style={{ padding: 0 }}>
      <div ref={innerRef} className="w-full h-screen flex items-center justify-center relative overflow-hidden px-[6vw]">
        <div className="intro absolute top-[12vh] left-[6vw] z-10">
          <p className="section-tag">SESSION 01 &middot; TIPS &amp; TRICKS</p>
          <h2 className="display text-[clamp(1.8rem,3.5vw,3rem)] text-white">
            Three habits that change everything.
          </h2>
        </div>

        {tips.map((tip, i) => (
          <div
            key={i}
            data-tip={i}
            className="absolute inset-0 flex items-center justify-center opacity-0 px-[6vw] pt-[18vh]"
          >
            <div className="max-w-4xl w-full">
              <p className="mono text-sm mb-2" style={{ color: '#CCFF00' }}>TIP {tip.num}</p>
              <h3 className="display text-2xl text-white mb-4">{tip.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                {tip.body}
              </p>

              {tip.code && (
                <div className="code-block text-xs">{tip.code}</div>
              )}

              {tip.visual === 'context' && (
                <div className="flex items-center gap-6">
                  <div className="flex-1 rounded-lg p-4" style={{ background: 'rgba(255,92,0,0.08)', border: '1px solid rgba(255,92,0,0.2)' }}>
                    <p className="mono text-xs mb-2" style={{ color: '#FF5C00' }}>MESSY CONTEXT</p>
                    <ul className="text-xs space-y-1" style={{ color: 'var(--color-muted)' }}>
                      <li>Planning chat</li>
                      <li>Back &amp; forth</li>
                      <li>Dead ends</li>
                      <li>Noise</li>
                    </ul>
                  </div>
                  <span className="display text-2xl" style={{ color: '#CCFF00' }}>&rarr;</span>
                  <div className="flex-1 rounded-lg p-4" style={{ background: 'rgba(204,255,0,0.06)', border: '1px solid rgba(204,255,0,0.2)' }}>
                    <p className="mono text-xs mb-2" style={{ color: '#CCFF00' }}>CLEAN CONTEXT</p>
                    <ul className="text-xs space-y-1" style={{ color: 'var(--color-muted)' }}>
                      <li>Fresh window</li>
                      <li>Just the plan</li>
                      <li>Focused execution</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
