"use client";

import { useState, useEffect } from "react";

export default function ProductImageCarousel({ images, title, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const imageList = images && images.length > 0 ? images : ["/placeholder.jpg"];

  useEffect(() => {
    if (imageList.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageList.length);
    }, interval);

    return () => clearInterval(timer);
  }, [imageList.length, interval]);

  return (
    <div className="productImageCarouselWrapper">
      {/* Image Display */}
      <div className="productImageCarousel">
        {imageList.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} - View ${i + 1}`}
            className="productCarouselImage"
            style={{
              opacity: i === index ? 1 : 0,
              position: "absolute",
              inset: 0,
              transition: "opacity 0.6s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Indicators */}
      {imageList.length > 1 && (
        <div className="productImageIndicators">
          {imageList.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
