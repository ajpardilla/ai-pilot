import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S01_Title() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const lines = containerRef.current.querySelectorAll('.title-line')
    gsap.fromTo(
      lines,
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        duration: 1.2,
        stagger: 0.25,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.fromTo(
      containerRef.current.querySelectorAll('.fade-in'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  return (
    <section data-section className="section" ref={containerRef}>
      <div className="flex flex-col items-center text-center">
        <p className="section-tag fade-in">UNICITY &middot; PRODUCT &amp; DESIGN &middot; AI ACADEMY</p>
        <div className="mt-6">
          <h1 className="title-line display text-[clamp(3rem,8vw,7rem)] italic" style={{ color: 'var(--color-muted)' }}>
            Unicity
          </h1>
          <h1 className="title-line display text-[clamp(4rem,12vw,10rem)] text-white">
            AI
          </h1>
          <h1 className="title-line display text-[clamp(4rem,12vw,10rem)]" style={{ color: 'var(--color-lime)' }}>
            ACADEMY
          </h1>
        </div>
        <p className="body-text mt-8 max-w-[48ch] text-center fade-in">
          A bi-weekly class to make AI part of how we work — not a tool we reach for when stuck.
        </p>
        <p className="mono text-[0.7rem] tracking-widest mt-16 fade-in" style={{ color: 'var(--color-ghost)' }}>
          SESSION 01
        </p>
      </div>
    </section>
  )
}
