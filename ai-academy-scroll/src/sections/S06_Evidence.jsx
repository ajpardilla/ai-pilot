import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import CountUp from '../components/CountUp'

const quotes = [
  {
    who: 'Dario Amodei',
    role: 'CEO, Anthropic',
    quote: 'AI could eliminate 50% of entry-level white-collar jobs within 5 years. Unemployment could spike to 10\u201320%.',
    source: 'Axios, May 2025',
  },
  {
    who: 'Dario Amodei',
    role: 'CEO, Anthropic',
    quote: 'We might be 6\u201312 months away from AI doing everything software engineers do end-to-end.',
    source: 'World Economic Forum, Jan 2026',
  },
  {
    who: 'Mark Zuckerberg',
    role: 'CEO, Meta',
    quote: 'In 2025, we\u2019re going to have an AI that can effectively be a mid-level engineer at your company.',
    source: 'Joe Rogan Experience, Jan 2025',
  },
  {
    who: 'Sam Altman',
    role: 'CEO, OpenAI',
    quote: 'Today AI is like an intern. Soon it will be an experienced software engineer that can work for days.',
    source: 'Snowflake Summit, Jun 2025',
  },
  {
    who: 'Elon Musk',
    role: 'CEO, Tesla & xAI',
    quote: 'AI and robots will replace all jobs. Work will be optional, like growing your own vegetables.',
    source: 'U.S.\u2013Saudi Investment Forum, Nov 2025',
  },
]

export default function S06_Evidence() {
  const ref = useRef(null)

  useGSAP(() => {
    const items = ref.current.querySelectorAll('.quote-item')
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="w-full max-w-5xl">
        <p className="section-tag">WHAT THE BUILDERS ARE SAYING</p>
        <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white mb-12">
          This isn't speculation.
        </h2>

        <div className="flex flex-col gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="quote-item flex flex-col py-5"
              style={{
                borderBottom: '1px solid var(--color-ghost)',
                marginLeft: i % 2 === 0 ? '0' : 'auto',
                marginRight: i % 2 === 0 ? 'auto' : '0',
                maxWidth: '75%',
              }}
            >
              <p className="text-lg leading-relaxed text-white italic">
                "{q.quote}"
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="mono text-sm" style={{ color: '#CCFF00' }}>
                  {q.who}
                </span>
                <span style={{ color: 'var(--color-ghost)' }}>|</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {q.role}
                </span>
                <span style={{ color: 'var(--color-ghost)' }}>|</span>
                <span className="mono text-xs" style={{ color: 'var(--color-muted)' }}>
                  {q.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CountUp
            target={55000}
            className="display text-[4rem]"
            style={{ color: '#CCFF00' }}
          />
          <p className="text-lg mt-2" style={{ color: 'var(--color-muted)' }}>
            U.S. layoffs attributed to AI in 2025 alone
          </p>
          <p className="mono text-xs mt-1" style={{ color: 'var(--color-ghost)' }}>
            Challenger, Gray &amp; Christmas
          </p>
        </div>
      </div>
    </section>
  )
}
