import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S22_QA() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('h2'),
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="text-center">
        <h2 className="display text-[clamp(3rem,8vw,7rem)] text-white">
          Questions?
        </h2>
        <p className="text-lg mt-4" style={{ color: 'var(--color-muted)' }}>
          Let's talk about it.
        </p>
        <p className="mono text-[0.6rem] tracking-widest mt-16" style={{ color: 'var(--color-ghost)' }}>
          UNICITY &middot; AI ACADEMY &middot; SESSION 01
        </p>
      </div>
    </section>
  )
}
