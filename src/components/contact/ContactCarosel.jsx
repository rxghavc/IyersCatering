import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import contact1Img from '../../assets/images/contact-1.jpg';
import contact2Img from '../../assets/images/contact-2.jpg';
import contact3Img from '../../assets/images/contact-3.jpg';
import contact4Img from '../../assets/images/contact-4.jpg';

const carouselImages = [
  { src: contact1Img, alt: 'Spice 1' },
  { src: contact2Img, alt: 'Spice 2' },
  { src: contact3Img, alt: 'Spice 3' },
  { src: contact4Img, alt: 'Spice 4' },
];

const ContactCarosel = () => {
  const [current, setCurrent] = useState(0);

  // Carousel auto-advance
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      {/* Carousel container with same aspect ratio and height as Hero.jsx */}
      <div className="relative w-full aspect-[4/1] max-h-[400px] overflow-hidden shadow-2xl">
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

export default ContactCarosel;
