import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function S15_ContextSystem() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelector('.text-side'),
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )

    const nodes = ref.current.querySelectorAll('.flow-node')
    gsap.fromTo(
      nodes,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const connectors = ref.current.querySelectorAll('.connector')
    gsap.fromTo(
      connectors,
      { scaleY: 0 },
      {
        scaleY: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', transformOrigin: 'top center',
        scrollTrigger: { trigger: ref.current, start: 'top 60%', toggleActions: 'play none none reverse' },
      }
    )
  })

  return (
    <section data-section className="section" ref={ref}>
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl items-start">
        {/* Text side */}
        <div className="text-side flex-1">
          <p className="section-tag">SESSION 01 &middot; THE CONTEXT SYSTEM</p>
          <h2 className="display text-[clamp(2rem,3.5vw,3rem)] text-white mb-6">
            Two layers of memory.
          </h2>
          <p className="body-text">
            Global context applies everywhere. Project context is scoped to a specific codebase. Skills are reusable playbooks that live at either level. When Claude Code opens a project, it loads both layers automatically.
          </p>
        </div>

        {/* Flowchart side */}
        <div className="flex-1 flex flex-col items-center gap-0">
          {/* GLOBAL */}
          <div className="flow-node w-full border rounded-lg p-4" style={{ borderColor: '#CCFF00', background: 'rgba(204,255,0,0.04)' }}>
            <p className="mono text-xs mb-2" style={{ color: '#CCFF00' }}>GLOBAL &middot; ~/.claude/</p>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-white mb-1">CLAUDE.MD</p>
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  Your identity file. Lives in your home directory and loads into every conversation.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-white mb-1">SKILLS</p>
                <div className="flex flex-wrap gap-1 mb-1">
                  {['Tone rules', 'Weekly update', 'PRD format'].map((t) => (
                    <span key={t} className="mono text-[0.6rem] px-2 py-0.5 rounded" style={{ background: 'var(--color-ghost)', color: 'var(--color-muted)' }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  Reusable instruction sets that apply across all your work.
                </p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="connector w-px h-8" style={{ background: 'var(--color-ghost)' }} />

          {/* Project boxes */}
          <div className="flex gap-4 w-full">
            <div className="flow-node flex-1 border rounded-lg p-3" style={{ borderColor: 'var(--color-ghost)' }}>
              <p className="mono text-xs mb-1" style={{ color: '#00D4FF' }}>Questory &middot; ./questory/</p>
              <p className="text-xs font-semibold text-white mb-1">CLAUDE.MD</p>
              <p className="text-[0.65rem]" style={{ color: 'var(--color-muted)' }}>
                Project-specific context. Tech stack, architecture, database schema, active bugs.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {['Expo patterns', 'Supabase RLS'].map((t) => (
                  <span key={t} className="mono text-[0.55rem] px-1.5 py-0.5 rounded" style={{ background: 'var(--color-ghost)', color: 'var(--color-muted)' }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flow-node flex-1 border rounded-lg p-3" style={{ borderColor: 'var(--color-ghost)' }}>
              <p className="mono text-xs mb-1" style={{ color: '#FF5C00' }}>Shop Checkout &middot; ./shop-checkout/</p>
              <p className="text-xs font-semibold text-white mb-1">CLAUDE.MD</p>
              <p className="text-[0.65rem]" style={{ color: 'var(--color-muted)' }}>
                Different project, different context. Processor integrations, checkout flows, Hydra API endpoints.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {['Payment flows', 'Processor docs'].map((t) => (
                  <span key={t} className="mono text-[0.55rem] px-1.5 py-0.5 rounded" style={{ background: 'var(--color-ghost)', color: 'var(--color-muted)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="connector w-px h-6" style={{ background: 'var(--color-ghost)' }} />

          {/* Merged */}
          <div className="flow-node mono text-xs text-center py-2" style={{ color: 'var(--color-muted)' }}>
            &#x25BC; MERGED AT RUNTIME &#x25BC;
          </div>

          <div className="connector w-px h-4" style={{ background: 'var(--color-ghost)' }} />

          <div className="flow-node w-full border rounded-lg p-3 text-center" style={{ borderColor: '#9B6DFF', background: 'rgba(155,109,255,0.04)' }}>
            <p className="mono text-xs mb-1" style={{ color: '#9B6DFF' }}>CLAUDE'S FULL CONTEXT</p>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              At runtime, Claude merges your global identity with the project you're working in.
            </p>
          </div>

          <div className="flow-node mono text-lg text-center py-1" style={{ color: 'var(--color-ghost)' }}>+</div>

          <div className="flow-node w-full border rounded-lg p-3 text-center" style={{ borderColor: 'var(--color-ghost)' }}>
            <p className="mono text-xs mb-1" style={{ color: '#CCFF00' }}>YOUR PROMPT</p>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Your prompt is the final input. The better your context system, the less your prompt has to do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
