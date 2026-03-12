import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S10_WhatIsLLM() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('.section-tag'),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    )
    gsap.fromTo(
      ref.current.querySelector('h2'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )
    gsap.fromTo(
      ref.current.querySelector('.body-text'),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section
      data-section
      className="section justify-end"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, var(--color-base) 60%, rgba(255,92,0,0.06) 100%)' }}
    >
      <div className="max-w-2xl text-right mr-[4vw]">
        <p className="section-tag text-right">SESSION 01 &middot; THE BASICS</p>
        <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] text-white">
          What is an LLM?
        </h2>
        <p className="body-text mt-8 ml-auto text-right">
          A Large Language Model is a prediction engine trained on massive amounts of text. It doesn't "think" — it predicts the most likely next word based on everything it's seen. That's why context matters so much. The more relevant information you give it, the better its predictions become. Claude, ChatGPT, Gemini — they're all LLMs. Different models, same core idea.
        </p>
      </div>
    </section>
  )
}
