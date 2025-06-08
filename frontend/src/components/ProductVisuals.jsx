import { useEffect, useState } from "react";

export default function ProductVisuals({
  images = [],
  className = "",
  leafIcon = true,
  showDots = true,
  sliderHeight = 300,
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    setCurrent(0); // Reset to first image if images change
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className={`relative w-130 mx-auto p-6 ${className}`}>
        <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 rounded shadow-lg">
          No images to display
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-130 mx-auto p-6 ${className}`}>
      {/* Leaf Icon */}
      {leafIcon && (
        <div className="absolute -left-4 top-8 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            viewBox="0 0 24 24"
            className="w-12 h-12"
          ></svg>
        </div>
      )}

      {/* Main Image Slider */}
      <div
        className={`relative h-[${sliderHeight}px] overflow-hidden rounded shadow-lg`}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dotted Decor */}
      {showDots && (
        <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-teal-400 rounded-full" />
          ))}
        </div>
      )}
    </div>
  );
}
