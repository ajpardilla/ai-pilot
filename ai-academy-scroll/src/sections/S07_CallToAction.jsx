import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const cards = [
  { icon: '\u23F1', title: 'Urgency', body: "The window to get ahead of this is closing. The people who learn to pilot AI now will lead. The ones who wait will catch up \u2014 or won't." },
  { icon: '\uD83D\uDCCB', title: 'Accountability', body: "Starting this year, AI knowledge will be a core part of your yearly reviews and position assessments. I'm building the assessment framework to properly measure where we are and where we need to be." },
  { icon: '\uD83E\uDD1D', title: 'Together', body: "My goal isn't to test you. It's to make sure every person in this room evolves. We do that by helping each other \u2014 sharing what works, what doesn't, and pushing each other forward." },
]

export default function S07_CallToAction() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('h2'),
      { opacity: 0, scale: 0.85, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )
    gsap.fromTo(
      ref.current.querySelectorAll('.cta-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section
      data-section
      className="section flex-col"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #1a0e0a 0%, var(--color-base) 100%)' }}
    >
      <div className="text-center max-w-5xl w-full">
        <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white mb-16">
          This is not optional.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <div key={i} className="cta-card text-left">
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="display text-xl text-white mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mono text-sm mt-16" style={{ color: 'var(--color-muted)' }}>
          We're not learning AI because it's interesting. We're learning it because our careers depend on it.
        </p>
      </div>
    </section>
  )
}
