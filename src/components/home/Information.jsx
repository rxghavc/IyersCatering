import React from 'react';
import bananaLeafImg from '../../assets/images/bananaleafwithfood.jpg';
import samosasImg from '../../assets/images/samosas.jpg';
import sweetsImg from '../../assets/images/sweets.jpg';

const Information = () => {
  return (
    <>
      <section className="relative w-full">
        {/* Responsive flex for cards/images */}
        <div className="relative z-10 w-full mx-auto mt-16 flex flex-col md:flex-row gap-6 md:gap-10 px-2 sm:px-4 pb-8 items-stretch">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-none p-4 sm:p-8 min-h-[220px] flex-1 flex flex-col text-center items-center justify-start h-full">
            <img src={bananaLeafImg} alt="Functions & Events" className="mb-5 sm:mb-7 w-full max-w-[350px] md:max-w-full h-auto object-contain" style={{maxHeight: '350px', width: '100%'}} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-fira text-black mb-4 sm:mb-6">Functions & Events</h3>
            <p className="text-sm sm:text-base md:text-lg font-fira text-black">Create lasting memories with our tailored catering services for functions and events.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-none p-4 sm:p-8 min-h-[220px] flex-1 flex flex-col text-center items-center justify-start h-full">
            <img src={samosasImg} alt="Personalised Menus" className="mb-5 sm:mb-7 w-full max-w-[350px] md:max-w-full h-auto object-contain" style={{maxHeight: '350px', width: '100%'}} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-fira text-black mb-4 sm:mb-6">Personalised Menus Just For You</h3>
            <p className="text-sm sm:text-base md:text-lg font-fira text-black">We work closely with our clients to craft menus that cater to their unique tastes and preferences.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-none p-4 sm:p-8 min-h-[220px] flex-1 flex flex-col text-center items-center justify-start h-full">
            <img src={sweetsImg} alt="Exceptional Service" className="mb-5 sm:mb-7 w-full max-w-[350px] md:max-w-full h-auto object-contain" style={{maxHeight: '350px', width: '100%'}} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-fira text-black mb-4 sm:mb-6">Exceptional Service Every Time</h3>
            <p className="text-sm sm:text-base md:text-lg font-fira text-black">Our team goes above and beyond to ensure seamless service and culinary perfection.</p>
          </div>
        </div>
      </section>
      {/* Bottom SVG tilt triangle divider */}
      <div className="w-full" style={{ lineHeight: 0 }}>
        <svg width="100%" height="120" viewBox="0 0 100 6" preserveAspectRatio="none" style={{ display: 'block' }}>
          <polygon points="0,6 0,0 100,0" fill="#fff" />
        </svg>
      </div>
    </>
  );
};

export default Information;