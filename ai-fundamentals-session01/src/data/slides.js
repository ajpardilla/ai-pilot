export const slides = [
  // ─── SECTION A: OPENING (1-3) ───
  {
    id: 1,
    type: "title",
    topTagLine: "UNICITY · AI ACADEMY · CROSS-DEPARTMENT SERIES",
    titleLines: [
      { text: "Unicity", variant: "muted-italic" },
      { text: "AI", variant: "strong" },
      { text: "ACADEMY", variant: "accent-yellow" },
    ],
    subtitle:
      "Building AI fluency across every team at Unicity.",
    sessionText: "SESSION 01 — AI FUNDAMENTALS",
  },
  {
    id: 1.05,
    type: "centered",
    headline: "Goals for this program.",
    subtitle: null,
    footer: "UNICITY · AI ACADEMY · SESSION 01",
  },
  {
    id: 1.1,
    type: "visual-statement",
    visual: "skill-gauge",
    tag: "WHY WE'RE HERE",
    headline: "Use AI better.",
    body: "We know most of you are already using AI. This program isn't about starting from zero — it's about creating structure so you use it more effectively, more safely, and get more useful and productive results.",
  },
  {
    id: 1.2,
    type: "video",
    tag: "WHY WE'RE HERE",
    headline: "The world is changing fast.",
    embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=2017321919364686301&theme=dark",
    caption: null,
  },
  {
    id: 1.25,
    type: "visual-statement",
    visual: "competitive-edge",
    tag: "WHY WE'RE HERE",
    headline: "Stay competitive.",
    body: "The companies that leverage AI well will outpace those that don't. This is about Unicity staying ahead by making sure every team is equipped with the latest tools and knows how to use them. AI fluency isn't optional anymore — it's a competitive advantage.",
  },
  {
    id: 1.3,
    type: "visual-statement",
    visual: "work-joy",
    tag: "WHY WE'RE HERE",
    headline: "Enjoy your work more.",
    body: "Research shows that learning AI effectively makes careers more enjoyable. It reduces mundane tasks, boosts creativity, and acts as a rewarding partner that keeps you engaged in the work that actually matters. Less busywork, more impact.",
  },
  {
    id: 2,
    type: "agenda",
    tag: "40 MIN PRESENTATION · 20 MIN Q&A",
    headline: "What we're covering.",
    items: [
      { title: "The AI landscape: Claude, ChatGPT, Gemini", color: "#F3D34A" },
      { title: "Claude products: Chat, Cowork, Code", color: "#FF7B39" },
      { title: "Prompting: 3 questions before you hit enter", color: "#27D6E0" },
      { title: "Context windows explained", color: "#8E76FF" },
      { title: "Safe use, Unicity policy & homework", color: "#31E3A5" },
    ],
  },
  {
    id: 3,
    type: "audience-poll",
    tag: "QUICK PULSE CHECK",
    question: "Raise your hand if you've used ChatGPT or Claude this week.",
    followUp:
      "Keep it up if you used it for actual work — not just asking what's for dinner.",
  },

  // ─── SECTION B: THE AI LANDSCAPE (4-6) ───
  {
    id: 4,
    type: "visual-statement",
    visual: "vector-space",
    tag: "LLMs FOR HUMANS",
    headline: "What is an LLM, really?",
    body: "LLM stands for Large Language Model. Think of it as the world's most advanced pattern-matcher — it's read billions of documents and learned how language works. When you type a prompt, it predicts the most helpful response based on those patterns. It doesn't \"think\" — it pattern-matches. That's why <em>what you type in matters so much</em>. Better input = better patterns matched = better output.",
  },
  {
    id: 5,
    type: "cards",
    tag: "THE BIG THREE",
    headline: "Three LLMs you should know.",
    cards: [
      {
        letter: "C",
        name: "Claude (Anthropic)",
        description:
          "Built with a focus on safety, helpfulness, and long-form reasoning. Strong at writing, analysis, following complex instructions, and working with large documents. Pioneer of MCP (Model Context Protocol) — an open standard for connecting AI to your tools and workflows.",
        example:
          "Best for: detailed writing, document analysis, multi-step reasoning, nuanced business tasks. Unicity's primary AI tool.",
      },
      {
        letter: "G",
        name: "ChatGPT (OpenAI)",
        description:
          "The most widely used AI assistant. Strong general-purpose capabilities, large plugin ecosystem, and image generation via DALL-E.",
        example:
          "Best for: general Q&A, creative brainstorming, quick research, image generation. Most of you started here.",
      },
      {
        letter: "Ge",
        name: "Gemini (Google)",
        description:
          "Google's AI, deeply integrated with Google Workspace. Can search the web in real-time and access your Gmail, Docs, and Drive.",
        example:
          "Best for: real-time web search, Google Workspace integration, summarizing emails and docs you already have in Google.",
      },
    ],
  },
  {
    id: 6,
    type: "audience-poll",
    tag: "SHOW OF HANDS",
    question: "Which one do you use the most?",
    followUp:
      "Type it in the chat — I want to see it. ChatGPT? Claude? Gemini? Something else?",
  },

  // ─── SECTION C: CLAUDE PRODUCTS OVERVIEW (7) ───
  {
    id: 7,
    type: "cards",
    tag: "CLAUDE ECOSYSTEM",
    headline: "One AI, three ways to use it.",
    cards: [
      {
        letter: "Chat",
        name: "Claude Chat",
        description:
          "The conversational interface. Type a question or task, get an answer. Good for one-off requests: drafting, summarizing, brainstorming, analyzing data, writing copy.",
        example:
          "Marketing: rewrite a landing page headline. Sales: create distributor training materials. CS: draft an escalation response. Creative: write 5 variations of ad copy for A/B testing.",
      },
      {
        letter: "Co",
        name: "Claude Cowork",
        description:
          "Claude with agency. Upload files to a Project and Claude remembers them across conversations — PDFs, docs, spreadsheets, images. It can also connect to your work tools through integrations (like Slack, Google Drive, and ClickUp) and create multiple documents in one workflow.",
        example:
          "Marketing: research competitors and build a full comparison doc. Sales: analyze distributor performance data and build success playbooks. CS: analyze a folder of ticket exports. Creative: read your brand assets folder and generate on-brand content.",
      },
      {
        letter: "CC",
        name: "Claude Code",
        description:
          "The command-line power tool for developers. Full access to your codebase, terminal, and file system. Built for engineers and technical builders.",
        example:
          "For advanced users: scaffold apps, debug code, refactor modules, build automations. If you're not in a terminal daily, Chat and Cowork have you covered.",
      },
    ],
    footnote: "Download Claude Desktop → claude.ai/download",
  },

  // ─── SECTION D: HOW TO USE AI — CRAFT + CONTEXT ───
  {
    id: 7.91,
    type: "visual-statement",
    visual: "fundamentals-flow",
    tag: "AI FUNDAMENTALS",
    headline: "2 important skills that help you become an effective AI Pilot.",
    body: null,
    cards: [
      {
        icon: "✍️",
        title: "Prompting",
        body: "How you talk to AI determines what you get back.",
      },
      {
        icon: "🧠",
        title: "Context Window",
        body: "What the AI can \"see\" when it generates a response.",
      },
    ],
    subtext: "Master these 2 and you'll be unstoppable.",
  },
  {
    id: 8,
    type: "statement",
    tag: "SKILLSET 01 · PROMPTING",
    headline: "The Art of Prompting.",
    body: "Prompting is the skill of <em>properly articulating your problem and desired outcome to AI</em>. The clearer you are about what you need, the context behind it, and how you want the answer — the better the result.",
  },
  {
    id: 9,
    type: "cards",
    tag: "BEFORE YOU HIT ENTER",
    headline: "Before you hit enter, ask yourself 3 questions.",
    cards: [
      {
        letter: "1",
        name: "Did I set the identity and context?",
        description: "Tell AI who it should be and what it needs to know. A senior strategist writes differently than a general assistant.",
        example:
          "\"You are a senior marketing strategist at Unicity. We're launching Unimate in Thailand next quarter. Our audience is health-conscious millennials aged 25-35.\"",
      },
      {
        letter: "2",
        name: "Did I explain the problem?",
        description: "Articulate the situation clearly. Give AI the background it needs to understand what you're dealing with.",
        example:
          "\"We're losing market share to Brand X on price. Our current messaging focuses on ingredients but doesn't connect emotionally with the Thai market.\"",
      },
      {
        letter: "3",
        name: "Did I state my desired outcome?",
        description: "Be specific about what you want to walk away with. Vague asks get vague results.",
        example:
          "\"I need a campaign brief with 3 messaging angles that each address a different customer pain point. This is for our regional marketing team to execute.\"",
      },
    ],
  },
  {
    id: 10,
    type: "comparison",
    tag: "IN ACTION",
    headline: "Same task. Different prompt.",
    task: "Write a customer email about a shipping delay.",
    leftTitle: "NO IDENTITY · NO PROBLEM · NO OUTCOME",
    leftPrompt:
      "Write an email to a customer about their shipping delay.",
    leftOutput: [
      "Subject: Shipping Delay",
      "",
      "Dear Customer,",
      "",
      "We are writing to inform you that your order has",
      "been delayed. We apologize for the inconvenience",
      "and are working to resolve this as soon as possible.",
      "",
      "Thank you for your patience.",
    ],
    leftVerdict:
      "Generic. Could be from any company. No specifics. Customer feels like a number.",
    rightTitle: "IDENTITY + PROBLEM + OUTCOME",
    rightPrompt: [
      "① IDENTITY: You are a Unicity customer care specialist writing to a VIP distributor.",
      "",
      "② PROBLEM: Order #UNI-38291 is delayed 5 days due to customs clearance in Thailand. Expected delivery is now March 30.",
      "",
      "③ OUTCOME: Write a personal apology email. Include the new delivery date, a direct contact number, and offer a 10% credit on their next order. Tone: warm, empathetic, solution-focused. Under 150 words.",
    ],
    rightOutput: [
      "Subject: Update on Your Order #UNI-38291",
      "",
      "Hi Sarah,",
      "",
      "I wanted to personally reach out about your recent",
      "order. It's currently in customs clearance in Thailand,",
      "and we now expect delivery by March 30.",
      "",
      "I'm sorry for the delay. To make this right, I've",
      "applied a 10% credit to your next order — it'll",
      "be there automatically.",
      "",
      "Questions? Reach me directly at +1-801-555-0142.",
      "",
      "Warm regards, Alex",
    ],
    rightVerdict:
      "Personal. Specific. Solution-oriented. Customer feels valued. Ready to send.",
  },
  {
    id: 10.8,
    type: "visual-statement",
    visual: "time-save",
    tag: "THE REAL TIME SAVER",
    headline: "Slow down to speed up.",
    body: "Spending 2 extra minutes thinking about your prompt saves you 20 minutes of back-and-forth asking AI to redo things you forgot to mention. The best AI users don't type faster — they think before they type.",
  },
  {
    id: 11,
    type: "audience-poll",
    tag: "BE HONEST",
    question: "Raise your hand if your typical AI prompt is one sentence.",
    followUp:
      "After seeing that — who's going to try a longer prompt today?",
  },
  // ─── SECTION E: CONTEXT WINDOWS ───
  {
    id: 13,
    type: "audience-poll",
    tag: "HAS THIS HAPPENED TO YOU?",
    question: "Raise your hand if you've noticed AI getting worse the longer you chat with it.",
    followUp: null,
  },
  {
    id: 14,
    type: "context-flow",
    tag: "SKILLSET 02 · CONTEXT WINDOW",
    headline: "The context window.",
    leftDescription:
      "When you send a prompt, the AI loads everything it can \"see\" into one window. Think of it as a desk — everything has to fit.",
    global: {
      levelLabel: "YOUR PROMPT",
      path: "This triggers everything below",
      claudeTitle: "WHAT YOU TYPED",
      claudeText: "Your message is the starting point.",
      skillsTitle: "ATTACHED FILES",
      skillTags: ["PDFs", "Docs", "Data"],
      skillsText: "Documents you've uploaded with your prompt.",
    },
    projects: [
      {
        boxLabel: "Chat History",
        path: "Previous messages in this conversation",
        claudeTitle: "YOUR MESSAGES",
        claudeText: "Every message you've sent takes up space.",
        skillsTitle: "AI RESPONSES",
        skillTags: ["Answers", "Drafts", "Follow-ups"],
        skillsText: "Every AI response stays in the window too.",
      },
      {
        boxLabel: "Tools & Skills",
        path: "Connected integrations & reusable workflows",
        claudeTitle: "MCPs (TOOLS)",
        claudeText: "Slack, Drive, ClickUp — tools AI can use.",
        skillsTitle: "SKILLS",
        skillTags: ["Workflows", "Templates", "Playbooks"],
        skillsText: "Reusable instructions for specific tasks.",
      },
    ],
    mergeLabel: "▼ ALL OF THIS = THE CONTEXT WINDOW ▼",
    mergeTitle: "THE AI'S WORKING MEMORY",
    mergeText:
      "This memory has a limit. As it fills up, older context gets forgotten or loses detail — that's why long conversations get worse over time.",
    plus: "↓",
    promptTitle: "AI GENERATES A RESPONSE",
    promptText:
      "The quality of this response depends on everything above it.",
  },

  {
    id: 14.1,
    type: "infographic",
    visual: "content-rot",
  },
  // ─── SECTION F: DEEP DIVE — CHAT, COWORK, CODE ───
  {
    id: 14.5,
    type: "cards",
    tag: "NOW LET'S GO DEEPER",
    headline: "One AI, three ways to use it.",
    cards: [
      {
        letter: "Chat",
        name: "Claude Chat",
        description:
          "The conversational interface. Type a question or task, get an answer. Good for one-off requests: drafting, summarizing, brainstorming, analyzing data, writing copy.",
        example:
          "Marketing: rewrite a landing page headline. Sales: create distributor training materials. CS: draft an escalation response. Creative: write 5 variations of ad copy for A/B testing.",
      },
      {
        letter: "Co",
        name: "Claude Cowork",
        description:
          "Claude with agency. Upload files to a Project and Claude remembers them across conversations — PDFs, docs, spreadsheets, images. It can also connect to your work tools through integrations (like Slack, Google Drive, and ClickUp) and create multiple documents in one workflow.",
        example:
          "Marketing: research competitors and build a full comparison doc. Sales: analyze distributor performance data and build success playbooks. CS: analyze a folder of ticket exports. Creative: read your brand assets folder and generate on-brand content.",
      },
      {
        letter: "CC",
        name: "Claude Code",
        description:
          "The command-line power tool for developers. Full access to your codebase, terminal, and file system. Built for engineers and technical builders.",
        example:
          "For advanced users: scaffold apps, debug code, refactor modules, build automations. If you're not in a terminal daily, Chat and Cowork have you covered.",
      },
    ],
    footnote: "Download Claude Desktop → claude.ai/download",
  },
  {
    id: 15,
    type: "product-showcase",
    mockType: "chat",
    tag: "CLAUDE CHAT · YOUR STARTING POINT",
    headline: "Chat is your everyday AI conversation.",
    description:
      "Type a question or task, get an answer. Paste in text and tell Claude what you need. It's like texting a brilliant colleague who never sleeps, never judges, and always has time.",
    stat: {
      number: "Most",
      label: "AI users never go beyond basic chat. That's fine as a starting point — but the real productivity gains are in the next level.",
    },
    limitations: [
      "You have to upload files manually — it can't access your computer or browse the web on its own",
      "Can't take actions in other tools (no Slack, no Drive, no ClickUp)",
      "Can't work on multi-step tasks autonomously — you drive every step",
    ],
    tryThis: [
      {
        dept: "Marketing",
        items: [
          "Paste a photo of a whiteboard from your brainstorm session — Claude transcribes it, organizes the notes, and turns it into a structured campaign brief.",
          "Upload a spreadsheet of campaign performance data and ask \"What story does this data tell?\" — Claude finds patterns and insights you didn't ask for.",
        ],
      },
      {
        dept: "Sales",
        items: [
          "Paste a distributor's monthly performance data and ask Claude to identify what's holding them back and suggest 3 specific actions to help them grow.",
          "Ask Claude to turn your best distributor success story into a reusable training template that other distributors can follow step by step.",
        ],
      },
      {
        dept: "CS",
        items: [
          "Paste a confusing customer email and ask \"What is this person actually asking for?\" — Claude cuts through the frustration and identifies the core issue and best resolution path.",
          "Ask Claude to take your team's top 20 canned responses and rewrite them to sound human, empathetic, and on-brand — instant quality upgrade.",
        ],
      },
      {
        dept: "Creative",
        items: [
          "Upload a product photo and ask Claude to write 4 platform-specific social captions — Instagram, LinkedIn, Facebook, X — each in the right format and character limit.",
          "Paste your brand voice guidelines and a competitor's ad, then ask \"How would we say this?\" — Claude rewrites it in your voice instantly.",
        ],
      },
    ],
    mockMessages: [
      { from: "user", text: "Rewrite this Unimate product description for Thailand. Tone: aspirational but grounded. Under 80 words." },
      { from: "claude", text: "Here's your rewrite:\n\nUnimate is your daily ritual for clarity and calm. Crafted from high-quality yerba mate, it supports focus, mood, and metabolic health — naturally. One sachet, one moment of intention, every morning. Join thousands across Thailand who've made Unimate part of their Feel Great journey." },
      { from: "user", text: "Make it shorter and add a call to action." },
      { from: "claude", text: "Unimate: your morning ritual for clarity and calm. Premium yerba mate that supports focus, mood, and metabolism — naturally. Join the Feel Great movement. Try it today." },
    ],
  },
  {
    id: 16,
    type: "product-showcase",
    mockType: "cowork",
    tag: "CLAUDE COWORK · YOUR AI ASSISTANT",
    headline: "Cowork doesn't just talk. It works.",
    description:
      "Cowork can browse the web, work with uploaded files, and connect to your tools. Create a Project to save files, instructions, and context — Claude remembers everything next time you come back. It's like handing a brief to an assistant who actually gets things done.",
    stat: {
      number: "Way",
      label: "more output. People who use Projects and Cowork consistently finish in minutes what used to take hours — less copy-pasting, less context-setting, less starting over.",
    },
    tryThis: [
      {
        dept: "Marketing",
        items: [
          "Tell Cowork to browse 5 competitor websites, extract their pricing, positioning, and key messaging, then build a comparison matrix — no tab-switching, no copy-pasting.",
          "Create a \"Brand Bible\" Project. Upload your guidelines, tone doc, and sample content. Now every conversation in that project automatically writes in your brand voice.",
        ],
      },
      {
        dept: "Sales",
        items: [
          "Upload your top 10 distributors' performance data to a Project. Ask Cowork to find the patterns — what do successful distributors do differently? — and build a playbook from it.",
          "Ask Cowork to analyze a struggling distributor's activity, compare it to your top performers, and draft a personalized coaching plan with specific next steps.",
        ],
      },
      {
        dept: "CS",
        items: [
          "Upload a month's worth of support ticket exports to a Project. Ask Cowork to categorize by root cause, rank by frequency, and draft a recommendation for what to fix first.",
          "Tell Cowork to browse your help center and find every article that still references the old return policy — it delivers a list with links so your team knows exactly what to update.",
        ],
      },
      {
        dept: "Creative",
        items: [
          "Ask Cowork to research the top 10 wellness brands on Instagram — pull their visual style, posting frequency, and engagement rates — then summarize what's working into a trend report.",
          "Upload a product photo and campaign brief to a Project. Ask Cowork to generate ad copy for 3 platforms, a blog intro, and an email subject line — all from one prompt, all on-brand.",
        ],
      },
    ],
    mockProject: "Q2 Marketing",
    mockFiles: ["brand-guidelines.pdf", "campaign-brief.docx", "target-audience.csv", "competitor-list.xlsx"],
    mockActions: [
      { type: "tool", icon: "🌐", text: "Browsing competitorhealth.com..." },
      { type: "tool", icon: "🌐", text: "Browsing wellnessplus.io..." },
      { type: "thinking", icon: "💭", text: "Analyzing pricing models across 5 competitors..." },
      { type: "tool", icon: "📊", text: "Building comparison matrix..." },
      { type: "result", icon: "✓", text: "Competitive analysis complete — 5 brands, 12 data points each, matrix ready." },
    ],
  },
  {
    id: 16.5,
    type: "centered",
    headline: "Live Demo",
    subtitle: "Let's see it in action.",
    footer: "UNICITY · AI ACADEMY · SESSION 01",
  },
  {
    id: 17,
    type: "visual-statement",
    visual: "terminal-mock",
    tag: "CLAUDE CODE · FOR ADVANCED USERS",
    headline: "Claude Code.",
    body: "Claude Code lives in your terminal and has full access to your codebase, file system, and developer tools. It can write code, run tests, create pull requests, and build entire features. For everyone else — Chat and Cowork have you completely covered.",
  },
  {
    id: 19,
    type: "table",
    tag: "WHEN TO USE WHICH",
    headline: "Use cases by department.",
    columns: ["", "Chat", "Cowork", "Code"],
    rows: [
      {
        dept: "Marketing",
        chat: "Rewrite copy, brainstorm campaigns, generate subject lines",
        cowork: "Competitor research across sites, build comparison docs, multi-asset content from one brief",
        code: "—",
      },
      {
        dept: "Sales",
        chat: "Create training materials, draft distributor communications, build coaching scripts",
        cowork: "Analyze distributor performance data, build success playbooks, generate personalized coaching plans",
        code: "—",
      },
      {
        dept: "CS",
        chat: "Draft responses, rewrite canned replies, create FAQs",
        cowork: "Categorize ticket exports, audit help center articles, analyze complaint trends",
        code: "—",
      },
      {
        dept: "Creative",
        chat: "Ad copy variations, social captions, brand voice rewrites",
        cowork: "Instagram trend research, multi-platform content from one photo, mood board from references",
        code: "—",
      },
    ],
    footnote: "Start with Chat. Graduate to Cowork. Code is for developers.",
  },

  // ─── SECTION G: SAFE USE, RECAP & WRAP-UP ───
  {
    id: 21,
    type: "roles-contrast",
    variant: "do-dont",
    headline: "Unicity AI Policy",
    left: {
      title: "ALWAYS DO",
      bullets: [
        "Use your corporate Unicity account — personal accounts have zero privacy protections",
        "Only use IT-approved AI tools — unapproved tools (shadow AI) are our #1 risk",
        "Fact-check AI output before sending — AI can hallucinate facts that damage distributor relationships",
        "Get brand review before publishing any AI-generated content externally",
        "Report mistakes or concerns to IT immediately (support@unicity.com) — no penalty for honest reporting",
      ],
    },
    right: {
      title: "NEVER DO",
      bullets: [
        "Paste distributor names, commissions, or volume data into personal or unapproved AI tools",
        "Paste customer or employee PII (names, addresses, phone numbers, SSNs)",
        "Paste credentials, passwords, API keys, or payment data",
        "Paste unreleased financial results, forecasts, or NDA-covered partner data",
        "Upload customer or distributor photos/videos without confirming vendor data agreement",
        "Clone anyone's voice without written consent + Legal approval",
      ],
    },
    takeaway:
      "If you wouldn't post it on a public billboard, don't put it in a prompt.",
  },
  {
    id: 21.5,
    type: "cards",
    tag: "TL;DR — WHAT TO ACTUALLY DO",
    headline: "When do I use what?",
    cards: [
      {
        letter: "💬",
        name: "Use Chat when…",
        description: "You need a quick answer, a rewrite, a brainstorm, or you're working with one thing at a time. Paste it in, get it back, move on.",
        example: "\"Rewrite this email.\" \"Give me 5 subject lines.\" \"Explain this data.\" \"What's a better way to say this?\"",
      },
      {
        letter: "🚀",
        name: "Use Cowork when…",
        description: "You have a real project — multiple files, research across sites, or a multi-step task you'd normally spend an hour on. Hand it a brief and let it work.",
        example: "\"Research 5 competitors and build a comparison doc.\" \"Analyze this folder of tickets.\" \"Read my brand guide and write content that matches.\"",
      },
      {
        letter: "✍️",
        name: "Prompting superpower",
        description: "Identity → Problem → Desired Outcome. 2 minutes of thinking saves 20 minutes of redoing. The quality of your ask = the quality of your answer.",
        example: "Don't say \"write an email.\" Say who you are, what happened, and exactly what you want back.",
      },
      {
        letter: "🧠",
        name: "Context window hack",
        description: "AI has a memory limit. The longer the chat, the worse it gets. New topic = new chat. Keep it fresh.",
        example: "If Claude starts forgetting things or giving weird answers — start a new conversation. It's not broken, it's full.",
      },
    ],
  },
  {
    id: 22,
    type: "homework",
    tag: "SESSION 01 · HOMEWORK",
    headline: "Before Session 02.",
    due: "Complete before your department's role-based session",
    assignment:
      "These tasks prepare you for hands-on, role-specific training. Come ready to share.",
    items: [
      "Sign into your corporate Claude account at claude.ai — confirm you can access it",
      "Pick a real problem you're working on right now. Write a prompt using Identity → Problem → Desired Outcome. Save the prompt AND the output.",
      "Identify one repetitive task in your role that AI could help with — bring it to Session 02",
      "Try Claude Cowork — give it a multi-step task like researching a topic and summarizing findings into a doc",
      "Come ready to share: what you tried, what worked, and what didn't",
    ],
  },
  {
    id: 23,
    type: "centered",
    headline: "Questions?",
    subtitle: "We have 20 minutes. Nothing is off limits.",
    footer: "UNICITY · AI ACADEMY · SESSION 01",
  },
  {
    id: 24,
    type: "end",
    headline: "END",
  },
];

export const TOTAL_SLIDES = slides.length;
