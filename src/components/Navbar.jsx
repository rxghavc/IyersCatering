import React from 'react';
import logo from '../assets/images/iyerslogo_notext.jpg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="w-full flex flex-col" style={{ backgroundColor: '#e9e8e7' }}>
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
        {/* Logo and tagline on the left, responsive */}
        <div className="iyers-logo-title pl-8">
          <div className="flex items-center gap-12">
            <img src={logo} alt="Iyer's Catering Logo" className="h-20 w-auto object-contain min-w-[40px]" />
            <span className="iyers-title">IYERS</span>
          </div>
          {/* Tagline: show on sm and up, hide on xs */}
          <span className="iyers-tagline hidden sm:inline font-semibold">Authentic | Home Made | Vegetarian</span>
        </div>
        {/* Links on the right (desktop) */}
        <ul className="hidden lg:flex gap-4 sm:gap-6 md:gap-8 nav-links">
          <li>
            <Link
              to="/"
              className="text-base sm:text-lg font-black font-montserrat relative group nav-link"
              style={{ color: 'var(--gold-secondary)', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-base sm:text-lg font-black font-montserrat relative group nav-link"
              style={{ color: 'var(--gold-secondary)', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-base sm:text-lg font-black font-montserrat relative group nav-link"
              style={{ color: 'var(--gold-secondary)', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-base sm:text-lg font-black font-montserrat relative group nav-link"
              style={{ color: 'var(--gold-secondary)', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger menu icon (mobile/tablet) */}
        <button
          className="menu-toggle flex lg:hidden ml-2 p-0 bg-transparent border-none shadow-none outline-none focus:outline-none items-center justify-center"
          onClick={onMenuClick}
          aria-label="Open menu"
          style={{ color: 'var(--gold-secondary)', background: 'none', border: 'none', boxShadow: 'none' }}
        >
          <FaBars size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
