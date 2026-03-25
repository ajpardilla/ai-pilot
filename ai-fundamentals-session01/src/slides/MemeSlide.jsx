import { fade } from "../components/Animate.jsx";

export default function MemeSlide({ slide, on }) {
  return (
    <div className="flex justify-center items-center h-full p-[2vh_4vw]">
      <img
        src={slide.image}
        alt=""
        className="max-h-[92vh] max-w-[90vw] object-contain rounded-lg"
        style={{
          ...fade(on, 0.1),
          boxShadow: "0 0 60px rgba(16,185,129,0.08)",
        }}
      />
    </div>
  );
}
