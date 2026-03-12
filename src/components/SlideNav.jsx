export default function SlideNav({ current, total, onPrev, onNext }) {
  return (
    <>
      <div
        className="progress-bar"
        style={{ width: `${(current / total) * 100}%` }}
      />
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-5 z-50">
        <button
          onClick={onPrev}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:border-neon-cyan/30 transition-all cursor-pointer text-lg"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <span className="text-white/50 text-sm font-mono tabular-nums">
          {current} / {total}
        </span>
        <button
          onClick={onNext}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:border-neon-cyan/30 transition-all cursor-pointer text-lg"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </>
  )
}
