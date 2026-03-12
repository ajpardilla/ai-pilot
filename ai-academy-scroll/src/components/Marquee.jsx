import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Marquee({ text, color = '#CCFF00', size = '6rem', speed = 40 }) {
  const trackRef = useRef(null)

  useGSAP(() => {
    const track = trackRef.current
    const width = track.scrollWidth / 2
    gsap.to(track, {
      x: -width,
      duration: speed,
      ease: 'none',
      repeat: -1,
    })
  })

  const repeated = Array(6).fill(text)

  return (
    <div className="overflow-hidden w-full">
      <div ref={trackRef} className="marquee-track">
        {repeated.map((t, i) => (
          <span key={i} style={{ color, fontSize: size }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
