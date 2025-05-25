import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import spice1Img from '../../assets/images/spice-1.jpg';
import spice2Img from '../../assets/images/spice-2.jpg';
import spice3Img from '../../assets/images/spice-3.jpg';
import spice4Img from '../../assets/images/spice-4.jpg';

const carouselImages = [
  { src: spice1Img, alt: 'Spice 1' },
  { src: spice2Img, alt: 'Spice 2' },
  { src: spice3Img, alt: 'Spice 3' },
  { src: spice4Img, alt: 'Spice 4' },
];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  // Carousel auto-advance
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-start pt-32 pb-12 px-0 bg-white">
      {/* Full-width Carousel */}
      <div className="relative w-full aspect-[4/1] max-h-[480px] overflow-hidden shadow-2xl" style={{marginTop: 0}}>
        {carouselImages.map((img, idx) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className={`absolute left-0 top-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            draggable="false"
          />
        ))}
        {/* Left Arrow */}
        <button
          className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 focus:outline-none focus:ring-0"
          style={{color: 'var(--gold-primary)', background: 'none', border: 'none', boxShadow: 'none', outline: 'none'}}
          onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
          aria-label="Previous image"
        >
          <FaChevronLeft size={26} style={{strokeWidth: 1.5}} />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 focus:outline-none focus:ring-0"
          style={{color: 'var(--gold-primary)', background: 'none', border: 'none', boxShadow: 'none', outline: 'none'}}
          onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
          aria-label="Next image"
        >
          <FaChevronRight size={26} style={{strokeWidth: 1.5}} />
        </button>
      </div>
      {/* TV-style shadow under carousel */}
      <div className="w-full flex justify-center -mt-4 mb-8 pointer-events-none select-none">
        <div style={{
          width: '60%',
          height: '32px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.01) 100%)',
          filter: 'blur(2px)',
        }} />
      </div>
    </section>
  );
};

export default AboutHero;
