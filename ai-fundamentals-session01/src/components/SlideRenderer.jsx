import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";

const cardAccentCycle = ["#31E3A5", "#31BFE3", "#FF9B3E", "#A58BFF", "#F4D54A"];

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: {
      duration: 0.72,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

function SlideFrame({ children, className = "" }) {
  return <section className={`slide-inner ${className}`}>{children}</section>;
}

function Tag({ text }) {
  return (
    <Motion.div className="slide-tag" {...reveal(0.05)}>
      {text}
    </Motion.div>
  );
}

function TitleSlide({ slide }) {
  return (
    <SlideFrame className="title-layout">
      <Motion.div className="title-top-tag" {...reveal(0.08)}>
        {slide.topTagLine}
      </Motion.div>

      <div className="title-stack">
        {slide.titleLines.map((line, index) => (
          <Motion.div
            key={line.text}
            className={`title-line ${line.variant}`}
            {...reveal(0.14 + index * 0.08)}
          >
            {line.text}
          </Motion.div>
        ))}
      </div>

      <Motion.p className="title-subtitle" {...reveal(0.42)}>
        {slide.subtitle}
      </Motion.p>

      <Motion.div className="title-session" {...reveal(0.52)}>
        {slide.sessionText}
      </Motion.div>
    </SlideFrame>
  );
}

function ImageSlide({ slide }) {
  return (
    <SlideFrame className="image-layout">
      <Motion.img
        src={slide.image}
        alt={slide.alt}
        className="meme-image"
        initial={{ opacity: 0, scale: 0.94, rotate: -1.4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </SlideFrame>
  );
}

function StatementSlide({ slide }) {
  return (
    <SlideFrame className="statement-layout">
      <Tag text={slide.tag} />
      <Motion.h1 className="statement-headline" {...reveal(0.16)}>
        {slide.headline}
      </Motion.h1>
      <Motion.p className="statement-body" {...reveal(0.3)}>
        {slide.body}
      </Motion.p>
    </SlideFrame>
  );
}

function VectorSpaceVisual() {
  const words = [
    { label: "king", x: 72, y: 18, color: "#f4d44f" },
    { label: "queen", x: 82, y: 22, color: "#f4d44f" },
    { label: "prince", x: 68, y: 28, color: "#f4d44f" },
    { label: "princess", x: 78, y: 32, color: "#f4d44f" },
    { label: "cat", x: 20, y: 62, color: "#3ce7b3" },
    { label: "dog", x: 28, y: 58, color: "#3ce7b3" },
    { label: "kitten", x: 16, y: 72, color: "#3ce7b3" },
    { label: "puppy", x: 32, y: 68, color: "#3ce7b3" },
    { label: "happy", x: 55, y: 78, color: "#2dd7f2" },
    { label: "joyful", x: 62, y: 82, color: "#2dd7f2" },
    { label: "sad", x: 18, y: 32, color: "#ff944f" },
    { label: "car", x: 82, y: 62, color: "#9e8eff" },
    { label: "truck", x: 88, y: 68, color: "#9e8eff" },
    { label: "bicycle", x: 76, y: 72, color: "#9e8eff" },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3],
    [4, 5], [4, 6], [5, 7],
    [8, 9],
    [11, 12], [11, 13],
  ];

  return (
    <div className="vector-visual">
      <svg viewBox="0 0 100 100" className="vector-svg">
        {/* Grid lines */}
        {[20, 40, 60, 80].map((v) => (
          <g key={v}>
            <line x1={v} y1="5" x2={v} y2="95" stroke="rgba(140,170,220,0.08)" strokeWidth="0.3" />
            <line x1="5" y1={v} x2="95" y2={v} stroke="rgba(140,170,220,0.08)" strokeWidth="0.3" />
          </g>
        ))}

        {/* Cluster regions */}
        <circle cx="75" cy="25" r="14" fill="rgba(244,212,79,0.04)" stroke="rgba(244,212,79,0.12)" strokeWidth="0.3" strokeDasharray="1.5 1" />
        <circle cx="24" cy="65" r="14" fill="rgba(60,231,179,0.04)" stroke="rgba(60,231,179,0.12)" strokeWidth="0.3" strokeDasharray="1.5 1" />
        <circle cx="82" cy="67" r="12" fill="rgba(158,142,255,0.04)" stroke="rgba(158,142,255,0.12)" strokeWidth="0.3" strokeDasharray="1.5 1" />

        {/* Connections */}
        {connections.map(([a, b]) => (
          <Motion.line
            key={`${a}-${b}`}
            x1={words[a].x}
            y1={words[a].y}
            x2={words[b].x}
            y2={words[b].y}
            stroke="rgba(140,170,220,0.15)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 + a * 0.04, ease: "easeOut" }}
          />
        ))}

        {/* Word dots and labels */}
        {words.map((word, index) => (
          <Motion.g
            key={word.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Breathing glow ring */}
            <Motion.circle
              cx={word.x}
              cy={word.y}
              r="1.4"
              fill="none"
              stroke={word.color}
              strokeWidth="0.4"
              initial={{ r: 1.4, opacity: 0 }}
              animate={{ r: [1.4, 3.2, 1.4], opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3 + (index % 3) * 0.6,
                delay: 1.2 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Dot with gentle float */}
            <Motion.circle
              cx={word.x}
              cy={word.y}
              r="1.4"
              fill={word.color}
              filter={`drop-shadow(0 0 2px ${word.color})`}
              animate={{
                cx: [word.x, word.x + (index % 2 === 0 ? 0.8 : -0.6), word.x],
                cy: [word.y, word.y + (index % 3 === 0 ? -0.7 : 0.5), word.y],
              }}
              transition={{
                duration: 4 + (index % 4) * 0.7,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <text
              x={word.x}
              y={word.y - 2.8}
              textAnchor="middle"
              fill={word.color}
              fontSize="2.8"
              fontFamily="var(--mono)"
              opacity="0.85"
            >
              {word.label}
            </text>
          </Motion.g>
        ))}

        {/* Annotation arrow: king → queen ≈ prince → princess */}
        <Motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <line x1="72" y1="42" x2="72" y2="38" stroke="rgba(244,212,79,0.4)" strokeWidth="0.3" markerEnd="none" />
          <text x="50" y="48" textAnchor="middle" fill="rgba(232,240,255,0.35)" fontSize="2.4" fontFamily="var(--mono)">
            similar words live close together
          </text>
        </Motion.g>
      </svg>

      <div className="vector-legend">
        <span style={{ color: "#f4d44f" }}>royalty</span>
        <span style={{ color: "#3ce7b3" }}>animals</span>
        <span style={{ color: "#9e8eff" }}>vehicles</span>
        <span style={{ color: "#2dd7f2" }}>emotions</span>
      </div>
    </div>
  );
}

function VisualStatementSlide({ slide }) {
  return (
    <SlideFrame className="visual-statement-layout">
      <div className="visual-statement-text">
        <Tag text={slide.tag} />
        <Motion.h1 className="statement-headline" {...reveal(0.16)}>
          {slide.headline}
        </Motion.h1>
        <Motion.p className="statement-body" {...reveal(0.3)}>
          {slide.body}
        </Motion.p>
      </div>
      <Motion.div className="visual-statement-graphic" {...reveal(0.2)}>
        {slide.visual === "vector-space" ? <VectorSpaceVisual /> : null}
      </Motion.div>
    </SlideFrame>
  );
}

function MockChatUI({ messages }) {
  return (
    <div className="mock-ui">
      <div className="mock-ui-chrome">
        <div className="mock-ui-dots">
          <span /><span /><span />
        </div>
        <div className="mock-ui-title">Claude</div>
      </div>
      <div className="mock-ui-body mock-chat-body">
        {messages.map((msg, i) => (
          <Motion.div
            key={`msg-${i}`}
            className={`mock-msg ${msg.from}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mock-msg-label">{msg.from === "user" ? "You" : "Claude"}</div>
            <div className="mock-msg-text">{msg.text}</div>
          </Motion.div>
        ))}
        <Motion.div
          className="mock-input"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="mock-input-placeholder">Reply to Claude...</span>
        </Motion.div>
      </div>
    </div>
  );
}

function MockCoworkUI({ project, files, actions }) {
  return (
    <div className="mock-ui cowork">
      <div className="mock-ui-chrome">
        <div className="mock-ui-dots">
          <span /><span /><span />
        </div>
        <div className="mock-ui-title">Claude · Cowork</div>
      </div>
      <div className="mock-ui-body mock-cowork-body">
        <Motion.div
          className="mock-sidebar"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mock-sidebar-label">PROJECT</div>
          <div className="mock-sidebar-project">{project}</div>
          <div className="mock-sidebar-label" style={{ marginTop: "0.6rem" }}>FILES</div>
          {files.map((file, i) => (
            <Motion.div
              key={file}
              className="mock-sidebar-file"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              📄 {file}
            </Motion.div>
          ))}
        </Motion.div>
        <div className="mock-cowork-main">
          {actions.map((action, i) => (
            <Motion.div
              key={`action-${i}`}
              className={`mock-action ${action.type}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.22 }}
            >
              <span className="mock-action-icon">{action.icon}</span>
              <span className="mock-action-text">{action.text}</span>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductShowcaseSlide({ slide }) {
  const [activeDept, setActiveDept] = useState(0);
  const tryThis = slide.tryThis || [];
  const currentDept = tryThis[activeDept];

  return (
    <SlideFrame className="showcase-layout">
      <div className="showcase-text">
        <Tag text={slide.tag} />
        <Motion.h2 className="showcase-headline" {...reveal(0.1)}>
          {slide.headline}
        </Motion.h2>
        <Motion.p className="showcase-description" {...reveal(0.2)}>
          {slide.description}
        </Motion.p>
        {slide.stat ? (
          <Motion.div className="showcase-stat" {...reveal(0.25)}>
            <div className="showcase-stat-number">{slide.stat.number}</div>
            <div className="showcase-stat-label">{slide.stat.label}</div>
          </Motion.div>
        ) : null}
        {tryThis.length > 0 ? (
          <Motion.div className="showcase-try" {...reveal(0.32)}>
            <div className="showcase-try-header">
              <span className="showcase-try-label">Try this</span>
              <div className="showcase-try-tabs">
                {tryThis.map((dept, i) => (
                  <button
                    key={dept.dept}
                    type="button"
                    className={`showcase-try-tab${activeDept === i ? " active" : ""}`}
                    onClick={() => setActiveDept(i)}
                  >
                    {dept.dept}
                  </button>
                ))}
              </div>
            </div>
            {currentDept ? (
              <div className="showcase-try-items" key={currentDept.dept}>
                {currentDept.items.map((item, i) => (
                  <Motion.div
                    key={`${currentDept.dept}-${i}`}
                    className="showcase-try-item"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                  >
                    <span className="showcase-try-num">{i + 1}</span>
                    <span>{item}</span>
                  </Motion.div>
                ))}
              </div>
            ) : null}
          </Motion.div>
        ) : null}
      </div>
      <Motion.div className="showcase-visual" {...reveal(0.15)}>
        {slide.mockType === "chat" ? (
          <MockChatUI messages={slide.mockMessages} />
        ) : (
          <MockCoworkUI
            project={slide.mockProject}
            files={slide.mockFiles}
            actions={slide.mockActions}
          />
        )}
      </Motion.div>
    </SlideFrame>
  );
}

function RolesContrastSlide({ slide }) {
  const isDoDont = slide.variant === "do-dont";

  return (
    <SlideFrame className={`roles-layout${isDoDont ? " do-dont-variant" : ""}`}>
      <Motion.h2 className="roles-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>

      <div className="roles-columns">
        <Motion.article className={`roles-card ${isDoDont ? "do-card" : "pm"}`} {...reveal(0.2)}>
          <div className="roles-title">{slide.left.title}</div>
          <ul className="roles-list">
            {slide.left.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Motion.article>

        <Motion.article className={`roles-card ${isDoDont ? "dont-card" : "eng"}`} {...reveal(0.28)}>
          <div className="roles-title">{slide.right.title}</div>
          <ul className="roles-list">
            {slide.right.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Motion.article>
      </div>

      <Motion.div className="roles-takeaway" {...reveal(0.4)}>
        {slide.takeaway}
      </Motion.div>
    </SlideFrame>
  );
}

function AudiencePollSlide({ slide }) {
  return (
    <SlideFrame className="poll-layout">
      {slide.tag ? <Tag text={slide.tag} /> : null}
      <Motion.div className="poll-icon" {...reveal(0.08)}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
          <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      </Motion.div>
      <Motion.h1 className="poll-question" {...reveal(0.18)}>
        {slide.question}
      </Motion.h1>
      {slide.followUp ? (
        <Motion.p className="poll-followup" {...reveal(0.5)}>
          {slide.followUp}
        </Motion.p>
      ) : null}
    </SlideFrame>
  );
}

function CardsSlide({ slide }) {
  const cardCount = slide.cards.length;

  return (
    <SlideFrame className="cards-layout">
      <Tag text={slide.tag} />
      <Motion.h2 className="cards-headline" {...reveal(0.13)}>
        {slide.headline}
      </Motion.h2>

      <div className={`cards-grid cards-count-${cardCount}`}>
        {slide.cards.map((card, index) => (
          <Motion.article
            key={`${card.name}-${index}`}
            className="cards-item"
            style={{ "--card-accent": cardAccentCycle[index % cardAccentCycle.length] }}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.72,
              delay: 0.18 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="cards-letter">{card.letter}</div>
            <div className="cards-name">{card.name}</div>
            <p className="cards-description">{card.description}</p>
            <p className="cards-example">{card.example}</p>
          </Motion.article>
        ))}
      </div>

      {slide.footnote ? (
        <Motion.p className="cards-footnote" {...reveal(0.5)}>
          {slide.footnote}
        </Motion.p>
      ) : null}
    </SlideFrame>
  );
}

function ManifestoSlide({ slide }) {
  return (
    <SlideFrame className="manifesto-layout">
      <div className="manifesto-lines">
        {slide.lines.map((line, index) => (
          <Motion.div
            key={`${line}-${index}`}
            className={`manifesto-line ${index % 2 === 0 ? "strong" : "soft"} ${
              index === 0 ? "accent" : ""
            }`}
            {...reveal(0.07 + index * 0.12)}
          >
            {line}
          </Motion.div>
        ))}
      </div>

      <Motion.div className="manifesto-footnote" {...reveal(0.9)}>
        {slide.footnote}
      </Motion.div>
    </SlideFrame>
  );
}

function EvidenceSlide({ slide }) {
  return (
    <SlideFrame className="evidence-layout">
      <Tag text={slide.tag} />
      <Motion.h2 className="evidence-headline" {...reveal(0.12)}>
        {slide.headline}
      </Motion.h2>

      <div className="evidence-quote-list">
        {slide.quotes.map((quote, index) => (
          <Motion.article
            key={`${quote.who}-${quote.source}`}
            className="evidence-quote-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 + index * 0.08 }}
          >
            <div className="evidence-meta">
              <div className="evidence-who">{quote.who}</div>
              <div className="evidence-role">{quote.role}</div>
            </div>
            <div className="evidence-main">
              <p className="evidence-quote">{quote.quote}</p>
              <div className="evidence-source">{quote.source}</div>
            </div>
          </Motion.article>
        ))}
      </div>

      <Motion.div className="evidence-stat" {...reveal(0.72)}>
        <div className="evidence-stat-number">{slide.statNumber}</div>
        <div>
          <div className="evidence-stat-label">{slide.statLabel}</div>
          <div className="evidence-stat-source">{slide.statSource}</div>
        </div>
      </Motion.div>
    </SlideFrame>
  );
}

function CallToActionSlide({ slide }) {
  return (
    <SlideFrame className="cta-layout">
      <Motion.h2 className="cta-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>

      <div className="cta-grid">
        {slide.cards.map((card, index) => (
          <Motion.article
            key={card.title}
            className="cta-card"
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.68,
              delay: 0.2 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="cta-icon">{card.icon}</div>
            <h3 className="cta-title">{card.title}</h3>
            <p className="cta-body">{card.body}</p>
          </Motion.article>
        ))}
      </div>

      <Motion.p className="cta-footnote" {...reveal(0.62)}>
        {slide.footnote}
      </Motion.p>
    </SlideFrame>
  );
}

function AgendaSlide({ slide }) {
  return (
    <SlideFrame className="agenda-layout">
      <Tag text={slide.tag} />
      <Motion.h2 className="agenda-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>

      <div className="agenda-list">
        {slide.items.map((item, index) => (
          <Motion.div
            key={item.title}
            className="agenda-item"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.18 + index * 0.08 }}
          >
            <div className="agenda-number" style={{ color: item.color }}>
              {index + 1}
            </div>
            <div className="agenda-title">{item.title}</div>
          </Motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}

function CodeBlock({ lines }) {
  return (
    <pre className="code-block">
      {lines.map((line, index) => (
        <div key={`${line}-${index}`}>{line || "\u00A0"}</div>
      ))}
    </pre>
  );
}

function ComparisonSlide({ slide }) {
  return (
    <SlideFrame className="comparison-layout">
      <Tag text={slide.tag} />
      <Motion.h2 className="comparison-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>
      <Motion.div className="comparison-task" {...reveal(0.17)}>
        {slide.task}
      </Motion.div>

      <div className="comparison-columns">
        <Motion.div className="comparison-column" {...reveal(0.24)}>
          <div className="comparison-column-title">{slide.leftTitle}</div>
          <div className="comparison-label">Prompt:</div>
          <CodeBlock lines={[slide.leftPrompt]} />
          <div className="comparison-label">Output:</div>
          <CodeBlock lines={slide.leftOutput} />
          <div className="comparison-verdict">{slide.leftVerdict}</div>
        </Motion.div>

        <Motion.div className="comparison-arrow" {...reveal(0.34)}>
          →
        </Motion.div>

        <Motion.div className="comparison-column highlight" {...reveal(0.3)}>
          <div className="comparison-column-title">{slide.rightTitle}</div>
          <div className="comparison-label">Prompt:</div>
          <CodeBlock lines={slide.rightPrompt} />
          <div className="comparison-label">Output:</div>
          <CodeBlock lines={slide.rightOutput} />
          <div className="comparison-verdict">{slide.rightVerdict}</div>
        </Motion.div>
      </div>
    </SlideFrame>
  );
}

function ContextFlowBox({ box, delay, accentClass = "" }) {
  return (
    <Motion.div className={`context-flow-box ${accentClass}`} {...reveal(delay)}>
      <div className="context-flow-level">{box.levelLabel || box.boxLabel}</div>
      <div className="context-flow-path">{box.path}</div>

      <div className="context-flow-grid">
        <article className="context-sub-box">
          <div className="context-sub-title">{box.claudeTitle}</div>
          <p>{box.claudeText}</p>
        </article>
        <article className="context-sub-box">
          <div className="context-sub-title">{box.skillsTitle}</div>
          <div className="context-skill-tags">
            {box.skillTags.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <p>{box.skillsText}</p>
        </article>
      </div>
    </Motion.div>
  );
}

function ContextFlowSlide({ slide }) {
  return (
    <SlideFrame className="flow-layout">
      <div className="flow-left">
        <Tag text={slide.tag} />
        <Motion.h2 className="flow-headline" {...reveal(0.1)}>
          {slide.headline}
        </Motion.h2>
        <Motion.p className="flow-description" {...reveal(0.2)}>
          {slide.leftDescription}
        </Motion.p>
      </div>

      <div className="flow-right">
        <ContextFlowBox box={slide.global} delay={0.18} accentClass="global" />

        <Motion.div className="flow-connectors" {...reveal(0.34)}>
          <span />
          <span />
        </Motion.div>

        <div className="flow-project-row">
          {slide.projects.map((project, index) => (
            <ContextFlowBox
              key={project.boxLabel}
              box={project}
              delay={0.35 + index * 0.08}
              accentClass={index === 0 ? "project-a" : "project-b"}
            />
          ))}
        </div>

        <Motion.div className="flow-merge-label" {...reveal(0.56)}>
          {slide.mergeLabel}
        </Motion.div>

        <Motion.article className="flow-merge-box" {...reveal(0.62)}>
          <div className="flow-merge-title">{slide.mergeTitle}</div>
          <p>{slide.mergeText}</p>
        </Motion.article>

        <Motion.div className="flow-plus" {...reveal(0.7)}>
          {slide.plus}
        </Motion.div>

        <Motion.article className="flow-prompt-box" {...reveal(0.76)}>
          <div className="flow-prompt-title">{slide.promptTitle}</div>
          <p>{slide.promptText}</p>
        </Motion.article>
      </div>
    </SlideFrame>
  );
}

function CodeColumnsSlide({ slide }) {
  return (
    <SlideFrame className="code-columns-layout">
      <Tag text={slide.tag} />
      <Motion.h2 className="code-columns-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>

      <div className="code-columns-grid">
        {slide.panels.map((panel, index) => (
          <Motion.article
            key={panel.title}
            className="code-columns-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 + index * 0.08 }}
          >
            <div className="code-columns-panel-top">
              <div className="code-columns-title">{panel.title}</div>
              <div className="code-columns-path">{panel.path}</div>
            </div>

            <pre className="code-columns-code">
              {panel.lines.map((line, lineIndex) => (
                <div key={`${line}-${lineIndex}`}>{line || "\u00A0"}</div>
              ))}
            </pre>
          </Motion.article>
        ))}
      </div>

      <Motion.div className="code-highlight" {...reveal(0.56)}>
        {slide.highlight}
      </Motion.div>

      <Motion.div className="code-callout" {...reveal(0.66)}>
        {slide.callout}
      </Motion.div>
    </SlideFrame>
  );
}

function ContextActionSlide({ slide }) {
  return (
    <SlideFrame className="context-action-layout">
      <div className="context-action-left">
        <Tag text={slide.tag} />
        <Motion.h2 className="context-action-headline" {...reveal(0.1)}>
          {slide.headline}
        </Motion.h2>
        <Motion.p className="context-action-scenario" {...reveal(0.18)}>
          {slide.scenario}
        </Motion.p>

        <Motion.article className="context-action-prompt" {...reveal(0.26)}>
          {slide.prompt}
        </Motion.article>

        <div className="context-action-steps">
          {slide.steps.map((step, index) => (
            <Motion.article
              key={step.label}
              className="context-action-step"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.52, delay: 0.32 + index * 0.08 }}
            >
              <div className="context-action-step-icon">{step.icon}</div>
              <div>
                <div className="context-action-step-label">{step.label}</div>
                <p>{step.body}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>

      <div className="context-action-right">
        <Motion.article className="context-action-output" {...reveal(0.52)}>
          <div className="context-action-output-title">{slide.outputTitle}</div>
          <div className="context-action-output-ticket">{slide.outputTicketTitle}</div>
          <pre className="context-action-output-code">
            {slide.outputLines.map((line, index) => (
              <div key={`${line}-${index}`}>{line || "\u00A0"}</div>
            ))}
          </pre>
        </Motion.article>

        <Motion.p className="context-action-punchline" {...reveal(0.74)}>
          {slide.punchline}
        </Motion.p>
      </div>
    </SlideFrame>
  );
}

function CenteredSlide({ slide }) {
  return (
    <SlideFrame className="centered-layout">
      <Motion.h1 className="centered-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h1>

      {slide.subtitle ? (
        <Motion.p className="centered-subtitle" {...reveal(0.28)}>
          {slide.subtitle}
        </Motion.p>
      ) : null}

      {slide.footer ? (
        <Motion.div className="centered-footer" {...reveal(0.45)}>
          {slide.footer}
        </Motion.div>
      ) : null}
    </SlideFrame>
  );
}

function TipsVisual({ tip }) {
  if (tip.visualType === "comparison") {
    return (
      <div className="tips-context-compare">
        <article className="tips-compare-box messy">
          <div className="tips-compare-title">{tip.leftTitle}</div>
          {tip.leftItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </article>
        <div className="tips-compare-arrow">→</div>
        <article className="tips-compare-box clean">
          <div className="tips-compare-title">{tip.rightTitle}</div>
          {tip.rightItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </article>
      </div>
    );
  }

  return (
    <pre className="tips-code-block">
      {tip.codeLines.map((line, index) => (
        <div key={`${line}-${index}`}>{line || "\u00A0"}</div>
      ))}
    </pre>
  );
}

function TipsSlide({ slide, activeIndex: activeIndexProp }) {
  const [activeIndex, setActiveIndex] = useState(activeIndexProp ?? 0);
  const resolvedIndex = activeIndexProp ?? activeIndex;
  const safeIndex = Math.min(Math.max(resolvedIndex, 0), slide.tips.length - 1);
  const activeTip = slide.tips[safeIndex];
  const isLocked = activeIndexProp !== undefined && activeIndexProp !== null;

  return (
    <SlideFrame className="tips-layout">
      <div className="tips-left">
        <Tag text={slide.tag} />
        <Motion.h2 className="tips-headline" {...reveal(0.12)}>
          {slide.headline}
        </Motion.h2>

        <div className="tips-tabs">
          {slide.tips.map((tip, index) => (
            <Motion.button
              key={tip.key}
              type="button"
              className={`tips-tab${safeIndex === index ? " active" : ""}`}
              onClick={isLocked ? undefined : () => setActiveIndex(index)}
              {...reveal(0.2 + index * 0.07)}
            >
              <span>{tip.key}</span>
              <span>{tip.title}</span>
            </Motion.button>
          ))}
        </div>
      </div>

      <div className="tips-right">
        <Motion.h3 className="tips-active-title" key={activeTip.key} {...reveal(0.2)}>
          {activeTip.title}
        </Motion.h3>

        <Motion.p className="tips-active-body" key={`${activeTip.key}-body`} {...reveal(0.26)}>
          {activeTip.body}
        </Motion.p>

        <Motion.div className="tips-visual" key={`${activeTip.key}-visual`} {...reveal(0.34)}>
          <TipsVisual tip={activeTip} />
        </Motion.div>
      </div>
    </SlideFrame>
  );
}

function SetupSlide({ slide, activeStep: activeStepProp }) {
  const [activeStep, setActiveStep] = useState(activeStepProp ?? 0);
  const resolvedStep = activeStepProp ?? activeStep;
  const safeStep = Math.min(Math.max(resolvedStep, 0), slide.steps.length - 1);
  const currentStep = slide.steps[safeStep];
  const isLocked = activeStepProp !== undefined && activeStepProp !== null;

  const stepTokens = useMemo(
    () => slide.steps.map((step) => step.title.split(":")[0].replace("Step ", "")),
    [slide.steps]
  );

  return (
    <SlideFrame className="setup-layout">
      <div className="setup-left">
        <Tag text={slide.tag} />
        <Motion.h2 className="setup-headline" {...reveal(0.1)}>
          {slide.headline}
        </Motion.h2>
        <Motion.p className="setup-intro" {...reveal(0.18)}>
          {slide.intro}
        </Motion.p>

        <div className="setup-tabs">
          {slide.steps.map((step, index) => (
            <Motion.button
              type="button"
              key={step.title}
              className={`setup-tab${safeStep === index ? " active" : ""}`}
              onClick={isLocked ? undefined : () => setActiveStep(index)}
              {...reveal(0.22 + index * 0.07)}
            >
              <span>{stepTokens[index]}</span>
              <span>{step.title}</span>
            </Motion.button>
          ))}
        </div>
      </div>

      <Motion.article className="setup-right" key={currentStep.title} {...reveal(0.28)}>
        <h3 className="setup-right-title">{currentStep.title}</h3>

        <div className="setup-item-list">
          {currentStep.items.map((item, index) => (
            <div key={`${item}-${index}`} className="setup-item">
              {item}
            </div>
          ))}
        </div>

        <div className="setup-callout">{currentStep.callout}</div>
      </Motion.article>
    </SlideFrame>
  );
}

function HomeworkSlide({ slide }) {
  return (
    <SlideFrame className="homework-layout">
      <Tag text={slide.tag} />
      <Motion.h2 className="homework-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>

      <Motion.div className="homework-due" {...reveal(0.2)}>
        {slide.due}
      </Motion.div>

      <Motion.p className="homework-assignment" {...reveal(0.3)}>
        {slide.assignment}
      </Motion.p>

      <div className="homework-list">
        {slide.items.map((item, index) => (
          <Motion.article
            key={item}
            className="homework-item"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 + index * 0.07 }}
          >
            <span className="homework-number">{index + 1}.</span>
            <span>{item}</span>
          </Motion.article>
        ))}
      </div>
    </SlideFrame>
  );
}

function EndSlide({ slide }) {
  return (
    <SlideFrame className="end-layout">
      <Motion.h1 className="end-headline" {...reveal(0.14)}>
        {slide.headline}
      </Motion.h1>
    </SlideFrame>
  );
}

export default function SlideRenderer({ slide, printVariant }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} />;
    case "image":
      return <ImageSlide slide={slide} />;
    case "statement":
      return <StatementSlide slide={slide} />;
    case "visual-statement":
      return <VisualStatementSlide slide={slide} />;
    case "roles-contrast":
      return <RolesContrastSlide slide={slide} />;
    case "audience-poll":
      return <AudiencePollSlide slide={slide} />;
    case "product-showcase":
      return <ProductShowcaseSlide slide={slide} />;
    case "cards":
      return <CardsSlide slide={slide} />;
    case "manifesto":
      return <ManifestoSlide slide={slide} />;
    case "evidence":
      return <EvidenceSlide slide={slide} />;
    case "call-to-action":
      return <CallToActionSlide slide={slide} />;
    case "agenda":
      return <AgendaSlide slide={slide} />;
    case "comparison":
      return <ComparisonSlide slide={slide} />;
    case "context-flow":
      return <ContextFlowSlide slide={slide} />;
    case "code-columns":
      return <CodeColumnsSlide slide={slide} />;
    case "context-action":
      return <ContextActionSlide slide={slide} />;
    case "centered":
      return <CenteredSlide slide={slide} />;
    case "tips":
      return <TipsSlide slide={slide} activeIndex={printVariant?.activeTipIndex} />;
    case "setup":
      return <SetupSlide slide={slide} activeStep={printVariant?.activeStepIndex} />;
    case "homework":
      return <HomeworkSlide slide={slide} />;
    case "end":
      return <EndSlide slide={slide} />;
    default:
      return null;
  }
}
