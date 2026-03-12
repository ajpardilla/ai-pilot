import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import Background from './components/Background'
import Navigation from './components/Navigation'

import S01_Title from './sections/S01_Title'
import S02_Meme from './sections/S02_Meme'
import S03_NewReality from './sections/S03_NewReality'
import S04_HumanEdge from './sections/S04_HumanEdge'
import S05_Manifesto from './sections/S05_Manifesto'
import S06_Evidence from './sections/S06_Evidence'
import S07_CallToAction from './sections/S07_CallToAction'
import S08_Agenda from './sections/S08_Agenda'
import S09_CoreInsight from './sections/S09_CoreInsight'
import S10_WhatIsLLM from './sections/S10_WhatIsLLM'
import S11_Tools from './sections/S11_Tools'
import S12_CraftFramework from './sections/S12_CraftFramework'
import S13_Comparison from './sections/S13_Comparison'
import S14_MemoryMultiplier from './sections/S14_MemoryMultiplier'
import S15_ContextSystem from './sections/S15_ContextSystem'
import S16_ContextExamples from './sections/S16_ContextExamples'
import S17_ContextInAction from './sections/S17_ContextInAction'
import S18_LiveDemo from './sections/S18_LiveDemo'
import S19_TipsTricks from './sections/S19_TipsTricks'
import S20_SetupOptions from './sections/S20_SetupOptions'
import S21_FullSetup from './sections/S21_FullSetup'
import S22_QA from './sections/S22_QA'
import S23_Homework from './sections/S23_Homework'
import S24_End from './sections/S24_End'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh()

    let isAnimating = false
    let currentIndex = 0

    const getTargets = () => {
      const sections = document.querySelectorAll('[data-section]')
      return Array.from(sections)
    }

    const findCurrentIndex = () => {
      const sections = getTargets()
      const scrollY = window.scrollY + window.innerHeight / 2
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top + window.scrollY <= scrollY) {
          return i
        }
      }
      return 0
    }

    const goToSection = (index) => {
      const sections = getTargets()
      if (index < 0 || index >= sections.length || isAnimating) return
      isAnimating = true
      currentIndex = index
      gsap.to(window, {
        scrollTo: { y: sections[index], autoKill: false },
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          isAnimating = false
        },
      })
    }

    const onWheel = (e) => {
      // If inside a pinned section that's still scrubbing, let GSAP handle it
      const pinned = ScrollTrigger.getAll().filter(
        (st) => st.pin && st.isActive && st.progress > 0 && st.progress < 1
      )
      if (pinned.length > 0) return

      e.preventDefault()
      if (isAnimating) return
      currentIndex = findCurrentIndex()
      if (e.deltaY > 0) {
        goToSection(currentIndex + 1)
      } else if (e.deltaY < 0) {
        goToSection(currentIndex - 1)
      }
    }

    const onKeyDown = (e) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
        const pinned = ScrollTrigger.getAll().filter(
          (st) => st.pin && st.isActive && st.progress > 0 && st.progress < 1
        )
        if (pinned.length > 0) return

        e.preventDefault()
        if (isAnimating) return
        currentIndex = findCurrentIndex()
        goToSection(currentIndex + 1)
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        const pinned = ScrollTrigger.getAll().filter(
          (st) => st.pin && st.isActive && st.progress > 0 && st.progress < 1
        )
        if (pinned.length > 0) return

        e.preventDefault()
        if (isAnimating) return
        currentIndex = findCurrentIndex()
        goToSection(currentIndex - 1)
      }
    }

    // Delay attaching to let ScrollTrigger pins settle
    const timer = setTimeout(() => {
      window.addEventListener('wheel', onWheel, { passive: false })
      window.addEventListener('keydown', onKeyDown)
    }, 500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <Background />
      <Navigation />
      <main className="relative z-10">
        <S01_Title />
        <S02_Meme />
        <S03_NewReality />
        <S04_HumanEdge />
        <S05_Manifesto />
        <S06_Evidence />
        <S07_CallToAction />
        <S08_Agenda />
        <S09_CoreInsight />
        <S10_WhatIsLLM />
        <S11_Tools />
        <S12_CraftFramework />
        <S13_Comparison />
        <S14_MemoryMultiplier />
        <S15_ContextSystem />
        <S16_ContextExamples />
        <S17_ContextInAction />
        <S18_LiveDemo />
        <S19_TipsTricks />
        <S20_SetupOptions />
        <S21_FullSetup />
        <S22_QA />
        <S23_Homework />
        <S24_End />
      </main>
    </>
  )
}
