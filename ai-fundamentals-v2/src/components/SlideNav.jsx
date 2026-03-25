export default function SlideNav({ currentIndex, totalSlides, go, goTo, theme, toggleTheme }) {
  return (
    <>
      <div className="slide-progress" aria-hidden>
        <div
          className="slide-progress-bar"
          style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <div className="slide-counter" aria-live="polite">
        {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>

      <div className="slide-dots" aria-label="Go to slide">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`slide-dot${index === currentIndex ? " active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        className="slide-arrow left"
        onClick={() => go(-1)}
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        type="button"
        className="slide-arrow right"
        onClick={() => go(1)}
        disabled={currentIndex === totalSlides - 1}
        aria-label="Next slide"
      >
        ›
      </button>
    </>
  );
}
