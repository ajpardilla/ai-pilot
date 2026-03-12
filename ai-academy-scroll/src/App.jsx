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
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
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
