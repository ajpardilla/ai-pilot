import slides from "./data/slides.js";
import { useReveal } from "./hooks/useReveal.js";
import { useSlideNav } from "./hooks/useSlideNav.js";
import Background from "./components/Background.jsx";
import SlideNav from "./components/SlideNav.jsx";

import TitleSlide from "./slides/TitleSlide.jsx";
import MemeSlide from "./slides/MemeSlide.jsx";
import BigInsightSlide from "./slides/BigInsightSlide.jsx";
import FrameworkSlide from "./slides/FrameworkSlide.jsx";
import ManifestoSlide from "./slides/ManifestoSlide.jsx";
import EvidenceSlide from "./slides/EvidenceSlide.jsx";
import CallToActionSlide from "./slides/CallToActionSlide.jsx";
import RoadmapSlide from "./slides/RoadmapSlide.jsx";
import ComparisonSlide from "./slides/ComparisonSlide.jsx";
import ContextFlowchartSlide from "./slides/ContextFlowchartSlide.jsx";
import ContextExamplesSlide from "./slides/ContextExamplesSlide.jsx";
import ContextInActionSlide from "./slides/ContextInActionSlide.jsx";
import QASlide from "./slides/QASlide.jsx";
import TipsTricksSlide from "./slides/TipsTricksSlide.jsx";
import FullSetupSlide from "./slides/FullSetupSlide.jsx";
import HomeworkSlide from "./slides/HomeworkSlide.jsx";
import CloseSlide from "./slides/CloseSlide.jsx";

function renderSlide(slide, on) {
  const p = { slide, on };
  switch (slide.type) {
    case "title":
      return <TitleSlide on={on} />;
    case "meme-image":
      return <MemeSlide {...p} />;
    case "big-insight":
      return <BigInsightSlide {...p} />;
    case "framework":
      return <FrameworkSlide {...p} />;
    case "manifesto":
      return <ManifestoSlide {...p} />;
    case "evidence":
      return <EvidenceSlide {...p} />;
    case "call-to-action":
      return <CallToActionSlide {...p} />;
    case "roadmap":
      return <RoadmapSlide {...p} />;
    case "comparison":
      return <ComparisonSlide {...p} />;
    case "context-flowchart":
      return <ContextFlowchartSlide {...p} />;
    case "context-examples":
      return <ContextExamplesSlide {...p} />;
    case "context-in-action":
      return <ContextInActionSlide {...p} />;
    case "qa":
      return <QASlide {...p} />;
    case "tips-tricks":
      return <TipsTricksSlide {...p} />;
    case "full-setup":
      return <FullSetupSlide {...p} />;
    case "homework":
      return <HomeworkSlide {...p} />;
    case "close":
      return <CloseSlide {...p} />;
    default:
      return null;
  }
}

export default function App() {
  const { cur, go, goTo, onTouchStart, onTouchEnd } = useSlideNav(slides.length);
  const on = useReveal(cur);
  const slide = slides[cur];

  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      style={{ background: "#05050A" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Background />

      {/* Slide content */}
      <div className="relative z-10 w-full h-full">
        {renderSlide(slide, on)}
      </div>

      <SlideNav cur={cur} total={slides.length} goTo={goTo} go={go} />
    </div>
  );
}
