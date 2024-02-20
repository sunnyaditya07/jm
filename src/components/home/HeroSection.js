import React, { useEffect, useState } from "react";
import "./HeroSection.scss";
import { carouselImages, mobileCarouselImages } from "../../libs/jmData";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0
        ? isMobile
          ? mobileCarouselImages.length - 1
          : carouselImages.length - 1
        : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex ===
      (isMobile ? mobileCarouselImages.length - 1 : carouselImages.length - 1)
        ? 0
        : prevIndex + 1
    );
  };
  const renderImages = isMobile ? mobileCarouselImages : carouselImages;
  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="prev" onClick={goToPrevious}>
          ❮
        </button>
        <button className="next" onClick={goToNext}>
          ❯
        </button>
        {renderImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === activeIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="indicators">
        {renderImages.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
