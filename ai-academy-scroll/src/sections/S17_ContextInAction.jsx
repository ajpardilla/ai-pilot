import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const steps = [
  {
    icon: '\uD83E\uDEDF',
    title: 'CONTEXT WINDOW OPENS',
    body: "Every time you send a prompt, Claude gets a context window \u2014 a limited amount of space for everything it can \u201Csee.\u201D This includes your chat history (every message back and forth), your CLAUDE.md files, your skills, and any documents you point it to \u2014 like a plan doc or a spec. The more relevant context in the window, the better the output.",
  },
  {
    icon: '\uD83D\uDC64',
    title: 'GLOBAL CLAUDE.MD LOADS',
    body: "Claude now knows you're AJ, Head of Product. Tone: direct, executive. Rules: include risks, no fluff, ask clarifying questions on big tasks.",
  },
  {
    icon: '\uD83D\uDCC1',
    title: 'PROJECT CLAUDE.MD LOADS',
    body: 'Claude now knows this is Shop Checkout. Stack: Hydra, OrderCalc, Worldpay + Nuvei processors. Japan market uses PayPay and Apple Pay. Known issue: processor fallback logic in JP.',
  },
  {
    icon: '\u26A1',
    title: 'SKILL: CLICKUP TICKET ACTIVATES',
    body: "Claude follows the playbook: user story format, verb+object title, acceptance criteria as checkboxes, priority rating, t-shirt estimate, 'How to test' section, tagged to Checkout team.",
  },
  {
    icon: '\uD83D\uDCAC',
    title: 'YOUR PROMPT ENTERS THE WINDOW',
    body: "One sentence. But the context window is already loaded with your role, your project, and the format. Claude doesn't start from zero \u2014 it starts from everything you've built.",
  },
]

const output = `As a Japanese customer, I want to see the Apple Pay button on checkout, so that I can complete my purchase using my preferred payment method.

Description: Apple Pay button fails to render on the Japan checkout page. Likely related to the PayPay/Apple Pay coexistence logic in the JP processor config. Other markets unaffected.

Acceptance Criteria:
\u2610 Apple Pay button renders on JP checkout for eligible devices
\u2610 PayPay remains available as an alternative
\u2610 No regression on US/EU checkout flows

Priority: High \u00B7 Estimate: M \u00B7 Team: Checkout`

export default function S17_ContextInAction() {
  const ref = useRef(null)

  useGSAP(() => {
    const stepEls = ref.current.querySelectorAll('.step-item')
    stepEls.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      )
    })

    gsap.fromTo(
      ref.current.querySelector('.output-panel'),
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current.querySelector('.output-panel'), start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="w-full max-w-7xl">
        <p className="section-tag">SESSION 01 &middot; HOW IT ALL WORKS</p>
        <h2 className="display text-[clamp(1.8rem,3.5vw,3rem)] text-white mb-3">
          A real example, end to end.
        </h2>
        <p className="text-sm mb-2" style={{ color: 'var(--color-muted)' }}>
          You're in the Shop Checkout project. You type one sentence into Claude Code:
        </p>
        <div className="code-block text-sm mb-8 inline-block">
          Write a ClickUp ticket for the Apple Pay button not rendering on the Japan checkout page.
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Steps */}
          <div className="flex-1 flex flex-col gap-5">
            {steps.map((step, i) => (
              <div key={i} className="step-item flex gap-4 items-start">
                <span className="text-2xl shrink-0 mt-0.5">{step.icon}</span>
                <div>
                  <p className="mono text-xs font-semibold mb-1" style={{ color: '#CCFF00' }}>
                    {i + 1}. {step.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Output */}
          <div className="output-panel flex-1">
            <p className="mono text-xs mb-2 uppercase tracking-widest" style={{ color: '#CCFF00' }}>
              Claude's Output
            </p>
            <p className="mono text-xs mb-3" style={{ color: 'var(--color-muted)' }}>
              Fix Apple Pay button not rendering on JP checkout
            </p>
            <div className="code-block text-xs whitespace-pre-wrap">
              {output}
            </div>
            <p className="mono text-xs mt-4" style={{ color: '#CCFF00' }}>
              One sentence in. A fully formatted, project-aware, team-ready ticket out. That's what context does.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
