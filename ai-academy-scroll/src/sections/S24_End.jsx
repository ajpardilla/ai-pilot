import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S24_End() {
  const ref = useRef(null)

  useGSAP(() => {
    const h2 = ref.current.querySelector('h2')
    gsap.fromTo(
      h2,
      { opacity: 0 },
      {
        opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    )
    // Breathing glow
    gsap.to(h2, {
      textShadow: '0 0 60px rgba(204,255,0,0.4), 0 0 120px rgba(204,255,0,0.15)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="text-center">
        <h2 className="display text-[clamp(4rem,12vw,10rem)]" style={{ color: '#CCFF00' }}>
          END
        </h2>
      </div>
    </section>
  )
}
