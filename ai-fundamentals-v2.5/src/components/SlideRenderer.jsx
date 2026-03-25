import { useState, useMemo } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

// Global cinematic reveal config
function reveal(delay = 0, yOffset = 40) {
  return {
    initial: { opacity: 0, y: yOffset, filter: "blur(14px)", scale: 0.95 },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
    transition: {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  };
}

// Reusable Slide structure with glass wrapper
function SlideFrame({ children, className = "" }) {
  return (
    <div className={`slide-stage v25-engine ${className}`}>
      {children}
    </div>
  );
}

// ─── 01. HERO STATEMENT ───
function HeroStatement({ slide }) {
  return (
    <SlideFrame className="hero-statement-layout">
      <Motion.h4 className="hero-tag" {...reveal(0.1)}>{slide.tagline}</Motion.h4>
      <Motion.h1 className="hero-head" {...reveal(0.3)}>{slide.headline}</Motion.h1>
      <Motion.h1 className="hero-accent" {...reveal(0.5)}>{slide.accentHeadline}</Motion.h1>
      <Motion.p className="hero-subline" {...reveal(0.7)}>{slide.subtext}</Motion.p>
    </SlideFrame>
  );
}

// ─── 02. BENTO LANDSCAPE ───
function BentoLandscape({ slide }) {
  return (
    <SlideFrame className="bento-layout">
      <Motion.h2 className="bento-headline" {...reveal(0.1)}>{slide.headline}</Motion.h2>
      <div className="bento-grid">
        {slide.bentoCards.map((card, i) => (
          <Motion.div 
            key={card.title} 
            className={`bento-box ${card.color}`}
            {...reveal(0.2 + (i * 0.15))}
          >
            <div className="bento-title">{card.title}</div>
            <div className="bento-role">{card.role}</div>
            <div className="bento-desc">{card.description}</div>
          </Motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}

// ─── 03. ABSTRACT VISUAL (3D ASSET EMBED) ───
function AbstractVisual({ slide }) {
  return (
    <SlideFrame className="abstract-layout">
      <div className="abstract-text-panel">
        <Motion.h2 className="abstract-headline" {...reveal(0.1)}>{slide.headline}</Motion.h2>
        <Motion.p className="abstract-body" {...reveal(0.3)}>{slide.body}</Motion.p>
        
        {slide.floatingTags && (
          <div className="abstract-tags">
             {slide.floatingTags.map((t, i) => (
               <Motion.span key={t} className="abstract-tag-chip" {...reveal(0.5 + (i * 0.1))}>{t}</Motion.span>
             ))}
          </div>
        )}
      </div>
      
      <Motion.div className="abstract-image-panel" {...reveal(0.4, 0)}>
        <img src={slide.assetPath} alt="3D Glass Concept" className="abstract-asset" />
      </Motion.div>
    </SlideFrame>
  );
}

// ─── 04. PUNCHY CARDS ───
function PunchyCards({ slide }) {
  return (
    <SlideFrame className="punchy-layout">
      <Motion.h2 className="punchy-headline" {...reveal(0.1)}>{slide.headline}</Motion.h2>
      <Motion.p className="punchy-sub" {...reveal(0.2)}>{slide.subheadline}</Motion.p>
      
      <div className="punchy-card-grid">
        {slide.cards.map((card, i) => (
          <Motion.div key={card.title} className="p-card" {...reveal(0.3 + (i * 0.15))}>
             <span className="p-num">{i + 1}</span>
             <h3 className="p-title">{card.title}</h3>
             <p className="p-body">{card.body}</p>
          </Motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}

// ─── 05. NEO TABLE ───
function NeoTable({ slide }) {
  return (
    <SlideFrame className="neo-layout">
      <Motion.h2 className="neo-headline" {...reveal(0.1)}>{slide.headline}</Motion.h2>
      <div className="neo-rows">
        {slide.rows.map((row, i) => (
          <Motion.div key={row.dept} className="neo-row" {...reveal(0.3 + (i * 0.12))}>
             <div className="neo-dept">{row.dept}</div>
             <div className="neo-use">{row.use}</div>
          </Motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}

// ─── 06. SPLIT RULES ───
function SplitRules({ slide }) {
  return (
    <SlideFrame className="split-layout">
       <Motion.h2 className="split-headline" {...reveal(0.1)}>{slide.headline}</Motion.h2>
       
       <div className="split-container">
          <Motion.div className="split-do" {...reveal(0.3)}>
             <h3 className="do-title">{slide.doTitle}</h3>
             <ul>
               {slide.doItems.map((item, i) => (
                 <li key={i}>{item}</li>
               ))}
             </ul>
          </Motion.div>
          <Motion.div className="split-dont" {...reveal(0.4)}>
             <h3 className="dont-title">{slide.dontTitle}</h3>
             <ul>
               {slide.dontItems.map((item, i) => (
                 <li key={i}>{item}</li>
               ))}
             </ul>
          </Motion.div>
       </div>
    </SlideFrame>
  );
}

// ─── 07. ACTION CLOSING ───
function ActionClosing({ slide }) {
  return (
    <SlideFrame className="action-layout">
       <Motion.h1 className="action-headline" {...reveal(0.1)}>{slide.headline}</Motion.h1>
       <div className="action-steps">
          {slide.steps.map((step, i) => (
            <Motion.div key={step} className="act-step" {...reveal(0.3 + (i * 0.2))}>
               {step}
            </Motion.div>
          ))}
       </div>
    </SlideFrame>
  );
}


// MAIN RENDERER ROUTER
export default function SlideRenderer({ slide }) {
  switch (slide.type) {
    case "hero-statement":
      return <HeroStatement slide={slide} />;
    case "bento-landscape":
      return <BentoLandscape slide={slide} />;
    case "abstract-visual":
      return <AbstractVisual slide={slide} />;
    case "punchy-cards":
      return <PunchyCards slide={slide} />;
    case "neo-table":
      return <NeoTable slide={slide} />;
    case "split-rules":
      return <SplitRules slide={slide} />;
    case "action-closing":
      return <ActionClosing slide={slide} />;
    default:
      return null;
  }
}
