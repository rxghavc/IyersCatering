import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bananaLeafImg from '../../assets/images/rotiwsambhar.jpg';
import samosasImg from '../../assets/images/samosas.jpg';
import laddusImg from '../../assets/images/laddus.jpg';
import drinksImg from '../../assets/images/drinks.jpg';

const carouselImages = [
  { src: bananaLeafImg, alt: 'Banana Leaf with Food' },
  { src: samosasImg, alt: 'Samosas' },
  { src: laddusImg, alt: 'Laddus' },
  { src: drinksImg, alt: 'Drinks' }, // swapped in drinks instead of roti (white image)
];

const HomeHero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Carousel auto-advance
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // changed from 5000 to 8000 for slower auto-advance
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-start pt-0 pb-12 px-0 bg-white">
      {/* Full-width Carousel */}
      <div className="relative w-full aspect-[4/1] max-h-[300px] overflow-hidden shadow-2xl" style={{marginTop: 0}}>
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
      {/* Text under carousel */}
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center mt-8 px-4">
        <p className="text-base md:text-lg text-gray-800 font-fira mb-2">
          <span className="font-extrabold text-black">Welcome to Iyers Catering</span> – A business specialising in preparing authentic and homemade vegetarian Indian food, sweets & savouries for all kind of events, birthdays, family functions. We offer a wide range of delicious and authentic dishes that are perfect for your events and occasions.
        </p>
        <button
          className="btn-gold mt-6 mb-12"
          onClick={() => navigate('/menu')}
        >
          Explore Menu
        </button>
        <p className="text-base md:text-lg text-gray-800 font-fira mb-2 text-center">
          At Iyers, we take pride in delivering exquisite culinary experiences. Our passion for blending flavours and creating unforgettable dishes sets us apart.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
