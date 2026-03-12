import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Marquee from '../components/Marquee'

const lines = [
  'One year from now,',
  "AI won't just assist.",
  'It will outperform',
  'most of your team.',
  'The edge goes to whoever',
  'pilots it best.',
]

export default function S05_Manifesto() {
  const ref = useRef(null)

  useGSAP(() => {
    const items = ref.current.querySelectorAll('.line-item')
    gsap.fromTo(
      items,
      { opacity: 0, x: (i) => (i % 2 === 0 ? -40 : 40) },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.fromTo(
      ref.current.querySelector('.footnote'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  return (
    <section data-section className="section flex-col gap-12" ref={ref}>
      <div className="w-full overflow-hidden opacity-[0.06] absolute top-[20%]">
        <Marquee text="THE FUTURE IS NOW" color="#CCFF00" size="8rem" speed={60} />
      </div>
      <div className="flex flex-col items-start max-w-4xl relative z-10">
        {lines.map((line, i) => (
          <span
            key={i}
            className="line-item display text-white"
            style={{
              fontSize: i === 2 || i === 5 ? 'clamp(2.5rem,5.5vw,4.5rem)' : 'clamp(2rem,4.5vw,3.5rem)',
              color: i === 2 || i === 5 ? '#CCFF00' : 'var(--color-text)',
              marginLeft: i % 2 === 1 ? '4vw' : '0',
            }}
          >
            {line}
          </span>
        ))}
      </div>
      <p className="footnote mono text-sm max-w-md" style={{ color: 'var(--color-muted)' }}>
        That's not a prediction. That's the trajectory.
      </p>
    </section>
  )
}
