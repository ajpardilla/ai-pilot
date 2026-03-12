import { useState, useEffect, useRef, useCallback } from "react";

// ─── SLIDE DATA ────────────────────────────────────────────────────────────────

const SESSIONS = [
  { num: "01", title: "Prompting Like a PM", color: "#E8FF47" },
  { num: "02", title: "Context Is Everything", color: "#FF6B35" },
  { num: "03", title: "AI for Research & Synthesis", color: "#00D9FF" },
  { num: "04", title: "Spec Writing & PRDs with AI", color: "#B66DFF" },
  { num: "05", title: "Designing AI Features", color: "#FF3D6B" },
];

const slides = [
  // ── TITLE ──────────────────────────────────────────────────────────────────
  {
    id: "title",
    type: "title",
  },

  // ── WHY THIS EXISTS ────────────────────────────────────────────────────────
  {
    id: "why",
    type: "manifesto",
    lines: [
      "The PMs who win",
      "in the next 3 years",
      "won't be the ones",
      "who know AI best.",
      "They'll be the ones",
      "who use it every day.",
    ],
    footnote: "That's what this class is for.",
  },

  // ── THE PROBLEM ────────────────────────────────────────────────────────────
  {
    id: "problem",
    type: "split-stat",
    label: "THE PROBLEM",
    stat: "90%",
    statSub: "of AI usage",
    body: "is people typing vague questions and accepting whatever comes back.",
    contrast: "That's not a workflow. That's a search engine with better grammar.",
    accent: "#E8FF47",
  },

  // ── HOW THE CLASS WORKS ────────────────────────────────────────────────────
  {
    id: "structure",
    type: "class-structure",
    label: "HOW EVERY SESSION WORKS",
    headline: "1 hour. Every two weeks.",
    blocks: [
      {
        time: "0:00 – 0:15",
        title: "Homework Presentations",
        body: "You show what you built. No slides needed — just your screen and 3 minutes.",
        color: "#E8FF47",
        note: "Skipped in Session 1",
      },
      {
        time: "0:15 – 0:25",
        title: "The Concept",
        body: "One idea. Proof it works. No fluff.",
        color: "#FF6B35",
      },
      {
        time: "0:25 – 0:45",
        title: "Live Practice",
        body: "You do it in the room. Right now. With your actual work.",
        color: "#00D9FF",
      },
      {
        time: "0:45 – 0:55",
        title: "Discussion",
        body: "What worked, what didn't, what questions came up.",
        color: "#B66DFF",
      },
      {
        time: "0:55 – 1:00",
        title: "Homework Brief",
        body: "One clear assignment. Due at the next session.",
        color: "#FF3D6B",
      },
    ],
  },

  // ── THE 5 SESSIONS ─────────────────────────────────────────────────────────
  {
    id: "roadmap",
    type: "roadmap",
    label: "THE CURRICULUM",
    headline: "5 sessions. 5 skills.",
    sessions: SESSIONS,
  },

  // ── SESSION 1 DIVIDER ──────────────────────────────────────────────────────
  {
    id: "s1-divider",
    type: "session-divider",
    session: SESSIONS[0],
  },

  // ── THE INSIGHT ────────────────────────────────────────────────────────────
  {
    id: "s1-insight",
    type: "big-insight",
    label: "SESSION 01 · THE CORE IDEA",
    headline: "The prompt\nis the product.",
    body: "Bad input, bad output. Every time. The quality of what AI gives you is a direct reflection of the quality of what you give it. Most people never figure this out.",
    accent: "#E8FF47",
  },

  // ── BEFORE / AFTER ─────────────────────────────────────────────────────────
  {
    id: "s1-comparison",
    type: "comparison",
    label: "SESSION 01 · THE PROOF",
    headline: "Same task. Different prompt.",
    task: "Write a stakeholder update on checkout performance.",
    before: {
      label: "WHAT MOST PEOPLE TYPE",
      prompt: "Write a stakeholder update on checkout performance.",
      output: "Here is a stakeholder update on checkout performance:\n\nOur checkout performance has been improving. We have made several changes to improve the approval rate and reduce friction for customers. The team has been working hard and we expect continued improvement going forward.",
      verdict: "Generic. Vague. Could be about anything.",
    },
    after: {
      label: "THE CRAFT VERSION",
      prompt: "You are a Head of Product writing a weekly update to the CTO and President at a global ecommerce company.\n\nContext: Checkout approval rates in the US improved from 87% to 91% this week after routing high-value orders through a secondary processor.\n\nWrite a 3-sentence executive update. Lead with the outcome. Include one risk. End with the next action.",
      output: "US checkout approval rates climbed to 91% this week — a 4-point gain driven by intelligent order routing to our secondary processor for high-value transactions. The improvement is real but fragile; our primary processor contract renegotiation in Q2 could revert this if terms change. Next step: locking in SLA commitments before the contract window opens March 15.",
      verdict: "Specific. Actionable. Sounds like you wrote it.",
    },
    accent: "#E8FF47",
  },

  // ── THE FRAMEWORK ──────────────────────────────────────────────────────────
  {
    id: "s1-framework",
    type: "framework",
    label: "SESSION 01 · THE FRAMEWORK",
    headline: "CRAFT your prompt.",
    accent: "#E8FF47",
    ingredients: [
      {
        letter: "C",
        name: "Context",
        desc: "What does Claude need to know to do this well?",
        example: "We launched a new checkout flow last week. Conversion dropped 2%.",
      },
      {
        letter: "R",
        name: "Role",
        desc: "Who is Claude in this conversation?",
        example: "You are a senior PM writing for an executive audience.",
      },
      {
        letter: "A",
        name: "Action",
        desc: "Exactly what do you need done?",
        example: "Write a root cause hypothesis with 3 possible explanations.",
      },
      {
        letter: "F",
        name: "Format",
        desc: "How should the output look?",
        example: "Bullet points. Under 150 words. No headers.",
      },
      {
        letter: "T",
        name: "Tone",
        desc: "Style, voice, and what to avoid.",
        example: "Executive. Direct. Don't blame engineering.",
      },
    ],
  },

  // ── PROMPT QUIZ ────────────────────────────────────────────────────────────
  {
    id: "s1-quiz",
    type: "quiz",
    label: "SESSION 01 · CLASS ACTIVITY",
    headline: "Good prompt or bad prompt?",
    accent: "#E8FF47",
    rounds: [
      {
        prompt: "Summarize this document.",
        verdict: "bad",
        reason: "No role, no context, no format, no tone. Claude has no idea who it's writing for, what matters, or how long the summary should be. You'll get a generic paragraph that could apply to anything.",
        fix: "You are a PM summarizing a vendor proposal for the CTO. Pull out the 3 most important business risks, the cost, and the recommended next step. Max 5 bullet points. No fluff.",
      },
      {
        prompt: "You are a senior product manager at a global ecommerce company. A key checkout flow saw a 3% drop in conversion this week after a new UI change was deployed. Write a 3-bullet incident summary for the VP of Engineering. Lead with business impact, include one hypothesis, end with the immediate next action. Keep it under 100 words.",
        verdict: "good",
        reason: "Role is clear. Context is specific. Action is defined. Format is explicit. Tone is implied by the audience. This is exactly what CRAFT looks like in practice.",
        fix: null,
      },
      {
        prompt: "Write me a PRD for a new feature.",
        verdict: "bad",
        reason: "Which feature? For which product? Who's the user? What problem does it solve? What format does your team use? Claude will write something — but it'll be generic boilerplate that you'll spend more time fixing than if you'd written it yourself.",
        fix: "You are a PM at a direct sales company. Write a one-page PRD for a distributor dashboard feature that shows real-time sales rank vs. last month. Users are non-technical field distributors on mobile. Include: problem statement, success metrics, user stories (3 max), and open questions. Use our standard PRD format: no more than 400 words.",
      },
    ],
  },

  // ── HOMEWORK ───────────────────────────────────────────────────────────────
  {
    id: "s1-homework",
    type: "homework",
    label: "SESSION 01 · HOMEWORK",
    headline: "This week's assignment.",
    due: "Present at Session 02",
    accent: "#E8FF47",
    assignment: "Find one real work task you'd normally do yourself — a Slack update, a brief, a stakeholder summary, a spec section. Write the lazy prompt first. Then write the full CRAFT version. Use both. Bring the two outputs to the next session and show the class the difference.",
    rules: [
      "It must be a real task, not something invented for the homework",
      "3 minutes to present — screen share your prompts and outputs",
      "No PowerPoint. Just show us what you built",
    ],
  },

  // ── COMING UP ──────────────────────────────────────────────────────────────
  {
    id: "coming-up",
    type: "coming-up",
    label: "WHAT'S AHEAD",
    headline: "The next 4 sessions.",
    sessions: SESSIONS.slice(1),
  },

  // ── CLOSE ──────────────────────────────────────────────────────────────────
  {
    id: "close",
    type: "close",
    headline: "The prompt is the product.",
    sub: "Go prove it.",
  },
];

// ─── BACKGROUND ───────────────────────────────────────────────────────────────

const NoiseBG = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    c.width = 256; c.height = 256;
    const img = ctx.createImageData(256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 20;
      img.data[i] = img.data[i+1] = img.data[i+2] = v;
      img.data[i+3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.035, pointerEvents: "none", zIndex: 0, imageRendering: "pixelated" }} />;
};

// ─── ANIMATION HOOK ───────────────────────────────────────────────────────────

const useReveal = (key) => {
  const [on, setOn] = useState(false);
  useEffect(() => { setOn(false); const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, [key]);
  return on;
};

// ─── SHARED ───────────────────────────────────────────────────────────────────

const Tag = ({ children, color = "#E8FF47" }) => (
  <div style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: "0.22em", color, border: `1px solid ${color}55`, padding: "5px 12px", marginBottom: 28, textTransform: "uppercase" }}>{children}</div>
);

const fade = (on, delay = 0, dy = 16) => ({
  opacity: on ? 1 : 0,
  transform: `translateY(${on ? 0 : dy}px)`,
  transition: `opacity 0.55s ${delay}s, transform 0.55s ${delay}s`,
});

// ─── SLIDE TYPES ──────────────────────────────────────────────────────────────

const TitleSlide = ({ on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 10vw" }}>
    <div style={{ ...fade(on, 0.05), fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.25em", color: "#E8FF47", marginBottom: 24 }}>UNICITY · PRODUCT & DESIGN · AI ACADEMY</div>
    <div style={{ overflow: "hidden", marginBottom: 8 }}>
      <h1 style={{ ...fade(on, 0.15), fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.92, margin: 0, color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>Unicity</h1>
    </div>
    <div style={{ overflow: "hidden", marginBottom: 4 }}>
      <h1 style={{ ...fade(on, 0.22), fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: "clamp(72px, 11vw, 148px)", lineHeight: 0.92, margin: 0, color: "#fff", letterSpacing: "0.04em" }}>AI</h1>
    </div>
    <div style={{ overflow: "hidden", marginBottom: 40 }}>
      <h1 style={{ ...fade(on, 0.28), fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: "clamp(72px, 11vw, 148px)", lineHeight: 0.92, margin: 0, color: "#E8FF47", letterSpacing: "0.04em" }}>ACADEMY</h1>
    </div>
    <div style={{ ...fade(on, 0.4), width: 48, height: 2, background: "#E8FF47", marginBottom: 32 }} />
    <p style={{ ...fade(on, 0.5), fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 1.8vw, 20px)", color: "rgba(255,255,255,0.5)", maxWidth: 480, lineHeight: 1.65, margin: 0 }}>
      A bi-weekly class to make AI part of how we work — not a tool we reach for when stuck.
    </p>
    <div style={{ position: "absolute", right: "8vw", bottom: "8vh", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.15)", letterSpacing: "0.12em" }}>SESSION 01</div>
  </div>
);

const ManifestoSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 10vw", maxWidth: 900 }}>
    {slide.lines.map((line, i) => (
      <div key={i} style={{ ...fade(on, 0.05 + i * 0.07), fontFamily: i % 2 === 0 ? "'Bebas Neue', sans-serif" : "'Instrument Serif', Georgia, serif", fontStyle: i % 2 !== 0 ? "italic" : "normal", fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.08, color: i === 0 ? "#E8FF47" : "#fff", letterSpacing: i % 2 === 0 ? "0.04em" : "0" }}>{line}</div>
    ))}
    <div style={{ ...fade(on, 0.6), marginTop: 40, fontFamily: "'Space Mono', monospace", fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>{slide.footnote}</div>
  </div>
);

const SplitStatSlide = ({ slide, on }) => (
  <div style={{ display: "flex", alignItems: "center", height: "100%", padding: "0 10vw", gap: "8vw" }}>
    <div style={{ flexShrink: 0 }}>
      <div style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(100px, 18vw, 220px)", lineHeight: 0.85, color: slide.accent, letterSpacing: "-0.02em" }}>{slide.stat}</div>
      <div style={{ ...fade(on, 0.2), fontFamily: "'Space Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginTop: 8 }}>{slide.statSub.toUpperCase()}</div>
    </div>
    <div>
      <Tag color={slide.accent}>{slide.label}</Tag>
      <p style={{ ...fade(on, 0.3), fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(22px, 3vw, 38px)", color: "#fff", lineHeight: 1.4, margin: "0 0 24px" }}>{slide.body}</p>
      <p style={{ ...fade(on, 0.45), fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0, borderLeft: `3px solid ${slide.accent}`, paddingLeft: 20 }}>{slide.contrast}</p>
    </div>
  </div>
);

const ClassStructureSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 8vw" }}>
    <Tag>{slide.label}</Tag>
    <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: "0 0 40px", letterSpacing: "0.04em" }}>{slide.headline}</h2>
    <div style={{ display: "flex", gap: 12 }}>
      {slide.blocks.map((b, i) => (
        <div key={i} style={{ ...fade(on, 0.15 + i * 0.08), flex: 1, padding: "24px 20px", borderTop: `3px solid ${b.color}`, background: "rgba(255,255,255,0.03)" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: b.color, letterSpacing: "0.12em", marginBottom: 12 }}>{b.time}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#fff", letterSpacing: "0.06em", marginBottom: 10 }}>{b.title}</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.55, marginBottom: b.note ? 12 : 0 }}>{b.body}</div>
          {b.note && <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>* {b.note}</div>}
        </div>
      ))}
    </div>
  </div>
);

const RoadmapSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 10vw" }}>
    <Tag>{slide.label}</Tag>
    <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: "0 0 48px", letterSpacing: "0.04em" }}>{slide.headline}</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {slide.sessions.map((s, i) => (
        <div key={i} style={{ ...fade(on, 0.15 + i * 0.09), display: "flex", alignItems: "center", gap: 32, padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: s.color, letterSpacing: "0.15em", minWidth: 32 }}>{s.num}</div>
          <div style={{ flex: 1, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(20px, 2.5vw, 32px)", color: "#fff", letterSpacing: "0.04em" }}>{s.title}</div>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, opacity: 0.6 }} />
        </div>
      ))}
    </div>
  </div>
);

const SessionDivider = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", height: "100%", padding: "0 10vw", background: slide.session.color }}>
    <div style={{ ...fade(on, 0.05), fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.25em", color: "rgba(0,0,0,0.5)", marginBottom: 24 }}>SESSION {slide.session.num}</div>
    <h1 style={{ ...fade(on, 0.15), fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: "clamp(56px, 9vw, 120px)", lineHeight: 0.92, margin: "0 0 40px", color: "#000", letterSpacing: "0.04em" }}>{slide.session.title}</h1>
    <div style={{ ...fade(on, 0.35), width: 48, height: 3, background: "rgba(0,0,0,0.3)", marginBottom: 32 }} />
    <div style={{ ...fade(on, 0.45), fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(0,0,0,0.55)" }}>45 minutes · 1 homework assignment</div>
  </div>
);

const BigInsightSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 10vw", maxWidth: 900 }}>
    <Tag color={slide.accent}>{slide.label}</Tag>
    <h2 style={{ ...fade(on, 0.15), fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(48px, 8vw, 104px)", lineHeight: 0.95, color: "#fff", whiteSpace: "pre-line", margin: "0 0 40px" }}>{slide.headline}</h2>
    <div style={{ ...fade(on, 0.35), width: 40, height: 3, background: slide.accent, marginBottom: 28 }} />
    <p style={{ ...fade(on, 0.45), fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 1.8vw, 20px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>{slide.body}</p>
  </div>
);

const ComparisonSlide = ({ slide, on }) => {
  const Box = ({ data, isAfter, delay }) => (
    <div style={{ ...fade(on, delay), flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: "0.18em", color: isAfter ? slide.accent : "rgba(255,255,255,0.3)", marginBottom: 12 }}>{data.label}</div>
      <div style={{ flex: 1, background: isAfter ? "rgba(232,255,71,0.05)" : "rgba(255,255,255,0.03)", border: `1px solid ${isAfter ? slide.accent + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "14px 16px", borderBottom: `1px solid ${isAfter ? slide.accent + "22" : "rgba(255,255,255,0.06)"}`, fontFamily: "'Space Mono', monospace", fontSize: 11, color: isAfter ? slide.accent : "rgba(255,255,255,0.3)" }}>PROMPT</div>
        <div style={{ padding: "14px 16px", fontFamily: "'Space Mono', monospace", fontSize: 11.5, color: isAfter ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)", lineHeight: 1.65, whiteSpace: "pre-wrap", borderBottom: "1px solid rgba(255,255,255,0.06)", flex: 1 }}>{data.prompt}</div>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>OUTPUT</div>
        <div style={{ padding: "14px 16px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: isAfter ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)", lineHeight: 1.65, flex: 1, whiteSpace: "pre-wrap" }}>{data.output}</div>
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Space Mono', monospace", fontSize: 10, color: isAfter ? slide.accent : "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>{data.verdict}</div>
      </div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "4vh 8vw" }}>
      <div style={{ marginBottom: 20 }}>
        <Tag color={slide.accent}>{slide.label}</Tag>
        <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(24px, 3vw, 40px)", color: "#fff", margin: "0 0 4px", letterSpacing: "0.04em" }}>{slide.headline}</h2>
        <div style={{ ...fade(on, 0.15), fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Task: {slide.task}</div>
      </div>
      <div style={{ display: "flex", gap: 16, flex: 1, minHeight: 0 }}>
        <Box data={slide.before} isAfter={false} delay={0.2} />
        <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
          <div style={{ ...fade(on, 0.3), fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "rgba(255,255,255,0.15)" }}>→</div>
        </div>
        <Box data={slide.after} isAfter={true} delay={0.3} />
      </div>
    </div>
  );
};

const FrameworkSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 8vw" }}>
    <Tag color={slide.accent}>{slide.label}</Tag>
    <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#fff", margin: "0 0 40px", letterSpacing: "0.04em", whiteSpace: "pre-line" }}>{slide.headline}</h2>
    <div style={{ display: "flex", gap: 10 }}>
      {slide.ingredients.map((item, i) => (
        <div key={i} style={{ ...fade(on, 0.15 + i * 0.08), flex: 1, padding: "24px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, color: slide.accent, lineHeight: 1, opacity: 0.12, position: "absolute", top: 8, right: 12, letterSpacing: "-0.02em" }}>{item.letter}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 44, color: slide.accent, lineHeight: 1, marginBottom: 10, letterSpacing: "0.02em" }}>{item.letter}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#fff", letterSpacing: "0.06em", marginBottom: 10 }}>{item.name}</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.55, marginBottom: 14 }}>{item.desc}</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10.5, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, borderLeft: `2px solid ${slide.accent}44`, paddingLeft: 10 }}>{item.example}</div>
        </div>
      ))}
    </div>
  </div>
);

const QuizSlide = ({ slide, on }) => {
  const [round, setRound] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const current = slide.rounds[round];

  const next = () => {
    if (round < slide.rounds.length - 1) { setRound(r => r + 1); setRevealed(false); }
  };
  const prev = () => {
    if (round > 0) { setRound(r => r - 1); setRevealed(false); }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "4vh 8vw" }}>
      <div style={{ marginBottom: 16 }}>
        <Tag color={slide.accent}>{slide.label}</Tag>
        <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#fff", margin: "0 0 4px", letterSpacing: "0.04em" }}>{slide.headline}</h2>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }}>PROMPT {round + 1} OF {slide.rounds.length}</div>
      </div>

      {/* Prompt box */}
      <div style={{ ...fade(on, 0.2), padding: "24px 28px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, marginBottom: 20, flex: revealed ? "0 0 auto" : 1 }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", marginBottom: 14 }}>THE PROMPT</div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#fff", lineHeight: 1.75 }}>{current.prompt}</div>
      </div>

      {/* Vote buttons */}
      {!revealed && (
        <div style={{ ...fade(on, 0.35), display: "flex", gap: 12, marginBottom: 20 }}>
          <button onClick={() => setRevealed(true)} style={{ flex: 1, padding: "18px", background: "rgba(255,100,100,0.1)", border: "1px solid rgba(255,100,100,0.3)", color: "#FF6464", fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: "0.08em", cursor: "pointer", borderRadius: 4, transition: "all 0.2s" }}>👎 BAD PROMPT</button>
          <button onClick={() => setRevealed(true)} style={{ flex: 1, padding: "18px", background: "rgba(100,255,150,0.1)", border: "1px solid rgba(100,255,150,0.3)", color: "#64FF96", fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: "0.08em", cursor: "pointer", borderRadius: 4, transition: "all 0.2s" }}>👍 GOOD PROMPT</button>
        </div>
      )}

      {/* Reveal */}
      {revealed && (
        <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.4s, transform 0.4s", flex: 1 }}>
          <div style={{ padding: "20px 24px", background: current.verdict === "good" ? "rgba(100,255,150,0.07)" : "rgba(255,100,100,0.07)", border: `1px solid ${current.verdict === "good" ? "rgba(100,255,150,0.3)" : "rgba(255,100,100,0.3)"}`, borderRadius: 4, marginBottom: current.fix ? 12 : 20 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: current.verdict === "good" ? "#64FF96" : "#FF6464", letterSpacing: "0.08em", marginBottom: 10 }}>{current.verdict === "good" ? "✓ GOOD PROMPT" : "✗ BAD PROMPT"}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{current.reason}</div>
          </div>
          {current.fix && (
            <div style={{ padding: "18px 22px", background: "rgba(232,255,71,0.05)", border: "1px solid rgba(232,255,71,0.2)", borderRadius: 4, marginBottom: 16 }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#E8FF47", letterSpacing: "0.15em", marginBottom: 10 }}>THE CRAFT VERSION</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{current.fix}</div>
            </div>
          )}
          <div style={{ display: "flex", gap: 10 }}>
            {round > 0 && <button onClick={prev} style={{ padding: "12px 24px", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontFamily: "'Space Mono', monospace", fontSize: 11, cursor: "pointer", letterSpacing: "0.1em" }}>← PREV</button>}
            {round < slide.rounds.length - 1 && <button onClick={next} style={{ padding: "12px 28px", background: "#E8FF47", border: "none", color: "#000", fontFamily: "'Space Mono', monospace", fontSize: 11, cursor: "pointer", letterSpacing: "0.12em", fontWeight: 700 }}>NEXT PROMPT →</button>}
            {round === slide.rounds.length - 1 && <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.3)", padding: "12px 0", letterSpacing: "0.1em" }}>THAT'S ALL 3 — DISCUSSION TIME</div>}
          </div>
        </div>
      )}
    </div>
  );
};

const HomeworkSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 10vw" }}>
    <Tag color={slide.accent}>{slide.label}</Tag>
    <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", color: "#fff", margin: "0 0 8px", letterSpacing: "0.04em" }}>{slide.headline}</h2>
    <div style={{ ...fade(on, 0.18), fontFamily: "'Space Mono', monospace", fontSize: 11, color: slide.accent, letterSpacing: "0.15em", marginBottom: 36 }}>DUE: {slide.due.toUpperCase()}</div>
    <div style={{ ...fade(on, 0.25), padding: "24px 28px", background: `${slide.accent}10`, border: `1px solid ${slide.accent}33`, marginBottom: 28, maxWidth: 700 }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{slide.assignment}</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 700 }}>
      {slide.rules.map((rule, i) => (
        <div key={i} style={{ ...fade(on, 0.35 + i * 0.07), display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: slide.accent, marginTop: 9, flexShrink: 0 }} />
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{rule}</div>
        </div>
      ))}
    </div>
  </div>
);

const ComingUpSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "0 10vw" }}>
    <Tag>{slide.label}</Tag>
    <h2 style={{ ...fade(on, 0.1), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: "0 0 48px", letterSpacing: "0.04em" }}>{slide.headline}</h2>
    <div style={{ display: "flex", gap: 16 }}>
      {slide.sessions.map((s, i) => (
        <div key={i} style={{ ...fade(on, 0.15 + i * 0.1), flex: 1, padding: "28px 22px", borderLeft: `3px solid ${s.color}`, background: `${s.color}08` }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: s.color, letterSpacing: "0.18em", marginBottom: 12 }}>SESSION {s.num}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#fff", letterSpacing: "0.06em", lineHeight: 1.2 }}>{s.title}</div>
        </div>
      ))}
    </div>
  </div>
);

const CloseSlide = ({ slide, on }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center", padding: "0 10vw" }}>
    <h2 style={{ ...fade(on, 0.1), fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(40px, 7vw, 96px)", color: "#fff", margin: "0 0 28px", lineHeight: 1.05 }}>{slide.headline}</h2>
    <div style={{ ...fade(on, 0.3), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 5vw, 64px)", color: "#E8FF47", letterSpacing: "0.08em" }}>{slide.sub}</div>
    <div style={{ ...fade(on, 0.5), position: "absolute", bottom: 40, fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.15)", letterSpacing: "0.18em" }}>UNICITY · AI ACADEMY · SESSION 01</div>
  </div>
);

// ─── RENDER SLIDE ─────────────────────────────────────────────────────────────

const renderSlide = (slide, on, slideNum, total) => {
  const p = { slide, on };
  switch (slide.type) {
    case "title": return <TitleSlide on={on} slideNum={slideNum} total={total} />;
    case "manifesto": return <ManifestoSlide {...p} slideNum={slideNum} />;
    case "split-stat": return <SplitStatSlide {...p} slideNum={slideNum} />;
    case "class-structure": return <ClassStructureSlide {...p} slideNum={slideNum} />;
    case "roadmap": return <RoadmapSlide {...p} slideNum={slideNum} />;
    case "session-divider": return <SessionDivider {...p} slideNum={slideNum} />;
    case "big-insight": return <BigInsightSlide {...p} slideNum={slideNum} />;
    case "comparison": return <ComparisonSlide {...p} slideNum={slideNum} />;
    case "framework": return <FrameworkSlide {...p} slideNum={slideNum} />;
    case "quiz": return <QuizSlide {...p} slideNum={slideNum} />;
    case "homework": return <HomeworkSlide {...p} slideNum={slideNum} />;
    case "coming-up": return <ComingUpSlide {...p} slideNum={slideNum} />;
    case "close": return <CloseSlide {...p} slideNum={slideNum} />;
    default: return null;
  }
};

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [cur, setCur] = useState(0);
  const on = useReveal(cur);
  const slide = slides[cur];
  const isDark = slide.type !== "session-divider";

  const go = useCallback((dir) => {
    setCur(c => Math.max(0, Math.min(slides.length - 1, c + dir)));
  }, []);

  useEffect(() => {
    const h = (e) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); go(-1); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go]);

  const bg = slide.type === "session-divider" ? slide.session.color : "#080808";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500&family=Space+Mono&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; overflow: hidden; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={{ width: "100vw", height: "100vh", background: bg, transition: "background 0.4s", position: "relative", overflow: "hidden" }}>
        <NoiseBG />

        {/* Subtle grid */}
        {isDark && (
          <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none", zIndex: 0 }} />
        )}

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", height: "100%" }}>
          {renderSlide(slide, on, cur + 1, slides.length)}
        </div>

        {/* Slide number — bottom left */}
        <div style={{ position: "fixed", bottom: 28, left: 28, fontFamily: "'Space Mono', monospace", fontSize: 10, color: isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.35)", zIndex: 20, letterSpacing: "0.15em" }}>
          {String(cur + 1).padStart(2, "0")}
        </div>

        {/* Bottom nav */}
        <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 6, zIndex: 20 }}>
          {slides.map((s, i) => {
            const isActive = i === cur;
            const isDivider = s.type === "session-divider";
            return (
              <button key={i} onClick={() => setCur(i)} style={{ width: isActive ? 28 : 5, height: 5, borderRadius: 2.5, background: isActive ? (isDark ? "#E8FF47" : "#000") : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.25)"), border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
            );
          })}
        </div>

        {/* Slide counter */}
        <div style={{ position: "fixed", top: 24, right: 28, fontFamily: "'Space Mono', monospace", fontSize: 10, color: isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.3)", zIndex: 20, letterSpacing: "0.12em" }}>
          {String(cur + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>

        {/* Arrow buttons */}
        {[[-1, "left", 24], [1, "right", 24]].map(([dir, side, pos]) => (
          <button key={side} onClick={() => go(dir)} style={{ position: "fixed", [side]: pos, top: "50%", transform: "translateY(-50%)", background: "transparent", border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.15)"}`, color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 16, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>{dir === -1 ? "‹" : "›"}</button>
        ))}
      </div>
    </>
  );
}
