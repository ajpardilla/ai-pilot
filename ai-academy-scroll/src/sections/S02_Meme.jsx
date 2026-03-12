import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S02_Meme() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('img'),
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.to(ref.current.querySelector('img'), {
      y: -30,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    })
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="flex items-center justify-center">
        <img
          src={import.meta.env.BASE_URL + 'meme.jpg'}
          alt="Designer, Developer, PM meme — everyone thinks AI replaces the others"
          className="max-h-[75vh] max-w-[90vw] rounded-lg object-contain"
        />
      </div>
    </section>
  )
}
