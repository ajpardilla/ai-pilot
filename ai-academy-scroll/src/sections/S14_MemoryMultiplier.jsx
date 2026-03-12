import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S14_MemoryMultiplier() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('h2'),
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
    gsap.fromTo(
      ref.current.querySelector('.body-text'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section
      data-section
      className="section"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, var(--color-base) 60%, rgba(0,212,255,0.06) 100%)' }}
    >
      <div className="text-center max-w-3xl">
        <p className="section-tag">SESSION 01 &middot; PERSISTENT CONTEXT</p>
        <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white">
          Memory is the multiplier.
        </h2>
        <p className="body-text mt-8 mx-auto text-center">
          Every time you start a new conversation, Claude starts from zero. CLAUDE.md files and skills give it memory — who you are, how you work, what your standards are. This is the difference between an intern who just started and a teammate who's been here for a year.
        </p>
      </div>
    </section>
  )
}
