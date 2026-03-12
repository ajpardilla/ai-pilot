import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const items = [
  { num: '01', title: 'The prompt is the product', color: '#CCFF00' },
  { num: '02', title: 'The CRAFT framework', color: '#CCFF00' },
  { num: '03', title: 'Claude vs Cowork vs Claude Code', color: '#FF5C00' },
  { num: '04', title: 'CLAUDE.md & Skills', color: '#00D4FF' },
  { num: '05', title: 'Setting up your cockpit', color: '#9B6DFF' },
]

export default function S08_Agenda() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelectorAll('.agenda-item'),
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="max-w-3xl">
        <p className="section-tag">TODAY'S AGENDA</p>
        <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-white mb-12">
          What we're covering.
        </h2>
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div key={item.num} className="agenda-item flex items-baseline gap-6">
              <span className="mono text-sm" style={{ color: item.color }}>{item.num}</span>
              <span className="display text-[clamp(1.2rem,2.5vw,2rem)] text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
