import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S09_CoreInsight() {
  const ref = useRef(null)

  useGSAP(() => {
    const words = ref.current.querySelectorAll('.reveal-word')
    gsap.fromTo(
      words,
      { opacity: 0.1 },
      {
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.fromTo(
      ref.current.querySelector('.body-text'),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
  })

  const headline = 'The prompt is the product.'

  return (
    <section data-section className="section" ref={ref}>
      <div className="text-center max-w-3xl">
        <p className="section-tag">SESSION 01 &middot; THE CORE IDEA</p>
        <h2 className="display text-[clamp(2.5rem,6vw,5rem)]">
          {headline.split(' ').map((w, i) => (
            <span key={i} className="reveal-word inline-block mr-[0.25em]" style={{ color: i >= 3 ? '#CCFF00' : 'white' }}>
              {w}
            </span>
          ))}
        </h2>
        <p className="body-text mt-8 mx-auto text-center">
          Bad input, bad output. Every time. The quality of what AI gives you is a direct reflection of the quality of what you give it. Most people never figure this out.
        </p>
      </div>
    </section>
  )
}
