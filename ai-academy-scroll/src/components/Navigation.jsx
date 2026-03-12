import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TOTAL_SECTIONS = 24

export default function Navigation() {
  const [active, setActive] = useState(0)
  const navRef = useRef(null)

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const triggers = []

    sections.forEach((section, i) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        })
      )
    })

    return () => triggers.forEach((t) => t.kill())
  }, [])

  const scrollTo = (index) => {
    const sections = document.querySelectorAll('[data-section]')
    if (sections[index]) {
      gsap.to(window, {
        scrollTo: { y: sections[index], offsetY: 0 },
        duration: 1,
        ease: 'power3.inOut',
      })
    }
  }

  return (
    <nav
      ref={navRef}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1"
    >
      {Array.from({ length: TOTAL_SECTIONS }, (_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className="group relative flex items-center justify-center w-5 h-5 cursor-pointer"
          aria-label={`Go to section ${i + 1}`}
        >
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: active === i ? 8 : 4,
              height: active === i ? 8 : 4,
              backgroundColor: active === i ? '#CCFF00' : 'rgba(255,255,255,0.2)',
            }}
          />
        </button>
      ))}
      <span
        className="mt-3 font-mono text-[0.6rem] tracking-wider"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        {String(active + 1).padStart(2, '0')}/{TOTAL_SECTIONS}
      </span>
    </nav>
  )
}
