import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function CountUp({ target, className = '' }) {
  const ref = useRef(null)

  useGSAP(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        ref.current.textContent = Math.round(obj.val).toLocaleString()
      },
    })
  })

  return <span ref={ref} className={className}>0</span>
}
