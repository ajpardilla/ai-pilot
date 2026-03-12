export const SLIDES = [
  // Slide 1
  {
    type: "title",
    tagLine: "UNICITY · PRODUCT & DESIGN · AI ACADEMY",
    title: { line1: "Unicity", line2: "AI", line3: "ACADEMY" },
    subtitle: "A bi-weekly class to make AI part of how we work — not a tool we reach for when stuck.",
    footer: "SESSION 01"
  },
  // Slide 2
  {
    type: "meme-image",
    image: "/meme.png",
    alt: "Designer/Developer/PM Meme"
  },
  // Slide 3
  {
    type: "statement",
    tag: "THE NEW REALITY",
    headline: "Everyone can do everyone's job.",
    body: "AI is dissolving the boundaries between design, development, and product management. Designers can code. Developers can write specs. PMs can build entire products. The roles aren't disappearing — but the lines between them are. The people who thrive won't be the ones who protect their territory. They'll be the ones who expand it."
  },
  // Slide 4
  {
    type: "cards-4",
    tag: "THE HUMAN EDGE",
    headline: "AI is the engine. You're the pilot.",
    cards: [
      { letter: "T", name: "Taste", description: "Knowing what good looks like — before it exists.", example: "AI can generate 10 options. Only you know which one is right for your user." },
      { letter: "P", name: "Perspective", description: "The unique lens you bring from your role, your market, your customers.", example: "AI doesn't know your distributor in Bangkok is frustrated. You do." },
      { letter: "E", name: "Experience", description: "Pattern recognition built from years of shipping, failing, and learning.", example: "You've seen this feature fail before. AI hasn't." },
      { letter: "W", name: "Wisdom", description: "Lessons learned that no dataset contains.", example: "Knowing when to push back, when to ship, and when to wait." }
    ]
  },
  // Slide 5
  {
    type: "manifesto",
    lines: [
      "One year from now,",
      "AI won't just assist.",
      "It will outperform",
      "most of your team.",
      "The edge goes to whoever",
      "pilots it best."
    ],
    footnote: "That's not a prediction. That's the trajectory."
  },
  // Slide 6
  {
    type: "quotes",
    tag: "WHAT THE BUILDERS ARE SAYING",
    headline: "This isn't speculation.",
    quotes: [
      { who: "Dario Amodei", role: "CEO, Anthropic", quote: "AI could eliminate 50% of entry-level white-collar jobs within 5 years. Unemployment could spike to 10–20%.", source: "Axios, May 2025" },
      { who: "Dario Amodei", role: "CEO, Anthropic", quote: "We might be 6–12 months away from AI doing everything software engineers do end-to-end.", source: "World Economic Forum, Jan 2026" },
      { who: "Mark Zuckerberg", role: "CEO, Meta", quote: "In 2025, we're going to have an AI that can effectively be a mid-level engineer at your company.", source: "Joe Rogan Experience, Jan 2025" },
      { who: "Sam Altman", role: "CEO, OpenAI", quote: "Today AI is like an intern. Soon it will be an experienced software engineer that can work for days.", source: "Snowflake Summit, Jun 2025" },
      { who: "Elon Musk", role: "CEO, Tesla & xAI", quote: "AI and robots will replace all jobs. Work will be optional, like growing your own vegetables.", source: "U.S.–Saudi Investment Forum, Nov 2025" }
    ],
    stat: { number: "55,000", label: "U.S. layoffs attributed to AI in 2025 alone", source: "Challenger, Gray & Christmas" }
  },
  // Slide 7
  {
    type: "cards-3-icon",
    headline: "This is not optional.",
    cards: [
      { icon: "⏱", title: "Urgency", body: "The window to get ahead of this is closing. The people who learn to pilot AI now will lead. The ones who wait will catch up — or won't." },
      { icon: "📋", title: "Accountability", body: "Starting this year, AI knowledge will be a core part of your yearly reviews and position assessments. I'm building the assessment framework to properly measure where we are and where we need to be." },
      { icon: "🤝", title: "Together", body: "My goal isn't to test you. It's to make sure every person in this room evolves. We do that by helping each other — sharing what works, what doesn't, and pushing each other forward." }
    ],
    footnote: "We're not learning AI because it's interesting. We're learning it because our careers depend on it."
  },
  // Slide 8
  {
    type: "agenda",
    tag: "TODAY'S AGENDA",
    headline: "What we're covering.",
    items: [
      { index: 1, title: "The prompt is the product", color: "yellow" },
      { index: 2, title: "The CRAFT framework", color: "yellow" },
      { index: 3, title: "Claude vs Cowork vs Claude Code", color: "orange" },
      { index: 4, title: "CLAUDE.md & Skills", color: "cyan" },
      { index: 5, title: "Setting up your cockpit", color: "purple" }
    ]
  },
  // Slide 9
  {
    type: "statement",
    tag: "SESSION 01 · THE CORE IDEA",
    headline: "The prompt is the product.",
    body: "Bad input, bad output. Every time. The quality of what AI gives you is a direct reflection of the quality of what you give it. Most people never figure this out."
  },
  // Slide 10
  {
    type: "statement",
    tag: "SESSION 01 · THE BASICS",
    headline: "What is an LLM?",
    body: "A Large Language Model is a prediction engine trained on massive amounts of text. It doesn't \"think\" — it predicts the most likely next word based on everything it's seen. That's why context matters so much. The more relevant information you give it, the better its predictions become. Claude, ChatGPT, Gemini — they're all LLMs. Different models, same core idea."
  },
  // Slide 11
  {
    type: "cards-3",
    tag: "SESSION 01 · THE TOOLS",
    headline: "Three tools. Three use cases.",
    cards: [
      { letter: "C", name: "Claude", description: "The conversational interface. Good for thinking, writing, brainstorming, and one-off tasks.", example: "Draft a stakeholder email. Analyze a competitor. Summarize a doc. This is where most people start — and stop." },
      { letter: "W", name: "Cowork", description: "Claude with agency. It can browse, read files, use your apps, and work across tools on your desktop.", example: "Research 5 competitors, pull data from your Drive, and draft a comparison matrix — all in one workflow." },
      { letter: "CC", name: "Claude Code", description: "The command line power tool. Full access to your codebase, terminal, and file system. Built for builders.", example: "Scaffold a React app, debug a Supabase RLS policy, refactor a module — with full project context." }
    ]
  },
  // Slide 12
  {
    type: "cards-5-craft",
    tag: "SESSION 01 · THE FRAMEWORK",
    headline: "CRAFT your prompt.",
    cards: [
      { letter: "C", name: "Context", description: "What does Claude need to know to do this well?", example: "We launched a new checkout flow last week. Conversion dropped 2%." },
      { letter: "R", name: "Role", description: "Who is Claude in this conversation?", example: "You are a senior PM writing for an executive audience." },
      { letter: "A", name: "Action", description: "Exactly what do you need done?", example: "Write a root cause hypothesis with 3 possible explanations." },
      { letter: "F", name: "Format", description: "How should the output look?", example: "Bullet points. Under 150 words. No headers." },
      { letter: "T", name: "Tone", description: "How should it sound? Who's the audience? What should it avoid?", example: "Write like a VP updating the CEO. Confident, not defensive. No jargon. No filler." }
    ]
  },
  // Slide 13
  {
    type: "comparison",
    tag: "SESSION 01 · THE PROOF",
    headline: "Same task. Different prompt.",
    task: "Write a ClickUp ticket for a broken feature.",
    left: {
      label: "WHAT MOST PEOPLE TYPE",
      prompt: "Write a ClickUp ticket for the Apple Pay button not working in Japan.",
      output: "Title: Apple Pay Bug\n\nDescription: The Apple Pay button is not working on the Japan checkout page. Please fix this issue as it is affecting customers.\n\nPriority: High",
      verdict: "No user story. No acceptance criteria. No context. Could mean anything."
    },
    right: {
      label: "THE CRAFT VERSION",
      prompt: "You are a Head of Product writing a ClickUp ticket for the Checkout team.\n\nContext: Apple Pay button fails to render on the Japan checkout page. Japan uses PayPay and Apple Pay via Nuvei processor. Other markets are unaffected.\n\nUse our ticket format: user story, description, acceptance criteria (checkboxes), priority, t-shirt estimate, and a How to Test section.",
      output: "Title: Fix Apple Pay button not rendering on JP checkout\n\nAs a Japanese customer, I want to see the Apple Pay button on checkout, so that I can complete my purchase using my preferred payment method.\n\nDescription: Apple Pay fails to render on JP checkout. Likely related to PayPay/Apple Pay coexistence logic in Nuvei config.\n\nAcceptance Criteria:\n☐ Apple Pay renders on JP for eligible devices\n☐ PayPay remains available\n☐ No regression on US/EU flows\n\nPriority: High · Estimate: M · Team: Checkout",
      verdict: "User story. Clear scope. Testable criteria. Ready to assign."
    }
  },
  // Slide 14
  {
    type: "statement",
    tag: "SESSION 01 · PERSISTENT CONTEXT",
    headline: "Memory is the multiplier.",
    body: "Every time you start a new conversation, Claude starts from zero. CLAUDE.md files and skills give it memory — who you are, how you work, what your standards are. This is the difference between an intern who just started and a teammate who's been here for a year."
  },
  // Slide 15
  {
    type: "flowchart",
    tag: "SESSION 01 · THE CONTEXT SYSTEM",
    headline: "Two layers of memory.",
    description: "Global context applies everywhere. Project context is scoped to a specific codebase. Skills are reusable playbooks that live at either level. When Claude Code opens a project, it loads both layers automatically.",
    flowchart: {
      global: {
        path: "~/.claude/",
        claude: "Your identity file. Lives in your home directory and loads into every conversation. This is where Claude learns who you are, how you communicate, and what rules to always follow. Think of it as your permanent briefing doc.",
        skills: {
          tags: ["Tone rules", "Weekly update", "PRD format"],
          description: "Reusable instruction sets that apply across all your work. A skill for how you write updates, how your PRDs are formatted, how your tone should sound. Write once, use everywhere."
        }
      },
      projects: [
        {
          name: "Questory",
          path: "./questory/",
          claude: "Project-specific context. Tech stack, architecture, database schema, active bugs, naming conventions. Claude reads this automatically when you open this folder.",
          skills: {
            tags: ["Expo patterns", "Supabase RLS"],
            description: "Skills scoped to this project. Patterns for Expo navigation, Supabase Row Level Security fixes. Only loaded when working in Questory."
          }
        },
        {
          name: "Shop Checkout",
          path: "./shop-checkout/",
          claude: "Different project, different context. Processor integrations, checkout flows, Hydra API endpoints. Claude adapts to this codebase without you re-explaining anything.",
          skills: {
            tags: ["Payment flows", "Processor docs"],
            description: "Checkout-specific playbooks. How to handle payment processor switching, how to document rate negotiations."
          }
        }
      ],
      merge: "At runtime, Claude merges your global identity with the project you're working in. You get a teammate that knows both who you are and what you're building, every single time.",
      prompt: "Your prompt is the final input. Combined with the full context above, this is what Claude actually sees. The better your context system, the less your prompt has to do."
    }
  },
  // Slide 16
  {
    type: "code-columns",
    tag: "SESSION 01 · EXAMPLES",
    headline: "What they look like in practice.",
    columns: [
      {
        title: "Global CLAUDE.md",
        path: "~/.claude/CLAUDE.md",
        code: "# Who I Am\nAJ Pardilla, Head of Product at Unicity International.\nI lead 8 product teams across ecommerce, checkout,\nmobile, CMS, and growth.\n\n# Tone & Style\n- Direct and executive. No fluff, no filler.\n- Never use em dashes. Avoid generic AI phrasing.\n- Write like I would — confident, specific, actionable.\n\n# Rules\n- Always ask clarifying questions before long tasks.\n- Default to bullet points for internal comms.\n- Include risks and tradeoffs, not just recommendations."
      },
      {
        title: "Project CLAUDE.md",
        path: "~/projects/the-method/CLAUDE.md",
        code: "# The Method\nDaily practice discipline app for goal-setting.\nExpo SDK 54 / React Native / Supabase backend.\n\n# Architecture\n- File-based routing via expo-router v6\n- Auth: Hydra OTP (NOT Supabase auth)\n- State: React Context + TanStack Query\n- AI: OpenAI GPT-4o for goal validation\n\n# Current Sprint\n- Morning/evening practice session flows\n- Streak tracking + coin reward system\n- Known bug: offline sync fails on practice submit"
      },
      {
        title: "Skill: ClickUp Ticket",
        path: "~/.claude/skills/clickup-ticket.md",
        code: "# Skill: Create ClickUp Ticket\nGenerate a ready-to-paste ClickUp task.\n\n# User Story\nAs a [role], I want [action],\nso that [outcome].\n\n# Format\n1. Title: verb + object (e.g. Fix login OTP flow)\n2. User story (above format, always included).\n3. Description: problem, expected behavior, steps.\n4. Acceptance criteria: 3-5 checkboxes max.\n5. Priority: Urgent / High / Normal / Low.\n6. Estimate: T-shirt size (S / M / L / XL).\n\n# Rules\n- Never combine multiple bugs into one ticket.\n- Always include a 'How to test' section.\n- Tag the relevant team: FGF, Checkout, Growth."
      }
    ],
    highlight: "⚡ These files grow with you. Every time you fix a bug, learn a pattern, or refine a process, add it to your CLAUDE.md or create a new skill. The more you build, the smarter Claude gets at your specific work.",
    callout: "In a world of agentic AI, prompting the same thing three times can produce three different results. CLAUDE.md and skills are what turn inconsistency into a repeatable, scalable system."
  },
  // Slide 17
  {
    type: "split-steps",
    tag: "SESSION 01 · HOW IT ALL WORKS",
    headline: "A real example, end to end.",
    scenario: "You're in the Shop Checkout project. You type one sentence into Claude Code:",
    prompt: "Write a ClickUp ticket for the Apple Pay button not rendering on the Japan checkout page.",
    steps: [
      { icon: "🪟", title: "CONTEXT WINDOW OPENS", desc: "Every time you send a prompt, Claude gets a context window — a limited amount of space for everything it can \"see.\" This includes your chat history (every message back and forth), your CLAUDE.md files, your skills, and any documents you point it to — like a plan doc or a spec. The more relevant context in the window, the better the output." },
      { icon: "👤", title: "GLOBAL CLAUDE.MD LOADS", desc: "Claude now knows you're AJ, Head of Product. Tone: direct, executive. Rules: include risks, no fluff, ask clarifying questions on big tasks." },
      { icon: "📁", title: "PROJECT CLAUDE.MD LOADS", desc: "Claude now knows this is Shop Checkout. Stack: Hydra, OrderCalc, Worldpay + Nuvei processors. Japan market uses PayPay and Apple Pay. Known issue: processor fallback logic in JP." },
      { icon: "⚡", title: "SKILL: CLICKUP TICKET ACTIVATES", desc: "Claude follows the playbook: user story format, verb+object title, acceptance criteria as checkboxes, priority rating, t-shirt estimate, 'How to test' section, tagged to Checkout team." },
      { icon: "💬", title: "YOUR PROMPT ENTERS THE WINDOW", desc: "One sentence. But the context window is already loaded with your role, your project, and the format. Claude doesn't start from zero — it starts from everything you've built." }
    ],
    output: {
      title: "CLAUDE'S OUTPUT",
      ticketTitle: "Fix Apple Pay button not rendering on JP checkout",
      content: "As a Japanese customer, I want to see the Apple Pay button on checkout, so that I can complete my purchase using my preferred payment method.\n\nDescription: Apple Pay button fails to render on the Japan checkout page. Likely related to the PayPay/Apple Pay coexistence logic in the JP processor config. Other markets unaffected.\n\nAcceptance Criteria:\n☐ Apple Pay button renders on JP checkout for eligible devices\n☐ PayPay remains available as an alternative\n☐ No regression on US/EU checkout flows\n\nPriority: High · Estimate: M · Team: Checkout"
    },
    punchline: "One sentence in. A fully formatted, project-aware, team-ready ticket out. That's what context does."
  },
  // Slide 18
  {
    type: "centered",
    headline: "Live Demo",
    subtitle: "Watch it happen in real time.",
    footer: "UNICITY · AI ACADEMY · SESSION 01"
  },
  // Slide 19
  {
    type: "tabbed",
    tag: "SESSION 01 · TIPS & TRICKS",
    headline: "Three habits that change everything.",
    tabs: [
      {
        title: "Always start in Plan Mode",
        body: "Before Claude writes a single line of code or text, make it plan first. Tell it to outline the approach, list the steps, and confirm with you before executing. This catches bad assumptions early, saves you from re-doing work, and gives you a checkpoint to redirect. Think of it as a standup before the sprint.",
        visual: { type: "code", content: "Always start by creating a plan.\nOutline steps before executing.\nConfirm the plan with me first." }
      },
      {
        title: "Clear the context window after the plan",
        body: "Once Claude gives you a solid plan, start a fresh conversation and paste the plan in. Why? The planning conversation is full of back-and-forth, dead ends, and noise. A clean context window with just the plan means Claude executes with focus, not baggage. Plan dirty, execute clean.",
        visual: { type: "split-box", left: { label: "MESSY CONTEXT", desc: "Planning chat, Back & forth, Dead ends, Noise" }, right: { label: "CLEAN CONTEXT", desc: "Fresh window, Just the plan, Focused execution" } }
      },
      {
        title: "Create a task ritual in your CLAUDE.md",
        body: "Define a repeatable process Claude must follow before, during, and after every task. This eliminates drift and keeps your project docs in sync automatically. Here's a real example from The Method app:",
        visual: { type: "code", content: "## Start-of-Task Ritual\nBefore touching any code, read these four docs in order:\n1. docs/PROJECT_MEMORY.md — current state of features\n2. docs/WORKING_LOG.md — history of what's been done\n3. docs/BUG_TRACKER.md — known bugs and status\n4. docs/ROADMAP.md — what's planned and complete\nNo exceptions. No coding until all four are read.\n\n## Post-Change Checks\nAfter every code change, run:\n  run biome\n  run /quality-gate skill\n\n## End-of-Task Ritual\nBefore committing (not after), update all four docs:\n- WORKING_LOG.md — add entry for this session\n- PROJECT_MEMORY.md — update changed features\n- BUG_TRACKER.md — mark resolved, add new ones\n- ROADMAP.md — check off completed items\nThen commit everything together (code + docs).\n\n## After Every Commit\nTell the user the pull command:\n  git pull origin claude/BRANCH && npm run expo:static:build" }
      }
    ]
  },
  // Slide 20
  {
    type: "cards-3",
    tag: "SESSION 01 · CHOOSE YOUR SETUP",
    headline: "Three ways to work with Claude or ChatGPT.",
    cards: [
      { letter: "VS", name: "VS Code + Claude Extension", description: "The familiar IDE with Claude built in. Best for people already in VS Code who want AI assist without switching tools.", example: "Benefits: zero learning curve if you're in VS Code, inline code suggestions, chat sidebar with file context, and you stay in one window. Good starting point for non-engineers on the team." },
      { letter: "CX", name: "Codex (OpenAI / ChatGPT)", description: "OpenAI's coding agent. If you're already in the ChatGPT ecosystem, Codex is your path to agentic coding with GPT models.", example: "Benefits: familiar if you use ChatGPT daily, strong at multi-file scaffolding and debugging, growing ecosystem of GPTs and plugins. Some of you are already here — that's fine. The principles we teach (context, skills, rituals) apply to any AI tool." },
      { letter: "CD", name: "Claude Desktop + Claude Code", description: "The native Claude app for chat and Cowork, paired with Claude Code in your terminal for full power.", example: "Benefits: deepest integration with CLAUDE.md and skills, Cowork can browse and use desktop apps, Claude Code has full terminal and file system access. This is the most powerful setup if you want to go all-in." }
    ]
  },
  // Slide 21
  {
    type: "tabbed-sections",
    tag: "SESSION 01 · SETUP GUIDE",
    headline: "Build your cockpit in 4 steps.",
    intro: "This is your checklist. Work through it top to bottom. By the end, you'll have a fully loaded AI workspace that remembers who you are, connects to your tools, and follows your standards.",
    sections: [
      {
        step: "Step 1: Pick a Coding Tool",
        items: [
          { name: "VS Code", desc: "Most flexible — supports Claude, Copilot, Gemini, and Codex extensions side by side" },
          { name: "Codex (OpenAI)", desc: "Best if you're already deep in the ChatGPT ecosystem" },
          { name: "Claude Code (Terminal)", desc: "Most powerful for builders — full file system and terminal access" },
          { name: "Antigravity", desc: "AI-native IDE — worth exploring if you want a fresh start" }
        ],
        callout: "Pick one and commit. You can always add another later. The important thing is to start."
      },
      {
        step: "Step 2: Add MCP Servers",
        items: [
          { name: "Slack MCP", desc: "Read channels, search messages, draft replies" },
          { name: "ClickUp MCP", desc: "Create tasks, update tickets, pull sprint data" },
          { name: "Google Drive MCP", desc: "Search docs, read specs, pull meeting notes" },
          { name: "Gmail MCP", desc: "Search emails, draft responses, read threads" },
          { name: "Google Calendar MCP", desc: "Check availability, create events, find meeting times" },
          { name: "Supabase MCP", desc: "Query databases, run migrations, manage schemas" },
          { name: "GitHub MCP", desc: "Create PRs, review code, search repos" }
        ],
        callout: "MCPs let your AI talk directly to your tools. Add the ones you use daily first, then expand over time."
      },
      {
        step: "Step 3: Create & Attach Context Files",
        items: [
          { name: "Global CLAUDE.md", desc: "~/.claude/CLAUDE.md — your identity, tone, rules (applies everywhere)" },
          { name: "Project CLAUDE.md", desc: "./project/CLAUDE.md — tech stack, architecture, current sprint" },
          { name: "Global Skills", desc: "~/.claude/skills/ — reusable playbooks (ClickUp tickets, PRDs, updates)" },
          { name: "Project Skills", desc: "./project/.claude/skills/ — project-specific playbooks" },
          { name: "Project GitHub Repo", desc: "Your codebase — Claude clones it, reads it, commits to it" }
        ],
        callout: "Start with a Global CLAUDE.md and one skill. You'll build the rest as you go. These files are your AI's memory."
      },
      {
        step: "Step 4: Login With Your Accounts",
        items: [
          { name: "GitHub", desc: "Code repos, PRs, version control — SSH key or personal access token" },
          { name: "Anthropic API", desc: "Claude API key — required for Claude Code and extensions" },
          { name: "OpenAI API", desc: "GPT models — required for Copilot, Codex, or ChatGPT integrations" },
          { name: "Google OAuth", desc: "One login for Drive, Calendar, and Gmail MCPs" },
          { name: "Slack OAuth", desc: "Workspace access for Slack MCP" },
          { name: "Supabase", desc: "Database access — project URL + API key" }
        ],
        callout: "One-time setup. Once connected, everything just works. No re-authenticating per session."
      }
    ]
  },
  // Slide 22
  {
    type: "centered",
    headline: "Questions?",
    subtitle: "Let's talk about it.",
    footer: "UNICITY · AI ACADEMY · SESSION 01"
  },
  // Slide 23
  {
    type: "assignment",
    tag: "SESSION 01 · HOMEWORK",
    headline: "This week's assignment.",
    due: "Present at Session 02",
    body: "Complete the must-do items below before Session 02. Stretch goals are optional but will put you ahead of the curve.",
    items: [
      { tier: "MUST DO", task: "Pick a coding tool and have a working setup on your machine" },
      { tier: "MUST DO", task: "Create a global CLAUDE.md with your role, tone, and 3 rules" },
      { tier: "MUST DO", task: "3 minutes to present — show your setup, your CLAUDE.md, and what you built with it" },
      { tier: "STRETCH", task: "Establish a shared repo of skills for your team — start collaborating on playbooks" },
      { tier: "STRETCH", task: "Come up with a personal project (Unicity or non-Unicity) you want to build with Claude or Codex" },
      { tier: "STRETCH", task: "Create your first pull request — prompt → code → commit → PR. It can be small. Go through the full cycle" },
      { tier: "BONUS", task: "Start in plan mode, clear the context window, then execute. Build a task ritual into your CLAUDE.md" }
    ]
  },
  // Slide 24
  {
    type: "centered",
    headline: "END",
    footer: ""
  }
];
