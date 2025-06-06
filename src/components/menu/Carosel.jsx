import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import breadImg from '../../assets/images/bread.jpg';
import riceImg from '../../assets/images/ricewithpomogranate.jpg';
import paneerImg from '../../assets/images/paneer.jpg';
import bananaLeafImg from '../../assets/images/bananaleafwithfood.jpg';

const carouselImages = [
  { src: breadImg, alt: 'Bread' },
  { src: riceImg, alt: 'Rice with Pomegranate' },
  { src: paneerImg, alt: 'Paneer' },
  { src: bananaLeafImg, alt: 'Banana Leaf with Food' },
];

const MenuCarosel = () => {
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      {/* Carousel container with same aspect ratio and height as Hero.jsx */}
      <div className="relative w-full aspect-[4/1] max-h-[300px] overflow-hidden shadow-2xl">
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
      {/* TV shadow with less aggressive margin */}
      <div className="w-full flex justify-center mt-[-8px] mb-4 pointer-events-none select-none">
        <div className="w-[60%] h-6 bg-gradient-to-b from-black/20 to-transparent rounded-[50%] blur-[2px]" />
      </div>
    </section>
  );
};

export default MenuCarosel;
