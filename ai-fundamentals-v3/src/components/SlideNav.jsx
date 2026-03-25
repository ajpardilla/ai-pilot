import { motion as Motion } from "framer-motion";

function ThemeIcon({ theme }) {
  return theme === "dark" ? (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 3.25v2.1m0 13.3v2.1m8.75-8.75h-2.1m-13.3 0h-2.1m13.1-6.2-1.48 1.48m-9.24 9.24-1.48 1.48m0-12.2 1.48 1.48m9.24 9.24 1.48 1.48M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M20.4 14.2A8.7 8.7 0 0 1 9.8 3.6a8.7 8.7 0 1 0 10.6 10.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SlideNav({ currentIndex, totalSlides, go, goTo, theme, toggleTheme }) {
  const progressWidth = `${((currentIndex + 1) / totalSlides) * 100}%`;

  return (
    <>
      <div className="slide-progress" aria-hidden>
        <Motion.div
          className="slide-progress-bar"
          animate={{ width: progressWidth }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="slide-toolbar">
        <div className="slide-counter" aria-live="polite">
          <span className="slide-counter-label">SLIDE</span>
          <span>{String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}</span>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="theme-toggle-icon">
            <ThemeIcon theme={theme} />
          </span>
          <span className="theme-toggle-copy">{theme === "dark" ? "Dark" : "Light"} mode</span>
        </button>
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
