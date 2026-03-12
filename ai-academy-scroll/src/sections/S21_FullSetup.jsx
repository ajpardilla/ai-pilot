import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const steps = [
  {
    num: '01',
    title: 'Pick a Coding Tool',
    items: [
      { name: 'VS Code', desc: 'Most flexible \u2014 supports Claude, Copilot, Gemini, and Codex extensions side by side' },
      { name: 'Codex (OpenAI)', desc: "Best if you're already deep in the ChatGPT ecosystem" },
      { name: 'Claude Code (Terminal)', desc: 'Most powerful for builders \u2014 full file system and terminal access' },
      { name: 'Antigravity', desc: "AI-native IDE \u2014 worth exploring if you want a fresh start" },
    ],
    callout: 'Pick one and commit. You can always add another later. The important thing is to start.',
    color: '#CCFF00',
  },
  {
    num: '02',
    title: 'Add MCP Servers',
    items: [
      { name: 'Slack MCP', desc: 'Read channels, search messages, draft replies' },
      { name: 'ClickUp MCP', desc: 'Create tasks, update tickets, pull sprint data' },
      { name: 'Google Drive MCP', desc: 'Search docs, read specs, pull meeting notes' },
      { name: 'Gmail MCP', desc: 'Search emails, draft responses, read threads' },
      { name: 'Google Calendar MCP', desc: 'Check availability, create events, find meeting times' },
      { name: 'Supabase MCP', desc: 'Query databases, run migrations, manage schemas' },
      { name: 'GitHub MCP', desc: 'Create PRs, review code, search repos' },
    ],
    callout: 'MCPs let your AI talk directly to your tools. Add the ones you use daily first, then expand over time.',
    color: '#00D4FF',
  },
  {
    num: '03',
    title: 'Create & Attach Context Files',
    items: [
      { name: 'Global CLAUDE.md', desc: '~/.claude/CLAUDE.md \u2014 your identity, tone, rules (applies everywhere)' },
      { name: 'Project CLAUDE.md', desc: './project/CLAUDE.md \u2014 tech stack, architecture, current sprint' },
      { name: 'Global Skills', desc: '~/.claude/skills/ \u2014 reusable playbooks (ClickUp tickets, PRDs, updates)' },
      { name: 'Project Skills', desc: './project/.claude/skills/ \u2014 project-specific playbooks' },
      { name: 'Project GitHub Repo', desc: 'Your codebase \u2014 Claude clones it, reads it, commits to it' },
    ],
    callout: "Start with a Global CLAUDE.md and one skill. You'll build the rest as you go. These files are your AI's memory.",
    color: '#FF5C00',
  },
  {
    num: '04',
    title: 'Login With Your Accounts',
    items: [
      { name: 'GitHub', desc: 'Code repos, PRs, version control \u2014 SSH key or personal access token' },
      { name: 'Anthropic API', desc: 'Claude API key \u2014 required for Claude Code and extensions' },
      { name: 'OpenAI API', desc: 'GPT models \u2014 required for Copilot, Codex, or ChatGPT integrations' },
      { name: 'Google OAuth', desc: 'One login for Drive, Calendar, and Gmail MCPs' },
      { name: 'Slack OAuth', desc: 'Workspace access for Slack MCP' },
      { name: 'Supabase', desc: 'Database access \u2014 project URL + API key' },
    ],
    callout: 'One-time setup. Once connected, everything just works. No re-authenticating per session.',
    color: '#9B6DFF',
  },
]

export default function S21_FullSetup() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    // Intro
    tl.fromTo(
      innerRef.current.querySelector('.intro'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.2 }
    )

    steps.forEach((step, i) => {
      const el = innerRef.current.querySelector(`[data-step="${i}"]`)
      if (i > 0) {
        const prev = innerRef.current.querySelector(`[data-step="${i - 1}"]`)
        tl.to(prev, { opacity: 0, y: -20, duration: 0.15 })
      } else {
        tl.to(innerRef.current.querySelector('.intro'), { opacity: 0.15, duration: 0.1 })
      }
      tl.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25 })

      const items = el.querySelectorAll('.step-line')
      tl.fromTo(
        items,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.15, stagger: 0.04 },
        '-=0.1'
      )
      tl.to({}, { duration: 0.15 })
    })
  })

  return (
    <section data-section ref={sectionRef} className="section relative" style={{ padding: 0 }}>
      <div ref={innerRef} className="w-full h-screen flex items-center justify-center relative overflow-hidden px-[6vw]">
        <div className="intro absolute top-[10vh] left-[6vw] z-10">
          <p className="section-tag">SESSION 01 &middot; SETUP GUIDE</p>
          <h2 className="display text-[clamp(1.8rem,3.5vw,3rem)] text-white mb-2">
            Build your cockpit in 4 steps.
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            This is your checklist. Work through it top to bottom. By the end, you'll have a fully loaded AI workspace that remembers who you are, connects to your tools, and follows your standards.
          </p>
        </div>

        {steps.map((step, i) => (
          <div
            key={i}
            data-step={i}
            className="absolute inset-0 flex items-center justify-center opacity-0 px-[6vw] pt-[16vh]"
          >
            <div className="max-w-3xl w-full">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="display text-[3rem]" style={{ color: step.color, lineHeight: 1 }}>
                  {step.num}
                </span>
                <h3 className="display text-2xl text-white">{step.title}</h3>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                {step.items.map((item, j) => (
                  <div key={j} className="step-line flex gap-3 items-baseline">
                    <span className="mono text-xs shrink-0" style={{ color: step.color }}>{item.name}</span>
                    <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{item.desc}</span>
                  </div>
                ))}
              </div>

              <p className="mono text-xs py-3 px-4 rounded-lg" style={{ background: `${step.color}08`, borderLeft: `2px solid ${step.color}`, color: 'var(--color-muted)' }}>
                {step.callout}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
