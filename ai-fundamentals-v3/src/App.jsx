import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { slides, TOTAL_SLIDES } from "./data/slides.js";
import { useSlideNav } from "./hooks/useSlideNav.js";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import SlideNav from "./components/SlideNav.jsx";
import SlideRenderer from "./components/SlideRenderer.jsx";

const THEME_KEY = "ai-fundamentals-v3-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  return storedTheme === "light" ? "light" : "dark";
}

export default function App() {
  const { currentIndex, go, goTo, onTouchStart, onTouchEnd } = useSlideNav(TOTAL_SLIDES);
  const currentSlide = slides[currentIndex];
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    delete document.body.dataset.print;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <main className="app-shell" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <AnimatedBackground slideId={currentSlide.id} theme={theme} />

      <AnimatePresence mode="wait">
        <Motion.div
          key={currentSlide.id}
          className="slide-stage"
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <SlideRenderer slide={currentSlide} theme={theme} />
        </Motion.div>
      </AnimatePresence>

      <SlideNav
        currentIndex={currentIndex}
        totalSlides={TOTAL_SLIDES}
        go={go}
        goTo={goTo}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </main>
  );
}
