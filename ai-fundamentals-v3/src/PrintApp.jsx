import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { slides } from "./data/slides.js";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import SlideRenderer from "./components/SlideRenderer.jsx";

const expandedSlides = slides.flatMap((slide) => {
  if (slide.type === "tips") {
    return slide.tips.map((_, index) => ({
      slide,
      printVariant: { activeTipIndex: index },
      key: `${slide.id}-tip-${index}`,
    }));
  }

  if (slide.type === "setup") {
    return slide.steps.map((_, index) => ({
      slide,
      printVariant: { activeStepIndex: index },
      key: `${slide.id}-step-${index}`,
    }));
  }

  return [
    {
      slide,
      printVariant: null,
      key: `${slide.id}`,
    },
  ];
});

export default function PrintApp() {
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    document.body.dataset.theme = "dark";
    document.body.dataset.print = "true";

    return () => {
      delete document.body.dataset.print;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="always">
      <main className="print-shell" data-print>
        {expandedSlides.map((entry, index) => (
          <section className="print-page" key={entry.key} data-print-index={index + 1}>
            <AnimatedBackground slideId={entry.slide.id} theme="dark" />
            <div className="slide-stage">
              <SlideRenderer slide={entry.slide} printVariant={entry.printVariant} theme="dark" />
            </div>
          </section>
        ))}
      </main>
    </MotionConfig>
  );
}
