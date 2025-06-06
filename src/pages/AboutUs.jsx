import React from 'react';
import AboutHero from '../components/about/SpiceCarosel';
import AboutMain from '../components/about/Main';
import ScrollToTopButton from '../components/misc/ScrollToTopButton';
import Footer from '../components/misc/Footer';

const AboutUs = () => {
  return (
    <main className="bg-white min-h-screen">
      <AboutHero />
      <AboutMain />
      {/* You can add more about us content here below the carousel */}
      <ScrollToTopButton />
      <Footer />
    </main>
  );
};

export default AboutUs;
