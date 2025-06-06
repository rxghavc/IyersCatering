import React from 'react';
import FoodCarosel from '../components/food/FoodCarosel';
import Main from '../components/food/Main';
import ScrollToTopButton from '../components/misc/ScrollToTopButton';
import Footer from '../components/misc/Footer';

const FoodPage = () => (
  <main className="bg-white min-h-screen">
    <FoodCarosel />
    <Main />
    <ScrollToTopButton />
    <Footer />
  </main>
);

export default FoodPage;
