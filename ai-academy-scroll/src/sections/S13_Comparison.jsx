import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S13_Comparison() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    const before = innerRef.current.querySelector('.before-panel')
    const after = innerRef.current.querySelector('.after-panel')
    const arrow = innerRef.current.querySelector('.arrow')

    // Start: before visible, after hidden
    tl.fromTo(before, { opacity: 1, scale: 1 }, { opacity: 0.25, scale: 0.95, duration: 0.4 })
    tl.fromTo(arrow, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.3 }, '-=0.2')
    tl.fromTo(
      after,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' }
    )
    tl.to({}, { duration: 0.3 })
  })

  return (
    <section data-section ref={sectionRef} className="section relative" style={{ padding: 0 }}>
      <div ref={innerRef} className="w-full h-screen flex flex-col items-center justify-center px-[6vw]">
        <div className="mb-8 text-center">
          <p className="section-tag">SESSION 01 &middot; THE PROOF</p>
          <h2 className="display text-[clamp(1.8rem,3.5vw,3rem)] text-white">
            Same task. Different prompt.
          </h2>
          <p className="mono text-sm mt-2" style={{ color: 'var(--color-muted)' }}>
            Write a ClickUp ticket for a broken feature.
          </p>
        </div>

        <div className="flex items-start gap-6 w-full max-w-6xl">
          {/* Before */}
          <div className="before-panel flex-1">
            <p className="mono text-xs mb-3 uppercase tracking-widest" style={{ color: '#FF5C00' }}>
              What most people type
            </p>
            <div className="code-block text-xs mb-4">
              Write a ClickUp ticket for the Apple Pay button not working in Japan.
            </div>
            <div className="code-block text-xs mb-3">
{`Title: Apple Pay Bug

Description: The Apple Pay button is not working on the Japan checkout page. Please fix this issue as it is affecting customers.

Priority: High`}
            </div>
            <p className="mono text-xs" style={{ color: '#FF5C00' }}>
              No user story. No acceptance criteria. No context. Could mean anything.
            </p>
          </div>

          {/* Arrow */}
          <div className="arrow flex items-center justify-center self-center" style={{ transformOrigin: 'left center' }}>
            <span className="display text-3xl" style={{ color: '#CCFF00' }}>&rarr;</span>
          </div>

          {/* After */}
          <div className="after-panel flex-1 opacity-0">
            <p className="mono text-xs mb-3 uppercase tracking-widest" style={{ color: '#CCFF00' }}>
              The CRAFT version
            </p>
            <div className="code-block text-xs mb-4">
{`You are a Head of Product writing a ClickUp ticket for the Checkout team.

Context: Apple Pay button fails to render on the Japan checkout page. Japan uses PayPay and Apple Pay via Nuvei processor. Other markets are unaffected.

Use our ticket format: user story, description, acceptance criteria (checkboxes), priority, t-shirt estimate, and a How to Test section.`}
            </div>
            <div className="code-block text-xs mb-3">
{`Title: Fix Apple Pay button not rendering on JP checkout

As a Japanese customer, I want to see the Apple Pay button on checkout, so that I can complete my purchase using my preferred payment method.

Description: Apple Pay fails to render on JP checkout. Likely related to PayPay/Apple Pay coexistence logic in Nuvei config.

Acceptance Criteria:
\u2610 Apple Pay renders on JP for eligible devices
\u2610 PayPay remains available
\u2610 No regression on US/EU flows

Priority: High \u00B7 Estimate: M \u00B7 Team: Checkout`}
            </div>
            <p className="mono text-xs" style={{ color: '#CCFF00' }}>
              User story. Clear scope. Testable criteria. Ready to assign.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
