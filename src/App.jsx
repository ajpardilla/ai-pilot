import { useState, useEffect, useCallback } from 'react'
import ParticleBackground from './components/ParticleBackground'
import SlideNav from './components/SlideNav'
import Slide1_WhyPiloting from './slides/Slide1_WhyPiloting'
import Slide2_TheAcademy from './slides/Slide2_TheAcademy'
import Slide3_HowThisWorks from './slides/Slide3_HowThisWorks'
import Slide4_CommandCenter from './slides/Slide4_CommandCenter'
import Slide5_ClaudeMd from './slides/Slide5_ClaudeMd'
import Slide6_Skills from './slides/Slide6_Skills'
import Slide7_Homework from './slides/Slide7_Homework'
import Slide8_Closing from './slides/Slide8_Closing'
import './index.css'

const slides = [
  Slide1_WhyPiloting,
  Slide2_TheAcademy,
  Slide3_HowThisWorks,
  Slide4_CommandCenter,
  Slide5_ClaudeMd,
  Slide6_Skills,
  Slide7_Homework,
  Slide8_Closing,
]

export default function App() {
  const [current, setCurrent] = useState(1)
  const [direction, setDirection] = useState(0) // -1 back, 1 forward
  const total = slides.length

  const goTo = useCallback((n) => {
    if (n < 1 || n > total || n === current) return
    setDirection(n > current ? 1 : -1)
    setCurrent(n)
  }, [current, total])

  const next = useCallback(() => goTo(current + 1), [goTo, current])
  const prev = useCallback(() => goTo(current - 1), [goTo, current])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      }
      // Number keys for direct jump
      const num = parseInt(e.key)
      if (num >= 1 && num <= total) {
        goTo(num)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, goTo, total])

  // Touch support
  useEffect(() => {
    let startX = 0
    const handleTouchStart = (e) => { startX = e.touches[0].clientX }
    const handleTouchEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev()
      }
    }
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  return (
    <div className="w-full h-full relative animated-gradient-bg overflow-hidden">
      <ParticleBackground />

      {/* Slide container */}
      <div className="relative w-full h-full">
        {slides.map((SlideComponent, i) => {
          const isActive = i + 1 === current
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-500 ease-out ${
                isActive
                  ? 'opacity-100 translate-x-0 scale-100'
                  : i + 1 < current
                    ? 'opacity-0 -translate-x-8 scale-[0.98] pointer-events-none'
                    : 'opacity-0 translate-x-8 scale-[0.98] pointer-events-none'
              }`}
            >
              <SlideComponent active={isActive} />
            </div>
          )
        })}
      </div>

      <SlideNav
        current={current}
        total={total}
        onPrev={prev}
        onNext={next}
      />
    </div>
  )
}
