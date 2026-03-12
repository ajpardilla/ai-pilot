import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, itemUp, itemReveal } from './SlideComponents';

export const TabbedSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
      <motion.div variants={itemUp} className="mb-12">
        <div className="text-[10px] tracking-[0.3em] text-[#B66DFF] mb-6 font-mono border-l-2 border-[#B66DFF] pl-4 uppercase">
          {slide.tag}
        </div>
        <h2 className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none">{slide.headline}</h2>
      </motion.div>

      <div className="flex-1 flex gap-8">
        {/* Tab Selection List */}
        <motion.div variants={itemUp} className="w-1/3 flex flex-col gap-4">
          {slide.tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`p-6 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden group ${
                activeTab === i 
                  ? 'bg-white/10 border-[#B66DFF]/50 shadow-[0_0_30px_rgba(182,109,255,0.15)]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {activeTab === i && (
                <motion.div 
                  layoutId="activeTabIndicator" 
                  className="absolute inset-0 bg-gradient-to-r from-[#B66DFF]/20 to-transparent pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="flex items-center gap-4 relative z-10">
                <div className={`text-xl font-black font-mono tracking-widest ${activeTab === i ? 'text-[#B66DFF]' : 'text-[#808080]'}`}>
                  0{i + 1}
                </div>
                <h3 className={`text-lg md:text-xl font-bold tracking-tight ${activeTab === i ? 'text-white' : 'text-[#A0A0A0]'}`}>
                  {tab.title}
                </h3>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Active Tab Content Area */}
        <motion.div variants={itemUp} className="w-2/3 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 relative flex flex-col overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full bg-[#B66DFF]/10 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col relative z-10"
            >
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                {slide.tabs[activeTab].title}
              </h3>
              <p className="text-xl text-[#A0A0A0] leading-relaxed tracking-tight mb-8">
                {slide.tabs[activeTab].body}
              </p>
              
              <div className="bg-black border border-white/5 rounded-2xl p-6 shadow-inner flex-1 flex flex-col justify-center">
                {slide.tabs[activeTab].visual.type === 'code' ? (
                  <pre className="text-sm md:text-base font-mono text-[#00D9FF] leading-relaxed whitespace-pre-wrap">
                    {slide.tabs[activeTab].visual.content}
                  </pre>
                ) : (
                  <div className="flex w-full gap-4 items-center">
                     <div className="flex-1 p-6 bg-[#FF3D6B]/5 border border-[#FF3D6B]/20 rounded-xl text-center">
                       <h4 className="text-[#FF3D6B] font-mono tracking-widest text-xs font-bold mb-2">MESSY CONTEXT</h4>
                       <p className="text-[#808080] text-sm">{slide.tabs[activeTab].visual.left.desc}</p>
                     </div>
                     <span className="text-[#505050] text-2xl font-bold font-mono">➡</span>
                     <div className="flex-1 p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20 rounded-xl text-center">
                       <h4 className="text-[#00D9FF] font-mono tracking-widest text-xs font-bold mb-2">CLEAN CONTEXT</h4>
                       <p className="text-[#808080] text-sm">{slide.tabs[activeTab].visual.right.desc}</p>
                     </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const TabbedSectionsSlide = ({ slide }) => {
  const [activeSec, setActiveSec] = useState(0);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12">
      <motion.div variants={itemUp} className="mb-10 text-center flex flex-col items-center">
        <div className="text-[10px] tracking-[0.3em] text-[#00D9FF] mb-6 font-mono border-b-2 border-[#00D9FF] pb-2 uppercase w-fit">
          {slide.tag}
        </div>
        <h2 className="text-5xl md:text-[5vw] font-bold tracking-tighter leading-none mb-6">{slide.headline}</h2>
        <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-4xl tracking-tight leading-relaxed">{slide.intro}</p>
      </motion.div>

      <div className="flex-1 flex flex-col overflow-hidden max-w-5xl mx-auto w-full">
         <motion.div variants={itemUp} className="flex border-b border-white/20 mb-8">
            {slide.sections.map((sec, i) => (
              <button
                key={i}
                onClick={() => setActiveSec(i)}
                className={`flex-1 py-4 text-center font-mono text-sm tracking-widest uppercase relative transition-colors ${activeSec === i ? 'text-white font-bold' : 'text-[#808080] hover:text-[#C0C0C0]'}`}
              >
                {sec.step.split(':')[0]}
                {activeSec === i && (
                  <motion.div 
                    layoutId="setupTabLine" 
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#00D9FF]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
         </motion.div>

         <motion.div variants={itemUp} className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col group">
            <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full bg-[#00D9FF]/5 group-hover:bg-[#00D9FF]/10 transition-colors pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSec}
                initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-1"
              >
                <h3 className="text-3xl font-bold text-white mb-8 tracking-tighter col-span-full border-b border-white/10 pb-4">
                  {slide.sections[activeSec].step}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 flex-1 auto-rows-min overflow-y-auto custom-scrollbar">
                  {slide.sections[activeSec].items.map((item, j) => (
                    <div key={j} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="text-[#00D9FF] font-mono mt-1">▸</div>
                      <div>
                        <div className="font-bold text-lg text-white mb-1 tracking-tight">{item.name}</div>
                        <div className="text-sm text-[#808080] leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 border-t border-[#00D9FF]/20 pt-6">
                  <p className="text-[#00D9FF] font-mono text-xs uppercase tracking-widest text-center">
                     * {slide.sections[activeSec].callout}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
         </motion.div>
      </div>
    </motion.div>
  );
};

export const AssignmentSlide = ({ slide }) => (
  <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full h-full flex flex-col pt-12 pb-12 items-center text-center">
    <div className="text-[10px] tracking-[0.3em] text-[#FF6B35] mb-6 font-mono border-b-[1px] border-[#FF6B35] pb-2 uppercase w-fit inline-block">
      {slide.tag}
    </div>
    
    <motion.h2 variants={itemUp} className="text-[clamp(60px,8vw,120px)] font-black tracking-[-0.04em] leading-none mb-6">
      {slide.headline}
    </motion.h2>
    
    <motion.div variants={itemUp} className="text-[#FF6B35] font-mono text-sm tracking-widest uppercase font-bold border border-[#FF6B35]/30 px-4 py-2 rounded-full mb-8 bg-[#FF6B35]/10 shadow-[0_0_20px_rgba(255,107,53,0.15)]">
      ⏰ Due: {slide.due}
    </motion.div>
    
    <motion.p variants={itemUp} className="text-xl md:text-2xl text-[#A0A0A0] max-w-4xl tracking-tight leading-relaxed mb-12 font-light">
      {slide.body}
    </motion.p>
    
    <div className="max-w-5xl w-full flex flex-col gap-4 text-left">
      {slide.items.map((item, i) => {
        let tierColor = '#808080';
        let bgClass = 'bg-white/5';
        if (item.tier === 'MUST DO') { tierColor = '#FF3366'; bgClass = 'bg-[#FF3366]/10 border-[#FF3366]/30'; }
        else if (item.tier === 'STRETCH') { tierColor = '#E8FF47'; bgClass = 'bg-[#E8FF47]/10 border-[#E8FF47]/30'; }
        else if (item.tier === 'BONUS') { tierColor = '#00D9FF'; bgClass = 'bg-[#00D9FF]/10 border-[#00D9FF]/30'; }
        
        return (
          <motion.div key={i} variants={itemUp} className={`flex items-center gap-6 p-6 rounded-2xl border transition-colors duration-300 hover:bg-white/10 w-full ${bgClass} hover:border-white/40 group`}>
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] w-24 flex-shrink-0" style={{ color: tierColor }}>
              {item.tier}
            </div>
            <div className="text-white md:text-xl font-medium tracking-tight">
              {item.task}
            </div>
            {item.tier === 'MUST DO' && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-8 rounded-full border-2 border-[#FF3366] flex items-center justify-center">
                   <div className="w-3 h-3 rounded-full bg-[#FF3366]" />
                 </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);
