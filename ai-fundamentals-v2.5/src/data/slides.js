export const slides = [
  // ─── 01: THE HOOK (CINEMATIC FULL BLEED) ───
  {
    id: 1,
    type: "hero-statement",
    tagline: "UNICITY AI ACADEMY",
    headline: "The world is changing.",
    accentHeadline: "Use AI better.",
    subtext: "You don't need to be an engineer. You just need to master the fundamentals. Welcome to Session 01."
  },

  // ─── 02: THE LANDSCAPE (BENTO GRID) ───
  {
    id: 2,
    type: "bento-landscape",
    headline: "The Big Three.",
    bentoCards: [
      {
        title: "Claude",
        color: "violet",
        role: "The Writer & Analyst",
        description: "Our primary tool. Best for deep reasoning, writing, and handling massive documents."
      },
      {
        title: "ChatGPT",
        color: "emerald",
        role: "The Generalist",
        description: "Great for quick brainstorming, image generation, and casual web research."
      },
      {
        title: "Gemini",
        color: "cyan",
        role: "The Integrator",
        description: "Instantly searches your Google Workspace (Docs, Drive, Gmail)."
      }
    ]
  },

  // ─── 03: THE SECRET SAUCE (3D FLOWCHART VISUAL) ───
  {
    id: 3,
    type: "abstract-visual",
    headline: "The Context Window.",
    body: "AI doesn't \"think.\" It reads patterns. Everything you upload, type, and paste gets shoved into its working memory. Keep it clean.",
    assetPath: "/3d-flowchart.png"
  },

  // ─── 04: CRAFT PROMPTING (INTERACTIVE CARDS) ───
  {
    id: 4,
    type: "punchy-cards",
    headline: "Look before you leap.",
    subheadline: "Stop typing 1-sentence prompts. Ask yourself 3 questions first:",
    cards: [
      { title: "Identity", body: "Who is the AI pretending to be? (e.g., 'You are a Senior Copywriter')" },
      { title: "Problem", body: "What is the exact context? (e.g., 'Our launch is delayed')" },
      { title: "Outcome", body: "What do you want to walk away with? (e.g., 'Write a 50-word apology email')" }
    ]
  },

  // ─── 05: THE CLAUDE ECOSYSTEM (3D BENTO VISUAL) ───
  {
    id: 5,
    type: "abstract-visual",
    headline: "One AI. Three Modes.",
    body: "Start with Chat. Graduate to Cowork. Leave Code to the engineers.",
    assetPath: "/3d-bento.png",
    floatingTags: ["Claude Chat", "Claude Cowork", "Claude Code"]
  },

  // ─── 06: USE CASES BY DEPT (NEO-TABLE) ───
  {
    id: 6,
    type: "neo-table",
    headline: "How your team uses it.",
    rows: [
      { dept: "Marketing", use: "Analyze competitor webs, build massive campaign matrices." },
      { dept: "Creative", use: "Rewrite copy variations across 4 platforms instantly." },
      { dept: "Sales", use: "Turn complex distributor data into actionable playbooks." }
    ]
  },

  // ─── 07: THE RULES (SPLIT SCREEN DO/DONT) ───
  {
    id: 7,
    type: "split-rules",
    headline: "Unicity Safe-Use Policy",
    doTitle: "ALWAYS",
    doItems: ["Use corporate accounts", "Fact-check output", "Report shadow AI apps"],
    dontTitle: "NEVER",
    dontItems: ["Upload Distributor PII", "Paste financial forecasts", "Clone voice without Legal OK"]
  },

  // ─── 08: HOMEWORK (PUNCHY) ───
  {
    id: 8,
    type: "action-closing",
    headline: "Your Mission.",
    steps: [
      "1. Login to your corporate Claude account.",
      "2. Write ONE prompt using Identity + Problem + Outcome.",
      "3. Bring a repetitive weekly task to Session 02."
    ]
  }
];

export const TOTAL_SLIDES = slides.length;
