import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const letters = [
  {
    letter: 'C',
    name: 'Context',
    description: 'What does Claude need to know to do this well?',
    example: 'We launched a new checkout flow last week. Conversion dropped 2%.',
    color: '#CCFF00',
  },
  {
    letter: 'R',
    name: 'Role',
    description: 'Who is Claude in this conversation?',
    example: 'You are a senior PM writing for an executive audience.',
    color: '#00D4FF',
  },
  {
    letter: 'A',
    name: 'Action',
    description: 'Exactly what do you need done?',
    example: 'Write a root cause hypothesis with 3 possible explanations.',
    color: '#FF5C00',
  },
  {
    letter: 'F',
    name: 'Format',
    description: 'How should the output look?',
    example: 'Bullet points. Under 150 words. No headers.',
    color: '#FF2D7B',
  },
  {
    letter: 'T',
    name: 'Tone',
    description: "How should it sound? Who's the audience? What should it avoid?",
    example: "Write like a VP updating the CEO. Confident, not defensive. No jargon. No filler.",
    color: '#9B6DFF',
  },
]

export default function S12_CraftFramework() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useGSAP(() => {
    const section = sectionRef.current
    const inner = innerRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    // Intro
    tl.fromTo(
      inner.querySelector('.intro'),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.3 }
    )

    letters.forEach((item, i) => {
      const el = inner.querySelector(`[data-letter="${i}"]`)
      const bigChar = el.querySelector('.big-char')
      const info = el.querySelector('.info')

      if (i > 0) {
        const prev = inner.querySelector(`[data-letter="${i - 1}"]`)
        tl.to(prev, { opacity: 0, duration: 0.15 })
      } else {
        tl.to(inner.querySelector('.intro'), { opacity: 0.2, duration: 0.15 })
      }

      tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.05 })
      tl.fromTo(
        bigChar,
        { x: -200, opacity: 0, rotate: -10 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.3, ease: 'back.out(1.3)' }
      )
      tl.fromTo(
        info,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.25 },
        '-=0.1'
      )
      tl.to({}, { duration: 0.15 })
    })
  })

  return (
    <section data-section ref={sectionRef} className="section relative" style={{ padding: 0 }}>
      <div ref={innerRef} className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <div className="intro absolute top-[12vh] left-[6vw] z-10">
          <p className="section-tag">SESSION 01 &middot; THE FRAMEWORK</p>
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white">
            CRAFT your prompt.
          </h2>
        </div>

        {letters.map((item, i) => (
          <div
            key={i}
            data-letter={i}
            className="absolute inset-0 flex items-center justify-center opacity-0 px-8"
          >
            <div className="flex items-center gap-12 max-w-5xl">
              <span
                className="big-char display shrink-0"
                style={{
                  fontSize: 'clamp(10rem, 25vw, 22rem)',
                  color: item.color,
                  lineHeight: 1,
                }}
              >
                {item.letter}
              </span>
              <div className="info">
                <h3 className="display text-3xl text-white mb-2">
                  {item.letter} — {item.name}
                </h3>
                <p className="text-lg mb-4" style={{ color: 'var(--color-muted)' }}>
                  {item.description}
                </p>
                <p className="mono text-sm" style={{ color: item.color, opacity: 0.8 }}>
                  {item.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
