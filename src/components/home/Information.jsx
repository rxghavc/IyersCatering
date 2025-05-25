import React from 'react';
import bananaLeafImg from '../../assets/images/bananaleafwithfood.jpg';
import samosasImg from '../../assets/images/samosas.jpg';
import sweetsImg from '../../assets/images/sweets.jpg';

const Information = () => {
  return (
    <>
      {/* Top horizontal line divider */}
      <div className="w-full flex justify-center">
        <hr style={{ border: 'none', borderTop: '3px solid #111', width: '75vw', maxWidth: '1200px', margin: '32px 0 0 0', borderRadius: '2px' }} />
      </div>
      <section className="relative w-full">
        {/* Cards section - moved below SVG, increased spacing, added images */}
        <div className="relative z-10 w-full mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-2 sm:px-4 pb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-none p-4 sm:p-8 min-h-[220px] flex flex-col text-center items-center justify-start h-full">
            <img src={bananaLeafImg} alt="Functions & Events" className="object-contain mb-5 sm:mb-7" style={{height: '210px', minWidth: '120px', maxWidth: '3500px'}} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-fira text-black mb-4 sm:mb-6">Functions & Events</h3>
            <p className="text-sm sm:text-base md:text-lg font-fira text-black">Create lasting memories with our tailored catering services for functions and events.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-none p-4 sm:p-8 min-h-[220px] flex flex-col text-center items-center justify-start h-full">
            <img src={samosasImg} alt="Personalised Menus" className="object-contain mb-5 sm:mb-7" style={{height: '210px', minWidth: '120px', maxWidth: '350px'}} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-fira text-black mb-4 sm:mb-6">Personalised Menus Just For You</h3>
            <p className="text-sm sm:text-base md:text-lg font-fira text-black">We work closely with our clients to craft menus that cater to their unique tastes and preferences.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-none p-4 sm:p-8 min-h-[220px] flex flex-col text-center items-center justify-start h-full">
            <img src={sweetsImg} alt="Exceptional Service" className="object-contain mb-5 sm:mb-7" style={{height: '210px', minWidth: '120px', maxWidth: '350px'}} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-fira text-black mb-4 sm:mb-6">Exceptional Service Every Time</h3>
            <p className="text-sm sm:text-base md:text-lg font-fira text-black">Our team goes above and beyond to ensure seamless service and culinary perfection.</p>
          </div>
        </div>
      </section>
      {/* Bottom horizontal line divider */}
      <div className="w-full flex justify-center">
        <hr style={{ border: 'none', borderTop: '3px solid #111', width: '75vw', maxWidth: '1200px', margin: '0 0 32px 0', borderRadius: '2px' }} />
      </div>
    </>
  );
};

export default Information;