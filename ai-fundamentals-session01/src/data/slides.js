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
    id: 2,
    type: "audience-poll",
    tag: "QUICK PULSE CHECK",
    question: "Raise your hand if you've used ChatGPT or Claude this week.",
    followUp:
      "Keep it up if you used it for actual work — not just asking what's for dinner.",
  },
  {
    id: 3,
    type: "agenda",
    tag: "40 MIN PRESENTATION · 20 MIN Q&A",
    headline: "What we're covering.",
    items: [
      { title: "The AI landscape: Claude, ChatGPT, Gemini", color: "#F3D34A" },
      { title: "Claude products: Chat, Cowork, Code", color: "#FF7B39" },
      { title: "The CRAFT prompting framework", color: "#27D6E0" },
      { title: "Context windows explained", color: "#8E76FF" },
      { title: "Safe use, Unicity policy & homework", color: "#31E3A5" },
    ],
  },

  // ─── SECTION B: THE AI LANDSCAPE (4-6) ───
  {
    id: 4,
    type: "visual-statement",
    visual: "vector-space",
    tag: "LLMs FOR HUMANS",
    headline: "What is an LLM, really?",
    body: "LLM stands for Large Language Model. It converts words into numbers (vectors) and maps them into a giant space where similar concepts live close together. \"King\" is near \"queen.\" \"Cat\" is near \"dog.\" When you type a prompt, the AI navigates this space to predict the most helpful next words. It doesn't \"think\" — it finds patterns. That's why what you type in matters so much.",
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
          "Built with a focus on safety, helpfulness, and long-form reasoning. Strong at writing, analysis, following complex instructions, and working with large documents.",
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
    question: "Which one is your go-to?",
    followUp:
      "Raise your hand for ChatGPT... now Claude... now Gemini... now raise your hand if you've never tried Claude.",
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
          "Marketing: rewrite a landing page headline. Sales: summarize a 40-page agreement. CS: draft an escalation response. Creative: write 5 variations of ad copy for A/B testing.",
      },
      {
        letter: "Co",
        name: "Claude Cowork",
        description:
          "Claude with agency. It can browse the web, read files on your desktop, use your apps, and work across tools. Think of it as an AI assistant that can actually do things, not just talk about them.",
        example:
          "Marketing: research competitors and build a comparison matrix. Sales: pull quarterly data and draft a QBR deck. CS: read 20 tickets and categorize top issues. Creative: research design trends and compile a mood board with references.",
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

  // ─── SECTION D: HOW TO USE AI — CRAFT (8-12) ───
  {
    id: 8,
    type: "statement",
    tag: "THE CORE SKILL",
    headline: "The prompt is the product.",
    body: "Before we go deep into each tool — let's learn how to actually talk to AI. Every AI tool runs on the same principle: garbage in, garbage out. The difference between a useless AI response and a brilliant one is almost always the prompt. CRAFT is a simple 5-part framework that makes every prompt better.",
  },
  {
    id: 9,
    type: "cards",
    tag: "THE CRAFT FRAMEWORK",
    headline: "CRAFT your prompt.",
    cards: [
      {
        letter: "C",
        name: "Context",
        description: "What background does the AI need?",
        example:
          "We're launching a new product line in Southeast Asia next quarter. Our target audience is health-conscious millennials aged 25-35.",
      },
      {
        letter: "R",
        name: "Role",
        description: "Who should the AI act as?",
        example:
          "You are a senior marketing strategist with 10 years of experience in health & wellness brands in APAC markets.",
      },
      {
        letter: "A",
        name: "Action",
        description: "What specific task needs to be done?",
        example:
          "Create a launch campaign brief with 3 messaging angles, each targeting a different pain point.",
      },
      {
        letter: "F",
        name: "Format",
        description: "How should the output look?",
        example:
          "Use a table with columns: Angle Name, Pain Point, Key Message, Suggested Channel. Keep each row under 50 words.",
      },
      {
        letter: "T",
        name: "Tone",
        description: "How should it sound?",
        example:
          "Professional but approachable. Think brand voice, not corporate memo. Avoid jargon — this goes to regional distributors.",
      },
    ],
  },
  {
    id: 10,
    type: "comparison",
    tag: "CRAFT IN ACTION",
    headline: "Same task. Different prompt.",
    task: "Write a customer email about a shipping delay.",
    leftTitle: "WHAT MOST PEOPLE TYPE",
    leftPrompt:
      "Write an email to a customer about their shipping delay.",
    leftOutput: [
      "Subject: Shipping Delay",
      "",
      "Dear Customer,",
      "",
      "We are writing to inform you that your order has been delayed. We apologize for the inconvenience and are working to resolve this as soon as possible.",
      "",
      "Thank you for your patience.",
    ],
    leftVerdict:
      "Generic. Could be from any company. No specifics. Customer feels like a number.",
    rightTitle: "THE CRAFT VERSION",
    rightPrompt: [
      "You are a Unicity customer care specialist writing to a VIP distributor.",
      "",
      "Context: Order #UNI-38291 is delayed 5 days due to customs clearance in Thailand. Expected delivery is now March 30.",
      "",
      "Write a personal apology email. Include the new delivery date, a direct contact number, and offer a 10% credit on their next order. Tone: warm, empathetic, solution-focused. Under 150 words.",
    ],
    rightOutput: [
      "Subject: Update on Your Order #UNI-38291",
      "",
      "Hi Sarah,",
      "",
      "I wanted to personally reach out about your recent order. It's currently held in customs clearance in Thailand, and we now expect delivery by March 30.",
      "",
      "I know that's not what you were hoping to hear, and I'm sorry for the delay. To make this right, I've applied a 10% credit to your next order — it'll be there automatically.",
      "",
      "If you have any questions, you can reach me directly at +1-801-555-0142.",
      "",
      "Thank you for being a valued partner.",
      "",
      "Warm regards, Alex",
    ],
    rightVerdict:
      "Personal. Specific. Solution-oriented. Customer feels valued.",
  },
  {
    id: 11,
    type: "audience-poll",
    tag: "BE HONEST",
    question: "Raise your hand if your typical AI prompt is one sentence.",
    followUp:
      "After seeing CRAFT — who's going to try a longer prompt today?",
  },
  {
    id: 12,
    type: "tips",
    tag: "PROMPTING QUICK WINS",
    headline: "Three habits that change everything.",
    tips: [
      {
        key: "01",
        title: "Start with \"You are a...\"",
        body: "Giving the AI a role is the single biggest quality improvement you can make. A \"senior marketing strategist\" writes differently than a \"general assistant.\" Try it: add a role to your next prompt and compare the output.",
        visualType: "code",
        codeLines: [
          "You are a senior marketing strategist",
          "with 10 years of APAC experience.",
          "",
          "You are a Unicity customer care lead",
          "who specializes in distributor relations.",
          "",
          "You are a supply chain analyst",
          "preparing a report for the COO.",
        ],
      },
      {
        key: "02",
        title: "Specify the format upfront",
        body: "Don't let the AI guess how you want the output. Say \"bullet points,\" \"table with these columns,\" \"under 200 words,\" or \"email format.\" This eliminates 80% of the back-and-forth where you ask it to reformat.",
        visualType: "comparison",
        leftTitle: "VAGUE",
        leftItems: ["Write a summary", "Make it good", "Not too long"],
        rightTitle: "SPECIFIC",
        rightItems: ["3 bullet points", "Under 100 words", "Table with 4 columns"],
      },
      {
        key: "03",
        title: "Iterate, don't restart",
        body: "If the first output isn't right, don't start over. Tell the AI what to fix: \"Make it shorter,\" \"Add more data,\" \"Change the tone to be more formal.\" Each follow-up builds on the context. Restarting throws away everything the AI learned about your task.",
        visualType: "code",
        codeLines: [
          "Good follow-ups:",
          "  \"Make the tone more formal\"",
          "  \"Add a comparison to last quarter\"",
          "  \"Shorten to 100 words\"",
          "  \"Now convert this to a table\"",
          "",
          "Bad habit:",
          "  Starting a brand new chat every time",
        ],
      },
    ],
  },

  // ─── SECTION E: CONTEXT WINDOWS (13-14) ───
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
    tag: "HOW AI SEES YOUR CONVERSATION",
    headline: "The context window, explained.",
    leftDescription:
      "Every time you talk to an AI, it can only \"see\" a limited amount of information at once. This is called the context window. Think of it as the AI's desk — everything it needs to work with has to fit on that desk. If the desk is cluttered, the important things get lost. If it's organized with exactly what's needed, the AI performs brilliantly.",
    global: {
      levelLabel: "SYSTEM INSTRUCTIONS",
      path: "Set by Claude / your admin",
      claudeTitle: "BUILT-IN RULES",
      claudeText:
        "Safety guidelines, helpfulness rules, and behavioral instructions that are always present. You don't see these, but they take up space on the desk.",
      skillsTitle: "YOUR SETTINGS",
      skillTags: ["Language", "Tone prefs", "Safety"],
      skillsText:
        "Any preferences you or your admin have configured. These load automatically.",
    },
    projects: [
      {
        boxLabel: "Your Messages",
        path: "Everything you've typed",
        claudeTitle: "YOUR PROMPTS",
        claudeText:
          "Every message you've sent in this conversation. Each one takes up space. Long conversations fill the desk faster.",
        skillsTitle: "ATTACHED FILES",
        skillTags: ["PDFs", "Spreadsheets", "Docs"],
        skillsText:
          "Documents you've uploaded or pasted. Powerful but take significant space. Upload only what's relevant.",
      },
      {
        boxLabel: "AI Responses",
        path: "Everything Claude has written",
        claudeTitle: "AI OUTPUT",
        claudeText:
          "Every response the AI has generated also stays on the desk. Long, verbose responses eat into available space.",
        skillsTitle: "CONVERSATION HISTORY",
        skillTags: ["Back-and-forth", "Edits", "Follow-ups"],
        skillsText:
          "The full dialogue. This is why long conversations eventually lose quality — the desk gets too full.",
      },
    ],
    mergeLabel: "▼ EVERYTHING ABOVE = THE CONTEXT WINDOW ▼",
    mergeTitle: "THE AI'S WORKING MEMORY",
    mergeText:
      "When the desk fills up, older content gets compressed or dropped. New topic = new chat. Upload only what's relevant. One task per prompt.",
    plus: "+",
    promptTitle: "YOUR LATEST MESSAGE",
    promptText:
      "Your most recent prompt is what the AI focuses on most. But everything above it shapes the response. A great prompt in a cluttered window still underperforms.",
  },

  // ─── SECTION F: DEEP DIVE — CHAT, COWORK, CODE (15-20) ───
  {
    id: 15,
    type: "product-showcase",
    mockType: "chat",
    tag: "CLAUDE CHAT · YOUR STARTING POINT",
    headline: "Chat is your everyday AI conversation.",
    description:
      "Type a question or task, get an answer. Paste in text and tell Claude what you need. It's like texting a brilliant colleague who never sleeps, never judges, and always has time.",
    stat: {
      number: "80%",
      label: "of AI users never go beyond basic chat. That's fine as a starting point — but the real productivity gains are in the next level.",
    },
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
          "Paste a long Slack thread from a deal discussion and ask Claude to extract the key decisions, objections raised, and next steps — instant deal summary.",
          "Give Claude your best-performing proposal and ask it to identify what makes it work, then rewrite your weakest proposal using the same patterns.",
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
      "Cowork can browse the web, read files, and take action across your tools. Create a Project to save files, instructions, and context — Claude remembers everything next time you come back. It's like handing a brief to an assistant who actually gets things done.",
    stat: {
      number: "10x",
      label: "the output. Users who use Projects and Cowork report finishing tasks in minutes that used to take hours.",
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
          "Upload a vendor contract and your current agreement to a Project. Ask Cowork to compare them side by side and flag every clause that changed, got worse, or is missing.",
          "Ask Cowork to read your last 5 sent proposals, identify what the winning ones had in common, and rewrite the intro of your next proposal using those patterns.",
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
    id: 17,
    type: "statement",
    tag: "CLAUDE CODE · FOR ADVANCED USERS",
    headline: "Claude Code.",
    body: "Claude Code lives in your terminal and has full access to your codebase, file system, and developer tools. It can write code, run tests, create pull requests, and build entire features. If you're an engineer or technical builder, this is the most powerful AI coding tool available. For everyone else — Chat and Cowork have you completely covered.",
  },
  {
    id: 18,
    type: "centered",
    headline: "Live Demo",
    subtitle: "Let's see it in action.",
    footer: "UNICITY · AI ACADEMY · SESSION 01",
  },
  {
    id: 19,
    type: "call-to-action",
    headline: "When to use which.",
    cards: [
      {
        icon: "💬",
        title: "Use Chat when...",
        body: "You need a quick answer, want to brainstorm, need to draft something, or want to analyze text you can paste in. Think of it as talking to a smart colleague.",
      },
      {
        icon: "🤖",
        title: "Use Cowork when...",
        body: "You need Claude to work across multiple tools or files, do multi-step research, or handle a workflow that would take you 30+ minutes manually. Think of it as delegating to an assistant.",
      },
      {
        icon: "💻",
        title: "Use Code when...",
        body: "You're writing code, building automations, or working in a terminal. This is for technical users and developers. If that's not you, you don't need this.",
      },
    ],
    footnote:
      "Start with Chat. Graduate to Cowork. Code is extra credit.",
  },
  {
    id: 20,
    type: "audience-poll",
    tag: "HOW ARE YOU USING AI TODAY?",
    question: "Raise your hand if you mostly just type a question and get an answer.",
    followUp:
      "Now raise your hand if you've ever uploaded a document or had AI work across multiple tools.",
  },

  // ─── SECTION G: SAFE USE & WRAP-UP (21-24) ───
  {
    id: 21,
    type: "roles-contrast",
    variant: "do-dont",
    headline: "The Golden Rules",
    left: {
      title: "ALWAYS DO",
      bullets: [
        "Use your corporate Unicity account for all work",
        "Fact-check AI output against primary sources",
        "Get brand review before publishing AI-generated content",
        "Report incidents or concerns to IT (support@unicity.com)",
        "Get written consent + Legal approval for voice cloning",
      ],
    },
    right: {
      title: "NEVER DO",
      bullets: [
        "Paste PII (names, addresses, SSNs, phone numbers)",
        "Paste credentials, passwords, or API keys",
        "Paste payment data or financial account info",
        "Paste unreleased financial results or forecasts",
        "Paste NDA-covered or confidential partner data",
        "Use personal accounts for Unicity work",
      ],
    },
    takeaway:
      "If you wouldn't post it on a public billboard, don't put it in a prompt.",
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
      "Write 3 CRAFT prompts relevant to your daily work — save the prompts AND the outputs",
      "Identify one repetitive task in your role that AI could help with — bring it to Session 02",
      "Try Claude Cowork — give it a multi-step task like researching a topic and summarizing findings into a doc",
      "Come ready to share: your best prompt and what made it work",
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
