import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import { SLIDES } from './data/slides';

// Import Slide Components
import { 
  TitleSlide, 
  BigStatementSlide, 
  CenteredStatementSlide, 
  ManifestoSlide, 
  AgendaSlide, 
  GridCardsSlide 
} from './components/SlideComponents';

import {
  MemeSlide,
  ComparisonSlide,
  FlowchartSlide
} from './components/ComplexSlides';

import {
  CodeColumnsSlide,
  SplitStepsSlide,
  QuotesSlide
} from './components/InteractiveSlides';

import {
  TabbedSlide,
  TabbedSectionsSlide,
  AssignmentSlide
} from './components/InteractiveSlidesPart2';

const renderSlideComponent = (slide) => {
  switch (slide.type) {
    case 'title': return <TitleSlide slide={slide} />;
    case 'meme-image': return <MemeSlide slide={slide} />;
    case 'statement': return <BigStatementSlide slide={slide} />;
    case 'cards-3': 
    case 'cards-4': 
    case 'cards-3-icon': 
    case 'cards-5-craft': return <GridCardsSlide slide={slide} />;
    case 'manifesto': return <ManifestoSlide slide={slide} />;
    case 'quotes': return <QuotesSlide slide={slide} />;
    case 'agenda': return <AgendaSlide slide={slide} />;
    case 'comparison': return <ComparisonSlide slide={slide} />;
    case 'flowchart': return <FlowchartSlide slide={slide} />;
    case 'code-columns': return <CodeColumnsSlide slide={slide} />;
    case 'split-steps': return <SplitStepsSlide slide={slide} />;
    case 'centered': return <CenteredStatementSlide slide={slide} />;
    case 'tabbed': return <TabbedSlide slide={slide} />;
    case 'tabbed-sections': return <TabbedSectionsSlide slide={slide} />;
    case 'assignment': return <AssignmentSlide slide={slide} />;
    default: 
      return <div className="text-red-500 font-mono text-2xl">Unknown Slide Type: {slide.type}</div>;
  }
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slideData = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-screen bg-black text-white font-sans overflow-hidden">
      {/* Dynamic Animated Background */}
      <Background slideIndex={currentSlide} />

      {/* Main Slide Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center p-8 md:p-16"
        >
          <div className="w-full max-w-screen-2xl h-full relative z-10 flex">
             {renderSlideComponent(slideData)}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation & Progress */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 px-8 md:px-16 flex justify-between items-end z-50 pointer-events-none">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#505050]">
          {slideData?.footer || slideData?.tag || `SESSION 01`}
        </div>
        <div className="flex items-center gap-1 font-mono text-[10px] text-[#505050] tracking-[0.2em]">
          <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(SLIDES.length).padStart(2, '0')}</span>
        </div>
      </div>
      
      {/* Invisible Click Zones for Navigation */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-1/4 cursor-w-resize z-40" 
        onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))} 
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-3/4 cursor-e-resize z-40" 
        onClick={() => setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1))} 
      />
    </div>
  );
}
