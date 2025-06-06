import React from 'react';
import Hero from '../components/home/Hero';
import Information from '../components/home/Information';
import Contact from '../components/home/Contact';
import ScrollToTopButton from '../components/misc/ScrollToTopButton';
import Footer from '../components/misc/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Information />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Home;
