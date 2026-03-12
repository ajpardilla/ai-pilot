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

function RolesContrastSlide({ slide }) {
  return (
    <SlideFrame className="roles-layout">
      <Motion.h2 className="roles-headline" {...reveal(0.1)}>
        {slide.headline}
      </Motion.h2>

      <div className="roles-columns">
        <Motion.article className="roles-card pm" {...reveal(0.2)}>
          <div className="roles-title">{slide.left.title}</div>
          <ul className="roles-list">
            {slide.left.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Motion.article>

        <Motion.article className="roles-card eng" {...reveal(0.28)}>
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

function TipsSlide({ slide }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTip = slide.tips[activeIndex];

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
              className={`tips-tab${activeIndex === index ? " active" : ""}`}
              onClick={() => setActiveIndex(index)}
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

function SetupSlide({ slide }) {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = slide.steps[activeStep];

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
              className={`setup-tab${activeStep === index ? " active" : ""}`}
              onClick={() => setActiveStep(index)}
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

export default function SlideRenderer({ slide }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} />;
    case "image":
      return <ImageSlide slide={slide} />;
    case "statement":
      return <StatementSlide slide={slide} />;
    case "roles-contrast":
      return <RolesContrastSlide slide={slide} />;
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
      return <TipsSlide slide={slide} />;
    case "setup":
      return <SetupSlide slide={slide} />;
    case "homework":
      return <HomeworkSlide slide={slide} />;
    case "end":
      return <EndSlide slide={slide} />;
    default:
      return null;
  }
}
