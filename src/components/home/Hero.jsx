import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="w-full min-h-[60vh] flex items-center justify-center py-12 px-4 bg-white"
      style={{
        backgroundImage: "url('/src/assets/images/cookingpattern.jpg')",
        backgroundSize: 'auto', // prevent stretching
        backgroundRepeat: 'repeat', // tile the pattern
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center min-h-[40vh] bg-white/95 rounded-lg p-4">
        <h2 className="text-2xl md:text-3xl font-bold font-fira mb-6">
          <span className="text-black">Welcome to </span>
          <span className="text-[color:var(--gold-primary)]">
            Iyers Catering
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-800 font-fira mb-4">
          A business specialising in preparing authentic and homemade vegetarian
          Indian food, sweets & savouries for all kind of events, birthdays,
          family functions. We offer a wide range of delicious and authentic
          dishes that are perfect for your events and occasions.
        </p>
        <p className="text-base md:text-lg text-gray-800 font-fira">
          At Iyers, we take pride in delivering exquisite culinary experiences
          for all your events. Our passion for blending flavours and creating
          unforgettable dishes sets us apart.
        </p>
        <button
          className="btn-gold"
          onClick={() => navigate('/menu')}
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
