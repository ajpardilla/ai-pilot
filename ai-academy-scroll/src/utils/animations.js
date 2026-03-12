import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function fadeUp(element, trigger, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export function slideFromLeft(element, trigger, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export function slideFromRight(element, trigger, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export function clipReveal(element, trigger) {
  return gsap.fromTo(
    element,
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export function staggerChildren(container, trigger, stagger = 0.1) {
  const children = container.children
  return gsap.fromTo(
    children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || container,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export function countUp(element, target, trigger) {
  const obj = { val: 0 }
  return gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    onUpdate: () => {
      element.textContent = Math.round(obj.val).toLocaleString()
    },
  })
}

export function pinSection(element, duration = '200%') {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: `+=${duration}`,
    pin: true,
    scrub: 1,
    anticipatePin: 1,
  })
}
