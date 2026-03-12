import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, itemUp, itemReveal } from './SlideComponents';

export const CodeColumnsSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
    <motion.div variants={itemUp} className="mb-12">
      <div className="text-[10px] tracking-[0.3em] text-[#00D9FF] mb-6 font-mono border-l-2 border-[#00D9FF] pl-4 uppercase">
        {slide.tag}
      </div>
      <h2 className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none">{slide.headline}</h2>
    </motion.div>

    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {slide.columns.map((col, i) => (
        <motion.div key={i} variants={itemUp} className="bg-[#0A0A0A] border border-white/10 rounded-3xl flex flex-col overflow-hidden group">
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex flex-col">
            <h3 className="text-white font-bold text-lg mb-1">{col.title}</h3>
            <div className="text-[#808080] font-mono text-[10px] tracking-widest">{col.path}</div>
          </div>
          <div className="p-6 flex-1 overflow-y-auto custom-scrollbar relative">
            <div className="absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full bg-[#00D9FF]/5 group-hover:bg-[#00D9FF]/10 transition-colors duration-700 pointer-events-none" />
            <pre className="text-[#A0A0A0] font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap font-medium relative z-10">
              {col.code}
            </pre>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div variants={itemUp} className="bg-[#111] border border-[#E8FF47]/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="text-[#E8FF47] text-lg font-bold leading-relaxed max-w-4xl flex-1">
        {slide.highlight}
      </div>
      <div className="text-[#808080] text-sm md:text-base italic max-w-xl pl-6 border-l border-white/10">
        {slide.callout}
      </div>
    </motion.div>
  </motion.div>
);

export const SplitStepsSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
    <motion.div variants={itemUp} className="mb-10">
      <div className="text-[10px] tracking-[0.3em] text-[#FF6B35] mb-6 font-mono border-l-2 border-[#FF6B35] pl-4 uppercase">
        {slide.tag}
      </div>
      <h2 className="text-5xl md:text-[4.5vw] font-bold tracking-tighter leading-none mb-4">{slide.headline}</h2>
      <div className="flex gap-4 items-center bg-white/5 p-4 rounded-xl w-fit border border-white/10 max-w-4xl">
        <div className="text-[#A0A0A0] text-sm md:text-base italic">{slide.scenario}</div>
        <div className="bg-black text-[#FF6B35] font-mono text-xs md:text-sm p-3 rounded-lg border border-[#FF6B35]/20 flex-1 whitespace-nowrap">
          {slide.prompt}
        </div>
      </div>
    </motion.div>

    <div className="flex-1 flex gap-8 min-h-0">
      <div className="w-1/2 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-4">
        {slide.steps.map((step, i) => (
          <motion.div key={i} variants={itemUp} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6 hover:bg-white/10 transition-colors group">
            <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">{step.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold tracking-tighter mb-2">{i + 1}. {step.title}</h3>
              <p className="text-[#808080] text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div variants={itemUp} className="w-1/2 bg-[#0A0A0A] border border-[#00D9FF]/20 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full bg-[#00D9FF]/5 group-hover:bg-[#00D9FF]/10 transition-colors pointer-events-none" />
        <h3 className="text-[#00D9FF] font-mono tracking-widest text-xs mb-6 font-bold">{slide.output.title}</h3>
        <h4 className="text-white text-xl md:text-2xl font-bold tracking-tighter mb-4">{slide.output.ticketTitle}</h4>
        <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 overflow-y-auto custom-scrollbar text-[#A0A0A0] whitespace-pre-wrap text-sm md:text-base font-medium relative z-10 leading-relaxed shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          {slide.output.content}
        </div>
        <div className="mt-8 pt-6 border-t border-[#00D9FF]/20 text-[#00D9FF] text-lg font-bold tracking-tight text-center">
          {slide.punchline}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export const QuotesSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
    <motion.div variants={itemUp} className="mb-10 text-center">
      <div className="text-[10px] tracking-[0.3em] text-[#FF3D6B] mb-6 font-mono uppercase inline-block border border-[#FF3D6B]/30 px-3 py-1 rounded-full bg-[#FF3D6B]/5">
        {slide.tag}
      </div>
      <h2 className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none mb-4">{slide.headline}</h2>
    </motion.div>

    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      {slide.quotes.map((q, i) => (
        <motion.div key={i} variants={itemUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col relative group hover:border-[#FF3D6B]/30 transition-colors">
           <div className="text-4xl text-[#FF3D6B]/20 font-serif absolute top-4 left-4">"</div>
           <p className="text-white/90 text-lg md:text-xl font-medium tracking-tight leading-snug mb-8 relative z-10">
             {q.quote}
           </p>
           <div className="mt-auto border-t border-white/10 pt-4 flex flex-col">
             <div className="font-bold text-white text-md tracking-tight">{q.who}</div>
             <div className="text-xs text-[#808080] mb-2">{q.role}</div>
             <div className="text-[10px] font-mono text-[#505050] uppercase tracking-widest">{q.source}</div>
           </div>
        </motion.div>
      ))}

      {/* Embedded Stat Card */}
      <motion.div variants={itemUp} className="bg-[#FF3D6B]/10 border border-[#FF3D6B]/30 rounded-2xl p-8 flex flex-col items-center text-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FF3D6B]/5" />
        <div className="text-[clamp(60px,6vw,100px)] font-black text-[#FF3D6B] leading-[0.8] mb-4 tracking-tighter drop-shadow-lg">
          {slide.stat.number}
        </div>
        <div className="text-white text-lg md:text-xl font-bold tracking-tight max-w-[200px] mb-4">
          {slide.stat.label}
        </div>
        <div className="text-[10px] font-mono text-[#FF3D6B]/60 uppercase tracking-widest mt-auto border-t border-[#FF3D6B]/20 pt-4 w-full">
          {slide.stat.source}
        </div>
      </motion.div>
    </div>
  </motion.div>
);
