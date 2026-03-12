import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cards = [
  {
    letter: 'T',
    name: 'Taste',
    description: 'Knowing what good looks like — before it exists.',
    example: 'AI can generate 10 options. Only you know which one is right for your user.',
    color: '#CCFF00',
  },
  {
    letter: 'P',
    name: 'Perspective',
    description: 'The unique lens you bring from your role, your market, your customers.',
    example: "AI doesn't know your distributor in Bangkok is frustrated. You do.",
    color: '#00D4FF',
  },
  {
    letter: 'E',
    name: 'Experience',
    description: 'Pattern recognition built from years of shipping, failing, and learning.',
    example: "You've seen this feature fail before. AI hasn't.",
    color: '#FF5C00',
  },
  {
    letter: 'W',
    name: 'Wisdom',
    description: 'Lessons learned that no dataset contains.',
    example: 'Knowing when to push back, when to ship, and when to wait.',
    color: '#9B6DFF',
  },
]

export default function S04_HumanEdge() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useGSAP(() => {
    const section = sectionRef.current
    const inner = innerRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    // Intro: show tag and headline
    tl.fromTo(
      inner.querySelector('.intro'),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.3 }
    )

    cards.forEach((card, i) => {
      const el = inner.querySelector(`[data-card="${i}"]`)
      const letter = el.querySelector('.big-letter')
      const details = el.querySelector('.details')

      // Previous card fades
      if (i > 0) {
        const prev = inner.querySelector(`[data-card="${i - 1}"]`)
        tl.to(prev, { opacity: 0, scale: 0.8, duration: 0.2 })
      } else {
        tl.to(inner.querySelector('.intro'), { opacity: 0.3, y: -20, duration: 0.2 })
      }

      // Letter fills screen
      tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.1 })
      tl.fromTo(
        letter,
        { scale: 3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3 }
      )
      // Details fade in
      tl.fromTo(
        details,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.1'
      )
      // Hold
      tl.to({}, { duration: 0.2 })
    })
  })

  return (
    <section data-section ref={sectionRef} className="section relative" style={{ padding: 0 }}>
      <div ref={innerRef} className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <div className="intro absolute top-[15vh] left-[6vw] z-10">
          <p className="section-tag">THE HUMAN EDGE</p>
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white max-w-[20ch]">
            AI is the engine. You're the pilot.
          </h2>
        </div>

        {cards.map((card, i) => (
          <div
            key={i}
            data-card={i}
            className="absolute inset-0 flex items-center justify-center opacity-0"
          >
            <div className="flex flex-col items-center text-center px-8">
              <span
                className="big-letter display"
                style={{
                  fontSize: 'clamp(10rem, 30vw, 25rem)',
                  color: card.color,
                  lineHeight: 1,
                  opacity: 0.9,
                }}
              >
                {card.letter}
              </span>
              <div className="details mt-4 max-w-lg">
                <h3 className="display text-2xl text-white mb-3">{card.name}</h3>
                <p className="text-lg" style={{ color: 'var(--color-muted)' }}>
                  {card.description}
                </p>
                <p className="mono text-sm mt-4" style={{ color: card.color, opacity: 0.8 }}>
                  {card.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
