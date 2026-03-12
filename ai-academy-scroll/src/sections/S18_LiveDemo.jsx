import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S18_LiveDemo() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('h2'),
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
    gsap.fromTo(
      ref.current.querySelector('.sub'),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="text-center">
        <h2 className="display text-[clamp(3rem,8vw,7rem)] text-white">
          Live Demo
        </h2>
        <p className="sub text-lg mt-4" style={{ color: 'var(--color-muted)' }}>
          Watch it happen in real time.
        </p>
        <p className="mono text-[0.6rem] tracking-widest mt-16" style={{ color: 'var(--color-ghost)' }}>
          UNICITY &middot; AI ACADEMY &middot; SESSION 01
        </p>
      </div>
    </section>
  )
}
