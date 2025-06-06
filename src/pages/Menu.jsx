import React from 'react';
import MenuCarosel from '../components/menu/Carosel';
import Menu from '../components/menu/Menu';
import ScrollToTopButton from '../components/misc/ScrollToTopButton';
import Footer from '../components/misc/Footer';

const MenuPage = () => (
  <main className="bg-white min-h-screen">
    <MenuCarosel />
    <Menu />
    <ScrollToTopButton />
    <Footer />
  </main>
);

export default MenuPage;
