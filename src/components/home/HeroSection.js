/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.scss";
import { carouselImages, mobileCarouselImages } from "../../libs/jmData";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrevious();
    }
  };

  const handleMouseDown = (event) => {
    setTouchStart(event.clientX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    setTouchEnd(event.clientX);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrevious();
    }
  };

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
  const translateValue = -100 * activeIndex + "%";
  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      ref={carouselRef}
    >
      <div
        className="carousel"
        style={{ transform: `translateX(${translateValue})` }}
      >
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
            alt="carousel"
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
