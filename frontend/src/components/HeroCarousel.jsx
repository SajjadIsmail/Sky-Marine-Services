import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './HeroCarousel.css';

const slides = [
  {
    type: 'video',
    src: `${process.env.PUBLIC_URL}/images/carousel/mixkit-cargo-ship-arriving-to-container-terminal-30979-hd-ready.mp4`,
    alt: 'Cargo Ship Arriving at Terminal'
  },
  {
    type: 'image',
    image: `${process.env.PUBLIC_URL}/images/carousel/oil-container.jpg`,
    alt: 'Oil Container'
  },
  {
    type: 'image',
    image: `${process.env.PUBLIC_URL}/images/carousel/calypso-cruise-ship.jpeg`,
    alt: 'Calypso Cruise Ship at Rhodes'
  },
  {
    type: 'image',
    image: `${process.env.PUBLIC_URL}/images/carousel/transpotation.jpg`,
    alt: 'Transportation Services'
  },
  {
    type: 'image',
    image: `${process.env.PUBLIC_URL}/images/carousel/vasco-da-gama-ship.jpg`,
    alt: 'Vasco da Gama Ship at Liverpool'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.type === 'video' ? (
              <video
                className="carousel-video"
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div 
                className="carousel-image"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            )}
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <button 
        className="carousel-play-pause" 
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
