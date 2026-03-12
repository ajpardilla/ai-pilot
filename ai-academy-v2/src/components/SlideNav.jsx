export default function SlideNav({ cur, total, goTo, go }) {
  return (
    <>
      {/* Progress bar — top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-30">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((cur + 1) / total) * 100}%`,
            background: "linear-gradient(90deg, #10B981, #06B6D4, #EC4899)",
          }}
        />
      </div>

      {/* Slide counter — top right */}
      <div className="fixed top-5 right-7 font-mono text-[10px] text-text-ghost tracking-[0.12em] z-20">
        {String(cur + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Slide number — bottom left */}
      <div className="fixed bottom-7 left-7 font-mono text-[10px] text-text-ghost tracking-[0.15em] z-20">
        {String(cur + 1).padStart(2, "0")}
      </div>

      {/* Dot nav — bottom center */}
      <div className="fixed bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="p-0 border-none cursor-pointer transition-all duration-300"
            style={{
              width: i === cur ? 28 : 5,
              height: 5,
              borderRadius: 2.5,
              background:
                i === cur
                  ? "linear-gradient(90deg, #10B981, #06B6D4)"
                  : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      {cur > 0 && (
        <button
          onClick={() => go(-1)}
          className="fixed left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border-bright bg-transparent text-text-muted flex items-center justify-center cursor-pointer z-20 text-lg hover:border-emerald hover:text-emerald transition-colors"
        >
          ‹
        </button>
      )}
      {cur < total - 1 && (
        <button
          onClick={() => go(1)}
          className="fixed right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border-bright bg-transparent text-text-muted flex items-center justify-center cursor-pointer z-20 text-lg hover:border-emerald hover:text-emerald transition-colors"
        >
          ›
        </button>
      )}
    </>
  );
}
