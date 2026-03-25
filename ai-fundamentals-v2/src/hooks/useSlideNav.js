import { useCallback, useEffect, useRef, useState } from "react";

function getInitialSlide(totalSlides) {
  const params = new URLSearchParams(window.location.search);
  const slide = parseInt(params.get("slide"), 10);
  if (!Number.isNaN(slide) && slide >= 1 && slide <= totalSlides) {
    return slide - 1;
  }
  return 0;
}

function updateURL(index) {
  const slideNum = index + 1;
  const url = new URL(window.location);
  url.searchParams.set("slide", slideNum);
  window.history.replaceState(null, "", url);
}

export function useSlideNav(totalSlides) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    getInitialSlide(totalSlides)
  );
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (nextIndex) => {
      const clamped = Math.max(0, Math.min(totalSlides - 1, nextIndex));
      setCurrentIndex(clamped);
      updateURL(clamped);
    },
    [totalSlides]
  );

  const go = useCallback(
    (delta) => {
      setCurrentIndex((previous) => {
        const next = Math.max(0, Math.min(totalSlides - 1, previous + delta));
        updateURL(next);
        return next;
      });
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
