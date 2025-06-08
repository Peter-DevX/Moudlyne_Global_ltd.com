import { useEffect, useState } from "react";

/**
 * AutoSlider - Reusable slider component.
 * @param {Array} slides - Array of slide objects: { id, image, title, description }
 * @param {number} interval - Time in ms between slides (default: 5000)
 */
export default function AutoSlider({ slides = [], interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides, interval]);

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-[60vh] min-h-[300px] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] max-h-[100vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-2 sm:px-4">
            <h2 className="text-base sm:text-2xl md:text-5xl font-bold">
              {slide.title}
            </h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-lg md:text-xl max-w-xs sm:max-w-2xl">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-2 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-white focus:outline-none transition-colors duration-200 ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
            style={{ opacity: 1 }}
          />
        ))}
      </div>
    </div>
  );
}
