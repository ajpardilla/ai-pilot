import { useCallback, useEffect, useRef, useState } from "react";

export function useSlideNav(totalSlides) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (nextIndex) => {
      setCurrentIndex(Math.max(0, Math.min(totalSlides - 1, nextIndex)));
    },
    [totalSlides]
  );

  const go = useCallback(
    (delta) => {
      setCurrentIndex((previous) =>
        Math.max(0, Math.min(totalSlides - 1, previous + delta))
      );
    },
    [totalSlides]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        go(1);
      }

      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        go(-1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goTo(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go, goTo, totalSlides]);

  const onTouchStart = useCallback((event) => {
    touchStartX.current = event.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (event) => {
      if (touchStartX.current === null) {
        return;
      }

      const delta = touchStartX.current - event.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        go(delta > 0 ? 1 : -1);
      }

      touchStartX.current = null;
    },
    [go]
  );

  return {
    currentIndex,
    go,
    goTo,
    onTouchStart,
    onTouchEnd,
  };
}
