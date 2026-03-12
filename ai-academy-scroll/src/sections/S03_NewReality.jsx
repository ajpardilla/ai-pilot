import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S03_NewReality() {
  const ref = useRef(null)

  useGSAP(() => {
    const tag = ref.current.querySelector('.section-tag')
    const words = ref.current.querySelectorAll('.word')
    const body = ref.current.querySelector('.body-text')

    gsap.fromTo(tag, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
    gsap.fromTo(words, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
    })
    gsap.fromTo(body, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
    })
  })

  const headline = 'Everyone can do everyone\'s job.'

  return (
    <section data-section className="section" ref={ref}>
      <div className="max-w-3xl">
        <p className="section-tag">THE NEW REALITY</p>
        <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white">
          {headline.split(' ').map((w, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">{w}</span>
          ))}
        </h2>
        <p className="body-text mt-8">
          AI is dissolving the boundaries between design, development, and product management. Designers can code. Developers can write specs. PMs can build entire products. The roles aren't disappearing — but the lines between them are. The people who thrive won't be the ones who protect their territory. They'll be the ones who expand it.
        </p>
      </div>
    </section>
  )
}
