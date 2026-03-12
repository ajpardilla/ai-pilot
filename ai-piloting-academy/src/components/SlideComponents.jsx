import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Animation Variants ---
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const itemUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

export const itemReveal = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Slide Components ---

export const TitleSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full flex flex-col justify-center h-full">
    <motion.div variants={itemUp} className="text-[10px] tracking-[0.3em] text-[#808080] mb-8 font-mono border-l-2 border-[#FF3366] pl-4 uppercase">
      {slide.tagLine}
    </motion.div>
    
    <motion.div variants={itemUp} className="mb-2">
      <h1 className="text-[6vw] md:text-[8vw] font-light text-white/50 tracking-[-0.03em] italic leading-none">
        {slide.title.line1}
      </h1>
    </motion.div>
    
    <motion.div variants={itemUp} className="mb-2">
      <h1 className="text-[10vw] md:text-[14vw] font-black text-white tracking-[-0.04em] leading-[0.8]">
        {slide.title.line2}
      </h1>
    </motion.div>
    
    <motion.div variants={itemUp} className="mb-12">
      <h1 className="text-[8vw] md:text-[11vw] font-bold text-[#E8FF47] tracking-[-0.02em] leading-none">
        {slide.title.line3}
      </h1>
    </motion.div>
    
    <motion.div variants={itemUp} className="w-24 h-[1px] bg-white/20 mb-8" />
    
    <motion.p variants={itemUp} className="text-xl md:text-3xl font-light text-[#A0A0A0] max-w-2xl leading-relaxed tracking-tight">
      {slide.subtitle}
    </motion.p>
  </motion.div>
);

export const BigStatementSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full flex flex-col justify-center h-full">
    {slide.tag && (
      <motion.div variants={itemUp} className="text-[10px] tracking-[0.3em] text-[#E8FF47] mb-8 font-mono border-l-2 border-[#E8FF47] pl-4 uppercase">
        {slide.tag}
      </motion.div>
    )}
    
    <motion.h2 variants={itemUp} className="text-6xl md:text-8xl lg:text-[8vw] font-bold tracking-tighter leading-[0.9] mb-8 max-w-5xl">
      {slide.headline}
    </motion.h2>
    
    {slide.body && (
      <motion.p variants={itemUp} className="text-2xl md:text-4xl lg:text-[2.5vw] font-light text-[#A0A0A0] max-w-4xl leading-[1.4] tracking-tight">
        {slide.body}
      </motion.p>
    )}
  </motion.div>
);

export const CenteredStatementSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full flex flex-col items-center text-center justify-center h-full">
    <motion.h2 variants={itemReveal} className="text-[10vw] font-black tracking-tighter leading-none mb-6">
      {slide.headline}
    </motion.h2>
    {slide.subtitle && (
      <motion.p variants={itemUp} className="text-4xl text-[#E8FF47] font-light tracking-wide">
        {slide.subtitle}
      </motion.p>
    )}
  </motion.div>
);

export const ManifestoSlide = ({ slide }) => {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full flex flex-col justify-center h-full">
      <div className="flex flex-col gap-2">
        {slide.lines.map((line, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div key={i} variants={itemUp}>
              <h2 className={`text-6xl md:text-[7vw] leading-[1] tracking-tighter ${isEven ? 'font-light italic text-[#808080]' : 'font-black text-white'}`}>
                {line}
              </h2>
            </motion.div>
          );
        })}
      </div>
      <motion.div variants={itemUp} className="mt-16 text-[#00D9FF] font-mono text-xs md:text-sm tracking-widest uppercase">
        * {slide.footnote}
      </motion.div>
    </motion.div>
  );
};

export const AgendaSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full flex flex-col justify-center h-full">
    <motion.div variants={itemUp} className="text-[10px] tracking-[0.3em] text-[#808080] mb-8 font-mono border-l-2 border-[#808080] pl-4 uppercase">
      {slide.tag}
    </motion.div>
    <motion.h2 variants={itemUp} className="text-6xl md:text-[7vw] font-bold tracking-tighter leading-none mb-16">
      {slide.headline}
    </motion.h2>
    
    <div className="flex flex-col gap-8 max-w-4xl">
      {slide.items.map((item, i) => (
        <motion.div key={i} variants={itemUp} className="flex items-end gap-6 group">
          <div className="text-4xl md:text-6xl font-black text-[#333] group-hover:text-white transition-colors duration-500">
            0{item.index}
          </div>
          <div className="text-3xl md:text-5xl font-light text-[#A0A0A0] group-hover:text-white transition-colors duration-500 border-b border-[#333] group-hover:border-white w-full pb-2">
            {item.title}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const GridCardsSlide = ({ slide }) => {
  const getColClass = (count) => {
    switch (count) {
      case 3: return 'grid-cols-1 md:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2';
      case 5: return 'grid-cols-1 md:grid-cols-5';
      default: return 'grid-cols-1';
    }
  };

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col">
      <div className="mb-12 mt-12">
        {slide.tag && (
          <motion.div variants={itemUp} className="text-[10px] tracking-[0.3em] text-[#A0A0A0] mb-6 font-mono border-l-2 border-[#A0A0A0] pl-4 uppercase">
            {slide.tag}
          </motion.div>
        )}
        <motion.h2 variants={itemUp} className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none max-w-4xl">
          {slide.headline}
        </motion.h2>
      </div>
      
      <div className={`grid gap-6 flex-1 min-h-0 ${getColClass(slide.cards.length)}`}>
        {slide.cards.map((card, i) => (
          <motion.div key={i} variants={itemUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 blur-3xl bg-white/5 rounded-full group-hover:bg-[#00D9FF]/10 transition-colors duration-700" />
            <div className="relative z-10 flex-1 flex flex-col">
              {(card.letter || card.icon) && (
                <div className="text-4xl md:text-5xl font-black text-white/20 mb-6 font-mono group-hover:text-[#00D9FF] transition-colors duration-500">
                  {card.letter || card.icon}
                </div>
              )}
              {card.name && <h3 className="text-2xl md:text-3xl font-bold mb-4">{card.name}</h3>}
              {card.title && <h3 className="text-2xl md:text-3xl font-bold mb-4">{card.title}</h3>}
              
              <p className="text-[#A0A0A0] text-lg md:text-xl leading-relaxed mb-6 font-light">
                {card.description || card.body}
              </p>
              
              {card.example && (
                <div className="mt-auto border-t border-white/10 pt-4">
                  <div className="text-[10px] font-mono tracking-widest text-[#505050] mb-2 uppercase">Example</div>
                  <div className="text-sm text-[#808080] italic leading-relaxed">
                    "{card.example}"
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {slide.footnote && (
        <motion.div variants={itemUp} className="mt-8 text-sm text-[#00D9FF] font-mono tracking-wider italic">
          * {slide.footnote}
        </motion.div>
      )}
    </motion.div>
  );
};
