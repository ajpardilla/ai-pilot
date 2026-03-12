import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, itemUp, itemReveal } from './SlideComponents';

export const MemeSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex items-center justify-center">
    <motion.img 
      src={slide.image} 
      alt={slide.alt} 
      variants={itemReveal}
      className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl shadow-black/50"
    />
  </motion.div>
);

export const ComparisonSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
    <motion.div variants={itemUp} className="mb-12">
      <div className="text-[10px] tracking-[0.3em] text-[#E8FF47] mb-6 font-mono border-l-2 border-[#E8FF47] pl-4 uppercase">
        {slide.tag}
      </div>
      <h2 className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none">{slide.headline}</h2>
      <div className="text-[#A0A0A0] mt-4 font-mono text-xs tracking-wider uppercase">Task: {slide.task}</div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 flex-1 rounded-3xl overflow-hidden border border-white/10">
      {/* Left */}
      <motion.div variants={itemUp} className="bg-[#0A0A0A] p-8 md:p-12 flex flex-col relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF3366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <h3 className="text-[#808080] font-bold text-2xl tracking-tighter mb-8">{slide.left.label}</h3>
        
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#505050] mb-2">PROMPT</div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm md:text-base text-[#A0A0A0] leading-relaxed">
              {slide.left.prompt}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-mono tracking-widest text-[#505050] mb-2">OUTPUT</div>
            <div className="bg-black/80 border border-white/5 p-6 rounded-2xl text-sm md:text-base text-[#808080] font-mono leading-relaxed h-full whitespace-pre-wrap flex flex-col justify-center">
              {slide.left.output}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-[#FF3366] text-xs font-mono tracking-widest uppercase text-center italic">
          ✗ {slide.left.verdict}
        </div>
      </motion.div>

      {/* Right */}
      <motion.div variants={itemUp} className="bg-[#111111] p-8 md:p-12 flex flex-col relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00D9FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <h3 className="text-white font-bold text-2xl tracking-tighter mb-8 flex items-center justify-between">
          <span>{slide.right.label}</span>
          <span className="text-[10px] font-mono tracking-widest text-[#00D9FF] px-3 py-1 bg-[#00D9FF]/10 rounded-full border border-[#00D9FF]/20">CRAFT APPLIED</span>
        </h3>
        
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#00D9FF]/70 mb-2">PROMPT</div>
            <div className="bg-white/10 border border-[#00D9FF]/30 p-6 rounded-2xl text-sm md:text-base text-white leading-relaxed font-medium whitespace-pre-wrap">
              {slide.right.prompt}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-mono tracking-widest text-[#00D9FF]/70 mb-2">OUTPUT</div>
            <div className="bg-white/10 border border-white/10 p-6 rounded-2xl text-sm md:text-base text-white font-mono leading-relaxed h-full whitespace-pre-wrap flex flex-col justify-center shadow-[0_0_30px_rgba(0,217,255,0.05)]">
              {slide.right.output}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#00D9FF]/20 text-[#00D9FF] text-xs font-mono tracking-widest uppercase text-center font-bold">
          ✓ {slide.right.verdict}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export const FlowchartSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
    <motion.div variants={itemUp} className="mb-12">
      <div className="text-[10px] tracking-[0.3em] text-[#00D9FF] mb-6 font-mono border-l-2 border-[#00D9FF] pl-4 uppercase">
        {slide.tag}
      </div>
      <h2 className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none mb-6">{slide.headline}</h2>
      <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-4xl leading-relaxed tracking-tight">{slide.description}</p>
    </motion.div>

    <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full max-w-5xl mx-auto">
      {/* Global */}
      <motion.div variants={itemUp} className="w-full bg-white/5 border border-white/20 rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-[#00D9FF]/20 transition-colors duration-700" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="text-[#808080] font-mono text-[10px] tracking-widest px-3 py-1 border border-white/10 rounded-sm mb-4 bg-white/5">LEVEL 1: GLOBAL ({slide.flowchart.global.path})</div>
          <div className="text-2xl font-bold mb-4">CLAUDE.MD</div>
          <p className="text-[#A0A0A0] text-sm md:text-base max-w-2xl mb-6 leading-relaxed">{slide.flowchart.global.claude}</p>
          
          <div className="border-t border-white/10 pt-6 w-full flex flex-col items-center">
            <div className="text-[10px] text-[#505050] font-mono tracking-widest mb-3">SKILLS</div>
            <div className="flex gap-2 flex-wrap justify-center mb-4">
              {slide.flowchart.global.skills.tags.map(t => <span key={t} className="px-2 py-1 bg-black text-[#808080] text-xs font-mono rounded-md border border-white/10">{t}</span>)}
            </div>
            <p className="text-[#808080] text-xs md:text-sm max-w-xl italic">{slide.flowchart.global.skills.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Projects */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {slide.flowchart.projects.map((proj, i) => (
          <motion.div key={i} variants={itemUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-start relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-[80px] rounded-full group-hover:bg-[#E8FF47]/20 transition-colors duration-700" />
            <div className="relative z-10">
               <div className="text-[#808080] font-mono text-[10px] tracking-widest px-3 py-1 border border-white/10 rounded-sm mb-4 bg-white/5 w-fit">LEVEL 2: {proj.path}</div>
               <h3 className="text-2xl font-bold mb-4">{proj.name}</h3>
               <p className="text-[#A0A0A0] text-sm md:text-base mb-6 leading-relaxed">{proj.claude}</p>
               
               <div className="border-t border-white/10 pt-6 w-full">
                 <div className="text-[10px] text-[#505050] font-mono tracking-widest mb-3">PROJECT SKILLS</div>
                 <div className="flex gap-2 flex-wrap mb-4">
                   {proj.skills.tags.map(t => <span key={t} className="px-2 py-1 bg-black text-white/70 text-xs font-mono rounded-md border border-[#E8FF47]/30">{t}</span>)}
                 </div>
                 <p className="text-[#808080] text-xs italic">{proj.skills.description}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Merger */}
      <motion.div variants={itemUp} className="w-full bg-[#111] border border-[#00D9FF]/20 rounded-3xl p-8 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,217,255,0.05)]">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D9FF]/5 to-transparent animate-pulse" />
         <div className="relative z-10">
           <div className="text-[#00D9FF] font-mono text-xs tracking-widest font-bold mb-6">▼ MERGED AT RUNTIME ▼</div>
           <p className="text-white text-base md:text-lg mb-6 max-w-3xl mx-auto">{slide.flowchart.merge}</p>
           <div className="w-full h-px bg-white/10 my-6 relative"><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] px-4 text-[#808080] font-bold">+</span></div>
           <div className="text-white/50 text-[10px] font-mono tracking-widest mb-2">YOUR PROMPT</div>
           <p className="text-[#808080] text-sm md:text-base font-light italic max-w-2xl mx-auto">{slide.flowchart.prompt}</p>
         </div>
      </motion.div>
    </div>
  </motion.div>
);
