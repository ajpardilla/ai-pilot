import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Background() {
  const orbsRef = useRef(null)

  useGSAP(() => {
    const orbs = orbsRef.current.children
    gsap.to(orbs[0], {
      x: '20vw',
      y: '30vh',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 3,
      },
    })
    gsap.to(orbs[1], {
      x: '-15vw',
      y: '50vh',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 4,
      },
    })
    gsap.to(orbs[2], {
      x: '10vw',
      y: '-20vh',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5,
      },
    })
  })

  return (
    <>
      <div ref={orbsRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #CCFF00, transparent 70%)',
            top: '-10vh',
            left: '-10vw',
          }}
        />
        <div
          className="absolute w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #00D4FF, transparent 70%)',
            top: '40vh',
            right: '-15vw',
          }}
        />
        <div
          className="absolute w-[45vw] h-[45vw] rounded-full blur-[110px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #9B6DFF, transparent 70%)',
            bottom: '-10vh',
            left: '20vw',
          }}
        />
      </div>
      <div className="grain" />
      <div className="grid-overlay" />
    </>
  )
}
